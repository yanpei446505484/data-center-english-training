#!/usr/bin/env python3
"""Generate deterministic, browser-safe PCM WAV assets for every built-in phrase."""

from __future__ import annotations

import array
import gc
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import sys
import wave

import sherpa_onnx


ROOT = Path(__file__).resolve().parents[1]
SEED = ROOT / "src" / "data" / "seed.ts"
TARGET = ROOT / "public" / "audio"
BUILD_TARGET = ROOT / "public" / ".audio-build"
MODEL_DIR = Path(os.environ.get("KOKORO_MODEL_DIR", ""))
BASE_SPEED = 145
SENTENCE_PATTERN = re.compile(r"\bs\(\s*'[^']+'\s*,\s*'((?:\\.|[^'])+)'\s*,")
WORD_PATTERN = re.compile(r"[A-Za-z]+(?:['’][A-Za-z]+)?")

VOICES = (
    {
        "voice_id": "en/en-rp",
        "folder": "en-rp",
        "speaker_id": 21,  # bf_emma
        "lexicon": "lexicon-gb-en.txt",
    },
    {
        "voice_id": "en/en-us",
        "folder": "en-us",
        "speaker_id": 9,  # af_sarah
        "lexicon": "lexicon-us-en.txt",
    },
)


def fail(message: str) -> None:
    raise SystemExit(f"Kokoro audio generation failed: {message}")


def validate_model() -> None:
    if not str(MODEL_DIR):
        fail("set KOKORO_MODEL_DIR to the extracted kokoro-multi-lang-v1_0 directory")
    required = (
        "model.onnx",
        "voices.bin",
        "tokens.txt",
        "lexicon-gb-en.txt",
        "lexicon-us-en.txt",
        "lexicon-zh.txt",
        "espeak-ng-data",
    )
    missing = [name for name in required if not (MODEL_DIR / name).exists()]
    if missing:
        fail(f"model directory is incomplete: {', '.join(missing)}")
    if (MODEL_DIR / "model.onnx").stat().st_size < 300_000_000:
        fail("model.onnx is truncated")


def extract_texts() -> list[str]:
    source = SEED.read_text(encoding="utf-8")
    sentences = [
        match.group(1).replace(r"\'", "'").replace(r"\\", "\\")
        for match in SENTENCE_PATTERN.finditer(source)
    ]
    if "Good morning, everyone." not in sentences:
        sentences.append("Good morning, everyone.")
    words = [word for sentence in sentences for word in WORD_PATTERN.findall(sentence)]
    texts = list(dict.fromkeys((*sentences, *words)))
    if len(sentences) < 50 or len(texts) < 150:
        fail(f"unexpected training corpus size: {len(sentences)} sentences, {len(texts)} total texts")
    return texts


def create_tts(lexicon: str) -> sherpa_onnx.OfflineTts:
    kokoro = sherpa_onnx.OfflineTtsKokoroModelConfig(
        model=str(MODEL_DIR / "model.onnx"),
        voices=str(MODEL_DIR / "voices.bin"),
        tokens=str(MODEL_DIR / "tokens.txt"),
        data_dir=str(MODEL_DIR / "espeak-ng-data"),
        lexicon=",".join((str(MODEL_DIR / lexicon), str(MODEL_DIR / "lexicon-zh.txt"))),
    )
    model = sherpa_onnx.OfflineTtsModelConfig(
        kokoro=kokoro,
        num_threads=max(1, min(4, os.cpu_count() or 1)),
        debug=False,
        provider="cpu",
    )
    return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=model))


def write_pcm_wav(path: Path, samples: list[float], sample_rate: int) -> int:
    pcm = array.array("h", (round(max(-1.0, min(1.0, value)) * 32767) for value in samples))
    if sys.byteorder != "little":
        pcm.byteswap()
    with wave.open(str(path), "wb") as output:
        output.setnchannels(1)
        output.setsampwidth(2)
        output.setframerate(sample_rate)
        output.writeframes(pcm.tobytes())
    with path.open("rb") as audio_file:
        header = audio_file.read(12)
    if len(pcm) == 0 or header[:4] != b"RIFF" or header[8:12] != b"WAVE":
        fail(f"invalid WAV generated for {path.name}")
    return path.stat().st_size


def main() -> None:
    validate_model()
    texts = extract_texts()
    manifest: dict[str, object] = {
        "version": 2,
        "engine": "kokoro-multi-lang-v1_0",
        "baseSpeed": BASE_SPEED,
        "sampleRate": 24000,
        "items": {},
    }
    shutil.rmtree(BUILD_TARGET, ignore_errors=True)
    BUILD_TARGET.mkdir(parents=True)
    total_bytes = 0

    for voice in VOICES:
        voice_target = BUILD_TARGET / str(voice["folder"])
        voice_target.mkdir()
        tts = create_tts(str(voice["lexicon"]))
        if tts.sample_rate != 24000 or tts.num_speakers < 53:
            fail(f"unexpected model metadata: {tts.sample_rate} Hz, {tts.num_speakers} speakers")
        for index, text in enumerate(texts, start=1):
            key = f"{voice['voice_id']}\0{text}"
            name = hashlib.sha256(key.encode("utf-8")).hexdigest()[:20] + ".wav"
            generated = tts.generate(text, sid=int(voice["speaker_id"]), speed=1.0)
            total_bytes += write_pcm_wav(voice_target / name, generated.samples, generated.sample_rate)
            manifest["items"][key] = f"audio/{voice['folder']}/{name}"
            if index % 25 == 0 or index == len(texts):
                print(f"{voice['folder']}: {index}/{len(texts)}", flush=True)
        del tts
        gc.collect()

    (BUILD_TARGET / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    shutil.rmtree(TARGET, ignore_errors=True)
    BUILD_TARGET.rename(TARGET)
    print(
        f"Generated and validated {len(texts) * len(VOICES)} Kokoro WAV files "
        f"for {len(texts)} unique phrases and words ({total_bytes / 1024 / 1024:.1f} MiB)."
    )


if __name__ == "__main__":
    main()
