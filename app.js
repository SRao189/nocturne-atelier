if (window.top !== window.self) { document.documentElement.hidden = true; try { window.top.location = window.location.href; } catch {} }
(() => {
  const $ = (s) => document.querySelector(s);
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const money = (n) => '$' + Number(n);
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const httpsOnly = (u) => { try { return new URL(u).protocol === 'https:' ? u : ''; } catch { return ''; } };

  /* ---------- content ---------- */
  /* at = film progress for "View in room". url/shop = a real, purchasable fixture like this one (independent retailer). */
  const FIX = [
    { zone: 'The Path', name: 'Travertine Bollard Path Light', price: 240, head: 'Light the way home.', img: 'prod_01_bollard', at: 0.28,
      shop: 'Kichler', url: 'https://www.kichler.com/products/landscape-lighting/path-and-spread/path-and-spread-16265azt30',
      desc: 'Low path lights wash down onto the stone, so every step is clear and the garden stays dark.',
      spec: ['Patina dark bronze & honed Roman travertine cap · IP66 weather-sealed', 'H 620mm × Ø 110mm · 12W tunable 2200K–6500K LED'] },
    { zone: 'The Hall', name: 'Carved Alabaster Wall Sconce', price: 345, head: 'Stone that glows.', img: 'prod_02_sconce', at: 0.70,
      shop: 'Visual Comfort', url: 'https://www.visualcomfort.com/us/p/melange-elongated-sconce-kw2013',
      desc: 'By the mirror, a carved alabaster sconce is the first thing a guest sees: a soft wash across the travertine.',
      spec: ['Hand-carved Spanish alabaster block & brushed bronze center band', 'H 340mm × W 140mm × D 95mm · 16W tunable 2200K–6500K LED'] },
    { zone: 'The Stair Hall', name: 'Cognac Globe Stair Chandelier', price: 595, head: 'Fill the height.', img: 'prod_03_chandelier', at: 0.92,
      shop: 'Hammerton Studio', url: 'https://hammerton.com/product/gem-cluster-pendant/',
      desc: 'A stair hall has room for a long chandelier: one cascading cluster of cognac glass, seen from both levels.',
      spec: ['Hand-blown cognac amber glass spheres & braided bronze cords', 'Drop 1800–3400mm × Ø 680mm · 38W tunable 2200K–6500K LED'] }
  ];
  /* Beats on the 0..1 scroll timeline. fx = which fixture the line prices. */
  const BEATS = [
    { a: -0.1, b: 0.08, head: 'From the path to the stair.', fx: -1 },
    { a: 0.14, b: 0.38, fx: 0 },
    { a: 0.62, b: 0.76, fx: 1 },
    { a: 0.80, b: 0.97, fx: 2 }
  ];
  const STILLS = [1, 2, 3].map(n => `assets/stills/stop_0${n}_2200k.jpg`);
  const FOCAL = [0.5, 0.4, 0.58];          /* horizontal crop focus per shot, matters on portrait phones */
  const CUT_1 = [0.33, 0.43], CUT_2 = [0.63, 0.73];   /* the two passages between shots */

  /* ---------- state ---------- */
  const project = [];
  let target = 0, p = 0, vid = null, vidTime = 0;

  /* ---------- product lineup ---------- */
  const cards = $('#cards');
  const arrowUp = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 10.5V1.5M2 5.5l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  FIX.forEach((f, i) => {
    const el = document.createElement('article');
    el.className = 'prod';
    const url = httpsOnly(f.url);
    el.innerHTML = `<figure><img src="assets/products/${esc(f.img)}.jpg" alt="${esc(f.name)}" loading="lazy" width="800" height="800"><span class="chip">0${i + 1} · ${esc(f.zone)}</span></figure>
      <div class="body"><div class="top"><h3>${esc(f.name)}</h3><span class="from">From ${money(f.price)}.00</span></div>
      <p class="desc">${esc(f.desc)}</p><p class="spec">${f.spec.map(esc).join('<br>')}</p>
      ${url ? `<a class="real" href="${esc(url)}" target="_blank" rel="noopener noreferrer">A real fixture like this · ${esc(f.shop)} <span aria-hidden="true">↗</span><span class="vh"> (opens an independent retailer in a new tab)</span></a>` : ''}
      <div class="acts"><button class="buy" type="button" data-add="${i}">Add to project</button><button class="room" type="button" data-room="${i}">View in room ${arrowUp}</button></div></div>`;
    cards.appendChild(el);
  });
  /* One entry per fixture: { i, k, d }. k and d are set only when added from Customize. */
  const entry = (i) => project.find(e => e.i === i);
  function syncProject() {
    $('#projectCount').textContent = project.length;
    document.querySelectorAll('[data-add]').forEach(b => {
      const has = !!entry(+b.dataset.add);
      b.classList.toggle('done', has); b.textContent = has ? 'Added' : 'Add to project';
    });
    const la = $('#labAdd'), e = entry(lab.stop), c = cust[lab.stop];
    const done = lab.tab === 'custom' ? !!e && e.k === c.k && e.d === c.d : !!e;
    la.classList.toggle('done', done);
    la.textContent = done ? 'Added' : (lab.tab === 'custom' && e ? 'Update project' : 'Add to project');
    const list = $('#projectList');
    const total = project.reduce((s, e) => s + FIX[e.i].price, 0);
    list.innerHTML = project.length
      ? '<ul>' + project.map(e => `<li><span>${esc(FIX[e.i].name)}${e.k ? ` · ${Number(e.k)}K, ${Number(e.d)}%` : ''}</span><span>${money(FIX[e.i].price)}</span></li>`).join('') + `<li class="total"><span>Total</span><span>${money(total)}</span></li></ul>`
      : '<p class="empty">Nothing added yet.</p>';
  }
  function toggleFix(i) {
    const k = project.findIndex(e => e.i === i);
    if (k >= 0) project.splice(k, 1); else project.push({ i });
    syncProject();
  }
  cards.addEventListener('click', (e) => {
    const b = e.target.closest('[data-add]'); if (b) return toggleFix(+b.dataset.add);
    const r = e.target.closest('[data-room]');   /* fly back up the film to where this fixture lives */
    if (r) scrollTo({ top: FIX[+r.dataset.room].at * ($('#track').offsetHeight - innerHeight), behavior: reduce ? 'auto' : 'smooth' });
  });
  $('#projectBtn').addEventListener('click', () => {
    const l = $('#projectList'); l.hidden = !l.hidden; $('#projectBtn').setAttribute('aria-expanded', String(!l.hidden));
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) { $('#projectList').hidden = true; $('#projectBtn').setAttribute('aria-expanded', 'false'); }
  });

  /* ---------- film: stills stand-in, or the real clip once it exists ---------- */
  const cv = $('#film'), ctx = cv.getContext('2d');
  const imgs = STILLS.map(src => { const im = new Image(); im.decoding = 'async'; im.src = src; return im; });
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = Math.round(innerWidth * dpr); cv.height = Math.round(innerHeight * dpr);
  }
  addEventListener('resize', resize); resize();

  function drawCover(im, zoom, focal, alpha) {
    if (!im.complete || !im.naturalWidth) return;
    const cw = cv.width, ch = cv.height;
    const s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight) * zoom;
    const w = im.naturalWidth * s, h = im.naturalHeight * s;
    ctx.globalAlpha = alpha;
    ctx.drawImage(im, (cw - w) * focal, (ch - h) * 0.5, w, h);
  }
  /* Stand-in for the real dolly clips: the camera pushes into the shot, then "passes through"
     it. The outgoing frame rushes toward you and dissolves into a bloom of warm light while the
     next room settles in behind it, so the cut reads as travel, not as a double exposure. */
  function drawStills() {
    const push = (r0, r1) => reduce ? 1 : 1 + 0.085 * clamp((p - r0) / (r1 - r0));
    const zs = [push(0, 0.43), push(0.33, 0.73), push(0.63, 1.0)];
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#0b0a09'; ctx.globalAlpha = 1; ctx.fillRect(0, 0, cv.width, cv.height);
    let bloom = 0;
    const cuts = [[CUT_1, 0, 1], [CUT_2, 1, 2]];
    let drawn = false;
    for (const [[c0, c1], from, to] of cuts) {
      if (p >= c0 && p <= c1) {
        const e = smooth(c0, c1, p);
        drawCover(imgs[to], zs[to] * (reduce ? 1 : 1 + 0.16 * (1 - e)), FOCAL[to], 1);
        drawCover(imgs[from], zs[from] * (reduce ? 1 : 1 + 0.45 * e), FOCAL[from], 1 - smooth(0.4, 0.6, e));
        bloom = Math.sin(Math.PI * e) ** 2 * 0.85;
        drawn = true; break;
      }
    }
    if (!drawn) {
      const i = p < CUT_1[0] ? 0 : p < CUT_2[0] ? 1 : 2;
      drawCover(imgs[i], zs[i], FOCAL[i], 1);
    }
    if (bloom > 0.01) {
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = bloom;
      const g = ctx.createRadialGradient(cv.width / 2, cv.height * 0.55, 0, cv.width / 2, cv.height * 0.55, cv.width * 0.65);
      g.addColorStop(0, 'rgba(255,190,115,1)'); g.addColorStop(0.55, 'rgba(255,150,70,.35)'); g.addColorStop(1, 'rgba(255,140,60,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.globalCompositeOperation = 'source-over';
    }
    ctx.globalAlpha = 1;
  }
  function drawVideo() {
    if (!vid || !vid.duration) return;
    const want = p * vid.duration;
    vidTime = reduce ? want : vidTime + (want - vidTime) * 0.18;
    if (Math.abs(vid.currentTime - vidTime) > 0.016) vid.currentTime = vidTime;
  }
  /* If assets/film/film.mp4 exists (served over http), scrub it instead of the stills. */
  /* Loaded fully as a blob so scrubbing is smooth on any server. Skipped under Save-Data; stills are the fallback. */
  if (!navigator.connection?.saveData) fetch('assets/film/film.mp4').then(r => r.ok && (r.headers.get('content-type') || '').startsWith('video/') ? r.blob() : Promise.reject()).then(blob => {
    const v = document.createElement('video');
    v.id = 'clip'; v.muted = true; v.playsInline = true; v.preload = 'auto'; v.src = URL.createObjectURL(blob);
    v.setAttribute('aria-hidden', 'true');
    v.addEventListener('loadedmetadata', () => { vid = v; $('#stage').classList.add('video'); });
    $('#stage').insertBefore(v, cv);
  }).catch(() => {});

  /* ---------- text, ticks ---------- */
  const beat = $('#beat'), beatH = $('#beatH'), beatP = $('#beatP'), ticks = [...document.querySelectorAll('#ticks i')];
  let shown = null;
  function updateText() {
    let on = null, alpha = 0;
    for (const b of BEATS) {
      const al = Math.min(smooth(b.a, b.a + 0.03, p), 1 - smooth(b.b - 0.03, b.b, p));
      if (al > alpha) { alpha = al; on = b; }
    }
    if (on !== shown) {
      shown = on;
      if (on) {
        beatH.textContent = on.head || FIX[on.fx].head;
        beatP.innerHTML = on.fx >= 0 ? `${esc(FIX[on.fx].name)}<span>${money(FIX[on.fx].price)}</span>` : '';
      }
    }
    beat.style.opacity = alpha;
    beat.style.transform = `translateY(${(1 - alpha) * 14}px)`;
  }
  function updateChrome() {
    ticks[0].style.setProperty('--f', clamp(p / 0.4));
    ticks[1].style.setProperty('--f', clamp((p - 0.4) / 0.3));
    ticks[2].style.setProperty('--f', clamp((p - 0.7) / 0.3));
    $('#cue').style.opacity = 1 - smooth(0.0, 0.03, p);
  }

  /* ---------- loop ---------- */
  function onScroll() {
    const max = $('#track').offsetHeight - innerHeight;
    target = max > 0 ? clamp(scrollY / max) : 0;
  }
  addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();
  function frame() {
    p = reduce ? target : p + (target - p) * 0.1;
    if (Math.abs(target - p) < 0.0004) p = target;
    if (vid) drawVideo(); else drawStills();
    updateText(); updateChrome();
    requestAnimationFrame(frame);
  }
  frame();

  /* ---------- Light Lab ---------- */
  const K = [['off', 'Night'], ['2200k', '2200K'], ['3500k', '3500K'], ['6500k', '6500K']];
  const lab = { stop: 0, k: '2200k', front: 'A', tab: 'set' };
  const cust = FIX.map(() => ({ k: 2200, d: 100 }));   /* Customize settings, remembered per fixture */
  const labEl = $('#lab');
  const stops = $('#labStops'), kel = $('#labKelvin');
  const kR = $('#kRange'), dR = $('#dRange');
  /* Exact blend: the two nearest warmth stills crossfade inside #mixLit, which then sits over the
     room's "off" still at the dimmer's opacity. */
  function mixRender() {
    const n = lab.stop + 1, c = cust[lab.stop];
    const [lo, hi, t] = c.k <= 3500 ? ['2200k', '3500k', (c.k - 2200) / 1300] : ['3500k', '6500k', (c.k - 3500) / 3000];
    const set = (id, k) => { const im = $(id), src = `assets/stills/stop_0${n}_${k}.jpg`; if (!im.src.endsWith(src)) im.src = src; };
    set('#mixOff', 'off'); set('#mixLo', lo); set('#mixHi', hi);
    $('#mixHi').style.opacity = t; $('#mixLit').style.opacity = c.d / 100;
    kR.value = c.k; dR.value = c.d;
    $('#kOut').textContent = c.k + 'K'; $('#dOut').textContent = c.d ? c.d + '%' : 'Off';
    kR.setAttribute('aria-valuetext', c.k + ' kelvin'); dR.setAttribute('aria-valuetext', c.d ? c.d + ' percent' : 'off');
  }
  function setTab(t, focus) {
    lab.tab = t; const custom = t === 'custom';
    [['#tabSet', !custom], ['#tabCustom', custom]].forEach(([id, on]) => { const b = $(id); b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
    kel.hidden = custom; $('#paneCustom').hidden = !custom; $('#mix').hidden = !custom;
    labRender();
  }
  $('#tabSet').addEventListener('click', () => setTab('set'));
  $('#tabCustom').addEventListener('click', () => setTab('custom'));
  $('.tabs').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); setTab(lab.tab === 'set' ? 'custom' : 'set', true); }
  });
  kR.addEventListener('input', () => { cust[lab.stop].k = +kR.value; mixRender(); syncProject(); });
  dR.addEventListener('input', () => { cust[lab.stop].d = +dR.value; mixRender(); syncProject(); });
  FIX.forEach((f, i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = f.zone; b.dataset.i = i; stops.appendChild(b); });
  K.forEach(([k, label]) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.dataset.k = k; kel.appendChild(b); });
  function labRender() {
    const src = `assets/stills/stop_0${lab.stop + 1}_${lab.k}.jpg`;
    const back = lab.front === 'A' ? $('#labB') : $('#labA'), front = lab.front === 'A' ? $('#labA') : $('#labB');
    let done = false;
    const swap = () => { if (done) return; done = true; back.style.opacity = 1; front.style.opacity = 0; lab.front = lab.front === 'A' ? 'B' : 'A'; };
    if (!front.getAttribute('src')) { front.src = src; front.style.opacity = 1; }
    else { back.onload = swap; back.src = src; if (back.complete && back.naturalWidth) swap(); }
    const f = FIX[lab.stop];
    $('#labTitle').textContent = f.zone;
    $('#labMeta').textContent = `${f.name} · ${money(f.price)}`;
    stops.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.i === lab.stop)));
    kel.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.k === lab.k)));
    if (lab.tab === 'custom') mixRender();
    syncProject();
  }
  stops.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { lab.stop = +b.dataset.i; labRender(); } });
  kel.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { lab.k = b.dataset.k; labRender(); } });
  $('#labAdd').addEventListener('click', () => {
    if (lab.tab !== 'custom') return toggleFix(lab.stop);
    const c = cust[lab.stop], e = entry(lab.stop);   /* Customize adds or updates; it never removes */
    if (e) { e.k = c.k; e.d = c.d; } else project.push({ i: lab.stop, k: c.k, d: c.d });
    syncProject();
  });
  let opener = null;
  function openLab() {
    opener = document.activeElement; labEl.hidden = false; document.body.style.overflow = 'hidden'; labRender(); $('#labClose').focus();
  }
  function closeLab() { labEl.hidden = true; document.body.style.overflow = ''; if (opener) opener.focus(); }
  $('#labBtn').addEventListener('click', openLab);
  $('#labClose').addEventListener('click', closeLab);
  addEventListener('keydown', (e) => {
    if (labEl.hidden) return;
    if (e.key === 'Escape') return closeLab();
    if (e.key !== 'Tab') return;
    const f = [...labEl.querySelectorAll('button, input, [href], [tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled && el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  syncProject();
})();
