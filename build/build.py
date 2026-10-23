#!/usr/bin/env python3
"""Merge the per-domain JSON written by the wiki-mining pass into docs/data/*.js.

Usage:  python3 build/build.py [source_dir]
Default source_dir is ./source (keep a copy of the mined JSON there).
Every output file is plain JS assigning one global, so the site needs no server.
"""
import json, os, sys, re, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'source')
OUT = os.path.join(ROOT, 'docs', 'data')

# domain id -> display, tier, seat that owns it by default, accent class
DOMAINS = [
    ('measurement',      'Measurement',        '量測',       'A', 'wet2', 'a'),
    ('hardware',         'Hardware',           '硬體',       'A', 'hw',   'a'),
    ('ihp',              'Integrated HP',      '整合人文實踐', 'A', 'ihp',  'a'),
    ('biomanufacturing', 'Biomanufacturing',   '生物製造',    'A', 'biz',  'a'),
    ('entrepreneurship', 'Entrepreneurship',   '創業與商業',   'A', 'biz',  'a'),
    ('plant',            'Plants',             '植物',       'A', 'plant', 'a'),
    ('wetlab',           'Cloning & Protein',  '選殖與蛋白',   'A', 'wet1', 'b'),
    ('drylab',           'Software & Models',  '軟體與模型',   'B', 'dry',  'b'),
]
DOM_INFO = {d[0]: dict(en=d[1], zh=d[2], tier=d[3], seat=d[4], tone=d[5]) for d in DOMAINS}

TYPES = [
    ('fact',     'Fact check',    '事實確認'),
    ('design',   'Design check',  '設計理由'),
    ('validate', 'Evidence',      '證據檢驗'),
    ('compare',  'Alternatives',  '替代方案'),
    ('boundary', 'Boundary',      '邊界試探'),
    ('integrate','Integration',   '整合串連'),
    ('gap',      'Honesty',       '誠實面對'),
    ('impact',   'Scale & impact','規模與影響'),
]

CATS = [
    ('assay',    'Assays',          '檢測'),
    ('biology',  'Biology',         '生物'),
    ('hardware', 'Hardware',        '硬體'),
    ('software', 'Software',        '軟體'),
    ('model',    'Models',          '模型'),
    ('plant',    'Plants',          '植物'),
    ('law',      'Law',             '法規'),
    ('business', 'Business',        '商業'),
    ('hp',       'Human practices', '人文實踐'),
]


def read_domain(dom):
    """One domain may be split across <dom>.json and <dom>_*.json chunks."""
    merged = {'facts': [], 'terms': [], 'questions': [], 'gaps': []}
    found = False
    names = sorted(n for n in os.listdir(SRC)
                   if n.endswith('.json') and (n[:-5] == dom or n.startswith(dom + '_')))
    for n in names:
        try:
            with open(os.path.join(SRC, n), encoding='utf-8') as fh:
                d = json.load(fh)
        except Exception as e:                      # keep going; report at the end
            print('  ! %s: %s' % (n, e))
            continue
        found = True
        for k in merged:
            v = d.get(k) or []
            if isinstance(v, list):
                merged[k].extend(v)
    return merged if found else None


def norm_q(q, dom):
    info = DOM_INFO[dom]
    q['dom'] = dom
    q['type'] = q.get('type') or 'fact'
    q['tier'] = (q.get('tier') or info['tier']).upper()[:1]
    q['seat'] = q.get('seat') or info['seat']
    if not q.get('backup'):
        q['backup'] = ''
    q['pages'] = [p for p in (q.get('pages') or []) if p]
    for f in ('kw_en', 'kw_zh'):
        v = q.get(f) or []
        q[f] = [str(x) for x in v][:3]
    return q


def main():
    if not os.path.isdir(SRC):
        sys.exit('source dir not found: %s' % SRC)
    os.makedirs(OUT, exist_ok=True)

    facts, terms, questions, gaps = [], [], [], []
    per_dom = collections.OrderedDict()

    for dom, *_ in DOMAINS:
        d = read_domain(dom)
        if d is None:
            print('  - %-17s missing' % dom)
            per_dom[dom] = dict(facts=0, terms=0, questions=0, gaps=0)
            continue
        for f in d['facts']:
            f['dom'] = dom
            facts.append(f)
        for t in d['terms']:
            t['dom'] = dom
            t['cat'] = t.get('cat') or 'biology'
            for k in ('kw_en', 'kw_zh'):
                t[k] = [str(x) for x in (t.get(k) or [])][:3]
            terms.append(t)
        for q in d['questions']:
            questions.append(norm_q(q, dom))
        for g in d['gaps']:
            g['dom'] = dom
            gaps.append(g)
        per_dom[dom] = dict(facts=len(d['facts']), terms=len(d['terms']),
                            questions=len(d['questions']), gaps=len(d['gaps']))
        print('  + %-17s %3d facts  %3d terms  %3d questions  %2d gaps'
              % (dom, len(d['facts']), len(d['terms']), len(d['questions']), len(d['gaps'])))

    # de-duplicate questions and gaps: the mining pass ran in overlapping chunks
    def dedupe(items, keyf):
        seen, out = {}, []
        for it in items:
            k = re.sub(r'[^a-z0-9一-鿿]+', '', str(keyf(it)).lower())[:90]
            if not k:
                out.append(it)
                continue
            if k in seen:
                continue
            seen[k] = 1
            out.append(it)
        return out

    nf = len(facts)
    facts = dedupe(facts, lambda f: str(f.get('label_en', '')) + str(f.get('value', '')))
    if nf != len(facts):
        print('  . dropped %d duplicate facts' % (nf - len(facts)))

    nq, ng = len(questions), len(gaps)
    questions = dedupe(questions, lambda q: q.get('q_en') or q.get('q_zh'))
    gaps = dedupe(gaps, lambda g: g.get('issue_en') or g.get('issue_zh'))
    if nq != len(questions) or ng != len(gaps):
        print('  . dropped %d duplicate questions, %d duplicate gaps' % (nq - len(questions), ng - len(gaps)))

    # de-duplicate terms by lowercased term, keeping the longest definition
    by_term = {}
    for t in terms:
        k = re.sub(r'\s+', ' ', str(t.get('term', '')).strip().lower())
        if not k:
            continue
        if k not in by_term or len(str(t.get('def_en', ''))) > len(str(by_term[k].get('def_en', ''))):
            by_term[k] = t
    terms = sorted(by_term.values(), key=lambda t: str(t['term']).lower())

    # ids
    for i, q in enumerate(questions):
        q.setdefault('id', 'q%03d' % (i + 1))
    for i, g in enumerate(gaps):
        g.setdefault('id', 'g%03d' % (i + 1))

    # recorded question bank from the team's spreadsheet
    recorded = []
    bank_path = os.path.join(SRC, 'bank.json')
    if os.path.exists(bank_path):
        with open(bank_path, encoding='utf-8') as fh:
            for r in json.load(fh):
                recorded.append(dict(q=r['q'], team=r.get('team') or '', year=r.get('year'),
                                     level=r.get('level') or '', sheet=r.get('sheet') or '',
                                     kw=r.get('kw') or '', note=r.get('ans') or ''))

    def dump(name, var, obj):
        p = os.path.join(OUT, name)
        with open(p, 'w', encoding='utf-8') as fh:
            fh.write('var %s = %s;\n' % (var, json.dumps(obj, ensure_ascii=False, indent=0,
                                                         separators=(',', ':'))))
        print('  > %-14s %6.1f kB' % (name, os.path.getsize(p) / 1024))

    meta = dict(domains=[dict(id=d[0], en=d[1], zh=d[2], tier=d[3], seat=d[4]) for d in DOMAINS],
                types=[dict(id=t[0], en=t[1], zh=t[2]) for t in TYPES],
                cats=[dict(id=c[0], en=c[1], zh=c[2]) for c in CATS],
                perDomain=per_dom)

    dump('facts.js', 'FACTS', facts)
    dump('gaps.js', 'GAPS', gaps)
    dump('terms.js', 'TERMS', terms)
    dump('bank.js', 'QUESTIONS', questions)
    dump('recorded.js', 'RECORDED', recorded)
    dump('meta.js', 'META', meta)

    counts = dict(facts=len(facts), terms=len(terms), questions=len(questions), gaps=len(gaps))
    with open(os.path.join(OUT, 'index.js'), 'w', encoding='utf-8') as fh:
        fh.write('var INDEX_COUNTS = %s;\n' % json.dumps(counts))
    print('\n  total: %(facts)d facts, %(terms)d terms, %(questions)d questions, %(gaps)d gaps' % counts)

    byseat = collections.Counter(q['seat'] for q in questions)
    bytype = collections.Counter(q['type'] for q in questions)
    print('  seats:', dict(byseat))
    print('  types:', dict(bytype))


if __name__ == '__main__':
    main()
