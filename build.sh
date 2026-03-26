#!/bin/bash
# Build script: inlines scenes.js back into index.html for single-file distribution.
# Development: edit index.html + scenes.js separately
# Production: run ./build.sh → dist/index.html (single self-contained file)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$SCRIPT_DIR/index.html"
SCENES="$SCRIPT_DIR/scenes.js"
DIST_DIR="$SCRIPT_DIR/dist"
OUT="$DIST_DIR/index.html"

mkdir -p "$DIST_DIR"

awk -v scenesfile="$SCENES" '
  /<script src="scenes\.js"><\/script>/ {
    print "<script>"
    while ((getline line < scenesfile) > 0) print line
    close(scenesfile)
    print "</script>"
    next
  }
  { print }
' "$SRC" > "$OUT"

echo "Built: $OUT ($(wc -c < "$OUT" | tr -d ' ') bytes)"
