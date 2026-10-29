/* The panel: four judges, generated. Nobody owns a subject, because in J03 nobody will.
 * Looks, background and manner are drawn at random and stored for the session, so the
 * room is a different room each time you re-roll it. */
(function () {
  'use strict';

  /* seeded RNG so one panel stays put until you re-roll it */
  function rng(seed) {
    var s = seed >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  var GIVEN = ['Amara', 'Yusuf', 'Mei', 'Tomás', 'Priya', 'Lars', 'Nadia', 'Kwame', 'Elif',
    'Santiago', 'Hana', 'Oliver', 'Zanele', 'Ravi', 'Marta', 'Jian', 'Fatima', 'Niamh',
    'Dmitri', 'Aiko', 'Mateo', 'Chidi', 'Sofia', 'Arjun', 'Leila', 'Pieter', 'Rin',
    'Gabriel', 'Ayesha', 'Henrik', 'Lucia', 'Tariq', 'Noor', 'Emeka', 'Yara', 'Bjorn'];
  var FAMILY = ['Okonkwo', 'Tanaka', 'Hernández', 'Novak', 'Abiola', 'Lindqvist', 'Haddad',
    'Mwangi', 'Rossi', 'Choudhury', 'Kim', 'Silva', 'Yılmaz', 'Petrov', 'Dubois', 'Nkemelu',
    'Varga', 'Reyes', 'Osei', 'Ahmadi', 'Bergström', 'Nakamura', 'Moreau', 'Oyelaran',
    'Costa', 'Sharma', 'Fitzgerald', 'Katsaros', 'Bakker', 'Ferreira', 'Zhao', 'Keita'];
  var TITLE = [
    { en: 'Dr.', zh: '博士' }, { en: 'Dr.', zh: '博士' }, { en: 'Prof.', zh: '教授' },
    { en: '', zh: '' }, { en: 'Dr.', zh: '博士' }, { en: '', zh: '' }
  ];

  /* backgrounds on purpose unrelated to our eight domains: a judge's degree does not
     tell you what they will ask, and guessing from it is the habit we want to break */
  var FIELD = [
    { en: 'marine microbiology', zh: '海洋微生物學' },
    { en: 'process control', zh: '製程控制' },
    { en: 'patent law', zh: '專利法' },
    { en: 'soil science', zh: '土壤學' },
    { en: 'medical devices', zh: '醫療器材' },
    { en: 'science teaching', zh: '科學教育' },
    { en: 'structural biology', zh: '結構生物學' },
    { en: 'bioethics', zh: '生命倫理' },
    { en: 'food safety', zh: '食品安全' },
    { en: 'fermentation at scale', zh: '規模化發酵' },
    { en: 'sensor hardware', zh: '感測硬體' },
    { en: 'agricultural economics', zh: '農業經濟' },
    { en: 'statistics', zh: '統計' },
    { en: 'plant pathology', zh: '植物病理' },
    { en: 'public health', zh: '公共衛生' },
    { en: 'venture investing', zh: '創投' },
    { en: 'synthetic chemistry', zh: '合成化學' },
    { en: 'water treatment', zh: '水處理' },
    { en: 'science journalism', zh: '科學報導' },
    { en: 'robotics', zh: '機器人' }
  ];

  var ROLE = [
    { en: 'academic', zh: '學界' }, { en: 'industry', zh: '業界' },
    { en: 'former iGEMer', zh: '前 iGEM 隊員' }, { en: 'regulator', zh: '法規單位' },
    { en: 'start-up founder', zh: '新創創辦人' }, { en: 'teacher', zh: '老師' }
  ];

  /* manner: the thing that actually changes how the question lands */
  var MANNER = [
    { id: 'number', en: 'wants a number in every answer', zh: '每個回答都要聽到數字' },
    { id: 'short', en: 'cuts you off at forty seconds', zh: '四十秒就會打斷你' },
    { id: 'warm', en: 'nods a lot, then asks the hard one', zh: '一直點頭，然後問最難的' },
    { id: 'quiet', en: 'says nothing and writes', zh: '不說話，一直寫' },
    { id: 'why', en: 'asks "why" after every answer', zh: '每個回答後面都問「為什麼」' },
    { id: 'plain', en: 'stops you on any jargon', zh: '一聽到術語就喊停' },
    { id: 'spread', en: 'looks for whoever has not spoken', zh: '會找還沒開口的人' },
    { id: 'evidence', en: 'asks where it is written on the wiki', zh: '會問 wiki 上寫在哪裡' }
  ];

  var SKIN = ['#f6d7bb', '#edbb94', '#d79b6b', '#b87a4c', '#8d5a34', '#5f3b20'];
  var HAIRC = ['#1e1813', '#36291d', '#6b4a2c', '#b78a4e', '#2b2118', '#4e3b2a'];
  var HAIRC_GREY = ['#9aa0a6', '#d8d8dc', '#b9bcc2'];
  var CLOTH = ['#1a7f45', '#0167ef', '#009c78', '#e35a1b', '#6b47c4', '#424245', '#b2295a'];

  function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }

  function makeJudge(r, i) {
    var hair = Math.floor(r() * 6);          /* 0 crop 1 afro 2 bun 3 long 4 bald 5 locs */
    var head = r();
    return {
      i: i,
      title: pick(r, TITLE),
      given: pick(r, GIVEN),
      family: pick(r, FAMILY),
      field: pick(r, FIELD),
      role: pick(r, ROLE),
      manner: pick(r, MANNER),
      years: 0,
      skin: pick(r, SKIN),
      hairc: '',
      cloth: pick(r, CLOTH),
      hair: hair,
      headwear: head < 0.12 ? 'hijab' : head < 0.2 ? 'turban' : head < 0.28 ? 'cap' : '',
      glasses: r() < 0.45 ? (r() < 0.5 ? 'round' : 'rect') : '',
      beard: r() < 0.3 ? (r() < 0.5 ? 'full' : 'stubble') : ''
    };
  }

  function age(r, j) {
    j.years = 3 + Math.floor(r() * 28);
    /* grey turns up with the years, not at random */
    var greyish = j.years > 19 ? r() < 0.6 : r() < 0.08;
    j.hairc = greyish ? pick(r, HAIRC_GREY) : pick(r, HAIRC);
    return j;
  }

  function makePanel(seed) {
    var r = rng(seed), out = [], i;
    for (i = 0; i < 4; i++) out.push(age(r, makeJudge(r, i)));
    /* a bench of four identical silver bobs is not a panel */
    var greys = 0;
    for (i = 0; i < 4; i++) if (HAIRC_GREY.indexOf(out[i].hairc) >= 0) greys++;
    for (i = 3; i >= 0 && greys > 2; i--) {
      if (HAIRC_GREY.indexOf(out[i].hairc) >= 0) { out[i].hairc = HAIRC[i % HAIRC.length]; greys--; }
    }
    /* never two identical-looking judges side by side */
    for (i = 1; i < 4; i++) {
      if (out[i].skin === out[i - 1].skin && out[i].hair === out[i - 1].hair) {
        out[i].skin = SKIN[(SKIN.indexOf(out[i].skin) + 2) % SKIN.length];
      }
    }
    return out;
  }

  /* ── drawing ──
   * Hair comes in two layers: what sits behind the head, and a fringe that stops at the
   * brow. Anything drawn over the eyes makes a judge look like a sheepdog. */
  function hairBack(j, x, y) {
    var c = j.hairc;
    if (j.headwear === 'hijab') {
      return '<path d="M' + (x - 36) + ' ' + (y + 40) + ' q-6 -70 36 -70 q42 0 36 70 q-16 -8 -36 -8 q-20 0 -36 8z" fill="' + j.cloth + '"/>';
    }
    if (j.hair === 1) return '<circle cx="' + x + '" cy="' + (y - 6) + '" r="35" fill="' + c + '"/>';
    if (j.hair === 2) return '<circle cx="' + x + '" cy="' + (y - 36) + '" r="12" fill="' + c + '"/>';
    if (j.hair === 3) return '<path d="M' + (x - 30) + ' ' + (y + 34) + ' q-9 -62 30 -62 q39 0 30 62 q-9 -20 -30 -20 q-21 0 -30 20z" fill="' + c + '"/>';
    if (j.hair === 5) {
      var h = '<circle cx="' + x + '" cy="' + (y - 8) + '" r="31" fill="' + c + '"/>';
      for (var k = -1; k <= 1; k += 2) {
        h += '<rect x="' + (x + k * 27 - 3.5) + '" y="' + (y - 6) + '" width="7" height="36" rx="3.5" fill="' + c + '"/>';
      }
      return h;
    }
    return '';
  }

  function hairFront(j, x, y) {
    var c = j.hairc, h = '';
    if (j.headwear === 'hijab') {
      /* the drape frames the face; it never crosses it */
      return '<path d="M' + (x - 30) + ' ' + (y - 6) + ' q3 -26 30 -26 q27 0 30 26 q-14 -12 -30 -12 q-16 0 -30 12z" fill="' + j.cloth + '"/>';
    }
    if (j.hair !== 4) {
      h += '<path d="M' + (x - 28) + ' ' + (y - 5) + ' q3 -27 28 -27 q25 0 28 27 q-13 -13 -28 -13 q-15 0 -28 13z" fill="' + c + '"/>';
    }
    if (j.hair === 3) {
      /* a sweep down one side of the brow */
      h += '<path d="M' + (x - 28) + ' ' + (y - 4) + ' q10 10 4 24 q-10 -8 -8 -24z" fill="' + c + '"/>';
    }
    if (j.headwear === 'turban') {
      h += '<path d="M' + (x - 30) + ' ' + (y - 4) + ' q3 -32 30 -32 q27 0 30 32 q-30 -14 -60 0z" fill="' + j.cloth + '"/>';
    } else if (j.headwear === 'cap') {
      h += '<path d="M' + (x - 29) + ' ' + (y - 6) + ' q2 -30 29 -30 q27 0 29 30z" fill="' + j.cloth + '"/>' +
        '<rect x="' + (x - 42) + '" y="' + (y - 10) + '" width="36" height="7" rx="3.5" fill="' + j.cloth + '" opacity=".85"/>';
    }
    return h;
  }

  function face(j, x, y, on) {
    var g = '';
    g += hairBack(j, x, y);
    g += '<circle cx="' + x + '" cy="' + y + '" r="28" fill="' + j.skin + '"/>';
    g += hairFront(j, x, y);
    /* eyes */
    g += '<circle cx="' + (x - 9) + '" cy="' + (y + 1) + '" r="2.6" fill="#2b2118"/>';
    g += '<circle cx="' + (x + 9) + '" cy="' + (y + 1) + '" r="2.6" fill="#2b2118"/>';
    if (j.glasses === 'round') {
      g += '<circle cx="' + (x - 9) + '" cy="' + (y + 1) + '" r="8" fill="none" stroke="#3a3a3c" stroke-width="1.8"/>' +
        '<circle cx="' + (x + 9) + '" cy="' + (y + 1) + '" r="8" fill="none" stroke="#3a3a3c" stroke-width="1.8"/>' +
        '<path d="M' + (x - 1) + ' ' + (y + 1) + ' h2" stroke="#3a3a3c" stroke-width="1.8"/>';
    } else if (j.glasses === 'rect') {
      g += '<rect x="' + (x - 18) + '" y="' + (y - 6) + '" width="16" height="13" rx="3" fill="none" stroke="#3a3a3c" stroke-width="1.8"/>' +
        '<rect x="' + (x + 2) + '" y="' + (y - 6) + '" width="16" height="13" rx="3" fill="none" stroke="#3a3a3c" stroke-width="1.8"/>' +
        '<path d="M' + (x - 2) + ' ' + y + ' h4" stroke="#3a3a3c" stroke-width="1.8"/>';
    }
    /* mouth: the active judge is mid-question */
    if (on) g += '<ellipse cx="' + x + '" cy="' + (y + 14) + '" rx="5" ry="4" fill="#8e4a3c"/>';
    else g += '<path d="M' + (x - 6) + ' ' + (y + 14) + ' q6 4 12 0" stroke="#8e4a3c" stroke-width="2" fill="none" stroke-linecap="round"/>';
    if (j.beard === 'full') {
      g += '<path d="M' + (x - 24) + ' ' + (y + 4) + ' q4 30 24 30 q20 0 24 -30 q-10 18 -24 18 q-14 0 -24 -18z" fill="' + j.hairc + '" opacity=".92"/>';
    } else if (j.beard === 'stubble') {
      g += '<path d="M' + (x - 10) + ' ' + (y + 9) + ' q10 -5 20 0" stroke="' + j.hairc + '" stroke-width="3" fill="none" opacity=".55" stroke-linecap="round"/>';
    }
    return g;
  }

  function body(j, x, y, on) {
    return '<path d="M' + (x - 44) + ' ' + (y + 78) + ' q0 -40 44 -40 q44 0 44 40z" fill="' + j.cloth + '" opacity="' + (on ? '1' : '.85') + '"/>' +
      '<path d="M' + (x - 9) + ' ' + (y + 38) + ' q9 12 18 0 l6 4 q-15 16 -30 0z" fill="#fff" opacity=".9"/>';
  }

  window.Panel = {
    make: makePanel,
    /** full bench SVG; active is an index or null */
    bench: function (panel, active, lang) {
      var xs = [118, 352, 586, 820], h = '', i;
      for (i = 0; i < 4; i++) {
        var on = i === active, j = panel[i], x = xs[i];
        h += '<g class="fig' + (active !== null && !on ? ' dim' : '') + (on ? ' on' : '') + '">';
        h += body(j, x, 70, on);
        h += face(j, x, 70, on);
        if (on) {
          /* the speaking judge's marker: the jamboree green, not the old accent */
          h += '<circle cx="' + (x + 40) + '" cy="36" r="7" fill="#00B87A"/>' +
            '<circle cx="' + (x + 40) + '" cy="36" r="13" fill="none" stroke="#00B87A" stroke-width="2" opacity=".35"/>';
        }
        h += '</g>';
      }
      /* the bench itself */
      h += '<path d="M20 148 h880 a12 12 0 0 1 12 12 v30 a12 12 0 0 1 -12 12 h-880 a12 12 0 0 1 -12 -12 v-30 a12 12 0 0 1 12 -12z" fill="#fff" stroke="#d3d8e2" stroke-width="1.5"/>';
      for (i = 0; i < 4; i++) {
        var p = panel[i], nm = (p.title[lang] ? p.title[lang] + ' ' : '') + p.given + ' ' + p.family;
        h += '<text x="' + xs[i] + '" y="178" text-anchor="middle" font-size="13.5" ' +
          'font-family="-apple-system, BlinkMacSystemFont, sans-serif" ' +
          'fill="' + (i === active ? '#1d1d1f' : '#86868b') + '" font-weight="' + (i === active ? '600' : '400') + '">' +
          nm.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</text>';
        h += '<text x="' + xs[i] + '" y="196" text-anchor="middle" font-size="11" ' +
          'font-family="-apple-system, BlinkMacSystemFont, sans-serif" fill="#a1a1a6">' +
          (p.field[lang] + ' · ' + p.years + (lang === 'zh' ? ' 年' : ' yrs')).replace(/&/g, '&amp;') + '</text>';
      }
      return h;
    }
  };
})();
