(() => {
  'use strict';

  const copy = {
    id: {
      skip:'Lewati ke konten utama',navProfile:'Profil',navExperience:'Pengalaman',navExpertise:'Keahlian',navEvidence:'Bukti',navContact:'Kontak',
      availability:'Terbuka untuk peluang profesional yang relevan',heroOverline:'Field operations · livestock systems · Indonesia',heroRole:'Feedlot Operations Supervisor',
      heroIntro:'Memimpin operasional dari lapangan—menghubungkan kesiapan ternak, feeding discipline, welfare, biosecurity, dan koordinasi tim menjadi eksekusi yang konsisten.',downloadCv:'Unduh CV',
      proofYears:'Tahun bersama PT SDM',proofExposure:'Paparan populasi puncak*',proofGpa:'IPK Animal Science',accuracyNote:'Angka ±6.000 ekor adalah paparan populasi puncak, bukan klaim populasi normal harian.',
      portraitLabel:'Operational profile',assignmentLabel:'Penugasan saat ini',assignmentDetail:'Supervisor · Cianjur, Jawa Barat',
      proofEyebrow:'Recruiter snapshot',proofTitle:'Nilai profesional yang dapat dipahami dalam 30 detik.',proofIntro:'Tiga bukti yang merangkum skala pengalaman, progres tanggung jawab, dan fondasi ilmiah.',
      proofCard1Value:'1.500 → ±6.000',proofCard1Title:'Progres skala operasi',proofCard1Body:'Dari supervisi unit sekitar 1.500 ekor menuju exposure pada populasi puncak sekitar 6.000 ekor.',
      proofCard2Title:'Kepemimpinan langsung',proofCard2Body:'Terlibat pada ritme unit, monitoring ternak, feeding routine, handling, welfare, biosecurity, dan koordinasi tim.',
      proofCard3Title:'Science-grounded',proofCard3Body:'Riset karkas Brahman Cross pada 210 sampel memperkuat cara berpikir berbasis data dan produksi.',
      sectionProfile:'Profil',profileEyebrow:'Practical operator · scientific foundation',profileTitle:'Kepemimpinan yang hadir di lapangan, bukan hanya di laporan.',
      profileLead:'Operasi yang kuat dibangun dari detail yang dilakukan benar—setiap hari.',profileBody:'Sebagai Feedlot Operations Supervisor, saya menjaga ritme unit melalui observasi kondisi ternak, feeding discipline, kontrol area, penerapan welfare dan biosecurity, serta komunikasi tim yang jelas. Fondasi Animal Science membantu saya menghubungkan keputusan lapangan dengan konteks produksi yang lebih luas.',
      principle1Title:'Observe precisely',principle1Body:'Membaca perubahan kecil pada ternak, pakan, area, dan ritme kerja sebelum berkembang menjadi risiko.',principle2Title:'Act responsibly',principle2Body:'Menempatkan welfare, keselamatan, biosecurity, dan akuntabilitas sebagai dasar tindakan.',principle3Title:'Improve continuously',principle3Body:'Menjaga kebiasaan evaluasi, koreksi cepat, dan komunikasi terbuka untuk menstabilkan unit.',
      sectionExperience:'Pengalaman',experienceEyebrow:'Responsibility earned through direct execution',experienceTitle:'Tanggung jawab yang berkembang bersama skala operasi.',experienceAside:'Perjalanan profesional yang dibentuk melalui keterlibatan langsung, penguasaan ritme unit, dan tanggung jawab operasional yang terus meningkat.',careerStart:'Awal exposure feedlot',careerSupervisor:'Mulai peran supervisor',careerScale:'Transisi ke unit lebih besar',currentTag:'SAAT INI',
      role1:'Supervisor · PT Sumber Daya Multikarya · Cianjur',role1Body:'Menjaga stabilitas operasional pada lingkungan feedlot dengan exposure populasi puncak ±6.000 ekor melalui monitoring ternak, feeding routine, koordinasi tim, welfare, biosecurity, dan konsistensi SOP.',role1Point1:'Mengawal prioritas dan readiness unit dari aktivitas harian sampai kebutuhan distribusi.',role1Point2:'Mendukung deteksi dini perubahan kondisi ternak dan hambatan operasional.',
      role2:'Supervisor · PT Sumber Daya Multikarya · Banten · ±1.500 ekor',role2Body:'Mengawasi pemberian pakan, monitoring ternak, sanitasi, kontrol fasilitas, handling, pencatatan, dan kepatuhan terhadap SOP serta animal welfare.',role3:'Operational Manager · Bekasi',role3Body:'Membangun fondasi kepemimpinan operasional melalui koordinasi aktivitas harian, alokasi sumber daya, kontrol timeline, dan kolaborasi lintas fungsi.',role4:'Student Intern · PT Sumber Daya Multikarya',role4Body:'Membangun fondasi feedlot melalui distribusi pakan, observasi kesehatan, sanitasi, handling ternak, dan disiplin kerja industri.',
      sectionExpertise:'Keahlian',expertiseEyebrow:'Six disciplines · one dependable operation',expertiseTitle:'Kompetensi yang mengubah observasi menjadi kesiapan operasional.',
      expertise1Title:'Daily Operations',expertise1Body:'Ritme kerja, prioritas unit, kesiapan area, dan konsistensi SOP dari awal hingga akhir shift.',outcome1:'Stabilitas unit',expertise2Title:'Feeding & Feed Quality',expertise2Body:'Delivery discipline, alokasi, observasi kualitas pakan, dan respons terhadap kondisi konsumsi.',outcome2:'Konsistensi konsumsi',expertise3Title:'Cattle Monitoring',expertise3Body:'Indikator kesehatan, perilaku, kondisi fisik, dan kebutuhan tindak lanjut yang terstruktur.',outcome3:'Deteksi dini',expertise4Title:'Animal Welfare',expertise4Body:'Low-stress handling, perlakuan humanis, kebersihan, dan alur ternak yang aman.',outcome4:'Responsible handling',expertise5Title:'Biosecurity',expertise5Body:'Movement control, kebersihan area, pencegahan risiko penyakit, dan integritas lingkungan kerja.',outcome5:'Kontrol risiko',expertise6Title:'Team Coordination',expertise6Body:'Handover, pembagian kerja, eskalasi, dan akuntabilitas yang jelas antar-shift.',outcome6:'Kejelasan eksekusi',
      flow1:'Observe',flow2:'Prioritize',flow3:'Coordinate',flow4:'Execute',flow5:'Improve',
      sectionEvidence:'Bukti lapangan',evidenceEyebrow:'Work documented where it happens',evidenceTitle:'Bukti terpilih, dengan konteks yang jelas.',evidenceIntro:'Dokumentasi ringkas yang menunjukkan fasilitas, keterlibatan langsung, grading, dan kondisi ternak.',
      evidence1Title:'Direct involvement',evidence1Body:'Kehadiran langsung dalam rutinitas ternak, observasi kondisi, safety, dan disiplin kerja lapangan.',evidence2Title:'Operational environment',evidence2Body:'Konteks fasilitas, kebersihan area, alur ternak, dan kesiapan unit.',evidence3Title:'Readiness control',evidence3Body:'Assessment dan klasifikasi kondisi untuk mendukung keputusan operasional.',evidence4Title:'Market readiness',evidence4Body:'Kondisi ternak sebagai hasil dari disiplin feeding, care, monitoring, dan readiness.',
      videoTitle:'Calf care & responsible handling',videoBody:'Fragmen singkat yang memperlihatkan keterlibatan langsung dan pendekatan tenang dalam handling ternak.',videoFallback:'Browser Anda tidak mendukung pemutaran video.',
      sectionEducation:'Pendidikan',educationEyebrow:'Science behind field decisions',educationTitle:'Fondasi ilmiah yang tetap dekat dengan realitas produksi.',degreeLabel:'Sarjana Peternakan',degreeBody:'Animal Science · manajemen peternakan · produksi sapi potong · kesehatan ternak.',researchLabel:'Undergraduate thesis',researchTitle:'Produksi Karkas Brahman Cross Steer & Heifer',researchBody:'Analisis daily weight gain, slaughter weight, carcass weight, persentase karkas, dan Income Over Feed Cost pada 210 sampel.',
      contactEyebrow:'Professional contact',contactTitle:'Mari bicara tentang tantangan operasional berikutnya.',contactBody:'Terbuka untuk rekrutmen dan diskusi profesional yang relevan dengan feedlot operations, livestock supervision, animal welfare, biosecurity, atau pengembangan industri peternakan.',whatsappText:'Professional inquiry',downloadCvFull:'Unduh CV — Bahasa Indonesia',footerText:'Professional operational portfolio.',backTop:'Kembali ke atas',emailMe:'Email saya'
    },
    en: {
      skip:'Skip to main content',navProfile:'Profile',navExperience:'Experience',navExpertise:'Expertise',navEvidence:'Evidence',navContact:'Contact',
      availability:'Open to relevant professional opportunities',heroOverline:'Field operations · livestock systems · Indonesia',heroRole:'Feedlot Operations Supervisor',
      heroIntro:'Leading operations from the field—connecting cattle readiness, feeding discipline, welfare, biosecurity, and team coordination into a consistent standard of execution.',downloadCv:'Download CV',
      proofYears:'Years with PT SDM',proofExposure:'Peak population exposure*',proofGpa:'Animal Science GPA',accuracyNote:'The ±6,000-head figure refers to peak population exposure, not normal daily population.',
      portraitLabel:'Operational profile',assignmentLabel:'Current assignment',assignmentDetail:'Supervisor · Cianjur, West Java',
      proofEyebrow:'Recruiter snapshot',proofTitle:'Professional value understood in 30 seconds.',proofIntro:'Three proof points summarizing operating scale, progression of responsibility, and scientific foundation.',
      proofCard1Value:'1,500 → ±6,000',proofCard1Title:'Operating-scale progression',proofCard1Body:'Progressed from supervising an approximately 1,500-head unit to exposure to a peak population of approximately 6,000 head.',
      proofCard2Title:'Direct field leadership',proofCard2Body:'Involved in unit rhythm, cattle monitoring, feeding routines, handling, welfare, biosecurity, and team coordination.',
      proofCard3Title:'Science-grounded',proofCard3Body:'Brahman Cross carcass research across 210 samples strengthened a data- and production-oriented approach.',
      sectionProfile:'Profile',profileEyebrow:'Practical operator · scientific foundation',profileTitle:'Leadership that shows up in the field—not only in reports.',
      profileLead:'Strong operations are built from details done right—every day.',profileBody:'As a Feedlot Operations Supervisor, I maintain the unit rhythm through cattle-condition observation, feeding discipline, area control, welfare and biosecurity practices, and clear team communication. My Animal Science foundation helps connect field decisions with the broader production context.',
      principle1Title:'Observe precisely',principle1Body:'Reading small changes in cattle, feed, areas, and workflow before they develop into operational risk.',principle2Title:'Act responsibly',principle2Body:'Keeping welfare, safety, biosecurity, and accountability at the foundation of every action.',principle3Title:'Improve continuously',principle3Body:'Maintaining habits of evaluation, rapid correction, and open communication to stabilize unit performance.',
      sectionExperience:'Experience',experienceEyebrow:'Responsibility earned through direct execution',experienceTitle:'Responsibility that grew with operating scale.',experienceAside:'A professional journey shaped by direct involvement, command of the unit rhythm, and steadily increasing operational responsibility.',careerStart:'First feedlot exposure',careerSupervisor:'Started supervisor role',careerScale:'Transitioned to a larger unit',currentTag:'CURRENT',
      role1:'Supervisor · PT Sumber Daya Multikarya · Cianjur',role1Body:'Maintaining operational stability in a feedlot environment with peak population exposure of approximately 6,000 head through cattle monitoring, feeding routines, team coordination, welfare, biosecurity, and SOP consistency.',role1Point1:'Maintaining unit priorities and readiness from daily routines through distribution requirements.',role1Point2:'Supporting early identification of cattle-condition changes and operating constraints.',
      role2:'Supervisor · PT Sumber Daya Multikarya · Banten · ±1,500 head',role2Body:'Supervised feeding, cattle monitoring, sanitation, facility control, handling, records, and compliance with SOPs and animal-welfare standards.',role3:'Operational Manager · Bekasi',role3Body:'Built an operational-leadership foundation through daily coordination, resource allocation, timeline control, and cross-functional collaboration.',role4:'Student Intern · PT Sumber Daya Multikarya',role4Body:'Built a practical feedlot foundation through feed distribution, health observation, sanitation, cattle handling, and industrial work discipline.',
      sectionExpertise:'Expertise',expertiseEyebrow:'Six disciplines · one dependable operation',expertiseTitle:'Competencies that turn observation into operating readiness.',
      expertise1Title:'Daily Operations',expertise1Body:'Work rhythm, unit priorities, area readiness, and SOP consistency from the start to the end of every shift.',outcome1:'Unit stability',expertise2Title:'Feeding & Feed Quality',expertise2Body:'Delivery discipline, allocation awareness, feed-quality observation, and response to intake conditions.',outcome2:'Consistent intake',expertise3Title:'Cattle Monitoring',expertise3Body:'Health indicators, behavior, physical condition, and structured follow-up requirements.',outcome3:'Early detection',expertise4Title:'Animal Welfare',expertise4Body:'Low-stress handling, humane treatment, hygiene, and safe cattle movement.',outcome4:'Responsible handling',expertise5Title:'Biosecurity',expertise5Body:'Movement control, area hygiene, disease-risk prevention, and operating-environment integrity.',outcome5:'Risk control',expertise6Title:'Team Coordination',expertise6Body:'Clear handovers, work allocation, escalation, and accountability across shifts.',outcome6:'Execution clarity',
      flow1:'Observe',flow2:'Prioritize',flow3:'Coordinate',flow4:'Execute',flow5:'Improve',
      sectionEvidence:'Field evidence',evidenceEyebrow:'Work documented where it happens',evidenceTitle:'Selected evidence, with clear context.',evidenceIntro:'A concise record of facilities, direct involvement, grading, and cattle condition.',
      evidence1Title:'Direct involvement',evidence1Body:'Direct presence in cattle routines, condition observation, safety, and field-work discipline.',evidence2Title:'Operational environment',evidence2Body:'Facility context, area hygiene, cattle movement, and unit readiness.',evidence3Title:'Readiness control',evidence3Body:'Assessment and condition classification supporting operating decisions.',evidence4Title:'Market readiness',evidence4Body:'Cattle condition as an outcome of disciplined feeding, care, monitoring, and readiness.',
      videoTitle:'Calf care & responsible handling',videoBody:'A short field fragment showing direct involvement and a calm approach to cattle handling.',videoFallback:'Your browser does not support video playback.',
      sectionEducation:'Education',educationEyebrow:'Science behind field decisions',educationTitle:'A scientific foundation kept close to production reality.',degreeLabel:'Bachelor of Animal Science',degreeBody:'Animal Science · livestock management · beef production · animal health.',researchLabel:'Undergraduate thesis',researchTitle:'Carcass Production of Brahman Cross Steer & Heifer',researchBody:'Analysis of daily weight gain, slaughter weight, carcass weight, carcass percentage, and Income Over Feed Cost across 210 samples.',
      contactEyebrow:'Professional contact',contactTitle:'Let’s discuss the next operating challenge.',contactBody:'Open to recruitment and relevant professional conversations around feedlot operations, livestock supervision, animal welfare, biosecurity, and livestock-industry development.',whatsappText:'Professional inquiry',downloadCvFull:'Download CV — English',footerText:'Professional operational portfolio.',backTop:'Back to top',emailMe:'Email me'
    }
  };

  const $ = (query, root = document) => root.querySelector(query);
  const $$ = (query, root = document) => [...root.querySelectorAll(query)];
  const safeStorage = {
    get(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* Browser storage is optional. */ } }
  };
  const state = { language: safeStorage.get('portfolio-language', 'id'), lastScroll: 0 };

  function applyLanguage(language) {
    if (!copy[language]) language = 'id';
    state.language = language;
    const dictionary = copy[language];
    document.documentElement.lang = language;
    $$('[data-copy]').forEach((node) => {
      const value = dictionary[node.dataset.copy];
      if (value) node.textContent = value;
    });
    $$('[data-language]').forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $$('[data-cv-link]').forEach((link) => {
      link.href = language === 'en' ? 'assets/CV-Pramudya-Duta-English.pdf' : 'assets/CV-Pramudya-Duta-Indonesia.pdf';
    });
    const description = $('meta[name="description"]');
    if (description) description.content = language === 'en'
      ? 'Professional portfolio of Pramudya Duta, Feedlot Operations Supervisor focused on cattle monitoring, feeding discipline, animal welfare, biosecurity, and field leadership.'
      : 'Portfolio profesional Pramudya Duta, Feedlot Operations Supervisor dengan fokus pada cattle monitoring, feeding discipline, animal welfare, biosecurity, dan kepemimpinan operasional lapangan.';
    document.title = 'Pramudya Duta | Feedlot Operations Supervisor';
    safeStorage.set('portfolio-language', language);
  }

  function setupLanguage() {
    $$('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
    applyLanguage(state.language);
  }

  function setupExperienceTenure() {
    const node = $('#experienceYears');
    if (!node) return;
    const now = new Date();
    const elapsedMonths = ((now.getFullYear() - Number(node.dataset.startYear)) * 12) + (now.getMonth() - Number(node.dataset.startMonth));
    node.textContent = `${Math.max(0, Math.floor(elapsedMonths / 12))}+`;
  }

  function setupMenu() {
    const toggle = $('#menuToggle');
    const menu = $('#mobileMenu');
    if (!toggle || !menu) return;
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('menu-open', open);
    });
    $$('a', menu).forEach((link) => link.addEventListener('click', close));
    window.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  }

  function setupScrollUI() {
    const header = $('#siteHeader');
    const progress = $('#scrollProgress');
    const sections = $$('main section[id]');
    const navLinks = $$('.desktop-nav a');
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      progress.style.width = `${Math.min(100, (y / max) * 100)}%`;
      header.classList.toggle('is-scrolled', y > 20);
      header.classList.toggle('is-hidden', y > state.lastScroll && y > 600 && !document.body.classList.contains('menu-open'));
      state.lastScroll = Math.max(0, y);
      let active = '';
      sections.forEach((section) => { if (section.getBoundingClientRect().top <= 180) active = section.id; });
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${active}`;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  function setupReveals() {
    const elements = $$('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .1, rootMargin: '0px 0px -35px' });
    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 55}ms`;
      observer.observe(element);
    });
  }

  function setupLightbox() {
    const lightbox = $('#lightbox');
    const image = $('#lightboxImage');
    const caption = $('#lightboxCaption');
    const closeButton = $('#lightboxClose');
    if (!lightbox || !image || !caption || !closeButton) return;
    let previousFocus = null;
    const pageRegions = [$('#siteHeader'), $('#main'), $('.site-footer'), $('.mobile-cta')].filter(Boolean);
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      pageRegions.forEach((region) => { region.inert = false; });
      image.src = '';
      previousFocus?.focus();
    };
    $$('[data-lightbox]').forEach((button) => button.addEventListener('click', () => {
      previousFocus = button;
      image.src = button.dataset.lightbox;
      image.alt = $('img', button)?.alt || '';
      caption.textContent = copy[state.language][button.dataset.captionKey] || '';
      pageRegions.forEach((region) => { region.inert = true; });
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      closeButton.focus();
    }));
    closeButton.addEventListener('click', close);
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
    lightbox.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') { event.preventDefault(); closeButton.focus(); }
    });
  }

  function setupVideos() {
    const videos = $$('video');
    videos.forEach((video) => video.addEventListener('play', () => videos.forEach((other) => { if (other !== video) other.pause(); })));
  }

  function init() {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
    setupExperienceTenure();
    setupLanguage();
    setupMenu();
    setupScrollUI();
    setupReveals();
    setupLightbox();
    setupVideos();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
