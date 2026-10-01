// PART 1 — BUILD THE MARQUEES
// Two identical halves let CSS move the track by -50% and loop seamlessly.
document.querySelectorAll('.ribbon .track').forEach((track) => {
  const group = document.createElement('span');
  group.className = 'group';

  // Repeat the phrase within each half to keep the row filled.
  for (let i = 0; i < 2; i++) {
    const phrase = document.createElement('span');
    phrase.className = 'phrase';
    phrase.innerHTML = '<span class="word">Additional</span><span class="word">Editions</span>';
    group.append(phrase);
  }

  track.append(group, group.cloneNode(true));
});

// PART 2 — FIND ELEMENTS AND CHECK DEVICE SETTINGS
const landing = document.querySelector('.landing');
const heroPanel = document.querySelector('.hero-panel');
const footerLink = document.querySelector('.footer-link');
const worksLink = document.querySelector('.view-works');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Keep an opacity value between 0 and 1.
const clamp01 = (number) => Math.max(0, Math.min(1, number));

// Ease the start and end of each reveal.
const smoothstep = (number) => {
  const value = clamp01(number);
  return value * value * (3 - 2 * value);
};

// Read a radius from :root in CSS and convert vw to pixels.
function radiusInPixels(variable, fallback) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

  if (value.endsWith('vw')) return innerWidth * parseFloat(value) / 100;
  if (value.endsWith('px')) return parseFloat(value);
  return fallback;
}

// PART 3 — DIM THE COMPOSITION NEAR EITHER REVEAL TARGET
function setReveal(x, y) {
  const panel = heroPanel.getBoundingClientRect();
  const footer = footerLink.getBoundingClientRect();

  const centerX = panel.left + panel.width / 2;
  const centerY = panel.top + panel.height / 2;
  const footerX = footer.left + footer.width / 2;
  const footerY = footer.top + footer.height / 2;

  const centerDistance = Math.hypot(x - centerX, y - centerY);
  const footerDistance = Math.hypot(x - footerX, y - footerY);

  const centerRadius = Math.max(180, radiusInPixels('--center-radius', 440));
  const footerRadius = Math.max(150, radiusInPixels('--footer-radius', 290));

  // The center reaches full black at 65% of its radius.
  const center = smoothstep(
    (centerRadius - centerDistance) / (centerRadius * .35)
  );
  const footerAmount = smoothstep(
    (footerRadius - footerDistance) / (footerRadius * .78)
  );

  // CSS uses center-reveal for both the oval and “View Works.”
  landing.style.setProperty('--center-reveal', center.toFixed(3));
  landing.style.setProperty('--footer-reveal', footerAmount.toFixed(3));
  landing.style.setProperty(
    '--dim',
    Math.max(center, footerAmount).toFixed(3)
  );

  // Make the link clickable once the center reveal is sufficiently visible.
  landing.classList.toggle('center-active', center > .4);
}

if (finePointer.matches) {
  landing.classList.add('has-proximity');

  landing.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    setReveal(event.clientX, event.clientY);
  });

  landing.addEventListener('pointerleave', () => {
    if (document.activeElement !== worksLink) {
      setReveal(-10000, -10000);
    }
  });

  // Keyboard users can reveal the links by focusing them.
  worksLink.addEventListener('focus', () => {
    landing.style.setProperty('--center-reveal', '1');
    landing.style.setProperty('--dim', '1');
    landing.classList.add('center-active');
  });

  worksLink.addEventListener('blur', () => setReveal(-10000, -10000));

  footerLink.addEventListener('focus', () => {
    landing.style.setProperty('--dim', '1');
  });

  footerLink.addEventListener('blur', () => {
    landing.style.setProperty('--dim', '0');
  });
}

// PART 4 — SQUASH AND STRETCH INDIVIDUAL LETTERS
// The ribbons travel in CSS; this code deforms letters under the pointer.
if (finePointer.matches && !reducedMotion.matches) {
  // Measure characters after the custom font finishes loading.
  document.fonts.ready.then(() => {
    const words = [...document.querySelectorAll('.word')];
    const measureFns = [];
    let activeWord = null;
    let pointer = null;
    let frame = 0;

    words.forEach((word) => {
      // Wrap each character so its width and visible shape can change.
      const letters = [...word.textContent].map((character) => {
        const letter = document.createElement('span');
        const glyph = document.createElement('span');

        letter.className = 'letter';
        glyph.className = 'glyph';
        glyph.textContent = character;
        letter.append(glyph);

        return letter;
      });

      word.replaceChildren(...letters);

      // Save each glyph’s natural width as its animation baseline.
      const measure = () => {
        letters.forEach((letter) => {
          letter.style.transition = 'none';
          letter.style.width = '';

          const glyph = letter.firstElementChild;
          glyph.style.transition = 'none';
          glyph.style.width = '';
          glyph.style.transform = 'none';
        });

        letters.forEach((letter) => {
          const glyph = letter.firstElementChild;
          const width = parseFloat(getComputedStyle(glyph).width);

          letter.dataset.base = width;
          letter.style.width = `${width}px`;
          glyph.style.width = `${width}px`;
          glyph.style.transform = '';
          letter.style.transition = '';
          glyph.style.transition = '';
        });
      };

      measure();
      measureFns.push(measure);
    });

    // Return a previously hovered word to its original shape.
    function reset(word) {
      if (!word) return;

      word.querySelectorAll('.letter').forEach((letter) => {
        letter.style.width = `${letter.dataset.base}px`;
        letter.firstElementChild.style.transform = 'scaleX(1)';
      });
    }

    function animateWord(word, x) {
      const letters = [...word.querySelectorAll('.letter')];
      const size = parseFloat(getComputedStyle(word).fontSize);
      const radius = size * 1.45;

      // Read letter positions before changing their styles.
      const centers = letters.map((letter) => {
        const bounds = letter.getBoundingClientRect();
        return bounds.left + bounds.width / 2;
      });

      letters.forEach((letter, index) => {
        const distance = Math.abs(x - centers[index]) / radius;

        // Squeeze the closest letters and stretch letters farther out.
        const squeeze = Math.exp(-Math.pow(distance / .30, 2));
        const stretch = Math.exp(-Math.pow((distance - .72) / .46, 2));
        const scale = Math.max(
          .25,
          Math.min(2.15, 1 - .78 * squeeze + 1.03 * stretch)
        );

        // Width moves neighboring letters; scaleX changes the glyph.
        letter.style.width =
          `${Number(letter.dataset.base) * scale}px`;
        letter.firstElementChild.style.transform =
          `scaleX(${scale})`;
      });
    }

    // Keep checking what passes beneath a stationary pointer.
    function tick() {
      if (!pointer) {
        frame = 0;
        return;
      }

      const target = document.elementFromPoint(pointer.x, pointer.y);
      const word = target?.closest('.word') || null;

      if (word !== activeWord) {
        reset(activeWord);
        activeWord = word;
      }

      if (word) animateWord(word, pointer.x);
      frame = requestAnimationFrame(tick);
    }

    landing.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;

      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(tick);
    });

    landing.addEventListener('pointerleave', () => {
      pointer = null;
      reset(activeWord);
      activeWord = null;
    });

    // Remeasure character widths after a window resize.
    let resizeTimer;

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        reset(activeWord);
        activeWord = null;
        measureFns.forEach((measure) => measure());
      }, 150);
    });
  });
}

// PART 5 — GLASS CURSOR
// JS creates the cursor, so index.html needs no extra element.
// Change --glass-cursor-size in style.css to adjust its diameter.
if (finePointer.matches && !reducedMotion.matches) {
  const glassCursor = document.createElement('div');
  const glassCore = document.createElement('span');

  glassCursor.className = 'glass-cursor';
  glassCore.className = 'glass-cursor__core';
  glassCursor.setAttribute('aria-hidden', 'true');
  glassCursor.append(glassCore);
  document.body.append(glassCursor);

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  let cursorFrame = 0;
  let hasPosition = false;

  function moveGlassCursor() {
    // Move 24% of the remaining distance toward the pointer each frame.
    currentX += (targetX - currentX) * .24;
    currentY += (targetY - currentY) * .24;

    glassCursor.style.transform =
      `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

    // Let the colored rim turn subtly as the cursor moves.
    glassCursor.style.setProperty(
      '--glass-angle',
      `${210 + currentX * .08 + currentY * .05}deg`
    );

    if (
      Math.abs(targetX - currentX) > .1 ||
      Math.abs(targetY - currentY) > .1
    ) {
      cursorFrame = requestAnimationFrame(moveGlassCursor);
    } else {
      cursorFrame = 0;
    }
  }

  document.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;

    targetX = event.clientX;
    targetY = event.clientY;

    // Start at the pointer rather than flying in from the page corner.
    if (!hasPosition) {
      currentX = targetX;
      currentY = targetY;
      hasPosition = true;
    }

    glassCursor.classList.add('is-visible');
    document.documentElement.classList.add('has-glass-cursor');

    if (!cursorFrame) {
      cursorFrame = requestAnimationFrame(moveGlassCursor);
    }
  }, { passive: true });

  // Restore the ordinary cursor when it leaves the browser window.
  window.addEventListener('mouseout', (event) => {
    if (event.relatedTarget) return;

    glassCursor.classList.remove('is-visible');
    document.documentElement.classList.remove('has-glass-cursor');
    hasPosition = false;
  });

  window.addEventListener('blur', () => {
    glassCursor.classList.remove('is-visible');
    document.documentElement.classList.remove('has-glass-cursor');
    hasPosition = false;
  });
}