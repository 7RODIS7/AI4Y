/* ==========================================================================
   Main JavaScript
   ========================================================================== */

/**
 * Глобальная функция для трекинга событий
 */
function trackEvent(eventName, eventData = {}) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
  
  // Yandex Metrica
  if (typeof ym !== 'undefined') {
    ym(CONFIG.analytics.yandexMetrica, 'reachGoal', eventName, eventData);
  }
  
  // Консольный лог для разработки
  console.log('Event tracked:', eventName, eventData);
}

/**
 * Главный класс приложения
 */
class App {
  constructor() {
    this.header = document.querySelector('.header');
    this.mobileNav = document.getElementById('mobileNav');
    this.menuToggle = document.querySelector('[data-action="toggle-menu"]');
    this.mobileLinks = document.querySelectorAll('[data-mobile-link]');
    
    this.init();
  }
  
  init() {
    this.setupI18n();
    this.setupNavigation();
    this.setupSmoothScroll();
    this.setupTabs();
    this.setupFAQ();
    this.setupCTATracking();
    this.setupABTest();
    this.setupStickyHeader();
    this.setupLanguageSwitcher();
  }
  
  /**
   * Навигация и мобильное меню
   */
  setupNavigation() {
    // Toggle мобильного меню
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => {
        this.menuToggle.classList.toggle('active');
        this.mobileNav.classList.toggle('active');
        
        // Обновляем aria-label
        const isOpen = this.mobileNav.classList.contains('active');
        this.menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
      });
    }
    
    // Закрытие меню при клике на ссылку
    this.mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.menuToggle.classList.remove('active');
        this.mobileNav.classList.remove('active');
      });
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header') && this.mobileNav.classList.contains('active')) {
        this.menuToggle.classList.remove('active');
        this.mobileNav.classList.remove('active');
      }
    });
  }
  
  /**
   * Smooth scroll для всех якорных ссылок
   */
  setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Игнорируем якоря без ID или специальные
        if (targetId === '#' || targetId === '#privacy' || targetId === '#nda') {
          e.preventDefault();
          return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          Animations.smoothScrollTo(targetId);
        }
      });
    });
  }
  
  /**
   * Табы для секции аудитории
   */
  setupTabs() {
    const tabs = document.querySelectorAll('[data-tab]');
    const contents = document.querySelectorAll('[data-content]');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        // Убираем active со всех табов и контента
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // Добавляем active к выбранному
        tab.classList.add('active');
        const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }
  
  /**
   * Аккордеон для FAQ
   */
  setupFAQ() {
    const faqItems = document.querySelectorAll('[data-faq-item]');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq__question');
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Закрываем все другие FAQ
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
          }
        });
        
        // Toggle текущего FAQ
        item.classList.toggle('active');
        question.setAttribute('aria-expanded', !isActive);
        
        // Трекинг события
        if (!isActive) {
          const questionText = question.querySelector('span').textContent;
          trackEvent(CONFIG.events.FAQ_OPEN, {
            question: questionText
          });
        }
      });
    });
  }
  
  /**
   * Отслеживание кликов по CTA кнопкам
   */
  setupCTATracking() {
    const ctaButtons = document.querySelectorAll('[data-cta]');
    
    ctaButtons.forEach(button => {
      button.addEventListener('click', () => {
        const ctaType = button.dataset.cta;
        
        // Сохраняем выбранный пакет
        if (ctaType.startsWith('pricing-')) {
          const packageName = ctaType.replace('pricing-', '');
          this.setSelectedPackage(packageName);
        }
        
        // Определяем тип события
        let eventName = CONFIG.events.CTA_DIAGNOSTIC;
        if (ctaType.includes('pricing')) {
          eventName = ctaType.includes('custom') ? 'cta_custom_pricing' : CONFIG.events.PRICING_CARD;
        }
        
        trackEvent(eventName, {
          cta_location: ctaType,
          button_text: button.textContent.trim()
        });
      });
    });
  }
  
  /**
   * Установить выбранный пакет в dropdown форме
   */
  setSelectedPackage(packageName) {
    const packageSelect = document.getElementById('package');
    
    if (packageSelect) {
      // Устанавливаем значение в select
      packageSelect.value = packageName.toLowerCase();
      
      // Плавно подсвечиваем select с анимацией
      packageSelect.style.transition = 'all 0.3s ease';
      packageSelect.style.borderColor = 'var(--color-success)';
      packageSelect.style.borderWidth = '3px';
      packageSelect.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.2)';
      
      // Убираем подсветку через 2 секунды
      setTimeout(() => {
        packageSelect.style.borderColor = '';
        packageSelect.style.borderWidth = '';
        packageSelect.style.boxShadow = '';
      }, 2000);
      
      // Фокусируем select для наглядности
      setTimeout(() => {
        packageSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    
    // Сохраняем в sessionStorage
    sessionStorage.setItem('selectedPackage', packageName);
  }
  
  /**
   * Инициализация интернационализации
   */
  setupI18n() {
    // Инициализируем i18n
    i18n.init();
    
    // Применяем текущий язык
    this.updateLanguage(i18n.getCurrentLang());
  }
  
  /**
   * Обновить язык на странице
   */
  updateLanguage(lang) {
    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = i18n.t(key);
      
      if (translation) {
        // Если это массив (для features в pricing)
        if (Array.isArray(translation)) {
          element.innerHTML = translation.join('<br>');
        } else {
          element.innerHTML = translation;
        }
      }
    });
    
    // Обновляем placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = i18n.t(key);
      
      if (translation) {
        element.setAttribute('placeholder', translation);
      }
    });
    
    // Обновляем HTML контент (для GDPR label с ссылками)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = i18n.t(key);
      
      if (translation) {
        element.innerHTML = translation;
      }
    });
    
    // Обновляем A/B тест заголовок
    const heroTitle = document.querySelector('[data-ab-test="hero-title"]');
    if (heroTitle) {
      let selectedVariant = localStorage.getItem('hero-title-variant');
      if (!selectedVariant) {
        const randomIndex = Math.floor(Math.random() * CONFIG.heroTitles.length);
        selectedVariant = randomIndex.toString();
        localStorage.setItem('hero-title-variant', selectedVariant);
      }
      const variantIndex = parseInt(selectedVariant);
      const titleKey = CONFIG.heroTitles[variantIndex];
      heroTitle.textContent = i18n.t(titleKey);
    }
  }
  
  /**
   * Настройка переключателя языков
   */
  setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Устанавливаем активную кнопку
    const currentLang = i18n.getCurrentLang();
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    
    // Обработка кликов
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        
        if (i18n.setLang(lang)) {
          // Обновляем активную кнопку
          langButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Обновляем контент
          this.updateLanguage(lang);
          
          // Трекинг
          trackEvent('language_change', { language: lang });
        }
      });
    });
  }
  
  /**
   * A/B тестирование заголовка Hero
   */
  setupABTest() {
    // Уже обрабатывается в setupI18n
    // Трекинг показа варианта
    let selectedVariant = localStorage.getItem('hero-title-variant');
    if (selectedVariant) {
      const variantIndex = parseInt(selectedVariant);
      trackEvent('ab_test_hero_title', {
        variant: String.fromCharCode(65 + variantIndex), // A, B, C
        language: i18n.getCurrentLang()
      });
    }
  }
  
  /**
   * Sticky header при скролле
   */
  setupStickyHeader() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        this.header.style.boxShadow = 'var(--shadow-md)';
      } else {
        this.header.style.boxShadow = 'var(--shadow-sm)';
      }
      
      lastScroll = currentScroll;
    });
  }
}

/**
 * Инициализация при загрузке DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  // Запускаем приложение
  const app = new App();
  
  // Лог для разработки
  console.log('%c🚀 AI4Y Landing Page loaded successfully!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
  console.log('%cVersion: 1.0.0', 'color: #6b7280;');
});

/**
 * Обработка ошибок JavaScript
 */
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.error);
  
  // Можно отправить ошибку в систему мониторинга
  // Например, Sentry, LogRocket и т.д.
});

