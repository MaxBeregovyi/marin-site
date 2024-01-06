
// HTML

// <div class="slider">
//   <div class="slide active">
//     <!-- Ваш первый div -->
//   </div>
//   <div class="slide">
//     <!-- Ваш второй div -->
//   </div>
//   <div class="slide">
//     <!-- Ваш третий div -->
//   </div>
//   <button class="reviews__arrow-left">
//     <img src="./img/tini-img/vector_left.svg" alt="arrow-left" />
//   </button>
//   <button class="reviews__arrow-right">
//     <img src="./img/tini-img/Vector.svg" alt="arrow-right" />
//   </button>
// </div>

// CSS

.slide {
  display: none;
}

.slide.active {
  display: block;
}
Код, созданный ИИ. Внимательно просмотрите и используйте. Дополнительные сведения о часто задаваемых вопросах.
JavaScript

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.reviews__arrow-left');
const nextButton = document.querySelector('.reviews__arrow-right');

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
// Код, созданный ИИ. Внимательно просмотрите и используйте. Дополнительные сведения о часто задаваемых вопросах.
// В этом коде кнопки “reviews__arrow-left” и “reviews__arrow-right” используются для переключения слайдов.
//  Пожалуйста, убедитесь, что вы подключили этот JavaScript-код после вашего HTML.

// Пожалуйста, обратите внимание, что этот код является базовым примером и может потребовать дополнительной настройки или стилизации в зависимости от вашего конкретного проекта.
//  Если у вас возникнут проблемы или вопросы, не стесняйтесь спросить! 😊