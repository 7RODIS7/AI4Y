document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // Init i18n
  // ==========================================================================
  if (window.i18n) {
    window.i18n.init();

    // Lang Switcher Listeners
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        window.i18n.setLang(lang);
      });
    });
  }

  // ==========================================================================
  // Tabs Logic (Services Section)
  // ==========================================================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Show corresponding pane
      const tabId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(tabId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // Mobile Menu Toggle
  // ==========================================================================
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-active');
      
      // Toggle icon (simple animation)
      menuToggle.classList.toggle('active');
      
      // If we're opening the menu, we might want to style the nav for mobile
      // The CSS handles .mobile-only display, but we need a class for the nav itself when active on mobile
      // Note: In css/main.css, I need to ensure .nav has a mobile state style
      if (nav.classList.contains('mobile-active')) {
        Object.assign(nav.style, {
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: '80px',
          left: '0',
          width: '100%',
          background: '#030014',
          padding: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        });
      } else {
        nav.removeAttribute('style');
      }
    });
  }

  // ==========================================================================
  // Smooth Scrolling
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (nav && nav.classList.contains('mobile-active')) {
          nav.classList.remove('mobile-active');
          nav.removeAttribute('style');
        }

        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================================================
  // Form Handling
  // ==========================================================================
  const form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      
      // Simple translation check for button state
      const sendingText = window.i18n && window.i18n.currentLang === 'ru' ? 'Отправка...' : 'Sending...';
      const sentText = window.i18n && window.i18n.currentLang === 'ru' ? '✓ Отправлено' : '✓ Sent';

      btn.innerText = sendingText;
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        btn.innerText = sentText;
        btn.style.background = 'var(--color-success)';
        btn.style.color = '#000';
        form.reset();
        
        setTimeout(() => {
          // Restore original text (which might be translated)
          // Better to re-fetch from i18n to be safe
          if (window.i18n) {
             // We need to find the key for the button to restore it correctly
             // For now just restoring the one stored at click time is okay, 
             // but if lang changed mid-flight (unlikely) it might be off.
             // Let's just use the attribute update method if available.
             const key = btn.getAttribute('data-i18n');
             if (key) {
                btn.innerText = window.i18n.t(key);
             } else {
                btn.innerText = originalText;
             }
          } else {
             btn.innerText = originalText;
          }
          
          btn.disabled = false;
          btn.removeAttribute('style');
        }, 3000);
      }, 1000);
    });
  }

  // ==========================================================================
  // Intersection Observer for Animations
  // ==========================================================================
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate cards and sections
  document.querySelectorAll('.problem-card, .service-item, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ==========================================================================
  // Page Navigation (Dots) - Desktop Only
  // ==========================================================================
  if (window.innerWidth >= 1024) {
    createPageNavigation();
  }

  function createPageNavigation() {
    // Ensure footer has ID for nav
    const footer = document.querySelector('footer');
    if (footer && !footer.id) footer.id = 'footer';

    // Select sections that matter for navigation
    // Header is fixed, so we use the Hero section (id="home") as the top anchor
    const sections = document.querySelectorAll('section[id], footer');
    
    const navContainer = document.createElement('div');
    navContainer.className = 'page-nav';
    
    sections.forEach((section, index) => {
      const dot = document.createElement('div');
      dot.className = 'page-nav__dot';
      
      // Determine label
      let label = section.id || 'Home';
      // Capitalize
      label = label.charAt(0).toUpperCase() + label.slice(1);
      
      // Manual map for better labels
      const labelMap = {
        'home': 'Top',
        'problems': 'Задачи',
        'services': 'Решения',
        'comparison': 'Эффект',
        'process': 'Процесс',
        'contact': 'Контакты',
        'footer': 'Info'
      };
      if (labelMap[section.id]) label = labelMap[section.id];
      
      dot.setAttribute('data-label', label);
      dot.setAttribute('data-target', section.id);
      
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => {
         section.scrollIntoView({ behavior: 'smooth' });
      });
      
      navContainer.appendChild(dot);
    });
    
    document.body.appendChild(navContainer);
    
    // Observer for dots
    const dotsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find corresponding dot
          const targetId = entry.target.id;
          if (!targetId) return;
          
          // Update active class
          document.querySelectorAll('.page-nav__dot').forEach(d => {
             d.classList.toggle('active', d.getAttribute('data-target') === targetId);
          });
        }
      });
    }, { threshold: 0.1 }); // Lower threshold for footer
    
    sections.forEach(s => dotsObserver.observe(s));
  }
  
  // ==========================================================================
  // Auto-Add Scroll Hints (Next/Prev Section Arrows)
  // ==========================================================================
  const mainSections = document.querySelectorAll('section, header.header, footer'); // Include footer
  const sectionsList = Array.from(mainSections); // Convert to array for index access

  sectionsList.forEach((section, index) => {
    // --- Next Arrow (Skip last) ---
    if (index < sectionsList.length - 1) {
      const nextSection = sectionsList[index + 1];
      
      const nextHint = document.createElement('div');
      nextHint.className = 'scroll-hint scroll-hint--next';
      nextHint.innerHTML = `
        <span>Next</span>
        <svg viewBox="0 0 24 24"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `;
      
      nextHint.addEventListener('click', () => {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      });
      
      // Only append if section is relative/absolute positioned container
      // Header might need special handling if it's fixed
      if (!section.classList.contains('header')) {
         section.appendChild(nextHint);
      }
    }

    // --- Prev Arrow (Skip first) ---
    if (index > 0) {
      const prevSection = sectionsList[index - 1];
      
      // Skip if prev section is header (don't show "up" arrow on Hero section)
      if (prevSection.classList.contains('header')) return;

      const prevHint = document.createElement('div');
      prevHint.className = 'scroll-hint scroll-hint--prev';
      prevHint.innerHTML = `
        <svg viewBox="0 0 24 24" style="transform: rotate(180deg)"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>Prev</span>
      `;
      
      prevHint.addEventListener('click', () => {
        prevSection.scrollIntoView({ behavior: 'smooth' });
      });

      if (!section.classList.contains('header')) {
        section.appendChild(prevHint);
      }
    }
  });

  // ==========================================================================
  // Cookie Banner & Privacy Modal
  // ==========================================================================
  
  // Cookie Banner Logic
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAcceptBtn = document.getElementById('cookieAccept');
  
  if (cookieBanner && cookieAcceptBtn) {
    // Check if already accepted
    if (!localStorage.getItem('cookieConsent')) {
      // Show after delay
      setTimeout(() => {
        cookieBanner.classList.add('active');
      }, 2000);
    }

    cookieAcceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'true');
      cookieBanner.classList.remove('active');
    });
  }

  // Privacy Modal Logic
  const privacyModal = document.getElementById('privacyModal');
  const privacyTriggers = document.querySelectorAll('#privacyTrigger, #cookiePrivacyLink, #privacyTriggerFooter');
  const modalClose = document.querySelector('.modal__close');
  const modalOverlay = document.querySelector('.modal__overlay');

  if (privacyModal) {
    const openModal = (e) => {
      e.preventDefault();
      privacyModal.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeModal = () => {
      privacyModal.classList.remove('open');
      document.body.style.overflow = ''; // Restore scroll
    };

    privacyTriggers.forEach(trigger => {
      if (trigger) trigger.addEventListener('click', openModal);
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && privacyModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

});
