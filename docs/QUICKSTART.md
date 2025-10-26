# 🚀 Быстрый старт AI4Y Landing Page

## Шаг 1: Просмотр локально (2 минуты)

### Вариант A: Прямо в браузере
Просто откройте `index.html` двойным кликом

### Вариант B: Локальный сервер (рекомендуется)

**Python (если установлен):**
```bash
python -m http.server 8000
```

**Node.js (если установлен):**
```bash
npx serve
```

Откройте: `http://localhost:8000`

---

## Шаг 2: Кастомизация (10 минут)

### 2.1 Измените цвета
Откройте `css/variables.css` и поменяйте:

```css
--color-primary: #2563eb;  /* Ваш основной цвет */
--color-accent: #f59e0b;   /* Ваш акцентный цвет */
```

### 2.2 Обновите контент
В `index.html` замените тексты на свои:
- Заголовок Hero (строка ~83)
- Подзаголовок (строка ~86)
- Email и Telegram в Footer (строка ~750+)

### 2.3 Добавьте свой email
В `js/config.js` (строка 17):
```javascript
submitEndpoint: 'https://formspree.io/f/YOUR_FORM_ID'
```

---

## Шаг 3: Настройка формы (5 минут)

### Formspree (бесплатный вариант):

1. Зарегистрируйтесь: [formspree.io](https://formspree.io/)
2. Создайте новую форму
3. Скопируйте endpoint URL
4. Вставьте в `js/config.js`:
   ```javascript
   submitEndpoint: 'https://formspree.io/f/ваш-id'
   ```
5. В `js/forms.js` (строки 54-63) раскомментируйте Formspree секцию

Готово! Форма работает 🎉

---

## Шаг 4: Деплой (5 минут)

### Самый простой способ - Netlify Drop:

1. Зайдите: [app.netlify.com/drop](https://app.netlify.com/drop)
2. Перетащите всю папку проекта
3. Получите бесплатный URL
4. Сайт онлайн! 🚀

**Подробнее:** см. `DEPLOYMENT.md`

---

## Шаг 5: Добавьте аналитику (5 минут)

### Google Analytics 4:

1. Создайте аккаунт GA4
2. Получите Measurement ID (G-XXXXXXXXXX)
3. Добавьте в `<head>` секцию `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Чеклист минимальной настройки

Перед публикацией проверьте:

- [ ] Заменили placeholder email/telegram в футере
- [ ] Настроили форму обратной связи (Formspree)
- [ ] Обновили мета-теги (title, description)
- [ ] Добавили favicon
- [ ] Заменили `yourdomain.com` в `robots.txt` и `sitemap.xml`
- [ ] Протестировали на мобильном
- [ ] Проверили все ссылки

---

## 🆘 Нужна помощь?

**Прочитайте:**
- `README.md` - полная документация
- `DEPLOYMENT.md` - подробное руководство по деплою
- `PLAN.md` - архитектура и планирование

**Частые проблемы:**
- Форма не работает → проверьте настройки в `js/config.js`
- CSS не применяется → очистите кеш браузера (Ctrl+F5)
- Меню не открывается → проверьте консоль (F12) на ошибки

---

## 🎯 Следующие шаги

После базовой настройки:

1. **Добавьте изображения** в `assets/images/`
2. **Оптимизируйте** через [TinyPNG](https://tinypng.com/)
3. **Протестируйте** производительность через [PageSpeed](https://pagespeed.web.dev/)
4. **Настройте custom domain** (см. DEPLOYMENT.md)

---

**Время до запуска: ~30 минут 🚀**

Удачи с вашим лендингом!

