/* Mock judging room: a generated panel, a question from someone you did not expect,
 * a guess at who should take it, a timer, points, and a board to put your name on. */
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
    { id: 7,  en: '7 questions', zh: '7 題' },
    { id: 14, en: '14 · a real session', zh: '14 題 · 等於一場' },
    { id: 25, en: '25 questions', zh: '25 題' },
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
    saveas: { en: 'Your name for the board', zh: '登記到排行榜的名字' },
    save:   { en: 'Put it on the board', zh: '登上排行榜' },
    saved:  { en: 'On the board.', zh: '已登上排行榜。' },
    reroll: { en: 'New panel', zh: '換一組評審' },
    rerolled:{ en: 'Four new judges. Nobody owns a subject.', zh: '四位新評審。沒有人固定負責哪個主題。' },
    seatacc:{ en: 'right seat', zh: '位置答對' },
    conf:   { en: 'answered', zh: '答得出來' },
    secs:   { en: 's left on average', zh: '秒（平均剩餘）' },
    copy:   { en: 'Copy my code', zh: '複製我的代碼' },
    copied: { en: 'Copied. Paste it in the team chat.', zh: '已複製。貼到隊上的群組裡。' },
    paste:  { en: "Paste a teammate's code", zh: '貼上隊友的代碼' },
    add:    { en: 'Add', zh: '加入' },
    badcode:{ en: 'That code did not read.', zh: '這個代碼讀不出來。' },
    added:  { en: 'Added to the board.', zh: '已加入排行榜。' },
    boardnote:{ en: 'The board lives in this browser. Codes are how it travels.',
                zh: '排行榜存在這台瀏覽器裡。代碼是它旅行的方式。' },
    noboard:{ en: 'No runs yet. Finish a deck and put your name up.', zh: '還沒有紀錄。練完一組就把名字放上去。' },
    wipe:   { en: 'Wipe the board', zh: '清空排行榜' },
    playing:{ en: 'Playing as', zh: '玩家名稱' },
    yourname:{ en: 'your name', zh: '你的名字' },
    endrun: { en: 'End the run and save', zh: '結束並記分' },
    scrollb:{ en: 'Your run is on the board below.', zh: '你的成績已經在下面的排行榜上。' }
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
    len: S.load('len', 14),
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
    fu: null
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
    el('summary').hidden = true;
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

  /* ── end of a run ── */
  function grade(pct) {
    if (pct >= 0.85) return { en: 'Ready for the room', zh: '可以進那個房間了' };
    if (pct >= 0.7) return { en: 'Nearly there', zh: '快到了' };
    if (pct >= 0.5) return { en: 'Keep going', zh: '繼續練' };
    return { en: 'This is why you practise', zh: '這就是要練習的原因' };
  }

  function finish() {
    stopTimer();
    /* a run you stopped early is scored on what you actually took */
    var n = Math.max(1, Math.min(state.deck.length, state.i + 1));
    var max = n * 31;                        /* 10 seat + 10 answer + 5 speed + 6 follow-up */
    var pct = Math.min(1, state.score / max);
    var g = grade(pct);
    state.phase = 'idle';
    el('summary').hidden = false;
    el('guessbox').hidden = true;
    el('guessres').hidden = true;
    el('ans').hidden = true;
    el('show').hidden = true;
    el('nextq').hidden = true;
    el('marks').hidden = true;
    el('fubox').hidden = true;
    el('ringwrap').hidden = true;
    el('qq').textContent = S.p(L.done);
    el('who').innerHTML = '';
    el('meta').innerHTML = '';
    drawBench(null);

    var acc = state.seatTried ? Math.round(100 * state.seatRight / state.seatTried) : 0;
    var conf = Math.round(100 * state.confident / n);
    var avg = Math.round(state.timeLeftSum / n);
    el('sumgrade').textContent = S.p(g);
    el('sumscore').textContent = state.score;
    el('sumbits').innerHTML =
      '<span><b>' + acc + '%</b> ' + S.esc(S.p(L.seatacc)) + '</span>' +
      '<span><b>' + conf + '%</b> ' + S.esc(S.p(L.conf)) + '</span>' +
      '<span><b>' + state.best + '</b> ' + S.esc(S.p(L.streak)) + '</span>' +
      '<span><b>' + avg + '</b> ' + S.esc(S.p(L.secs)) + '</span>';
    el('endrun').hidden = true;
    el('nameln').textContent = S.p(L.saveas);
    el('savebtn').textContent = S.p(L.save);
    el('againbtn').textContent = S.p(L.again);
    el('pname').value = el('playas').value || S.load('pname', '');
    el('savebtn').disabled = false;
  }

  function localDay() {
    var t = new Date(), m = t.getMonth() + 1, d = t.getDate();
    return t.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
  }

  function runRecord() {
    var n = Math.max(1, Math.min(state.deck.length, state.i + 1));
    return {
      n: (el('pname').value || el('playas').value || '—').slice(0, 18),
      s: state.score,
      q: n,
      a: state.seatTried ? Math.round(100 * state.seatRight / state.seatTried) : 0,
      b: state.best,
      m: state.mode,
      d: localDay()
    };
  }

  /* ── the board ── */
  function board() { return S.load('board', []); }
  function saveBoard(b) { S.save('board', b.slice(0, 60)); }
  function addRun(rec) {
    var b = board(), i;
    for (i = 0; i < b.length; i++) {
      if (b[i].n === rec.n && b[i].s === rec.s && b[i].d === rec.d && b[i].q === rec.q) return false;
    }
    b.push(rec);
    b.sort(function (x, y) { return y.s - x.s; });
    saveBoard(b);
    return true;
  }
  function drawBoard() {
    var b = board(), h = '', i;
    if (!b.length) { el('board').innerHTML = '<p class="lede-sm">' + S.p(L.noboard) + '</p>'; return; }
    h += '<table class="board"><tbody>';
    for (i = 0; i < Math.min(b.length, 12); i++) {
      var r = b[i], medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
      var mode = '';
      for (var k = 0; k < MODES.length; k++) if (MODES[k].id === r.m) mode = S.p(MODES[k]);
      h += '<tr' + (i < 3 ? ' class="top"' : '') + '><td class="rk">' + medal + '</td>' +
        '<td class="nm">' + S.esc(r.n) + '</td>' +
        '<td class="pt">' + r.s + '</td>' +
        '<td class="dt">' + r.a + '% · ' + r.q + 'q · ' + S.esc(mode) + ' · ' + r.d + '</td></tr>';
    }
    h += '</tbody></table>';
    el('board').innerHTML = h;
  }

  function encode(rec) {
    try { return btoa(unescape(encodeURIComponent(JSON.stringify(rec)))).replace(/=+$/, ''); }
    catch (e) { return ''; }
  }
  function decode(code) {
    try {
      var o = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
      if (!o || typeof o.s !== 'number' || typeof o.n !== 'string') return null;
      return { n: String(o.n).slice(0, 18), s: o.s | 0, q: o.q | 0, a: o.a | 0, b: o.b | 0,
               m: String(o.m || 'all').slice(0, 8), d: String(o.d || '').slice(0, 10) };
    } catch (e) { return null; }
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
  el('playas').addEventListener('input', function () { S.save('pname', this.value.slice(0, 18)); });
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
  el('savebtn').addEventListener('click', function () {
    var rec = runRecord();
    S.save('pname', rec.n);
    addRun(rec);
    drawBoard();
    this.disabled = true;
    this.textContent = S.p(L.saved);
    el('mycode').value = encode(rec);
    el('codebox').hidden = false;
    toast(S.p(L.scrollb));
  });
  el('againbtn').addEventListener('click', function () {
    el('summary').hidden = true;
    el('start').hidden = false;
    el('start').textContent = S.p(L.start);
    el('qq').textContent = S.p({ en: 'Ready when you are.', zh: '準備好就開始。' });
  });
  el('copycode').addEventListener('click', function () {
    var f = el('mycode');
    f.select();
    try { document.execCommand('copy'); toast(S.p(L.copied)); } catch (e) {}
  });
  el('addcode').addEventListener('click', function () {
    var rec = decode(el('theircode').value || '');
    if (!rec) { toast(S.p(L.badcode), false); return; }
    addRun(rec);
    el('theircode').value = '';
    drawBoard();
    toast(S.p(L.added));
  });
  el('wipe').addEventListener('click', function () {
    saveBoard([]);
    drawBoard();
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
    el('playas').placeholder = S.p(L.yourname);
    el('playas').value = S.load('pname', '');
    el('whoq').textContent = S.p(L.whoq);
    el('whohint').textContent = S.p(L.whohint);
    el('reroll').textContent = S.p(L.reroll);
    el('l-score').textContent = S.p(L.score);
    el('l-streak').textContent = S.p(L.streak);
    el('l-n').textContent = S.p(L.run);
    el('copycode').textContent = S.p(L.copy);
    el('addcode').textContent = S.p(L.add);
    el('wipe').textContent = S.p(L.wipe);
    el('boardnote').textContent = S.p(L.boardnote);
    el('theircode').placeholder = S.p(L.paste);
    drawChips();
    drawShaky();
    drawBoard();
    drawRecorded(el('rq').value);
    paintScore();
    if (state.i >= 0 && state.phase !== 'idle') paint();
    else { drawBench(null); buildDeck(); }
  });
})();
