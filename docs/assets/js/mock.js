/* Mock judging room: the bench, the deck, the timer, the shaky list. */
(function () {
  'use strict';
  var S = window.Site;

  var JUDGES = [
    { id: 'j1', en: 'Science &amp; data', zh: '科學與數據', doms: ['measurement', 'wetlab', 'plant'] },
    { id: 'j2', en: 'Hardware &amp; engineering', zh: '硬體與工程', doms: ['hardware'] },
    { id: 'j3', en: 'Human practices', zh: '人文實踐', doms: ['ihp'] },
    { id: 'j4', en: 'Village: manufacturing', zh: '生物製造村', doms: ['biomanufacturing', 'entrepreneurship', 'drylab'] }
  ];

  var MODES = [
    { id: 'all',  en: 'Everything',   zh: '全部題庫',  note_en: 'the whole bank', note_zh: '完整題庫' },
    { id: 'a',    en: 'A-tier only',  zh: '只練 A 級', note_en: 'the six domains the panel will push on', note_zh: '評審會追問的六個領域' },
    { id: 'sess', en: 'Full session', zh: '完整一場',  note_en: '14 questions, 20 minutes, mixed like the real thing', note_zh: '14 題、20 分鐘，比例接近真實' },
    { id: 'hard', en: 'Weak points',  zh: '弱點題',    note_en: 'only honesty and evidence probes', note_zh: '只出誠實與證據類' },
    { id: 'shaky',en: 'My shaky list',zh: '我的不熟清單', note_en: 'what you marked shaky', note_zh: '你標成不熟的題' }
  ];

  var L = {
    start:  { en: 'Start', zh: '開始' },
    nextq:  { en: 'Next question', zh: '下一題' },
    show:   { en: 'Show the answer', zh: '顯示答案' },
    hide:   { en: 'Hide', zh: '收起' },
    pause:  { en: 'Pause', zh: '暫停' },
    resume: { en: 'Resume', zh: '繼續' },
    good:   { en: 'I had that', zh: '我答得出來' },
    bad:    { en: 'Mark shaky', zh: '標為不熟' },
    clear:  { en: 'Clear', zh: '清除' },
    empty:  { en: 'Nothing here yet. Run a few questions first.', zh: '這裡還沒有東西。先練幾題。' },
    done:   { en: 'Deck finished. Reshuffle and go again.', zh: '這組練完了。重新洗牌再來一次。' },
    answers:{ en: 'answer', zh: '回答' },
    backup: { en: 'backup', zh: '備援' }
  };

  var state = {
    mode: S.load('mode', 'a'),
    dom: 'all',
    type: 'all',
    deck: [],
    i: -1,
    shown: false,
    shaky: S.load('shaky', []),
    seconds: 90,
    left: 90,
    tick: null,
    running: false
  };

  var SEATS = {
    plant: { en: 'Plants', zh: '植物', n: 1 },
    wet1:  { en: 'Cloning &amp; Circuit', zh: '選殖與線路', n: 2 },
    wet2:  { en: 'Protein &amp; Assays', zh: '蛋白與檢測', n: 3 },
    hw:    { en: 'Hardware', zh: '硬體', n: 4 },
    dry:   { en: 'Software &amp; Models', zh: '軟體與模型', n: 5 },
    biz:   { en: 'Business &amp; Law', zh: '商業與法規', n: 6 },
    ihp:   { en: 'Human Practices', zh: '人文實踐', n: 7 },
    any:   { en: 'Anyone', zh: '任何人', n: 0 }
  };

  function seatName(id) { var s = SEATS[id]; return s ? S.p({ en: s.en, zh: s.zh }) : id; }
  function seatNum(id) { var s = SEATS[id]; return s ? s.n : 0; }
  function domName(id) {
    for (var i = 0; i < META.domains.length; i++) if (META.domains[i].id === id) return S.p({ en: META.domains[i].en, zh: META.domains[i].zh });
    return id;
  }
  function typeName(id) {
    for (var i = 0; i < META.types.length; i++) if (META.types[i].id === id) return S.p({ en: META.types[i].en, zh: META.types[i].zh });
    return id;
  }
  function judgeFor(dom) {
    for (var i = 0; i < JUDGES.length; i++) if (JUDGES[i].doms.indexOf(dom) >= 0) return i;
    return 3;
  }

  /* ── the bench ── */
  function bench(active) {
    var svg = document.getElementById('bench');
    var h = '<rect x="0" y="0" width="900" height="220" fill="none"/>';
    var xs = [128, 353, 578, 803];
    var i;
    for (i = 0; i < 4; i++) {
      var x = xs[i], on = (i === active);
      var ink = on ? '#1a7f45' : '#c7c7cc';
      h += '<g class="fig' + (active !== null && !on ? ' dim' : '') + '">' +
        '<circle cx="' + x + '" cy="62" r="25" fill="none" stroke="' + ink + '" stroke-width="2.4"/>' +
        '<path d="M' + (x - 46) + ' 142 q0 -42 46 -42 q46 0 46 42" fill="none" stroke="' + ink + '" stroke-width="2.4" stroke-linecap="round"/>' +
        (on ? '<circle cx="' + (x + 34) + '" cy="40" r="7" fill="#1a7f45"/>' : '') +
        '</g>';
    }
    h += '<path d="M24 142 h852 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 h-852 a10 10 0 0 1 -10 -10 v-26 a10 10 0 0 1 10 -10z" fill="#fff" stroke="#dcdce1" stroke-width="1.5"/>';
    for (i = 0; i < 4; i++) {
      var lab = S.p({ en: JUDGES[i].en, zh: JUDGES[i].zh }).replace(/&amp;/g, '&');
      h += '<text x="' + xs[i] + '" y="212" text-anchor="middle" font-size="13" ' +
        'font-family="-apple-system, BlinkMacSystemFont, sans-serif" ' +
        'fill="' + (i === active ? '#1d1d1f' : '#86868b') + '" ' +
        'font-weight="' + (i === active ? '600' : '400') + '">' + S.esc(lab) + '</text>';
    }
    svg.innerHTML = h;
  }

  /* ── deck building ── */
  function buildDeck() {
    var pool = [], i, q;
    for (i = 0; i < QUESTIONS.length; i++) {
      q = QUESTIONS[i];
      if (state.dom !== 'all' && q.dom !== state.dom) continue;
      if (state.type !== 'all' && q.type !== state.type) continue;
      if (state.mode === 'a' && q.tier !== 'A') continue;
      if (state.mode === 'hard' && q.type !== 'gap' && q.type !== 'validate') continue;
      if (state.mode === 'shaky' && state.shaky.indexOf(q.id) < 0) continue;
      pool.push(q);
    }
    pool = S.shuffle(pool);

    if (state.mode === 'sess') {
      /* one real session: weight the nominated domains and the village, 14 questions */
      var want = { measurement: 3, hardware: 3, ihp: 3, biomanufacturing: 2, entrepreneurship: 1, plant: 1, wetlab: 1, drylab: 1 };
      var picked = [], used = {};
      for (var d in want) {
        var n = want[d], c = 0;
        for (i = 0; i < pool.length && c < n; i++) {
          if (pool[i].dom === d && !used[pool[i].id]) { picked.push(pool[i]); used[pool[i].id] = 1; c++; }
        }
      }
      for (i = 0; i < pool.length && picked.length < 14; i++) {
        if (!used[pool[i].id]) { picked.push(pool[i]); used[pool[i].id] = 1; }
      }
      pool = S.shuffle(picked).slice(0, 14);
    }
    state.deck = pool;
    state.i = -1;
    document.getElementById('deckn').textContent = S.lang === 'zh'
      ? pool.length + ' 題在這組' : pool.length + ' in this deck';
    drawProg();
  }

  function drawProg() {
    var h = '';
    for (var i = 0; i < state.deck.length; i++) {
      h += '<i class="' + (i < state.i ? 'on' : i === state.i ? 'now' : '') + '"></i>';
    }
    document.getElementById('prog').innerHTML = state.deck.length > 1 ? h : '';
  }

  /* ── timer ── */
  function fmt(s) {
    var m = Math.floor(Math.abs(s) / 60), r = Math.abs(s) % 60;
    return (s < 0 ? '-' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }
  function stopTimer() { if (state.tick) { clearInterval(state.tick); state.tick = null; } state.running = false; }
  function startTimer() {
    stopTimer();
    state.left = state.seconds;
    paintTimer();
    state.running = true;
    state.tick = setInterval(function () { state.left--; paintTimer(); }, 1000);
    document.getElementById('pause').textContent = S.p(L.pause);
  }
  function paintTimer() {
    var t = document.getElementById('timer');
    t.textContent = fmt(state.left);
    t.className = 'timer' + (state.left < 0 ? ' over' : state.left <= 20 ? ' warn' : '');
  }

  /* ── question flow ── */
  function next() {
    if (state.i + 1 >= state.deck.length) {
      if (!state.deck.length) { buildDeck(); }
      if (!state.deck.length) return;
      state.deck = S.shuffle(state.deck); state.i = -1;
      document.getElementById('qq').textContent = S.p(L.done);
    }
    state.i++;
    state.shown = false;
    paint();
    startTimer();
  }

  function paint() {
    var q = state.deck[state.i];
    if (!q) return;
    var ji = judgeFor(q.dom);
    bench(ji);

    document.getElementById('who').innerHTML =
      '<span>' + S.esc(S.p({ en: JUDGES[ji].en, zh: JUDGES[ji].zh }).replace(/&amp;/g, '&')) + '</span>' +
      '<span class="pill ' + (q.tier === 'A' ? 'pill-a' : 'pill-b') + '">' + q.tier + '</span>' +
      '<span class="pill">' + S.esc(typeName(q.type)) + '</span>';
    document.getElementById('qq').textContent = S.t(q, 'q');

    var m = '<span class="seat-badge"><span class="n">' + seatNum(q.seat) + '</span>' +
      S.esc(seatName(q.seat).replace(/&amp;/g, '&')) + ' ' + S.p(L.answers) + '</span>';
    if (q.backup && q.backup !== q.seat && SEATS[q.backup]) {
      m += '<span class="pill pill-line">' + S.p(L.backup) + ': ' +
        S.esc(seatName(q.backup).replace(/&amp;/g, '&')) + '</span>';
    }
    m += '<span class="pill">' + S.esc(domName(q.dom)) + '</span>';
    document.getElementById('meta').innerHTML = m;

    var kw = (S.lang === 'zh' && q.kw_zh && q.kw_zh.length ? q.kw_zh : q.kw_en) || [];
    var kh = '';
    for (var i = 0; i < kw.length; i++) kh += '<span>' + S.esc(kw[i]) + '</span>';
    document.getElementById('akw').innerHTML = kh;
    document.getElementById('atext').textContent = S.t(q, 'a');
    var trap = S.t(q, 'trap');
    document.getElementById('atrap').hidden = !trap;
    document.getElementById('atrapt').textContent = trap;
    var src = '';
    for (i = 0; i < (q.pages || []).length; i++) src += S.srcLink(q.pages[i]) + ' ';
    if (q.basis) src += '<span class="src">· ' + S.esc(q.basis) + '</span>';
    document.getElementById('asrc').innerHTML = src;

    document.getElementById('ans').hidden = !state.shown;
    document.getElementById('show').textContent = state.shown ? S.p(L.hide) : S.p(L.show);
    document.getElementById('show').hidden = false;
    document.getElementById('nextq').hidden = false;
    document.getElementById('nextq').textContent = S.p(L.nextq);
    document.getElementById('ringwrap').hidden = false;
    document.getElementById('start').hidden = true;
    document.getElementById('mgood').textContent = S.p(L.good);
    document.getElementById('mbad').textContent = S.p(L.bad);
    drawProg();
  }

  function mark(good) {
    var q = state.deck[state.i];
    if (!q) return;
    var at = state.shaky.indexOf(q.id);
    if (good && at >= 0) state.shaky.splice(at, 1);
    if (!good && at < 0) state.shaky.push(q.id);
    S.save('shaky', state.shaky);
    drawShaky();
    next();
  }

  /* ── chips ── */
  function chips(el, items, cur, attr) {
    var h = '';
    for (var i = 0; i < items.length; i++) {
      h += '<button class="chip" ' + attr + '="' + items[i].id + '" aria-pressed="' + (cur === items[i].id) + '">' +
        S.esc(S.p({ en: items[i].en, zh: items[i].zh }).replace(/&amp;/g, '&')) +
        (items[i].c !== undefined ? '<span class="c">' + items[i].c + '</span>' : '') + '</button>';
    }
    document.getElementById(el).innerHTML = h;
  }

  function drawChips() {
    chips('modes', MODES, state.mode, 'data-m');
    var dc = {}, i;
    for (i = 0; i < QUESTIONS.length; i++) dc[QUESTIONS[i].dom] = (dc[QUESTIONS[i].dom] || 0) + 1;
    var ds = [{ id: 'all', en: 'All domains', zh: '全部領域' }];
    for (i = 0; i < META.domains.length; i++) {
      var d = META.domains[i];
      if (dc[d.id]) ds.push({ id: d.id, en: d.en, zh: d.zh, c: dc[d.id] });
    }
    chips('doms', ds, state.dom, 'data-d');
    var tc = {};
    for (i = 0; i < QUESTIONS.length; i++) tc[QUESTIONS[i].type] = (tc[QUESTIONS[i].type] || 0) + 1;
    var ts = [{ id: 'all', en: 'All types', zh: '全部類型' }];
    for (i = 0; i < META.types.length; i++) {
      var t = META.types[i];
      if (tc[t.id]) ts.push({ id: t.id, en: t.en, zh: t.zh, c: tc[t.id] });
    }
    chips('types', ts, state.type, 'data-t');
  }

  function drawShaky() {
    var byId = {}, i;
    for (i = 0; i < QUESTIONS.length; i++) byId[QUESTIONS[i].id] = QUESTIONS[i];
    var h = '', n = 0;
    for (i = 0; i < state.shaky.length; i++) {
      var q = byId[state.shaky[i]];
      if (!q) continue;
      n++;
      h += '<details class="d"><summary>' + S.esc(S.t(q, 'q')) + '</summary>' +
        '<div style="padding:.6rem 0 0 1.2rem"><p class="a-text" style="font-size:.9375rem">' +
        S.esc(S.t(q, 'a')) + '</p>' +
        '<button class="btn btn-ghost btn-sm" data-clear="' + q.id + '">' + S.p(L.clear) + '</button></div></details>';
    }
    document.getElementById('shaky').innerHTML = n ? h :
      '<p class="lede-sm">' + S.p(L.empty) + '</p>';
  }

  function drawRecorded(filter) {
    var f = (filter || '').toLowerCase().trim();
    var groups = {}, order = [], i;
    for (i = 0; i < RECORDED.length; i++) {
      var r = RECORDED[i];
      if (f && (r.q + ' ' + r.team + ' ' + r.sheet + ' ' + (r.kw || '')).toLowerCase().indexOf(f) < 0) continue;
      var k = r.sheet || 'Other';
      if (!groups[k]) { groups[k] = []; order.push(k); }
      groups[k].push(r);
    }
    var h = '';
    for (i = 0; i < order.length; i++) {
      var g = groups[order[i]];
      h += '<div class="fact-group"><h3>' + S.esc(order[i]) + ' <span class="c">' + g.length + '</span></h3>';
      for (var j = 0; j < g.length; j++) {
        var x = g[j];
        var who = [x.year || '', x.level || '', x.team || ''].filter(Boolean).join(' · ');
        h += '<details class="d"><summary><span>' + S.esc(x.q) + '</span></summary>' +
          '<div style="padding:.5rem 0 0 1.2rem">' +
          (who ? '<p class="src">' + S.esc(who) + '</p>' : '') +
          (x.kw ? '<div class="kw kw-mono"><span>' + S.esc(String(x.kw).split(';').join('</span><span>')) + '</span></div>' : '') +
          (x.note ? '<p style="font-size:.9375rem;color:var(--ink-2)">' + S.esc(x.note) + '</p>' : '') +
          '</div></details>';
      }
      h += '</div>';
    }
    document.getElementById('rec').innerHTML = h || '<p class="lede-sm">' + S.p(L.empty) + '</p>';
  }

  /* ── events ── */
  document.getElementById('start').addEventListener('click', function () { buildDeck(); next(); });
  document.getElementById('nextq').addEventListener('click', next);
  document.getElementById('show').addEventListener('click', function () {
    state.shown = !state.shown;
    document.getElementById('ans').hidden = !state.shown;
    this.textContent = state.shown ? S.p(L.hide) : S.p(L.show);
  });
  document.getElementById('pause').addEventListener('click', function () {
    if (state.running) { stopTimer(); this.textContent = S.p(L.resume); }
    else {
      state.running = true;
      state.tick = setInterval(function () { state.left--; paintTimer(); }, 1000);
      this.textContent = S.p(L.pause);
    }
  });
  document.getElementById('mgood').addEventListener('click', function () { mark(true); });
  document.getElementById('mbad').addEventListener('click', function () { mark(false); });
  document.getElementById('modes').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.mode = b.getAttribute('data-m'); S.save('mode', state.mode);
    drawChips(); buildDeck();
  });
  document.getElementById('doms').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.dom = b.getAttribute('data-d'); drawChips(); buildDeck();
  });
  document.getElementById('types').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.type = b.getAttribute('data-t'); drawChips(); buildDeck();
  });
  document.getElementById('shaky').addEventListener('click', function (e) {
    var b = e.target.closest('[data-clear]'); if (!b) return;
    var at = state.shaky.indexOf(b.getAttribute('data-clear'));
    if (at >= 0) { state.shaky.splice(at, 1); S.save('shaky', state.shaky); drawShaky(); }
  });
  document.getElementById('rq').addEventListener('input', function (e) { drawRecorded(e.target.value); });

  S.onLang(function () {
    document.getElementById('start').textContent = S.p(L.start);
    drawChips();
    drawShaky();
    drawRecorded(document.getElementById('rq').value);
    if (state.i >= 0) paint(); else { bench(null); buildDeck(); }
  });
})();
