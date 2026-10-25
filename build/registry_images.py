#!/usr/bin/env python3
"""Copy the figures off the Registry part pages into the repo.

Usage:  python3 build/registry_images.py

The Registry serves documentation images from registry.igem.wiki under a content hash.
They are copied in so the Registry Room works offline on the day and does not depend on
someone else's CDN during a judging session. Files are named by the first twelve
characters of that hash, which is what build/registry.py expects, and a file already
present is left alone — so a re-run after a fresh pull fetches only what is new.

Run build/registry_pull.py first; build/registry.py refuses to build on a missing image.
"""
import json, os, re, sys, time, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'source', 'registry')
OUT = os.path.join(ROOT, 'docs', 'assets', 'img', 'reg')


def main():
    os.makedirs(OUT, exist_ok=True)
    urls = {}
    for fn in sorted(os.listdir(SRC)):
        if not fn.startswith('BBa_'):
            continue
        d = json.load(open(os.path.join(SRC, fn), encoding='utf-8'))
        for doc in d['documentation']:
            for m in re.finditer(r'!\[[^\]]*\]\((\S+?)\s*\)', doc.get('value') or ''):
                u = m.group(1)
                base = u.rsplit('/', 1)[-1].split('?')[0]
                stem, ext = os.path.splitext(base)
                urls.setdefault(stem[:12] + ext, u)

    got = skipped = failed = 0
    for i, (name, u) in enumerate(sorted(urls.items()), 1):
        dst = os.path.join(OUT, name)
        if os.path.exists(dst) and os.path.getsize(dst):
            skipped += 1
            continue
        try:
            req = urllib.request.Request(u, headers={'User-Agent': 'releaf-judging-trainer/1.0'})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            open(dst, 'wb').write(data)
            got += 1
            print('  %3d/%d %s  %6.1f kB' % (i, len(urls), name, len(data) / 1024))
        except Exception as e:
            failed += 1
            print('  %3d/%d FAILED %s  %s' % (i, len(urls), name, e))
        time.sleep(0.25)

    total = sum(os.path.getsize(os.path.join(OUT, f)) for f in os.listdir(OUT))
    print('\n  %d distinct figures: %d fetched, %d already here, %d failed · %.1f MB in %s'
          % (len(urls), got, skipped, failed, total / 1024 / 1024, os.path.relpath(OUT, ROOT)))
    if failed:
        sys.exit(1)


if __name__ == '__main__':
    main()
