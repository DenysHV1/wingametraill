export const reviewsSlider = () => {
  let index = 0;
  const sliderRew = document.querySelectorAll('.reviews-wrap-card');
  const dots = document.querySelectorAll('.dot');
  let isSliderActive = false;
  let startX = 0;
  let endX = 0;

  function shoeSliderRew(n) {
    sliderRew.forEach((img, i) => {
      img.style.display = i === n ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n);
    });

  }

  function nextSlide() {
    index = (index + 1) % sliderRew.length;
    shoeSliderRew(index);
  }

  function prevSlide() {
    index = (index - 1 + sliderRew.length) % sliderRew.length;
    shoeSliderRew(index);
  }

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

      sliderRew.forEach(slide => {
        slide.addEventListener('touchstart', handleTouchStart);
        slide.addEventListener('touchend', handleTouchEnd);
      });

      isSliderActive = true;
    }
  }

  function deactivateSlider() {
    if (isSliderActive) {
      sliderRew.forEach(img => {
        img.style.display = 'block'; // Всі картинки видимі
      });
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      document
        .getElementById('nextSlideButtonRew')
        .removeEventListener('click', nextSlide);
      document
        .getElementById('prevSlideButtonRew')
        .removeEventListener('click', prevSlide);

      sliderRew.forEach(slide => {
        slide.removeEventListener('touchstart', handleTouchStart);
        slide.removeEventListener('touchend', handleTouchEnd);
      });

      isSliderActive = false;
    }
  }

  function checkWindowSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 320 && screenWidth <= 1199) {
      activateSlider();
    } else {
      deactivateSlider();
    }
  }

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
  }

  function handleSwipe() {
    if (startX - endX > 50) {
      nextSlide();
    } else if (endX - startX > 50) {
      prevSlide();
    }
  }

  window.addEventListener('resize', checkWindowSize);

  checkWindowSize();
};
