(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const themeKey = 'pd-theme';

  const profileFacts = {
    name: 'Pramudya Duta Kusuma Wardana Swaizy',
    role: 'Feedlot Operations Supervisor',
    email: 'swaizybusiness@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pramudya-duta-profile',
    cv: 'assets/CV-Pramudya-Duta-Indonesia.pdf',
    exposure: '±6,000 head peak population exposure, bukan klaim populasi normal harian.',
    experience: 'Bergabung di PT Sumber Daya Multikarya sejak November 2023. Posisi saat ini: Pasir Tengah Feedlot, Cianjur.',
    strengths: 'Daily operations, feeding rhythm, cattle monitoring, animal welfare, biosecurity, team coordination, field execution discipline.'
  };

  function injectStyles() {
    if ($('#premium-motion-styles')) return;
    const style = document.createElement('style');
    style.id = 'premium-motion-styles';
    style.textContent = `
      body{transition:background .45s ease,color .45s ease}.scroll-progress-bar{position:fixed;top:0;left:0;height:3px;width:0;z-index:99999;background:linear-gradient(90deg,#8cac58,#ffe7ad,#b1dc74);box-shadow:0 0 22px rgba(177,220,116,.65)}.hero{isolation:isolate}.hero-aurora{position:absolute;right:-16%;top:8%;width:min(62vw,760px);height:min(62vw,760px);z-index:-1;border-radius:50%;background:radial-gradient(circle at 42% 36%,rgba(177,220,116,.24),transparent 34%),radial-gradient(circle at 70% 66%,rgba(255,231,173,.16),transparent 34%),conic-gradient(from 180deg,transparent,rgba(140,172,88,.18),transparent,rgba(255,231,173,.14),transparent);filter:blur(30px);opacity:.68;animation:premiumOrbit 13s ease-in-out infinite alternate;pointer-events:none}@keyframes premiumOrbit{0%{transform:translate3d(0,0,0) rotate(0deg) scale(1)}100%{transform:translate3d(-7%,6%,0) rotate(22deg) scale(1.08)}}.reveal{opacity:0;transform:translateY(22px);transition:opacity .75s cubic-bezier(.2,.8,.2,1),transform .75s cubic-bezier(.2,.8,.2,1)}.reveal.in{opacity:1;transform:translateY(0)}.quick-card,.scope-card{position:relative;overflow:hidden;background:linear-gradient(150deg,rgba(255,255,255,.085),rgba(255,255,255,.028))!important;border-color:rgba(255,231,173,.18)!important;backdrop-filter:blur(19px) saturate(142%)!important}.quick-card:before,.scope-card:before{content:"";position:absolute;inset:-1px;background:linear-gradient(115deg,transparent,rgba(177,220,116,.08),transparent 56%);opacity:.7;pointer-events:none}.quick-card:hover,.scope-card:hover{box-shadow:0 34px 110px rgba(0,0,0,.42),0 0 0 1px rgba(177,220,116,.18),inset 0 1px 0 rgba(255,255,255,.08)!important}.quick-value{position:relative;display:inline-block}.quick-value:after{content:"";position:absolute;left:2px;right:2px;bottom:-10px;height:2px;border-radius:999px;background:linear-gradient(90deg,transparent,#b1dc74,#ffe7ad,transparent);transform:scaleX(0);transform-origin:left;animation:kpiLine 1.15s .35s cubic-bezier(.2,.8,.2,1) forwards}@keyframes kpiLine{to{transform:scaleX(1)}}.metric-orbit{position:absolute;right:16px;bottom:16px;width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#b1dc74 calc(var(--metric-progress,0)*1%),rgba(255,255,255,.08) 0);box-shadow:0 0 26px rgba(177,220,116,.18);opacity:.88}.metric-orbit:after{content:"";width:40px;height:40px;border-radius:50%;background:rgba(3,4,3,.86);border:1px solid rgba(255,231,173,.12)}.metric-dot{position:absolute;width:8px;height:8px;border-radius:50%;background:#ffe7ad;box-shadow:0 0 16px rgba(255,231,173,.65);transform:rotate(calc(var(--metric-progress,0)*3.6deg)) translateY(-27px)}.hero-panel{will-change:transform;transform-style:preserve-3d;transition:transform .22s ease,box-shadow .22s ease}.hero-panel.tilt-active{box-shadow:0 42px 130px rgba(0,0,0,.52),0 0 0 1px rgba(255,231,173,.26)!important}.btn,.contact-item,.filter-btn,.slide-btn{transition:transform .22s cubic-bezier(.2,.8,.2,1),box-shadow .22s,border-color .22s,background .22s}.btn:hover,.contact-item:hover,.filter-btn:hover,.slide-btn:hover{transform:translateY(-3px) scale(1.015)}.premium-cursor-dot{position:fixed;width:13px;height:13px;border:1px solid rgba(255,231,173,.68);border-radius:50%;z-index:99998;pointer-events:none;opacity:0;transform:translate(-50%,-50%) scale(.8);transition:opacity .16s,transform .16s,background .16s;mix-blend-mode:screen}.premium-cursor-dot.active{opacity:1;transform:translate(-50%,-50%) scale(1.65);background:rgba(177,220,116,.14)}.theme-toggle{display:inline-flex;align-items:center;justify-content:center;min-width:42px;height:42px;border:1px solid rgba(255,231,173,.18);border-radius:999px;background:rgba(255,255,255,.045);color:var(--gold-light);font-size:13px;font-weight:900;cursor:pointer;transition:transform .22s,background .22s,border-color .22s}.theme-toggle:hover{transform:translateY(-2px);border-color:rgba(255,231,173,.36);background:rgba(255,255,255,.075)}body.theme-light{--bg:#f5f0e5;--bg-2:#fffaf0;--text:#172115;--muted:rgba(23,33,21,.76);--soft:rgba(23,33,21,.52);background:radial-gradient(circle at 50% -22%,rgba(220,183,106,.24),transparent 34%),radial-gradient(circle at 92% 10%,rgba(140,172,88,.14),transparent 34%),linear-gradient(180deg,#fffaf0 0%,#eef4e6 54%,#f8f4ea 100%)}body.theme-light .header,body.theme-light .mobile-nav{background:rgba(255,250,240,.82)}body.theme-light .quick-card,body.theme-light .scope-card,body.theme-light .timeline-card,body.theme-light .edu-card,body.theme-light .contact-band,body.theme-light .contact-item,body.theme-light .profile-card,body.theme-light .command-deck{background:linear-gradient(145deg,rgba(255,255,255,.78),rgba(255,255,255,.38))!important;color:#172115!important}body.theme-light .metric-orbit:after{background:rgba(255,250,240,.9)}.ops-badge{display:inline-flex;align-items:center;gap:8px;padding:9px 11px;border:1px solid rgba(177,220,116,.24);border-radius:999px;background:rgba(177,220,116,.08);font-size:11px;font-weight:900;color:rgba(255,249,236,.84);white-space:nowrap}.ops-badge span{width:8px;height:8px;border-radius:50%;background:#b1dc74;box-shadow:0 0 18px rgba(177,220,116,.8)}body.theme-light .ops-badge{color:#172115}.reading-path{position:relative;--flow-progress:0}.reading-path:before{content:"";position:absolute;left:6%;right:6%;top:50%;height:1px;background:linear-gradient(90deg,rgba(177,220,116,.0),rgba(177,220,116,.55),rgba(255,231,173,.28),rgba(177,220,116,.0));transform:scaleX(var(--flow-progress));transform-origin:left;transition:transform .9s cubic-bezier(.2,.8,.2,1);box-shadow:0 0 18px rgba(177,220,116,.24)}.path-card{position:relative;z-index:1}.path-card.path-lit{border-color:rgba(177,220,116,.35)!important;box-shadow:0 24px 86px rgba(0,0,0,.34),0 0 0 1px rgba(177,220,116,.14),inset 0 1px 0 rgba(255,255,255,.08)!important}.path-card.path-lit .path-number{color:#b1dc74;text-shadow:0 0 20px rgba(177,220,116,.55)}.timeline{position:relative}.timeline:before{content:"";position:absolute;left:-22px;top:12px;bottom:12px;width:1px;background:linear-gradient(180deg,rgba(177,220,116,.0),rgba(177,220,116,.42),rgba(255,231,173,.18),rgba(177,220,116,.0))}.timeline-card{position:relative;overflow:visible}.timeline-card:before{content:"";position:absolute;left:-31px;top:29px;width:17px;height:17px;border-radius:50%;background:rgba(3,4,3,.9);border:1px solid rgba(255,231,173,.26);box-shadow:0 0 0 5px rgba(177,220,116,.04);transition:background .45s,box-shadow .45s,border-color .45s}.timeline-card.timeline-lit:before{background:#b1dc74;border-color:rgba(255,231,173,.8);box-shadow:0 0 0 6px rgba(177,220,116,.11),0 0 28px rgba(177,220,116,.6)}.career-map,.radar-card,.tool-card{margin-top:24px;padding:22px;border:1px solid rgba(255,231,173,.16);border-radius:26px;background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025));box-shadow:0 24px 78px rgba(0,0,0,.25);backdrop-filter:blur(16px)}.career-route{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:12px;align-items:center}.route-node{padding:15px;border:1px solid rgba(255,231,173,.15);border-radius:20px;background:rgba(0,0,0,.16)}.route-label{font-size:10px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--soft)}.route-title{margin-top:6px;font-family:Cinzel,Georgia,serif;font-weight:800;color:var(--gold-light)}.route-line{height:1px;width:62px;background:linear-gradient(90deg,#b1dc74,#ffe7ad);box-shadow:0 0 18px rgba(177,220,116,.38)}.radar-wrap{display:grid;grid-template-columns:minmax(210px,300px) 1fr;gap:20px;align-items:center}.radar-list{display:grid;gap:9px}.radar-list div{display:flex;justify-content:space-between;gap:16px;padding:9px 11px;border:1px solid rgba(255,231,173,.12);border-radius:14px;background:rgba(255,255,255,.035);font-size:12px;font-weight:800}.doc-media{position:relative;overflow:hidden}.doc-media:after,.video-shell:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,transparent 0,rgba(177,220,116,.08) 49%,transparent 51%);background-size:100% 12px;opacity:0;mix-blend-mode:screen;transition:opacity .22s}.doc-card:hover .doc-media:after,.video-shell:hover:after{opacity:.45}.video-shell{position:relative;overflow:hidden}.video-shell video{cursor:pointer}.video-ui{position:absolute;left:12px;right:12px;bottom:12px;z-index:5;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;padding:10px 12px;border:1px solid rgba(255,231,173,.16);border-radius:999px;background:rgba(3,4,3,.68);backdrop-filter:blur(14px);opacity:0;transform:translateY(8px);transition:.22s}.video-shell:hover .video-ui,.video-shell.video-active .video-ui{opacity:1;transform:translateY(0)}.video-play{width:32px;height:32px;border:0;border-radius:50%;background:linear-gradient(135deg,#8cac58,#b1dc74);color:#081008;font-weight:900;cursor:pointer}.video-bar{height:7px;border-radius:999px;background:rgba(255,255,255,.14);overflow:hidden;cursor:pointer}.video-bar span{display:block;height:100%;width:0;background:linear-gradient(90deg,#b1dc74,#ffe7ad)}.video-time{color:rgba(255,249,236,.78);font-size:11px;font-weight:800;min-width:38px;text-align:right}.command-overlay,.terminal-overlay,.tools-overlay{position:fixed;inset:0;z-index:99990;display:none;place-items:start center;padding:90px 16px;background:rgba(0,0,0,.58);backdrop-filter:blur(14px)}.command-overlay.open,.terminal-overlay.open,.tools-overlay.open{display:grid}.command-box,.terminal-box,.tools-box{width:min(720px,100%);border:1px solid rgba(255,231,173,.18);border-radius:26px;background:rgba(3,4,3,.92);box-shadow:0 38px 130px rgba(0,0,0,.55);overflow:hidden}.command-input{width:100%;padding:18px 20px;border:0;border-bottom:1px solid rgba(255,231,173,.12);background:transparent;color:var(--text);font-size:17px;font-weight:800;outline:0}.command-list{display:grid;padding:10px}.command-item{display:flex;justify-content:space-between;gap:16px;padding:13px 14px;border-radius:16px;color:var(--muted);font-weight:800;cursor:pointer}.command-item:hover,.command-item.active{background:rgba(255,255,255,.06);color:var(--gold-light)}.terminal-box,.tools-box{padding:18px}.terminal-output{min-height:220px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#b1dc74;font-size:13px;line-height:1.65}.terminal-input{width:100%;padding:12px;border:1px solid rgba(177,220,116,.22);border-radius:14px;background:rgba(0,0,0,.35);color:#b1dc74;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;outline:0}.assistant-launch{position:fixed;right:18px;bottom:92px;z-index:99970;display:inline-flex;align-items:center;gap:8px;padding:12px 14px;border:1px solid rgba(255,231,173,.18);border-radius:999px;background:rgba(3,4,3,.82);backdrop-filter:blur(16px);color:var(--gold-light);font-size:12px;font-weight:900;box-shadow:0 22px 70px rgba(0,0,0,.36);cursor:pointer}.assistant-panel{position:fixed;right:18px;bottom:148px;z-index:99971;width:min(360px,calc(100% - 28px));display:none;border:1px solid rgba(255,231,173,.18);border-radius:24px;background:rgba(3,4,3,.94);box-shadow:0 34px 110px rgba(0,0,0,.48);backdrop-filter:blur(18px);overflow:hidden}.assistant-panel.open{display:block}.assistant-head{padding:14px 16px;border-bottom:1px solid rgba(255,231,173,.12);font-weight:900;color:var(--gold-light)}.assistant-log{display:grid;gap:9px;max-height:300px;overflow:auto;padding:14px}.assistant-msg{padding:10px 12px;border-radius:15px;background:rgba(255,255,255,.045);font-size:12px;line-height:1.55;color:var(--muted)}.assistant-msg.user{background:rgba(177,220,116,.12);color:var(--text)}.assistant-input-wrap{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(255,231,173,.12)}.assistant-input{flex:1;border:1px solid rgba(255,231,173,.14);border-radius:999px;background:rgba(255,255,255,.04);color:var(--text);padding:10px 12px;outline:0}.assistant-send{border:0;border-radius:999px;background:linear-gradient(135deg,#8cac58,#b1dc74);color:#081008;font-weight:900;padding:0 13px}.calc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.calc-grid input{width:100%;padding:12px;border:1px solid rgba(255,231,173,.14);border-radius:14px;background:rgba(255,255,255,.04);color:var(--text)}.calc-result{margin-top:12px;padding:14px;border:1px solid rgba(177,220,116,.2);border-radius:16px;background:rgba(177,220,116,.08);font-weight:900;color:var(--gold-light)}@media(max-width:760px){.timeline:before,.timeline-card:before,.reading-path:before{display:none}.hero-aurora{opacity:.48}.theme-toggle{height:39px;min-width:39px}.metric-orbit{width:46px;height:46px}.metric-orbit:after{width:34px;height:34px}.career-route,.radar-wrap,.calc-grid{grid-template-columns:1fr}.route-line{width:1px;height:32px;margin-inline:auto}.assistant-launch{bottom:82px}.assistant-panel{right:14px;bottom:136px}}
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

  function setupPremiumCursor() {
    if (window.matchMedia('(pointer: coarse)').matches || $('.premium-cursor-dot')) return;
    const dot = document.createElement('div');
    dot.className = 'premium-cursor-dot';
    document.body.appendChild(dot);
    window.addEventListener('mousemove', (event) => {
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    }, { passive: true });
    $$('.btn,.contact-item,.filter-btn,.slide-btn,.theme-toggle,.assistant-launch').forEach((el) => {
      el.addEventListener('mouseenter', () => dot.classList.add('active'));
      el.addEventListener('mouseleave', () => dot.classList.remove('active'));
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

  function addOpsBadge() {
    if ($('.ops-badge')) return;
    const header = $('.header-actions');
    if (!header) return;
    const badge = document.createElement('div');
    badge.className = 'ops-badge';
    const getHour = () => Number(new Intl.DateTimeFormat('en-US', { hour: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' }).format(new Date()));
    const update = () => {
      const hour = getHour();
      const active = hour >= 6 && hour < 17;
      badge.innerHTML = `<span></span>${active ? 'On Field Window' : 'Off Duty Window'} · WIB`;
      badge.style.opacity = active ? '1' : '.72';
    };
    update();
    setInterval(update, 60000);
    header.prepend(badge);
  }

  function setupTimelineGlow() {
    const cards = $$('.timeline-card');
    if (!cards.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('timeline-lit'); });
    }, { threshold: 0.45 });
    cards.forEach((card) => observer.observe(card));
  }

  function setupFlowDiagram() {
    const wrapper = $('.reading-path');
    const cards = $$('.path-card', wrapper || document);
    if (!wrapper || !cards.length || !('IntersectionObserver' in window)) return;
    const lit = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('path-lit');
        lit.add(entry.target);
        wrapper.style.setProperty('--flow-progress', String(lit.size / cards.length));
      });
    }, { threshold: 0.42 });
    cards.forEach((card) => observer.observe(card));
  }

  function setupVideoShowcase() {
    $$('.doc-media video').forEach((video) => {
      const shell = video.parentElement;
      if (!shell || shell.classList.contains('video-shell')) return;
      shell.classList.add('video-shell');
      video.removeAttribute('controls');
      const ui = document.createElement('div');
      ui.className = 'video-ui';
      ui.innerHTML = '<button class="video-play" type="button" aria-label="Play video">▶</button><div class="video-bar"><span></span></div><div class="video-time">0:00</div>';
      shell.appendChild(ui);
      const play = $('.video-play', ui);
      const bar = $('.video-bar', ui);
      const fill = $('.video-bar span', ui);
      const time = $('.video-time', ui);
      const format = (seconds) => `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
      const toggle = () => video.paused ? video.play() : video.pause();
      play.addEventListener('click', toggle);
      video.addEventListener('click', toggle);
      bar.addEventListener('click', (event) => {
        const rect = bar.getBoundingClientRect();
        const pct = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
        if (video.duration) video.currentTime = pct * video.duration;
      });
      video.addEventListener('play', () => { shell.classList.add('video-active'); play.textContent = 'Ⅱ'; });
      video.addEventListener('pause', () => { shell.classList.remove('video-active'); play.textContent = '▶'; });
      video.addEventListener('timeupdate', () => {
        fill.style.width = `${video.duration ? (video.currentTime / video.duration) * 100 : 0}%`;
        time.textContent = format(video.currentTime || 0);
      });
    });
  }

  function answerQuestion(text) {
    const q = text.toLowerCase();
    if (q.includes('nama')) return profileFacts.name;
    if (q.includes('pengalaman') || q.includes('lama')) return profileFacts.experience;
    if (q.includes('ekor') || q.includes('populasi') || q.includes('6000')) return profileFacts.exposure;
    if (q.includes('skill') || q.includes('strength') || q.includes('kuat')) return profileFacts.strengths;
    if (q.includes('email') || q.includes('kontak')) return `Email: ${profileFacts.email}. LinkedIn: ${profileFacts.linkedin}`;
    if (q.includes('cv')) return `CV tersedia di ${profileFacts.cv}.`;
    if (q.includes('linkedin')) return profileFacts.linkedin;
    return 'Profil ini menonjolkan feedlot operations, peak population exposure, animal welfare, biosecurity, monitoring ternak, dan disiplin eksekusi lapangan. Coba tanya: pengalaman, populasi, skill, kontak, CV, atau LinkedIn.';
  }

  function addRecruiterAssistant() {
    if ($('.assistant-launch')) return;
    const launch = document.createElement('button');
    launch.className = 'assistant-launch';
    launch.type = 'button';
    launch.textContent = 'Recruiter Assistant';
    const panel = document.createElement('div');
    panel.className = 'assistant-panel';
    panel.innerHTML = '<div class="assistant-head">Portfolio Recruiter Assistant</div><div class="assistant-log"><div class="assistant-msg">Halo. Saya bisa bantu jawab cepat tentang pengalaman, peak exposure, skill, CV, kontak, dan LinkedIn.</div></div><div class="assistant-input-wrap"><input class="assistant-input" placeholder="Tanya: pernah pegang berapa ekor?" /><button class="assistant-send">Send</button></div>';
    document.body.append(launch, panel);
    const log = $('.assistant-log', panel);
    const input = $('.assistant-input', panel);
    const send = $('.assistant-send', panel);
    const submit = () => {
      const value = input.value.trim();
      if (!value) return;
      log.insertAdjacentHTML('beforeend', `<div class="assistant-msg user">${value.replace(/[<>&]/g, '')}</div><div class="assistant-msg">${answerQuestion(value)}</div>`);
      input.value = '';
      log.scrollTop = log.scrollHeight;
    };
    launch.addEventListener('click', () => panel.classList.toggle('open'));
    send.addEventListener('click', submit);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  }

  function addCommandPalette() {
    if ($('.command-overlay')) return;
    const commands = [
      ['Profile', '#about'], ['Operating Scope', '#scope'], ['Field Evidence', '#evidence'], ['Experience Timeline', '#experience'], ['Contact', '#contact'], ['Download CV', profileFacts.cv], ['LinkedIn', profileFacts.linkedin], ['Recruiter Tools', 'tools'], ['Terminal', 'terminal']
    ];
    const overlay = document.createElement('div');
    overlay.className = 'command-overlay';
    overlay.innerHTML = '<div class="command-box"><input class="command-input" placeholder="Search command or section..." /><div class="command-list"></div></div>';
    document.body.appendChild(overlay);
    const input = $('.command-input', overlay);
    const list = $('.command-list', overlay);
    const render = () => {
      const q = input.value.toLowerCase();
      list.innerHTML = commands.filter(([name]) => name.toLowerCase().includes(q)).map(([name, target]) => `<div class="command-item" data-target="${target}"><span>${name}</span><span>↵</span></div>`).join('');
    };
    const open = () => { overlay.classList.add('open'); render(); setTimeout(() => input.focus(), 30); };
    const close = () => overlay.classList.remove('open');
    const run = (target) => {
      close();
      if (target === 'terminal') return openTerminal();
      if (target === 'tools') return openTools();
      if (target.startsWith('#')) return $(target)?.scrollIntoView({ behavior: 'smooth' });
      window.open(target, '_blank', 'noopener,noreferrer');
    };
    input.addEventListener('input', render);
    list.addEventListener('click', (e) => { const item = e.target.closest('.command-item'); if (item) run(item.dataset.target); });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Enter') $('.command-item', list)?.click();
    });
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); }
      if (e.key === 'Escape') close();
    });
  }

  function openTerminal() {
    let overlay = $('.terminal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'terminal-overlay';
      overlay.innerHTML = '<div class="terminal-box"><div class="terminal-output">portfolio-terminal v1\nType: whoami, experience --list, contact --email, open linkedin, clear</div><input class="terminal-input" placeholder="command" /></div>';
      document.body.appendChild(overlay);
      const out = $('.terminal-output', overlay);
      const input = $('.terminal-input', overlay);
      input.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const cmd = input.value.trim();
        input.value = '';
        const map = {
          'whoami': profileFacts.name + ' — ' + profileFacts.role,
          'experience --list': profileFacts.experience,
          'contact --email': profileFacts.email,
          'open linkedin': profileFacts.linkedin,
          'clear': ''
        };
        if (cmd === 'clear') out.textContent = '';
        else out.textContent += `\n> ${cmd}\n${map[cmd] || 'Unknown command. Try whoami, experience --list, contact --email, open linkedin.'}`;
      });
      overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
    }
    overlay.classList.add('open');
    setTimeout(() => $('.terminal-input', overlay).focus(), 30);
  }

  function openTools() {
    let overlay = $('.tools-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'tools-overlay';
      overlay.innerHTML = '<div class="tools-box"><div class="card-title">Recruiter Technical Tools</div><p class="card-text">Mini calculator untuk simulasi ADG/feeding result. Semua berjalan lokal di browser.</p><div class="calc-grid"><input id="calcStart" type="number" placeholder="Berat awal kg" /><input id="calcEnd" type="number" placeholder="Berat akhir kg" /><input id="calcDays" type="number" placeholder="Hari" /></div><div class="calc-result">ADG: <span id="calcAdg">0.00</span> kg/day</div></div>';
      document.body.appendChild(overlay);
      const calc = () => {
        const s = Number($('#calcStart')?.value || 0), e = Number($('#calcEnd')?.value || 0), d = Number($('#calcDays')?.value || 0);
        $('#calcAdg').textContent = d > 0 ? ((e - s) / d).toFixed(2) : '0.00';
      };
      ['calcStart','calcEnd','calcDays'].forEach((id) => $('#' + id, overlay)?.addEventListener('input', calc));
      overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
    }
    overlay.classList.add('open');
  }

  function addCareerMap() {
    const exp = $('#experience .experience-layout');
    if (!exp || $('.career-map')) return;
    const map = document.createElement('div');
    map.className = 'career-map reveal';
    map.innerHTML = '<div class="card-title">Career Route Map</div><p class="card-text">Visual route perjalanan operasional feedlot.</p><div class="career-route"><div class="route-node"><div class="route-label">Intern</div><div class="route-title">Rangkasbitung</div></div><div class="route-line"></div><div class="route-node"><div class="route-label">Supervisor</div><div class="route-title">Rangkasbitung</div></div><div class="route-line"></div><div class="route-node"><div class="route-label">Current</div><div class="route-title">Pasir Tengah</div></div></div>';
    exp.appendChild(map);
  }

  function addRadarChart() {
    const scope = $('#scope .container');
    if (!scope || $('.radar-card')) return;
    const card = document.createElement('div');
    card.className = 'radar-card reveal';
    card.innerHTML = '<div class="card-title">Operating Competency Radar</div><div class="radar-wrap"><svg viewBox="0 0 220 220" role="img" aria-label="Competency radar"><polygon points="110,22 194,72 180,168 110,202 40,168 26,72" fill="none" stroke="rgba(255,231,173,.18)"/><polygon points="110,40 174,80 164,155 110,184 58,158 44,84" fill="rgba(177,220,116,.18)" stroke="#b1dc74" stroke-width="2"/><g fill="#ffe7ad" font-size="9" font-weight="800"><text x="95" y="16">Observe</text><text x="176" y="68">Prioritize</text><text x="168" y="184">Coordinate</text><text x="92" y="216">Execute</text><text x="6" y="184">Improve</text><text x="0" y="68">Biosecurity</text></g></svg><div class="radar-list"><div><span>Observe</span><strong>Field monitoring</strong></div><div><span>Prioritize</span><strong>Risk & readiness</strong></div><div><span>Coordinate</span><strong>Team alignment</strong></div><div><span>Execute</span><strong>SOP rhythm</strong></div><div><span>Improve</span><strong>Correction loop</strong></div></div></div>';
    scope.appendChild(card);
  }

  function init() {
    injectStyles();
    addScrollProgress();
    addHeroAurora();
    addMetricVisuals();
    setupThemeToggle();
    addOpsBadge();
    setupProfileTilt();
    setupTimelineGlow();
    setupFlowDiagram();
    setupVideoShowcase();
    addRecruiterAssistant();
    addCommandPalette();
    addCareerMap();
    addRadarChart();
    setTimeout(setupPremiumCursor, 150);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
