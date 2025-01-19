export const gallerySlider = () => {
  let index = 0;
  const slides = document.querySelectorAll('.gallery-wrap-list img');
  const indicators = document.querySelectorAll('.indicator');
  let isSliderActive = false; // Стан активності слайдера
  let startX = 0; // Початкова точка свайпа
  let endX = 0;   // Кінцева точка свайпа

  // Функція для показу слайду
  function showSlide(n) {
    slides.forEach((img, i) => {
      img.style.display = i === n ? 'block' : 'none';
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === n);
    });
    index = n;
  }

  // Наступний слайд
  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  // Попередній слайд
  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Активація слайдера
  function activateSlider() {
    if (!isSliderActive) {
      showSlide(index);
      document
        .getElementById('nextSlideButton')
        .addEventListener('click', nextSlide);
      document
        .getElementById('prevSlideButton')
        .addEventListener('click', prevSlide);
      indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
          const slideIndex = parseInt(indicator.getAttribute('data-slide'));
          showSlide(slideIndex);
        });
      });

      // Додавання підтримки свайпа
      slides.forEach(slide => {
        slide.addEventListener('touchstart', handleTouchStart);
        slide.addEventListener('touchend', handleTouchEnd);
      });

      isSliderActive = true;
    }
  }

  // Деактивація слайдера
  function deactivateSlider() {
    if (isSliderActive) {
      slides.forEach(img => {
        img.style.display = 'block'; // Всі картинки видимі
      });
      indicators.forEach(dot => {
        dot.classList.remove('active');
      });
      document
        .getElementById('nextSlideButton')
        .removeEventListener('click', nextSlide);
      document
        .getElementById('prevSlideButton')
        .removeEventListener('click', prevSlide);

      slides.forEach(slide => {
        slide.removeEventListener('touchstart', handleTouchStart);
        slide.removeEventListener('touchend', handleTouchEnd);
      });

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

  // Обробка початку свайпа
  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  // Обробка завершення свайпа
  function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
  }

  // Визначення напрямку свайпа
  function handleSwipe() {
    if (startX - endX > 50) {
      nextSlide(); // Свайп вліво
    } else if (endX - startX > 50) {
      prevSlide(); // Свайп вправо
    }
  }

  // Слухач зміни розміру екрану
  window.addEventListener('resize', checkWindowSize);

  // Початкова перевірка
  checkWindowSize();
};
