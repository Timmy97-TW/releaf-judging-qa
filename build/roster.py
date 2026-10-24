#!/usr/bin/env python3
"""Rebuild docs/data/roster.js and docs/assets/img/team from the wiki's roster.

The trainer's score card is the team page's member card, so it reads the same
source the wiki builds that page from.

    python3 build/roster.py /tmp/wiki-main

The wiki checkout must be the PUBLISHED one. The working tree in Releaf_Wiki has
been parked on an old branch; export the real thing first:

    git -C ../Releaf_Wiki/releaf-wiki archive origin/main | tar -x -C /tmp/wiki-main

Reads   <wiki>/assets/data/roster.js            names, roles, tracks, tasks
        <wiki>/assets/img/members/{work,goofy}/ the two photographs each
Writes  docs/data/roster.js                     students, tasks, task colours
        docs/assets/img/team/<slug>-{w,g}.webp  square, 420px, cropped upward

Students only: project leads, student leaders, student members. Advisors and
instructors are on the wiki, not in the mock room.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WANT = ('project-leads', 'student-leaders', 'student-members')
SEC_OUT = {'project-leads': 'lead', 'student-leaders': 'slead', 'student-members': 'member'}
SEC_NAMES = {'lead': {'en': 'Project Leads', 'zh': '專題負責人'},
             'slead': {'en': 'Student Leaders', 'zh': '學生組長'},
             'member': {'en': 'Student Members', 'zh': '學生組員'}}


def js_to_json(src):
    """Quote bare keys and drop trailing commas, leaving string literals alone."""
    out, i, n = [], 0, len(src)
    while i < n:
        ch = src[i]
        if ch == '"':                                   # copy a string whole
            j = i + 1
            while j < n:
                if src[j] == '\\':
                    j += 2
                    continue
                if src[j] == '"':
                    break
                j += 1
            out.append(src[i:j + 1])
            i = j + 1
            continue
        if ch == '/' and i + 1 < n and src[i + 1] in '/*':   # drop comments
            if src[i + 1] == '/':
                i = src.find('\n', i)
                if i < 0:
                    break
            else:
                i = src.find('*/', i) + 2
            continue
        m = re.match(r'([A-Za-z_$][\w$]*)\s*:', src[i:])    # bare key -> "key":
        if m and (not out or out[-1].strip()[-1:] in '{,[' or out[-1].strip() == ''):
            out.append('"%s":' % m.group(1))
            i += m.end()
            continue
        if ch == ',':                                       # trailing comma?
            j = i + 1
            while j < n and src[j] in ' \t\r\n':
                j += 1
            if j < n and src[j] in '}]':
                i = j
                continue
        out.append(ch)
        i += 1
    return ''.join(out)


def sections(path):
    src = open(path, encoding='utf-8').read()
    start = src.index('SECTIONS')
    start = src.index('[', start)
    depth, i = 0, start
    while i < len(src):                                  # find the matching ]
        if src[i] == '"':
            i += 1
            while src[i] != '"':
                i += 2 if src[i] == '\\' else 1
        elif src[i] == '[':
            depth += 1
        elif src[i] == ']':
            depth -= 1
            if depth == 0:
                break
        i += 1
    return json.loads(js_to_json(src[start:i + 1]))


def square(im, side):
    from PIL import Image, ImageOps
    im = ImageOps.exif_transpose(im).convert('RGB')
    w, h = im.size
    s = min(w, h)
    top = max(0, int((h - s) * 0.22))                    # faces sit above centre
    left = (w - s) // 2
    return im.crop((left, top, left + s, top + s)).resize((side, side), Image.LANCZOS)


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    wiki = sys.argv[1]
    from PIL import Image

    labels = {}
    rsrc = open(os.path.join(wiki, 'assets/data/roster.js'), encoding='utf-8').read()
    lm = re.search(r'LABELS\s*=\s*\{(.*?)\}', rsrc, re.S)
    for k, v in re.findall(r'"([^"]+)"\s*:\s*"(#[0-9a-fA-F]{3,8})"', lm.group(1)):
        labels[k] = v

    out_img = os.path.join(HERE, 'docs/assets/img/team')
    os.makedirs(out_img, exist_ok=True)

    rows, missing = [], []
    for sec in sections(os.path.join(wiki, 'assets/data/roster.js')):
        if sec.get('id') not in WANT:
            continue
        for group in sec.get('groups') or []:
            for m in group.get('members') or []:
                if not m.get('name'):
                    continue
                slug = re.sub(r'-(work|goofy)?$', '', os.path.splitext(
                    os.path.basename(m.get('photo') or m.get('workPhoto') or ''))[0])
                got = {}
                for kind, tag in (('work', 'w'), ('goofy', 'g')):
                    p = os.path.join(wiki, 'assets/img/members', kind, slug + '.webp')
                    if os.path.exists(p):
                        square(Image.open(p), 420).save(
                            os.path.join(out_img, slug + '-' + tag + '.webp'),
                            'WEBP', quality=82, method=6)
                        got[tag] = 1
                if not got:
                    missing.append(slug)
                rows.append(dict(n=m['name'], s=slug, r=m.get('role', ''), t=m.get('track', ''),
                                 g=m.get('grade', ''), sc=m.get('school', ''),
                                 own=m.get('own') or [],
                                 mem=(m.get('mem') or []) + (m.get('tasks') or []),
                                 sec=SEC_OUT[sec['id']], w=1 if 'w' in got else 0,
                                 gf=1 if 'g' in got else 0))

    js = ["/* The roster, from the wiki team page: name, role, track, tasks and the two",
          " * photographs. Task colours and the frame they build are the team page's own, so",
          " * a card here and a card there are recognisably the same object.",
          " * Rebuilt by build/roster.py; do not edit by hand. */",
          'var TASK_COLORS = ' + json.dumps(labels, ensure_ascii=False, indent=0) + ';',
          'var ROSTER_SECTIONS = ' + json.dumps(SEC_NAMES, ensure_ascii=False, separators=(',', ':')) + ';',
          'var ROSTER = [']
    for r in rows:
        js.append(json.dumps(r, ensure_ascii=False, separators=(',', ':')) + ',')
    js.append('];')
    open(os.path.join(HERE, 'docs/data/roster.js'), 'w', encoding='utf-8').write('\n'.join(js) + '\n')

    size = sum(os.path.getsize(os.path.join(out_img, f)) for f in os.listdir(out_img))
    print('%d students, %d photographs, %.1f MB' % (len(rows), len(os.listdir(out_img)), size / 1048576))
    if missing:
        print('no photograph at all: ' + ', '.join(missing))


if __name__ == '__main__':
    main()
