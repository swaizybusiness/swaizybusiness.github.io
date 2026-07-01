(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const langKey = 'pd-lang';

  const idRefined = {
    heroLead: 'Pramudya Duta Kusuma Wardana Swaizy adalah Feedlot Operations Supervisor dengan fokus pada stabilitas operasional, kesiapan ternak, feeding rhythm, monitoring kesehatan, animal welfare, biosecurity, dokumentasi lapangan, dan koordinasi tim lintas aktivitas.',
    snapshotTitle: 'Ringkasan cepat untuk memahami kapasitas profesional secara jelas.',
    snapshotLead: 'Bagian ini membantu recruiter, kolega, dan pembaca publik menangkap skala exposure, fondasi akademik, dan fokus kerja utama secara ringkas.',
    aboutTitle: 'Profil profesional yang menampilkan kapasitas kerja, kontribusi operasional, dan disiplin lapangan.',
    aboutLead: 'Profil ini merangkum cara kerja, tanggung jawab, dan evidence yang mendukung kapasitas profesional di lingkungan feedlot.',
    summaryText: 'Feedlot Operations Supervisor dengan pengalaman dalam pengawasan unit, monitoring kondisi ternak, kontrol kualitas pakan, animal welfare, biosecurity, dan koordinasi tim lapangan. Terbiasa menjaga ritme kerja harian, disiplin SOP, serta konsistensi eksekusi untuk mendukung stabilitas unit dan kesiapan ternak.',
    scopeTitle: 'Ruang kerja inti dalam operasional feedlot modern.',
    scopeLead: 'Ruang kerja berikut menjelaskan kontribusi utama dalam menjaga ritme operasional, kontrol risiko, welfare, biosecurity, readiness, dan koordinasi tim.',
    evidenceTitle: 'Field evidence yang menunjukkan konteks kerja nyata.',
    evidenceLead: 'Dokumentasi diposisikan sebagai bukti profesional: memperlihatkan keterlibatan lapangan, kondisi operasional, handling, grading, animal care, dan fondasi akademik yang relevan.',
    experienceTitle: 'Pengalaman operasional berdasarkan skala, peran, dan kontribusi.',
    experienceLead: 'Bagian ini membantu viewer memahami perjalanan kerja melalui lokasi, tanggung jawab, skala exposure, dan kontribusi operasional.',
    contactTitle: 'Terbuka untuk peluang profesional dan diskusi operasional feedlot.',
    contactLead: 'Untuk rekrutmen, peluang profesional, atau diskusi relevan terkait feedlot operations, livestock supervision, animal welfare, biosecurity, dan pengembangan karier di industri peternakan.'
  };

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
    heroLead: 'Pramudya Duta Kusuma Wardana Swaizy is a Feedlot Operations Supervisor focused on operational stability, cattle readiness, feeding rhythm, health monitoring, animal welfare, biosecurity, field documentation, and team coordination across daily activities.',
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
    snapshotTitle: 'A quick summary to understand professional capacity clearly.',
    snapshotLead: 'This section helps recruiters, colleagues, and public readers quickly understand exposure scale, academic foundation, and core work focus.',
    metric1: 'Exposure to peak feedlot population of approximately 6,000 head.',
    metricNote1: 'Peak exposure',
    metric2: 'Years of feedlot field execution experience.',
    metricNote2: 'Field execution',
    metric3: 'Animal Science academic foundation, GPA 3.75.',
    metricNote3: 'Academic base',
    metric4: 'Brahman Cross carcass performance research samples.',
    metricNote4: 'Research base',
    aboutKicker: 'Professional Profile',
    aboutTitle: 'A professional profile showing work capacity, operational contribution, and field discipline.',
    aboutLead: 'This profile summarizes working style, responsibilities, and evidence supporting professional capacity in a feedlot environment.',
    summaryTitle: 'Professional Summary',
    summaryText: 'Feedlot Operations Supervisor experienced in unit supervision, cattle condition monitoring, feed quality control, animal welfare, biosecurity, and field team coordination. Accustomed to maintaining daily work rhythm, SOP discipline, and execution consistency to support unit stability and cattle readiness.',
    summaryPoint1: 'Prioritizes clean, measurable, and accountable field execution.',
    summaryPoint2: 'Supported by Animal Science foundations to understand cattle performance, feed quality, and beef production context.',
    summaryPoint3: 'Oriented toward clear communication, quick response, and continuous operational improvement.',
    scopeKicker: 'Operating Scope',
    scopeTitle: 'Core work areas in modern feedlot operations.',
    scopeLead: 'The areas below show key contributions in maintaining operating rhythm, risk control, welfare, biosecurity, readiness, and team coordination.',
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
    evidenceTitle: 'Field evidence that shows real working context.',
    evidenceLead: 'Documentation is positioned as professional proof: showing field involvement, operational conditions, handling, grading, animal care, and relevant academic foundation.',
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
    experienceTitle: 'Operational experience by scale, role, and contribution.',
    experienceLead: 'This section helps viewers understand career progression through location, responsibility, exposure scale, and operational contribution.',
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

  const evidenceStories = {
    id: [
      ['Field Context', 'Konteks fasilitas feedlot dan lingkungan kerja operasional.', 'Professional Relevance', 'Menunjukkan exposure terhadap kebersihan area, movement awareness, dan kesiapan unit.'],
      ['Field Context', 'Keterlibatan langsung dalam aktivitas pengawasan lapangan.', 'Professional Relevance', 'Memperkuat bukti field presence, handling awareness, dan disiplin kerja.'],
      ['Field Context', 'Aktivitas grading untuk membaca kondisi dan klasifikasi ternak.', 'Professional Relevance', 'Relevan untuk readiness control, assessment ternak, dan keputusan operasional.'],
      ['Field Context', 'Aktivitas grading pada kondisi operasional malam.', 'Professional Relevance', 'Menunjukkan kesiapan kerja, koordinasi, dan disiplin handling dalam kondisi nyata.'],
      ['Field Context', 'Dokumentasi fondasi akademik Animal Science.', 'Professional Relevance', 'Menghubungkan latar akademik dengan pemahaman teknis livestock management.'],
      ['Field Context', 'Kondisi ternak dalam konteks kesiapan distribusi.', 'Professional Relevance', 'Mendukung narasi cattle readiness dan hasil pengelolaan feedlot.'],
      ['Field Context', 'Proses penerimaan ternak dalam alur operasional feedlot.', 'Professional Relevance', 'Menunjukkan awareness terhadap receiving flow, handling, dan kontrol risiko.'],
      ['Field Context', 'Video cattle readiness dan kondisi ternak siap distribusi.', 'Professional Relevance', 'Memperkuat bukti hasil kerja lapangan dan kesiapan unit.'],
      ['Field Context', 'Care dan handling pada ternak muda.', 'Professional Relevance', 'Menunjukkan perhatian pada hygiene, welfare, dan low-stress treatment.']
    ],
    en: [
      ['Field Context', 'Feedlot facility context and operational working environment.', 'Professional Relevance', 'Shows exposure to area hygiene, movement awareness, and unit readiness.'],
      ['Field Context', 'Direct involvement in field supervision activities.', 'Professional Relevance', 'Strengthens evidence of field presence, handling awareness, and work discipline.'],
      ['Field Context', 'Grading activity to assess cattle condition and classification.', 'Professional Relevance', 'Relevant to readiness control, cattle assessment, and operational decisions.'],
      ['Field Context', 'Night grading activity under real operating conditions.', 'Professional Relevance', 'Shows work readiness, coordination, and handling discipline in real field conditions.'],
      ['Field Context', 'Documentation of Animal Science academic foundation.', 'Professional Relevance', 'Connects academic background with technical understanding of livestock management.'],
      ['Field Context', 'Cattle condition in distribution-readiness context.', 'Professional Relevance', 'Supports the cattle readiness narrative and feedlot management outcomes.'],
      ['Field Context', 'Livestock receiving process in feedlot operations flow.', 'Professional Relevance', 'Shows awareness of receiving flow, handling, and risk control.'],
      ['Field Context', 'Video evidence of cattle readiness and market-ready condition.', 'Professional Relevance', 'Strengthens proof of field work outcomes and unit readiness.'],
      ['Field Context', 'Care and handling for young cattle.', 'Professional Relevance', 'Shows attention to hygiene, welfare, and low-stress treatment.']
    ]
  };

  const professionalBrief = {
    id: {
      title: 'Professional Brief',
      intro: 'Ringkasan singkat untuk viewer profesional sebelum menghubungi.',
      items: [
        ['Role Fit', 'Feedlot Operations · Livestock Supervision · Field Execution'],
        ['Core Strength', 'Operational rhythm, cattle readiness, welfare, biosecurity, and team coordination.'],
        ['Best For', 'Recruitment discussion, livestock operations opportunity, and feedlot supervision role.'],
        ['Profile Status', 'Public professional profile · Updated 2026']
      ]
    },
    en: {
      title: 'Professional Brief',
      intro: 'A concise reference for professional viewers before reaching out.',
      items: [
        ['Role Fit', 'Feedlot Operations · Livestock Supervision · Field Execution'],
        ['Core Strength', 'Operational rhythm, cattle readiness, welfare, biosecurity, and team coordination.'],
        ['Best For', 'Recruitment discussion, livestock operations opportunity, and feedlot supervision role.'],
        ['Profile Status', 'Public professional profile · Updated 2026']
      ]
    }
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

  const addProfessionalBrief = () => {
    if ($('.professional-brief-card')) return;
    const contactIntro = $('.contact-grid > div:first-child') || $('.contact-band');
    if (!contactIntro) return;

    const card = document.createElement('aside');
    card.className = 'professional-brief-card';
    card.style.cssText = 'position:relative;margin:22px 0 4px;padding:18px;border:1px solid rgba(255,231,173,.18);border-radius:24px;background:linear-gradient(135deg,rgba(255,255,255,.07),rgba(255,255,255,.028));box-shadow:inset 0 1px 0 rgba(255,255,255,.06);overflow:hidden;';
    const actions = $('.hero-actions', contactIntro);
    if (actions) contactIntro.insertBefore(card, actions);
    else contactIntro.appendChild(card);
  };

  const updateProfessionalBrief = (lang) => {
    const card = $('.professional-brief-card');
    if (!card) return;
    const content = professionalBrief[lang] || professionalBrief.id;
    card.innerHTML = `
      <div style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 0% 0%,rgba(255,231,173,.16),transparent 32%),linear-gradient(115deg,transparent,rgba(255,255,255,.045),transparent 62%);"></div>
      <div style="position:relative;z-index:1;">
        <div style="color:#ffe7ad;font-size:10px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;">${content.title}</div>
        <div style="margin-top:7px;color:rgba(255,249,236,.72);font-size:12.5px;line-height:1.55;">${content.intro}</div>
        <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:14px;" class="professional-brief-grid">
          ${content.items.map(([label, value]) => `
            <div style="padding:12px;border:1px solid rgba(255,231,173,.13);border-radius:16px;background:rgba(0,0,0,.16);">
              <div style="color:rgba(255,249,236,.48);font-size:9px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;">${label}</div>
              <div style="margin-top:6px;color:rgba(255,249,236,.88);font-size:12px;font-weight:800;line-height:1.45;">${value}</div>
            </div>`).join('')}
        </div>
      </div>`;

    const styleId = 'professional-brief-responsive-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = '@media(max-width:760px){.professional-brief-grid{grid-template-columns:1fr!important}.professional-brief-card{border-radius:20px!important}}';
      document.head.appendChild(style);
    }
  };

  const updateDeckCopy = (lang) => {
    const deckKicker = $('.deck-kicker');
    const deckTitle = $('.deck-title');
    const deckLead = $('.deck-lead');
    const status = $('.profile-status-badge');
    if (deckKicker) deckKicker.textContent = 'Executive Operating Overview';
    if (deckTitle) deckTitle.textContent = 'A concise profile of field execution capacity.';
    if (deckLead) {
      deckLead.textContent = lang === 'en'
        ? 'A premium summary to help viewers understand role, work focus, exposure scale, and professional readiness without feeling excessive.'
        : 'Ringkasan premium untuk membantu viewer memahami peran, fokus kerja, skala exposure, dan kesiapan profesional secara cepat tanpa terasa berlebihan.';
    }
    if (status) status.textContent = 'Public professional profile · Updated 2026';
  };

  const applyEvidenceStorytelling = (lang) => {
    const cards = $$('.doc-card');
    const storySet = evidenceStories[lang] || evidenceStories.id;
    cards.forEach((card, index) => {
      const overlay = $('.doc-overlay', card);
      if (!overlay || !storySet[index]) return;
      $('.evidence-story', overlay)?.remove();
      const [labelA, textA, labelB, textB] = storySet[index];
      const story = document.createElement('div');
      story.className = 'evidence-story';
      story.innerHTML = `<div><strong>${labelA}</strong><span>${textA}</span></div><div><strong>${labelB}</strong><span>${textB}</span></div>`;
      story.style.cssText = 'display:grid;gap:7px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,231,173,.16);font-size:11px;line-height:1.42;color:rgba(255,249,236,.74);';
      $$('strong', story).forEach((strong) => {
        strong.style.cssText = 'display:block;margin-bottom:3px;color:#ffe7ad;font-size:9px;letter-spacing:.12em;text-transform:uppercase;';
      });
      $$('span', story).forEach((span) => {
        span.style.cssText = 'display:block;';
      });
      overlay.appendChild(story);
    });
  };

  const setupLanguage = () => {
    $$('[data-i18n]').forEach((el) => {
      if (!originalText.has(el.dataset.i18n)) originalText.set(el.dataset.i18n, el.textContent);
    });
    const apply = (lang) => {
      document.documentElement.lang = lang;
      $$('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (lang === 'en' && english[key]) el.textContent = english[key];
        else el.textContent = idRefined[key] || originalText.get(key) || el.textContent;
      });
      $$('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
      updateDeckCopy(lang);
      updateProfessionalBrief(lang);
      applyEvidenceStorytelling(lang);
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
    const format = (value, decimals) => Number(value).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
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
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
    window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
  };

  const setupNavState = () => {
    const links = $$('.nav a[href^="#"]');
    const sections = links.map((link) => $(link.getAttribute('href'))).filter(Boolean);
    if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  };

  const init = () => {
    removeAwkwardLayer();
    addProfileStatus();
    addProfessionalBrief();
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
