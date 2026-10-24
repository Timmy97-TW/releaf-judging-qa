/* Figure Room: the same four judges as the mock room, but they point at a picture.
 * Every figure here is published on our own wiki. Two ways to be asked: say what it
 * is out loud, or pick one of four. Ten to a run, and it ends in the same member card.
 * The roster, the picker, the timer, the scoring and the card are the mock room's;
 * what differs is that the question is an image. */
(function () {
  'use strict';
  var S = window.Site;
  var BANK = (window.FIGURES && window.FIGURES.items) || [];
  var FMETA = (window.FIGURES && window.FIGURES.meta) || { doms: [] };
  var IMG = 'assets/img/fq/';

  var MODES = [
    { id: 'open',   en: 'Say it out loud',  zh: '自己說出來' },
    { id: 'choice', en: 'Pick one of four', zh: '四選一' }
  ];

  var LENS = [
    { id: 5,  en: 'Quick · 5',  zh: '快打 · 5 題' },
    { id: 10, en: 'Real · 10',  zh: '正式 · 10 題' },
    { id: 20, en: 'Long · 20',  zh: '長局 · 20 題' },
    { id: 0,  en: 'Every figure', zh: '整面牆' }
  ];

  var TIERS = [
    { id: 't1',    en: 'First wave',   zh: '第一梯次' },
    { id: 't2',    en: 'Second wave',  zh: '第二梯次' },
    { id: 'all',   en: 'Everything',   zh: '全部' },
    { id: 'shaky', en: 'My shaky list', zh: '我的不熟清單' }
  ];

  var L = {
    start:  { en: 'Show me the first figure', zh: '給我第一張圖' },
    nextq:  { en: 'Next figure', zh: '下一張' },
    show:   { en: 'Show the answer', zh: '顯示答案' },
    pause:  { en: 'Pause', zh: '暫停' },
    resume: { en: 'Resume', zh: '繼續' },
    good:   { en: 'I knew it', zh: '我講得出來' },
    bad:    { en: 'Mark shaky', zh: '標為不熟' },
    empty:  { en: 'Nothing here yet. Run a few figures first.', zh: '這裡還沒有東西。先練幾張圖。' },
    none:   { en: 'No figures match that. Widen the filters.', zh: '沒有符合的圖。把條件放寬一點。' },
    score:  { en: 'Points', zh: '分數' },
    streak: { en: 'Streak', zh: '連勝' },
    run:    { en: 'Figure', zh: '第' },
    done:   { en: 'Run finished', zh: '這局練完了' },
    again:  { en: 'Go again', zh: '再來一次' },
    reroll: { en: 'New panel', zh: '換一組評審' },
    rerolled: { en: 'Four new judges. Nobody owns a subject.', zh: '四位新評審。沒有人固定負責哪個主題。' },
    playing:{ en: 'Playing as', zh: '玩家名稱' },
    whotitle:{ en: 'Who is at the microphone?', zh: '誰站在麥克風前？' },
    whosearch:{ en: 'Find your name', zh: '搜尋你的名字' },
    guest:  { en: 'Not on the roster? Type a name', zh: '不在名單上？自己輸入名字' },
    guestgo:{ en: 'Use this', zh: '就用這個' },
    pickme: { en: 'Pick your name', zh: '選擇你的名字' },
    endrun: { en: 'End the run and save', zh: '結束並記分' },
    lmode:  { en: 'How you answer', zh: '作答方式' },
    lrun:   { en: 'Run', zh: '一局' },
    ldeck:  { en: 'Which figures', zh: '出哪些圖' },
    lnarrow:{ en: 'Narrow it down', zh: '再縮小範圍' },
    ldom:   { en: 'Domain', zh: '領域' },
    copyimg:{ en: 'Copy the card', zh: '複製成績卡' },
    dlimg:  { en: 'Download', zh: '下載圖片' },
    imgdone:{ en: 'Card copied. Paste it straight into Discord.', zh: '成績卡已複製。直接貼到 Discord。' },
    imgfail:{ en: 'Copy is blocked here — the download works.', zh: '這裡不能複製圖片——改用下載。' },
    imghint:{ en: 'If copying is blocked, download it — or right-click the card and copy the image.',
              zh: '如果不能複製，就用下載——或是在卡片上按右鍵複製圖片。' },
    right:  { en: 'Right', zh: '答對' },
    wrong:  { en: 'Not that one', zh: '不是這個' },
    named:  { en: 'named it', zh: '認得出來' },
    honest: { en: 'honest', zh: '誠實' },
    onwiki: { en: 'This figure is published on', zh: '這張圖發表在' },
    speak:  { en: 'Say what it is, out loud, before you open the answer.', zh: '先出聲說出它是什麼，再打開答案。' },
    picked: { en: 'Keys 1 to 4 work too.', zh: '鍵盤 1 到 4 也可以選。' },
    bankn:  { en: 'figures in the bank', zh: '張圖在題庫裡' },
    cnamed: { en: 'figures named', zh: '認出來的圖' },
    cbest:  { en: 'best streak', zh: '最長連勝' },
    cshaky: { en: 'now shaky', zh: '新增不熟' },
    cperf:  { en: 'of a perfect run', zh: '滿分的比例' },
    cpoints:{ en: 'points', zh: '分' },
    cfigs:  { en: 'figures', zh: '張圖' },
    croom:  { en: 'FIGURE ROOM · JUDGING TRAINER', zh: '看圖會場 · 評審訓練' }
  };

  var DOMS = FMETA.doms || [];
  function domInfo(id) {
    for (var i = 0; i < DOMS.length; i++) if (DOMS[i].id === id) return DOMS[i];
    return { id: id, en: id, zh: id, tier: 1 };
  }

  var state = {
    mode: S.load('fq-mode', 'choice'),
    len: S.load('fq-len', 10),
    tier: S.load('fq-tier', 't1'),
    dom: 'all',
    deck: [],
    i: -1,
    phase: 'idle',        /* idle | asked | answered */
    shaky: S.load('fq-shaky', []),
    seconds: 90,
    left: 90,
    tick: null,
    paused: false,
    score: 0,
    streak: 0,
    best: 0,
    hits: 0,
    newShaky: 0,
    timeLeftSum: 0,
    panel: null,
    seed: Math.floor(Math.random() * 1e9),
    active: 0,
    last: null,
    verdict: null
  };

  function el(id) { return document.getElementById(id); }
  function txt(id, v) { var n = el(id); if (n) n.textContent = v; }

  function toast(t, good) {
    var n = el('toast');
    n.textContent = t;
    n.className = 'toast show' + (good === false ? ' bad' : '');
    setTimeout(function () { n.className = 'toast'; }, 1600);
  }

  /* ── the roster, shared with the mock room ──
     Same localStorage keys, so a student picks their face once and both rooms
     know who is at the microphone. */
  var TASKS = window.TASK_COLORS || {};
  var PEOPLE = window.ROSTER || [];

  function person(slug) {
    for (var i = 0; i < PEOPLE.length; i++) if (PEOPLE[i].s === slug) return PEOPLE[i];
    return null;
  }
  function who() {
    var p = person(S.load('who', ''));
    if (p) return p;
    var guest = S.load('guest', '');
    return guest ? { n: guest, guest: true, own: [], mem: [] } : null;
  }
  function tasksOf(p) { return (p.own || []).concat(p.mem || []); }
  function paletteOf(p) {
    var t = tasksOf(p || {}), out = [], i;
    for (i = 0; i < t.length; i++) if (TASKS[t[i]]) out.push(TASKS[t[i]]);
    return out.length ? out : ['#45b06c', '#009c78', '#0167ef', '#61abfe', '#e35a1b'];
  }
  function faceSrc(p, kind) {
    if (!p || p.guest) return '';
    if (kind === 'g' && !p.gf) kind = 'w';
    if (kind === 'w' && !p.w) kind = 'g';
    return 'assets/img/team/' + p.s + '-' + kind + '.webp';
  }
  function initials(name) {
    var bits = String(name || '?').trim().split(/\s+/);
    return ((bits[0] || '?')[0] + (bits.length > 1 ? bits[bits.length - 1][0] : '')).toUpperCase();
  }

  function paintWho() {
    var p = who(), face = el('whoface'), nm = el('whoname');
    if (!p) {
      face.className = 'whoface empty';
      face.style.backgroundImage = '';
      face.textContent = '?';
      nm.textContent = S.p(L.pickme);
      return;
    }
    var src = faceSrc(p, 'w');
    face.className = 'whoface';
    if (src) { face.style.backgroundImage = 'url(' + src + ')'; face.textContent = ''; }
    else { face.style.backgroundImage = ''; face.textContent = initials(p.n); }
    nm.textContent = p.n;
  }

  function drawPicker(filter) {
    var f = (filter || '').toLowerCase().trim(), h = '', i;
    var list = PEOPLE.slice().sort(function (a, b) { return a.n < b.n ? -1 : a.n > b.n ? 1 : 0; });
    h += '<div class="pickgrid">';
    for (i = 0; i < list.length; i++) {
      var p = list[i];
      if (f && (p.n + ' ' + p.r + ' ' + p.t + ' ' + p.sc).toLowerCase().indexOf(f) < 0) continue;
      var src = faceSrc(p, 'w');
      h += '<button class="pickp" data-slug="' + p.s + '">' +
        (src ? '<span class="pickface" style="background-image:url(' + src + ')"></span>'
             : '<span class="pickface empty">' + S.esc(initials(p.n)) + '</span>') +
        '<span class="pickname">' + S.esc(p.n) + '</span></button>';
    }
    h += '</div>';
    el('wholist').innerHTML = h;
  }

  function openPicker() {
    drawPicker(el('whosearch').value);
    el('whomodal').hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(function () { el('whosearch').focus(); }, 30);
  }
  function closePicker() {
    el('whomodal').hidden = true;
    if (el('modal').hidden) document.body.style.overflow = '';
  }
  function choose(slug, guestName) {
    if (slug) { S.save('who', slug); S.save('guest', ''); }
    else { S.save('who', ''); S.save('guest', (guestName || '').slice(0, 18)); }
    paintWho();
    closePicker();
    loadCardArt(function () { if (!el('modal').hidden) drawCard(); });
  }

  /* ── the pool ── */
  function pool() {
    var out = [];
    for (var i = 0; i < BANK.length; i++) {
      var f = BANK[i];
      if (state.tier === 't1' && f.tier !== 1) continue;
      if (state.tier === 't2' && f.tier !== 2) continue;
      if (state.tier === 'shaky' && state.shaky.indexOf(f.id) < 0) continue;
      if (state.dom !== 'all' && f.dom !== state.dom) continue;
      out.push(f);
    }
    return out;
  }

  function buildDeck() {
    var p = S.shuffle(pool());
    state.deck = state.len > 0 ? p.slice(0, state.len) : p;
    state.i = -1;
    state.score = 0; state.streak = 0; state.best = 0;
    state.hits = 0; state.newShaky = 0; state.timeLeftSum = 0;
  }

  /* ── rail ── */
  function chip(c, on) {
    return '<button class="chip" type="button" aria-pressed="' + (on ? 'true' : 'false') +
           '" data-v="' + S.esc(c.id) + '">' + S.esc(S.p(c)) + '</button>';
  }
  function drawRail() {
    el('modes').innerHTML = MODES.map(function (m) { return chip(m, m.id === state.mode); }).join('');
    el('lens').innerHTML = LENS.map(function (m) { return chip(m, m.id === state.len); }).join('');
    el('tiers').innerHTML = TIERS.map(function (m) { return chip(m, m.id === state.tier); }).join('');
    var ds = [{ id: 'all', en: 'All', zh: '全部' }];
    for (var i = 0; i < DOMS.length; i++) {
      var d = DOMS[i];
      if (state.tier === 't1' && d.tier !== 1) continue;
      if (state.tier === 't2' && d.tier !== 2) continue;
      ds.push(d);
    }
    if (state.dom !== 'all') {
      var still = false;
      for (var k = 0; k < ds.length; k++) if (ds[k].id === state.dom) still = true;
      if (!still) state.dom = 'all';
    }
    el('doms').innerHTML = ds.map(function (m) { return chip(m, m.id === state.dom); }).join('');
    var n = pool().length;
    var take = state.len > 0 ? Math.min(state.len, n) : n;
    txt('deckn', S.lang === 'zh'
      ? (n + ' 張可選，這局抽 ' + take + ' 張')
      : (n + ' available, ' + take + ' in this run'));
  }

  function railClick(box, key, cast) {
    el(box).addEventListener('click', function (e) {
      var b = e.target.closest('button[data-v]');
      if (!b) return;
      state[key] = cast ? cast(b.getAttribute('data-v')) : b.getAttribute('data-v');
      S.save('fq-' + key, state[key]);
      drawRail();
      if (state.phase === 'idle') resetBubble();
    });
  }

  /* ── panel ── */
  function drawPanel() {
    if (!state.panel) state.panel = window.Panel.make(state.seed);
    el('bench').innerHTML = window.Panel.bench(state.panel,
      state.phase === 'idle' ? null : state.active, S.lang);
    el('panelline').innerHTML = state.panel.map(function (j) {
      return '<span class="pill pill-line">' + S.esc(S.p(j.role)) + '</span>';
    }).join('');
  }
  function judgeName(j) {
    return (j.title[S.lang] ? j.title[S.lang] + ' ' : '') + j.given + ' ' + j.family;
  }

  /* ── timer: ninety seconds, as in the real room, and the clock is worth points ── */
  function stopTick() { if (state.tick) { clearInterval(state.tick); state.tick = null; } }
  function startTick() {
    stopTick();
    state.left = state.seconds;
    state.paused = false;
    el('ringwrap').hidden = false;
    el('pause').textContent = S.p(L.pause);
    paintTimer();
    state.tick = setInterval(function () {
      if (state.paused) return;
      state.left--;
      if (state.left <= 0) { state.left = 0; stopTick(); }
      paintTimer();
    }, 1000);
  }
  function paintTimer() {
    var m = Math.floor(state.left / 60), s = state.left % 60;
    var n = el('timer');
    n.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    n.className = 'timer' + (state.left <= 10 ? ' over' : state.left <= 30 ? ' warn' : '');
  }

  /* ── one figure ── */
  function resetBubble() {
    el('figwrap').hidden = true;
    el('opts').hidden = true;
    el('opts').innerHTML = '';
    el('ans').hidden = true;
    el('marks').hidden = true;
    el('show').hidden = true;
    el('nextq').hidden = true;
    el('endrun').hidden = true;
    el('ringwrap').hidden = true;
    el('start').hidden = false;
    el('start').textContent = S.p(L.start);
    el('who').textContent = '';
    el('meta').innerHTML = '';
    el('qq').textContent = S.lang === 'zh' ? '準備好就開始。' : 'Ready when you are.';
    el('prog').innerHTML = '';
    state.phase = 'idle';
    stopTick();
    drawPanel();
    paintScore();
  }

  function paintScore() {
    txt('sc-score', String(state.score));
    txt('sc-streak', state.streak + (state.streak >= 3 ? ' 🔥' : ''));
    txt('sc-n', (state.i + 1) + '/' + state.deck.length);
  }
  function addPoints(n, why) {
    state.score += n;
    paintScore();
    if (n) toast((n > 0 ? '+' : '') + n + (why ? ' · ' + why : ''), n > 0);
  }

  function cur() { return state.deck[state.i]; }

  function ask() {
    var f = cur();
    if (!f) return finish();
    state.phase = 'asked';
    state.active = Math.floor(Math.random() * 4);
    drawPanel();

    var j = state.panel[state.active];
    el('who').innerHTML = '<b>' + S.esc(judgeName(j)) + '</b>' +
      '<span class="pill pill-line">' + S.esc(S.p(j.manner)) + '</span>';

    var img = el('figimg');
    img.src = IMG + f.img;
    img.alt = S.t(f, 'ask');
    el('figwrap').hidden = false;

    el('qq').textContent = state.mode === 'choice' ? S.t(f, 'q') : S.t(f, 'ask');

    var d = domInfo(f.dom);
    el('meta').innerHTML =
      '<span class="pill pill-' + (f.tier === 1 ? 'a' : 'b') + '">' + S.esc(S.p(d)) + '</span>' +
      '<span class="pill pill-line">' + (S.lang === 'zh' ? '第 ' + f.tier + ' 梯次' : 'wave ' + f.tier) + '</span>';

    el('start').hidden = true;
    el('ans').hidden = true;
    el('marks').hidden = true;
    el('nextq').hidden = true;
    el('endrun').hidden = false;

    if (state.mode === 'choice') {
      var order = S.shuffle([0, 1, 2, 3]);
      var opts = S.lang === 'zh' ? f.opt_zh : f.opt_en;
      el('opts').innerHTML = order.map(function (oi, n) {
        return '<button class="fq-opt" type="button" data-i="' + oi + '">' +
          '<i>' + 'ABCD'.charAt(n) + '</i><span>' + S.esc(opts[oi]) + '</span></button>';
      }).join('');
      el('opts').hidden = false;
      el('show').hidden = true;
      el('prog').textContent = S.p(L.picked);
    } else {
      el('opts').hidden = true;
      el('show').hidden = false;
      el('show').textContent = S.p(L.show);
      el('prog').textContent = S.p(L.speak);
    }
    paintScore();
    startTick();
  }

  function reveal(f) {
    el('akw').innerHTML = ((S.lang === 'zh' ? f.kw_zh : f.kw_en) || [])
      .map(function (k) { return '<span class="pill pill-w">' + S.esc(k) + '</span>'; }).join('');
    el('atext').textContent = S.t(f, 'a');
    var tr = S.t(f, 'trap');
    el('atrap').hidden = !tr;
    el('atrapt').textContent = tr ? ' ' + tr : '';
    el('asrc').innerHTML = '<span class="src">' + S.esc(S.p(L.onwiki)) + '</span> ' + S.srcLink(f.page);
    el('ans').hidden = false;
  }

  function markShaky(id, on) {
    var at = state.shaky.indexOf(id);
    if (on && at < 0) { state.shaky.push(id); state.newShaky++; }
    if (!on && at >= 0) state.shaky.splice(at, 1);
    S.save('fq-shaky', state.shaky);
    drawShaky();
  }

  /* 10 for naming it, 2 for an honest "I did not", up to 5 for the clock:
     the mock room's arithmetic, minus the seat call and the follow-up. */
  function settle(good, f, honest) {
    stopTick();
    state.phase = 'answered';
    var speed = state.left >= 45 ? 5 : state.left >= 15 ? 3 : state.left >= 0 ? 1 : 0;
    state.timeLeftSum += Math.max(0, state.left);
    if (good) {
      state.hits++;
      state.streak++;
      if (state.streak > state.best) state.best = state.streak;
      markShaky(f.id, false);
      addPoints(10 + speed, S.p(L.named));
    } else {
      state.streak = 0;
      markShaky(f.id, true);
      addPoints(honest ? 2 : 0, honest ? S.p(L.honest) : S.p(L.wrong));
    }
    paintScore();
    reveal(f);
    el('marks').hidden = true;
    el('nextq').hidden = false;
    el('nextq').textContent = state.i + 1 >= state.deck.length ? S.p(L.done) : S.p(L.nextq);
  }

  function pick(oi) {
    if (state.phase !== 'asked' || state.mode !== 'choice') return;
    var f = cur(), ok = oi === f.ans;
    var bs = el('opts').querySelectorAll('.fq-opt');
    for (var i = 0; i < bs.length; i++) {
      var v = +bs[i].getAttribute('data-i');
      bs[i].disabled = true;
      if (v === f.ans) bs[i].classList.add('ok');
      else if (v === oi) bs[i].classList.add('no');
    }
    settle(ok, f, false);
  }

  function next() {
    if (state.i + 1 >= state.deck.length) return finish();
    state.i++;
    ask();
  }

  /* ── end of a run ──
     The line under the score is the part students screenshot, so it is written
     to be read out loud by somebody else. A personal best outranks everything. */
  var VERDICTS = {
    awful: [
      { en: 'You could not name your own figures.', zh: '你叫不出自己做的圖。' },
      { en: 'Those pictures are on your wiki. Go and look.', zh: '那些圖就在你們的 wiki 上。去看。' },
      { en: 'A judge will turn the screen round. Be ready.', zh: '評審會把螢幕轉過來。準備好。' },
      { en: 'Paris does not grade on effort.', zh: '巴黎不會因為你很努力就給分。' },
      { en: 'Good news: the only way from here is up.', zh: '好消息：從這裡開始只能往上。' },
      { en: 'Nobody is ready on their first run. Run again.', zh: '沒有人第一次就準備好。再來一次。' }
    ],
    rough: [
      { en: 'You know the pretty ones. They will pick the others.', zh: '漂亮的那幾張你認得。他們會挑別的。' },
      { en: 'Half a figure is a whole problem.', zh: '認一半，等於整張圖有問題。' },
      { en: 'Survivable. Not yet convincing.', zh: '勉強活下來，但還不夠有說服力。' },
      { en: 'The panel is still writing. That is not good.', zh: '評審還在寫字。那不是好事。' },
      { en: 'Learn two more figures and come back.', zh: '再記熟兩張圖再回來。' }
    ],
    fair: [
      { en: 'Solid middle. Middles do not get nominated.', zh: '中規中矩。中規中矩不會被提名。' },
      { en: 'You would hold the room. Briefly.', zh: '你撐得住場面。一下下。' },
      { en: 'Good enough to be shown a harder one.', zh: '好到會被拿出更難的圖。' },
      { en: 'The easy half is yours. Take the other half.', zh: '簡單的那一半是你的了。把另一半拿下。' },
      { en: 'Respectable. Now make it boring to you.', zh: '可以。現在練到你自己覺得無聊為止。' }
    ],
    good: [
      { en: 'Point at anything. You can read it.', zh: '隨便指一張，你都讀得出來。' },
      { en: 'The panel would nod. Judges rarely nod.', zh: '評審會點頭。評審很少點頭。' },
      { en: 'Sharp. Keep the honest limits in.', zh: '很銳利。誠實講限制的部分要留著。' },
      { en: 'You are the one who should take the figures.', zh: '看圖的題目應該交給你。' },
      { en: 'Nearly nothing shaky left.', zh: '幾乎沒有不熟的地方了。' }
    ],
    great: [
      { en: 'Medal-room answers. Say them exactly like that.', zh: '這是會拿獎的回答。就照這樣講。' },
      { en: 'You could narrate the whole wiki from the pictures.', zh: '你可以光看圖把整個 wiki 講一遍。' },
      { en: 'The panel learns something from you.', zh: '評審會從你這裡學到東西。' },
      { en: 'Frightening. In the right direction.', zh: '有點可怕。但是好的那種。' },
      { en: 'Go and teach the other six seats.', zh: '去把另外六個位置教會。' }
    ]
  };

  var FLAWLESS = [
    { en: 'Every figure, named. Nothing on that wall is a stranger.', zh: '每一張圖都叫得出來。那面牆上沒有陌生人。' },
    { en: 'Clean sweep. Point at any one of them.', zh: '全對。隨便他們指哪一張。' }
  ];
  var NONAMED = [
    { en: 'Not one figure named. Start with the wall below.', zh: '一張都沒認出來。先從下面那面牆開始。' },
    { en: 'You have seen none of these. That is fixable tonight.', zh: '這些你一張都沒看過。今晚就可以補起來。' }
  ];
  var BEST = [
    { en: 'Your best yet, by {d}. Do that again on 13 November.', zh: '你的最佳紀錄，多了 {d} 分。11 月 13 日再做一次。' },
    { en: 'Personal best, {d} up. Somebody has been drilling.', zh: '個人新高，進步 {d} 分。有人在練。' },
    { en: 'Beat your own record by {d}. Keep the receipt.', zh: '破了自己的紀錄 {d} 分。把這張卡留著。' }
  ];

  function band(pct) {
    return pct >= 0.85 ? 'great' : pct >= 0.7 ? 'good' : pct >= 0.52 ? 'fair' : pct >= 0.34 ? 'rough' : 'awful';
  }
  function pickLine(poolArr, key) {
    if (poolArr.length < 2) return poolArr[0];
    var last = S.load('fq-said-' + key, -1), i = 0;
    for (var tries = 0; tries < 12; tries++) {
      i = Math.floor(Math.random() * poolArr.length);
      if (i !== last) break;
    }
    S.save('fq-said-' + key, i);
    return poolArr[i];
  }
  function verdict(r) {
    if (r.gain > 0) {
      var line = pickLine(BEST, 'best');
      return { en: line.en.replace('{d}', r.gain), zh: line.zh.replace('{d}', r.gain) };
    }
    if (r.n >= 4 && r.hits === r.n) return pickLine(FLAWLESS, 'flawless');
    if (r.n >= 4 && r.hits === 0) return pickLine(NONAMED, 'nonamed');
    var b = band(r.pct);
    return pickLine(VERDICTS[b], b);
  }

  function finish() {
    stopTick();
    /* a run you stopped early is scored on what you actually took */
    var n = Math.max(1, Math.min(state.deck.length, state.i + 1));
    var max = n * 15;                            /* 10 named + 5 speed */
    var p0 = who(), key = 'fqpb-' + (p0 ? (p0.s || p0.n) : 'anon') + '-' + state.mode + '-' + (state.len || 0);
    var prev = S.load(key, 0);
    state.last = {
      n: n,
      hits: state.hits,
      pct: Math.min(1, state.score / max),
      avg: Math.round(state.timeLeftSum / n),
      shaky: state.newShaky,
      prev: prev,
      gain: prev && state.score > prev ? state.score - prev : 0
    };
    if (state.score > prev) S.save(key, state.score);
    state.verdict = verdict(state.last);
    state.phase = 'idle';
    resetBubble();
    el('start').textContent = S.p(L.again);
    el('qq').textContent = S.p(L.done);
    openCard();
  }

  /* ── the card you post: the team page's member card, with a score on it ── */
  var FD = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang TC", "Noto Sans TC", sans-serif';
  var LOGO = null, FACES = {};

  function imgLoad(src, done) {
    if (!src) { done(null); return; }
    if (FACES[src] !== undefined) { done(FACES[src]); return; }
    var im = new Image();
    im.onload = function () { FACES[src] = im; done(im); };
    im.onerror = function () { FACES[src] = null; done(null); };
    im.src = src;
  }
  function rr(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }
  function pill(c, x, y, text, fill, ink, border) {
    c.font = '700 19px ' + FD;
    var w = c.measureText(text).width + 34, h = 36;
    rr(c, x, y, w, h, 18);
    if (fill) { c.fillStyle = fill; c.fill(); }
    if (border) { c.strokeStyle = border; c.lineWidth = 1.5; c.stroke(); }
    c.fillStyle = ink;
    c.textBaseline = 'middle';
    c.fillText(text, x + 17, y + h / 2 + 1);
    c.textBaseline = 'alphabetic';
    return w;
  }
  function localDay() {
    var t = new Date(), m = t.getMonth() + 1, d = t.getDate();
    return t.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
  }

  function cardData() {
    var r = state.last || { n: 1, hits: 0, pct: 0, shaky: 0 }, k;
    var mode = '';
    for (k = 0; k < MODES.length; k++) if (MODES[k].id === state.mode) mode = S.p(MODES[k]);
    var p = who() || { n: S.lang === 'zh' ? '匿名' : 'Anonymous', own: [], mem: [], guest: true };
    return {
      p: p,
      score: state.score,
      grade: S.p(state.verdict || { en: '', zh: '' }),
      pct: r.pct,
      stats: [
        [r.hits + '/' + r.n, S.p(L.cnamed)],
        [String(state.best), S.p(L.cbest)],
        [String(r.shaky), S.p(L.cshaky)]
      ],
      foot: [mode, r.n + ' ' + S.p(L.cfigs), localDay(), 'GEMS Taiwan · iGEM 2026'].join('  ·  ')
    };
  }

  function drawCard() {
    var cv = el('cardcv'), c = cv.getContext('2d'), W = cv.width, H = cv.height;
    var d = cardData(), p = d.p, pal = paletteOf(p), i;

    c.clearRect(0, 0, W, H);
    c.fillStyle = '#ffffff';
    c.fillRect(0, 0, W, H);

    /* the frame is the person's own task colours, exactly as on the team page */
    var fg = c.createLinearGradient(0, 0, W, H);
    for (i = 0; i < pal.length; i++) fg.addColorStop(i / Math.max(1, pal.length - 1), pal[i]);
    c.fillStyle = fg;
    c.fillRect(0, 0, W, 14);
    c.fillRect(0, H - 14, W, 14);
    c.fillRect(0, 0, 14, H);
    c.fillRect(W - 14, 0, 14, H);

    /* the sprig: one leaf per task, washed back behind the score */
    c.save();
    c.globalAlpha = 0.1;
    c.translate(430, 300);
    c.scale(2.3, 2.3);
    c.strokeStyle = '#14402b';
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(6, 158); c.bezierCurveTo(26, 122, 36, 74, 33, 6);
    c.stroke();
    var pos = [[31, 20, -42], [27, 46, 40], [23, 70, -34], [18, 93, 36], [14, 114, -28], [11, 132, 34]];
    for (i = 0; i < Math.min(Math.max(pal.length, 3), pos.length); i++) {
      c.save();
      c.translate(pos[i][0], pos[i][1]);
      c.rotate(pos[i][2] * Math.PI / 180);
      c.fillStyle = pal[i % pal.length];
      c.beginPath();
      c.moveTo(0, 0); c.bezierCurveTo(9, -11, 25, -11, 33, 0);
      c.bezierCurveTo(25, 11, 9, 11, 0, 0);
      c.fill();
      c.restore();
    }
    c.restore();

    /* the ReLEAF wordmark, the one from the loading screen */
    if (LOGO) c.drawImage(LOGO, 64, 44, 268, 104);

    c.fillStyle = '#6b6b6b';
    c.font = '700 20px ' + FD;
    c.fillText(S.p(L.croom), 348, 106);

    /* who */
    var y = 212;
    if (p.r) {
      var w = pill(c, 64, y - 26, p.r.toUpperCase(), '#23684a', '#ffffff');
      if (p.t) pill(c, 64 + w + 10, y - 26, p.t.toUpperCase(), '#eceae5', '#55534c', '#dedbd3');
    } else if (p.t) {
      pill(c, 64, y - 26, p.t.toUpperCase(), '#eceae5', '#55534c', '#dedbd3');
    }

    c.fillStyle = '#14402b';
    c.font = '700 70px ' + FD;
    c.fillText(p.n, 64, y + 72);

    /* the score */
    c.fillStyle = '#1a7f45';
    c.font = '700 150px ' + FD;
    c.fillText(String(d.score), 64, 462);
    var sw = c.measureText(String(d.score)).width;
    c.fillStyle = '#86868b';
    c.font = '600 30px ' + FD;
    c.fillText(S.p(L.cpoints), 64 + sw + 18, 462);

    c.fillStyle = '#1d1d1f';
    var vs = 40;
    do { c.font = '600 ' + vs + 'px ' + FD; vs -= 2; }
    while (vs > 22 && c.measureText(d.grade).width > 700);
    c.fillText(d.grade, 64, 534);

    var sx = 64;
    for (i = 0; i < d.stats.length; i++) {
      c.fillStyle = '#1d1d1f';
      c.font = '700 32px ' + FD;
      c.fillText(d.stats[i][0], sx, 584);
      c.fillStyle = '#86868b';
      c.font = '400 20px ' + FD;
      c.fillText(d.stats[i][1], sx, 608);
      sx += 190;
    }

    c.fillStyle = '#a1a1a6';
    c.font = '400 19px ' + FD;
    c.textAlign = 'right';
    c.fillText(d.foot, W - 64, 608);
    c.textAlign = 'start';

    /* the photograph at work */
    var W1 = 300, X1 = W - 64 - W1, Y1 = 150;
    c.save();
    rr(c, X1, Y1, W1, W1, 26);
    c.clip();
    var work = faceSrc(p, 'w');
    if (work && FACES[work]) c.drawImage(FACES[work], X1, Y1, W1, W1);
    else {
      c.fillStyle = '#eceae5';
      c.fillRect(X1, Y1, W1, W1);
      c.fillStyle = '#9b9a94';
      c.font = '700 96px ' + FD;
      c.textAlign = 'center';
      c.fillText(initials(p.n), X1 + W1 / 2, Y1 + W1 / 2 + 34);
      c.textAlign = 'start';
    }
    c.restore();
    c.strokeStyle = 'rgba(20,64,43,.12)';
    c.lineWidth = 2;
    rr(c, X1, Y1, W1, W1, 26);
    c.stroke();

    /* how close to a perfect run */
    var cx = X1 + W1 / 2;
    c.font = '700 30px ' + FD;
    c.textAlign = 'center';
    c.fillStyle = '#1d1d1f';
    c.fillText(Math.round(d.pct * 100) + '%', cx, 508);
    c.fillStyle = '#86868b';
    c.font = '400 19px ' + FD;
    c.fillText(S.p(L.cperf), cx, 532);
    c.textAlign = 'start';
    var bw = W1, bx = X1, by = 548;
    rr(c, bx, by, bw, 10, 5);
    c.fillStyle = '#ececed';
    c.fill();
    if (d.pct > 0) {
      rr(c, bx, by, Math.max(10, bw * d.pct), 10, 5);
      c.fillStyle = '#1a7f45';
      c.fill();
    }
  }

  /* the card needs its pictures before it can be drawn */
  function loadCardArt(then) {
    var p = who(), need = ['assets/img/releaf-word.webp'], i, left;
    if (p && faceSrc(p, 'w')) need.push(faceSrc(p, 'w'));
    left = need.length;
    for (i = 0; i < need.length; i++) {
      (function (src) {
        imgLoad(src, function (im) {
          if (src.indexOf('releaf-word') > -1) LOGO = im;
          if (--left <= 0) then();
        });
      })(need[i]);
    }
  }

  function openCard() {
    el('modal').hidden = false;
    document.body.style.overflow = 'hidden';
    drawCard();
    loadCardArt(drawCard);          /* again once the photographs are in */
  }
  function closeCard() {
    el('modal').hidden = true;
    if (el('whomodal').hidden) document.body.style.overflow = '';
  }

  /* ── shaky list and the wall ── */
  function figCard(f) {
    var d = domInfo(f.dom);
    /* a div, not an anchor: the source link below is an anchor of its own, and a
       browser will not nest one inside another — it hoists it out and the grid breaks */
    return '<div class="fq-card" data-id="' + S.esc(f.id) + '">' +
      '<button class="fq-card-btn" type="button" aria-label="' + S.esc(S.t(f, 'ask')) + '">' +
        '<img src="' + IMG + f.img + '" alt="" loading="lazy" decoding="async"></button>' +
      '<span class="fq-card-t">' + S.esc(S.t(f, 'ask')) + '</span>' +
      '<span class="fq-card-m"><span class="pill pill-' + (f.tier === 1 ? 'a' : 'b') + '">' +
        S.esc(S.p(d)) + '</span>' + S.srcLink(f.page) + '</span></div>';
  }

  function drawShaky() {
    var list = BANK.filter(function (f) { return state.shaky.indexOf(f.id) >= 0; });
    el('shaky').innerHTML = list.length
      ? '<div class="fq-grid">' + list.map(figCard).join('') + '</div>'
      : '<p class="src">' + S.esc(S.p(L.empty)) + '</p>';
  }

  function drawWall() {
    var q = (el('wallq').value || '').trim().toLowerCase();
    var list = BANK.filter(function (f) {
      if (!q) return true;
      var hay = [f.ask_en, f.ask_zh, f.a_en, f.a_zh, f.q_en, f.q_zh, f.page, f.dom].join(' ').toLowerCase();
      return hay.indexOf(q) >= 0;
    });
    el('wall').innerHTML = '<p class="src">' + list.length + ' ' + S.esc(S.p(L.bankn)) + '</p>' +
      '<div class="fq-grid">' + list.map(figCard).join('') + '</div>';
  }

  /* ── static labels ── */
  function labels() {
    txt('l-playing', S.p(L.playing));
    txt('l-mode', S.p(L.lmode));
    txt('l-run', S.p(L.lrun));
    txt('l-deck', S.p(L.ldeck));
    txt('l-narrow', S.p(L.lnarrow));
    txt('l-dom', S.p(L.ldom));
    txt('l-score', S.p(L.score));
    txt('l-streak', S.p(L.streak));
    txt('l-n', S.p(L.run));
    el('reroll').textContent = S.p(L.reroll);
    el('endrun').textContent = S.p(L.endrun);
    el('mgood').textContent = S.p(L.good);
    el('mbad').textContent = S.p(L.bad);
    el('pause').textContent = state.paused ? S.p(L.resume) : S.p(L.pause);
    el('whotitle').textContent = S.p(L.whotitle);
    el('whosearch').placeholder = S.p(L.whosearch);
    el('guestname').placeholder = S.p(L.guest);
    el('guestgo').textContent = S.p(L.guestgo);
    el('copyimg').textContent = S.p(L.copyimg);
    el('dlimg').textContent = S.p(L.dlimg);
    el('againbtn').textContent = S.p(L.again);
    txt('imghint', S.p(L.imghint));
    if (state.phase === 'idle') el('start').textContent = S.p(L.start);
  }

  /* ── wiring ── */
  document.addEventListener('DOMContentLoaded', function () {
    if (!BANK.length) return;

    railClick('modes', 'mode');
    railClick('lens', 'len', Number);
    railClick('tiers', 'tier');
    railClick('doms', 'dom');

    el('whobtn').addEventListener('click', openPicker);
    el('whox').addEventListener('click', closePicker);
    el('whomodal').addEventListener('click', function (e) { if (e.target === this) closePicker(); });
    el('whosearch').addEventListener('input', function () { drawPicker(this.value); });
    el('wholist').addEventListener('click', function (e) {
      var b = e.target.closest('.pickp');
      if (b) choose(b.getAttribute('data-slug'), '');
    });
    el('guestgo').addEventListener('click', function () {
      var v = el('guestname').value.trim();
      if (v) choose('', v);
    });

    el('start').addEventListener('click', function () {
      if (!pool().length) { toast(S.p(L.none), false); return; }
      buildDeck();
      next();
    });

    el('opts').addEventListener('click', function (e) {
      var b = e.target.closest('.fq-opt');
      if (b && !b.disabled) pick(+b.getAttribute('data-i'));
    });

    el('show').addEventListener('click', function () {
      if (state.phase !== 'asked') return;
      stopTick();
      reveal(cur());
      el('show').hidden = true;
      el('marks').hidden = false;
      el('prog').textContent = '';
    });

    el('mgood').addEventListener('click', function () { settle(true, cur(), false); });
    el('mbad').addEventListener('click', function () { settle(false, cur(), true); });
    el('nextq').addEventListener('click', next);
    el('endrun').addEventListener('click', finish);

    el('pause').addEventListener('click', function () {
      state.paused = !state.paused;
      this.textContent = state.paused ? S.p(L.resume) : S.p(L.pause);
    });

    el('reroll').addEventListener('click', function () {
      state.seed = Math.floor(Math.random() * 1e9);
      state.panel = null;
      drawPanel();
      toast(S.p(L.rerolled));
    });

    el('figzoom').addEventListener('click', function () {
      el('lightimg').src = el('figimg').src;
      el('lightbox').hidden = false;
    });
    el('lightx').addEventListener('click', function () { el('lightbox').hidden = true; });
    el('lightbox').addEventListener('click', function (e) { if (e.target === this) this.hidden = true; });

    el('modalx').addEventListener('click', closeCard);
    el('modal').addEventListener('click', function (e) { if (e.target === this) closeCard(); });
    el('againbtn').addEventListener('click', function () { closeCard(); el('start').click(); });

    el('copyimg').addEventListener('click', function () {
      if (!window.ClipboardItem || !navigator.clipboard || !navigator.clipboard.write) {
        toast(S.p(L.imgfail), false);
        return;
      }
      try {
        navigator.clipboard.write([new window.ClipboardItem({
          'image/png': new Promise(function (res) { el('cardcv').toBlob(res, 'image/png'); })
        })]).then(function () { toast(S.p(L.imgdone)); },
                  function () { toast(S.p(L.imgfail), false); });
      } catch (e) { toast(S.p(L.imgfail), false); }
    });

    el('dlimg').addEventListener('click', function () {
      el('cardcv').toBlob(function (b) {
        var u = URL.createObjectURL(b), a = document.createElement('a');
        a.href = u; a.download = 'releaf-figure-room-' + localDay() + '.png'; a.click();
        setTimeout(function () { URL.revokeObjectURL(u); }, 2000);
      }, 'image/png');
    });

    el('wallq').addEventListener('input', drawWall);
    function gridClick(e) {
      if (e.target.closest('a')) return;          /* the wiki link keeps its own job */
      var card = e.target.closest('.fq-card');
      if (!card) return;
      var id = card.getAttribute('data-id');
      for (var i = 0; i < BANK.length; i++) if (BANK[i].id === id) {
        el('lightimg').src = IMG + BANK[i].img;
        el('lightbox').hidden = false;
      }
    }
    el('wall').addEventListener('click', gridClick);
    el('shaky').addEventListener('click', gridClick);

    document.addEventListener('keydown', function (e) {
      if (/^(INPUT|TEXTAREA)$/.test((e.target.tagName || ''))) return;
      if (e.key === 'Escape') {
        if (!el('lightbox').hidden) el('lightbox').hidden = true;
        else if (!el('whomodal').hidden) closePicker();
        else if (!el('modal').hidden) closeCard();
        return;
      }
      if (state.phase === 'asked' && state.mode === 'choice' && /^[1-4]$/.test(e.key)) {
        var bs = el('opts').querySelectorAll('.fq-opt');
        var b = bs[+e.key - 1];
        if (b && !b.disabled) { e.preventDefault(); pick(+b.getAttribute('data-i')); }
        return;
      }
      if (e.key === ' ' && state.phase === 'asked' && state.mode === 'open') {
        e.preventDefault(); el('show').click(); return;
      }
      if (e.key === 'Enter' && state.phase === 'answered') { e.preventDefault(); next(); }
    });

    S.onLang(function () {
      labels();
      paintWho();
      drawRail();
      drawPanel();
      drawShaky();
      drawWall();
      if (state.phase === 'asked' || state.phase === 'answered') {
        var f = cur();
        el('qq').textContent = state.mode === 'choice' ? S.t(f, 'q') : S.t(f, 'ask');
        if (state.phase === 'answered') reveal(f);
      }
      if (!el('whomodal').hidden) drawPicker(el('whosearch').value);
      if (!el('modal').hidden) drawCard();
    });

    labels();
    paintWho();
    drawRail();
    drawShaky();
    drawWall();
    resetBubble();
  });
})();
