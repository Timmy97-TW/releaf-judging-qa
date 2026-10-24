/* Mock judging room: a generated panel, a question from someone you did not expect,
 * a guess at who should take it, a timer, points, and a card worth posting. */
(function () {
  'use strict';
  var S = window.Site;

  var MODES = [
    { id: 'all',  en: 'Everything',   zh: '全部題庫' },
    { id: 'a',    en: 'A-tier only',  zh: '只練 A 級' },
    { id: 'sess', en: 'Full session', zh: '完整一場' },
    { id: 'hard', en: 'Weak points',  zh: '弱點題' },
    { id: 'deep', en: 'Deep end',     zh: '深水區' },
    { id: 'kyle', en: "Adviser's set", zh: '顧問出題' },
    { id: 'shaky',en: 'My shaky list',zh: '我的不熟清單' }
  ];

  var LENS = [
    { id: 5,  en: 'Quick · 5', zh: '快打 · 5 題' },
    { id: 10, en: 'Real · 10', zh: '正式 · 10 題' },
    { id: 25, en: 'Long · 25', zh: '長局 · 25 題' },
    { id: 0,  en: 'Everything', zh: '整個題庫' }
  ];

  var L = {
    start:  { en: 'Take the first question', zh: '接下第一題' },
    nextq:  { en: 'Next question', zh: '下一題' },
    show:   { en: 'Show the answer', zh: '顯示答案' },
    hide:   { en: 'Hide', zh: '收起' },
    pause:  { en: 'Pause', zh: '暫停' },
    resume: { en: 'Resume', zh: '繼續' },
    good:   { en: 'I had that', zh: '我答得出來' },
    bad:    { en: 'Mark shaky', zh: '標為不熟' },
    clear:  { en: 'Clear', zh: '清除' },
    empty:  { en: 'Nothing here yet. Run a few questions first.', zh: '這裡還沒有東西。先練幾題。' },
    answers:{ en: 'answers', zh: '回答' },
    backup: { en: 'backup', zh: '備援' },
    whoq:   { en: 'Who takes this one?', zh: '這題誰接？' },
    whohint:{ en: 'Say it out loud first. Then pick — keys 1 to 7 work — and the room tells you whether the microphone went to the right person. Space opens the answer, Enter moves on.',
              zh: '先出聲回答。再選人（鍵盤 1 到 7 也可以），這間房間會告訴你麥克風有沒有交到對的人手上。空白鍵翻開答案，Enter 下一題。' },
    right:  { en: 'Right seat', zh: '位置正確' },
    close:  { en: 'That is the backup seat', zh: '那是備援的位置' },
    wrong:  { en: 'Not this one', zh: '不是這個位置' },
    owns:   { en: 'It belongs to', zh: '這題屬於' },
    deck:   { en: 'in this deck', zh: '題在這組' },
    score:  { en: 'Points', zh: '分數' },
    streak: { en: 'Streak', zh: '連勝' },
    run:    { en: 'Question', zh: '第' },
    followup:{ en: 'Follow-up', zh: '追問' },
    fdid:   { en: 'Handled it', zh: '接住了' },
    fmiss:  { en: 'Fumbled', zh: '沒接住' },
    done:   { en: 'Deck finished', zh: '這組練完了' },
    again:  { en: 'Go again', zh: '再來一次' },
    reroll: { en: 'New panel', zh: '換一組評審' },
    rerolled:{ en: 'Four new judges. Nobody owns a subject.', zh: '四位新評審。沒有人固定負責哪個主題。' },
    seatacc:{ en: 'right seat', zh: '位置答對' },
    conf:   { en: 'answered', zh: '答得出來' },
    secs:   { en: 's left on average', zh: '秒（平均剩餘）' },
    playing:{ en: 'Playing as', zh: '玩家名稱' },
    yourname:{ en: 'your name', zh: '你的名字' },
    endrun: { en: 'End the run and save', zh: '結束並記分' },
    whotitle:{ en: 'Who is at the microphone?', zh: '誰站在麥克風前？' },
    whosearch:{ en: 'Find your name', zh: '搜尋你的名字' },
    guest:  { en: 'Not on the roster? Type a name', zh: '不在名單上？自己輸入名字' },
    guestgo:{ en: 'Use this', zh: '就用這個' },
    pickme: { en: 'Pick your name', zh: '選擇你的名字' },
    lrun:   { en: 'Run', zh: '一局' },
    ldeck:  { en: 'Deck', zh: '題庫' },
    lnarrow:{ en: 'Narrow it down', zh: '再縮小範圍' },
    ldom:   { en: 'Domain', zh: '領域' },
    ltype:  { en: 'Question type', zh: '題型' },
    copyimg:{ en: 'Copy the card', zh: '複製成績卡' },
    dlimg:  { en: 'Download', zh: '下載圖片' },
    imgdone:{ en: 'Card copied. Paste it straight into Discord.', zh: '成績卡已複製。直接貼到 Discord。' },
    imgfail:{ en: 'Copy is blocked here — the download works.', zh: '這裡不能複製圖片——改用下載。' },
    close:  { en: 'Close', zh: '關閉' },
    imghint:{ en: 'If copying is blocked, download it — or right-click the card and copy the image.',
              zh: '如果不能複製，就用下載——或是在卡片上按右鍵複製圖片。' }
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
  var SEAT_ORDER = ['plant', 'wet1', 'wet2', 'hw', 'dry', 'biz', 'ihp'];

  /* what a judge throws at you after you have answered */
  var FOLLOWUPS = [
    { en: 'Now say that in one sentence.', zh: '現在用一句話講完。' },
    { en: 'Give me the number, with its unit.', zh: '給我那個數字，還有單位。' },
    { en: 'Say it again without the jargon.', zh: '不要用術語，再講一次。' },
    { en: 'Who else on your team can add to that?', zh: '你們隊上還有誰可以補充？' },
    { en: 'Where on the wiki is that written?', zh: '那寫在 wiki 的哪裡？' },
    { en: 'What would change your mind about that?', zh: '什麼樣的結果會讓你改變這個說法？' },
    { en: 'How many times did you do it?', zh: '這件事你們做了幾次？' },
    { en: 'And what did you get wrong there?', zh: '那你們在那裡做錯了什麼？' }
  ];

  var urlMode = (location.search.match(/[?&]mode=([a-z]+)/) || [])[1];
  if (urlMode && !/^(all|a|sess|hard|deep|kyle|shaky)$/.test(urlMode)) urlMode = null;
  var urlType = (location.search.match(/[?&]type=([a-z]+)/) || [])[1] || 'all';
  if (!/^(all|fact|design|validate|compare|boundary|integrate|gap|impact|reason|history)$/.test(urlType)) urlType = 'all';
  var urlDom = (location.search.match(/[?&]dom=([a-z]+)/) || [])[1] || 'all';
  if (!/^(all|measurement|hardware|ihp|biomanufacturing|entrepreneurship|plant|wetlab|drylab)$/.test(urlDom)) urlDom = 'all';

  var state = {
    mode: urlMode || S.load('mode', 'a'),
    len: S.load('len', 10),
    dom: urlDom,
    type: urlType,
    deck: [],
    i: -1,
    phase: 'idle',          /* idle | guess | answer | followup */
    shown: false,
    shaky: S.load('shaky', []),
    seconds: 90,
    left: 90,
    tick: null,
    running: false,
    asker: 0,
    panel: null,
    /* the run */
    score: 0,
    streak: 0,
    best: 0,
    seatRight: 0,
    seatTried: 0,
    confident: 0,
    timeLeftSum: 0,
    guess: null,
    marked: false,
    last: null,
    verdict: null,
    fu: null
  };

  /* ── the roster, and who is at the microphone ── */
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
    var p = who();
    var face = el('whoface'), nm = el('whoname');
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
        '<span class="pickname">' + S.esc(p.n) + '</span>' +
        '</button>';
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
    if (!el('modal').hidden) drawCard();
  }

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
  function el(id) { return document.getElementById(id); }

  /* ── the panel ── */
  function loadPanel(force) {
    var seed = S.load('panelseed', 0);
    if (!seed || force) { seed = Math.floor(Math.random() * 2147483647); S.save('panelseed', seed); }
    state.panel = window.Panel.make(seed);
  }

  function drawBench(active) {
    el('bench').innerHTML = window.Panel.bench(state.panel, active, S.lang);
    var j = state.panel[active === null ? 0 : active];
    el('panelline').innerHTML = active === null
      ? '<span class="pill pill-line">' + S.esc(S.p({ en: 'Four judges, generated for this session', zh: '四位評審，這次練習隨機生成' })) + '</span>'
      : '<span class="pill pill-line">' + S.esc(S.p(j.role)) + '</span>' +
        '<span class="pill pill-line">' + S.esc(S.p(j.manner)) + '</span>';
  }

  /* ── deck ── */
  function buildDeck() {
    var pool = [], i, q;
    for (i = 0; i < QUESTIONS.length; i++) {
      q = QUESTIONS[i];
      if (state.dom !== 'all' && q.dom !== state.dom) continue;
      if (state.type !== 'all' && q.type !== state.type) continue;
      if (state.mode === 'a' && q.tier !== 'A') continue;
      if (state.mode === 'hard' && q.type !== 'gap' && q.type !== 'validate') continue;
      if (state.mode === 'deep' && !q.deep) continue;
      if (state.mode === 'kyle' && !q.author) continue;
      if (state.mode === 'shaky' && state.shaky.indexOf(q.id) < 0) continue;
      pool.push(q);
    }
    pool = S.shuffle(pool);

    if (state.mode === 'sess') {
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
    if (state.len && pool.length > state.len) pool = pool.slice(0, state.len);
    state.deck = pool;
    state.i = -1;
    el('deckn').textContent = pool.length + ' ' + S.p(L.deck);
    drawProg();
  }

  function drawProg() {
    var h = '';
    for (var i = 0; i < state.deck.length; i++) {
      h += '<i class="' + (i < state.i ? 'on' : i === state.i ? 'now' : '') + '"></i>';
    }
    el('prog').innerHTML = state.deck.length > 1 ? h : '';
  }

  /* ── timer ── */
  function fmt(s) {
    var m = Math.floor(Math.abs(s) / 60), r = Math.abs(s) % 60;
    return (s < 0 ? '-' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }
  function stopTimer() { if (state.tick) { clearInterval(state.tick); state.tick = null; } state.running = false; }
  function startTimer(secs) {
    stopTimer();
    state.seconds = secs;
    state.left = secs;
    paintTimer();
    state.running = true;
    state.tick = setInterval(function () { state.left--; paintTimer(); }, 1000);
    el('pause').textContent = S.p(L.pause);
  }
  function paintTimer() {
    var t = el('timer');
    t.textContent = fmt(state.left);
    t.className = 'timer' + (state.left < 0 ? ' over' : state.left <= 20 ? ' warn' : '');
  }

  /* ── scoring ── */
  function toast(txt, good) {
    var t = el('toast');
    t.textContent = txt;
    t.className = 'toast show' + (good === false ? ' bad' : '');
    setTimeout(function () { t.className = 'toast'; }, 1500);
  }
  function addPoints(n, why) {
    state.score += n;
    paintScore();
    if (n) toast((n > 0 ? '+' : '') + n + (why ? ' · ' + why : ''), n > 0);
  }
  function paintScore() {
    el('sc-score').textContent = state.score;
    el('sc-streak').textContent = state.streak + (state.streak >= 3 ? ' 🔥' : '');
    el('sc-n').textContent = (state.i + 1) + '/' + state.deck.length;
  }

  /* ── question flow ── */
  function next() {
    if (state.i + 1 >= state.deck.length) { finish(); return; }
    state.i++;
    state.shown = false;
    state.guess = null;
    state.marked = false;
    state.phase = 'guess';
    state.asker = Math.floor(Math.random() * 4);
    paint();
    startTimer(90);
  }

  function paint() {
    var q = state.deck[state.i];
    if (!q) return;
    drawBench(state.asker);
    var j = state.panel[state.asker];

    el('who').innerHTML = '<span>' +
      S.esc((j.title[S.lang] ? j.title[S.lang] + ' ' : '') + j.given + ' ' + j.family) + '</span>' +
      '<span class="pill pill-line">' + S.esc(S.p(j.field)) + '</span>';
    el('qq').textContent = S.t(q, 'q');

    /* nothing about the question is revealed until the seat is called */
    el('meta').innerHTML = '';
    el('guessbox').hidden = false;
    el('guessres').hidden = true;
    el('ans').hidden = true;
    el('show').hidden = true;
    el('nextq').hidden = true;
    el('fubox').hidden = true;
    el('marks').hidden = true;
    el('ringwrap').hidden = false;
    el('start').hidden = true;
    paintSeatChips();
    paintScore();
    drawProg();
  }

  function paintSeatChips() {
    var h = '', i;
    for (i = 0; i < SEAT_ORDER.length; i++) {
      var id = SEAT_ORDER[i];
      h += '<button class="chip seatchip" data-seat="' + id + '">' +
        '<span class="sn">' + SEATS[id].n + '</span> ' +
        S.esc(seatName(id).replace(/&amp;/g, '&')) + '</button>';
    }
    h += '<button class="chip seatchip" data-seat="any">' + S.esc(seatName('any')) + '</button>';
    el('seatchips').innerHTML = h;
  }

  function callSeat(seat) {
    if (state.phase !== 'guess') return;
    var q = state.deck[state.i];
    state.guess = seat;
    state.phase = 'answer';
    state.seatTried++;

    var exact = seat === q.seat;
    var backup = !exact && q.backup && seat === q.backup;
    var pts = exact ? 10 : backup ? 4 : 0;
    if (exact) { state.seatRight++; state.streak++; if (state.streak > state.best) state.best = state.streak; }
    else state.streak = 0;
    addPoints(pts, exact ? S.p(L.right) : backup ? S.p(L.close) : S.p(L.wrong));

    var cls = exact ? 'ok' : backup ? 'near' : 'no';
    var head = exact ? S.p(L.right) : backup ? S.p(L.close) : S.p(L.wrong);
    el('guessres').className = 'guessres ' + cls;
    el('guessres').innerHTML = '<b>' + S.esc(head) + '</b> · ' + S.esc(S.p(L.owns)) + ' ' +
      '<span class="seat-badge"><span class="n">' + seatNum(q.seat) + '</span>' +
      S.esc(seatName(q.seat).replace(/&amp;/g, '&')) + '</span>' +
      (q.backup && SEATS[q.backup] ? ' <span class="pill pill-line">' + S.p(L.backup) + ': ' +
        S.esc(seatName(q.backup).replace(/&amp;/g, '&')) + '</span>' : '');
    el('guessres').hidden = false;
    el('guessbox').hidden = true;

    /* only now does the room tell you what kind of question it was */
    el('meta').innerHTML =
      '<span class="pill ' + (q.tier === 'A' ? 'pill-a' : 'pill-b') + '">' + q.tier + '</span>' +
      '<span class="pill">' + S.esc(typeName(q.type)) + '</span>' +
      '<span class="pill">' + S.esc(domName(q.dom)) + '</span>' +
      (q.deep ? '<span class="pill pill-deep">' + (S.lang === 'zh' ? '深水區' : 'Deep end') + '</span>' : '') +
      (q.author ? '<span class="pill pill-author">' + S.esc(S.lang === 'zh' && q.author_zh ? q.author_zh : q.author) +
        (S.lang === 'zh' ? '' : ' asks') + '</span>' : '');

    el('show').hidden = false;
    el('show').textContent = S.p(L.show);
    el('marks').hidden = false;
    el('mgood').textContent = S.p(L.good);
    el('mbad').textContent = S.p(L.bad);
  }

  function reveal() {
    var q = state.deck[state.i];
    state.shown = !state.shown;
    el('ans').hidden = !state.shown;
    el('show').textContent = state.shown ? S.p(L.hide) : S.p(L.show);
    if (!state.shown) return;
    var kw = (S.lang === 'zh' && q.kw_zh && q.kw_zh.length ? q.kw_zh : q.kw_en) || [];
    var kh = '';
    for (var i = 0; i < kw.length; i++) kh += '<span>' + S.esc(kw[i]) + '</span>';
    el('akw').innerHTML = kh;
    el('atext').textContent = S.t(q, 'a');
    var trap = S.t(q, 'trap');
    el('atrap').hidden = !trap;
    el('atrapt').textContent = trap;
    var src = '';
    for (i = 0; i < (q.pages || []).length; i++) src += S.srcLink(q.pages[i]) + ' ';
    if (q.basis) src += '<span class="src">· ' + S.esc(q.basis) + '</span>';
    el('asrc').innerHTML = src;
  }

  function mark(good) {
    var q = state.deck[state.i];
    if (!q || state.phase === 'guess' || state.marked) return;
    state.marked = true;
    el('marks').hidden = true;
    var at = state.shaky.indexOf(q.id);
    if (good && at >= 0) state.shaky.splice(at, 1);
    if (!good && at < 0) state.shaky.push(q.id);
    S.save('shaky', state.shaky);
    drawShaky();

    var pts = good ? 10 : 2;                      /* honesty still scores */
    if (good) state.confident++;
    else state.streak = 0;
    var speed = state.left >= 45 ? 5 : state.left >= 15 ? 3 : state.left >= 0 ? 1 : 0;
    state.timeLeftSum += Math.max(0, state.left);
    addPoints(pts + speed, good ? S.p({ en: 'answered', zh: '答得出來' }) : S.p({ en: 'honest', zh: '誠實' }));
    stopTimer();

    /* one question in four, somebody on the bench is not finished with you */
    if (Math.random() < 0.28) startFollowup();
    else endQuestion();
  }

  function startFollowup() {
    state.phase = 'followup';
    var other = (state.asker + 1 + Math.floor(Math.random() * 3)) % 4;
    state.fu = { judge: other, text: FOLLOWUPS[Math.floor(Math.random() * FOLLOWUPS.length)] };
    drawBench(other);
    var j = state.panel[other];
    el('fubox').hidden = false;
    el('fuwho').textContent = (j.title[S.lang] ? j.title[S.lang] + ' ' : '') + j.given + ' ' + j.family;
    el('futext').textContent = S.p(state.fu.text);
    el('fudid').textContent = S.p(L.fdid);
    el('fumiss').textContent = S.p(L.fmiss);
    el('marks').hidden = true;
    startTimer(20);
  }

  function answerFollowup(ok) {
    stopTimer();
    addPoints(ok ? 6 : 0, S.p(L.followup));
    if (!ok) state.streak = 0;
    el('fubox').hidden = true;
    endQuestion();
  }

  function endQuestion() {
    state.phase = 'answer';
    el('endrun').hidden = false;
    el('endrun').textContent = S.p(L.endrun);
    el('nextq').hidden = false;
    el('nextq').textContent = state.i + 1 >= state.deck.length ? S.p(L.done) : S.p(L.nextq);
    paintScore();
  }

  /* ── end of a run ──
     The line under the score is the part students screenshot, so it is written
     to be read out loud by somebody else. Low scores get told the truth; a
     personal best gets told properly. Never the same line twice running. */
  var VERDICTS = {
    awful: [
      { en: 'The judges have questions. All of them.', zh: '評審有問題。全部都有問題。' },
      { en: 'That was a rehearsal for a rehearsal.', zh: '那是為了彩排而做的彩排。' },
      { en: 'Four strangers, nearly no answers.', zh: '四個陌生人，幾乎沒有答案。' },
      { en: 'Paris does not grade on effort.', zh: '巴黎不會因為你很努力就給分。' },
      { en: 'Good news: the only way from here is up.', zh: '好消息：從這裡開始只能往上。' },
      { en: 'The wiki is right there. Go and read it.', zh: 'wiki 就在那裡。去讀。' },
      { en: 'Nobody is ready on their first run. Run again.', zh: '沒有人第一次就準備好。再來一次。' }
    ],
    rough: [
      { en: 'Survivable. Not yet convincing.', zh: '勉強活下來，但還不夠有說服力。' },
      { en: 'You knew some of it. They will find the rest.', zh: '你會一部分。剩下的他們會找出來。' },
      { en: 'Half an answer is a whole problem.', zh: '答一半，等於整題有問題。' },
      { en: 'The panel is still writing. That is not good.', zh: '評審還在寫字。那不是好事。' },
      { en: 'Closer. Still twenty minutes of exposure.', zh: '接近了。但還有二十分鐘會被看穿。' },
      { en: 'Learn two more facts and come back.', zh: '再背熟兩個事實再回來。' }
    ],
    fair: [
      { en: 'Solid middle. Middles do not get nominated.', zh: '中規中矩。中規中矩不會被提名。' },
      { en: 'You would hold the room. Briefly.', zh: '你撐得住場面。一下下。' },
      { en: 'Good enough to be asked a harder one.', zh: '好到會被追問更難的。' },
      { en: 'The easy half is yours. Take the other half.', zh: '簡單的那一半是你的了。把另一半拿下。' },
      { en: 'Respectable. Now make it boring to you.', zh: '可以。現在練到你自己覺得無聊為止。' }
    ],
    good: [
      { en: 'That is a room you can walk into.', zh: '這種程度可以直接走進那個房間。' },
      { en: 'The panel would nod. Judges rarely nod.', zh: '評審會點頭。評審很少點頭。' },
      { en: 'Sharp. Keep the honesty in.', zh: '很銳利。誠實的部分要留著。' },
      { en: 'You are the one who should take the hard ones.', zh: '難的題目應該交給你。' },
      { en: 'Nearly nothing shaky left.', zh: '幾乎沒有不熟的地方了。' }
    ],
    great: [
      { en: 'Medal-room answers. Say them exactly like that.', zh: '這是會拿獎的回答。就照這樣講。' },
      { en: 'You could run the whole twenty minutes alone.', zh: '那二十分鐘你一個人撐得起來。' },
      { en: 'The panel learns something from you.', zh: '評審會從你這裡學到東西。' },
      { en: 'Frightening. In the right direction.', zh: '有點可怕。但是好的那種。' },
      { en: 'Go and teach the other six seats.', zh: '去把另外六個位置教會。' }
    ]
  };

  var FLAWLESS = [
    { en: 'Every microphone went to the right person.', zh: '每一支麥克風都交到對的人手上。' },
    { en: 'Perfect routing. The Mic Map is in your head.', zh: '完美分工。麥克風地圖已經在你腦子裡了。' }
  ];
  var NOSEAT = [
    { en: 'Not one question went to the right seat.', zh: '沒有一題交到對的位置。' },
    { en: 'You answered everything. None of it was yours.', zh: '你全部都答了。但沒有一題是你的。' }
  ];
  var BEST = [
    { en: 'Your best yet, by {d}. Do that again on 13 November.', zh: '你的最佳紀錄，多了 {d} 分。11 月 13 日再做一次。' },
    { en: 'Personal best, {d} up. Somebody has been drilling.', zh: '個人新高，進步 {d} 分。有人在練。' },
    { en: 'Beat your own record by {d}. Keep the receipt.', zh: '破了自己的紀錄 {d} 分。把這張卡留著。' }
  ];

  function band(pct) {
    return pct >= 0.85 ? 'great' : pct >= 0.7 ? 'good' : pct >= 0.52 ? 'fair' : pct >= 0.34 ? 'rough' : 'awful';
  }

  /* never repeat the line a student just saw */
  function pickLine(pool, key) {
    if (pool.length < 2) return pool[0];
    var last = S.load('said-' + key, -1), i = 0;
    for (var tries = 0; tries < 12; tries++) {
      i = Math.floor(Math.random() * pool.length);
      if (i !== last) break;
    }
    S.save('said-' + key, i);
    return pool[i];
  }

  function verdict(r) {
    /* a personal best outranks everything, then the two perfect-routing cases */
    if (r.gain > 0) {
      var line = pickLine(BEST, 'best');
      return { en: line.en.replace('{d}', r.gain), zh: line.zh.replace('{d}', r.gain) };
    }
    if (r.n >= 4 && r.acc === 100) return pickLine(FLAWLESS, 'flawless');
    if (r.n >= 4 && r.acc === 0) return pickLine(NOSEAT, 'noseat');
    var b = band(r.pct);
    return pickLine(VERDICTS[b], b);
  }

  function finish() {
    stopTimer();
    /* a run you stopped early is scored on what you actually took */
    var n = Math.max(1, Math.min(state.deck.length, state.i + 1));
    var max = n * 31;                        /* 10 seat + 10 answer + 5 speed + 6 follow-up */
    var p0 = who(), key = 'pb-' + (p0 ? (p0.s || p0.n) : 'anon') + '-' + (state.len || 0);
    var prev = S.load(key, 0);
    state.last = {
      n: n,
      pct: Math.min(1, state.score / max),
      acc: state.seatTried ? Math.round(100 * state.seatRight / state.seatTried) : 0,
      conf: Math.round(100 * state.confident / n),
      avg: Math.round(state.timeLeftSum / n),
      prev: prev,
      gain: prev && state.score > prev ? state.score - prev : 0
    };
    if (state.score > prev) S.save(key, state.score);
    state.verdict = verdict(state.last);
    state.phase = 'idle';
    el('guessbox').hidden = true;
    el('guessres').hidden = true;
    el('ans').hidden = true;
    el('show').hidden = true;
    el('nextq').hidden = true;
    el('marks').hidden = true;
    el('fubox').hidden = true;
    el('ringwrap').hidden = true;
    el('endrun').hidden = true;
    el('start').hidden = false;
    el('start').textContent = S.p(L.again);
    el('qq').textContent = S.p(L.done);
    el('who').innerHTML = '';
    el('meta').innerHTML = '';
    drawBench(null);
    openCard();
  }

  /* ── the card you post: the team page's member card, with a score on it ── */
  var FD = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang TC", "Noto Sans TC", sans-serif';
  var LOGO = null, FACES = {};

  function img(src, done) {
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

  function wash(hex) {
    var n = parseInt(hex.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return 'rgba(' + r + ',' + g + ',' + b + ',.14)';
  }

  function cardData() {
    var r = state.last || { n: 1, pct: 0, acc: 0, conf: 0, avg: 0 }, k;
    var mode = '';
    for (k = 0; k < MODES.length; k++) if (MODES[k].id === state.mode) mode = S.p(MODES[k]);
    var p = who() || { n: S.lang === 'zh' ? '匿名' : 'Anonymous', own: [], mem: [], guest: true };
    return {
      p: p,
      score: state.score,
      grade: S.p(state.verdict || { en: '', zh: '' }),
      pct: r.pct,
      stats: [
        [r.acc + '%', S.p(L.seatacc)],
        [r.conf + '%', S.p(L.conf)],
        [String(state.best), S.p(L.streak)]
      ],
      foot: [mode, r.n + (S.lang === 'zh' ? ' 題' : ' questions'), localDay(),
             'GEMS Taiwan · iGEM 2026'].join('  ·  ')
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
    c.fillText((S.lang === 'zh' ? '模擬會場 · 評審訓練' : 'MOCK ROOM · JUDGING TRAINER'), 348, 106);

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
    c.fillText(S.lang === 'zh' ? '分' : 'points', 64 + sw + 18, 462);

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
    c.fillText(S.lang === 'zh' ? '滿分的比例' : 'of a perfect run', cx, 532);
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
    if (p) {
      if (faceSrc(p, 'w')) need.push(faceSrc(p, 'w'));
    }
    left = need.length;
    for (i = 0; i < need.length; i++) {
      (function (src) {
        img(src, function (im) {
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
    document.body.style.overflow = '';
  }

  function copyCard() {
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
  }

  function downloadCard() {
    el('cardcv').toBlob(function (b) {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(b);
      a.download = 'releaf-mock-room-' + localDay() + '.png';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    }, 'image/png');
  }

  function localDay() {
    var t = new Date(), m = t.getMonth() + 1, d = t.getDate();
    return t.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
  }

  /* ── side lists ── */
  function chips(elid, items, cur, attr) {
    var h = '';
    for (var i = 0; i < items.length; i++) {
      h += '<button class="chip" ' + attr + '="' + items[i].id + '" aria-pressed="' + (cur === items[i].id) + '">' +
        S.esc(S.p({ en: items[i].en, zh: items[i].zh }).replace(/&amp;/g, '&')) +
        (items[i].c !== undefined ? '<span class="c">' + items[i].c + '</span>' : '') + '</button>';
    }
    el(elid).innerHTML = h;
  }

  function drawChips() {
    chips('modes', MODES, state.mode, 'data-m');
    chips('lens', LENS, state.len, 'data-l');
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
    el('shaky').innerHTML = n ? h : '<p class="lede-sm">' + S.p(L.empty) + '</p>';
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
    el('rec').innerHTML = h || '<p class="lede-sm">' + S.p(L.empty) + '</p>';
  }

  /* ── events ── */
  el('start').addEventListener('click', function () {
    state.score = 0; state.streak = 0; state.best = 0;
    state.seatRight = 0; state.seatTried = 0; state.confident = 0; state.timeLeftSum = 0;
    buildDeck();
    if (!state.deck.length) {
      el('qq').textContent = S.p({ en: 'Nothing matches those filters. Widen the deck below.',
                                   zh: '這些篩選條件沒有題目。把下面的範圍放寬一點。' });
      return;
    }
    next();
  });
  el('nextq').addEventListener('click', next);
  el('endrun').addEventListener('click', function () { finish(); });
  el('whobtn').addEventListener('click', openPicker);
  el('whox').addEventListener('click', closePicker);
  el('whomodal').addEventListener('click', function (e) { if (e.target === this) closePicker(); });
  el('whosearch').addEventListener('input', function () { drawPicker(this.value); });
  el('wholist').addEventListener('click', function (e) {
    var b = e.target.closest('.pickp'); if (!b) return;
    choose(b.getAttribute('data-slug'), '');
    loadCardArt(function () { if (!el('modal').hidden) drawCard(); });
  });
  el('guestgo').addEventListener('click', function () {
    var v = el('guestname').value.trim();
    if (v) choose('', v);
  });
  el('lens').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.len = parseInt(b.getAttribute('data-l'), 10) || 0;
    S.save('len', state.len);
    drawChips(); buildDeck();
  });
  el('show').addEventListener('click', reveal);
  el('seatchips').addEventListener('click', function (e) {
    var b = e.target.closest('.seatchip'); if (!b) return;
    callSeat(b.getAttribute('data-seat'));
  });
  el('pause').addEventListener('click', function () {
    if (state.running) { stopTimer(); this.textContent = S.p(L.resume); }
    else {
      state.running = true;
      state.tick = setInterval(function () { state.left--; paintTimer(); }, 1000);
      this.textContent = S.p(L.pause);
    }
  });
  el('mgood').addEventListener('click', function () { mark(true); });
  el('mbad').addEventListener('click', function () { mark(false); });
  el('fudid').addEventListener('click', function () { answerFollowup(true); });
  el('fumiss').addEventListener('click', function () { answerFollowup(false); });
  el('reroll').addEventListener('click', function () {
    loadPanel(true);
    drawBench(state.phase === 'idle' ? null : state.asker);
    toast(S.p(L.rerolled));
  });
  el('againbtn').addEventListener('click', function () {
    closeCard();
    el('start').click();
  });
  el('modalx').addEventListener('click', closeCard);
  el('modal').addEventListener('click', function (e) { if (e.target === this) closeCard(); });
  el('copyimg').addEventListener('click', copyCard);
  el('dlimg').addEventListener('click', downloadCard);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !el('whomodal').hidden) { closePicker(); return; }
    if (e.key === 'Escape' && !el('modal').hidden) closeCard();
  });
  el('modes').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.mode = b.getAttribute('data-m'); S.save('mode', state.mode);
    drawChips(); buildDeck();
  });
  el('doms').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.dom = b.getAttribute('data-d'); drawChips(); buildDeck();
  });
  el('types').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.type = b.getAttribute('data-t'); drawChips(); buildDeck();
  });
  el('shaky').addEventListener('click', function (e) {
    var b = e.target.closest('[data-clear]'); if (!b) return;
    var at = state.shaky.indexOf(b.getAttribute('data-clear'));
    if (at >= 0) { state.shaky.splice(at, 1); S.save('shaky', state.shaky); drawShaky(); }
  });
  el('rq').addEventListener('input', function (e) { drawRecorded(e.target.value); });

  /* keyboard: 1-7 call a seat, space reveals, enter moves on */
  document.addEventListener('keydown', function (e) {
    if (/input|textarea/i.test((e.target.tagName || ''))) return;
    if (state.phase === 'guess' && e.key >= '1' && e.key <= '7') {
      callSeat(SEAT_ORDER[parseInt(e.key, 10) - 1]); e.preventDefault();
    } else if (e.code === 'Space' && !el('show').hidden) { reveal(); e.preventDefault(); }
    else if (e.key === 'Enter' && !el('nextq').hidden) { next(); e.preventDefault(); }
  });

  loadPanel(false);
  S.onLang(function () {
    el('start').textContent = S.p(L.start);
    el('l-playing').textContent = S.p(L.playing);
    el('whotitle').textContent = S.p(L.whotitle);
    el('whosearch').placeholder = S.p(L.whosearch);
    el('guestname').placeholder = S.p(L.guest);
    el('guestgo').textContent = S.p(L.guestgo);
    paintWho();
    el('l-run').textContent = S.p(L.lrun);
    el('l-deck').textContent = S.p(L.ldeck);
    el('l-narrow').textContent = S.p(L.lnarrow);
    el('l-dom').textContent = S.p(L.ldom);
    el('l-type').textContent = S.p(L.ltype);
    el('againbtn').textContent = S.p(L.again);
    el('copyimg').textContent = S.p(L.copyimg);
    el('dlimg').textContent = S.p(L.dlimg);
    el('imghint').textContent = S.p(L.imghint);

    el('whoq').textContent = S.p(L.whoq);
    el('whohint').textContent = S.p(L.whohint);
    el('reroll').textContent = S.p(L.reroll);
    el('l-score').textContent = S.p(L.score);
    el('l-streak').textContent = S.p(L.streak);
    el('l-n').textContent = S.p(L.run);
    drawChips();
    drawShaky();
    drawRecorded(el('rq').value);
    paintScore();
    if (state.i >= 0 && state.phase !== 'idle') paint();
    else { drawBench(null); buildDeck(); }
    if (!el('modal').hidden) drawCard();      /* the card follows the language too */
  });
})();
