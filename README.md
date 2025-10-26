# AI4Y - AI Solutions Landing Page

> Modern, multilingual landing page for AI automation and consulting services.

## 🌟 Features

- 🌐 **3 Languages**: Russian (default), Bulgarian, English
- 🎨 **Dark/Light Theme** with smooth transitions
- 📱 **Fully Responsive** (mobile-first design)
- ⚡ **Vanilla JavaScript** (no frameworks, no dependencies)
- ♿ **Accessible** (WCAG AA compliant)
- 🚀 **Optimized** for performance

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/7RODIS7/AI4Y.git
cd AI4Y

# Run locally (any static server)
python -m http.server 8000
# or
npx serve

# Open http://localhost:8000
```

## 📁 Project Structure

```
AI4Y/
├── index.html              # Main landing page
├── css/                    # Stylesheets
│   ├── reset.css          # CSS reset
│   ├── variables.css      # CSS variables & themes
│   ├── components.css     # Reusable components
│   └── main.css           # Main styles
├── js/                     # JavaScript modules
│   ├── theme.js           # Dark/Light theme switcher
│   ├── i18n.js            # Internationalization
│   ├── config.js          # Configuration
│   ├── animations.js      # Scroll animations
│   ├── forms.js           # Form handling
│   └── main.js            # Main app logic
├── assets/                 # Static assets
│   └── images/            # Images & SVG
├── docs/                   # Documentation
└── translations.json      # i18n strings backup
```

## 🌐 Internationalization

The landing page supports 3 languages with easy switching:

- 🇷🇺 **Russian** (Русский) - Default
- 🇧🇬 **Bulgarian** (Български)
- 🇬🇧 **English**

Language is auto-detected from browser settings and saved in localStorage.

**Need more languages?** Check [docs/HOW_TO_TRANSLATE.md](docs/HOW_TO_TRANSLATE.md)

## 🎨 Sections Included

1. **Hero** - Eye-catching header with CTA
2. **Values** - Core benefits showcase
3. **Audience** - Target audience tabs
4. **Services** - What we offer
5. **Cases** - Use case examples
6. **Process** - How we work
7. **Pricing** - Service packages
8. **Guarantees** - Trust & security
9. **About** - Team & tech stack
10. **FAQ** - Common questions
11. **Contact** - Contact form
12. **Footer** - Minimal footer

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Deploy automatically

### Quick Deploy Options

- **Netlify**: [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: [vercel.com](https://vercel.com)
- **GitHub Pages**: Settings → Pages → Deploy from branch

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## ⚙️ Configuration

### 1. Contact Information

Update email in:
- Contact form (forms.js)
- Footer (if enabled)

### 2. Social Links

Edit footer links in `index.html`

### 3. Analytics (Optional)

Add your tracking code to `js/config.js`:

```javascript
const CONFIG = {
  analyticsId: 'YOUR-GA4-ID',
  // ... other config
};
```

### 4. Form Integration

Configure form handling in `js/forms.js` or integrate with:
- Formspree
- Netlify Forms
- Your custom backend

## 🔧 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties
- **JavaScript ES6+** - Vanilla JS, no frameworks
- **SVG** - Vector graphics

**Performance:**
- No external dependencies
- ~50KB minified CSS
- ~30KB minified JS
- Lighthouse score: 90+

## 📚 Documentation

- [docs/QUICKSTART.md](docs/QUICKSTART.md) - Quick setup guide
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deployment instructions
- [docs/HOW_TO_TRANSLATE.md](docs/HOW_TO_TRANSLATE.md) - Adding new languages

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 License

© 2025 AI4Y. All rights reserved.

## 🤝 Contributing

For questions or suggestions, please open an issue.

---

**Built with ❤️ for AI automation consulting**
