/**
 * Woodkies Woods and Furnitures - Cinematic Hero Scroll Engine
 * Implements smooth lerp interpolation for scale, blur, and lighting adjustments.
 */

export function initHeroScroll() {
  const heroSection = document.querySelector('.hero-section');
  const heroBg = document.querySelector('.hero-bg-layer');
  const heroOverlay = document.querySelector('.hero-overlay');

  if (!heroSection || !heroBg) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    heroBg.style.transform = 'scale(1)';
    heroBg.style.filter = 'blur(0px) brightness(0.95)';
    return;
  }

  const isMobile = window.innerWidth <= 768;
  const maxBlur = isMobile ? 6 : 10;
  const maxDim = 0.24; // drops brightness smoothly

  let currentScale = 1.1;
  let targetScale = 1.1;

  let currentBlur = 0;
  let targetBlur = 0;

  let currentBrightness = 0.98;
  let targetBrightness = 0.98;

  let currentOverlay = 0.58;
  let targetOverlay = 0.58;

  let currentTranslateY = 0;
  let targetTranslateY = 0;

  let isTicking = false;
  let animationFrameId = null;

  function updateTargets() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroHeight = heroSection.offsetHeight || window.innerHeight;

    // Calculate progression from 0 to 1 as hero scrolls out
    const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

    // Initial scale 1.1 -> smoothly scales down toward 1.0
    targetScale = 1.1 - (0.1 * progress);

    // Initial blur 0px -> smoothly blurs up to 8-12px
    targetBlur = maxBlur * progress;

    // Initial brightness 0.98 -> reduces slightly to 0.74
    targetBrightness = 0.98 - (maxDim * progress);

    // Initial overlay 0.58 -> increases smoothly to 0.82 for contrast
    targetOverlay = 0.58 + (0.24 * progress);

    // Parallax translation
    targetTranslateY = scrollY * 0.35;

    if (!isTicking) {
      isTicking = true;
      animationFrameId = requestAnimationFrame(render);
    }
  }

  function render() {
    // Smooth lerp interpolation factor
    const factor = 0.12;

    currentScale += (targetScale - currentScale) * factor;
    currentBlur += (targetBlur - currentBlur) * factor;
    currentBrightness += (targetBrightness - currentBrightness) * factor;
    currentOverlay += (targetOverlay - currentOverlay) * factor;
    currentTranslateY += (targetTranslateY - currentTranslateY) * factor;

    // Apply hardware-accelerated transforms to background image layer
    heroBg.style.transform = `translate3d(0, ${currentTranslateY.toFixed(2)}px, 0) scale(${currentScale.toFixed(4)})`;
    heroBg.style.filter = `blur(${currentBlur.toFixed(2)}px) brightness(${currentBrightness.toFixed(3)})`;

    if (heroOverlay) {
      heroOverlay.style.background = `linear-gradient(180deg, rgba(20, 16, 13, ${currentOverlay.toFixed(3)}) 0%, rgba(20, 16, 13, ${(currentOverlay + 0.12).toFixed(3)}) 100%)`;
    }

    // Determine if values have stabilized
    const diff = Math.abs(targetScale - currentScale) +
                 Math.abs(targetBlur - currentBlur) +
                 Math.abs(targetBrightness - currentBrightness) +
                 Math.abs(targetTranslateY - currentTranslateY);

    if (diff > 0.001) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      isTicking = false;
    }
  }

  // Passive event listener for buttery 120Hz/60Hz scrolling
  window.addEventListener('scroll', updateTargets, { passive: true });
  window.addEventListener('resize', () => {
    updateTargets();
  }, { passive: true });

  // Initial calculation
  updateTargets();
}
