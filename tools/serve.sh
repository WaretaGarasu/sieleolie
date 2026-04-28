#!/usr/bin/env bash
# =============================================================================
# Local dev server for this site.
#
# Why this exists: every internal asset path in this site is absolute
# (/source/style.min.css, etc.) so files MUST be served by an HTTP server, not
# opened via file://. This script picks the first server available on your
# machine and serves the repo root at http://localhost:8000.
#
# Usage:
#   tools/serve.sh           → http://localhost:8000
#   tools/serve.sh 3000      → http://localhost:3000
#   tools/serve.sh -h        → this help
# =============================================================================
set -euo pipefail

# Always serve from the repo root, regardless of where the script was invoked.
cd "$(dirname "$0")/.."

PORT="${1:-8000}"
case "$PORT" in
  -h|--help) grep -E '^#( |$)' "$0" | sed 's/^# \?//'; exit 0 ;;
esac

URL="http://localhost:${PORT}"
echo "→ Serving $(pwd) at $URL"
echo "  (Ctrl-C to stop)"
echo

# Pick the first server we can find. Order: python3 (likely available), python,
# Node's `serve`, then PHP. All bind to 127.0.0.1 only — no LAN exposure.
if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT" --bind 127.0.0.1
elif command -v python >/dev/null 2>&1; then
  exec python -m http.server "$PORT" --bind 127.0.0.1
elif command -v npx >/dev/null 2>&1; then
  exec npx --yes serve --listen "127.0.0.1:${PORT}" --no-clipboard .
elif command -v php >/dev/null 2>&1; then
  exec php -S "127.0.0.1:${PORT}"
else
  echo "✗ No local server found. Install one of: python3, node (npx), php." >&2
  exit 1
fi
