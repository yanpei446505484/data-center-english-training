#!/usr/bin/env python3
"""Generate compact Kokoro audio sprites for every built-in Chinese translation."""

from __future__ import annotations

import array
import gc
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

import sherpa_onnx


ROOT = Path(__file__).resolve().parents[1]
MODEL_DIR = Path(os.environ.get("KOKORO_MODEL_DIR", ""))
TARGET = ROOT / "public" / "audio" / "zh"
BUILD_TARGET = ROOT / "public" / "audio" / ".zh-build"
MANIFEST_PATH = ROOT / "public" / "audio" / "manifest.json"
ZH_MANIFEST_PATH = ROOT / "public" / "audio" / "zh-manifest.json"
SAMPLE_RATE = 24_000
SPEAKER_ID = 46  # zf_xiaobei
CHUNK_SECONDS = 180
SILENCE_SECONDS = 0.18


def fail(message: str) -> None:
    raise SystemExit(f"Kokoro Chinese generation failed: {message}")


def validate_model() -> None:
    if not str(MODEL_DIR):
        fail("set KOKORO_MODEL_DIR to the extracted kokoro-multi-lang-v1_0 directory")
    required = ("model.onnx", "voices.bin", "tokens.txt", "lexicon-zh.txt", "espeak-ng-data")
    missing = [name for name in required if not (MODEL_DIR / name).exists()]
    if missing:
        fail(f"model directory is incomplete: {', '.join(missing)}")
    if (MODEL_DIR / "model.onnx").stat().st_size < 300_000_000:
        fail("model.onnx is truncated")
    if shutil.which("ffmpeg") is None:
        fail("ffmpeg is required")


def export_corpus() -> list[str]:
    with tempfile.TemporaryDirectory(prefix="dc-audio-corpus-") as temp_dir:
        corpus_path = Path(temp_dir) / "corpus.json"
        subprocess.run(
            ["node", str(ROOT / "scripts" / "export-audio-corpus.mjs"), str(corpus_path)],
            cwd=ROOT,
            check=True,
        )
        corpus = json.loads(corpus_path.read_text(encoding="utf-8"))
    texts = corpus["chinese"]
    if len(texts) < 2_500:
        fail(f"unexpected Chinese corpus size: {len(texts)}")
    return texts


def create_tts() -> sherpa_onnx.OfflineTts:
    kokoro = sherpa_onnx.OfflineTtsKokoroModelConfig(
        model=str(MODEL_DIR / "model.onnx"),
        voices=str(MODEL_DIR / "voices.bin"),
        tokens=str(MODEL_DIR / "tokens.txt"),
        data_dir=str(MODEL_DIR / "espeak-ng-data"),
        lexicon=str(MODEL_DIR / "lexicon-zh.txt"),
    )
    model = sherpa_onnx.OfflineTtsModelConfig(
        kokoro=kokoro,
        num_threads=max(1, min(4, os.cpu_count() or 1)),
        debug=False,
        provider="cpu",
    )
    return sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=model))


def to_pcm(samples: list[float]) -> array.array:
    pcm = array.array("h", (round(max(-1.0, min(1.0, value)) * 32767) for value in samples))
    if sys.byteorder != "little":
        pcm.byteswap()
    return pcm


def encode_chunk(index: int, pcm: array.array) -> str:
    name = f"zh-{index:03d}.mp3"
    output = BUILD_TARGET / name
    subprocess.run(
        [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-f", "s16le", "-ar", str(SAMPLE_RATE), "-ac", "1", "-i", "pipe:0",
            "-codec:a", "libmp3lame", "-b:a", "64k", str(output),
        ],
        input=pcm.tobytes(),
        check=True,
    )
    if output.stat().st_size < 1_000:
        fail(f"invalid audio sprite: {name}")
    return f"audio/zh/{name}"


def main() -> None:
    validate_model()
    texts = export_corpus()
    base_manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    manifest = {
        "version": 1,
        "engine": "kokoro-multi-lang-v1_0",
        "baseSpeed": base_manifest.get("baseSpeed", 145),
        "items": {},
    }

    shutil.rmtree(BUILD_TARGET, ignore_errors=True)
    BUILD_TARGET.mkdir(parents=True)
    tts = create_tts()
    if tts.sample_rate != SAMPLE_RATE or tts.num_speakers < 53:
        fail(f"unexpected model metadata: {tts.sample_rate} Hz, {tts.num_speakers} speakers")

    silence = array.array("h", [0]) * round(SAMPLE_RATE * SILENCE_SECONDS)
    max_samples = SAMPLE_RATE * CHUNK_SECONDS
    buffer = array.array("h")
    pending: list[tuple[str, float, float]] = []
    chunk_index = 0
    total_bytes = 0

    def flush() -> None:
        nonlocal buffer, pending, chunk_index, total_bytes
        if not pending:
            return
        relative_path = encode_chunk(chunk_index, buffer)
        total_bytes += (BUILD_TARGET / Path(relative_path).name).stat().st_size
        for text, start, duration in pending:
            manifest["items"][f"zh\0{text}"] = {
                "path": relative_path,
                "start": round(start, 6),
                "duration": round(duration, 6),
            }
        print(f"zh sprite {chunk_index:03d}: {len(pending)} phrases", flush=True)
        chunk_index += 1
        buffer = array.array("h")
        pending = []

    for index, text in enumerate(texts, start=1):
        generated = tts.generate(text, sid=SPEAKER_ID, speed=1.0)
        pcm = to_pcm(generated.samples)
        if buffer and len(buffer) + len(pcm) + len(silence) > max_samples:
            flush()
        start = len(buffer) / SAMPLE_RATE
        duration = len(pcm) / SAMPLE_RATE
        buffer.extend(pcm)
        buffer.extend(silence)
        pending.append((text, start, duration))
        if index % 25 == 0 or index == len(texts):
            print(f"zh: {index}/{len(texts)}", flush=True)
    flush()

    del tts
    gc.collect()
    shutil.rmtree(TARGET, ignore_errors=True)
    BUILD_TARGET.rename(TARGET)
    temporary_manifest = ZH_MANIFEST_PATH.with_suffix(".json.new")
    temporary_manifest.write_text(
        json.dumps(manifest, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    temporary_manifest.replace(ZH_MANIFEST_PATH)
    print(
        f"Generated {len(texts)} Kokoro Chinese clips in {chunk_index} sprites "
        f"({total_bytes / 1024 / 1024:.1f} MiB).",
        flush=True,
    )


if __name__ == "__main__":
    main()
