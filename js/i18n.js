/* ==========================================================================
   Internationalization (i18n) Module
   ========================================================================== */

const i18n = {
  // Текущий язык (дефолт - русский)
  currentLang: 'ru',
  
  // Переводы
  translations: {
    // English (default)
    en: {
      // Header
      nav: {
        benefits: 'Benefits',
        services: 'Services',
        pricing: 'Pricing',
        faq: 'FAQ',
        contact: 'Contact'
      },
      
      // Hero
      hero: {
        titleA: 'Your AI Partner: Less Routine, More Results',
        titleB: 'AI Automation & Custom Solutions in 7-10 Days',
        titleC: 'Practical AI: Fast Implementation, Measurable Impact',
        subtitle: 'The AI train is accelerating every day, unlocking new opportunities for those ready to embrace it. We are your guides on this fast-moving journey. We explore the AI tools market, select optimal solutions, train your team, and support you on the path to success.',
        cta1: 'Get Free 20-Min Diagnostic',
        cta2: 'Packages & Pricing',
        trust1: '3+ years working with AI',
        trust2: 'Sofia, working online'
      },
      
      // Values
      values: {
        subtitle: 'Why Choose Us',
        title: 'Three Key Benefits',
        description: 'We focus on practical solutions with measurable results',
        speed: {
          title: 'Speed',
          text: 'Ready-made scenarios and presets in 7-10 days. No lengthy development — straight to results.'
        },
        simplicity: {
          title: 'Simplicity',
          text: 'No complex terminology. "Buttons" and scenarios tailored to your daily routine and workflows.'
        },
        measurability: {
          title: 'Measurability',
          text: 'We track KPIs and compare before/after. You see real time and resource savings.'
        }
      },
      
      // Audience
      audience: {
        subtitle: 'Who We Work With',
        title: 'Who Our Solutions Are For',
        tab1: 'Private Clients',
        tab2: 'Businesses',
        personal: {
          item1: '<strong>Investors & Entrepreneurs</strong> — deal analysis automation, ROI/IRR calculations, broker communication',
          item2: '<strong>Busy Professionals</strong> — help with emails, calendar, documentation, material preparation',
          item3: '<strong>Those Who Want to Free Up Time</strong> — delegate routine to AI and focus on what matters'
        },
        business: {
          item1: '<strong>Real Estate Agencies</strong> — property search automation, client communication, reporting',
          item2: '<strong>E-commerce & Services</strong> — 24/7 support chatbots, order processing, content generation',
          item3: '<strong>Clinics & Hotels</strong> — appointment automation, FAQ bots, personalized communications'
        }
      },
      
      // Services
      services: {
        subtitle: 'What You Get',
        title: 'Comprehensive AI Solutions',
        item1: {
          title: 'Tool Research & Selection',
          text: 'We help you explore the market of AI tools and select the best fit for your business'
        },
        item2: {
          title: 'Custom Automation',
          text: 'Make.com, n8n, Telegram bots, integrations with your systems'
        },
        item3: {
          title: 'Training & Support',
          text: 'Short sessions and guides tailored to your tech stack'
        },
        item4: {
          title: 'Ongoing Maintenance',
          text: 'Updates, experiments with new models, regular reports'
        },
        tools: 'Tools we work with: Make, n8n, ChatGPT, Claude, Zapier, Airtable, Telegram Bots',
        servicesTitle: 'Our Services',
        servicesList: 'Automation • AI Integrations • AI Agents • Chatbots • No-Code Development • Consulting'
      },
      
      // Cases
      cases: {
        subtitle: 'Use Cases',
        title: 'Typical Scenarios',
        description: 'Real scenarios that already work',
        case1: {
          title: '💼 Investor',
          text: 'Automatic property shortlists by criteria, ROI/IRR calculations, broker question generation, document summarization'
        },
        case2: {
          title: '📧 Office Work',
          text: 'Email chain summarization, draft response generation, automatic calendar slots, meeting preparation'
        },
        case3: {
          title: '💬 Client Support',
          text: '24/7 Q&A bot for common queries, complex issue escalation, frequent problem analytics'
        },
        case4: {
          title: '✍️ Content',
          text: 'Article structures, grammar and tone checking, variations for different audiences, SEO optimization'
        }
      },
      
      // Process
      process: {
        subtitle: 'How It Works',
        title: 'Our Process',
        description: 'Transparent and structured approach from diagnostic to results',
        step1: {
          title: '20-60 Min Diagnostic',
          text: 'We identify your goals and find "quick wins" — tasks where AI will deliver immediate results'
        },
        step2: {
          title: 'Pilot Design',
          text: 'We select 1 clear success metric and plan a minimal solution to achieve it'
        },
        step3: {
          title: 'Build (2-4 weeks)',
          text: 'We create and test the solution, demonstrating it on your real data'
        },
        step4: {
          title: 'Training & Presets',
          text: 'Video guides, instructions and templates for independent use'
        },
        step5: {
          title: 'Support',
          text: 'Improvements, KPI reports, adaptation to changes in your processes'
        }
      },
      
      // Pricing
      pricing: {
        subtitle: 'Transparent Pricing',
        title: 'Service Packages',
        description: 'Choose the right option or we\'ll create a custom solution',
        popular: 'Popular',
        start: {
          title: 'Start',
          price: '€350',
          period: 'one-time',
          description: 'Perfect for first experience with AI automation',
          feature1: '60-min diagnostic session',
          feature2: '5 ready-made AI presets',
          feature3: 'Usage instructions',
          feature4: '1 week of email support',
          cta: 'Choose Start'
        },
        pilot: {
          title: 'Pilot',
          price: '€3.5K',
          period: '2-4 week project',
          description: 'Full implementation of key automation',
          feature1: '1 key AI workflow',
          feature2: 'Integrations with your systems',
          feature3: 'Team training sessions',
          feature4: '1 month of support',
          feature5: 'KPI report',
          cta: 'Choose Pilot'
        },
        care: {
          title: 'Care',
          price: '€2K',
          period: 'per month',
          description: 'Ongoing support and solution development',
          feature1: 'Regular updates',
          feature2: 'New experiments',
          feature3: 'Priority support',
          feature4: 'Monthly reports',
          feature5: 'Change adaptation',
          cta: 'Choose Care'
        },
        team: {
          title: 'Team Clinic',
          price: '€2.5K',
          period: 'mini-training',
          description: 'Team training on AI tools',
          feature1: '3-6 people',
          feature2: 'Practical workshops',
          feature3: 'Custom cases',
          feature4: 'Materials & templates',
          feature5: '2 weeks Q&A support',
          cta: 'Choose Team Clinic'
        },
        ctaCustom: 'Find Package for My Task'
      },
      
      // Guarantees
      guarantees: {
        subtitle: 'Your Security',
        title: 'Guarantees & Security',
        item1: 'NDA by default, private stack, transparent SOW for each project',
        item2: '"Can\'t show 3 useful scenarios in Start — money back"'
      },
      
      // About
      about: {
        subtitle: 'About Us',
        title: 'Who Creates Your Solutions',
        text: '2.5+ years creating AI tools, bots and automation for private clients and businesses. We work with SUNO, image and video generation, GitHub Copilot and Cursor. Languages: Russian, Ukrainian, English. Based in Sofia, working online worldwide.',
        skill: {
          messengerBots: 'Messenger Bots',
          andMore: '... and many more'
        }
      },
      
      // FAQ
      faq: {
        subtitle: 'Common Questions',
        title: 'FAQ',
        q1: {
          question: 'Do I need technical skills to work with your solutions?',
          answer: 'No, all solutions are turnkey. You get ready-made buttons and one-click scenarios. We provide brief training and clear instructions.'
        },
        q2: {
          question: 'What data is used for AI work?',
          answer: 'Only your data and only with your consent. All projects are NDA-protected, using private API keys. You control what information goes to AI models.'
        },
        q3: {
          question: 'How much time will I need to invest?',
          answer: '1-2 hours initially for diagnostic and training. Then you work with ready buttons: most scenarios take 10-30 seconds. Goal is to free your time, not take it.'
        },
        q4: {
          question: 'Can I start small and scale?',
          answer: 'Yes, that\'s exactly what we recommend! Start with Start package, test the approach on 5 scenarios. If results satisfy — scale to Pilot or Care with full automation.'
        },
        q5: {
          question: 'Do you work with clients from other countries?',
          answer: 'Yes, we work online with clients worldwide. Languages: Russian, Ukrainian, English. Time zones usually aren\'t a problem — we find convenient call times.'
        }
      },
      
      // Contact
      contact: {
        subtitle: 'Let\'s Start',
        title: 'Book Free Diagnostic',
        description: 'Fill out the form and we\'ll contact you within 24 hours',
        nameLabel: 'Your Name *',
        namePlaceholder: 'John Doe',
        nameError: 'Please enter your name',
        contactLabel: 'Email or Telegram *',
        contactPlaceholder: 'email@example.com or @telegram',
        contactError: 'Please enter email or Telegram',
        packageLabel: 'Package of Interest (optional)',
        packageDefault: 'Not selected',
        packageCustom: 'Custom solution',
        messageLabel: 'Your Task (optional)',
        messagePlaceholder: 'Briefly describe what you want to automate...',
        gdprLabel: 'I agree to personal data processing according to <a href="#privacy">privacy policy</a>',
        gdprError: 'Please confirm your consent to personal data processing',
        submit: 'Send Request',
        success: '✓ Thank you! Your request received. We\'ll contact you within 24 hours.'
      },
      
      // Footer
      footer: {
        copyright: '© 2025 AI4Y. All rights reserved.'
      }
    },
    
    // Русский
    ru: {
      // Header
      nav: {
        benefits: 'Преимущества',
        services: 'Услуги',
        pricing: 'Цены',
        faq: 'FAQ',
        contact: 'Контакт'
      },
      
      // Hero
      hero: {
        titleA: 'Ваш AI-партнер: меньше рутины — больше результата',
        titleB: 'Автоматизации и AI под ваши задачи за 7-10 дней',
        titleC: 'Внедрим AI без теории: быстрые сценарии, измеримый эффект',
        subtitle: 'AI-поезд набирает скорость каждый день, открывая новые возможности тем, кто готов это принять. Мы — ваши проводники в этом стремительном путешествии. Исследуем рынок AI-инструментов, подбираем оптимальные решения, обучаем команду и сопровождаем на пути к успеху.',
        cta1: 'Получить бесплатную диагностику 20 мин',
        cta2: 'Пакеты и цены',
        trust1: '3+ лет работы с AI',
        trust2: 'София, работаем онлайн'
      },
      
      // Values
      values: {
        subtitle: 'Почему мы',
        title: 'Три ключевые выгоды',
        description: 'Фокусируемся на практических решениях с измеримым эффектом',
        speed: {
          title: 'Скорость',
          text: 'Готовые сценарии и пресеты за 7-10 дней. Без долгих разработок — сразу к результату.'
        },
        simplicity: {
          title: 'Простота',
          text: 'Без сложной терминологии. «Кнопки» и сценарии под ваш распорядок дня и рабочие процессы.'
        },
        measurability: {
          title: 'Измеримость',
          text: 'Фиксируем KPI и сравниваем до/после. Вы видите реальную экономию времени и ресурсов.'
        }
      },
      
      // Audience
      audience: {
        subtitle: 'Для кого',
        title: 'Кому подходят наши решения',
        tab1: 'Частные клиенты',
        tab2: 'Бизнес',
        personal: {
          item1: '<strong>Инвесторы и предприниматели</strong> — автоматизация анализа сделок, ROI/IRR расчёты, коммуникация с брокерами',
          item2: '<strong>Busy-профессионалы</strong> — помощь с email, календарём, документацией, подготовкой материалов',
          item3: '<strong>Те, кто хочет освободить время</strong> — делегировать рутину AI и фокусироваться на важном'
        },
        business: {
          item1: '<strong>Real Estate агентства</strong> — автоматизация подбора объектов, коммуникации с клиентами, отчётность',
          item2: '<strong>E-commerce и сервисы</strong> — чат-боты поддержки 24/7, обработка заказов, контент-генерация',
          item3: '<strong>Клиники и отели</strong> — автоматизация записи, FAQ-боты, персонализированные коммуникации'
        }
      },
      
      // Services
      services: {
        subtitle: 'Что вы получите',
        title: 'Комплексные AI-решения',
        item1: {
          title: 'Исследование и подбор инструментов',
          text: 'Помогаем исследовать рынок AI-инструментов и подобрать оптимальные под ваш бизнес'
        },
        item2: {
          title: 'Автоматизации под ключ',
          text: 'Make.com, n8n, Telegram-боты, интеграции с вашими системами'
        },
        item3: {
          title: 'Обучение и поддержка',
          text: 'Короткие сессии и памятки под ваш технологический стек'
        },
        item4: {
          title: 'Сопровождение',
          text: 'Обновления, эксперименты с новыми моделями, регулярные отчёты'
        },
        tools: 'Инструменты, с которыми работаем: Make, n8n, ChatGPT, Claude, Zapier, Airtable, Telegram Боты',
        servicesTitle: 'Наши услуги',
        servicesList: 'Автоматизации • Интеграции с AI • AI-агенты • Чат-боты • No-code разработка • Консультации'
      },
      
      // Cases
      cases: {
        subtitle: 'Примеры применения',
        title: 'Типовые кейсы',
        description: 'Реальные сценарии, которые уже работают',
        case1: {
          title: '💼 Инвестор',
          text: 'Автоматический shortlist объектов по критериям, расчёт ROI/IRR, генерация вопросов брокеру, суммаризация документов'
        },
        case2: {
          title: '📧 Офисная работа',
          text: 'Суммаризация длинных email-цепочек, генерация черновиков ответов, автоматические слоты в календаре, подготовка встреч'
        },
        case3: {
          title: '💬 Поддержка клиентов',
          text: 'Q&A-бот 24/7 для типовых запросов, эскалация сложных вопросов, аналитика частых проблем'
        },
        case4: {
          title: '✍️ Контент',
          text: 'Структуры статей, проверка ошибок и тона, генерация вариаций под разные аудитории, SEO-оптимизация'
        }
      },
      
      // Process
      process: {
        subtitle: 'Как это работает',
        title: 'Процесс работы',
        description: 'Прозрачный и структурированный подход от диагностики до результата',
        step1: {
          title: 'Диагностика 20-60 мин',
          text: 'Определяем ваши цели и находим «быстрые победы» — задачи, где AI даст эффект сразу'
        },
        step2: {
          title: 'Дизайн пилота',
          text: 'Выбираем 1 чёткую метрику успеха и планируем минимальное решение для её достижения'
        },
        step3: {
          title: 'Сборка (2-4 недели)',
          text: 'Создаём и тестируем решение, демонстрация на ваших реальных данных'
        },
        step4: {
          title: 'Обучение и пресеты',
          text: 'Видео-гайды, памятки и шаблоны для самостоятельного использования'
        },
        step5: {
          title: 'Сопровождение',
          text: 'Улучшения, отчёты по KPI, адаптация под изменения в ваших процессах'
        }
      },
      
      // Pricing
      pricing: {
        subtitle: 'Прозрачные цены',
        title: 'Пакеты услуг',
        description: 'Выберите подходящий вариант или создадим индивидуальное решение',
        popular: 'Популярный',
        start: {
          title: 'Start',
          price: '€350',
          period: 'единоразово',
          description: 'Идеально для первого знакомства с AI-автоматизацией',
          feature1: 'Диагностическая сессия 60 мин',
          feature2: '5 готовых AI-пресетов',
          feature3: 'Инструкции по использованию',
          feature4: '1 неделя email-поддержки',
          cta: 'Выбрать Start'
        },
        pilot: {
          title: 'Pilot',
          price: '€3.5K',
          period: 'проект 2-4 недели',
          description: 'Полноценное внедрение ключевой автоматизации',
          feature1: '1 ключевая AI-цепочка',
          feature2: 'Интеграции с вашими системами',
          feature3: 'Обучающие сессии для команды',
          feature4: '1 месяц поддержки',
          feature5: 'Отчёт по KPI',
          cta: 'Выбрать Pilot'
        },
        care: {
          title: 'Care',
          price: '€2K',
          period: 'в месяц',
          description: 'Постоянная поддержка и развитие решений',
          feature1: 'Регулярные обновления',
          feature2: 'Новые эксперименты',
          feature3: 'Приоритетная поддержка',
          feature4: 'Ежемесячные отчёты',
          feature5: 'Адаптация под изменения',
          cta: 'Выбрать Care'
        },
        team: {
          title: 'Team Clinic',
          price: '€2.5K',
          period: 'мини-тренинг',
          description: 'Обучение команды работе с AI-инструментами',
          feature1: '3-6 человек',
          feature2: 'Практические воркшопы',
          feature3: 'Персональные кейсы',
          feature4: 'Материалы и шаблоны',
          feature5: '2 недели Q&A поддержки',
          cta: 'Выбрать Team Clinic'
        },
        ctaCustom: 'Подобрать пакет под мою задачу'
      },
      
      // Guarantees
      guarantees: {
        subtitle: 'Ваша безопасность',
        title: 'Гарантии и безопасность',
        item1: 'NDA по умолчанию, приватный стек, прозрачные SOW для каждого проекта',
        item2: '«Не покажем 3 полезных сценария в Start — вернём оплату»'
      },
      
      // About
      about: {
        subtitle: 'О нас',
        title: 'Кто создаёт ваши решения',
        text: 'Более 2.5 лет создаём AI-инструменты, боты и автоматизации для частных клиентов и бизнеса. Работаем с SUNO, генерацией изображений и видео, GitHub Copilot и Cursor. Говорим на русском, украинском и английском. Базируемся в Софии, работаем онлайн по всему миру.',
        skill: {
          messengerBots: 'Мессенджер-боты',
          andMore: '... и многие другие'
        }
      },
      
      // FAQ
      faq: {
        subtitle: 'Частые вопросы',
        title: 'FAQ',
        q1: {
          question: 'Нужна ли техническая подготовка для работы с нашими решениями?',
          answer: 'Нет, все решения создаются «под ключ». Вы получаете готовые кнопки и сценарии, которые работают в один клик. Мы проводим короткое обучение и оставляем понятные инструкции.'
        },
        q2: {
          question: 'Какие данные используются для работы AI?',
          answer: 'Только ваши данные и только с вашего согласия. Все проекты защищены NDA, используем приватные API ключи. Вы контролируете, какая информация передаётся в AI-модели.'
        },
        q3: {
          question: 'Сколько времени займёт у меня работа с системой?',
          answer: 'На старте — 1-2 часа для диагностики и обучения. Дальше вы работаете по готовым кнопкам: большинство сценариев занимают 10-30 секунд. Цель — освободить ваше время, а не отнять его.'
        },
        q4: {
          question: 'Можно ли начать с малого и масштабировать?',
          answer: 'Да, именно так мы и рекомендуем! Начните с пакета Start, проверьте подход на 5 сценариях. Если результат устроит — масштабируем с пакетом Pilot или Care с полной автоматизацией.'
        },
        q5: {
          question: 'Работаете ли вы с клиентами из других стран?',
          answer: 'Да, мы работаем онлайн с клиентами по всему миру. Говорим на русском, украинском и английском. Часовые пояса обычно не проблема — находим удобное время для созвонов.'
        }
      },
      
      // Contact
      contact: {
        subtitle: 'Начнём работу',
        title: 'Забронировать бесплатную диагностику',
        description: 'Заполните форму, и мы свяжемся с вами в течение 24 часов',
        nameLabel: 'Ваше имя *',
        namePlaceholder: 'Иван Иванов',
        nameError: 'Пожалуйста, введите ваше имя',
        contactLabel: 'Email или Telegram *',
        contactPlaceholder: 'email@example.com или @telegram',
        contactError: 'Пожалуйста, введите email или Telegram',
        packageLabel: 'Интересующий пакет (опционально)',
        packageDefault: 'Не выбран',
        packageCustom: 'Индивидуальное решение',
        messageLabel: 'Ваша задача (опционально)',
        messagePlaceholder: 'Расскажите кратко, что хотите автоматизировать...',
        gdprLabel: 'Согласен на обработку персональных данных согласно <a href="#privacy">политике конфиденциальности</a>',
        gdprError: 'Пожалуйста, подтвердите согласие на обработку персональных данных',
        submit: 'Отправить заявку',
        success: '✓ Спасибо! Ваша заявка принята. Свяжемся с вами в течение 24 часов.'
      },
      
      // Footer
      footer: {
        copyright: '© 2025 AI4Y. Все права защищены.'
      }
    },
    
    // Български (Bulgarian)
    bg: {
      // Header
      nav: {
        benefits: 'Предимства',
        services: 'Услуги',
        pricing: 'Цени',
        faq: 'Въпроси',
        contact: 'Контакт'
      },
      
      // Hero
      hero: {
        titleA: 'Вашият AI партньор: по-малко рутина — повече резултати',
        titleB: 'AI автоматизация и решения за 7-10 дни',
        titleC: 'Внедряваме AI без теория: бързи сценарии, измерим ефект',
        subtitle: 'AI влакът набира скорост всеки ден, отваряйки нови възможности за тези, които са готови да ги приемат. Ние сме вашите водачи в това стремително пътуване. Изследваме пазара на AI инструменти, подбираме оптимални решения, обучаваме екипа и ви съпътстваме по пътя към успеха.',
        cta1: 'Безплатна диагностика 20 мин',
        cta2: 'Пакети и цени',
        trust1: '3+ години работа с AI',
        trust2: 'София, работим онлайн'
      },
      
      // Values
      values: {
        subtitle: 'Защо ние',
        title: 'Три ключови предимства',
        description: 'Фокусираме се върху практични решения с измерими резултати',
        speed: {
          title: 'Скорост',
          text: 'Готови сценарии и пресети за 7-10 дни. Без дълги разработки — директно към резултати.'
        },
        simplicity: {
          title: 'Простота',
          text: 'Без сложна терминология. "Бутони" и сценарии под вашия дневен ред и работни процеси.'
        },
        measurability: {
          title: 'Измеримост',
          text: 'Фиксираме KPI и сравняваме преди/след. Виждате реална икономия на време и ресурси.'
        }
      },
      
      // Audience
      audience: {
        subtitle: 'За кого',
        title: 'За кого са нашите решения',
        tab1: 'Частни клиенти',
        tab2: 'Бизнес',
        personal: {
          item1: '<strong>Инвеститори и предприемачи</strong> — автоматизация на анализ на сделки, ROI/IRR изчисления, комуникация с брокери',
          item2: '<strong>Заети професионалисти</strong> — помощ с имейли, календар, документация, подготовка на материали',
          item3: '<strong>Тези, които искат да освободят време</strong> — делегиране на рутина на AI и фокусиране върху важното'
        },
        business: {
          item1: '<strong>Агенции за недвижими имоти</strong> — автоматизация на подбор на обекти, комуникация с клиенти, отчети',
          item2: '<strong>Електронна търговия и услуги</strong> — 24/7 чат ботове за поддръжка, обработка на поръчки, генериране на съдържание',
          item3: '<strong>Клиники и хотели</strong> — автоматизация на записвания, FAQ ботове, персонализирани комуникации'
        }
      },
      
      // Services
      services: {
        subtitle: 'Какво получавате',
        title: 'Комплексни AI решения',
        item1: {
          title: 'Изследване и подбор на инструменти',
          text: 'Помагаме да изследвате пазара на AI инструменти и да изберете оптималните за вашия бизнес'
        },
        item2: {
          title: 'Автоматизация до ключ',
          text: 'Make.com, n8n, Telegram ботове, интеграции с вашите системи'
        },
        item3: {
          title: 'Обучение и поддръжка',
          text: 'Кратки сесии и ръководства под вашия технологичен стек'
        },
        item4: {
          title: 'Поддръжка',
          text: 'Актуализации, експерименти с нови модели, редовни отчети'
        },
        tools: 'Инструменти, с които работим: Make, n8n, ChatGPT, Claude, Zapier, Airtable, Telegram ботове',
        servicesTitle: 'Нашите услуги',
        servicesList: 'Автоматизация • AI интеграции • AI агенти • Чат ботове • No-code разработка • Консултации'
      },
      
      // Cases
      cases: {
        subtitle: 'Примери за приложение',
        title: 'Типични случаи',
        description: 'Реални сценарии, които вече работят',
        case1: {
          title: '💼 Инвеститор',
          text: 'Автоматичен списък на обекти по критерии, изчисляване на ROI/IRR, генериране на въпроси към брокера, резюмиране на документи'
        },
        case2: {
          title: '📧 Офис работа',
          text: 'Резюмиране на дълги имейл вериги, генериране на чернови отговори, автоматични слотове в календара, подготовка на срещи'
        },
        case3: {
          title: '💬 Клиентска поддръжка',
          text: 'Q&A бот 24/7 за типични запитвания, ескалация на сложни въпроси, анализ на чести проблеми'
        },
        case4: {
          title: '✍️ Съдържание',
          text: 'Структури на статии, проверка на грешки и тон, генериране на варианти за различни аудитории, SEO оптимизация'
        }
      },
      
      // Process
      process: {
        subtitle: 'Как работи',
        title: 'Нашият процес',
        description: 'Прозрачен и структуриран подход от диагностика до резултати',
        step1: {
          title: 'Диагностика 20-60 мин',
          text: 'Определяме вашите цели и намираме "бързи победи" — задачи, където AI ще даде ефект веднага'
        },
        step2: {
          title: 'Дизайн на пилот',
          text: 'Избираме 1 ясна метрика за успех и планираме минимално решение за постигането ѝ'
        },
        step3: {
          title: 'Изграждане (2-4 седмици)',
          text: 'Създаваме и тестваме решението, демонстрация на вашите реални данни'
        },
        step4: {
          title: 'Обучение и пресети',
          text: 'Видео ръководства, инструкции и шаблони за самостоятелна употреба'
        },
        step5: {
          title: 'Поддръжка',
          text: 'Подобрения, отчети по KPI, адаптация към промени във вашите процеси'
        }
      },
      
      // Pricing
      pricing: {
        subtitle: 'Прозрачни цени',
        title: 'Пакети услуги',
        description: 'Изберете подходящ вариант или ще създадем индивидуално решение',
        popular: 'Популярен',
        start: {
          title: 'Start',
          price: '€350',
          period: 'еднократно',
          description: 'Идеален за първо запознаване с AI автоматизация',
          feature1: 'Диагностична сесия 60 мин',
          feature2: '5 готови AI пресети',
          feature3: 'Инструкции за използване',
          feature4: '1 седмица имейл поддръжка',
          cta: 'Избери Start'
        },
        pilot: {
          title: 'Pilot',
          price: '€3.5K',
          period: 'проект 2-4 седмици',
          description: 'Пълно внедряване на ключова автоматизация',
          feature1: '1 ключова AI верига',
          feature2: 'Интеграции с вашите системи',
          feature3: 'Обучителни сесии за екипа',
          feature4: '1 месец поддръжка',
          feature5: 'Отчет по KPI',
          cta: 'Избери Pilot'
        },
        care: {
          title: 'Care',
          price: '€2K',
          period: 'на месец',
          description: 'Постоянна поддръжка и развитие на решения',
          feature1: 'Редовни актуализации',
          feature2: 'Нови експерименти',
          feature3: 'Приоритетна поддръжка',
          feature4: 'Месечни отчети',
          feature5: 'Адаптация към промени',
          cta: 'Избери Care'
        },
        team: {
          title: 'Team Clinic',
          price: '€2.5K',
          period: 'мини обучение',
          description: 'Обучение на екип за работа с AI инструменти',
          feature1: '3-6 човека',
          feature2: 'Практически работилници',
          feature3: 'Персонални случаи',
          feature4: 'Материали и шаблони',
          feature5: '2 седмици Q&A поддръжка',
          cta: 'Избери Team Clinic'
        },
        ctaCustom: 'Подбери пакет за моята задача'
      },
      
      // Guarantees
      guarantees: {
        subtitle: 'Вашата сигурност',
        title: 'Гаранции и сигурност',
        item1: 'NDA по подразбиране, частен стек, прозрачни SOW за всеки проект',
        item2: '«Не покажем 3 полезни сценария в Start — връщаме парите»'
      },
      
      // About
      about: {
        subtitle: 'За нас',
        title: 'Кой създава вашите решения',
        text: 'Повече от 2.5 години създаваме AI инструменти, ботове и автоматизация за частни клиенти и бизнес. Работим със SUNO, генериране на изображения и видео, GitHub Copilot и Cursor. Говорим руски, украински и английски. Базирани в София, работим онлайн по целия свят.',
        skill: {
          messengerBots: 'Ботове за месинджъри',
          andMore: '... и много други'
        }
      },
      
      // FAQ
      faq: {
        subtitle: 'Чести въпроси',
        title: 'Въпроси и отговори',
        q1: {
          question: 'Необходима ли е техническа подготовка за работа с вашите решения?',
          answer: 'Не, всички решения се създават "до ключ". Получавате готови бутони и сценарии, които работят с едно кликване. Провеждаме кратко обучение и оставяме ясни инструкции.'
        },
        q2: {
          question: 'Какви данни се използват за работа на AI?',
          answer: 'Само вашите данни и само с вашето съгласие. Всички проекти са защитени с NDA, използваме частни API ключове. Вие контролирате каква информация се предава на AI моделите.'
        },
        q3: {
          question: 'Колко време ще отнеме у мен работата със системата?',
          answer: 'В началото — 1-2 часа за диагностика и обучение. После работите с готови бутони: повечето сценарии отнемат 10-30 секунди. Целта е да освободим времето ви, а не да го отнемем.'
        },
        q4: {
          question: 'Мога ли да започна малко и да мащабирам?',
          answer: 'Да, точно така препоръчваме! Започнете с пакет Start, проверете подхода на 5 сценария. Ако резултатът ви харесва — мащабираме с пакет Pilot или Care с пълна автоматизация.'
        },
        q5: {
          question: 'Работите ли с клиенти от други страни?',
          answer: 'Да, работим онлайн с клиенти по целия свят. Говорим руски, украински и английски. Часовите зони обикновено не са проблем — намираме удобно време за обаждания.'
        }
      },
      
      // Contact
      contact: {
        subtitle: 'Нека започнем',
        title: 'Резервирай безплатна диагностика',
        description: 'Попълнете формата и ще се свържем с вас в рамките на 24 часа',
        nameLabel: 'Вашето име *',
        namePlaceholder: 'Иван Иванов',
        nameError: 'Моля, въведете вашето име',
        contactLabel: 'Email или Telegram *',
        contactPlaceholder: 'email@example.com или @telegram',
        contactError: 'Моля, въведете email или Telegram',
        packageLabel: 'Интересуващ пакет (по желание)',
        packageDefault: 'Не е избран',
        packageCustom: 'Индивидуално решение',
        messageLabel: 'Вашата задача (по желание)',
        messagePlaceholder: 'Разкажете накратко какво искате да автоматизирате...',
        gdprLabel: 'Съгласен съм за обработка на лични данни съгласно <a href="#privacy">политиката за поверителност</a>',
        gdprError: 'Моля, потвърдете вашето съгласие за обработка на лични данни',
        submit: 'Изпрати запитване',
        success: '✓ Благодарим! Вашето запитване е получено. Ще се свържем с вас в рамките на 24 часа.'
      },
      
      // Footer
      footer: {
        copyright: '© 2025 AI4Y. Всички права запазени.'
      }
    }
  },
  
  /**
   * Получить текущий язык
   */
  getCurrentLang() {
    return this.currentLang;
  },
  
  /**
   * Установить язык
   */
  setLang(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('ai4y-lang', lang);
      return true;
    }
    return false;
  },
  
  /**
   * Получить перевод по ключу
   */
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback на английский
        value = this.translations['en'];
        for (const k2 of keys) {
          if (value && value[k2]) {
            value = value[k2];
          } else {
            return key; // Вернуть ключ если не найдено
          }
        }
        return value;
      }
    }
    
    return value;
  },
  
  /**
   * Инициализация из localStorage или браузера
   */
  init() {
    // Проверяем сохраненный язык
    const savedLang = localStorage.getItem('ai4y-lang');
    if (savedLang && this.translations[savedLang]) {
      this.currentLang = savedLang;
      return;
    }
    
    // Определяем язык браузера
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ru')) {
      this.currentLang = 'ru';
    } else if (browserLang.startsWith('bg')) {
      this.currentLang = 'bg';
    } else if (browserLang.startsWith('en')) {
      this.currentLang = 'en';
    } else {
      this.currentLang = 'ru'; // дефолт - русский
    }
    
    localStorage.setItem('ai4y-lang', this.currentLang);
  }
};

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}

// Делаем доступным глобально для использования в других скриптах
window.i18n = i18n;

