#!/bin/sh
# Publish this folder to GitHub Pages via the sonysaimon/web-design repo.
# The site appears at https://web.soichirosaimon.com/$SLUG/ a minute or two after pushing.
set -e
SLUG="beach-ave-bar-and-grill"
SRC="$(cd "$(dirname "$0")" && pwd)"
REPO="$HOME/web-design"
if [ ! -d "$REPO/.git" ]; then
  git clone https://github.com/sonysaimon/web-design.git "$REPO"
fi
cd "$REPO"
git pull --ff-only
mkdir -p sites/$SLUG
rsync -a --delete --exclude '.git' --exclude 'deploy.sh' --exclude '.DS_Store' "$SRC/" sites/$SLUG/
git add sites/$SLUG
if git diff --cached --quiet; then echo "Nothing changed."; exit 0; fi
git commit -m "Update $SLUG site" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push
echo "Pushed. Live in ~2 min at https://web.soichirosaimon.com/$SLUG/"
