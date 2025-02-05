'use strict';

document.addEventListener("DOMContentLoaded", function() {
  const blocks = document.querySelectorAll('.content-block');

  const checkVisibility = () => {
    blocks.forEach(block => {
      const blockTop = block.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Если блок в области видимости
      if (blockTop < windowHeight * 0.8) { // 0.8 — это 80% высоты экрана
        block.classList.add('visible');
      }
    });
  };

  // Проверяем видимость при загрузке страницы и при прокрутке
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Первоначальная проверка
});
