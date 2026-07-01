(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const langKey = 'pd-lang';

  const english = {
    skip: 'Skip to main content',
    brandSubtitle: 'Feedlot Supervisor',
    navHome: 'Home',
    navSnapshot: 'Summary',
    navAbout: 'Profile',
    navScope: 'Scope',
    navEvidence: 'Evidence',
    navExperience: 'Experience',
    navContact: 'Contact',
    professionalInquiry: 'Professional Inquiry',
    heroKicker: 'Public professional portfolio',
    status: 'Open for professional opportunities',
    heroTitle1: 'Feedlot Operations',
    heroTitle2: 'Supervisor',
    heroLead: 'Pramudya Duta Kusuma Wardana Swaizy is a Feedlot Operations Supervisor focused on daily operations, cattle readiness, feeding routine, health monitoring, animal welfare, biosecurity, field documentation, and team coordination.',
    readerNote: 'Accuracy note: the ±6,000-head figure refers to exposure to peak/highest feedlot population, not a claim of normal daily population.',
    downloadCv: 'Download CV',
    viewEvidence: 'View Field Evidence',
    contactCta: 'Professional Inquiry',
    value1: 'Execution Discipline',
    value2: 'Peak Population Exposure',
    value3: 'Animal Welfare',
    value4: 'Biosecurity',
    portraitTitle: 'Pramudya Duta',
    portraitText: 'Feedlot Operations Supervisor focused on unit stability, cattle readiness, SOP consistency, welfare, biosecurity, and reliable field execution.',
    micro1Label: 'Peak Exposure',
    micro1Value: '±6,000 Head',
    micro2Label: 'Core Role',
    micro2Value: 'Feedlot Supervisor',
    snapshotKicker: 'Quick reader summary',
    snapshotTitle: 'Key information to understand the professional profile quickly.',
    snapshotLead: 'This section helps recruiters, colleagues, and public readers understand professional capacity without reading the entire page first.',
    metric1: 'Exposure to peak feedlot population of approximately 6,000 head.',
    metricNote1: 'Peak exposure',
    metric2: 'Years of feedlot field execution experience.',
    metricNote2: 'Field execution',
    metric3: 'Animal Science academic foundation, GPA 3.75.',
    metricNote3: 'Academic base',
    metric4: 'Brahman Cross carcass performance research samples.',
    metricNote4: 'Research base',
    aboutKicker: 'Professional Profile',
    aboutTitle: 'A professional profile showing work capacity, contribution, and field discipline.',
    aboutLead: 'This profile summarizes work focus, operational contribution, and evidence supporting professional capacity in a feedlot environment.',
    summaryTitle: 'Professional Summary',
    summaryText: 'Feedlot Operations Supervisor experienced in unit operations supervision, cattle condition monitoring, feed quality control, animal welfare, biosecurity, and field team coordination. Accustomed to maintaining daily work rhythm, SOP discipline, and execution consistency to support unit stability and cattle readiness.',
    summaryPoint1: 'Prioritizes clean, measurable, and accountable field execution.',
    summaryPoint2: 'Supported by Animal Science foundations to understand cattle performance, feed quality, and beef production context.',
    summaryPoint3: 'Oriented toward clear communication, quick response, and continuous operational improvement.',
    scopeKicker: 'Operating Scope',
    scopeTitle: 'Core work areas in modern feedlot operations.',
    scopeLead: 'Each area below explains key contributions in modern feedlot operations: rhythm, risk control, welfare, biosecurity, and team coordination.',
    scope1Title: 'Daily Operations',
    scope1Text: 'Maintaining daily work rhythm, cattle readiness, field priorities, and SOP consistency.',
    scope2Title: 'Feeding & Feed Quality',
    scope2Text: 'Supporting delivery discipline, allocation awareness, feed quality observation, and daily nutrition execution consistency.',
    scope3Title: 'Cattle Monitoring',
    scope3Text: 'Observing behavior, health indicators, cattle condition, and structured field follow-up.',
    scope4Title: 'Animal Welfare',
    scope4Text: 'Promoting low-stress handling, humane treatment, hygiene, and cattle-flow awareness in daily routines.',
    scope5Title: 'Biosecurity',
    scope5Text: 'Maintaining area hygiene, movement control, disease-risk prevention, and operational environmental integrity.',
    scope6Title: 'Team Coordination',
    scope6Text: 'Strengthening shift communication, work synchronization, field escalation, and team accountability.',
    path1Title: 'Observe',
    path1Text: 'Cattle & area condition',
    path2Title: 'Prioritize',
    path2Text: 'Risk and unit needs',
    path3Title: 'Coordinate',
    path3Text: 'Team, shift, escalation',
    path4Title: 'Execute',
    path4Text: 'Daily work rhythm',
    path5Title: 'Improve',
    path5Text: 'Correction and stabilization',
    evidenceKicker: 'Field Evidence',
    evidenceTitle: 'Field documentation as proof of professional work.',
    evidenceLead: 'Photos and videos are selected to show real work context: barn environment, field involvement, grading, handling, unloading, market-ready cattle, calf care, and academic foundation.',
    filterAll: 'All',
    filterField: 'Field',
    filterHandling: 'Handling',
    filterAcademic: 'Academic',
    filterVideo: 'Video',
    badgeField: 'Field',
    badgeHandling: 'Handling',
    badgeAcademic: 'Academic',
    doc1Title: 'Barn Documentation',
    doc1Text: 'Operational environment and feedlot facility context showing exposure to unit routines.',
    doc2Title: 'Direct Field Involvement',
    doc2Text: 'Direct involvement in cattle supervision, handling awareness, and work discipline.',
    doc3Title: 'Grading Activity',
    doc3Text: 'Cattle classification and condition assessment supporting readiness control.',
    doc4Title: 'Night Grading',
    doc4Text: 'Night activity showing readiness, coordination, and handling discipline.',
    doc5Title: 'Academic Foundation',
    doc5Text: 'Animal Science foundation from Universitas Brawijaya supporting livestock management.',
    doc6Title: 'Market-Ready Cattle',
    doc6Text: 'Cattle condition and readiness context as part of feedlot operations.',
    doc7Title: 'Unloading Process',
    doc7Text: 'Receiving flow and handling discipline during livestock arrival.',
    doc8Title: 'Market-Ready Video',
    doc8Text: 'Representation of distribution readiness and cattle management outcomes.',
    doc9Title: 'Calf Bathing',
    doc9Text: 'Care and handling with attention to hygiene, welfare, and low-stress treatment.',
    experienceKicker: 'Operational Experience',
    experienceTitle: 'Operational experience by scale, role, and responsibility.',
    experienceLead: 'This section keeps readers focused on role, location, exposure scale, and operational contribution.',
    exp1Period: 'Jul 2024 — Present · Current Role',
    exp1Title: 'Pasir Tengah Feedlot',
    exp1Sub: 'Supervisor · PT Sumber Daya Multikarya · Cianjur · peak population ±6,000 head',
    exp1Text: 'Supports daily operational stability in a feedlot environment with exposure to a peak population of approximately 6,000 head through feeding routine oversight, cattle condition monitoring, team coordination, animal welfare discipline, biosecurity awareness, and field execution consistency.',
    exp2Period: 'Nov 2023 — Jul 2024',
    exp2Title: 'Rangkasbitung Feedlot',
    exp2Sub: 'Supervisor · PT Sumber Daya Multikarya · Banten · ±1,500 head',
    exp2Text: 'Supervised daily feedlot activities, including feeding routine, cattle monitoring, data recording, sanitation, facility control, livestock handling, and SOP implementation.',
    exp3Period: 'Jun 2022 — Jul 2022',
    exp3Title: 'Student Intern — Rangkasbitung Feedlot',
    exp3Sub: 'PT Sumber Daya Multikarya · Rangkasbitung, Banten',
    exp3Text: 'Participated in feedlot routines, feed distribution, cattle health observation, sanitation, livestock handling, and field operational discipline.',
    educationKicker: 'Education & Research',
    educationTitle: 'Technical foundation from Animal Science and beef cattle research.',
    edu1Title: 'Universitas Brawijaya',
    edu1Sub: 'Bachelor of Animal Science · 2019 — 2023 · GPA 3.75',
    edu1Text: 'Academic focus on animal science, livestock management, animal health, beef cattle production, and feedlot management fundamentals.',
    edu2Title: 'Undergraduate Thesis Research',
    edu2Sub: 'Brahman Cross Steer and Heifer Carcass Production',
    edu2Text: 'Research involving 210 Brahman Cross cattle samples to analyze daily weight gain, slaughter weight, carcass weight, carcass percentage, and Income Over Feed Cost.',
    edu3Title: 'Relevant Internship',
    edu3Sub: 'PT Sumber Daya Multikarya · Rangkasbitung, Banten',
    edu3Text: 'Participated in feedlot routines, feed distribution, cattle monitoring, sanitation, livestock handling, and operational discipline.',
    contactKicker: 'Contact',
    contactTitle: 'Open for professional opportunities and feedlot operations discussions.',
    contactLead: 'For recruitment, professional opportunities, or relevant discussions related to feedlot operations, livestock supervision, animal welfare, biosecurity, and career development in the livestock industry.',
    cvId: 'Download CV — Bahasa Indonesia',
    cvEn: 'Download CV — English',
    waValue: 'Professional inquiry via WhatsApp',
    locationLabel: 'Location',
    mobileContact: 'Inquiry'
  };

  const originalText = new Map();

  const removeAwkwardLayer = () => {
    $$('.future-signature-section, .signature-section').forEach((section) => section.remove());
  };

  const addProfileStatus = () => {
    if ($('.profile-status-badge')) return;
    const target = $('.contact-band') || $('.footer-inner');
    if (!target) return;

    const badge = document.createElement('div');
    badge.className = 'profile-status-badge';
    badge.dataset.statusId = 'profileStatus';
    badge.textContent = 'Public professional profile · Updated 2026';
    badge.style.cssText = 'display:inline-flex;align-items:center;gap:8px;margin-top:18px;padding:10px 13px;border:1px solid rgba(255,231,173,.18);border-radius:999px;background:rgba(255,255,255,.045);color:rgba(255,249,236,.78);font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;';
    target.appendChild(badge);
  };

  const updateDeckCopy = (lang) => {
    const deckKicker = $('.deck-kicker');
    const deckTitle = $('.deck-title');
    const deckLead = $('.deck-lead');
    const status = $('.profile-status-badge');

    if (lang === 'en') {
      if (deckKicker) deckKicker.textContent = 'Executive Operating Overview';
      if (deckTitle) deckTitle.textContent = 'A concise profile of field execution capacity.';
      if (deckLead) deckLead.textContent = 'A premium summary to help viewers understand role, work focus, exposure scale, and professional readiness without feeling excessive.';
      if (status) status.textContent = 'Public professional profile · Updated 2026';
    } else {
      if (deckKicker) deckKicker.textContent = 'Executive Operating Overview';
      if (deckTitle) deckTitle.textContent = 'A concise profile of field execution capacity.';
      if (deckLead) deckLead.textContent = 'Ringkasan premium untuk membantu viewer memahami peran, fokus kerja, skala exposure, dan kesiapan profesional secara cepat tanpa terasa berlebihan.';
      if (status) status.textContent = 'Public professional profile · Updated 2026';
    }
  };

  const setupLanguage = () => {
    $$('[data-i18n]').forEach((el) => {
      if (!originalText.has(el.dataset.i18n)) originalText.set(el.dataset.i18n, el.textContent);
    });

    const apply = (lang) => {
      document.documentElement.lang = lang;
      $$('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        el.textContent = lang === 'en' && english[key] ? english[key] : (originalText.get(key) || el.textContent);
      });
      $$('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
      updateDeckCopy(lang);
      localStorage.setItem(langKey, lang);
    };

    $$('.lang-btn').forEach((button) => button.addEventListener('click', () => apply(button.dataset.lang || 'id')));
    apply(localStorage.getItem(langKey) || 'id');
  };

  const setupMenu = () => {
    const btn = $('#menuBtn');
    const nav = $('#mobileNav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    $$('a', nav).forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        document.body.classList.remove('menu-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  };

  const setupReveal = () => {
    const items = $$('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  };

  const setupCounters = () => {
    const counters = $$('.quick-value[data-count]');
    const format = (value, decimals) => Number(value).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });

    const run = (el) => {
      const target = Number(el.dataset.count || 0);
      const decimals = Number(el.dataset.decimals || 0);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const duration = 900;
      const start = performance.now();

      const step = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${prefix}${format(target * eased, decimals)}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      counters.forEach(run);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });

    counters.forEach((counter) => observer.observe(counter));
  };

  const setupSlider = () => {
    const slides = $$('.profile-slide');
    if (slides.length < 2) return;

    let index = 0;
    const show = (next) => {
      slides[index].classList.remove('active');
      index = (next + slides.length) % slides.length;
      slides[index].classList.add('active');
    };

    $('#slidePrev')?.addEventListener('click', () => show(index - 1));
    $('#slideNext')?.addEventListener('click', () => show(index + 1));
    setInterval(() => show(index + 1), 6000);
  };

  const setupEvidence = () => {
    const buttons = $$('.filter-btn');
    const cards = $$('.doc-card');
    if (!buttons.length || !cards.length) return;

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        buttons.forEach((btn) => btn.classList.toggle('active', btn === button));
        cards.forEach((card) => {
          const categories = (card.dataset.category || '').split(' ');
          card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
        });
      });
    });
  };

  const setupLightbox = () => {
    const lightbox = $('#lightbox');
    const image = $('#lightboxImage');
    const caption = $('#lightboxCaption');
    const close = $('#lightboxClose');
    if (!lightbox || !image || !caption || !close) return;

    $$('.doc-media.is-image img').forEach((img) => {
      img.addEventListener('click', () => {
        image.src = img.src;
        caption.textContent = img.dataset.caption || img.alt || '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      image.src = '';
    };

    close.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });
  };

  const setupNavState = () => {
    const links = $$('.nav a[href^="#"]');
    const sections = links.map((link) => $(link.getAttribute('href'))).filter(Boolean);
    if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });

    sections.forEach((section) => observer.observe(section));
  };

  const init = () => {
    removeAwkwardLayer();
    addProfileStatus();
    setupLanguage();
    setupMenu();
    setupReveal();
    setupCounters();
    setupSlider();
    setupEvidence();
    setupLightbox();
    setupNavState();

    const year = $('#siteYear');
    if (year) year.textContent = String(new Date().getFullYear());
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
