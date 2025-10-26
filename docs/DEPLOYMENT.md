# Руководство по деплою AI4Y Landing Page

Это руководство поможет вам развернуть лендинг на различных платформах.

> **Рекомендуется:** Cloudflare Pages — быстрый бесплатный хостинг с отличной производительностью и CDN.

## ☁️ Cloudflare Pages (Рекомендуется)

**Преимущества:**
- Бесплатный хостинг с неограниченной пропускной способностью
- Глобальная CDN сеть
- Автоматический SSL
- Мгновенный деплой через Git
- Отличная производительность

### Способ 1: Через Git (Рекомендуется)

1. **Загрузите проект на GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/ваш-username/AI4Y.git
   git push -u origin main
   ```

2. **Подключите к Cloudflare Pages**
   - Войдите на [dash.cloudflare.com](https://dash.cloudflare.com/)
   - Workers & Pages → Create application → Pages → Connect to Git
   - Выберите ваш репозиторий GitHub
   - Настройки сборки:
     * Build command: (оставьте пустым)
     * Build output directory: `/` (корень проекта)
   - Deploy site

3. **Готово!** Ваш сайт будет доступен на `https://ваш-проект.pages.dev`

### Способ 2: Direct Upload

1. Перейдите на [dash.cloudflare.com](https://dash.cloudflare.com/)
2. Workers & Pages → Create application → Pages → Upload assets
3. Загрузите все файлы проекта
4. Deploy!

### Настройка custom domain

1. В панели Cloudflare Pages: Custom domains → Set up a custom domain
2. Введите ваш домен (например, `ai4y.com`)
3. Следуйте инструкциям для настройки DNS
4. SSL сертификат установится автоматически

## 🚀 Быстрый деплой (Netlify Drop)

**Самый простой способ для начала:**

1. Перейдите на [netlify.com/drop](https://app.netlify.com/drop)
2. Перетащите всю папку проекта в окно браузера
3. Получите бесплатный URL вида `https://random-name.netlify.app`
4. Готово! Сайт опубликован

### Настройка custom domain в Netlify

1. В панели Netlify: Site settings → Domain management
2. Нажмите "Add custom domain"
3. Следуйте инструкциям для настройки DNS

---

## 📦 Деплой через Git (Netlify/Vercel)

### Netlify

**Шаг 1:** Создайте Git репозиторий

```bash
git init
git add .
git commit -m "Initial commit: AI4Y landing page"
```

**Шаг 2:** Загрузите на GitHub

```bash
# Создайте репозиторий на github.com
git remote add origin https://github.com/ваш-username/ai4y-landing.git
git branch -M main
git push -u origin main
```

**Шаг 3:** Подключите к Netlify

1. Войдите на [netlify.com](https://www.netlify.com/)
2. "New site from Git"
3. Выберите ваш репозиторий
4. Настройки:
   - Build command: оставьте пустым
   - Publish directory: `/`
5. Deploy site

**Шаг 4:** Автоматические деплои

Теперь каждый push в `main` автоматически обновляет сайт!

### Vercel

**Вариант 1: CLI**

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel

# Производственный деплой
vercel --prod
```

**Вариант 2: Git integration**

1. Войдите на [vercel.com](https://vercel.com/)
2. "New Project"
3. Import Git repository
4. Deploy!

---

## 📄 GitHub Pages

**Бесплатный хостинг от GitHub**

**Шаг 1:** Создайте репозиторий на GitHub

Название: `ваш-username.github.io` (для пользовательского сайта)
Или любое другое название (для проектного сайта)

**Шаг 2:** Загрузите код

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ваш-username/репозиторий.git
git push -u origin main
```

**Шаг 3:** Включите GitHub Pages

1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, folder: `/ (root)`
4. Save

**Шаг 4:** Проверьте деплой

Сайт будет доступен через несколько минут:
- Пользовательский: `https://ваш-username.github.io/`
- Проектный: `https://ваш-username.github.io/репозиторий/`

---

## 🔧 Настройка перед деплоем

### 1. Форма обратной связи

**Для Cloudflare Pages - Cloudflare Workers:**

Можно использовать Cloudflare Workers для обработки формы:

```javascript
// _worker.js в корне проекта
export default {
  async fetch(request, env) {
    if (request.method === 'POST' && request.url.endsWith('/api/contact')) {
      const data = await request.json();
      
      // Отправка на email через Mailgun, SendGrid или другой сервис
      // Или сохранение в Cloudflare KV/D1
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return env.ASSETS.fetch(request);
  }
}
```

**Formspree (проще для старта):**

```bash
# 1. Зарегистрируйтесь на formspree.io
# 2. Создайте форму и получите endpoint
# 3. Обновите js/config.js:
```

```javascript
forms: {
  submitEndpoint: 'https://formspree.io/f/ваш-id'
}
```

```javascript
// 4. В js/forms.js раскомментируйте Formspree секцию (строки ~55-63)
const response = await fetch(CONFIG.forms.submitEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
return { success: response.ok };
```

### 2. Аналитика

**Google Analytics 4:**

Добавьте в `<head>` секцию `index.html`:

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

**Yandex Metrica:**

```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(12345678, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

### 3. SEO мета-теги

Обновите в `index.html`:

```html
<title>Ваш заголовок | AI4Y</title>
<meta name="description" content="Ваше описание до 160 символов">
<meta property="og:title" content="Ваш заголовок">
<meta property="og:description" content="Ваше описание">
<meta property="og:url" content="https://вашдомен.com/">
<meta property="og:image" content="https://вашдомен.com/assets/images/og-image.jpg">
```

### 4. Создайте favicon

Используйте [favicon.io](https://favicon.io/) или [realfavicongenerator.net](https://realfavicongenerator.net/)

Добавьте в `<head>`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

---

## 🎯 Оптимизация перед продакшеном

### 1. Минификация CSS/JS

**Онлайн инструменты:**
- CSS: [cssnano.co](https://cssnano.co/)
- JS: [terser.org](https://try.terser.org/)

**Или через NPM:**

```bash
# Установите инструменты
npm install -g csso-cli terser

# Минифицируйте CSS
csso css/reset.css -o css/reset.min.css
csso css/variables.css -o css/variables.min.css
csso css/components.css -o css/components.min.css
csso css/main.css -o css/main.min.css

# Минифицируйте JS
terser js/config.js -o js/config.min.js
terser js/animations.js -o js/animations.min.js
terser js/forms.js -o js/forms.min.js
terser js/main.js -o js/main.min.js
```

Затем обновите ссылки в `index.html`:

```html
<link rel="stylesheet" href="css/reset.min.css">
<!-- и т.д. -->
```

### 2. Оптимизация изображений

**Онлайн:**
- [TinyPNG](https://tinypng.com/) - для PNG/JPG
- [Squoosh](https://squoosh.app/) - для WebP

**Локально:**

```bash
npm install -g imagemin-cli

imagemin assets/images/*.{jpg,png} --out-dir=assets/images/optimized
```

### 3. Проверьте производительность

**Google Lighthouse:**

1. Откройте Chrome DevTools (F12)
2. Вкладка "Lighthouse"
3. Generate report
4. Цель: Performance > 90, SEO > 90

**Online checker:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## 🌐 Custom Domain

### Netlify

1. Site settings → Domain management
2. Add custom domain → введите ваш домен
3. У вашего DNS провайдера добавьте записи:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: ваш-сайт.netlify.app
   ```
4. SSL сертификат установится автоматически

### Vercel

1. Project Settings → Domains
2. Add domain → введите домен
3. Следуйте инструкциям по настройке DNS
4. SSL автоматически

### GitHub Pages + Cloudflare (бесплатный SSL)

1. Добавьте файл `CNAME` в корень проекта:
   ```
   вашдомен.com
   ```

2. На Cloudflare:
   - Добавьте домен
   - DNS записи:
     ```
     Type: CNAME
     Name: @
     Content: ваш-username.github.io
     Proxy: включено (оранжевое облако)
     ```

3. В GitHub: Settings → Pages → Custom domain → сохраните

---

## ✅ Чеклист перед публикацией

- [ ] Форма отправляет на реальный email
- [ ] Все ссылки рабочие (соцсети, email)
- [ ] Favicon добавлен
- [ ] Мета-теги обновлены (title, description, OG)
- [ ] Google Analytics / Yandex Metrica настроены
- [ ] Изображения оптимизированы
- [ ] Протестировано на мобильных устройствах
- [ ] Lighthouse score > 90
- [ ] robots.txt и sitemap.xml добавлены
- [ ] Политика конфиденциальности готова
- [ ] Проверена валидация HTML (validator.w3.org)
- [ ] Custom domain настроен (если используется)
- [ ] SSL сертификат активен (https://)

---

## 🆘 Частые проблемы

**Форма не отправляется после деплоя:**
- Проверьте CORS настройки вашего email сервиса
- Убедитесь, что endpoint указан правильно
- Проверьте Console в DevTools на ошибки

**CSS/JS не загружаются:**
- Проверьте пути к файлам (относительные vs абсолютные)
- Убедитесь, что файлы закоммичены в Git

**Custom domain не работает:**
- Подождите до 24-48 часов для распространения DNS
- Проверьте DNS записи через [whatsmydns.net](https://www.whatsmydns.net/)
- Убедитесь, что записи правильные

---

**Успешного деплоя! 🚀**

Если возникли вопросы - проверьте документацию платформы или обратитесь в поддержку.

