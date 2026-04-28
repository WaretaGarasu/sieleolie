#!/usr/bin/env bash
# =============================================================================
# Site build — regenerates the served (distribution) files from source/.
#
# ARCHITECTURE
#   source/                    ← TRUTH (you edit here)
#     index.html               readable home
#     404.html                 readable 404
#     projects/*.html          readable case studies
#     style.css                readable CSS
#     script.js                readable JS
#     fonts/, img/, site.webmanifest    binary assets (no build)
#
#   index.html, 404.html, projects/*.html   ← BUILT (minified, served live)
#   source/style.min.css, source/script.min.js  ← BUILT outputs
#
# WORKFLOW
#   * Make all edits inside source/.
#   * Run `tools/build.sh` to regenerate the distribution.
#   * Push. Cloudflare Pages serves whatever's at the root + projects/ + source/.
#
# DEFAULT RUN  (./tools/build.sh)
#   minifies CSS, JS, and HTML — the everyday rebuild.
#
# OPT-IN FLAGS
#   --png    losslessly re-encode every PNG under source/img/ (slow; rare).
#   --all    everything: CSS + JS + HTML + PNG.
#   -h       this help.
#
# REQUIREMENTS (install once)
#   pip install --break-system-packages csscompressor pyoxipng
#   npm install -g terser html-minifier-terser   (or rely on npx --yes)
# =============================================================================
set -euo pipefail

# Always operate from the repo root, regardless of where the script was invoked.
# Script lives at <repo>/tools/build.sh — cd up one level to reach the root.
cd "$(dirname "$0")/.."

DO_PNG=false
for arg in "$@"; do
  case "$arg" in
    --png)  DO_PNG=true ;;
    --all)  DO_PNG=true ;;
    -h|--help)
      grep -E '^#( |$)' "$0" | sed 's/^# \?//'
      exit 0 ;;
    *)
      echo "Unknown option: $arg" >&2
      echo "Run with -h for help." >&2
      exit 2 ;;
  esac
done

# -----------------------------------------------------------------------------
# Pre-flight: every readable HTML source must exist. Fail loud rather than
# silently shipping stale built output if a source went missing.
# -----------------------------------------------------------------------------
required=(
  source/index.html
  source/404.html
  source/style.css
  source/script.js
)
# Add any project case-studies that exist; whatever's in source/projects/ ships.
mapfile -t case_sources < <(find source/projects -maxdepth 1 -name '*.html' 2>/dev/null | sort)
required+=("${case_sources[@]}")

missing=()
for f in "${required[@]}"; do
  [ -f "$f" ] || missing+=("$f")
done
if [ "${#missing[@]}" -gt 0 ]; then
  echo "✗ Missing required source file(s):" >&2
  printf '   %s\n' "${missing[@]}" >&2
  exit 1
fi

# -----------------------------------------------------------------------------
# CSS  — source/style.css → source/style.min.css
# -----------------------------------------------------------------------------
echo "→ Minifying CSS"
python3 - <<'PY'
import csscompressor
src = open('source/style.css', encoding='utf-8').read()
mn = csscompressor.compress(src, max_linelen=0)
open('source/style.min.css', 'w', encoding='utf-8').write(mn)
print(f"  source/style.css: {len(src):,} → source/style.min.css: {len(mn):,} ({len(mn)/len(src)*100:.1f}%)")
PY

# -----------------------------------------------------------------------------
# JS  — source/script.js → source/script.min.js
# -----------------------------------------------------------------------------
echo "→ Minifying JS"
npx --yes terser source/script.js \
  --compress passes=2 \
  --mangle \
  --output source/script.min.js
src_size=$(wc -c < source/script.js)
out_size=$(wc -c < source/script.min.js)
printf "  source/script.js: %d → source/script.min.js: %d (%.1f%%)\n" \
  "$src_size" "$out_size" "$(awk "BEGIN { printf \"%.1f\", $out_size * 100 / $src_size }")"

# -----------------------------------------------------------------------------
# HTML  — source/<page>.html → <page>.html  (root)
# Every readable HTML file under source/ (top-level + projects/) gets minified
# and written to its mirror path at the repo root.
# -----------------------------------------------------------------------------
echo "→ Building HTML  (source/ → root)"
mkdir -p projects

build_html() {
  local src="$1"             # e.g. source/index.html or source/projects/eolietech.html
  local dst="${src#source/}" # strip the source/ prefix to get the public path
  local before after
  before=$(wc -c < "$src")
  npx --yes html-minifier-terser "$src" \
    --collapse-whitespace \
    --conservative-collapse \
    --remove-comments \
    --remove-redundant-attributes \
    --remove-empty-attributes \
    --remove-script-type-attributes \
    --remove-style-link-type-attributes \
    --use-short-doctype \
    --minify-css true \
    --minify-js true \
    --decode-entities \
    --sort-attributes \
    --sort-class-name \
    -o "$dst"
  after=$(wc -c < "$dst")
  printf "  %-40s  %6d  →  %-32s  %6d\n" "$src" "$before" "$dst" "$after"
}

build_html source/index.html
build_html source/404.html
for f in source/projects/*.html; do
  [ -e "$f" ] || continue
  build_html "$f"
done

# -----------------------------------------------------------------------------
# PNG  — opt-in. Lossless re-encode in place under source/img/.
# -----------------------------------------------------------------------------
if $DO_PNG; then
  echo "→ Re-encoding PNGs losslessly"
  python3 - <<'PY'
import oxipng, os
total_before = total_after = 0
for f in sorted(os.listdir('source/img')):
    if not f.endswith('.png'): continue
    p = f'source/img/{f}'
    before = os.path.getsize(p)
    oxipng.optimize(p, level=6, strip=oxipng.StripChunks.safe())
    after = os.path.getsize(p)
    total_before += before
    total_after += after
    print(f"  {p}: {before:,} → {after:,}")
if total_before:
    print(f"  TOTAL: {total_before:,} → {total_after:,} ({total_after/total_before*100:.1f}%)")
PY
fi

echo "✔ Build complete"
