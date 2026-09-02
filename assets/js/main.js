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
      contactEyebrow:'Professional contact',contactTitle:'Mari bicara tentang tantangan operasional berikutnya.',contactBody:'Terbuka untuk rekrutmen dan diskusi profesional yang relevan dengan feedlot operations, livestock supervision, animal welfare, biosecurity, atau pengembangan industri peternakan.',whatsappText:'Professional inquiry',downloadCvFull:'Unduh CV — Bahasa Indonesia',footerText:'Professional operational portfolio.',backTop:'Kembali ke atas',emailMe:'Email saya',
      navCaseStudy:'Studi Kasus',caseTeaserEyebrow:'Featured operational case study',caseTeaserTitle:'Bagaimana saya menjaga readiness dalam operasi feedlot berskala tinggi.',caseTeaserBody:'Scope tanggung jawab, ritme supervisi, logika keputusan, dan bukti lapangan—disajikan tanpa membuka data perusahaan yang sensitif.',readCaseStudy:'Baca studi kasus',
      caseAvailability:'Studi kasus publik · data sensitif tidak ditampilkan',caseOverline:'Case Study 01 · Feedlot Operations',caseTitle:'Menjaga readiness dalam operasi feedlot berskala tinggi.',caseLead:'Studi kasus non-rahasia mengenai pendekatan supervisi lapangan di Pasir Tengah Feedlot—menghubungkan monitoring ternak, feeding discipline, welfare, biosecurity, dan koordinasi tim menjadi ritme eksekusi yang konsisten.',exploreSystem:'Lihat operating system',backPortfolio:'Kembali ke portofolio',
      caseScopeLabel:'Konteks penugasan',caseScopeValue:'Pasir Tengah Feedlot · Cianjur',casePeriodLabel:'Periode',casePeriodValue:'Jul 2024 — Sekarang',caseScaleLabel:'Skala terverifikasi',caseScaleValue:'Paparan populasi puncak ±6.000 ekor*',caseBoundaryNote:'*Paparan populasi puncak, bukan klaim populasi normal harian atau hasil kinerja.',
      snapshotEyebrow:'Verified scope',snapshotTitle:'Konteks yang dapat dipertanggungjawabkan.',snapshotIntro:'Halaman ini memisahkan fakta pengalaman, representasi cara kerja, dan informasi yang sengaja tidak dipublikasikan.',snapshot1Label:'Peran',snapshot1Value:'Feedlot Operations Supervisor',snapshot2Label:'Lingkungan',snapshot2Value:'Operasi feedlot berskala tinggi',snapshot3Label:'Work streams',snapshot3Value:'6 disiplin operasional inti',snapshot4Label:'Batas bukti',snapshot4Value:'Pengalaman langsung · data publik aman',
      challengeEyebrow:'The operating challenge',challengeTitle:'Tantangannya bukan satu insiden. Tantangannya adalah konsistensi setiap hari.',challengeLead:'Dalam operasi berskala tinggi, penyimpangan kecil dapat berkembang cepat. Peran supervisi adalah menjaga visibilitas, prioritas, dan koordinasi agar unit tetap siap tanpa mengorbankan welfare, biosecurity, atau disiplin SOP.',tension1Title:'Skala vs visibilitas',tension1Body:'Semakin besar konteks operasi, semakin penting observasi terstruktur dan jalur eskalasi yang jelas.',tension2Title:'Rutinitas vs variasi',tension2Body:'Feeding, kondisi ternak, fasilitas, dan ritme tim menuntut standar tetap dengan respons yang adaptif.',tension3Title:'Kecepatan vs tanggung jawab',tension3Body:'Tindakan cepat tetap harus menjaga keselamatan, welfare, biosecurity, dan akuntabilitas keputusan.',
      systemEyebrow:'Public operating model',systemTitle:'Enam tahap dari sinyal lapangan menuju readiness.',systemIntro:'Ini adalah representasi publik dari pendekatan supervisi saya—bukan salinan SOP internal perusahaan.',caseStep1Title:'Observe',caseStep1Body:'Membaca kondisi ternak, perilaku, intake signal, area, dan ritme kerja sebelum menentukan tindakan.',caseStep2Title:'Prioritize',caseStep2Body:'Membedakan hal yang mendesak, berdampak pada welfare, atau berisiko mengganggu kontinuitas unit.',caseStep3Title:'Coordinate',caseStep3Body:'Menyelaraskan penanggung jawab, handover, kebutuhan lintas fungsi, dan jalur eskalasi.',caseStep4Title:'Execute',caseStep4Body:'Menjalankan feeding, monitoring, sanitation, handling, dan kesiapan fasilitas sesuai standar.',caseStep5Title:'Verify',caseStep5Body:'Mengecek ulang respons ternak, kondisi area, penyelesaian tugas, serta isu yang masih terbuka.',caseStep6Title:'Improve',caseStep6Body:'Membawa temuan ke evaluasi, koreksi cepat, dan pembelajaran bersama untuk menjaga stabilitas.',
      cadenceEyebrow:'Daily operating cadence',cadenceTitle:'Ritme supervisi yang menjaga konteks tetap terbaca.',cadenceIntro:'Urutan ini menunjukkan fokus keputusan sepanjang siklus kerja, tanpa mempublikasikan jadwal atau parameter internal.',cadence1Title:'Readiness awal',cadence1Body:'Status area, instruksi, fasilitas, tenaga kerja, serta isu terbuka dari handover.',cadence2Title:'Feeding execution',cadence2Body:'Kesiapan delivery, alokasi, kualitas yang terlihat, dan sinyal konsumsi yang memerlukan perhatian.',cadence3Title:'Condition scan',cadence3Body:'Observasi kesehatan, perilaku, kondisi fisik, dan kebutuhan tindak lanjut yang terstruktur.',cadence4Title:'Controlled movement',cadence4Body:'Handling, sanitasi, facility control, welfare, dan biosecurity selama aktivitas lapangan.',cadence5Title:'Close & handover',cadence5Body:'Status akhir, pengecualian, eskalasi, serta informasi yang harus diteruskan ke ritme berikutnya.',
      decisionEyebrow:'Decision logic',decisionTitle:'Satu sinyal tidak langsung menjadi kesimpulan.',decisionIntro:'Keputusan yang bertanggung jawab membutuhkan pemeriksaan konteks dan verifikasi ulang setelah tindakan.',caseFlow1:'Signal',caseFlow2:'Check',caseFlow3:'Classify risk',caseFlow4:'Coordinate',caseFlow5:'Act',caseFlow6:'Re-read',
      caseEvidenceEyebrow:'Selected field evidence',caseEvidenceTitle:'Bukti yang mendukung konteks, bukan menggantikan data.',caseEvidenceIntro:'Dokumentasi terpilih menunjukkan keterlibatan lapangan, lingkungan operasi, dan aktivitas readiness control.',caseEvidence1Title:'Direct field involvement',caseEvidence1Body:'Keterlibatan langsung dalam observasi kondisi, rutinitas ternak, dan disiplin kerja lapangan.',caseEvidence2Title:'Facility readiness',caseEvidence2Body:'Konteks fasilitas, kebersihan area, pergerakan ternak, dan kesiapan lingkungan operasi.',caseEvidence3Title:'Assessment & grading',caseEvidence3Body:'Observasi dan klasifikasi kondisi sebagai bagian dari kesiapan keputusan operasional.',
      capabilityEyebrow:'What this demonstrates',capabilityTitle:'Kompetensi yang dapat dinilai tanpa klaim berlebihan.',capabilityIntro:'Studi kasus ini menunjukkan luas tanggung jawab dan cara berpikir. Hasil kuantitatif baru akan ditambahkan jika tersedia data yang telah diizinkan.',capability1Title:'Scale progression',capability1Body:'Progres dari unit sekitar 1.500 ekor menuju penugasan dengan paparan populasi puncak sekitar 6.000 ekor.',capability2Title:'Integrated operations',capability2Body:'Menghubungkan cattle monitoring, feeding, facility readiness, welfare, biosecurity, dan SOP.',capability3Title:'Field leadership',capability3Body:'Menjaga prioritas, koordinasi, handover, eskalasi, dan akuntabilitas dalam ritme kerja lapangan.',capability4Title:'Scientific foundation',capability4Body:'Fondasi Animal Science dan riset 210 sampel mendukung pendekatan yang dekat dengan data dan produksi.',caseBoundaryTitle:'Batas kerahasiaan',caseBoundaryBody:'Halaman ini tidak memuat formula pakan, catatan mortalitas atau treatment, performa finansial, target internal, identitas personel, jadwal logistik, maupun SOP proprietary. Tidak ada klaim peningkatan KPI tanpa bukti yang diizinkan.',caseNextEyebrow:'Professional discussion',caseNextTitle:'Mari diskusikan tantangan operasional berikutnya.',caseNextBody:'Saya terbuka untuk percakapan profesional seputar feedlot operations, livestock supervision, animal welfare, biosecurity, dan pengembangan sistem peternakan.',caseNextLink:'Hubungi saya',caseFooterText:'Operational case study · public-safe edition.'
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
      contactEyebrow:'Professional contact',contactTitle:'Let’s discuss the next operating challenge.',contactBody:'Open to recruitment and relevant professional conversations around feedlot operations, livestock supervision, animal welfare, biosecurity, and livestock-industry development.',whatsappText:'Professional inquiry',downloadCvFull:'Download CV — English',footerText:'Professional operational portfolio.',backTop:'Back to top',emailMe:'Email me',
      navCaseStudy:'Case Study',caseTeaserEyebrow:'Featured operational case study',caseTeaserTitle:'How I maintain readiness across a high-volume feedlot operation.',caseTeaserBody:'Responsibility scope, supervisory cadence, decision logic, and field evidence—presented without disclosing sensitive company information.',readCaseStudy:'Read the case study',
      caseAvailability:'Public case study · sensitive data withheld',caseOverline:'Case Study 01 · Feedlot Operations',caseTitle:'Maintaining readiness across a high-volume feedlot operation.',caseLead:'A non-confidential case study of my field-supervision approach at Pasir Tengah Feedlot—connecting cattle monitoring, feeding discipline, welfare, biosecurity, and team coordination into a consistent execution rhythm.',exploreSystem:'Explore the operating system',backPortfolio:'Back to portfolio',
      caseScopeLabel:'Assignment context',caseScopeValue:'Pasir Tengah Feedlot · Cianjur',casePeriodLabel:'Period',casePeriodValue:'Jul 2024 — Present',caseScaleLabel:'Verified scale',caseScaleValue:'Peak population exposure of approximately 6,000 head*',caseBoundaryNote:'*Peak population exposure, not a claim of normal daily population or performance outcome.',
      snapshotEyebrow:'Verified scope',snapshotTitle:'Context that can be defended.',snapshotIntro:'This page separates experience facts, a public representation of working method, and information intentionally withheld.',snapshot1Label:'Role',snapshot1Value:'Feedlot Operations Supervisor',snapshot2Label:'Environment',snapshot2Value:'High-volume feedlot operation',snapshot3Label:'Work streams',snapshot3Value:'6 core operating disciplines',snapshot4Label:'Evidence boundary',snapshot4Value:'Direct experience · public-safe data',
      challengeEyebrow:'The operating challenge',challengeTitle:'The challenge is not one incident. It is consistency every day.',challengeLead:'In a high-volume operation, small deviations can develop quickly. Supervision must preserve visibility, priorities, and coordination so the unit remains ready without compromising welfare, biosecurity, or SOP discipline.',tension1Title:'Scale vs visibility',tension1Body:'The larger the operating context, the more important structured observation and clear escalation paths become.',tension2Title:'Routine vs variability',tension2Body:'Feeding, cattle condition, facilities, and team rhythm require stable standards with adaptive responses.',tension3Title:'Speed vs responsibility',tension3Body:'Rapid action must still preserve safety, welfare, biosecurity, and decision accountability.',
      systemEyebrow:'Public operating model',systemTitle:'Six stages from field signal to readiness.',systemIntro:'This is a public representation of my supervisory approach—not a copy of the company’s internal SOP.',caseStep1Title:'Observe',caseStep1Body:'Read cattle condition, behavior, intake signals, areas, and work rhythm before determining action.',caseStep2Title:'Prioritize',caseStep2Body:'Separate urgent issues, welfare impacts, and risks to operating continuity.',caseStep3Title:'Coordinate',caseStep3Body:'Align ownership, handovers, cross-functional needs, and escalation paths.',caseStep4Title:'Execute',caseStep4Body:'Carry out feeding, monitoring, sanitation, handling, and facility readiness to standard.',caseStep5Title:'Verify',caseStep5Body:'Recheck cattle response, area condition, task completion, and unresolved issues.',caseStep6Title:'Improve',caseStep6Body:'Turn observations into evaluation, rapid correction, and shared learning to support stability.',
      cadenceEyebrow:'Daily operating cadence',cadenceTitle:'A supervisory rhythm that keeps context visible.',cadenceIntro:'This sequence shows decision focus across the work cycle without publishing internal schedules or parameters.',cadence1Title:'Initial readiness',cadence1Body:'Area status, instructions, facilities, workforce, and open issues carried through handover.',cadence2Title:'Feeding execution',cadence2Body:'Delivery readiness, allocation, visible quality, and intake signals requiring attention.',cadence3Title:'Condition scan',cadence3Body:'Structured observation of health, behavior, physical condition, and follow-up needs.',cadence4Title:'Controlled movement',cadence4Body:'Handling, sanitation, facility control, welfare, and biosecurity during field activity.',cadence5Title:'Close & handover',cadence5Body:'Final status, exceptions, escalation, and information required by the next operating rhythm.',
      decisionEyebrow:'Decision logic',decisionTitle:'One signal does not immediately become a conclusion.',decisionIntro:'Responsible decisions require context checks and verification after action.',caseFlow1:'Signal',caseFlow2:'Check',caseFlow3:'Classify risk',caseFlow4:'Coordinate',caseFlow5:'Act',caseFlow6:'Re-read',
      caseEvidenceEyebrow:'Selected field evidence',caseEvidenceTitle:'Evidence that supports context—not replaces data.',caseEvidenceIntro:'Selected documentation shows field involvement, the operating environment, and readiness-control activity.',caseEvidence1Title:'Direct field involvement',caseEvidence1Body:'Direct involvement in condition observation, cattle routines, and field-work discipline.',caseEvidence2Title:'Facility readiness',caseEvidence2Body:'Facility context, area hygiene, cattle movement, and operating-environment readiness.',caseEvidence3Title:'Assessment & grading',caseEvidence3Body:'Condition observation and classification as part of operational decision readiness.',
      capabilityEyebrow:'What this demonstrates',capabilityTitle:'Capabilities that can be assessed without inflated claims.',capabilityIntro:'This case study shows responsibility breadth and decision approach. Quantified outcomes will be added only when authorized evidence is available.',capability1Title:'Scale progression',capability1Body:'Progressed from an approximately 1,500-head unit to an assignment with peak population exposure of approximately 6,000 head.',capability2Title:'Integrated operations',capability2Body:'Connecting cattle monitoring, feeding, facility readiness, welfare, biosecurity, and SOPs.',capability3Title:'Field leadership',capability3Body:'Maintaining priorities, coordination, handovers, escalation, and accountability in field-work rhythm.',capability4Title:'Scientific foundation',capability4Body:'An Animal Science foundation and 210-sample research support a data- and production-aware approach.',caseBoundaryTitle:'Confidentiality boundary',caseBoundaryBody:'This page does not publish feed formulations, mortality or treatment records, financial performance, internal targets, personnel identities, logistics schedules, or proprietary SOPs. No KPI improvement is claimed without authorized evidence.',caseNextEyebrow:'Professional discussion',caseNextTitle:'Let’s discuss the next operating challenge.',caseNextBody:'I am open to professional conversations around feedlot operations, livestock supervision, animal welfare, biosecurity, and livestock-system development.',caseNextLink:'Contact me',caseFooterText:'Operational case study · public-safe edition.'
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
    const assetBase = document.documentElement.dataset.assetBase || '';
    $$('[data-cv-link]').forEach((link) => {
      link.href = language === 'en' ? `${assetBase}assets/CV-Pramudya-Duta-English.pdf` : `${assetBase}assets/CV-Pramudya-Duta-Indonesia.pdf`;
    });
    const description = $('meta[name="description"]');
    if (description) description.content = language === 'en'
      ? (description.dataset.descriptionEn || 'Professional portfolio of Pramudya Duta, Feedlot Operations Supervisor focused on cattle monitoring, feeding discipline, animal welfare, biosecurity, and field leadership.')
      : (description.dataset.descriptionId || 'Portfolio profesional Pramudya Duta, Feedlot Operations Supervisor dengan fokus pada cattle monitoring, feeding discipline, animal welfare, biosecurity, dan kepemimpinan operasional lapangan.');
    document.title = language === 'en'
      ? (document.documentElement.dataset.titleEn || 'Pramudya Duta | Feedlot Operations Supervisor')
      : (document.documentElement.dataset.titleId || 'Pramudya Duta | Feedlot Operations Supervisor');
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
        if (link.dataset.staticCurrent === 'true') return;
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
