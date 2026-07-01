(() => {
  'use strict';

  const translations = {
    en: {
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
      heroLead: 'Pramudya Duta Kusuma Wardana Swaizy is a Feedlot Operations Supervisor focused on daily operational execution, cattle readiness, feeding routine, health monitoring, animal welfare, biosecurity, field documentation, and team coordination.',
      readerNote: 'Accuracy note: the ±6,000-head figure on this website refers to exposure to peak/highest feedlot population, not a claim of normal daily population.',
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
      snapshotTitle: 'Key information is clear from the beginning.',
      snapshotLead: 'This section helps recruiters, colleagues, and public readers understand professional capacity without having to read the entire page first.',
      metric1: 'Exposure to peak feedlot population of approximately 6,000 head.',
      metricNote1: 'Peak exposure',
      metric2: 'Years of direct feedlot field execution.',
      metricNote2: 'Field execution',
      metric3: 'Animal Science academic foundation, GPA 3.75.',
      metricNote3: 'Academic base',
      metric4: 'Brahman Cross carcass performance research samples.',
      metricNote4: 'Research base',
      aboutKicker: 'Professional Profile',
      aboutTitle: 'Profile presented as work capacity, not just biography.',
      aboutLead: 'The narrative is structured clearly: who Pramudya is, what the work focus is, how he contributes to the unit, and what evidence supports it.',
      summaryTitle: 'Professional Summary',
      summaryText: 'Feedlot Operations Supervisor experienced in operational supervision, cattle condition monitoring, feed quality control, animal welfare, biosecurity, and field team coordination. Accustomed to maintaining daily work rhythm, SOP discipline, and execution consistency to support unit stability and cattle readiness.',
      summaryPoint1: 'Prioritizes clean, measurable, and accountable field execution.',
      summaryPoint2: 'Supported by Animal Science foundations to read cattle performance, feed quality, and beef production context.',
      summaryPoint3: 'Oriented toward clear work communication, quick response, and continuous operational improvement.',
      scopeKicker: 'Operating Scope',
      scopeTitle: 'Work scope made concise and easy to understand.',
      scopeLead: 'Each area below explains the main contribution in modern feedlot operations: rhythm, risk control, welfare, biosecurity, and team coordination.',
      scope1Title: 'Daily Operations',
      scope1Text: 'Maintaining daily work rhythm, cattle readiness, field priorities, and unit SOP execution consistency.',
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
      path1Title: 'Observe', path1Text: 'Cattle & area condition',
      path2Title: 'Prioritize', path2Text: 'Risk and unit needs',
      path3Title: 'Coordinate', path3Text: 'Team, shift, escalation',
      path4Title: 'Execute', path4Text: 'Daily work rhythm',
      path5Title: 'Improve', path5Text: 'Correction and stabilization',
      evidenceKicker: 'Field Evidence',
      evidenceTitle: 'Documentation structured as proof of field work.',
      evidenceLead: 'Photos and videos are selected to show real work context: barn environment, field involvement, grading, handling, unloading, market-ready cattle, calf care, and academic foundation.',
      filterAll: 'All', filterField: 'Field', filterHandling: 'Handling', filterAcademic: 'Academic', filterVideo: 'Video',
      badgeField: 'Field', badgeHandling: 'Handling', badgeAcademic: 'Academic',
      doc1Title: 'Barn Documentation', doc1Text: 'Operational environment and feedlot facility context showing exposure to unit routines.',
      doc2Title: 'Direct Field Involvement', doc2Text: 'Direct involvement in cattle supervision, handling awareness, and work discipline.',
      doc3Title: 'Grading Activity', doc3Text: 'Cattle classification and condition assessment supporting readiness control.',
      doc4Title: 'Night Grading', doc4Text: 'Night field activity showing readiness, coordination, and handling discipline.',
      doc5Title: 'Academic Foundation', doc5Text: 'Animal Science foundation from Universitas Brawijaya supporting livestock management.',
      doc6Title: 'Market-Ready Cattle', doc6Text: 'Cattle condition and readiness context as part of feedlot operations.',
      doc7Title: 'Unloading Process', doc7Text: 'Receiving flow and handling discipline during livestock arrival.',
      doc8Title: 'Market-Ready Video', doc8Text: 'Representation of distribution readiness and cattle management outcomes.',
      doc9Title: 'Calf Bathing', doc9Text: 'Care and handling with attention to hygiene, welfare, and low-stress treatment.',
      experienceKicker: 'Operational Experience',
      experienceTitle: 'Experience written clearly by scale and responsibility.',
      experienceLead: 'This section keeps readers focused on role, location, exposure scale, and operational contribution.',
      exp1Period: 'Jul 2024 — Present · Current Role',
      exp1Sub: 'Supervisor · PT Sumber Daya Multikarya · Cianjur · peak population ±6,000 head',
      exp1Text: 'Supports daily operational stability in a feedlot environment with exposure to peak population of approximately 6,000 head through feeding routine oversight, cattle condition monitoring, team coordination, animal welfare discipline, biosecurity awareness, and field execution consistency.',
      exp2Sub: 'Supervisor · PT Sumber Daya Multikarya · Banten · ±1,500 head',
      exp2Text: 'Supervised daily feedlot activities, including feeding routine, cattle monitoring, data recording, sanitation, facility control, livestock handling, and SOP implementation.',
      exp3Text: 'Participated in feedlot routines, feed distribution, cattle health observation, sanitation, livestock handling, and field operational discipline.',
      educationKicker: 'Education & Research',
      educationTitle: 'Technical foundation from Animal Science and beef cattle research.',
      edu1Sub: 'Bachelor of Animal Science · 2019 — 2023 · GPA 3.75',
      edu1Text: 'Academic focus on animal science, livestock management, animal health, beef cattle production, and feedlot management fundamentals.',
      edu2Title: 'Undergraduate Thesis Research',
      edu2Sub: 'Brahman Cross Steer and Heifer Carcass Production',
      edu2Text: 'Research involving 210 Brahman Cross cattle samples to analyze daily weight gain, slaughter weight, carcass weight, carcass percentage, and Income Over Feed Cost.',
      edu3Title: 'Relevant Internship',
      edu3Text: 'Participated in feedlot routines, feed distribution, cattle monitoring, sanitation, livestock handling, and operational discipline.',
      contactKicker: 'Contact',
      contactTitle: 'Open for professional opportunities and feedlot operations discussions.',
      contactLead: 'For recruitment, professional opportunities, or relevant discussions related to feedlot operations, livestock supervision, animal welfare, biosecurity, and career development in the livestock industry.',
      cvId: 'Download CV — Bahasa Indonesia',
      cvEn: 'Download CV — English',
      waValue: 'Professional inquiry via WhatsApp',
      locationLabel: 'Location',
      mobileContact: 'Inquiry'
    }
  };

  const langKey = 'pd-lang';
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const dict = translations[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem(langKey, lang);
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
  applyLanguage(localStorage.getItem(langKey) || 'id');

  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '✕' : '☰';
  });
  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuBtn?.setAttribute('aria-expanded', 'false');
      if (menuBtn) menuBtn.textContent = '☰';
    });
  });

  const slides = [...document.querySelectorAll('.profile-slide')];
  let slideIndex = 0;
  function showSlide(index) {
    if (!slides.length) return;
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === slideIndex));
  }
  document.getElementById('slidePrev')?.addEventListener('click', () => showSlide(slideIndex - 1));
  document.getElementById('slideNext')?.addEventListener('click', () => showSlide(slideIndex + 1));
  setInterval(() => showSlide(slideIndex + 1), 6500);

  const revealItems = [...document.querySelectorAll('.reveal')];
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  revealItems.forEach((item) => revealObserver.observe(item));

  const counters = [...document.querySelectorAll('.quick-value[data-count]')];
  let counted = false;
  function countUp() {
    if (counted) return;
    counted = true;
    counters.forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const duration = 1100;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = prefix + (decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('id-ID')) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  const snapshot = document.getElementById('snapshot');
  if (snapshot) {
    new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) countUp();
    }, { threshold: 0.25 }).observe(snapshot);
  }

  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const docCards = [...document.querySelectorAll('.doc-card')];
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach((button) => button.classList.toggle('active', button === btn));
      docCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(' ');
        card.classList.toggle('hidden', !(filter === 'all' || categories.includes(filter)));
      });
    });
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  function closeLightbox() {
    lightbox?.classList.remove('open');
    lightbox?.setAttribute('aria-hidden', 'true');
    if (lightboxImage) lightboxImage.src = '';
  }
  document.querySelectorAll('.doc-media.is-image img').forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    const open = () => {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      lightboxImage.src = img.currentSrc || img.src;
      lightboxCaption.textContent = img.dataset.caption || img.alt || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      lightboxClose?.focus();
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });

  const navLinks = [...document.querySelectorAll('.nav a')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  sections.forEach((section) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-42% 0px -52% 0px', threshold: 0.01 }).observe(section);
  });

  const year = document.getElementById('siteYear');
  if (year) year.textContent = String(new Date().getFullYear());
})();
