#!/bin/sh
# Re-stamp ?v= on every local js/css reference so browsers pick up a new deploy at once.
# Run from the repo root after changing anything under docs/data or docs/assets.
cd "$(dirname "$0")/../docs" || exit 1
V=$(date +%Y%m%d%H%M)
python3 - "$V" <<'PY'
import re, sys, glob
V = sys.argv[1]
for f in glob.glob('*.html'):
    t = open(f).read()
    def fix(m):
        attr, url = m.group(1), m.group(2)
        if url.startswith(('http', 'data:')):
            return m.group(0)
        url = re.sub(r'\?v=\d+', '', url)
        return '%s="%s?v=%s"' % (attr, url, V)
    t2 = re.sub(r'(src|href)="((?:assets|data)/[^"?]+\.(?:js|css))(?:\?v=\d+)?"', fix, t)
    if t2 != t:
        open(f, 'w').write(t2)
print('stamped', V)
PY
