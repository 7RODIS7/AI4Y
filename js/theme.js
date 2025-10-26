/**
 * ==========================================================================
 * Theme Switcher Module
 * Переключение между светлой и темной темами
 * ==========================================================================
 */

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark'; // темная по умолчанию
    this.toggleBtn = null;
    this.init();
  }

  init() {
    // Применяем сохраненную тему сразу
    this.applyTheme(this.theme);
    
    // Ждем загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupUI());
    } else {
      this.setupUI();
    }
  }

  setupUI() {
    this.toggleBtn = document.getElementById('themeToggle');
    
    if (!this.toggleBtn) {
      console.warn('Theme toggle button not found');
      return;
    }

    // Устанавливаем начальную иконку
    this.updateIcon();

    // Обработчик клика
    this.toggleBtn.addEventListener('click', () => this.toggleTheme());
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.theme = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    this.updateIcon();
    
    // Небольшая анимация кнопки
    if (this.toggleBtn) {
      this.toggleBtn.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.toggleBtn.style.transform = '';
      }, 150);
    }
  }

  updateIcon() {
    if (!this.toggleBtn) return;
    
    const icon = this.toggleBtn.querySelector('.theme-toggle__icon');
    if (icon) {
      icon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
    }

    // Обновляем aria-label для доступности
    const label = this.theme === 'dark' 
      ? 'Переключить на светлую тему' 
      : 'Переключить на темную тему';
    this.toggleBtn.setAttribute('aria-label', label);
    this.toggleBtn.setAttribute('title', label);
  }
}

// Инициализируем менеджер тем
const themeManager = new ThemeManager();

// Экспортируем для использования в других модулях (если нужно)
window.themeManager = themeManager;

