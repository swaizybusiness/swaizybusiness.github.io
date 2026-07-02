(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const themeKey = 'pd-theme';

  function injectStyles() {
    if ($('#premium-motion-styles')) return;
    const style = document.createElement('style');
    style.id = 'premium-motion-styles';
    style.textContent = `
      body{transition:background .45s ease,color .45s ease}.scroll-progress-bar{position:fixed;top:0;left:0;height:3px;width:0;z-index:99999;background:linear-gradient(90deg,#8cac58,#ffe7ad,#b1dc74);box-shadow:0 0 22px rgba(177,220,116,.65)}.hero{isolation:isolate}.hero-aurora{position:absolute;right:-16%;top:8%;width:min(62vw,760px);height:min(62vw,760px);z-index:-1;border-radius:50%;background:radial-gradient(circle at 42% 36%,rgba(177,220,116,.26),transparent 34%),radial-gradient(circle at 70% 66%,rgba(255,231,173,.18),transparent 34%),conic-gradient(from 180deg,transparent,rgba(140,172,88,.2),transparent,rgba(255,231,173,.16),transparent);filter:blur(30px);opacity:.72;animation:premiumOrbit 13s ease-in-out infinite alternate;pointer-events:none}@keyframes premiumOrbit{0%{transform:translate3d(0,0,0) rotate(0deg) scale(1)}100%{transform:translate3d(-7%,6%,0) rotate(22deg) scale(1.08)}}.reveal{opacity:0;transform:translateY(22px);transition:opacity .75s cubic-bezier(.2,.8,.2,1),transform .75s cubic-bezier(.2,.8,.2,1)}.reveal.in{opacity:1;transform:translateY(0)}.quick-card,.scope-card{position:relative;overflow:hidden;background:linear-gradient(150deg,rgba(255,255,255,.085),rgba(255,255,255,.028))!important;border-color:rgba(255,231,173,.18)!important;backdrop-filter:blur(19px) saturate(142%)!important}.quick-card:before,.scope-card:before{content:"";position:absolute;inset:-1px;background:linear-gradient(115deg,transparent,rgba(177,220,116,.08),transparent 56%);opacity:.7;pointer-events:none}.quick-card:hover,.scope-card:hover{box-shadow:0 34px 110px rgba(0,0,0,.42),0 0 0 1px rgba(177,220,116,.18),inset 0 1px 0 rgba(255,255,255,.08)!important}.metric-orbit{position:absolute;right:16px;bottom:16px;width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#b1dc74 calc(var(--metric-progress,0)*1%),rgba(255,255,255,.08) 0);box-shadow:0 0 26px rgba(177,220,116,.18);opacity:.88}.metric-orbit:after{content:"";width:40px;height:40px;border-radius:50%;background:rgba(3,4,3,.86);border:1px solid rgba(255,231,173,.12)}.metric-dot{position:absolute;width:8px;height:8px;border-radius:50%;background:#ffe7ad;box-shadow:0 0 16px rgba(255,231,173,.65);transform:rotate(calc(var(--metric-progress,0)*3.6deg)) translateY(-27px)}.hero-panel{will-change:transform;transform-style:preserve-3d;transition:transform .22s ease,box-shadow .22s ease}.hero-panel.tilt-active{box-shadow:0 42px 130px rgba(0,0,0,.52),0 0 0 1px rgba(255,231,173,.26)!important}.btn,.contact-item,.filter-btn,.slide-btn{transition:transform .22s cubic-bezier(.2,.8,.2,1),box-shadow .22s,border-color .22s,background .22s}.btn:hover,.contact-item:hover,.filter-btn:hover,.slide-btn:hover{transform:translateY(-3px) scale(1.015)}.theme-toggle{display:inline-flex;align-items:center;justify-content:center;min-width:42px;height:42px;border:1px solid rgba(255,231,173,.18);border-radius:999px;background:rgba(255,255,255,.045);color:var(--gold-light);font-size:13px;font-weight:900;cursor:pointer;transition:transform .22s,background .22s,border-color .22s}.theme-toggle:hover{transform:translateY(-2px);border-color:rgba(255,231,173,.36);background:rgba(255,255,255,.075)}body.theme-light{--bg:#f5f0e5;--bg-2:#fffaf0;--text:#172115;--muted:rgba(23,33,21,.76);--soft:rgba(23,33,21,.52);background:radial-gradient(circle at 50% -22%,rgba(220,183,106,.24),transparent 34%),radial-gradient(circle at 92% 10%,rgba(140,172,88,.14),transparent 34%),linear-gradient(180deg,#fffaf0 0%,#eef4e6 54%,#f8f4ea 100%)}body.theme-light .header,body.theme-light .mobile-nav{background:rgba(255,250,240,.82)}body.theme-light .quick-card,body.theme-light .scope-card,body.theme-light .timeline-card,body.theme-light .edu-card,body.theme-light .contact-band,body.theme-light .contact-item,body.theme-light .profile-card,body.theme-light .command-deck{background:linear-gradient(145deg,rgba(255,255,255,.78),rgba(255,255,255,.38))!important;color:#172115!important}body.theme-light .metric-orbit:after{background:rgba(255,250,240,.9)}.timeline{position:relative}.timeline:before{content:"";position:absolute;left:-22px;top:12px;bottom:12px;width:1px;background:linear-gradient(180deg,rgba(177,220,116,.0),rgba(177,220,116,.42),rgba(255,231,173,.18),rgba(177,220,116,.0))}.timeline-card{position:relative;overflow:visible}.timeline-card:before{content:"";position:absolute;left:-31px;top:29px;width:17px;height:17px;border-radius:50%;background:rgba(3,4,3,.9);border:1px solid rgba(255,231,173,.26);box-shadow:0 0 0 5px rgba(177,220,116,.04);transition:background .45s,box-shadow .45s,border-color .45s}.timeline-card.timeline-lit:before{background:#b1dc74;border-color:rgba(255,231,173,.8);box-shadow:0 0 0 6px rgba(177,220,116,.11),0 0 28px rgba(177,220,116,.6)}.video-shell{position:relative;overflow:hidden}.video-ui{position:absolute;left:12px;right:12px;bottom:12px;z-index:5;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;padding:10px 12px;border:1px solid rgba(255,231,173,.16);border-radius:999px;background:rgba(3,4,3,.68);backdrop-filter:blur(14px);opacity:0;transform:translateY(8px);transition:.22s}.video-shell:hover .video-ui,.video-shell.video-active .video-ui{opacity:1;transform:translateY(0)}.video-play{width:32px;height:32px;border:0;border-radius:50%;background:linear-gradient(135deg,#8cac58,#b1dc74);color:#081008;font-weight:900;cursor:pointer}.video-bar{height:7px;border-radius:999px;background:rgba(255,255,255,.14);overflow:hidden}.video-bar span{display:block;height:100%;width:0;background:linear-gradient(90deg,#b1dc74,#ffe7ad)}.video-time{color:rgba(255,249,236,.78);font-size:11px;font-weight:800;min-width:38px;text-align:right}@media(max-width:760px){.timeline:before,.timeline-card:before{display:none}.hero-aurora{opacity:.48}.theme-toggle{height:39px;min-width:39px}.metric-orbit{width:46px;height:46px}.metric-orbit:after{width:34px;height:34px}}
    `;
    document.head.appendChild(style);
  }

  function addScrollProgress() {
    if ($('.scroll-progress-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    document.body.appendChild(bar);
    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      bar.style.width = `${Math.min((window.scrollY / max) * 100, 100)}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  function addHeroAurora() {
    const hero = $('.hero');
    if (!hero || $('.hero-aurora', hero)) return;
    const aurora = document.createElement('div');
    aurora.className = 'hero-aurora';
    hero.prepend(aurora);
  }

  function addMetricVisuals() {
    $$('.quick-card').forEach((card, index) => {
      if ($('.metric-orbit', card)) return;
      const value = $('.quick-value', card);
      const count = Number(value?.dataset.count || 0);
      const caps = [6000, 6, 4, 210];
      const progress = Math.max(8, Math.min(100, (count / (caps[index] || count || 1)) * 100));
      card.style.setProperty('--metric-progress', String(progress));
      const orbit = document.createElement('div');
      orbit.className = 'metric-orbit';
      orbit.setAttribute('aria-hidden', 'true');
      orbit.innerHTML = '<span class="metric-dot"></span>';
      card.appendChild(orbit);
    });
  }

  function setupProfileTilt() {
    const panel = $('.hero-panel');
    if (!panel || window.matchMedia('(pointer: coarse)').matches) return;
    panel.addEventListener('mousemove', (event) => {
      const rect = panel.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      panel.classList.add('tilt-active');
      panel.style.transform = `perspective(1100px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(4px)`;
    });
    panel.addEventListener('mouseleave', () => {
      panel.classList.remove('tilt-active');
      panel.style.transform = '';
    });
  }

  function setupThemeToggle() {
    if ($('.theme-toggle')) return;
    const apply = (theme) => {
      document.body.classList.toggle('theme-light', theme === 'light');
      $$('.theme-toggle').forEach((button) => {
        button.textContent = theme === 'light' ? '☾' : '☼';
        button.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      });
      localStorage.setItem(themeKey, theme);
    };
    const makeButton = () => {
      const btn = document.createElement('button');
      btn.className = 'theme-toggle';
      btn.type = 'button';
      btn.addEventListener('click', () => apply(document.body.classList.contains('theme-light') ? 'dark' : 'light'));
      return btn;
    };
    const desktopTarget = $('.header-actions .desktop-lang');
    if (desktopTarget) desktopTarget.after(makeButton());
    const mobileTarget = $('.mobile-nav .mobile-lang');
    if (mobileTarget) mobileTarget.appendChild(makeButton());
    apply(localStorage.getItem(themeKey) || 'dark');
  }

  function setupTimelineGlow() {
    const cards = $$('.timeline-card');
    if (!cards.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('timeline-lit'); });
    }, { threshold: 0.45 });
    cards.forEach((card) => observer.observe(card));
  }

  function setupVideoShowcase() {
    $$('.doc-media video').forEach((video) => {
      const shell = video.parentElement;
      if (!shell || shell.classList.contains('video-shell')) return;
      shell.classList.add('video-shell');
      const ui = document.createElement('div');
      ui.className = 'video-ui';
      ui.innerHTML = '<button class="video-play" type="button" aria-label="Play video">▶</button><div class="video-bar"><span></span></div><div class="video-time">0:00</div>';
      shell.appendChild(ui);
      const play = $('.video-play', ui);
      const fill = $('.video-bar span', ui);
      const time = $('.video-time', ui);
      const format = (seconds) => `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
      play.addEventListener('click', () => video.paused ? video.play() : video.pause());
      video.addEventListener('play', () => { shell.classList.add('video-active'); play.textContent = 'Ⅱ'; });
      video.addEventListener('pause', () => { shell.classList.remove('video-active'); play.textContent = '▶'; });
      video.addEventListener('timeupdate', () => {
        fill.style.width = `${video.duration ? (video.currentTime / video.duration) * 100 : 0}%`;
        time.textContent = format(video.currentTime || 0);
      });
    });
  }

  function init() {
    injectStyles();
    addScrollProgress();
    addHeroAurora();
    addMetricVisuals();
    setupThemeToggle();
    setupProfileTilt();
    setupTimelineGlow();
    setupVideoShowcase();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
