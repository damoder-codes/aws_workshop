#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEST_DIR="/workspace/creative-dual-dashboards"

if [ -d "$DEST_DIR/.git" ]; then
  echo "Standalone repo already exists at $DEST_DIR"
  exit 0
fi

rm -rf "$DEST_DIR"
mkdir -p "$DEST_DIR"
cp -R "$SRC_DIR"/. "$DEST_DIR"/

cd "$DEST_DIR"
rm -rf node_modules dist

git init -b main >/dev/null
git add .
git commit -m "Initial commit: GainQuest + Finley dashboards" >/dev/null

echo "Created standalone repo at: $DEST_DIR"
echo "Next steps:"
echo "  cd $DEST_DIR"
echo "  npm install"
echo "  npm run dev"
