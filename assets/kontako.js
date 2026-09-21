/**
 * KONTAKO STUDIO — Interactive UI Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Handler
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(other => other.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Section 4: Vertical Slat / Tab Switcher
  const statSlats = document.querySelectorAll('.stat-slat');
  const statsHeading = document.getElementById('statsHeading');
  const statsCaption = document.getElementById('statsCaption');

  const slatData = {
    '02': {
      title: 'QUALITY & CRAFTSMANSHIP',
      caption: 'Precision-engineered timber frames and bespoke Swiss glazing ensure unmatched longevity and refined minimalism across every square metre.'
    },
    '03': {
      title: 'WEB3 OWNERSHIP',
      caption: 'Fractionalized real-world asset registry and transparent digital architectural deed verification built for seamless global mobility.'
    },
    '04': {
      title: 'ENERGY NET ZERO',
      caption: 'Every residence produces more energy than it consumes through integrated solar glass, geothermal heating, and passive thermal mass envelope engineering.'
    },
    '05': {
      title: 'GLOBAL MARKETPLACE',
      caption: 'Direct developer-to-buyer luxury architectural exchange with verified yield metrics, instant smart-contract escrow, and concierge settlement.'
    },
    '06': {
      title: 'AFFORDABLE LUXURY',
      caption: 'Modular pre-fabrication reduces construction schedules by 60% without compromising on bespoke bespoke architectural craftsmanship.'
    }
  };

  statSlats.forEach(slat => {
    slat.addEventListener('click', () => {
      statSlats.forEach(s => s.classList.remove('active'));
      slat.classList.add('active');

      const num = slat.dataset.num;
      if (slatData[num] && statsHeading && statsCaption) {
        statsHeading.style.opacity = '0';
        statsCaption.style.opacity = '0';
        
        setTimeout(() => {
          statsHeading.textContent = slatData[num].title;
          statsCaption.textContent = slatData[num].caption;
          statsHeading.style.opacity = '1';
          statsCaption.style.opacity = '1';
        }, 180);
      }
    });
  });

  // 3. Mobile Menu Overlay Toggle
  const menuBtn = document.getElementById('kontakoMenuBtn');
  const menuModal = document.getElementById('kontakoMenuModal');
  const menuCloseBtn = document.getElementById('kontakoMenuCloseBtn');
  const menuLinks = document.querySelectorAll('.menu-modal-links a');

  if (menuBtn && menuModal) {
    menuBtn.addEventListener('click', () => {
      menuModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (menuCloseBtn && menuModal) {
    menuCloseBtn.addEventListener('click', () => {
      menuModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuModal) {
        menuModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // 4. Smooth Scroll for Floating Buttons
  const heroFloatingBtn = document.getElementById('heroFloatingBtn');
  if (heroFloatingBtn) {
    heroFloatingBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const quoteSection = document.getElementById('quoteSection');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const footerArrowBtn = document.getElementById('footerArrowBtn');
  if (footerArrowBtn) {
    footerArrowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Thank you for contacting Kontako Studio. Our architectural advisory team will connect with you shortly.');
    });
  }
});
