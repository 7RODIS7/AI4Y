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

});
