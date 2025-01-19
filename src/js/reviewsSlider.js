export const reviewsSlider = () => {
  let index = 0;
  const sliderRew = document.querySelectorAll('.reviews-wrap-card');
  const dots = document.querySelectorAll('.dot');
  let isSliderActive = false; // Стан активності слайдера

  // Функція для показу слайду
  function shoeSliderRew(n) {
    sliderRew.forEach((img, i) => {
      img.style.display = i === n ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n);
    });
    index = n;
  }

  // Наступний слайд
  function nextSlide() {
    index = (index + 1) % sliderRew.length;
    shoeSliderRew(index);
  }

  // Попередній слайд
  function prevSlide() {
    index = (index - 1 + sliderRew.length) % sliderRew.length;
    shoeSliderRew(index);
  }

  // Активація слайдера
  function activateSlider() {
    if (!isSliderActive) {
      shoeSliderRew(index);
      document
        .getElementById('nextSlideButtonRew')
        .addEventListener('click', nextSlide);
      document
        .getElementById('prevSlideButtonRew')
        .addEventListener('click', prevSlide);
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const slideIndex = parseInt(dot.getAttribute('data-slide'));
          shoeSliderRew(slideIndex);
        });
      });
      isSliderActive = true;
    }
  }

  // Деактивація слайдера
  function deactivateSlider() {
    if (isSliderActive) {
      sliderRew.forEach(img => {
        img.style.display = 'block'; // Всі картинки видимі
      });
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      document
        .getElementById('nextSlideButton')
        .removeEventListener('click', nextSlide);
      document
        .getElementById('prevSlideButtonRew')
        .removeEventListener('click', prevSlide);
      isSliderActive = false;
    }
  }

  // Перевірка ширини екрану
  function checkWindowSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 320 && screenWidth <= 1199) {
      activateSlider();
    } else {
      deactivateSlider();
    }
  }

  // Слухач зміни розміру екрану
  window.addEventListener('resize', checkWindowSize);

  // Початкова перевірка
  checkWindowSize();
};
