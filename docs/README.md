# AI4Y Landing Page

Современный одностраничный лендинг для AI-автоматизации и консультационных услуг.

## 🚀 Быстрый старт

### Просмотр локально

Просто откройте файл `index.html` в браузере:

```bash
# Windows
start index.html

# MacOS
open index.html

# Linux
xdg-open index.html
```

Или используйте локальный сервер (рекомендуется):

```bash
# С помощью Python 3
python -m http.server 8000

# С помощью Node.js (если установлен)
npx serve

# С помощью PHP
php -S localhost:8000
```

Затем откройте браузер: `http://localhost:8000`

## 📁 Структура проекта

```
AI4Y/
├── index.html              # Основная страница
├── css/
│   ├── reset.css          # Нормализация стилей
│   ├── variables.css      # CSS переменные
│   ├── components.css     # Переиспользуемые компоненты
│   └── main.css           # Основные стили
├── js/
│   ├── config.js          # Конфигурация
│   ├── animations.js      # Анимации
│   ├── forms.js           # Обработка форм
│   └── main.js            # Основная логика
├── assets/
│   ├── images/            # Изображения (создать при необходимости)
│   └── fonts/             # Шрифты (опционально)
├── PLAN.md                # Детальный план разработки
├── .cursorrules           # Правила для Cursor IDE
└── README.md              # Эта документация
```

## ✨ Основные возможности

### Реализовано
- ✅ Адаптивный дизайн (mobile-first)
- ✅ Hero секция с A/B тестированием заголовков
- ✅ 12 секций контента
- ✅ Smooth scroll навигация
- ✅ Мобильное меню
- ✅ Табы для целевой аудитории
- ✅ FAQ аккордеон
- ✅ Валидация форм
- ✅ Scroll-анимации (Intersection Observer)
- ✅ Отслеживание событий для аналитики
- ✅ Accessibility (a11y) features

### Секции лендинга
1. **Hero** - заголовок, 2 CTA, доверительная строка
2. **Values** - три ключевые выгоды
3. **Audience** - табы для частных/бизнес клиентов
4. **Services** - что получает клиент
5. **Cases** - типовые кейсы применения
6. **Process** - 5 шагов работы
7. **Pricing** - 4 пакета услуг
8. **Guarantees** - гарантии и безопасность
9. **About** - обо мне, навыки
10. **FAQ** - 5 частых вопросов
11. **Contact** - форма обратной связи
12. **Footer** - контакты, навигация

## 🎨 Кастомизация

### Цвета

Измените цветовую схему в `css/variables.css`:

```css
:root {
  --color-primary: #2563eb;      /* Основной цвет */
  --color-accent: #f59e0b;       /* Акцентный цвет */
  /* ... другие переменные */
}
```

### A/B тестирование заголовков

Отредактируйте варианты в `js/config.js`:

```javascript
heroTitles: [
  'Ваш личный AI-консьерж: меньше рутины — больше результата',
  'Автоматизации и AI под ваши задачи за 7-10 дней',
  'Внедрю AI без теории: быстрые сценарии, измеримый эффект'
]
```

### Контент

Все тексты находятся в `index.html`. Просто найдите нужную секцию и измените содержимое.

## 📧 Настройка формы обратной связи

### Вариант 1: Formspree (рекомендуется для начала)

1. Зарегистрируйтесь на [formspree.io](https://formspree.io/)
2. Создайте новую форму и получите endpoint
3. В `js/config.js` замените:
```javascript
submitEndpoint: 'https://formspree.io/f/YOUR_FORM_ID'
```
4. В `js/forms.js` раскомментируйте секцию Formspree

### Вариант 2: EmailJS

1. Зарегистрируйтесь на [emailjs.com](https://www.emailjs.com/)
2. Настройте email сервис и шаблон
3. Получите Service ID, Template ID, Public Key
4. В `js/config.js` заполните:
```javascript
emailJSConfig: {
  serviceID: 'YOUR_SERVICE_ID',
  templateID: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
}
```
5. Подключите библиотеку EmailJS в `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
6. В `js/forms.js` раскомментируйте секцию EmailJS

### Вариант 3: Свой backend

Создайте API endpoint и измените функцию `submitForm()` в `js/forms.js`.

## 📊 Аналитика

### Google Analytics 4

1. Создайте аккаунт GA4 и получите Measurement ID
2. Добавьте в `<head>` секцию `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
3. В `js/config.js` укажите ваш ID:
```javascript
googleAnalytics: 'G-XXXXXXXXXX'
```

### Yandex Metrica

1. Создайте счётчик на [metrika.yandex.ru](https://metrika.yandex.ru/)
2. Добавьте код счётчика в `<head>` секцию `index.html`
3. В `js/config.js` укажите ваш ID:
```javascript
yandexMetrica: '12345678'
```

## 🚢 Деплой

### Netlify (рекомендуется)

1. Зарегистрируйтесь на [netlify.com](https://www.netlify.com/)
2. Перетащите папку проекта в Netlify Drop
3. Готово! Получите бесплатный URL

Или через Git:
```bash
git init
git add .
git commit -m "Initial commit"
# Подключите репозиторий к Netlify
```

### Vercel

```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Создайте репозиторий на GitHub
2. Загрузите файлы
3. В настройках репозитория включите GitHub Pages
4. Выберите ветку `main` и папку `root`

## 🎯 Оптимизация

### Производительность

**Изображения:**
- Используйте WebP формат с PNG/JPG fallback
- Оптимизируйте через [TinyPNG](https://tinypng.com/) или [Squoosh](https://squoosh.app/)
- Добавьте `loading="lazy"` для изображений ниже fold

**CSS/JS:**
- Минифицируйте перед продакшеном
- Используйте [cssnano](https://cssnano.co/) для CSS
- Используйте [terser](https://terser.org/) для JS

**Шрифты:**
- Используйте `font-display: swap` в Google Fonts
- Или загрузите шрифты локально

### SEO

1. Замените мета-теги в `index.html`:
   - `<title>`
   - `<meta name="description">`
   - Open Graph теги
   - Twitter Card теги

2. Добавьте `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

3. Добавьте `sitemap.xml` (для одностраничника простой):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🐛 Troubleshooting

### Анимации не работают
- Проверьте, не включен ли `prefers-reduced-motion` в настройках системы
- Откройте DevTools Console и проверьте на ошибки

### Форма не отправляется
- Убедитесь, что настроили endpoint в `js/config.js`
- Проверьте Console на ошибки CORS
- Временно форма логирует данные в консоль

### Мобильное меню не закрывается
- Проверьте, что JavaScript загружается без ошибок
- Убедитесь, что атрибут `data-action="toggle-menu"` присутствует

## 📝 TODO для продакшена

- [ ] Заменить placeholder тексты в форме
- [ ] Настроить реальный email endpoint
- [ ] Добавить реальные изображения/иконки
- [ ] Создать favicon (используйте [favicon.io](https://favicon.io/))
- [ ] Настроить Google Analytics / Yandex Metrica
- [ ] Добавить политику конфиденциальности
- [ ] Добавить NDA документ
- [ ] Оптимизировать изображения
- [ ] Минифицировать CSS/JS
- [ ] Протестировать на разных устройствах
- [ ] Проверить Lighthouse score (цель > 90)
- [ ] Настроить custom domain

## 🔧 Технологии

- **HTML5** - семантическая разметка
- **CSS3** - Flexbox, Grid, Custom Properties, Animations
- **Vanilla JavaScript** - ES6+, Intersection Observer, Fetch API
- **Без фреймворков** - для максимальной производительности

## 📱 Поддержка браузеров

- Chrome/Edge (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- iOS Safari (14+)
- Android Chrome (последние 2 версии)

## 📄 Лицензия

Этот проект создан для AI4Y. Все права защищены.

## 🤝 Контакты

Если возникли вопросы или нужна помощь с настройкой:
- Email: hello@ai4y.com
- Telegram: @ai4y

---

**Создано с ❤️ для автоматизации вашего бизнеса**

