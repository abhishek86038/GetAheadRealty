// Get Ahead Realty — Next-Level Interactive Logic
document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Top Reading Scroll Progress Indicator
  var progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', function () {
    var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

  // 2. Mobile Navigation Toggle
  var mobileNav = document.getElementById('primaryNav');
  var menuToggle = document.getElementById('menuToggle');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      // Prevent background body scroll when mobile menu is open
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Smooth IntersectionObserver Scroll Reveal
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('in');
    });
  }

  // 4. Interactive Property & SMSF ROI Calculator
  var depositInput = document.getElementById('calcDeposit');
  var budgetInput = document.getElementById('calcBudget');
  var depositDisplay = document.getElementById('depositVal');
  var budgetDisplay = document.getElementById('budgetVal');
  var borrowingDisplay = document.getElementById('calcBorrowing');
  var cashflowDisplay = document.getElementById('calcCashflow');

  function calculatePropertyMetrics() {
    if (!depositInput || !budgetInput) return;

    var deposit = parseInt(depositInput.value, 10) || 120000;
    var budget = parseInt(budgetInput.value, 10) || 650000;

    if (depositDisplay) depositDisplay.textContent = '$' + deposit.toLocaleString();
    if (budgetDisplay) budgetDisplay.textContent = '$' + budget.toLocaleString();

    var borrowing = Math.max(0, budget - deposit);
    var annualRentalYield = budget * 0.054; // 5.4% average yield in research corridors
    var annualInterestAndCosts = (borrowing * 0.063) + 3200; // 6.3% rate + holding costs
    var netAnnualCashflow = annualRentalYield - annualInterestAndCosts;
    var weeklyNet = Math.round(netAnnualCashflow / 52);

    if (borrowingDisplay) {
      borrowingDisplay.textContent = '$' + borrowing.toLocaleString();
    }
    if (cashflowDisplay) {
      if (weeklyNet >= 0) {
        cashflowDisplay.textContent = '+$' + weeklyNet + '/wk';
        cashflowDisplay.className = 'calc-metric-val moss';
      } else {
        cashflowDisplay.textContent = '-$' + Math.abs(weeklyNet) + '/wk';
        cashflowDisplay.className = 'calc-metric-val';
      }
    }
  }

  if (depositInput && budgetInput) {
    depositInput.addEventListener('input', calculatePropertyMetrics);
    budgetInput.addEventListener('input', calculatePropertyMetrics);
    calculatePropertyMetrics();
  }

  // 5. Micro-Market Street Simulator Toggle Logic
  var simButtons = document.querySelectorAll('.sim-btn');
  var cardLeft = document.getElementById('simCardLeft');
  var cardRight = document.getElementById('simCardRight');

  if (simButtons.length && cardLeft && cardRight) {
    simButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        simButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var pocket = btn.getAttribute('data-pocket');
        if (pocket === 'left') {
          cardLeft.style.opacity = '1';
          cardLeft.style.transform = 'scale(1.02)';
          cardLeft.style.boxShadow = 'var(--shadow-md)';
          cardRight.style.opacity = '0.45';
          cardRight.style.transform = 'scale(0.98)';
          cardRight.style.boxShadow = 'none';
        } else {
          cardRight.style.opacity = '1';
          cardRight.style.transform = 'scale(1.02)';
          cardRight.style.boxShadow = 'var(--shadow-md)';
          cardLeft.style.opacity = '0.45';
          cardLeft.style.transform = 'scale(0.98)';
          cardLeft.style.boxShadow = 'none';
        }
      });
    });

    // Initialize with left side active emphasis
    cardLeft.style.transform = 'scale(1.02)';
    cardLeft.style.boxShadow = 'var(--shadow-md)';
    cardRight.style.opacity = '0.7';
  }
});