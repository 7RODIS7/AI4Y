/* ==========================================================================
   Internationalization (i18n) Module
   ========================================================================== */

const i18n = {
  currentLang: 'ru',
  
  translations: {
    // ==========================================================================
    // RUSSIAN (Default)
    // ==========================================================================
    ru: {
      nav: {
        problems: 'Задачи',
        solutions: 'Решения',
        comparison: 'Эффект',
        process: 'Процесс',
        team: 'Команда',
        contact: 'Обсудить задачу',
        home: 'Главная',
        info: 'Инфо'
      },
      hero: {
        badge: 'AI Консультация, Интеграция, Автоматизация',
        title: 'Автоматизация бизнеса',
        titleHighlight: 'на базе AI',
        subtitle: 'Превращаем хаос рутины в структурированные процессы. Внедряем AI-ассистентов, чат-ботов и автоматизируем рабочие потоки под ключ.',
        ctaConsult: 'Заказать консультацию',
        ctaMore: 'Смотреть возможности'
      },
      problems: {
        title: 'Знакомые ситуации?',
        subtitle: 'Если вы отвечаете «Да» на эти вопросы, пора внедрять AI.',
        card1: {
          title: 'Рутина съедает время',
          text: '«Есть ли у вас монотонная работа, которая не требует навыков, но отнимает часы каждый день?»'
        },
        card2: {
          title: 'Потеря лидов',
          text: '«Бывает ли, что клиент или заказ теряется в переписке, потому что менеджер забыл ответить?»'
        },
        card3: {
          title: 'Хаос в данных',
          text: '«Приходится ли собирать данные вручную из разных таблиц и чатов для одного отчета?»'
        },
        card4: {
          title: 'Медленная поддержка',
          text: '«Клиенты ждут ответа часами, хотя спрашивают одно и то же (цены, сроки, адрес)?»'
        }
      },
      services: {
        title: 'Что мы умеем',
        subtitle: 'От простых ботов до комплексных систем управления бизнесом',
        tabs: {
          assistants: 'Ассистенты и Боты',
          automation: 'Автоматизация',
          content: 'Контент и Анализ',
          special: 'Спец. Решения'
        },
        assistants: {
          item1: { title: 'AI Чат-боты для клиентов', text: 'FAQ, поддержка 24/7, квалификация лидов.' },
          item2: { title: 'RAG Боты (База знаний)', text: 'Поиск ответов по вашим PDF, Google Docs и сайту.' },
          item3: { title: 'Внутренние ассистенты', text: 'Помощники для сотрудников: поиск по регламентам, онбординг.' },
          item4: { title: 'Умные автоответчики', text: 'Анализ входящих тикетов и генерация черновиков ответов.' }
        },
        automation: {
          item1: { title: 'Обработка заявок', text: 'Парсинг заявок (текст/фото) и автоматическая запись в CRM.' },
          item2: { title: 'Синхронизация данных', text: 'Импорт/экспорт товаров и заказов между площадками.' },
          item3: { title: 'Генерация документов', text: 'Автоформирование КП, инвойсов и презентаций в PDF.' },
          item4: { title: 'Make / n8n Интеграции', text: 'Связка любых сервисов по API в единую систему.' }
        },
        content: {
          item1: { title: 'Генерация статей и постов', text: 'SEO-контент, посты для соцсетей, описания товаров.' },
          item2: { title: 'Сентимент-анализ', text: 'Анализ отзывов и сообщений: определение тональности и намерений.' },
          item3: { title: 'Суммаризация', text: 'Краткая выжимка из длинных текстов, встреч и документов.' },
          item4: { title: 'Перевод и Улучшение', text: 'Proofreading, humanize текстов, адаптация под стиль бренда.' }
        },
        special: {
          item1: { title: 'Ассистент Риелтора', text: 'Подбор объектов, ответы по каталогу, планирование показов.' },
          item2: { title: 'E-commerce Ассистент', text: 'Управление ценами, описаниями и автопостинг товаров.' },
          item3: { title: 'Векторные базы знаний', text: 'Создание и поддержка корпоративных баз знаний под ключ.' }
        }
      },
      team: {
        title: 'Экспертиза Enterprise-уровня',
        subtitle: 'Опыт работы в мировых технологических гигантах (Sitecore, IBM, MUK), доступный вашему бизнесу',
        member1: {
          role: 'Техническая Архитектура',
          name: 'Lead AI Engineer',
          stat1: '12+ лет в Enterprise разработке',
          stat2: '3 года R&D в области Generative AI',
          stat3: 'Архитектура масштабируемых решений'
        },
        member2: {
          role: 'Стратегия и Процессы',
          name: 'Business Development',
          stat1: 'Technical Sales Expert',
          stat2: 'Многолетний опыт в дистрибуции',
          stat3: 'Построение эффективных B2B продаж'
        }
      },
      comparison: {
        title: 'Результат внедрения',
        subtitle: 'Наглядная разница между ручным трудом и AI-автоматизацией',
        before: {
          title: 'Ручной хаос',
          item1: 'Ручной ввод и рутина',
          item2: 'Долгое ожидание ответа',
          item3: 'Человеческий фактор',
          item4: 'Операционка и выгорание'
        },
        after: {
          title: 'Системный порядок',
          item1: 'Автоматизация процессов',
          item2: 'Поддержка клиентов 24/7',
          item3: 'Минимизация ошибок',
          item4: 'Масштабирование бизнеса'
        }
      },
      process: {
        title: 'Как мы работаем',
        step1: { title: 'Аудит и Консультация', text: 'Разбираем ваши бизнес-процессы, находим "узкие горлышки" и точки роста.' },
        step2: { title: 'Прототип / Demo', text: 'Демонстрируем решение на ваших данных (MVP) или внедряем шаблоны.' },
        step3: { title: 'Интеграция', text: 'Полноценное внедрение, настройка Make/n8n, подключение к API.' },
        step4: { title: 'Поддержка', text: 'Обучение сотрудников, мониторинг работы и доработки.' }
      },
      cta: {
        title: 'Готовы автоматизировать бизнес?',
        subtitle: 'Мы не продаем "кота в мешке". Стоимость зависит от сложности задачи.',
        price1: '<strong>Консультация:</strong> от 50€ (разбор задачи, план действий)',
        price2: '<strong>Demo решение:</strong> от 150€ (быстрый прототип)',
        price3: '<strong>Custom интеграция:</strong> индивидуальный расчет',
        form: {
          title: 'Заявка на консультацию',
          name: 'Ваше имя',
          contact: 'Telegram или Email',
          message: 'Кратко о задаче (например: хочу бота для поддержки)',
          btn: 'Отправить',
          note: 'Мы свяжемся с вами в течение 24 часов',
          successTitle: 'Спасибо!',
          successText: 'Ваша заявка успешно отправлена. Мы свяжемся с вами в течение 24 часов.',
          errorText: 'Произошла ошибка. Попробуйте позже или напишите нам напрямую.'
        }
      },
      footer: {
        slogan: 'Интеллектуальная автоматизация для вашего роста.',
        menu: 'Меню',
        services: 'Услуги',
        socials: 'Мы в соцсетях',
        contacts: 'Контакты',
        location: 'София, Болгария (Online worldwide)',
        privacy: 'Политика конфиденциальности',
        copyright: '© 2025 AI4Y. All rights reserved.'
      },
      cookies: {
        text: 'Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с нашей',
        link: 'политикой конфиденциальности',
        btn: 'Хорошо'
      },
      privacy: {
        title: 'Политика конфиденциальности',
        intro: 'Мы серьезно относимся к вашей конфиденциальности. Этот сайт собирает минимально необходимое количество данных для функционирования.',
        dataCollection: 'Сбор данных',
        dataText: 'Мы собираем только те данные, которые вы добровольно предоставляете через формы обратной связи (имя, контактные данные). Эти данные используются исключительно для связи с вами.',
        cookiesTitle: 'Файлы Cookie',
        cookiesText: 'Мы используем технические файлы cookie для сохранения ваших настроек (например, выбранного языка). Мы не используем сторонние рекламные трекеры.',
        rights: 'Ваши права',
        rightsText: 'Вы можете в любой момент запросить удаление ваших данных, написав нам на contact@ai4y.com.'
      }
    },

    // ==========================================================================
    // ENGLISH
    // ==========================================================================
      en: {
      nav: {
        problems: 'Challenges',
        solutions: 'Solutions',
        comparison: 'Impact',
        process: 'Process',
        team: 'Team',
        contact: 'Discuss Challenge',
        home: 'Home',
        info: 'Info'
      },
      hero: {
        badge: 'AI Consulting, Integration, Automation',
        title: 'Business Automation',
        titleHighlight: 'Powered by AI',
        subtitle: 'We turn routine chaos into structured processes. Implementing AI assistants, chatbots, and turnkey workflow automation.',
        ctaConsult: 'Book Consultation',
        ctaMore: 'Explore Solutions'
      },
      problems: {
        title: 'Familiar Situations?',
        subtitle: 'If you answer "Yes" to these questions, it\'s time to implement AI.',
        card1: {
          title: 'Routine Kills Time',
          text: '"Do you have monotonous work that requires no skills but takes hours every day?"'
        },
        card2: {
          title: 'Lost Leads',
          text: '"Do clients or orders get lost in chats because a manager forgot to reply?"'
        },
        card3: {
          title: 'Data Chaos',
          text: '"Do you have to manually gather data from different sheets and chats for a single report?"'
        },
        card4: {
          title: 'Slow Support',
          text: '"Do clients wait hours for answers, even when asking the same things (prices, terms, address)?"'
        }
      },
      services: {
        title: 'Our Capabilities',
        subtitle: 'From simple bots to complex integrations (RAG, Make, n8n)',
        tabs: {
          assistants: 'Assistants & Bots',
          automation: 'Automation',
          content: 'Content & Analysis',
          special: 'Special Solutions'
        },
        assistants: {
          item1: { title: 'AI Client Chatbots', text: 'FAQ, 24/7 support, lead qualification.' },
          item2: { title: 'RAG Bots (Knowledge Base)', text: 'Answers from your PDFs, Google Docs, and website.' },
          item3: { title: 'Internal Assistants', text: 'Employee helpers: regulation search, onboarding.' },
          item4: { title: 'Smart Auto-replies', text: 'Incoming ticket analysis and draft response generation.' }
        },
        automation: {
          item1: { title: 'Order Processing', text: 'Request parsing (text/photo) and auto-entry into CRM.' },
          item2: { title: 'Data Sync', text: 'Import/export of products and orders between platforms.' },
          item3: { title: 'Document Generation', text: 'Auto-creation of proposals, invoices, and PDF presentations.' },
          item4: { title: 'Make / n8n Integrations', text: 'Connecting any services via API into a unified system.' }
        },
        content: {
          item1: { title: 'Article & Post Generation', text: 'SEO content, social media posts, product descriptions.' },
          item2: { title: 'Sentiment Analysis', text: 'Review and message analysis: determining tone and intent.' },
          item3: { title: 'Summarization', text: 'Brief summaries of long texts, meetings, and documents.' },
          item4: { title: 'Translation & Improvement', text: 'Proofreading, humanizing texts, adapting to brand style.' }
        },
        special: {
          item1: { title: 'Realtor Assistant', text: 'Property matching, catalog answers, viewing scheduling.' },
          item2: { title: 'E-commerce Assistant', text: 'Price management, descriptions, and auto-posting products.' },
          item3: { title: 'Vector Knowledge Bases', text: 'Turnkey creation and support of corporate knowledge bases.' }
        }
      },
      team: {
        title: 'Enterprise-Level Expertise',
        subtitle: 'Experience from global tech giants (Sitecore, IBM, MUK), adapted for your business',
        member1: {
          role: 'Technical Architecture',
          name: 'Lead AI Engineer',
          stat1: '12+ years in Enterprise development',
          stat2: '3 years R&D in Generative AI',
          stat3: 'Scalable Solution Architecture'
        },
        member2: {
          role: 'Strategy & Processes',
          name: 'Business Development',
          stat1: 'Technical Sales Expert',
          stat2: 'Years of distribution experience',
          stat3: 'Building B2B sales pipelines'
        }
      },
      comparison: {
        title: 'Impact of AI',
        subtitle: 'Visible difference between manual work and AI automation',
        before: {
          title: 'Manual Chaos',
          item1: 'Manual entry & routine',
          item2: 'Long response times',
          item3: 'Human factor',
          item4: 'Operational burnout'
        },
        after: {
          title: 'Systematic Order',
          item1: 'Process Automation',
          item2: '24/7 Support',
          item3: 'Error Minimization',
          item4: 'Business Scalability'
        }
      },
      process: {
        title: 'How We Work',
        step1: { title: 'Audit & Consultation', text: 'We analyze your processes, finding bottlenecks and growth points.' },
        step2: { title: 'Prototype / Demo', text: 'We demonstrate the solution on your data (MVP) or implement templates.' },
        step3: { title: 'Integration', text: 'Full implementation, Make/n8n setup, API connection.' },
        step4: { title: 'Support', text: 'Employee training, monitoring, and refinements.' }
      },
      cta: {
        title: 'Ready to Automate?',
        subtitle: 'We don\'t sell "black boxes". Cost depends on task complexity.',
        price1: '<strong>Consultation:</strong> from €50 (task analysis, action plan)',
        price2: '<strong>Demo Solution:</strong> from €150 (quick prototype)',
        price3: '<strong>Custom Integration:</strong> individual quote',
        form: {
          title: 'Request Consultation',
          name: 'Your Name',
          contact: 'Telegram or Email',
          message: 'Briefly about the task (e.g., support bot wanted)',
          btn: 'Send Request',
          note: 'We will contact you within 24 hours',
          successTitle: 'Thank you!',
          successText: 'Your request has been sent successfully. We will contact you within 24 hours.',
          errorText: 'An error occurred. Please try again later or contact us directly.'
        }
      },
      footer: {
        slogan: 'Intelligent automation for your growth.',
        menu: 'Menu',
        services: 'Services',
        socials: 'Socials',
        contacts: 'Contacts',
        location: 'Sofia, Bulgaria (Online worldwide)',
        privacy: 'Privacy Policy',
        copyright: '© 2025 AI4Y. All rights reserved.'
      },
      cookies: {
        text: 'We use cookies to improve your experience. By continuing to visit this site you agree to our',
        link: 'privacy policy',
        btn: 'Got it'
      },
      privacy: {
        title: 'Privacy Policy',
        intro: 'We take your privacy seriously. This website collects the minimum amount of data necessary for its operation.',
        dataCollection: 'Data Collection',
        dataText: 'We only collect data that you voluntarily provide via contact forms (name, contact details). This data is used solely to contact you.',
        cookiesTitle: 'Cookies',
        cookiesText: 'We use technical cookies to save your preferences (e.g. selected language). We do not use third-party advertising trackers.',
        rights: 'Your Rights',
        rightsText: 'You can request the deletion of your data at any time by emailing us at contact@ai4y.com.'
      }
    },

    // ==========================================================================
    // BULGARIAN
    // ==========================================================================
    bg: {
      nav: {
        problems: 'Задачи',
        solutions: 'Решения',
        comparison: 'Ефект',
        process: 'Процес',
        team: 'Екип',
        contact: 'Обсъждане на задача',
        home: 'Начало',
        info: 'Инфо'
      },
      hero: {
        badge: 'AI Консултации, Интеграция, Автоматизация',
        title: 'Бизнес Автоматизация',
        titleHighlight: 'чрез AI',
        subtitle: 'Превръщаме хаоса от рутина в структурирани процеси. Внедряваме AI асистенти, чатботове и автоматизираме работни потоци до ключ.',
        ctaConsult: 'Заяви консултация',
        ctaMore: 'Виж възможностите'
      },
      problems: {
        title: 'Познати ситуации?',
        subtitle: 'Ако отговаряте с «Да» на тези въпроси, време е да внедрите AI.',
        card1: {
          title: 'Рутината "изяжда" времето',
          text: '«Имате ли монотонна работа, която не изисква умения, но отнема часове всеки ден?»'
        },
        card2: {
          title: 'Загуба на клиенти',
          text: '«Случва ли се клиент или поръчка да се загубят в чата, защото мениджърът е забравил да отговори?»'
        },
        card3: {
          title: 'Хаос в данните',
          text: '«Налага ли се да събирате данни ръчно от различни таблици и чатове за един отчет?»'
        },
        card4: {
          title: 'Бавна поддръжка',
          text: '«Клиентите чакат отговор с часове, въпреки че питат едно и също (цени, срокове, адрес)?»'
        }
      },
      services: {
        title: 'Какво умеем',
        subtitle: 'От прости ботове до сложни интеграции (RAG, Make, n8n)',
        tabs: {
          assistants: 'Асистенти и Ботове',
          automation: 'Автоматизация',
          content: 'Съдържание и Анализ',
          special: 'Спец. Решения'
        },
        assistants: {
          item1: { title: 'AI Чатботове за клиенти', text: 'FAQ, поддръжка 24/7, квалификация на лийдове.' },
          item2: { title: 'RAG Ботове (База знания)', text: 'Търсене на отговори във вашите PDF, Google Docs и сайт.' },
          item3: { title: 'Вътрешни асистенти', text: 'Помощници за служители: търсене в регламенти, онбординг.' },
          item4: { title: 'Умни автоматични отговори', text: 'Анализ на входящи тикети и генериране на чернови отговори.' }
        },
        automation: {
          item1: { title: 'Обработка на заявки', text: 'Парсинг на заявки (текст/снимка) и автоматичен запис в CRM.' },
          item2: { title: 'Синхронизация на данни', text: 'Импорт/экспорт на продукти и поръчки между платформи.' },
          item3: { title: 'Генериране на документи', text: 'Автоматично създаване на оферти, фактури и презентации в PDF.' },
          item4: { title: 'Make / n8n Интеграции', text: 'Свързване на всякакви услуги чрез API в единна система.' }
        },
        content: {
          item1: { title: 'Генериране на статии и постове', text: 'SEO съдържание, постове за социални мрежи, описания на продукти.' },
          item2: { title: 'Сентимент анализ', text: 'Анализ на отзиви и съобщения: определяне на тоналност и намерения.' },
          item3: { title: 'Резюмиране', text: 'Кратко обобщение на дълги текстове, срещи и документи.' },
          item4: { title: 'Превод и Подобряване', text: 'Proofreading, humanize на текстове, адаптация към стила на бранда.' }
        },
        special: {
          item1: { title: 'Асистент за Брокери', text: 'Подбор на имоти, отговори по каталог, планиране на огледи.' },
          item2: { title: 'E-commerce Асистент', text: 'Управление на цени, описания и автопостинг на продукти.' },
          item3: { title: 'Векторни бази знания', text: 'Създаване и поддръжка на корпоративни бази знания до ключ.' }
        }
      },
      team: {
        title: 'Експертиза от Enterprise ниво',
        subtitle: 'Опит от световни технологични гиганти (Sitecore, IBM, MUK), адаптиран за вашия бизнес',
        member1: {
          role: 'Техническа Архитектура',
          name: 'Lead AI Engineer',
          stat1: '12+ години в Enterprise разработка',
          stat2: '3 години R&D в областта на Generative AI',
          stat3: 'Архитектура на мащабируеми решения'
        },
        member2: {
          role: 'Стратегия и Процеси',
          name: 'Business Development',
          stat1: 'Technical Sales Expert',
          stat2: 'Многогодишен опит в дистрибуцията',
          stat3: 'Изграждане на B2B продажби'
        }
      },
      comparison: {
        title: 'Резултат от внедряване',
        subtitle: 'Видима разлика между ръчен труд и AI автоматизация',
        before: {
          title: 'Ръчен хаос',
          item1: 'Ръчно въвеждане и рутина',
          item2: 'Бавни отговори',
          item3: 'Човешки фактор',
          item4: 'Оперативна работа'
        },
        after: {
          title: 'Системен ред',
          item1: 'Автоматизация на процеси',
          item2: 'Поддръжка 24/7',
          item3: 'Минимизиране на грешки',
          item4: 'Мащабиране на бизнеса'
        }
      },
      process: {
        title: 'Как работим',
        step1: { title: 'Одит и Консултация', text: 'Разглеждаме вашите бизнес процеси, намираме "тесните места" и точките за растеж.' },
        step2: { title: 'Прототип / Demo', text: 'Демонстрираме решение с вашите данни (MVP) или внедряваме шаблони.' },
        step3: { title: 'Интеграция', text: 'Пълноценно внедряване, настройка на Make/n8n, свързване с API.' },
        step4: { title: 'Поддръжка', text: 'Обучение на служители, мониторинг на работата и доработки.' }
      },
      cta: {
        title: 'Готови за автоматизация?',
        subtitle: 'Цената зависи от сложността на задачата.',
        price1: '<strong>Консултация:</strong> от 50€ (анализ на задачата, план за действие)',
        price2: '<strong>Demo решение:</strong> от 150€ (бърз прототип)',
        price3: '<strong>Custom интеграция:</strong> индивидуална оферта',
        form: {
          title: 'Заявка за консултация',
          name: 'Вашето име',
          contact: 'Telegram или Email',
          message: 'Накратко за задачата (напр: искам бот за поддръжка)',
          btn: 'Изпрати',
          note: 'Ще се свържем с вас в рамките на 24 часа',
          successTitle: 'Благодаря!',
          successText: 'Вашата заявка е изпратена успешно. Ще се свържем с вас в рамките на 24 часа.',
          errorText: 'Възникна грешка. Моля, опитайте по-късно или се свържете с нас директно.'
        }
      },
      footer: {
        slogan: 'Интелигентна автоматизация за вашия растеж.',
        menu: 'Меню',
        services: 'Услуги',
        socials: 'Социални мрежи',
        contacts: 'Контакти',
        location: 'София, България (Online worldwide)',
        privacy: 'Политика за поверителност',
        copyright: '© 2025 AI4Y. Всички права запазени.'
      },
      cookies: {
        text: 'Използваме бисквитки за подобряване на работата на сайта. Продължавайки да използвате сайта, се съгласявате с нашата',
        link: 'политика за поверителност',
        btn: 'Разбрах'
      },
      privacy: {
        title: 'Политика за поверителност',
        intro: 'Ние се отнасяме сериозно към вашата поверителност. Този сайт събира минимално необходимото количество данни за функциониране.',
        dataCollection: 'Събиране на данни',
        dataText: 'Събираме само данни, които доброволно предоставяте чрез форми за контакт (име, контакти). Тези данни се използват само за връзка с вас.',
        cookiesTitle: 'Бисквитки',
        cookiesText: 'Използваме технически бисквитки за запазване на настройките (напр. избран език). Не използваме рекламни тракери на трети страни.',
        rights: 'Вашите права',
        rightsText: 'Можете да поискате изтриване на вашите данни по всяко време, като ни пишете на contact@ai4y.com.'
      }
    }
  },

  /**
   * Get current language
   */
  getCurrentLang() {
    return this.currentLang;
  },

  /**
   * Set language and update texts
   */
  setLang(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('ai4y-lang', lang);
      this.updatePage();
      return true;
    }
    return false;
  },

  /**
   * Update all text elements on page
   */
  updatePage() {
    // 1. Update text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        // If translation contains HTML tags, use innerHTML
        if (translation.includes('<')) {
          el.innerHTML = translation;
        } else {
          el.innerText = translation;
        }
      }
    });

    // 2. Update placeholders
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) {
        input.placeholder = translation;
      }
    });

    // 3. Update data-label (for tooltips)
    const labeled = document.querySelectorAll('[data-i18n-label]');
    labeled.forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      const translation = this.t(key);
      if (translation) {
        el.setAttribute('data-label', translation);
      }
    });

    // 4. Update Active State in Switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });

    // 4. Update HTML lang attribute
    document.documentElement.lang = this.currentLang;
  },

  /**
   * Get translation by key
   */
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return null;
      }
    }
    
    return value;
  },

  /**
   * Init
   */
  init() {
    // Check saved
    const savedLang = localStorage.getItem('ai4y-lang');
    if (savedLang && this.translations[savedLang]) {
      this.currentLang = savedLang;
    } else {
      // Check browser
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('ru')) this.currentLang = 'ru';
      else if (browserLang.startsWith('bg')) this.currentLang = 'bg';
      else this.currentLang = 'en'; // Fallback to EN if not RU or BG? Or keep RU as default? User said "audience Russian speakers, Bulgarians or English speakers"
      
      // Let's default to RU if detection fails, as per user context, 
      // but if browser is clearly EN or BG, switch to it.
      if (!['ru', 'en', 'bg'].includes(this.currentLang)) {
        this.currentLang = 'ru';
      }
    }

    this.updatePage();
  }
};

// Export for usage
window.i18n = i18n;
