#!/usr/bin/env python3
"""Build docs/data/registry.js from the frozen Registry pull plus the hand-written layer.

Usage:  python3 build/registry.py

Reads
  source/registry/BBa_*.json      one file per part, exactly as api.registry.igem.org
                                  returned it: search row, part record, documentation
                                  bodies (raw Markdown), composition rows.
  source/registry/_external.json  the non-ReLEAF parts our composites are built from,
                                  resolved to title / role / length.
  source/registry_notes.json      everything a person wrote: the anatomy of a part page,
                                  the soft spots, the figure readings, the drills.

Writes
  docs/data/registry.js           one global, REGISTRY.

The structure half is derived, never typed: levels come from the composition graph, so a
part that gains a component moves on the map by itself. Re-pull with build/registry_pull.py.
"""
import json, os, re, sys, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'source', 'registry')
NOTES = os.path.join(ROOT, 'source', 'registry_notes.json')
OUT = os.path.join(ROOT, 'docs', 'data', 'registry.js')

DOC_ORDER = ['design', 'experiment', 'characterisation', 'application', 'discussion']

# Which module of the project a part belongs to. First match wins, so the light chain is
# claimed before the composites that contain it.
MODULES = [
    ('light',       'Light module',      '光控模組'),
    ('system',      'Whole system',      '完整系統'),
    ('protectant',  'Protectant',        '保護蛋白'),
    ('reporter',    'Reporter cassette', '報導基因模組'),
    ('toolkit',     'Shared blocks',     '共用元件'),
]

LIGHT = {'BBa_261XH2RS', 'BBa_26BDO8AQ', 'BBa_26XZYM10', 'BBa_26A4MT29', 'BBa_26GJIT8W'}
TOOLKIT = {'BBa_26OSLRE4', 'BBa_26V6CPEV'}
REPORTER = {'BBa_26VTO4DX', 'BBa_2610Z8EW'}

LEVELS = [
    (0, 'Basic part',          '基本元件',   'One promoter, one RBS, one coding sequence. Nothing of ours inside it.'),
    (1, 'Transcriptional unit','轉錄單元',   'A signal peptide fused to a cargo, or a promoter driving one gene.'),
    (2, 'Cassette',            '表現卡匣',   'Promoter, RBS, fusion and terminator — one plasmid you can transform.'),
    (3, 'Whole system',        '完整系統',   'Four transcriptional units on one plasmid: the light circuit plus a cargo.'),
]

# The superseded third-party promoter deposit, and our own replacement for it.
LEGACY_PROMOTER = 'BBa_254UKC9E'
OWN_PROMOTER = 'BBa_26GJIT8W'


def load_parts():
    out = {}
    for fn in sorted(os.listdir(SRC)):
        if not fn.startswith('BBa_'):
            continue
        d = json.load(open(os.path.join(SRC, fn), encoding='utf-8'))
        out[d['id']] = d
    return out


def count_brackets(text):
    """Unfilled [placeholders] left on a live page. A Markdown link's [label](url) is not one."""
    return len(re.findall(r'\[(?!!)[^\[\]]{1,60}\](?!\()', text or ''))


def count_images(text):
    return len(re.findall(r'!\[', text or ''))


def plain(text):
    """Registry descriptions are Markdown. The map shows them as a sentence, so the links
    keep their label and lose their URL, and the editor's backslash escapes come off."""
    t = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', text or '')
    t = re.sub(r'\(\s*\)', '', t)
    t = re.sub(r'<[^>]+>', '', t)
    t = t.replace('\\_', '_').replace('\\*', '*').replace('\\[', '[').replace('\\]', ']')
    t = re.sub(r'\*{1,3}(\S(?:[^*]*\S)?)\*{1,3}', r'\1', t)   # bold and italic runs
    t = t.replace('*', '')
    return re.sub(r'\s+', ' ', t).strip()


def derive(parts, external):
    graph_kids, graph_parents = {}, collections.defaultdict(list)
    for k, d in parts.items():
        graph_kids[k] = [c.get('componentName') for c in d['composition'] if c.get('componentName')]
        for c in graph_kids[k]:
            graph_parents[c].append(k)

    depth = {}

    def dep(k, seen=()):
        if k in depth:
            return depth[k]
        if k in seen or k not in graph_kids:
            return 0
        mine = [c for c in graph_kids[k] if c in parts]
        depth[k] = 1 + max([dep(c, seen + (k,)) for c in mine]) if mine else 0
        return depth[k]

    for k in parts:
        dep(k)

    titles = collections.defaultdict(list)
    for k, d in parts.items():
        t = re.sub(r'\s+', ' ', (d['part'].get('title') or '')).strip().lower()
        titles[t].append(k)
    twins = {k: [x for x in v if x != k] for v in titles.values() if len(v) > 1 for k in v}

    rows = []
    for k, d in sorted(parts.items()):
        p = d['part'] or {}
        docs = {x['type']: x for x in d['documentation']}
        seq = p.get('sequence') or ''
        body = '\n'.join((x.get('value') or '') for x in d['documentation'])
        comp = [dict(id=c.get('componentName'),
                     start=c.get('start'), end=c.get('end'),
                     role=(c.get('role') or {}).get('label'),
                     mine=c.get('componentName') in parts)
                for c in d['composition']]

        if k in LIGHT:
            mod = 'light'
        elif k in TOOLKIT:
            mod = 'toolkit'
        elif k in REPORTER:
            mod = 'reporter'
        elif depth[k] == 3:
            mod = 'system'
        else:
            mod = 'protectant'

        # what drives the cargo: the constitutive veg promoter, or the green-light one
        comp_ids = [c['id'] for c in comp]
        driver = ''
        if 'BBa_K143012' in comp_ids:
            driver = 'veg'
        elif LEGACY_PROMOTER in comp_ids or OWN_PROMOTER in comp_ids:
            driver = 'light'

        cargo = ''
        tl = (p.get('title') or '').lower()
        for name, tag in (('acds', 'AcdS'), ('lea14', 'LEA14'), ('bopep4', 'BoPep4'),
                          ('mscarlet', 'mScarlet')):
            if name in tl:
                cargo = tag
                break

        words = len(body.split())
        imgs = count_images(body)
        brackets = count_brackets(body)

        flags = []
        if not d['documentation']:
            flags.append('nodoc')
        elif words < 400:
            flags.append('thin')
        if 'characterisation' in docs:
            flags.append('blot')
        if ('experiment' in docs or 'characterisation' in docs) and imgs == 0:
            flags.append('nofig')
        if brackets:
            flags.append('brackets')
        if k in twins:
            flags.append('twin')
        if LEGACY_PROMOTER in comp_ids:
            flags.append('legacy')
        if OWN_PROMOTER in comp_ids:
            flags.append('own')
        if len(graph_parents.get(k, [])) >= 3:
            flags.append('hub')

        rows.append(dict(
            id=k, title=(p.get('title') or '').strip(), slug=p.get('slug') or '',
            status=p.get('status') or '', role=(p.get('role') or {}).get('label') or '',
            bp=len(seq), level=depth[k], mod=mod, driver=driver, cargo=cargo,
            desc=plain(p.get('description')),
            comp=comp, usedin=sorted(graph_parents.get(k, [])),
            twins=sorted(twins.get(k, [])),
            docs=[dict(type=t,
                       words=len((docs[t].get('value') or '').split()),
                       imgs=count_images(docs[t].get('value')),
                       brackets=count_brackets(docs[t].get('value')),
                       updated=(docs[t].get('updated') or docs[t].get('created') or '')[:10])
                  for t in DOC_ORDER if t in docs],
            words=words, imgs=imgs, brackets=brackets, flags=flags,
        ))
    return rows, graph_parents


def main():
    parts = load_parts()
    external = json.load(open(os.path.join(SRC, '_external.json'), encoding='utf-8'))
    notes = json.load(open(NOTES, encoding='utf-8'))
    rows, parents = derive(parts, external)

    ext = []
    for k, v in sorted(external.items()):
        usedby = sorted(set(r['id'] for r in rows for c in r['comp'] if c['id'] == k))
        ext.append(dict(id=k, title=plain(v.get('title')),
                        role=v.get('role') or '', bp=v.get('len') or 0,
                        slug=(v.get('slug') or ''), usedby=usedby))

    by_level = collections.Counter(r['level'] for r in rows)
    by_mod = collections.Counter(r['mod'] for r in rows)
    doc_cover = collections.Counter(d['type'] for r in rows for d in r['docs'])

    meta = dict(
        pulled=notes['meta']['pulled'],
        org=notes['meta']['org'],
        parts=len(rows),
        published=sum(1 for r in rows if r['status'] == 'published'),
        words=sum(r['words'] for r in rows),
        imgs=sum(r['imgs'] for r in rows),
        brackets=sum(r['brackets'] for r in rows),
        bp=sum(r['bp'] for r in rows),
        nodoc=sum(1 for r in rows if 'nodoc' in r['flags']),
        external=len(ext),
        levels=[dict(n=n, en=en, zh=zh, note=note, count=by_level.get(n, 0))
                for n, en, zh, note in LEVELS],
        mods=[dict(id=i, en=en, zh=zh, count=by_mod.get(i, 0)) for i, en, zh in MODULES],
        docTypes=[dict(id=t, count=doc_cover.get(t, 0)) for t in DOC_ORDER],
    )

    obj = dict(meta=meta, parts=rows, external=ext)
    for key in ('anatomy', 'docTypes', 'soft', 'figures', 'numbers', 'drill', 'card',
                'asked', 'where', 'rules'):
        if key in notes:
            obj[key] = notes[key]

    with open(OUT, 'w', encoding='utf-8') as fh:
        fh.write('var REGISTRY = %s;\n' % json.dumps(obj, ensure_ascii=False, indent=0,
                                                     separators=(',', ':')))
    print('  > registry.js  %6.1f kB' % (os.path.getsize(OUT) / 1024))
    print('  %d parts, %d published, %d words, %d images, %d brackets, %d external parts'
          % (meta['parts'], meta['published'], meta['words'], meta['imgs'],
             meta['brackets'], meta['external']))
    print('  levels:', dict(by_level), ' modules:', dict(by_mod))
    print('  soft spots: %d · figure readings: %d · drills: %d'
          % (len(obj.get('soft', [])), len(obj.get('figures', [])), len(obj.get('drill', []))))


if __name__ == '__main__':
    main()
