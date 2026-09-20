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