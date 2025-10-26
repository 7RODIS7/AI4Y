/* ==========================================================================
   Configuration
   ========================================================================== */

const CONFIG = {
  // A/B Testing варианты заголовков (ключи для i18n)
  heroTitles: [
    'hero.titleA',
    'hero.titleB',
    'hero.titleC'
  ],
  
  // Настройки анимаций
  animations: {
    enabled: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  },
  
  // Настройки форм
  forms: {
    // Эндпоинт для отправки (замените на свой)
    submitEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    // Альтернатива: используйте EmailJS или другой сервис
    emailJSConfig: {
      serviceID: 'YOUR_SERVICE_ID',
      templateID: 'YOUR_TEMPLATE_ID',
      publicKey: 'YOUR_PUBLIC_KEY'
    }
  },
  
  // Аналитика
  analytics: {
    googleAnalytics: 'G-XXXXXXXXXX', // замените на свой
    yandexMetrica: '12345678' // замените на свой
  },
  
  // События для отслеживания
  events: {
    CTA_DIAGNOSTIC: 'cta_diagnostic_click',
    CTA_PRICING: 'cta_pricing_click',
    FORM_SUBMIT: 'form_submit',
    PRICING_CARD: 'pricing_card_click',
    FAQ_OPEN: 'faq_open',
    SCROLL_50: 'scroll_50_percent',
    SCROLL_100: 'scroll_100_percent'
  }
};

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

