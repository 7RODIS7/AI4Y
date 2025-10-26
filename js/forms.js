/* ==========================================================================
   Forms Module
   ========================================================================== */

const Forms = (() => {
  
  /**
   * Инициализация обработки форм
   */
  function init() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
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
    const data = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      message: formData.get('message') || 'Не указано',
      timestamp: new Date().toISOString()
    };
    
    // Отключаем кнопку и показываем загрузку
    submitButton.disabled = true;
    submitButton.textContent = 'Отправка...';
    
    try {
      // Отправка формы
      const response = await submitForm(data);
      
      if (response.success) {
        // Успех
        form.reset();
        successMessage.classList.add('show');
        
        // Трекинг события
        trackEvent(CONFIG.events.FORM_SUBMIT, {
          name: data.name,
          contact_type: data.contact.includes('@') ? 'email' : 'telegram'
        });
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 5000);
      } else {
        throw new Error('Ошибка отправки формы');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже или свяжитесь напрямую через email/Telegram.');
    } finally {
      // Возвращаем кнопку в исходное состояние
      submitButton.disabled = false;
      submitButton.textContent = 'Отправить заявку';
    }
  }
  
  /**
   * Валидация формы
   */
  function validateForm(form) {
    let isValid = true;
    
    // Имя
    const nameInput = form.querySelector('#name');
    if (!nameInput.value.trim()) {
      showError(nameInput);
      isValid = false;
    } else {
      hideError(nameInput);
    }
    
    // Email или Telegram
    const contactInput = form.querySelector('#contact');
    const contactValue = contactInput.value.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
    const isTelegram = contactValue.startsWith('@') && contactValue.length > 1;
    
    if (!contactValue || (!isEmail && !isTelegram)) {
      showError(contactInput);
      isValid = false;
    } else {
      hideError(contactInput);
    }
    
    // GDPR чекбокс
    const gdprCheckbox = form.querySelector('#gdpr');
    if (!gdprCheckbox.checked) {
      const errorMessage = window.i18n?.translate('contact.gdprError') || 'Please confirm your consent to personal data processing';
      alert(errorMessage);
      isValid = false;
    }
    
    return isValid;
  }
  
  /**
   * Показать ошибку поля
   */
  function showError(input) {
    input.classList.add('error');
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('form-error')) {
      errorMsg.style.display = 'block';
    }
  }
  
  /**
   * Скрыть ошибку поля
   */
  function hideError(input) {
    input.classList.remove('error');
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('form-error')) {
      errorMsg.style.display = 'none';
    }
  }
  
  /**
   * Отправка данных формы
   */
  async function submitForm(data) {
    // Вариант 1: Использование Formspree
    // Замените YOUR_FORM_ID на ваш реальный ID из Formspree
    /*
    const response = await fetch(CONFIG.forms.submitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return { success: response.ok };
    */
    
    // Вариант 2: EmailJS (если используете)
    /*
    emailjs.init(CONFIG.forms.emailJSConfig.publicKey);
    const response = await emailjs.send(
      CONFIG.forms.emailJSConfig.serviceID,
      CONFIG.forms.emailJSConfig.templateID,
      data
    );
    return { success: true };
    */
    
    // Вариант 3: Временное решение для демо (логирование в консоль)
    console.log('Form Data:', data);
    
    // Симуляция отправки
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // TODO: Подключить реальный backend или сервис
    return { success: true };
  }
  
  return {
    init
  };
})();

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  Forms.init();
});

