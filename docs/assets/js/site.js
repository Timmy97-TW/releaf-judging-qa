/* Shared chrome: language, nav, helpers. Loaded on every page. */
(function () {
  'use strict';

  var PAGES = [
    { href: 'index.html',    en: 'Start',        zh: '開始' },
    { href: 'facts.html',    en: 'Facts',        zh: '事實庫' },
    { href: 'terms.html',    en: 'Terms',        zh: '術語' },
    { href: 'bank.html',     en: 'Question Bank', zh: '題庫' },
    { href: 'registry.html', en: 'Registry',     zh: 'Registry' },
    { href: 'map.html',      en: 'Map',          zh: '知識地圖', hot: true },
    { href: 'mock.html',     en: 'Mock Room',    zh: '模擬會場', hot: true },
    { href: 'figures.html',  en: 'Figure Room',  zh: '看圖會場', hot: true },
    { href: 'seats.html',    en: 'Mic Map',      zh: '麥克風地圖' },
    { href: 'delivery.html', en: 'Delivery',     zh: '答題技巧' },
    { href: 'timeline.html', en: 'Timeline',     zh: '時間軸' }
  ];

  var LEAF = '<img class="leaf" src="assets/img/releaf-logo.png" alt="" width="26" height="26">';

  var lang = 'en';
  try { lang = localStorage.getItem('rqa-lang') || 'en'; } catch (e) {}
  if (lang !== 'zh') lang = 'en';

  var listeners = [];

  var S = window.Site = {
    get lang() { return lang; },
    /** pick the field for the current language: t(obj,'q') -> obj.q_zh || obj.q_en */
    t: function (o, key) {
      if (!o) return '';
      var v = o[key + '_' + lang];
      if (v === undefined || v === null || v === '') v = o[key + '_en'];
      if (v === undefined || v === null) v = o[key] || '';
      return v;
    },
    /** pick from a pair object {en,zh} or a plain string */
    p: function (v) {
      if (v === null || v === undefined) return '';
      if (typeof v === 'string') return v;
      return v[lang] || v.en || '';
    },
    onLang: function (fn) { listeners.push(fn); },
    esc: function (s) {
      return String(s === undefined || s === null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    },
    wiki: function (slug) {
      var s = String(slug || '').split('#')[0].trim();
      if (s === 'home' || s === 'index' || s === '') s = '';
      return 'https://2026.igem.wiki/gems-taiwan/' + s;
    },
    /** a source may name more than one page ("safety-and-security; hardware-bioreactor") */
    srcLink: function (src) {
      if (!src) return '';
      var bits = String(src).split(/\s*[;,]\s*/), out = '';
      for (var i = 0; i < bits.length; i++) {
        var parts = bits[i].split('#');
        var slug = parts[0].trim();
        if (!slug) continue;
        var label = (slug === 'home' ? 'home page' : slug) +
                    (parts[1] ? ' · ' + parts[1].replace(/-/g, ' ') : '');
        out += '<a class="src" href="' + S.wiki(slug) + '" target="_blank" rel="noopener">' +
               S.esc(label) + ' ↗</a>' + (i < bits.length - 1 ? '<span class="src"> </span>' : '');
      }
      return out;
    },
    /** stable shuffle with a seed so "random" is reproducible per session */
    shuffle: function (arr) {
      var a = arr.slice(), i, j, t;
      for (i = a.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    },
    save: function (k, v) { try { localStorage.setItem('rqa-' + k, JSON.stringify(v)); } catch (e) {} },
    load: function (k, d) {
      try { var v = localStorage.getItem('rqa-' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; }
    }
  };

  function applyStatic(root) {
    var nodes = (root || document).querySelectorAll('[data-en]');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var v = n.getAttribute('data-' + lang);
      if (v === null) v = n.getAttribute('data-en');
      if (n.hasAttribute('data-html')) n.innerHTML = v; else n.textContent = v;
    }
    var ph = (root || document).querySelectorAll('[data-ph-en]');
    for (var k = 0; k < ph.length; k++) {
      var p = ph[k];
      p.setAttribute('placeholder', p.getAttribute('data-ph-' + lang) || p.getAttribute('data-ph-en'));
    }
  }
  S.applyStatic = applyStatic;

  function setLang(next, quiet) {
    lang = next === 'zh' ? 'zh' : 'en';
    try { localStorage.setItem('rqa-lang', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : 'en');
    var bs = document.querySelectorAll('.lang button');
    for (var i = 0; i < bs.length; i++) {
      bs[i].setAttribute('aria-pressed', String(bs[i].getAttribute('data-set') === lang));
    }
    applyStatic();
    if (!quiet) for (var j = 0; j < listeners.length; j++) { try { listeners[j](lang); } catch (e) {} }
  }
  S.setLang = setLang;

  function buildNav() {
    var here = (location.pathname.split('/').pop() || 'index.html');
    if (here === '') here = 'index.html';
    var links = '';
    for (var i = 0; i < PAGES.length; i++) {
      var p = PAGES[i];
      links += '<a href="' + p.href + '"' + (p.href === here ? ' aria-current="page"' : '') +
               (p.hot ? ' class="hot"' : '') +
               ' data-en="' + p.en + '" data-zh="' + p.zh + '">' + p.en + '</a>';
    }
    var nav = document.createElement('div');
    nav.className = 'nav';
    nav.innerHTML =
      '<div class="nav-in">' +
        '<a class="nav-brand" href="index.html">' + LEAF +
          '<span data-en="Judging Trainer" data-zh="評審訓練">Judging Trainer</span></a>' +
        '<nav class="nav-links">' + links + '</nav>' +
        '<div class="lang" role="group" aria-label="Language">' +
          '<button data-set="en" type="button">EN</button>' +
          '<button data-set="zh" type="button">中</button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(nav, document.body.firstChild);
    nav.querySelector('.lang').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-set]');
      if (b) setLang(b.getAttribute('data-set'));
    });
  }

  function buildFoot() {
    var f = document.createElement('footer');
    f.className = 'foot';
    f.innerHTML = '<div class="wrap">' +
      '<p data-en="GEMS Taiwan · iGEM 2026 · Judging Session Fri 13 Nov, 12:00–12:25 Paris, Room J03. Built for the team from the frozen ReLEAF wiki." ' +
      'data-zh="GEMS Taiwan · iGEM 2026 · 評審會談 11/13（五）12:00–12:25 巴黎時間，J03 會談室。內容全部取自凍結後的 ReLEAF wiki。"></p>' +
      '<p><a href="https://2026.igem.wiki/gems-taiwan/" target="_blank" rel="noopener">2026.igem.wiki/gems-taiwan</a> · ' +
      '<span data-en="Every fact links back to the wiki page it came from." data-zh="每一條事實都連回它的 wiki 來源頁。"></span></p></div>';
    document.body.appendChild(f);
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildNav();
    buildFoot();
    setLang(lang, true);
    for (var j = 0; j < listeners.length; j++) { try { listeners[j](lang); } catch (e) {} }
  });
})();
