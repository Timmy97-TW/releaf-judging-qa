# ReLEAF Judging Trainer

Preparation for the GEMS Taiwan judging session at the iGEM 2026 Grand Jamboree.
**Room J03, Friday 13 November, 12:00 to 12:25 Paris time** — the first shift of the day.
Five minutes of team update, then twenty minutes of questions from four in-person judges.

**[→ Open the trainer](https://timmy97-tw.github.io/releaf-judging-qa/)**

Bilingual, English and 繁體中文, switchable in the top right of every page.
Static HTML and vanilla JavaScript: no build step to view it, no server, works offline once loaded.

---

## What is in it

| | |
|---|---|
| **281 facts** | Every checkable number in the project, each linked to the wiki page it came from |
| **306 terms** | From DNPH to hollow fiber to contained use, three keywords then one compact definition |
| **318 questions** | Written for this project, in eight question types, with a model answer and the likely mistake |
| **77 gaps** | Places where the team's own pages disagree, or claim more than the data shows, each with an honest sentence to say |
| **181 recorded questions** | What judges actually asked other teams in 2025 and earlier, from the team's own notes |
| **58 milestones** | The year as a vertical timeline, with 47 of the team's own result figures |

All of it is drawn from the frozen wiki at [2026.igem.wiki/gems-taiwan](https://2026.igem.wiki/gems-taiwan/).
Nothing is invented. Where the wiki is silent, the answer says so.

## The nine pages

1. **Start** — the session facts, the countdown, and five rules that decide the twenty minutes.
2. **Facts** — searchable fact base, plus the ten numbers to know by heart, plus the honest list.
3. **Terms** — big search, and a quiz box that keeps rotating. Space reveals, right arrow moves on.
4. **Mock Room** — four judges, a ninety-second timer, filters by domain and question type, and a
   full-session deck of fourteen questions weighted like the real thing. Shaky questions are kept.
5. **Mic Map** — seven seats, what each one owns, ten double-dip rules, and an assignment drill.
6. **Delivery** — the shape of a good answer, sentences worth memorising, and eleven habits that cost points.
7. **Opening Five** — four slides, a skeleton script and a rehearsal clock with per-slide budgets.
8. **Day Sheet** — two weeks out to the door of J03, what goes in the bag, and a printable one-sheet.
9. **Timeline** — the year in evidence: every dated result in the order it happened, with the gel, plate,
   plot or dashboard it produced, filterable by track. Figures are copied into the repo so it works offline.
   Nine entries carry a date worked out from context rather than stated on the wiki; they are marked with a
   tilde, an amber dot and a note saying what the date was inferred from.

## The seven seats

| Seat | Territory |
|---|---|
| 1 | Plants |
| 2 | Cloning and circuit |
| 3 | Protein and assays |
| 4 | Hardware |
| 5 | Software and models |
| 6 | Business and law |
| 7 | Human practices, team and anything unclaimed |

Nominations this year are **Best Measurement**, **Best Hardware** and **Best Integrated Human
Practices**, in the **Biomanufacturing** village, so questions in those four areas are marked tier A
and the mock room can drill them alone.

## Rebuilding the data

```bash
python3 build/build.py
```

Reads the per-domain JSON in `source/` and writes `docs/data/*.js`. Each source file holds
`facts`, `terms`, `questions` and `gaps` for one domain; a domain may be split across
`<domain>_*.json` chunks and they are merged. Duplicate facts, questions and gaps are dropped
on the way in.

`docs/data/ten.js` is the hand-picked list of ten headline numbers, and `docs/data/content.js`
holds the written coaching material. Both are edited by hand, not generated.

## Local preview

Any static server works:

```bash
cd docs && python3 -m http.server 8811
```

## Licence

Project facts belong to GEMS Taiwan, iGEM 2026. The wiki is CC BY 4.0.
