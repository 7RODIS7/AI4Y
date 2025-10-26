/* ==========================================================================
   Animations Module
   ========================================================================== */

const Animations = (() => {
  let observer;
  
  /**
   * Инициализация Intersection Observer для scroll-анимаций
   */
  function init() {
    if (!CONFIG.animations.enabled) return;
    
    // Проверка на prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('Animations disabled: user prefers reduced motion');
      return;
    }
    
    // Создаём Intersection Observer
    observer = new IntersectionObserver(handleIntersection, {
      threshold: CONFIG.animations.threshold,
      rootMargin: CONFIG.animations.rootMargin
    });
    
    // Наблюдаем за элементами, которые нужно анимировать
    const animatedElements = document.querySelectorAll('.card, .case-card, .pricing-card, .section-header');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
  
  /**
   * Обработчик пересечения элементов
   */
  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }
  
  /**
   * Плавная прокрутка к якорю
   */
  function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (!element) return;
    
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  /**
   * Отслеживание глубины скролла для аналитики
   */
  let scrollDepthTracked = {
    '50': false,
    '100': false
  };
  
  function trackScrollDepth() {
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
    
    if (scrollPercentage >= 50 && !scrollDepthTracked['50']) {
      scrollDepthTracked['50'] = true;
      trackEvent(CONFIG.events.SCROLL_50);
    }
    
    if (scrollPercentage >= 95 && !scrollDepthTracked['100']) {
      scrollDepthTracked['100'] = true;
      trackEvent(CONFIG.events.SCROLL_100);
    }
  }
  
  // Debounce функция для оптимизации
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Инициализация отслеживания скролла
  window.addEventListener('scroll', debounce(trackScrollDepth, 200));
  
  return {
    init,
    smoothScrollTo
  };
})();

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  Animations.init();
});

