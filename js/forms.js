/* ==========================================================================
   Forms Module
   ========================================================================== */

const Forms = (() => {

  const PLACEHOLDER_WEBHOOK = 'https://example.com/webhook-placeholder';
  
  const CONFIG = {
    webhookUrl: window.FORMS_WEBHOOK_URL || PLACEHOLDER_WEBHOOK
  };

  /**
   * Инициализация обработки форм
   */
  function init() {
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
      leadForm.addEventListener('submit', handleFormSubmit);
    }
  }
  
  /**
   * Обработка отправки формы
   */
  async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('successMessage');
    
    // Валидация
    if (!validateForm(form)) {
      return;
    }
    
    // Получаем данные формы
    const formData = new FormData(form);
    const currentLang = window.i18n ? window.i18n.getCurrentLang() : 'ru';

    const data = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      message: formData.get('message') || 'Не указано',
      lang: currentLang,
      timestamp: new Date().toISOString()
    };
    
    // Отключаем кнопку и показываем загрузку
    submitButton.disabled = true;
    const originalBtnText = submitButton.textContent;
    submitButton.textContent = '...';
    
    try {
      // Отправка формы
      const response = await submitForm(data);
      
      if (response.success) {
        // Успех
        form.style.display = 'none';
        if (successMessage) {
          successMessage.style.display = 'block';
        }
        
        // Трекинг события (если есть аналитика)
        // trackEvent('form_submit', { ...data });
        
      } else {
        throw new Error('Ошибка отправки формы');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const errorText = window.i18n ? window.i18n.t('cta.form.errorText') : 'Ошибка отправки. Попробуйте позже.';
      alert(errorText);
      
      // Возвращаем кнопку в исходное состояние
      submitButton.disabled = false;
      submitButton.textContent = originalBtnText;
    }
  }
  
  /**
   * Валидация формы
   */
  function validateForm(form) {
    let isValid = true;
    
    // Имя
    const nameInput = form.querySelector('#name');
    if (nameInput && !nameInput.value.trim()) {
      showError(nameInput);
      isValid = false;
    } else if (nameInput) {
      hideError(nameInput);
    }
    
    // Email или Telegram
    const contactInput = form.querySelector('#contact');
    if (contactInput) {
        const contactValue = contactInput.value.trim();
        // Простая проверка: или email, или начинается с @ (telegram), или просто не пустой текст (гибко)
        if (!contactValue) {
            showError(contactInput);
            isValid = false;
        } else {
            hideError(contactInput);
        }
    }
    
    return isValid;
  }
  
  /**
   * Показать ошибку поля (визуально)
   */
  function showError(input) {
    input.style.borderColor = '#ff4757';
    input.classList.add('shake'); // Можно добавить анимацию тряски в CSS если нужно
    setTimeout(() => input.classList.remove('shake'), 500);
  }
  
  /**
   * Скрыть ошибку поля
   */
  function hideError(input) {
    input.style.borderColor = '';
  }
  
  /**
   * Отправка данных формы на Webhook
   */
  async function submitForm(data) {
    console.log('🚀 Starting form submission to:', CONFIG.webhookUrl);
    console.log('📦 Data:', data);

    if (!CONFIG.webhookUrl || CONFIG.webhookUrl === PLACEHOLDER_WEBHOOK) {
      console.warn('Webhook URL is not configured. Set window.FORMS_WEBHOOK_URL before enabling form submissions.');
      return { success: false, error: new Error('Webhook URL not configured') };
    }

    try {
      // Используем URLSearchParams для отправки 'application/x-www-form-urlencoded'
      const params = new URLSearchParams();
      for (const key in data) {
        params.append(key, data[key]);
      }

      // mode: 'no-cors' разрешает отправку запроса даже если сервер не присылает заголовки CORS.
      // МИНУС: Мы не узнаем статус ответа (200 или 500), ответ будет "opaque" (непрозрачный).
      // Но для вебхуков это часто единственный рабочий вариант с фронтенда.
      const response = await fetch(CONFIG.webhookUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
      });

      console.log('✅ Request sent. Response type:', response.type);

      // При mode: 'no-cors' ответ всегда opaque, статус 0. 
      // Мы считаем это успехом, так как запрос ушел в сеть.
      return { success: true };

    } catch (error) {
        console.error('❌ Network error during fetch:', error);
        return { success: false, error: error };
    }
  }
  
  return {
    init
  };
})();

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  Forms.init();
});
