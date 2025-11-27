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

  // Handle external tab links (e.g. Footer)
  document.querySelectorAll('[data-tab-target]').forEach(link => {
    link.addEventListener('click', (e) => {
      // The smooth scroll listener will handle the scrolling part because of href="#services"
      // We just need to switch the tab
      const tabId = link.getAttribute('data-tab-target');
      const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
      if (tabBtn) {
        tabBtn.click();
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
          if (window.i18n) {
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
  // Section Content Reveal (Soft Transition)
  // ==========================================================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Find the container inside the section
      const container = entry.target.querySelector('.container');
      if (!container) return;

      if (entry.isIntersecting) {
        // Add visible class when section is in view
        container.classList.add('visible');
        container.classList.add('reveal-content'); // Ensure class is there
      } else {
        // Optional: Fade out when leaving to re-trigger effect on scroll back
        // This makes the "transition" feel active both ways
        container.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% of section is visible
    rootMargin: '-50px' // Offset to trigger slightly inward
  });

  document.querySelectorAll('section, footer').forEach(section => {
    const container = section.querySelector('.container');
    if (container) {
      container.classList.add('reveal-content');
      revealObserver.observe(section);
    }
  });

  // ==========================================================================
  // Parallax Background
  // ==========================================================================
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const fxGrid = document.querySelector('.fx-grid');
    const fxOrbs = document.querySelectorAll('.fx-orb');

    // Move grid slowly
    if (fxGrid) {
      fxGrid.style.transform = `perspective(500px) rotateX(60deg) translateY(${scrolled * 0.1}px)`;
    }

    // Move orbs at different speeds for depth
    fxOrbs.forEach((orb, index) => {
      const speed = index === 0 ? 0.05 : 0.08;
      // Maintain float animation by adding translate
      // Note: this overrides the CSS animation transform slightly, 
      // so we apply the scroll parallax to the top/margin property or use a wrapper.
      // Simpler approach: just transform.
      // Since there is a CSS keyframe animation on transform, directly setting transform here conflicts.
      // Better: Update top/bottom positions or use a wrapper. 
      // Let's leave the CSS animation alone to avoid conflict and just move the grid.
    });
  });

  // ==========================================================================
  // Page Navigation (Dots + Arrows) - Desktop Only
  // ==========================================================================
  if (window.innerWidth >= 1024) {
    createPageNavigation();
  }

  function createPageNavigation() {
    const footer = document.querySelector('footer');
    if (footer && !footer.id) footer.id = 'footer';

    // 1. Collect sections
    const sections = Array.from(document.querySelectorAll('section[id], footer'));
    
    // 2. Create Nav Container
    const navContainer = document.createElement('div');
    navContainer.className = 'page-nav';

    // --- Prev Button ---
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn nav-btn--prev hidden'; // Hidden initially
    prevBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" stroke-linecap="round" stroke-linejoin="round" transform="rotate(180 12 12)"/></svg>`;
    navContainer.appendChild(prevBtn);

    // --- Dots ---
    const dots = [];
    sections.forEach((section, index) => {
      const dot = document.createElement('div');
      dot.className = 'page-nav__dot';
      
      // Labels
      const keyMap = {
        'home': 'nav.home',
        'problems': 'nav.problems',
        'services': 'nav.solutions',
        'team': 'nav.team',
        'comparison': 'nav.comparison',
        'process': 'nav.process',
        'contact': 'footer.contacts',
        'footer': 'nav.info'
      };

      let key = keyMap[section.id];
      // Fallback if no key or section has weird id
      let label = section.id ? (section.id.charAt(0).toUpperCase() + section.id.slice(1)) : 'Section';
      
      if (key) {
        dot.setAttribute('data-i18n-label', key);
        // Set initial value from i18n if available
        if (window.i18n) {
          dot.setAttribute('data-label', window.i18n.t(key) || label);
        } else {
          dot.setAttribute('data-label', label);
        }
      } else {
        dot.setAttribute('data-label', label);
      }
      
      dot.setAttribute('data-target', section.id);
      
      // Click handling
      dot.addEventListener('click', () => {
         section.scrollIntoView({ behavior: 'smooth' });
      });
      
      navContainer.appendChild(dot);
      dots.push(dot);
    });

    // --- Next Button ---
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn nav-btn--next';
    nextBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    navContainer.appendChild(nextBtn);

    document.body.appendChild(navContainer);

    // 3. Logic: Intersection Observer
    // This observer tracks which section is currently "most visible"
    let currentIndex = 0;
    const visibilityMap = new Map();

    // Click Handlers (Define once, use current state)
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < sections.length - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
      }
    });

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const index = sections.indexOf(entry.target);
        if (index === -1) return;
        if (entry.isIntersecting) {
          visibilityMap.set(index, entry.intersectionRatio);
        } else {
          visibilityMap.set(index, 0);
        }
      });

      let maxRatio = 0;
      let visibleIndex = currentIndex;
      visibilityMap.forEach((ratio, idx) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          visibleIndex = idx;
        }
      });

      if (visibleIndex !== currentIndex) {
        currentIndex = visibleIndex;
        updateUI(currentIndex);
      }
    };

    const observerOptions = {
      root: null,
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec, idx) => {
      visibilityMap.set(idx, 0);
      observer.observe(sec);
    });

    // 4. Update UI Helper
    function updateUI(index) {
      // Update Dots
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });

      // Update Arrows State (Don't hide, just disable)
      // Prev Arrow
      if (index <= 0) {
        prevBtn.classList.add('disabled');
        prevBtn.disabled = true;
      } else {
        prevBtn.classList.remove('disabled');
        prevBtn.disabled = false;
      }

      // Next Arrow
      if (index >= sections.length - 1) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
      } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
      }
    }
    
    // Initial update
    updateUI(0);
  }

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
