/* Registry Room — the map of our 41 deposited parts, and the drills that hang off it.
 * Structure comes from REGISTRY.parts, which is generated from a live API pull; everything
 * written in sentences comes from REGISTRY.anatomy / soft / figures / numbers / drill / card.
 */
(function () {
  'use strict';

  var S = window.Site, R = window.REGISTRY;
  if (!R) return;

  var P = {};                     // id -> part
  R.parts.forEach(function (p) { P[p.id] = p; });
  var EXT = {};
  (R.external || []).forEach(function (e) { EXT[e.id] = e; });

  var MODTONE = { light: 'b', system: 'v', protectant: 'a', reporter: 'w', toolkit: 'line' };

  var LENSES = [
    { id: 'blot',     en: 'Has a blot',      zh: '有墨點圖' },
    { id: 'nofig',    en: 'Figure promised', zh: '缺圖' },
    { id: 'nodoc',    en: 'No documentation',zh: '沒有文件' },
    { id: 'brackets', en: 'Unfilled [ ]',    zh: '未填的 [ ]' },
    { id: 'twin',     en: 'Has a twin',      zh: '有雙胞胎' },
    { id: 'hub',      en: 'Reused inside',   zh: '被重複使用' }
  ];

  var FLAGTEXT = {
    nodoc:    { en: 'no documentation', zh: '沒有文件', tone: 'r' },
    thin:     { en: 'thin', zh: '內容很薄', tone: 'w' },
    blot:     { en: 'Western blot', zh: '西方墨點', tone: 'v' },
    nofig:    { en: 'figure promised, none shown', zh: '有說有圖，卻沒有圖', tone: 'r' },
    brackets: { en: 'unfilled [ ]', zh: '未填的 [ ]', tone: 'w' },
    twin:     { en: 'twin part', zh: '雙胞胎 part', tone: 'b' },
    legacy:   { en: 'carries the old promoter deposit', zh: '帶著舊的 promoter 版本', tone: 'w' },
    own:      { en: 'our own promoter deposit', zh: '用我們自己的 promoter', tone: 'a' },
    hub:      { en: 'reused inside other parts', zh: '被其他 part 重複使用', tone: 'a' }
  };

  var LAB = {
    mod:  { en: 'Module', zh: '模組' },
    lens: { en: 'Lens', zh: '鏡頭' },
    find: { en: 'Find', zh: '搜尋' },
    all:  { en: 'All', zh: '全部' },
    built:{ en: 'Built from', zh: '由這些組成' },
    used: { en: 'Used inside', zh: '被用在' },
    docs: { en: 'Documentation on the page', zh: '頁面上的文件' },
    none: { en: 'Nothing on the page', zh: '頁面上沒有東西' },
    open: { en: 'Open on the Registry', zh: '在 Registry 上打開' },
    twin: { en: 'Same title as', zh: '同名的是' },
    hint: { en: 'Click any part. Click it again to clear.', zh: '點任一個 part。再點一次取消。' },
    sel:  { en: 'showing its lineage', zh: '顯示它的家族線' },
    ext:  { en: 'not ours', zh: '不是我們的' },
    words:{ en: 'words', zh: '字' },
    figs: { en: 'figures', zh: '張圖' },
    ask:  { en: 'What a judge asks here', zh: '評審會在這裡問什麼' },
    say:  { en: 'Say', zh: '這樣說' },
    show: { en: 'Show the answer', zh: '看答案' },
    hide: { en: 'Hide', zh: '收起' },
    next: { en: 'Next line', zh: '下一行' },
    right:{ en: 'Right', zh: '對' },
    wrong:{ en: 'Not that one', zh: '不是這個' },
    ev:   { en: 'Evidence on the page', zh: '頁面上的證據' },
    mist: { en: 'The mistake', zh: '常見錯誤' },
    find0:{ en: 'Nothing matches.', zh: '沒有符合的。' },
    onpage:{ en: 'Figures on the page', zh: '頁面上的圖' },
    close:{ en: 'Close', zh: '關閉' }
  };

  function L(k) { return S.p(LAB[k]); }
  function esc(s) { return S.esc(s); }

  /* ── stats strip ─────────────────────────────────────────────────────── */
  function stats() {
    var m = R.meta;
    var cells = [
      [m.parts, { en: 'parts deposited', zh: '上傳的 parts' }],
      [m.levels.length, { en: 'assembly levels', zh: '組裝層級' }],
      [m.imgs, { en: 'figures on the pages', zh: '頁面上的圖' }],
      [m.words.toLocaleString('en-US'), { en: 'words of documentation', zh: '字的文件' }],
      [m.external, { en: 'parts borrowed', zh: '借用的 parts' }]
    ];
    document.getElementById('regstats').innerHTML = cells.map(function (c) {
      return '<div class="reg-stat"><b>' + c[0] + '</b><span>' + esc(S.p(c[1])) + '</span></div>';
    }).join('');
    document.getElementById('regpulled').textContent =
      S.p({ en: 'Pulled from registry.igem.org on ' + m.pulled + ' · every part published · one author',
            zh: '於 ' + m.pulled + ' 從 registry.igem.org 抓取 · 全部已發布 · 一位作者' });
  }

  /* ── the asked question ──────────────────────────────────────────────── */
  function asked() {
    var a = R.asked;
    if (!a) return;
    document.getElementById('askedq').innerHTML =
      '<blockquote>' + a.lines.map(function (l) {
        return '<span class="reg-l"><i class="reg-t">' + esc(l.t) + '</i>' +
               esc(S.t(l, 'q')) + '</span>';
      }).join('') + '</blockquote>' +
      '<p class="reg-quote-src">' + esc(S.t(a, 'src')) + '</p>';

    document.getElementById('askedanat').innerHTML = a.moves.map(function (m, i) {
      return '<div class="reg-move"><span class="reg-move-n">' + (i + 1) + '</span>' +
        '<h4>' + esc(S.t(m, 'head')) + '</h4><p>' + esc(S.t(m, 'body')) + '</p></div>';
    }).join('');

    document.getElementById('askedans').innerHTML =
      '<b>' + esc(S.t(a, 'shapehead')) + '</b> ' + esc(S.t(a, 'shape'));
  }

  /* ── the map ─────────────────────────────────────────────────────────── */
  var mods = [], lenses = [], sel = null, q = '';

  function kinOf(id) {
    /* everything up and down the lineage of one part, ours and borrowed */
    var up = {}, down = {};
    (function climb(k) {
      (P[k] ? P[k].usedin : []).forEach(function (u) {
        if (!up[u]) { up[u] = 1; climb(u); }
      });
    })(id);
    (function dive(k) {
      (P[k] ? P[k].comp : []).forEach(function (c) {
        if (!down[c.id]) { down[c.id] = 1; if (P[c.id]) dive(c.id); }
      });
    })(id);
    return { up: up, down: down };
  }

  function visible(p) {
    if (mods.length && mods.indexOf(p.mod) < 0) return false;
    for (var i = 0; i < lenses.length; i++) if (p.flags.indexOf(lenses[i]) < 0) return false;
    if (q) {
      var hay = (p.id + ' ' + p.title + ' ' + p.role + ' ' + p.cargo + ' ' + p.desc).toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    return true;
  }

  function drawTools() {
    document.getElementById('l-mod').textContent = L('mod');
    document.getElementById('l-lens').textContent = L('lens');
    document.getElementById('l-find').textContent = L('find');

    document.getElementById('modchips').innerHTML = R.meta.mods.map(function (m) {
      return '<button class="chip chip-' + MODTONE[m.id] + '" data-mod="' + m.id + '" type="button" ' +
        'aria-pressed="' + (mods.indexOf(m.id) >= 0) + '">' + esc(S.p(m)) +
        '<span class="c">' + m.count + '</span></button>';
    }).join('');

    document.getElementById('lenschips').innerHTML = LENSES.map(function (l) {
      var n = R.parts.filter(function (p) { return p.flags.indexOf(l.id) >= 0; }).length;
      return '<button class="chip" data-lens="' + l.id + '" type="button" ' +
        'aria-pressed="' + (lenses.indexOf(l.id) >= 0) + '">' + esc(S.p(l)) +
        '<span class="c">' + n + '</span></button>';
    }).join('');
  }

  function drawMap() {
    var kin = sel ? kinOf(sel) : null;
    var html = R.meta.levels.map(function (lv) {
      var items = R.parts.filter(function (p) { return p.level === lv.n; })
        .sort(function (a, b) { return b.bp - a.bp; });
      var chips = items.map(function (p) {
        var cls = 'reg-chip reg-chip-' + p.mod;
        if (!visible(p)) cls += ' is-out';
        if (sel) {
          if (p.id === sel) cls += ' is-sel';
          else if (kin.up[p.id]) cls += ' is-up';
          else if (kin.down[p.id]) cls += ' is-down';
          else cls += ' is-far';
        }
        var dots = p.docs.length
          ? '<span class="reg-dots">' + p.docs.map(function (d) {
              return '<i class="d d-' + d.type.charAt(0) + (d.imgs ? ' has-fig' : '') + '"></i>';
            }).join('') + '</span>'
          : '<span class="reg-dots reg-dots-0">·</span>';
        return '<button class="' + cls + '" data-part="' + p.id + '" type="button">' +
          '<span class="reg-chip-id">' + esc(p.id.replace('BBa_', '')) + '</span>' +
          '<span class="reg-chip-t">' + esc(p.title || p.role) + '</span>' +
          '<span class="reg-chip-m">' + p.bp + ' bp' + dots + '</span></button>';
      }).join('');
      return '<div class="reg-level"><div class="reg-level-h"><b>L' + lv.n + '</b>' +
        '<span>' + esc(S.p(lv)) + '</span><i>' + lv.count + '</i></div>' +
        '<p class="reg-level-n">' + esc(lv.note) + '</p>' +
        '<div class="reg-col">' + chips + '</div></div>';
    }).join('');
    document.getElementById('levels').innerHTML = html;

    var shown = R.parts.filter(visible).length;
    document.getElementById('maphint').textContent = sel
      ? (sel + ' — ' + L('sel'))
      : (shown === R.parts.length ? L('hint')
         : shown + ' / ' + R.parts.length + ' · ' + L('hint'));
    drawDetail();
  }

  function docBar(p) {
    var types = R.meta.docTypes.map(function (t) { return t.id; });
    return '<div class="reg-bars">' + types.map(function (t) {
      var d = null;
      p.docs.forEach(function (x) { if (x.type === t) d = x; });
      var slot = null;
      (R.anatomy || []).forEach(function (s) { if (s.id === t) slot = s; });
      var name = slot ? S.t(slot, 'name') : t;
      if (!d) return '<div class="reg-bar is-empty"><b>' + esc(name) + '</b><span>—</span></div>';
      return '<div class="reg-bar"><b>' + esc(name) + '</b><span>' + d.words + ' ' + L('words') +
        (d.imgs ? ' · ' + d.imgs + ' ' + L('figs') : '') +
        (d.brackets ? ' · ' + d.brackets + ' [ ]' : '') + '</span></div>';
    }).join('') + '</div>';
  }

  function chipRow(ids, opts) {
    if (!ids.length) return '<span class="reg-dim">—</span>';
    return ids.map(function (id) {
      var mine = !!P[id], e = EXT[id];
      var t = mine ? P[id].title : (e ? e.title : '');
      var bp = mine ? P[id].bp : (e ? e.bp : 0);
      var extra = (opts && opts.span) ? opts.span[id] : '';
      if (mine) {
        return '<button class="reg-mini" data-part="' + id + '" type="button">' +
          '<b>' + esc(id) + '</b><span>' + esc(t) + '</span>' +
          '<i>' + bp + ' bp' + (extra ? ' · ' + extra : '') + '</i></button>';
      }
      var href = e && e.slug ? 'https://registry.igem.org/parts/' + e.slug : null;
      var inner = '<b>' + esc(id) + '</b><span>' + esc(t) + '</span>' +
        '<i>' + bp + ' bp · ' + L('ext') + (extra ? ' · ' + extra : '') + '</i>';
      return href
        ? '<a class="reg-mini is-ext" href="' + href + '" target="_blank" rel="noopener">' + inner + '</a>'
        : '<span class="reg-mini is-ext">' + inner + '</span>';
    }).join('');
  }

  function drawDetail() {
    var box = document.getElementById('detail');
    if (!sel || !P[sel]) { box.hidden = true; box.innerHTML = ''; return; }
    var p = P[sel];
    var span = {};
    p.comp.forEach(function (c) { if (c.start != null) span[c.id] = c.start + '–' + c.end; });
    var note = null;
    (R.where || []).forEach(function (w) { if (w.id === p.id) note = w; });

    box.hidden = false;
    box.innerHTML =
      '<div class="reg-det-top">' +
        '<div>' +
          '<p class="reg-det-eye">L' + p.level + ' · ' + esc(S.p(modOf(p.mod))) +
            (p.driver ? ' · ' + esc(S.p(p.driver === 'veg'
                ? { en: 'constitutive', zh: '組成型' } : { en: 'green light', zh: '綠光誘導' })) : '') +
            (p.cargo ? ' · ' + esc(p.cargo) : '') + '</p>' +
          '<h3>' + esc(p.title || p.id) + '</h3>' +
          '<p class="reg-det-id"><code>' + esc(p.id) + '</code> · ' + esc(p.role) + ' · ' + p.bp + ' bp · ' +
            p.words + ' ' + L('words') + (p.imgs ? ' · ' + p.imgs + ' ' + L('figs') : '') + '</p>' +
        '</div>' +
        '<a class="btn btn-line btn-sm" href="https://registry.igem.org/parts/' + esc(p.slug) +
          '" target="_blank" rel="noopener">' + L('open') + ' ↗</a>' +
      '</div>' +
      (p.flags.length ? '<div class="reg-flags">' + p.flags.map(function (f) {
          var m = FLAGTEXT[f]; if (!m) return '';
          return '<span class="pill pill-' + m.tone + '">' + esc(S.p(m)) + '</span>';
        }).join('') + '</div>' : '') +
      (p.desc ? '<p class="reg-det-desc">' + esc(p.desc) + '</p>' : '') +
      (p.twins.length ? '<p class="reg-det-twin">' + L('twin') + ' ' + p.twins.map(function (t) {
          return '<button class="reg-link" data-part="' + t + '" type="button">' + esc(t) + '</button>';
        }).join(', ') + '</p>' : '') +
      '<h4 class="reg-det-h">' + L('docs') + '</h4>' + docBar(p) +
      (p.figs && p.figs.length
        ? '<h4 class="reg-det-h">' + L('onpage') + ' · ' + p.figs.length + '</h4>' +
          '<div class="reg-strip">' + p.figs.map(function (f) {
            return '<figure class="reg-thumb"><button type="button" data-img="' + esc(f.file) +
              '" data-cap="' + esc(f.cap) + '">' +
              '<img src="assets/img/reg/' + esc(f.file) + '" alt="' + esc(f.cap.slice(0, 120)) +
              '" loading="lazy" decoding="async"></button>' +
              '<figcaption><i>' + esc(f.slot) + '</i>' + esc(f.cap.slice(0, 90)) +
              (f.cap.length > 90 ? '…' : '') + '</figcaption></figure>';
          }).join('') + '</div>'
        : '') +
      '<div class="grid g2" style="margin-top:1.25rem">' +
        '<div><h4 class="reg-det-h">' + L('built') + '</h4><div class="reg-minis">' +
          chipRow(p.comp.map(function (c) { return c.id; }), { span: span }) + '</div></div>' +
        '<div><h4 class="reg-det-h">' + L('used') + '</h4><div class="reg-minis">' +
          chipRow(p.usedin) + '</div></div>' +
      '</div>' +
      (note ? '<div class="reg-det-ask"><b>' + L('ask') + '</b><p>' + esc(S.t(note, 'q')) +
        '</p><p class="reg-det-say"><i>' + L('say') + ':</i> ' + esc(S.t(note, 'a')) + '</p></div>' : '');
  }

  function modOf(id) {
    var out = { en: id, zh: id };
    R.meta.mods.forEach(function (m) { if (m.id === id) out = m; });
    return out;
  }

  function pick(id) {
    sel = (sel === id) ? null : id;
    drawMap();
    if (sel) {
      var d = document.getElementById('detail');
      var top = d.getBoundingClientRect().top + window.pageYOffset - 70;
      if (d.getBoundingClientRect().top > window.innerHeight - 140) window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  function wireMap() {
    document.getElementById('modchips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-mod]'); if (!b) return;
      var m = b.getAttribute('data-mod'), i = mods.indexOf(m);
      if (i >= 0) mods.splice(i, 1); else mods.push(m);
      drawTools(); drawMap();
    });
    document.getElementById('lenschips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-lens]'); if (!b) return;
      var l = b.getAttribute('data-lens'), i = lenses.indexOf(l);
      if (i >= 0) lenses.splice(i, 1); else lenses.push(l);
      drawTools(); drawMap();
    });
    document.getElementById('findbox').addEventListener('input', function (e) {
      q = e.target.value.trim().toLowerCase(); drawMap();
    });
    document.body.addEventListener('click', function (e) {
      var b = e.target.closest('[data-part]'); if (!b) return;
      pick(b.getAttribute('data-part'));
    });
  }

  /* ── the five slots, and the filing drill ────────────────────────────── */
  function slots() {
    var box = document.getElementById('slots');
    if (!R.anatomy) return;
    box.innerHTML = R.anatomy.map(function (a, i) {
      var n = 0;
      R.meta.docTypes.forEach(function (t) { if (t.id === a.id) n = t.count; });
      return '<div class="reg-slot reg-slot-' + a.id + '">' +
        '<div class="reg-slot-h"><span class="reg-slot-n">' + (i + 1) + '</span>' +
          '<h3>' + esc(S.t(a, 'name')) + '</h3>' +
          '<span class="pill pill-line">' + n + ' / ' + R.meta.parts + '</span></div>' +
        '<p class="reg-slot-q">' + esc(S.t(a, 'asks')) + '</p>' +
        '<p>' + esc(S.t(a, 'holds')) + '</p>' +
        (a.heads ? '<div class="kw kw-mono">' + a.heads.map(function (h) {
            return '<span>' + esc(h) + '</span>'; }).join('') + '</div>' : '') +
        '<p class="reg-slot-trap"><b>' + esc(S.p({ en: 'Trap', zh: '陷阱' })) + ':</b> ' +
          esc(S.t(a, 'trap')) + '</p>' +
        '</div>';
    }).join('');
  }

  var sq = [], si = 0, sgot = 0, sdone = 0, sanswered = false;

  function sortDraw() {
    if (!R.where || !sq.length) return;
    var it = sq[si % sq.length];
    sanswered = false;
    document.getElementById('sortitem').innerHTML =
      '<span class="reg-sort-from">' + esc(it.part) + '</span>' + esc(S.t(it, 'line'));
    document.getElementById('sortopts').innerHTML = R.anatomy.map(function (a) {
      return '<button class="chip" data-slot="' + a.id + '" type="button">' +
        esc(S.t(a, 'name')) + '</button>';
    }).join('');
    var ans = document.getElementById('sortans');
    ans.hidden = true; ans.className = 'reg-sort-ans';
    document.getElementById('sortnext').textContent = L('next');
    score();
  }

  function score() {
    document.getElementById('sortscore').textContent = sdone
      ? sgot + ' / ' + sdone : '';
  }

  function sortWire() {
    document.getElementById('sortopts').addEventListener('click', function (e) {
      var b = e.target.closest('[data-slot]'); if (!b || sanswered) return;
      sanswered = true;
      var it = sq[si % sq.length], ok = b.getAttribute('data-slot') === it.slot;
      sdone++; if (ok) sgot++;
      var slot = null;
      R.anatomy.forEach(function (a) { if (a.id === it.slot) slot = a; });
      var ans = document.getElementById('sortans');
      ans.hidden = false;
      ans.className = 'reg-sort-ans ' + (ok ? 'is-ok' : 'is-no');
      ans.innerHTML = '<b>' + (ok ? L('right') : L('wrong')) + ' — ' +
        esc(slot ? S.t(slot, 'name') : it.slot) + '.</b> ' + esc(S.t(it, 'why'));
      Array.prototype.forEach.call(document.querySelectorAll('#sortopts [data-slot]'), function (n) {
        if (n.getAttribute('data-slot') === it.slot) n.setAttribute('aria-pressed', 'true');
      });
      score();
    });
    document.getElementById('sortnext').addEventListener('click', function () {
      si++; sortDraw();
    });
  }

  /* ── figure readings ─────────────────────────────────────────────────── */
  var figkind = '';

  function figs() {
    if (!R.figures) return;
    var kinds = [];
    R.figures.forEach(function (f) { if (kinds.indexOf(f.kind) < 0) kinds.push(f.kind); });
    document.getElementById('figfilter').innerHTML =
      '<button class="chip" data-kind="" type="button" aria-pressed="' + (!figkind) + '">' +
        L('all') + '<span class="c">' + R.figures.length + '</span></button>' +
      kinds.map(function (k) {
        var n = R.figures.filter(function (f) { return f.kind === k; }).length;
        return '<button class="chip" data-kind="' + esc(k) + '" type="button" aria-pressed="' +
          (figkind === k) + '">' + esc(k) + '<span class="c">' + n + '</span></button>';
      }).join('');

    var list = R.figures.filter(function (f) { return !figkind || f.kind === figkind; });
    document.getElementById('figs').innerHTML = list.map(function (f, i) {
      return '<article class="reg-fig">' +
        '<div class="reg-fig-h">' +
          '<span class="pill pill-' + (f.hot ? 'r' : 'line') + '">' + esc(f.kind) + '</span>' +
          '<button class="reg-link" data-part="' + esc(f.part) + '" type="button">' + esc(f.part) + '</button>' +
          '<span class="src">' + esc(f.slot) + (f.label ? ' · ' + esc(f.label) : '') + '</span>' +
        '</div>' +
        '<h3>' + esc(S.t(f, 'what')) + '</h3>' +
        (f.img ? '<button class="reg-shot" type="button" data-img="' + esc(f.img) +
          '" data-cap="' + esc(f.cap || S.t(f, 'what')) + '">' +
          '<img src="assets/img/reg/' + esc(f.img) + '" alt="' + esc(S.t(f, 'what')) +
          '" loading="lazy" decoding="async"></button>' : '') +
        (f.bands ? '<ul class="reg-bands">' + f.bands.map(function (b) {
            return '<li><b>' + esc(b.b) + '</b><span>' + esc(S.t(b, 'is')) + '</span></li>';
          }).join('') + '</ul>' : '') +
        (f.cap ? '<p class="reg-fig-cap">' + esc(f.cap) + '</p>' : '') +
        '<details class="reg-fig-a"><summary>' + L('show') + '</summary>' +
          '<p class="reg-fig-say">' + esc(S.t(f, 'say')) + '</p>' +
          (f.miss ? '<p class="reg-fig-miss"><b>' +
            esc(S.p({ en: 'If pushed', zh: '被追問時' })) + ':</b> ' + esc(S.t(f, 'miss')) + '</p>' : '') +
        '</details>' +
        '</article>';
    }).join('');
  }

  function figWire() {
    document.getElementById('figfilter').addEventListener('click', function (e) {
      var b = e.target.closest('[data-kind]'); if (!b) return;
      figkind = b.getAttribute('data-kind'); figs();
    });
  }

  /* ── numbers ─────────────────────────────────────────────────────────── */
  function nums() {
    if (!R.numbers) return;
    var v = (document.getElementById('numfind').value || '').trim().toLowerCase();
    var list = R.numbers.filter(function (n) {
      if (!v) return true;
      return (n.v + ' ' + S.t(n, 'what') + ' ' + (n.parts || []).join(' ') + ' ' + (n.kind || ''))
        .toLowerCase().indexOf(v) >= 0;
    });
    document.getElementById('nums').innerHTML = list.length ? list.map(function (n) {
      return '<div class="reg-num' + (n.warn ? ' is-warn' : '') + '">' +
        '<b class="reg-num-v">' + esc(n.v) + '</b>' +
        '<div><p>' + esc(S.t(n, 'what')) + '</p>' +
          '<p class="reg-num-p">' + (n.parts || []).map(function (p) {
            return P[p] ? '<button class="reg-link" data-part="' + esc(p) + '" type="button">' +
              esc(p) + '</button>' : esc(p);
          }).join(' ') + (n.kind ? ' <span class="src">' + esc(n.kind) + '</span>' : '') + '</p>' +
          (n.warn ? '<p class="reg-num-w">' + esc(S.t(n, 'warn')) + '</p>' : '') +
        '</div></div>';
    }).join('') : '<p class="reg-dim">' + L('find0') + '</p>';
  }

  /* ── soft spots ──────────────────────────────────────────────────────── */
  function soft() {
    if (!R.soft) return;
    document.getElementById('softlist').innerHTML = R.soft.map(function (s, i) {
      return '<details class="reg-spot reg-ease-' + (s.ease || 2) + '">' +
        '<summary><span class="reg-spot-n">' + (i + 1) + '</span>' +
          '<span class="reg-spot-t">' + esc(S.t(s, 'head')) + '</span>' +
          '<span class="reg-spot-e">' + esc(S.p(
            s.ease === 1 ? { en: 'one click away', zh: '一點就看到' } :
            s.ease === 2 ? { en: 'reading the page', zh: '讀完頁面' } :
                           { en: 'has to compare two pages', zh: '要比對兩頁' })) + '</span>' +
        '</summary>' +
        '<div class="reg-spot-b">' +
          '<p>' + esc(S.t(s, 'body')) + '</p>' +
          (s.parts ? '<p class="reg-spot-p">' + s.parts.map(function (p) {
            return P[p] ? '<button class="reg-link" data-part="' + esc(p) + '" type="button">' +
              esc(p) + '</button>' : esc(p); }).join(' ') + '</p>' : '') +
          '<p class="reg-spot-say"><i>' + L('say') + ':</i> ' + esc(S.t(s, 'say')) + '</p>' +
        '</div></details>';
    }).join('');
  }

  /* ── drill ───────────────────────────────────────────────────────────── */
  function drill() {
    if (!R.drill) return;
    document.getElementById('drilllist').innerHTML = R.drill.map(function (d, i) {
      return '<details class="reg-q">' +
        '<summary><span class="reg-q-n">Q' + (i + 1) + '</span>' +
          '<span class="reg-q-t">' + esc(S.t(d, 'q')) + '</span></summary>' +
        '<div class="reg-q-b">' +
          '<p class="reg-q-a">' + esc(S.t(d, 'a')) + '</p>' +
          (d.ev ? '<p class="reg-q-ev"><b>' + L('ev') + ':</b> ' + esc(S.t(d, 'ev')) + '</p>' : '') +
          (d.miss ? '<p class="reg-q-m"><b>' + L('mist') + ':</b> ' + esc(S.t(d, 'miss')) + '</p>' : '') +
          (d.parts ? '<p class="reg-spot-p">' + d.parts.map(function (p) {
            return P[p] ? '<button class="reg-link" data-part="' + esc(p) + '" type="button">' +
              esc(p) + '</button>' : esc(p); }).join(' ') + '</p>' : '') +
        '</div></details>';
    }).join('');
  }

  /* ── the card ────────────────────────────────────────────────────────── */
  function card() {
    if (!R.card) return;
    document.getElementById('cardlist').innerHTML = R.card.map(function (c) {
      return '<li><b>' + esc(S.t(c, 'head')) + '</b><span>' + esc(S.t(c, 'body')) + '</span></li>';
    }).join('');
  }

  /* ── lightbox ────────────────────────────────────────────────────────── */
  var box;

  function lightbox() {
    box = document.createElement('div');
    box.className = 'reg-lb';
    box.hidden = true;
    box.innerHTML = '<button class="reg-lb-x" type="button" aria-label="Close">\u00d7</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.closest('.reg-lb-x')) shut();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) shut();
    });
    document.body.addEventListener('click', function (e) {
      var b = e.target.closest('[data-img]');
      if (!b) return;
      open(b.getAttribute('data-img'), b.getAttribute('data-cap') || '');
    });
  }

  function open(file, cap) {
    box.querySelector('img').src = 'assets/img/reg/' + file;
    box.querySelector('img').alt = cap.slice(0, 160);
    box.querySelector('figcaption').textContent = cap;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function shut() {
    box.hidden = true;
    box.querySelector('img').src = '';
    document.body.style.overflow = '';
  }

  /* ── boot ────────────────────────────────────────────────────────────── */
  function redraw() {
    stats(); asked(); drawTools(); drawMap(); slots(); sortDraw(); figs(); nums(); soft(); drill(); card();
  }

  document.addEventListener('DOMContentLoaded', function () {
    sq = S.shuffle((R.where || []).filter(function (w) { return w.slot; }));
    wireMap(); sortWire(); figWire(); lightbox();
    document.getElementById('numfind').addEventListener('input', nums);
    redraw();
    S.applyStatic();
    S.onLang(function () { redraw(); S.applyStatic(); });
  });
})();
