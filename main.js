// =========================================================
// Die kleinen Strolche — Hero Canvas
// Vanilla Three.js Umschrift des 21st.dev Festivity Hero,
// angepasst auf Kita-Farbpalette und Wald-Stimmung.
// =========================================================

import * as THREE from "three";

// ---------------- Three.js Hero Scene ----------------
(function initHero() {
  const canvas = document.getElementById("webgl");
  if (!canvas) return;

  const getCanvasSize = () => {
    const rect = canvas.getBoundingClientRect();
    return {
      width: rect.width || window.innerWidth,
      height: rect.height || window.innerHeight
    };
  };

  const initialSize = getCanvasSize();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(25, initialSize.width / initialSize.height, 0.1, 1000);
  camera.position.z = 24;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(initialSize.width, initialSize.height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ---- Camera rotation state
  let isMouseDown = false;
  let mouseDownX = 0;
  let mouseDownY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let rotationX = 0;
  let rotationY = 0;

  const onMouseDown = (event) => {
    isMouseDown = true;
    mouseDownX = event.clientX;
    mouseDownY = event.clientY;
    canvas.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    isMouseDown = false;
    canvas.style.cursor = "grab";
  };
  const onMouseMoveCam = (event) => {
    if (!isMouseDown) return;
    const deltaX = event.clientX - mouseDownX;
    const deltaY = event.clientY - mouseDownY;
    targetRotationY += deltaX * 0.008;
    targetRotationX += deltaY * 0.008;
    targetRotationX = Math.max(-0.8, Math.min(0.8, targetRotationX));
    mouseDownX = event.clientX;
    mouseDownY = event.clientY;
  };

  canvas.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);
  window.addEventListener("mousemove", onMouseMoveCam);

  // Touch fallback
  canvas.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isMouseDown = true;
      mouseDownX = e.touches[0].clientX;
      mouseDownY = e.touches[0].clientY;
    }
  }, { passive: true });
  window.addEventListener("touchend", () => { isMouseDown = false; });
  window.addEventListener("touchmove", (e) => {
    if (!isMouseDown || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - mouseDownX;
    const deltaY = e.touches[0].clientY - mouseDownY;
    targetRotationY += deltaX * 0.008;
    targetRotationX += deltaY * 0.008;
    targetRotationX = Math.max(-0.8, Math.min(0.8, targetRotationX));
    mouseDownX = e.touches[0].clientX;
    mouseDownY = e.touches[0].clientY;
  }, { passive: true });

  // ---- Sphere data (from reference, pruned slightly for balance)
  const radii = [1, 0.6, 0.8, 0.4, 0.9, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.5, 0.6, 0.7, 0.3, 0.4, 0.8, 0.7, 0.5, 0.4, 0.6, 0.35, 0.38, 0.9, 0.3, 0.6, 0.4, 0.2, 0.35, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.55, 0.42, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3, 0.3, 0.6, 0.4, 0.2, 0.52, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.8, 0.7, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3];

  const positions = [
    { x: 0, y: 0, z: 0 }, { x: 1.2, y: 0.9, z: -0.5 }, { x: 1.8, y: -0.3, z: 0 },
    { x: -1, y: -1, z: 0 }, { x: -1, y: 1.62, z: 0 }, { x: -1.65, y: 0, z: -0.4 },
    { x: -2.13, y: -1.54, z: -0.4 }, { x: 0.8, y: 0.94, z: 0.3 }, { x: 0.5, y: -1, z: 1.2 },
    { x: -0.16, y: -1.2, z: 0.9 }, { x: 1.5, y: 1.2, z: 0.8 }, { x: 0.5, y: -1.58, z: 1.4 },
    { x: -1.5, y: 1, z: 1.15 }, { x: -1.5, y: -1.5, z: 0.99 }, { x: -1.5, y: -1.5, z: -1.9 },
    { x: 1.85, y: 0.8, z: 0.05 }, { x: 1.5, y: -1.2, z: -0.75 }, { x: 0.9, y: -1.62, z: 0.22 },
    { x: 0.45, y: 2, z: 0.65 }, { x: 2.5, y: 1.22, z: -0.2 }, { x: 2.35, y: 0.7, z: 0.55 },
    { x: -1.8, y: -0.35, z: 0.85 }, { x: -1.02, y: 0.2, z: 0.9 }, { x: 0.2, y: 1, z: 1 },
    { x: -2.88, y: 0.7, z: 1 }, { x: -2, y: -0.95, z: 1.5 }, { x: -2.3, y: 2.4, z: -0.1 },
    { x: -2.5, y: 1.9, z: 1.2 }, { x: -1.8, y: 0.37, z: 1.2 }, { x: -2.4, y: 1.42, z: 0.05 },
    { x: -2.72, y: -0.9, z: 1.1 }, { x: -1.8, y: -1.34, z: 1.67 }, { x: -1.6, y: 1.66, z: 0.91 },
    { x: -2.8, y: 1.58, z: 1.69 }, { x: -2.97, y: 2.3, z: 0.65 }, { x: 1.1, y: -0.2, z: -1.45 },
    { x: -4, y: 1.78, z: 0.38 }, { x: 0.12, y: 1.4, z: -1.29 }, { x: -1.64, y: 1.4, z: -1.79 },
    { x: -3.5, y: -0.58, z: 0.1 }, { x: -0.1, y: -1, z: -2 }, { x: -4.5, y: 0.55, z: -0.5 },
    { x: -3.87, y: 0, z: 1 }, { x: -4.6, y: -0.1, z: 0.65 }, { x: -3, y: 1.5, z: -0.7 },
    { x: -0.5, y: 0.2, z: -1.5 }, { x: -1.3, y: -0.45, z: -1.5 }, { x: -3.35, y: 0.25, z: -1.5 },
    { x: -4.76, y: -1.26, z: 0.4 }, { x: -4.32, y: 0.85, z: 1.4 }, { x: -3.5, y: -1.82, z: 0.9 },
    { x: -3.6, y: -0.6, z: 1.46 }, { x: -4.55, y: -1.5, z: 1.63 }, { x: -3.8, y: -1.15, z: 2.1 },
    { x: -2.9, y: -0.25, z: 1.86 }, { x: -2.2, y: -0.4, z: 1.86 }, { x: -5.1, y: -0.24, z: 1.86 },
    { x: -5.27, y: 1.24, z: 0.76 }, { x: -5.27, y: 2, z: -0.4 }, { x: -6.4, y: 0.4, z: 1 },
    { x: -5.15, y: 0.95, z: 2 }, { x: -6.2, y: 0.5, z: -0.8 }, { x: -4, y: 0.08, z: 1.8 },
    { x: 2, y: -0.95, z: 1.5 }, { x: 2.3, y: 2.4, z: -0.1 }, { x: 2.5, y: 1.9, z: 1.2 },
    { x: 1.8, y: 0.37, z: 1.2 }, { x: 3.24, y: 0.6, z: 1.05 }, { x: 2.72, y: -0.9, z: 1.1 },
    { x: 1.8, y: -1.34, z: 1.67 }, { x: 1.6, y: 1.99, z: 0.91 }, { x: 2.8, y: 1.58, z: 1.69 },
    { x: 2.97, y: 2.3, z: 0.65 }, { x: -1.3, y: -0.2, z: -2.5 }, { x: 4, y: 1.78, z: 0.38 },
    { x: 1.72, y: 1.4, z: -1.29 }, { x: 2.5, y: -1.2, z: -2 }, { x: 3.5, y: -0.58, z: 0.1 },
    { x: 0.1, y: 0.4, z: -2.42 }, { x: 4.5, y: 0.55, z: -0.5 }, { x: 3.87, y: 0, z: 1 },
    { x: 4.6, y: -0.1, z: 0.65 }, { x: 3, y: 1.5, z: -0.7 }, { x: 2.3, y: 0.6, z: -2.6 },
    { x: 4, y: 1.5, z: -1.6 }, { x: 3.35, y: 0.25, z: -1.5 }, { x: 4.76, y: -1.26, z: 0.4 },
    { x: 4.32, y: 0.85, z: 1.4 }, { x: 3.5, y: -1.82, z: 0.9 }, { x: 3.6, y: -0.6, z: 1.46 },
    { x: 4.55, y: -1.5, z: 1.63 }, { x: 3.8, y: -1.15, z: 2.1 }, { x: 2.9, y: -0.25, z: 1.86 },
    { x: 2.2, y: -0.4, z: 1.86 }, { x: 5.1, y: -0.24, z: 1.86 }, { x: 5.27, y: 1.24, z: 0.76 },
    { x: 5.27, y: 2, z: -0.4 }, { x: 6.4, y: 0.4, z: 1 }, { x: 5.15, y: 0.95, z: 2 },
    { x: 6.2, y: 0.5, z: -0.8 }, { x: 4, y: 0.08, z: 1.8 }
  ];

  // Emoji mix fuer die Kita-Welt. Natur, Tiere, Spielzeug, Kreatives, Fahrzeuge.
  const emojis = [
    "🎈", "🌳", "⚽", "🏀", "🦕", "🐻", "🎨", "🌟",
    "🚗", "📚", "🦒", "🐶", "🌈", "🦋", "🍎", "🎵",
    "🐸", "🌻", "🧸", "🍭", "🚂", "🦖", "🐝", "🎪"
  ];

  // Renders an emoji onto a transparent canvas and returns a Three.js texture.
  const makeEmojiTexture = (emoji) => {
    const size = 256;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d");
    ctx.font = `${Math.round(size * 0.78)}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Nudge baseline so emoji sits optically centred
    ctx.fillText(emoji, size / 2, size / 2 + size * 0.04);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.needsUpdate = true;
    return tex;
  };

  const emojiTextures = emojis.map(makeEmojiTexture);

  const group = new THREE.Group();
  const spheres = [];

  // Thin the crowd: keep roughly every second sphere plus the biggest anchors.
  // Produces a lighter, airier arrangement that is easier to read over.
  const keepIndices = new Set();
  positions.forEach((_, i) => {
    if (i % 2 === 0) keepIndices.add(i);
    if ((radii[i] ?? 0) >= 0.85) keepIndices.add(i);
  });
  const usedPositions = positions.filter((_, i) => keepIndices.has(i));
  const usedRadii = radii.filter((_, i) => keepIndices.has(i));

  usedPositions.forEach((pos, index) => {
    const radius = usedRadii[index] ?? 0.5;
    const material = new THREE.SpriteMaterial({
      map: emojiTextures[index % emojiTextures.length],
      transparent: true,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(pos.x, pos.y, pos.z);
    // Sprites need roughly 2.4x the radius to visually match the old spheres.
    const s = Math.max(0.55, radius * 2.4);
    sprite.scale.set(s, s, 1);
    sprite.userData = { originalPosition: { ...pos }, radius: s * 0.5 };
    spheres.push(sprite);
    group.add(sprite);
  });

  // Shift the whole group a touch to the right on desktop so the copy has air.
  const placeGroup = () => {
    if (window.innerWidth > 1000) {
      group.position.x = 3.6;
      group.position.y = -0.4;
      group.scale.setScalar(1);
    } else {
      // Mobile and tablet: canvas has a fixed banner height, balls are
      // centered within it (no vertical offset needed).
      group.position.x = 0;
      group.position.y = 0;
      group.scale.setScalar(window.innerWidth > 640 ? 0.85 : 0.75);
    }
  };
  placeGroup();
  scene.add(group);

  // Sprites werden nicht von Licht beleuchtet, daher kein Setup noetig.
  // Der CanvasTexture-Emoji bringt seine eigenen Farben mit.

  // ---- Animation helpers
  const lerp = (start, end, factor) => start + (end - start) * factor;
  const tempVector = new THREE.Vector3();

  const animateValue = (obj, prop, start, end, duration, delay = 0) => {
    setTimeout(() => {
      const startTime = performance.now();
      const tick = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        obj[prop] = start + (end - start) * eased;
        if (progress < 1) requestAnimationFrame(tick);
      };
      tick();
    }, delay);
  };

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const forces = new Map();

  const initY = -25;
  const revolutionRadius = 4;
  const revolutionDuration = 1.6; // seconds
  const breathingAmplitude = 0.1;
  const breathingSpeed = 0.002;

  let loadingComplete = false;

  // place below screen for intro
  spheres.forEach(s => { s.position.y = initY; });

  const initLoadingAnimation = () => {
    spheres.forEach((sphere, i) => {
      const delay = i * 14;
      animateValue(sphere.position, "y", initY, revolutionRadius, revolutionDuration * 500, delay);
      setTimeout(() => {
        animateValue(sphere.position, "y", revolutionRadius, initY / 5, revolutionDuration * 500);
      }, delay + revolutionDuration * 500);
      setTimeout(() => {
        animateValue(sphere.position, "x", sphere.position.x, sphere.userData.originalPosition.x, 600);
        animateValue(sphere.position, "y", sphere.position.y, sphere.userData.originalPosition.y, 600);
        animateValue(sphere.position, "z", sphere.position.z, sphere.userData.originalPosition.z, 600);
      }, delay + revolutionDuration * 1000);
    });
  };

  const onMouseMoveInteraction = (event) => {
    if (!loadingComplete) return;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(spheres);
    if (intersects.length > 0) {
      const hovered = intersects[0].object;
      const force = new THREE.Vector3();
      force.subVectors(intersects[0].point, hovered.position).normalize().multiplyScalar(0.18);
      forces.set(hovered.uuid, force);
    }
  };

  window.addEventListener("mousemove", onMouseMoveInteraction);

  const handleCollisions = () => {
    for (let i = 0; i < spheres.length; i++) {
      const a = spheres[i];
      const ra = a.userData.radius;
      for (let j = i + 1; j < spheres.length; j++) {
        const b = spheres[j];
        const rb = b.userData.radius;
        const distance = a.position.distanceTo(b.position);
        const minDistance = (ra + rb) * 1.2;
        if (distance < minDistance) {
          tempVector.subVectors(b.position, a.position).normalize();
          const push = (minDistance - distance) * 0.4;
          a.position.sub(tempVector.multiplyScalar(push));
          b.position.add(tempVector.multiplyScalar(push));
        }
      }
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    rotationX = lerp(rotationX, targetRotationX, 0.05);
    rotationY = lerp(rotationY, targetRotationY, 0.05);
    camera.position.x = Math.sin(rotationY) * 24;
    camera.position.z = Math.cos(rotationY) * 24;
    camera.position.y = Math.sin(rotationX) * 10;
    camera.lookAt(0, 0, 0);

    if (loadingComplete) {
      const t = performance.now() * breathingSpeed;
      spheres.forEach((sphere, i) => {
        const offset = i * 0.18;
        const by = Math.sin(t + offset) * breathingAmplitude;
        const bz = Math.cos(t + offset) * breathingAmplitude * 0.5;
        const force = forces.get(sphere.uuid);
        if (force) {
          sphere.position.add(force);
          force.multiplyScalar(0.95);
          if (force.length() < 0.01) forces.delete(sphere.uuid);
        }
        const op = sphere.userData.originalPosition;
        tempVector.set(op.x, op.y + by, op.z + bz);
        sphere.position.lerp(tempVector, 0.018);
      });
      handleCollisions();
    }
    renderer.render(scene, camera);
  };

  const handleResize = () => {
    const size = getCanvasSize();
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height, false);
    placeGroup();
  };
  window.addEventListener("resize", handleResize);

  // Kick off loading animation right away
  initLoadingAnimation();

  // Reveal text when spheres have settled
  setTimeout(() => {
    loadingComplete = true;
    document.querySelectorAll(".hide-text").forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    const loading = document.querySelector(".main-txt");
    if (loading) loading.style.opacity = "0";
  }, (revolutionDuration + 0.9) * 1000);

  animate();
})();

// ---------------- Custom cursor ----------------
(function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });

  window.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });

  const hoverables = document.querySelectorAll("a, button, .btn, .alltag-card, .welcome-card, .kontakt-card, .step, canvas");
  hoverables.forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("grow"));
    el.addEventListener("mouseleave", () => ring.classList.remove("grow"));
  });

  const loop = () => {
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(loop);
  };
  loop();
})();

// ---------------- Nav scroll state ----------------
(function initNav() {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;
  const update = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
})();

// ---------------- Reveal on scroll ----------------
(function initReveal() {
  const targets = document.querySelectorAll(".section-title, .lead, .section-lead, .alltag-card, .welcome-card, .welcome-copy, .timeline-item, .kontakt-card, .kontakt-copy, .fact-list");
  targets.forEach(el => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  targets.forEach(el => io.observe(el));
})();
