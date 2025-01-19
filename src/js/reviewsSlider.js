export const reviewsSlider = () => {
  let index = 0;
  const sliderRew = document.querySelectorAll('.reviews-wrap-card');
  const dots = document.querySelectorAll('.dot');
  let startX = 0;
  function showSlide(n) {
    sliderRew.forEach((slide, i) => {
      slide.style.display = i === n ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n);
    });
    index = n;
  }

  function nextSlide() {
    showSlide((index + 1) % sliderRew.length);
  }

  function prevSlide() {
    showSlide((index - 1 + sliderRew.length) % sliderRew.length);
  }

  function initControls() {
    document
      .getElementById('nextSlideButtonRew')
      .addEventListener('click', nextSlide);
    document
      .getElementById('prevSlideButtonRew')
      .addEventListener('click', prevSlide);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i));
    });
  }

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
  }

  function initSwipe() {
    sliderRew.forEach(slide => {
      slide.addEventListener('touchstart', handleTouchStart);
      slide.addEventListener('touchend', handleTouchEnd);
    });
  }

  function initSlider() {
    showSlide(index);
    initControls();
    initSwipe();
  }

  initSlider();
};
