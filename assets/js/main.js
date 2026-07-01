(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const removeAwkwardLayer = () => {
    $$('.future-signature-section, .signature-section').forEach((section) => section.remove());

    const deckKicker = $('.deck-kicker');
    const deckTitle = $('.deck-title');
    const deckLead = $('.deck-lead');

    if (deckKicker) deckKicker.textContent = 'Executive Operating Overview';
    if (deckTitle) deckTitle.textContent = 'A concise profile of field execution capacity.';
    if (deckLead) {
      deckLead.textContent = 'Ringkasan premium untuk membantu viewer memahami peran, fokus kerja, skala exposure, dan kesiapan profesional secara cepat tanpa terasa berlebihan.';
    }
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

  const setupLanguageButtons = () => {
    $$('.lang-btn').forEach((button) => {
      button.addEventListener('click', () => {
        $$('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === button.dataset.lang));
      });
    });
  };

  const init = () => {
    removeAwkwardLayer();
    setupMenu();
    setupReveal();
    setupCounters();
    setupSlider();
    setupEvidence();
    setupLightbox();
    setupNavState();
    setupLanguageButtons();

    const year = $('#siteYear');
    if (year) year.textContent = String(new Date().getFullYear());
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
