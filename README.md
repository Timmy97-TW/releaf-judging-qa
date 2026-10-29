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
| **280 facts** | Every checkable number in the project, each linked to the wiki page it came from |
| **306 terms** | From DNPH to hollow fiber to contained use, three keywords then one compact definition |
| **510 questions** | Written for this project, in ten question types, with a model answer and the likely mistake |
| **140 deep** | Graduate-level: mechanism, trade-offs, and numbers with their uncertainty. The Deep end deck drills these alone |
| **34 reasoning** | No answer anywhere on the wiki. The student is given a premise and has to get to the end of it |
| **12 positioning** | Hollow fibre and DIY OD meters are old news — what did this team actually add? |
| **14 from the adviser** | Kyle Peng's research highlights and open questions, 24 October, marked with his name |
| **77 gaps** | Places where the team's own pages disagree, or claim more than the data shows, each with an honest sentence to say |
| **181 recorded questions** | What judges actually asked other teams in 2025 and earlier, from the team's own notes |
| **58 milestones** | The year as a vertical timeline, with 47 of the team's own result figures |
| **162 figures** | Key figures off the wiki and every figure on the Registry part pages, each one a question in two modes: name it out loud, or pick it out of four |
| **41 parts** | The whole Registry collection, pulled live from the API: four assembly levels, 101 figures copied into the repo, and seventeen places a judge who digs will land |
| **60 map nodes** | A 3D knowledge map: evidence on the outer shell, the nine concepts that join domains in the middle, impact at the core. 77 written links, 116 figures in the cards |
| **50 registry** | A question bank for the part pages alone — the band a judge points at, the twin deposits, the missing control lane |

All of it is drawn from the frozen wiki at [2026.igem.wiki/gems-taiwan](https://2026.igem.wiki/gems-taiwan/).
Nothing is invented. Where the wiki is silent, the answer says so.

Students add questions through the team's shared
[online question bank](https://docs.google.com/spreadsheets/d/1_35O9ugtBM8QZ_fXBo7MaY0TEIIgdYkDs_kvEkT5soo/edit?gid=1264413978#gid=1264413978)
— a question they were asked in practice, or one on their own page they would hate to be asked. That
sheet is where `source/bank.json` came from, and the Question Bank page links to it at the top.

## The eleven pages

1. **Start** — the session facts, the countdown, and five rules that decide the twenty minutes.
2. **Facts** — searchable fact base, plus the ten numbers to know by heart, plus the honest list.
3. **Terms** — big search, and a quiz box that keeps rotating. Space reveals, right arrow moves on.
4. **Question Bank** — all 510 questions in one searchable place, tagged by area, by kind of question,
   and by tier, deep end or adviser. The three keywords are set larger than anything else on the card
   because at this stage nobody says a model answer back from memory; the full answer, the likely
   mistake and the wiki sources fold away underneath. Each question also shows the figures published on
   the pages its answer comes from, so you can see what a judge might be pointing at while asking, and
   any figure opens full size with its own reading. *Quiz me* hides the keywords until you have said
   them out loud. The page links to the team's shared Google Sheet, which is where students add
   questions they were asked or cannot answer; the 181 recorded questions came out of that sheet.
5. **Registry Room** — the forty-one parts we deposited, mapped across the four levels they were built
   in. Click a part and the map lights its lineage while a panel shows everything on its page. Then the
   five documentation slots and a filing drill, the figures a judge can point at with every band read
   off them, the numbers that are public under the team's name, seventeen soft spots ranked by how
   little work they take to find, and a drill in the genre. Built from a live API pull, not from the wiki.
6. **Mock Room** — a panel generated for the session, a question whose domain stays hidden until you
   call a seat, points, streaks, twenty-second follow-ups, and a card to post when the run ends.
7. **Figure Room** — the same four judges, but they point at a picture. 162 figures, ten to a run,
   filterable by wave and by domain: two waves off the wiki and a third, 76 strong, off our own
   Registry part pages. Two modes: say what it is out loud and mark
   yourself, or pick one of four. Wrong answers go on a shaky list, and the run ends in a card.
8. **Mic Map** — seven seats, what each one owns, ten double-dip rules, and an assignment drill.
9. **Delivery** — the shape of a good answer, sentences worth memorising, and eleven habits that cost points.
10. **Timeline** — the year in evidence: every dated result in the order it happened, with the gel, plate,
   plot or dashboard it produced, filterable by track. Figures are copied into the repo so it works offline.
   Nine entries carry a date worked out from context rather than stated on the wiki; they are marked with a
   tilde, an amber dot and a note saying what the date was inferred from.

   It also carries three practice modes the Mock Room cannot run, because they need the
   graph rather than a question list. **Defend** puts one node in front of you with its number,
   its n, its control and its boundary masked, and asks for them in that order — reveal only
   after you have said it, then mark yourself; what you can and cannot defend is remembered per
   node and shows up as a filter ("I cannot defend this yet"). **Bridge** gives you two results
   from different domains and asks which concept joins them, then prints the two sentences that
   make the join. **Trace** gives you a start and an end and makes you pick each hop; a wrong
   pick is answered with why that edge does not exist. Mock Room scores a run; these score
   coverage, and the progress exports as one code.

11. **Knowledge Map** — three shells in 3D, turned by dragging. Sixty nodes: every piece of
   evidence on the rim, the concepts that let one domain reach another in the middle, and what the
   project is for at the core. A cross-domain hop always passes through a concept, which is where the
   connections nobody had noticed turn up. Each card carries one to four of the team's own figures,
   the number to say out loud with its n and its control, what the claim holds and where it fails,
   every written link to its neighbours, and a link to the wiki page it came from.

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

## Which wiki to mine

**Always mine the published wiki, not the local working tree.** The clone at
`Releaf_Wiki/releaf-wiki` has been parked on branch `finalize/1013` since 14 October 2026
with uncommitted edits, and it is about fifty files behind `origin/main`. The parked copy is
missing the whole October results write-up, so it reads as if half the project failed. The
version the judges read is `origin/main`, which is what `2026.igem.wiki/gems-taiwan` serves.

```bash
mkdir -p /tmp/wiki-main && git -C ../Releaf_Wiki/releaf-wiki archive origin/main | tar -x -C /tmp/wiki-main
```

Mine that export, or the GitLab mirror in `Releaf_Wiki/wt/igem-gitlab/wiki/pages/`.

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

The figure bank lives in `source/figures/*.json` and builds into `docs/data/figures.js`. Each entry
names one image in `docs/assets/img/fq/`, an open-mode prompt with a model answer and three keywords,
a four-option multiple choice with the correct option written first (the page shuffles them), the
likely mistake, and the wiki slug the figure is published on. The build refuses to run if an image is
missing, if a domain is unknown, if an id repeats, or if an option list is not exactly four long.

**First wave**, fifty figures across the four nominated and most-asked areas — Hardware, Measurement,
Cloning, Plants and Integrated Human Practices, ten each. **Second wave**, thirty-six figures, three
each across Business, Law, Math Model, Protein Design, Software and the Digital Twin,
Biomanufacturing, Safety, Geospatial, Education, Data Physicalization, Sustainability and the project
overview.

The images themselves are copied out of `static.igem.wiki` into the repo so the page works offline on
the day. `.jpg` assets on that CDN answer 403 to a plain fetch; pick the `.webp` of the same figure.

## The Registry pull

The Registry Room is built from the live API, not from the wiki, because the part pages are what a judge
reads and they change after the wiki freezes. Two scripts:

```bash
python3 build/registry_pull.py     # api.registry.igem.org -> source/registry/*.json
python3 build/registry_images.py   # the figures on those pages -> docs/assets/img/reg/
python3 build/registry.py          # that, plus source/registry-notes.json -> docs/data/registry.js
```

`registry_pull.py` walks the organisation listing twenty parts at a time and then fetches the record,
the documentation and the composition for each one, at about a request a second because the API
throttles hard. It also resolves the non-ReLEAF parts our composites are built on. A full pull is
roughly three minutes.

`registry_images.py` copies the 76 distinct figures off `registry.igem.wiki` into the repo,
named by the first twelve characters of the Registry's own content hash, so the room works
offline on the day and a judging session never waits on someone else's CDN. A file already
present is left alone, so a re-run after a fresh pull fetches only what is new, and
`registry.py` refuses to build if a figure named in the documentation is not there.

`registry.py` derives the structure and never asks anyone to type it: assembly level comes from the
composition graph, so a part that gains a component moves on the map by itself, and the flags — no
documentation, unfilled brackets, has a twin, reused inside other parts, carries the old promoter
deposit — are computed from the pulled record. Everything written in sentences lives in
`source/registry-notes.json`: the anatomy of the five documentation slots, the figure readings, the
soft spots, the drills and the card. That file is edited by hand and is the only place to write prose.

The fifty questions about the parts are a domain of the ordinary bank, not part of this:
they live in `source/registry*.json` and build into `docs/data/bank.js` with everything else,
so the Mock Room can draw them like any other domain or drill them alone.

## Local preview

Any static server works:

```bash
cd docs && python3 -m http.server 8811
```

## Licence

Project facts belong to GEMS Taiwan, iGEM 2026. The wiki is CC BY 4.0.
