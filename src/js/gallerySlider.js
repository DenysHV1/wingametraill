export const gallerySlider = () => {
  let index = 0;
  const slides = document.querySelectorAll('.gallery-wrap-list img');
  const indicators = document.querySelectorAll('.indicator');
  let startX = 0;

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.style.display = i === n ? 'block' : 'none';
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === n);
    });
    index = n;
  }

  const nextSlide = () => showSlide((index + 1) % slides.length);
  const prevSlide = () => showSlide((index - 1 + slides.length) % slides.length);

  const handleTouchStart = (event) => (startX = event.touches[0].clientX);
  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
  };

  function initSlider() {
    showSlide(index);

    document.getElementById('nextSlideButton').addEventListener('click', nextSlide);
    document.getElementById('prevSlideButton').addEventListener('click', prevSlide);
    indicators.forEach((indicator, i) =>
      indicator.addEventListener('click', () => showSlide(i))
    );

    slides.forEach((slide) => {
      slide.addEventListener('touchstart', handleTouchStart);
      slide.addEventListener('touchend', handleTouchEnd);
    });
  }

  initSlider();
};
