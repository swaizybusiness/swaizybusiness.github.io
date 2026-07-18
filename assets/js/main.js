(() => {
  'use strict';

  const copy = {
    id: {
      skip: 'Lewati ke konten utama', navProfile: 'Profil', navExpertise: 'Keahlian', navExperience: 'Pengalaman', navEvidence: 'Evidence', navContact: 'Hubungi',
      availability: 'Terbuka untuk peluang profesional yang relevan', heroOverline: 'Field leadership · livestock operations · Indonesia', heroRole: 'Feedlot Operations Supervisor',
      heroIntro: 'Memimpin dari lapangan—menyatukan ketepatan operasional, kesiapan ternak, welfare, biosecurity, dan koordinasi tim menjadi eksekusi yang konsisten.',
      downloadCv: 'Unduh CV', seeFieldwork: 'Lihat pekerjaan lapangan', proofYears: 'Tahun eksekusi lapangan', proofExposure: 'Paparan populasi puncak*', proofGpa: 'IPK Animal Science', portraitCaption: 'On-site leadership',
      accuracyNote: 'Angka ±6.000 ekor merujuk pada paparan terhadap populasi puncak feedlot, bukan klaim populasi normal harian.',
      sectionProfile: 'Profil', profileEyebrow: 'Operator praktis dengan fondasi ilmiah', profileTitle: 'Kepemimpinan yang hadir di lapangan, bukan hanya di laporan.',
      profileLead: 'Saya percaya operasi yang kuat dibangun dari detail yang dilakukan benar—setiap hari.',
      profileBody: 'Sebagai Feedlot Operations Supervisor, saya mengawal ritme unit melalui monitoring kondisi ternak, feeding routine, kontrol area, penerapan welfare dan biosecurity, serta koordinasi tim yang jelas. Fondasi Animal Science membantu saya menghubungkan keputusan lapangan dengan konteks produksi yang lebih luas.',
      principle1Title: 'Observasi presisi', principle1Body: 'Membaca perubahan kecil pada ternak, area, pakan, dan ritme kerja sebelum menjadi masalah besar.',
      principle2Title: 'Tindakan bertanggung jawab', principle2Body: 'Menempatkan welfare, keselamatan, biosecurity, dan akuntabilitas sebagai dasar setiap tindakan.',
      principle3Title: 'Perbaikan berkelanjutan', principle3Body: 'Membangun kebiasaan evaluasi, koreksi cepat, dan komunikasi terbuka untuk menjaga stabilitas unit.',
      sectionExpertise: 'Sistem operasi', expertiseEyebrow: 'Enam disiplin, satu operasi yang dapat diandalkan', expertiseTitle: 'Ruang kerja yang mengubah observasi menjadi kesiapan operasional.',
      expertise1Title: 'Operasional Harian', expertise1Body: 'Mengawal ritme kerja, prioritas unit, kesiapan area, dan konsistensi SOP dari awal hingga akhir shift.',
      expertise2Title: 'Feeding & Kualitas Pakan', expertise2Body: 'Menjaga disiplin delivery, alokasi, observasi kualitas pakan, dan respons terhadap kondisi konsumsi.',
      expertise3Title: 'Monitoring Ternak', expertise3Body: 'Mendeteksi indikator kesehatan, perilaku, kondisi fisik, dan kebutuhan tindak lanjut secara terstruktur.',
      expertise4Title: 'Animal Welfare', expertise4Body: 'Mengutamakan low-stress handling, perlakuan humanis, kebersihan, dan alur ternak yang aman.',
      expertise5Title: 'Biosecurity', expertise5Body: 'Menjaga movement control, kebersihan area, pencegahan risiko penyakit, dan integritas lingkungan kerja.',
      expertise6Title: 'Koordinasi Tim', expertise6Body: 'Memastikan handover, pembagian kerja, eskalasi, dan akuntabilitas berjalan jelas antar-shift.',
      flow1: 'Observasi', flow2: 'Prioritaskan', flow3: 'Koordinasikan', flow4: 'Eksekusi', flow5: 'Perbaiki',
      sectionExperience: 'Pengalaman', experienceEyebrow: 'Kemajuan yang dibangun melalui tanggung jawab langsung', experienceTitle: 'Dari fondasi akademik menuju kepemimpinan operasional.',
      experienceAside: 'Perjalanan karier yang berkembang melalui keterlibatan langsung, penguasaan ritme unit, dan tanggung jawab yang terus bertambah.', careerStart: 'Awal exposure feedlot', currentLevel: 'Supervisor · posisi saat ini', currentTag: 'SAAT INI',
      role1: 'Supervisor · PT Sumber Daya Multikarya · Cianjur', role1Body: 'Menjaga stabilitas operasional pada lingkungan feedlot dengan exposure terhadap populasi puncak ±6.000 ekor melalui monitoring ternak, feeding routine, koordinasi tim, welfare, biosecurity, dan konsistensi eksekusi lapangan.',
      role2: 'Supervisor · PT Sumber Daya Multikarya · Banten · ±1.500 ekor', role2Body: 'Mengawasi aktivitas harian meliputi feeding routine, monitoring ternak, pencatatan data, sanitasi, kontrol fasilitas, handling, dan penerapan SOP.',
      role3: 'Student Intern · PT Sumber Daya Multikarya · Banten', role3Body: 'Membangun fondasi melalui rutinitas feedlot, distribusi pakan, observasi kesehatan, sanitasi, handling ternak, dan disiplin operasional.',
      sectionEvidence: 'Bukti lapangan', evidenceEyebrow: 'Pekerjaan didokumentasikan di tempat terjadinya', evidenceTitle: 'Bukti lapangan, bukan sekadar pernyataan.',
      evidenceIntro: 'Dokumentasi yang menunjukkan konteks kerja nyata—fasilitas, cattle readiness, grading, handling, care, dan fondasi akademik.', filterAll: 'Semua', filterField: 'Lapangan', filterHandling: 'Handling', filterAcademic: 'Akademik', viewPhoto: 'Lihat foto',
      evidence1Title: 'Lingkungan Operasional', evidence1Body: 'Konteks fasilitas, kebersihan area, alur ternak, dan kesiapan unit.', evidence2Title: 'Keterlibatan Langsung', evidence2Body: 'Keterlibatan langsung dalam supervisi, safety, dan disiplin kerja.',
      evidence3Title: 'Grading Ternak', evidence3Body: 'Assessment dan klasifikasi untuk mendukung readiness control.', evidence4Title: 'Operasional Malam', evidence4Body: 'Kesiapan, koordinasi, dan handling di kondisi operasional malam.',
      evidence5Title: 'Kesiapan Pasar', evidence5Body: 'Kondisi ternak dan konteks kesiapan sebagai hasil dari disiplin pengelolaan.', evidence6Title: 'Fondasi Ilmiah', evidence6Body: 'Fondasi Animal Science dari Universitas Brawijaya.',
      videoIntro: 'Tiga fragmen kerja: receiving, market readiness, dan calf care.', video1: 'Proses unloading', video2: 'Ternak siap pasar', video3: 'Calf care & handling',
      sectionEducation: 'Pendidikan', educationEyebrow: 'Ilmu di balik keputusan lapangan', educationTitle: 'Fondasi akademik yang tetap dekat dengan realitas produksi.', degreeTitle: 'Sarjana Peternakan', degreeBody: 'Animal Science · Manajemen peternakan · Produksi sapi potong · Kesehatan ternak',
      researchTitle: 'Produksi Karkas Brahman Cross Steer & Heifer', researchBody: 'Analisis daily weight gain, slaughter weight, carcass weight, persentase karkas, dan Income Over Feed Cost pada 210 sampel.',
      quickReview: 'Tinjauan 30 detik', recruiterEyebrow: 'Jika hanya mengingat tiga hal', recruiterTitle: 'Teruji di lapangan. Berbasis ilmu. Siap berkontribusi.',
      review1: 'Pengalaman memimpin rutinitas operasional feedlot dan koordinasi tim lapangan.', review2: 'Paparan pada skala puncak ±6.000 ekor dengan fokus pada readiness, welfare, dan biosecurity.', review3: 'Fondasi Animal Science yang mendukung keputusan praktis dan perbaikan berkelanjutan.',
      sectionContact: 'Kontak', contactEyebrow: 'Mari membangun operasi yang dapat diandalkan', contactTitle: 'Mari bicara tentang tantangan lapangan berikutnya.',
      contactBody: 'Terbuka untuk peluang profesional, rekrutmen, dan diskusi yang relevan dengan feedlot operations, livestock supervision, animal welfare, biosecurity, atau pengembangan industri peternakan.',
      whatsappText: 'Professional inquiry', downloadCvFull: 'Unduh CV — Bahasa Indonesia', backTop: 'Kembali ke atas', emailMe: 'Email saya'
    },
    en: {
      skip: 'Skip to main content', navProfile: 'Profile', navExpertise: 'Expertise', navExperience: 'Experience', navEvidence: 'Evidence', navContact: 'Contact',
      availability: 'Open to relevant professional opportunities', heroOverline: 'Field leadership · livestock operations · Indonesia', heroRole: 'Feedlot Operations Supervisor',
      heroIntro: 'Leading from the field—bringing operational precision, cattle readiness, welfare, biosecurity, and team coordination into one consistent standard of execution.',
      downloadCv: 'Download CV', seeFieldwork: 'Explore fieldwork', proofYears: 'Years of field execution', proofExposure: 'Peak population exposure*', proofGpa: 'Animal Science GPA', portraitCaption: 'On-site leadership',
      accuracyNote: 'The ±6,000 head figure refers to exposure to the feedlot’s peak population, not a claim of its normal daily population.',
      sectionProfile: 'Profile', profileEyebrow: 'A practical operator with a scientific foundation', profileTitle: 'Leadership that shows up in the field—not only in reports.',
      profileLead: 'I believe strong operations are built from details done right—every day.',
      profileBody: 'As a Feedlot Operations Supervisor, I maintain the unit’s rhythm through cattle monitoring, feeding routines, area control, welfare and biosecurity practices, and clear team coordination. My Animal Science foundation helps connect field decisions with the broader production context.',
      principle1Title: 'Observe precisely', principle1Body: 'Reading small changes in cattle, areas, feed, and workflow before they become larger problems.',
      principle2Title: 'Act responsibly', principle2Body: 'Keeping welfare, safety, biosecurity, and accountability at the foundation of every action.',
      principle3Title: 'Improve continuously', principle3Body: 'Building habits of evaluation, rapid correction, and open communication to maintain unit stability.',
      sectionExpertise: 'Operating system', expertiseEyebrow: 'Six disciplines, one dependable operation', expertiseTitle: 'The operating scope that turns observation into readiness.',
      expertise1Title: 'Daily Operations', expertise1Body: 'Maintaining work rhythm, unit priorities, area readiness, and SOP consistency from the start to the end of every shift.',
      expertise2Title: 'Feeding & Feed Quality', expertise2Body: 'Maintaining delivery discipline, allocation awareness, feed quality observation, and timely responses to intake conditions.',
      expertise3Title: 'Cattle Monitoring', expertise3Body: 'Detecting health indicators, behavior, physical condition, and follow-up needs through a structured approach.',
      expertise4Title: 'Animal Welfare', expertise4Body: 'Prioritizing low-stress handling, humane treatment, hygiene, and safe cattle movement.',
      expertise5Title: 'Biosecurity', expertise5Body: 'Maintaining movement control, area cleanliness, disease-risk prevention, and operational environment integrity.',
      expertise6Title: 'Team Coordination', expertise6Body: 'Keeping handovers, work allocation, escalation, and accountability clear across shifts.',
      flow1: 'Observe', flow2: 'Prioritize', flow3: 'Coordinate', flow4: 'Execute', flow5: 'Improve',
      sectionExperience: 'Experience', experienceEyebrow: 'Progress built through direct responsibility', experienceTitle: 'From academic foundation to operational leadership.',
      experienceAside: 'A career journey shaped by direct involvement, command of the unit rhythm, and steadily increasing responsibility.', careerStart: 'First feedlot exposure', currentLevel: 'Supervisor · current role', currentTag: 'CURRENT',
      role1: 'Supervisor · PT Sumber Daya Multikarya · Cianjur', role1Body: 'Maintaining operational stability in a feedlot environment with exposure to a peak population of approximately 6,000 head through cattle monitoring, feeding routines, team coordination, welfare, biosecurity, and consistent field execution.',
      role2: 'Supervisor · PT Sumber Daya Multikarya · Banten · ±1,500 head', role2Body: 'Supervised daily activities covering feeding routines, cattle monitoring, records, sanitation, facility control, handling, and SOP implementation.',
      role3: 'Student Intern · PT Sumber Daya Multikarya · Banten', role3Body: 'Built a practical foundation through feedlot routines, feed distribution, health observation, sanitation, cattle handling, and operational discipline.',
      sectionEvidence: 'Field evidence', evidenceEyebrow: 'Work documented where it happens', evidenceTitle: 'Field evidence—not just a statement.',
      evidenceIntro: 'Documentation showing real operating contexts—facilities, cattle readiness, grading, handling, care, and academic foundations.', filterAll: 'All', filterField: 'Field', filterHandling: 'Handling', filterAcademic: 'Academic', viewPhoto: 'View photo',
      evidence1Title: 'Operational Environment', evidence1Body: 'Facility context, area hygiene, cattle movement, and unit readiness.', evidence2Title: 'Direct Involvement', evidence2Body: 'Direct involvement in supervision, safety, and workplace discipline.',
      evidence3Title: 'Cattle Grading', evidence3Body: 'Assessment and classification supporting readiness control.', evidence4Title: 'Night Operations', evidence4Body: 'Readiness, coordination, and handling under real night operating conditions.',
      evidence5Title: 'Market Readiness', evidence5Body: 'Cattle condition and readiness as outcomes of disciplined management.', evidence6Title: 'Scientific Foundation', evidence6Body: 'Animal Science foundation from Universitas Brawijaya.',
      videoIntro: 'Three field fragments: receiving, market readiness, and calf care.', video1: 'Unloading process', video2: 'Market-ready cattle', video3: 'Calf care & handling',
      sectionEducation: 'Education', educationEyebrow: 'Science behind the field decisions', educationTitle: 'An academic foundation kept close to production reality.', degreeTitle: 'Bachelor of Animal Science', degreeBody: 'Animal Science · Livestock Management · Beef Production · Animal Health',
      researchTitle: 'Carcass Production of Brahman Cross Steer & Heifer', researchBody: 'Analysis of daily weight gain, slaughter weight, carcass weight, carcass percentage, and Income Over Feed Cost across 210 samples.',
      quickReview: '30-second review', recruiterEyebrow: 'If you only remember three things', recruiterTitle: 'Field-tested. Science-grounded. Ready to contribute.',
      review1: 'Experience leading feedlot operating routines and field-team coordination.', review2: 'Exposure to a peak scale of approximately 6,000 head with focus on readiness, welfare, and biosecurity.', review3: 'An Animal Science foundation supporting practical decisions and continuous improvement.',
      sectionContact: 'Contact', contactEyebrow: 'Let’s build dependable operations', contactTitle: 'Let’s talk about the next field challenge.',
      contactBody: 'Open to professional opportunities, recruitment, and relevant conversations around feedlot operations, livestock supervision, animal welfare, biosecurity, and livestock-industry development.',
      whatsappText: 'Professional inquiry', downloadCvFull: 'Download CV — English', backTop: 'Back to top', emailMe: 'Email me'
    }
  };

  const state = { language: localStorage.getItem('portfolio-language') || 'id', lastScroll: 0 };
  const select = (query, root = document) => root.querySelector(query);
  const selectAll = (query, root = document) => [...root.querySelectorAll(query)];

  function applyLanguage(language) {
    state.language = language;
    const dictionary = copy[language];
    document.documentElement.lang = language;
    selectAll('[data-copy]').forEach((node) => {
      const value = dictionary[node.dataset.copy];
      if (value) node.textContent = value;
    });
    selectAll('[data-language]').forEach((button) => button.classList.toggle('is-active', button.dataset.language === language));
    selectAll('[data-cv-link]').forEach((link) => {
      link.href = language === 'en' ? 'assets/CV-Pramudya-Duta-English.pdf' : 'assets/CV-Pramudya-Duta-Indonesia.pdf';
    });
    document.title = language === 'en'
      ? 'Pramudya Duta — Feedlot Operations Supervisor'
      : 'Pramudya Duta — Feedlot Operations Supervisor';
    localStorage.setItem('portfolio-language', language);
  }

  function setupLanguage() {
    selectAll('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
    applyLanguage(state.language);
  }

  function setupMenu() {
    const toggle = select('#menuToggle');
    const menu = select('#mobileMenu');
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
    selectAll('a', menu).forEach((link) => link.addEventListener('click', close));
    window.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  }

  function setupScrollUI() {
    const header = select('#siteHeader');
    const progress = select('#scrollProgress');
    const sections = selectAll('main section[id]');
    const navLinks = selectAll('.desktop-nav a');
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      progress.style.width = `${Math.min(100, (y / max) * 100)}%`;
      header.classList.toggle('is-scrolled', y > 20);
      header.classList.toggle('is-hidden', y > state.lastScroll && y > 500 && !document.body.classList.contains('menu-open'));
      state.lastScroll = Math.max(0, y);

      let active = '';
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 180) active = section.id;
      });
      navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${active}`));
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  function setupReveals() {
    const elements = selectAll('.reveal');
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
    }, { threshold: .12, rootMargin: '0px 0px -50px' });
    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
      observer.observe(element);
    });
  }

  function setupParallax() {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    selectAll('[data-parallax-root]').forEach((root) => {
      root.addEventListener('pointermove', (event) => {
        const bounds = root.getBoundingClientRect();
        const x = event.clientX - bounds.left - bounds.width / 2;
        const y = event.clientY - bounds.top - bounds.height / 2;
        selectAll('[data-parallax]', root).forEach((element) => {
          const depth = Number(element.dataset.parallax || 0);
          element.style.transform = `translate3d(${(x * depth).toFixed(1)}px, ${(y * depth).toFixed(1)}px, 0)`;
        });
      });
      root.addEventListener('pointerleave', () => selectAll('[data-parallax]', root).forEach((element) => { element.style.transform = ''; }));
    });
  }

  function setupFilters() {
    const cards = selectAll('.archive-card');
    selectAll('.filter-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        selectAll('.filter-btn').forEach((item) => item.classList.toggle('is-active', item === button));
        cards.forEach((card) => {
          const visible = filter === 'all' || card.dataset.category.split(' ').includes(filter);
          card.classList.toggle('is-hidden', !visible);
        });
      });
    });
  }

  function setupLightbox() {
    const lightbox = select('#lightbox');
    const image = select('#lightboxImage');
    const caption = select('#lightboxCaption');
    const closeButton = select('#lightboxClose');
    if (!lightbox || !image || !caption || !closeButton) return;
    let previousFocus = null;
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      image.src = '';
      previousFocus?.focus();
    };
    selectAll('[data-lightbox]').forEach((button) => {
      button.addEventListener('click', () => {
        previousFocus = button;
        image.src = button.dataset.lightbox;
        image.alt = select('img', button)?.alt || '';
        caption.textContent = copy[state.language][button.dataset.captionKey] || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        closeButton.focus();
      });
    });
    closeButton.addEventListener('click', close);
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
    window.addEventListener('keydown', (event) => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close(); });
  }

  function setupVideos() {
    const videos = selectAll('video');
    videos.forEach((video) => video.addEventListener('play', () => videos.forEach((other) => { if (other !== video) other.pause(); })));
  }

  function init() {
    select('#year').textContent = new Date().getFullYear();
    setupLanguage();
    setupMenu();
    setupScrollUI();
    setupReveals();
    setupParallax();
    setupFilters();
    setupLightbox();
    setupVideos();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
