#!/usr/bin/env bash
set -uo pipefail
cd /home/cawzkf/portfolio

REPO="cawzkf.github.io"
OWNER="cawzkf"

# 1) local repo
if [ ! -d .git ]; then
  git init -q
fi
git checkout -q -B main
git add -A
git -c user.name="$(git config --global user.name)" \
    -c user.email="$(git config --global user.email)" \
    commit -q -m "portfolio: terminal-themed bilingual site (CPS / Digital Twin / AAS)" || echo "INFO: nothing to commit"

# 2) token via git's standard credential mechanism (not printed)
TOKEN=$(printf 'protocol=https\nhost=github.com\n\n' | git credential fill 2>/dev/null | sed -n 's/^password=//p' | head -1)
if [ -z "${TOKEN:-}" ]; then echo "RESULT=NO_TOKEN"; exit 0; fi

LOGIN=$(curl -s -H "Authorization: token $TOKEN" https://api.github.com/user \
        | sed -n 's/.*"login": *"\([^"]*\)".*/\1/p' | head -1)
if [ -z "$LOGIN" ]; then echo "RESULT=BAD_TOKEN"; exit 0; fi
echo "AUTH_OK login=$LOGIN"

# 3) create repo (422 if it already exists -> fine)
CODE=$(curl -s -o /tmp/repo.json -w '%{http_code}' \
  -H "Authorization: token $TOKEN" -H "Accept: application/vnd.github+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"$REPO\",\"description\":\"Portfolio - Camila Felix dos Reis\",\"private\":false,\"has_issues\":false,\"has_wiki\":false}")
echo "CREATE_HTTP=$CODE"

# 4) push
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$OWNER/$REPO.git"
git push -q "https://x-access-token:${TOKEN}@github.com/$OWNER/$REPO.git" main && echo "PUSH_OK" || echo "PUSH_FAIL"

# 5) enable GitHub Pages from main / root
PG=$(curl -s -o /tmp/pg.json -w '%{http_code}' -X POST \
  -H "Authorization: token $TOKEN" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/$OWNER/$REPO/pages" \
  -d '{"source":{"branch":"main","path":"/"}}')
echo "PAGES_HTTP=$PG"

rm -f /tmp/repo.json /tmp/pg.json
echo "SITE=https://$OWNER.github.io/"
