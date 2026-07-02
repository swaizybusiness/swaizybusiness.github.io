(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);

  const injectStyles = () => {
    if ($('#stable-motion-styles')) return;
    const style = document.createElement('style');
    style.id = 'stable-motion-styles';
    style.textContent = `
      .scroll-progress-bar{position:fixed;top:0;left:0;height:3px;width:0;z-index:99999;background:linear-gradient(90deg,#8cac58,#ffe7ad,#b1dc74);box-shadow:0 0 18px rgba(177,220,116,.45)}
      .btn,.contact-item,.filter-btn,.slide-btn{transition:transform .22s cubic-bezier(.2,.8,.2,1),box-shadow .22s,border-color .22s,background .22s}
      .btn:hover,.contact-item:hover,.filter-btn:hover,.slide-btn:hover{transform:translateY(-2px)}
      .quick-card,.scope-card{backdrop-filter:blur(14px)}
      .timeline-card{transition:border-color .25s ease,box-shadow .25s ease}
      .timeline-card:hover{border-color:rgba(177,220,116,.24)!important;box-shadow:0 22px 70px rgba(0,0,0,.22)!important}
    `;
    document.head.appendChild(style);
  };

  const addScrollProgress = () => {
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
  };

  const init = () => {
    injectStyles();
    addScrollProgress();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
