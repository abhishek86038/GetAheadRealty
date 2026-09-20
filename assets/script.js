/* ==========================================================================
   ⭐ DEVELOPER PROFILE CONFIGURATION (EDIT YOUR DETAILS HERE)
   Yahan aap apna GitHub, LinkedIn, Instagram, Twitter, Email, Portfolio
   ya koi bhi naya social media link easily add ya edit kar sakte hain.
   ========================================================================== */
window.DEVELOPER_CONFIG = {
  name: "Abhishek",
  title: "Full-Stack Web Developer",
  tagline: "Specialized in High-Performance Web Apps, 3D Graphics & Modern UI/UX.",
  avatarUrl: "https://github.com/abhishek8638.png", // GitHub DP or custom photo URL
  links: [
    {
      name: "GitHub",
      handle: "@abhishek8638",
      url: "https://github.com/abhishek8638",
      icon: "github",
      accent: "#24292e"
    },
    {
      name: "LinkedIn",
      handle: "Connect on LinkedIn",
      url: "https://linkedin.com/in/abhishek", // 👈 Edit your LinkedIn URL
      icon: "linkedin",
      accent: "#0A66C2"
    },
    {
      name: "Instagram",
      handle: "@abhishek_official",
      url: "https://instagram.com/your_handle", // 👈 Edit your Instagram URL
      icon: "instagram",
      accent: "#E1306C"
    },
    {
      name: "Twitter / X",
      handle: "@abhishek",
      url: "https://x.com/your_handle", // 👈 Edit your Twitter/X URL
      icon: "twitter",
      accent: "#111111"
    },
    {
      name: "Portfolio / Website",
      handle: "Visit Portfolio",
      url: "https://github.com/abhishek8638", // 👈 Edit your Portfolio URL
      icon: "globe",
      accent: "#1b6b4a"
    },
    {
      name: "Direct Email",
      handle: "abhishek8638@users.noreply.github.com",
      url: "mailto:abhishek8638@users.noreply.github.com", // 👈 Edit your Email
      icon: "mail",
      accent: "#c25e3d"
    }
    /* 👉 Naya link add karne ke liye bas yahan niche comma (,) laga kar copy-paste karein:
    , {
      name: "WhatsApp",
      handle: "+91 9876543210",
      url: "https://wa.me/919876543210",
      icon: "phone",
      accent: "#25D366"
    }
    */
  ]
};

// Get Ahead Realty — Next-Level Interactive Logic
document.addEventListener('DOMContentLoaded', function () {
  
  // 0. Initialize Floating Developer Contact Widget on Left Corner
  initDeveloperContactWidget();
  
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

  // 6. Interactive 3D Card Tilt Effect (Perspective 3D Physics)
  var tiltCards = document.querySelectorAll('.card, .diff-card, .svc-card, .testi-card, .fee-step-card, .fit-col');
  tiltCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = ((y - centerY) / centerY) * -7;
      var rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // 7. Interactive 3D Architectural Property Engine (Three.js)
  initProperty3DScene();
});

function initProperty3DScene() {
  var canvas = document.getElementById('property3dCanvas');
  var container = document.getElementById('hero3dContainer');
  if (!canvas || !container || typeof THREE === 'undefined') return;

  var width = container.clientWidth || 480;
  var height = container.clientHeight || 460;

  // Scene setup
  var scene = new THREE.Scene();

  // Perspective camera with isometric real-estate view
  var camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
  camera.position.set(22, 18, 22);
  camera.lookAt(0, 1.5, 0);

  // WebGL Renderer with Transparent Alpha
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Lighting System
  var ambientLight = new THREE.AmbientLight(0xfff8ee, 0.85);
  scene.add(ambientLight);

  var sunLight = new THREE.DirectionalLight(0xfff3db, 1.25);
  sunLight.position.set(20, 30, 15);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  sunLight.shadow.camera.near = 10;
  sunLight.shadow.camera.far = 70;
  sunLight.shadow.camera.left = -15;
  sunLight.shadow.camera.right = 15;
  sunLight.shadow.camera.top = 15;
  sunLight.shadow.camera.bottom = -15;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  var fillLight = new THREE.DirectionalLight(0x7fa084, 0.45);
  fillLight.position.set(-15, 10, -15);
  scene.add(fillLight);

  var warmInteriorLight = new THREE.PointLight(0xffaa44, 1.5, 15);
  warmInteriorLight.position.set(0, 3.2, 0);
  scene.add(warmInteriorLight);

  // Group for all property elements
  var propertyGroup = new THREE.Group();
  scene.add(propertyGroup);

  // Materials with Australian Organic Luxury Palette
  var groundMat = new THREE.MeshLambertMaterial({ color: 0x5a835f }); // Lush lawn
  var pathMat = new THREE.MeshLambertMaterial({ color: 0xd9ceb9 }); // Sandstone path
  var wallWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf4f0e6, roughness: 0.4 });
  var wallDarkMat = new THREE.MeshStandardMaterial({ color: 0x222a24, roughness: 0.5 });
  var timberMat = new THREE.MeshStandardMaterial({ color: 0xb2542a, roughness: 0.6 }); // Terracotta timber
  var roofMat = new THREE.MeshStandardMaterial({ color: 0x1a241d, roughness: 0.3 });
  var glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x88ccdd,
    transparent: true,
    opacity: 0.75,
    roughness: 0.1,
    transmission: 0.6,
    thickness: 0.5
  });
  var poolWaterMat = new THREE.MeshStandardMaterial({
    color: 0x2bb0c4,
    roughness: 0.1,
    metalness: 0.2,
    transparent: true,
    opacity: 0.88
  });
  var poolTileMat = new THREE.MeshLambertMaterial({ color: 0xe8e2d5 });
  var foliageMat = new THREE.MeshLambertMaterial({ color: 0x3d5c41 });
  var trunkMat = new THREE.MeshLambertMaterial({ color: 0x5c4230 });

  // 1. Isometric Base Island / Terrain Slab
  var baseGeo = new THREE.CylinderGeometry(9.8, 9.8, 1.2, 32);
  var baseMesh = new THREE.Mesh(baseGeo, groundMat);
  baseMesh.position.y = -0.6;
  baseMesh.receiveShadow = true;
  propertyGroup.add(baseMesh);

  // Base Rim
  var rimGeo = new THREE.CylinderGeometry(9.9, 9.9, 0.4, 32);
  var rimMat = new THREE.MeshLambertMaterial({ color: 0x3b533f });
  var rimMesh = new THREE.Mesh(rimGeo, rimMat);
  rimMesh.position.y = -1.1;
  propertyGroup.add(rimMesh);

  // 2. Sandstone Terrace & Entry Courtyard
  var terraceGeo = new THREE.BoxGeometry(11, 0.1, 9);
  var terraceMesh = new THREE.Mesh(terraceGeo, pathMat);
  terraceMesh.position.set(0.2, 0.06, 0.5);
  terraceMesh.receiveShadow = true;
  propertyGroup.add(terraceMesh);

  // 3. Ground Floor Pavilion (Main Living)
  var gfGeo = new THREE.BoxGeometry(6.4, 2.6, 5.2);
  var gfMesh = new THREE.Mesh(gfGeo, wallWhiteMat);
  gfMesh.position.set(-0.6, 1.36, 0);
  gfMesh.castShadow = true;
  gfMesh.receiveShadow = true;
  propertyGroup.add(gfMesh);

  // Ground Floor Large Glass Facade (Living room opening to garden)
  var gfGlassGeo = new THREE.BoxGeometry(4.8, 2.1, 0.15);
  var gfGlassMesh = new THREE.Mesh(gfGlassGeo, glassMat);
  gfGlassMesh.position.set(-0.6, 1.3, 2.62);
  propertyGroup.add(gfGlassMesh);

  // 4. Cantilevered Upper Floor (Master Suite & Terrace)
  var ufGeo = new THREE.BoxGeometry(5.2, 2.3, 4.4);
  var ufMesh = new THREE.Mesh(ufGeo, wallDarkMat);
  ufMesh.position.set(0.6, 3.8, -0.4);
  ufMesh.castShadow = true;
  ufMesh.receiveShadow = true;
  propertyGroup.add(ufMesh);

  // Upper Floor Timber Feature Slats
  var slatGeo = new THREE.BoxGeometry(0.12, 2.1, 3.8);
  var slatMesh = new THREE.Mesh(slatGeo, timberMat);
  slatMesh.position.set(3.22, 3.8, -0.4);
  slatMesh.castShadow = true;
  propertyGroup.add(slatMesh);

  // Upper Floor Glass Balcony Window
  var ufGlassGeo = new THREE.BoxGeometry(3.6, 1.8, 0.12);
  var ufGlassMesh = new THREE.Mesh(ufGlassGeo, glassMat);
  ufGlassMesh.position.set(0.6, 3.8, 1.82);
  propertyGroup.add(ufGlassMesh);

  // Modern Cantilevered Roof
  var roofGeo = new THREE.BoxGeometry(6.2, 0.25, 5.4);
  var roofMesh = new THREE.Mesh(roofGeo, roofMat);
  roofMesh.position.set(0.6, 5.05, -0.4);
  roofMesh.castShadow = true;
  propertyGroup.add(roofMesh);

  // Ground Floor Flat Roof / Upper Deck
  var gfRoofGeo = new THREE.BoxGeometry(6.8, 0.2, 5.6);
  var gfRoofMesh = new THREE.Mesh(gfRoofGeo, roofMat);
  gfRoofMesh.position.set(-0.6, 2.72, 0);
  gfRoofMesh.castShadow = true;
  propertyGroup.add(gfRoofMesh);

  // 5. Pergola / Alfresco Dining Canopy
  for (var i = 0; i < 5; i++) {
    var beamGeo = new THREE.BoxGeometry(0.15, 0.2, 3.2);
    var beamMesh = new THREE.Mesh(beamGeo, timberMat);
    beamMesh.position.set(-3.2 + (i * 0.5), 2.6, 2.2);
    beamMesh.castShadow = true;
    propertyGroup.add(beamMesh);
  }

  // Pergola Pillars
  var pillar1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.5, 0.18), wallDarkMat);
  pillar1.position.set(-3.2, 1.3, 3.6);
  pillar1.castShadow = true;
  propertyGroup.add(pillar1);

  var pillar2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.5, 0.18), wallDarkMat);
  pillar2.position.set(-1.2, 1.3, 3.6);
  pillar2.castShadow = true;
  propertyGroup.add(pillar2);

  // 6. Swimming Pool & Deck
  var poolDeckGeo = new THREE.BoxGeometry(4.2, 0.15, 3.2);
  var poolDeckMesh = new THREE.Mesh(poolDeckGeo, poolTileMat);
  poolDeckMesh.position.set(4.4, 0.08, 1.8);
  poolDeckMesh.receiveShadow = true;
  propertyGroup.add(poolDeckMesh);

  var poolWaterGeo = new THREE.BoxGeometry(3.4, 0.12, 2.4);
  var poolWaterMesh = new THREE.Mesh(poolWaterGeo, poolWaterMat);
  poolWaterMesh.position.set(4.4, 0.12, 1.8);
  propertyGroup.add(poolWaterMesh);

  // 7. Landscaped Australian Trees & Garden Elements
  function createTree(x, z, scale) {
    var treeGroup = new THREE.Group();
    var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 1.4 * scale, 8), trunkMat);
    trunk.position.y = 0.7 * scale;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    var foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2 * scale, 1), foliageMat);
    foliage.position.y = (1.4 + 0.8) * scale;
    foliage.castShadow = true;
    treeGroup.add(foliage);

    var foliageTop = new THREE.Mesh(new THREE.DodecahedronGeometry(0.85 * scale, 1), foliageMat);
    foliageTop.position.y = (2.2 + 0.8) * scale;
    foliageTop.castShadow = true;
    treeGroup.add(foliageTop);

    treeGroup.position.set(x, 0.05, z);
    propertyGroup.add(treeGroup);
  }

  createTree(-5.8, -4.2, 1.1);
  createTree(-6.6, 0.5, 0.85);
  createTree(5.6, -4.6, 1.0);
  createTree(6.8, -1.8, 0.75);

  // Shrubs
  function createBush(x, z, r) {
    var bush = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 8), foliageMat);
    bush.position.set(x, r * 0.8, z);
    bush.castShadow = true;
    propertyGroup.add(bush);
  }
  createBush(-4.4, 3.8, 0.45);
  createBush(-4.8, 3.2, 0.35);
  createBush(2.2, 3.4, 0.4);
  createBush(6.8, 3.2, 0.5);

  // 8. Interactive Mouse & Touch Drag Controls
  var isDragging = false;
  var previousMousePosition = { x: 0, y: 0 };
  var targetRotationY = -0.45;
  var targetRotationX = 0.05;
  var currentRotationY = -0.45;
  var currentRotationX = 0.05;
  var autoRotateSpeed = 0.0035;

  propertyGroup.rotation.y = targetRotationY;
  propertyGroup.rotation.x = targetRotationX;

  function onMouseDown(e) {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e) {
    if (!isDragging) {
      // Subtle parallax tilt on hover
      var rect = container.getBoundingClientRect();
      var normX = (e.clientX - rect.left) / rect.width - 0.5;
      var normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationX = normY * 0.25;
      return;
    }
    var deltaX = e.clientX - previousMousePosition.x;
    var deltaY = e.clientY - previousMousePosition.y;

    targetRotationY += deltaX * 0.008;
    targetRotationX += deltaY * 0.005;

    // Clamp vertical tilt
    targetRotationX = Math.max(-0.25, Math.min(0.35, targetRotationX));

    previousMousePosition = { x: e.clientX, y: e.clientY };
  }

  function onMouseUp() {
    isDragging = false;
  }

  // Touch handlers for mobile
  function onTouchStart(e) {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }

  function onTouchMove(e) {
    if (!isDragging || e.touches.length !== 1) return;
    var deltaX = e.touches[0].clientX - previousMousePosition.x;
    var deltaY = e.touches[0].clientY - previousMousePosition.y;

    targetRotationY += deltaX * 0.01;
    targetRotationX += deltaY * 0.006;
    targetRotationX = Math.max(-0.25, Math.min(0.35, targetRotationX));

    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }

  function onTouchEnd() {
    isDragging = false;
  }

  container.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  container.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('touchend', onTouchEnd);

  // Resize Handler
  function onWindowResize() {
    if (!container || !renderer || !camera) return;
    var newW = container.clientWidth || 480;
    var newH = container.clientHeight || 460;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  }
  window.addEventListener('resize', onWindowResize);

  // Animation Loop with Smooth Damping
  var clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);

    var elapsedTime = clock.getElapsedTime();

    // Auto rotate when user is not actively dragging
    if (!isDragging) {
      targetRotationY += autoRotateSpeed;
    }

    // Smooth inertia interpolation
    currentRotationY += (targetRotationY - currentRotationY) * 0.08;
    currentRotationX += (targetRotationX - currentRotationX) * 0.08;

    propertyGroup.rotation.y = currentRotationY;
    propertyGroup.rotation.x = currentRotationX;

    // Subtle gentle water undulation & interior glow breathe
    poolWaterMesh.position.y = 0.12 + Math.sin(elapsedTime * 2.5) * 0.015;
    warmInteriorLight.intensity = 1.4 + Math.sin(elapsedTime * 1.8) * 0.3;

    renderer.render(scene, camera);
  }

  animate();
}

/* ==========================================================================
   👨‍💻 FLOATING DEVELOPER CONTACT WIDGET (LEFT CORNER)
   ========================================================================== */
function initDeveloperContactWidget() {
  if (document.getElementById('devFloatWidget')) return;

  var config = window.DEVELOPER_CONFIG || {
    name: "Abhishek",
    title: "Full-Stack Developer",
    tagline: "Building high-performance modern web experiences.",
    avatarUrl: "https://github.com/abhishek8638.png",
    links: []
  };

  var icons = {
    code: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    twitter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    globe: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    arrowRight: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>',
    close: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
  };

  // Build Links HTML
  var linksHtml = '';
  if (config.links && config.links.length) {
    config.links.forEach(function (link) {
      var iconSvg = icons[link.icon] || icons.globe;
      linksHtml += `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="dev-link-row" style="--accent-color:${link.accent || '#1b6b4a'};">
          <div class="dev-link-icon">${iconSvg}</div>
          <div class="dev-link-info">
            <div class="dev-link-name">${link.name}</div>
            <div class="dev-link-handle">${link.handle}</div>
          </div>
          <div class="dev-link-action">${icons.arrowRight}</div>
        </a>
      `;
    });
  }

  // Create Widget Elements
  var widgetContainer = document.createElement('div');
  widgetContainer.className = 'dev-float-widget';
  widgetContainer.id = 'devFloatWidget';

  widgetContainer.innerHTML = `
    <div class="dev-modal-backdrop" id="devModalBackdrop"></div>
    <div class="dev-modal-card" id="devModalCard" aria-hidden="true" role="dialog" aria-label="Contact with Developer">
      <div class="dev-card-header">
        <div class="dev-card-user">
          <div class="dev-avatar-wrap">
            <img src="${config.avatarUrl}" alt="${config.name}" class="dev-avatar-img" onerror="this.src='assets/logo.png';" />
            <span class="dev-status-indicator" title="Available for projects"></span>
          </div>
          <div>
            <div class="dev-card-badge">👨‍💻 Developer Profile</div>
            <h3 class="dev-card-title">Contact with Developer</h3>
            <div class="dev-card-sub">${config.name} &bull; ${config.title}</div>
          </div>
        </div>
        <button class="dev-card-close" id="devCardClose" aria-label="Close Developer Info">${icons.close}</button>
      </div>

      <p class="dev-card-tagline">${config.tagline}</p>

      <div class="dev-links-container">
        ${linksHtml}
      </div>

      <div class="dev-card-footer">
        <span>Need a website or custom app?</span>
        <a href="mailto:abhishek8638@users.noreply.github.com" class="dev-footer-cta">Get in Touch &rarr;</a>
      </div>
    </div>

    <button class="dev-float-btn" id="devFloatBtn" aria-label="Contact with Developer" title="Contact with Developer" aria-expanded="false">
      <span class="dev-btn-pulse"></span>
      <span class="dev-btn-icon">${icons.code}</span>
      <span class="dev-btn-tooltip">Contact Developer</span>
    </button>
  `;

  document.body.appendChild(widgetContainer);

  // Widget Toggle Logic
  var floatBtn = document.getElementById('devFloatBtn');
  var modalCard = document.getElementById('devModalCard');
  var backdrop = document.getElementById('devModalBackdrop');
  var closeBtn = document.getElementById('devCardClose');

  function openWidget() {
    modalCard.classList.add('active');
    backdrop.classList.add('active');
    floatBtn.classList.add('open');
    floatBtn.setAttribute('aria-expanded', 'true');
    modalCard.setAttribute('aria-hidden', 'false');
  }

  function closeWidget() {
    modalCard.classList.remove('active');
    backdrop.classList.remove('active');
    floatBtn.classList.remove('open');
    floatBtn.setAttribute('aria-expanded', 'false');
    modalCard.setAttribute('aria-hidden', 'true');
  }

  function toggleWidget(e) {
    if (e) e.stopPropagation();
    if (modalCard.classList.contains('active')) {
      closeWidget();
    } else {
      openWidget();
    }
  }

  floatBtn.addEventListener('click', toggleWidget);
  if (closeBtn) closeBtn.addEventListener('click', closeWidget);
  if (backdrop) backdrop.addEventListener('click', closeWidget);

  // Close on Escape Key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalCard.classList.contains('active')) {
      closeWidget();
    }
  });
}