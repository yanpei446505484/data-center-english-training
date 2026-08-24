#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
model_dir="${1:-}"

target="$root_dir/public/kokoro"
mkdir -p "$target/voices"
curl -L --fail --retry 3 "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js" -o "$target/kokoro.web.js"
curl -L --fail --retry 3 \
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1/dist/ort-wasm-simd-threaded.jsep.wasm" \
  -o "$target/ort-wasm-simd-threaded.jsep.wasm"
curl -L --fail --retry 3 \
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1/dist/ort-wasm-simd-threaded.jsep.mjs" \
  -o "$target/ort-wasm-simd-threaded.jsep.mjs"

if [[ -n "$model_dir" && -f "$model_dir/voices.bin" ]]; then
  # The multilingual archive stores all 53 voice embeddings in speaker order.
  dd if="$model_dir/voices.bin" of="$target/voices/af_sarah.bin" bs=522240 skip=9 count=1 status=none
  dd if="$model_dir/voices.bin" of="$target/voices/bf_emma.bin" bs=522240 skip=21 count=1 status=none
else
  voice_base="https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/voices"
  curl -L --fail --retry 3 "$voice_base/af_sarah.bin" -o "$target/voices/af_sarah.bin"
  curl -L --fail --retry 3 "$voice_base/bf_emma.bin" -o "$target/voices/bf_emma.bin"
fi

perl -0pi -e 's#const A=`https://huggingface\.co/onnx-community/Kokoro-82M-v1\.0-ONNX/resolve/main/voices/\$\{e\}\.bin`;#const A=new URL(`voices/\${e}.bin`,import.meta.url).href;#g' "$target/kokoro.web.js"
perl -0pi -e 's#allowLocalModels:!\(s\|\|i\),localModelPath:h\?n\.join\(m,b\):b#allowLocalModels:!0,localModelPath:h?n.join(m,b):new URL(".",import.meta.url).href#g' "$target/kokoro.web.js"

test "$(stat -c%s "$target/kokoro.web.js")" -gt 2000000
test "$(stat -c%s "$target/ort-wasm-simd-threaded.jsep.wasm")" -gt 10000000
test "$(stat -c%s "$target/ort-wasm-simd-threaded.jsep.mjs")" -gt 40000
node "$root_dir/scripts/kokoro-smoke.cjs"
