// Modern scroll and animation effects for Sada AI
// Fade-in and parallax on scroll

document.addEventListener('DOMContentLoaded', function() {
  // Fade-in effect
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  fadeEls.forEach(el => observer.observe(el));

  // Animated numbers
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const step = Math.ceil(target / 60);
    function update() {
      count += step;
      if (count > target) count = target;
      el.textContent = count;
      if (count < target) requestAnimationFrame(update);
    }
    update();
  });
});
