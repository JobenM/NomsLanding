#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_PUBLIC="$SCRIPT_DIR/../NomsAI/server/public"

echo "→ Building Astro site..."
cd "$SCRIPT_DIR"
npm run build

echo "→ Copying to server/public..."
# Keep privacy/terms/data-deletion HTML files that live in the server directly
# We copy everything from dist/ into public/, Astro output takes precedence
cp -r dist/. "$SERVER_PUBLIC/"

echo "→ Deploying to Fly.io..."
cd "$SCRIPT_DIR/../NomsAI/server"
fly deploy

echo "✓ Done — https://nomsai.app is live"
