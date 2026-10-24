#!/usr/bin/env python3
"""Rebuild docs/data/roster.js and docs/assets/img/team from the wiki roster.

The trainer's member cards are the team page's member cards, so this reads the
same source: the roster the wiki builds its team page from. Run it when somebody
joins, a task changes hands, or a photograph is replaced.

    python3 build/roster.py <path-to-wiki-checkout>

The wiki checkout must be on the published branch — origin/main, not whatever is
parked in the working tree. Export one with:

    git -C <wiki> archive origin/main | tar -x -C /tmp/wiki-main

What it reads
    <wiki>/assets/data/roster.js            names, roles, tracks, tasks
    <wiki>/assets/img/members/work/*.webp   the photograph at the bench
    <wiki>/assets/img/members/goofy/*.webp  the other one

What it writes
    docs/data/roster.js                     31 students and the task colours
    docs/assets/img/team/<slug>-w.webp      square crop, 420px, biased upward
    docs/assets/img/team/<slug>-g.webp      so faces are not cut off at the chin

Only students are copied: project leads, student leaders and student members.
Advisors and instructors are on the wiki, not in the mock room.
"""
import sys

print(__doc__)
print('This script is a record of how the data was made, not a one-click rebuild:')
print('the roster is JavaScript, so the extraction ran in the browser against the')
print('live team page. See the session notes, or re-extract with:')
print()
print('  SECTIONS.flatMap(s => (s.groups||[]).flatMap(g => g.members||[]))')
print()
sys.exit(0)
