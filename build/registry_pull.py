#!/usr/bin/env python3
"""Re-pull the team's Registry parts into source/registry/.

Usage:  python3 build/registry_pull.py

api.registry.igem.org is public and unauthenticated, but it throttles hard: one request
a second and a backoff on 429, or it starts answering ThrottlerException. Three requests
per part, so a full pull of 41 parts takes about three minutes.

The organisation listing is paged twenty at a time; `total` in the response says when to
stop. Writes one file per part plus _index.json, then run build/registry.py.
"""
import json, os, sys, time, urllib.request, urllib.error

API = 'https://api.registry.igem.org/v1'
ORG = '3f22886d-da0b-4a5a-8711-7b14b020c9de'   # GEMS-Taiwan (2026)
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   'source', 'registry')
HEAD = {'User-Agent': 'releaf-judging-trainer/1.0', 'Accept': 'application/json'}


def get(path):
    for attempt in range(6):
        try:
            req = urllib.request.Request(API + path, headers=HEAD)
            with urllib.request.urlopen(req, timeout=60) as r:
                time.sleep(1.1)
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(6 * (attempt + 1))
                continue
            print('  HTTP %s on %s' % (e.code, path))
            return None
        except Exception:
            time.sleep(3 * (attempt + 1))
    print('  gave up on', path)
    return None


def main():
    os.makedirs(OUT, exist_ok=True)
    listed, page = [], 1
    while True:
        d = get('/organisations/%s/parts?page=%d' % (ORG, page))
        if not d or not d.get('data'):
            break
        listed += d['data']
        print('  page %d: %d of %d' % (page, len(listed), d.get('total', 0)))
        if len(listed) >= d.get('total', 0):
            break
        page += 1
    json.dump(listed, open(os.path.join(OUT, '_index.json'), 'w'), indent=1)

    seen = set()
    for i, p in enumerate(listed, 1):
        u, n = p['uuid'], p['name']
        rec = {'id': n, 'search': p,
               'part': get('/parts/%s' % u),
               'documentation': (get('/parts/%s/documentation' % u) or {}).get('data', []),
               'composition': (get('/parts/%s/composition' % u) or {}).get('data', [])}
        json.dump(rec, open(os.path.join(OUT, n + '.json'), 'w'), indent=1)
        seen.add(n)
        print('  %2d/%d %s  docs=%d comp=%d' % (i, len(listed), n,
                                                len(rec['documentation']), len(rec['composition'])))

    # the non-ReLEAF parts our composites are built from, resolved for display
    ext = {}
    for fn in os.listdir(OUT):
        if not fn.startswith('BBa_'):
            continue
        d = json.load(open(os.path.join(OUT, fn)))
        for c in d['composition']:
            if c.get('componentName') and c['componentName'] not in seen:
                ext[c['componentName']] = c.get('componentUUID')
    out = {}
    for n, u in sorted(ext.items()):
        d = get('/parts/%s' % u) if u else None
        if d:
            out[n] = dict(uuid=u, title=d.get('title'), slug=d.get('slug'),
                          role=(d.get('role') or {}).get('label'),
                          len=len(d.get('sequence') or ''))
            print('  ext %s  %s' % (n, out[n]['title']))
    json.dump(out, open(os.path.join(OUT, '_external.json'), 'w'), indent=1)
    print('\n  %d parts, %d external components -> %s' % (len(seen), len(out), OUT))


if __name__ == '__main__':
    main()
