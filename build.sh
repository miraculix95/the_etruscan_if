#!/bin/bash
# Build script: inlines external JS back into index.html for single-file distribution.
# Development: edit index.html + scenes.js + encyclopedia.js separately
# Production: run ./build.sh → dist/index.html (single self-contained file)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$SCRIPT_DIR/index.html"
DIST_DIR="$SCRIPT_DIR/dist"
OUT="$DIST_DIR/index.html"

mkdir -p "$DIST_DIR"

# Inline all external script files
awk '
  /<script src="[^"]+\.js"><\/script>/ {
    match($0, /src="([^"]+)"/, arr)
    file = "'"$SCRIPT_DIR"'/" arr[1]
    print "<script>"
    while ((getline line < file) > 0) print line
    close(file)
    print "</script>"
    next
  }
  { print }
' "$SRC" > "$OUT"

echo "Built: $OUT ($(wc -c < "$OUT" | tr -d ' ') bytes)"
