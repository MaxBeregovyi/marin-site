// Burger
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

// Slider
const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);

const btnNext = document.querySelector(".reviews__arrow-right");
const btnPrev = document.querySelector(".reviews__arrow-left");

btnNext.onclick = function () {
  showNextSlide("next");
};

btnPrev.onclick = function () {
  showNextSlide("prev");
};

sliderItems.forEach((slide, index) => {
  if (index !== 0) {
    slide.classList.add("hidden");
  }

  slide.dataset.index = index;
  sliderItems[0].setAttribute("data-active", "");

  slide.addEventListener("click", function () {
    showNextSlide("next");
  });
});

function showNextSlide(direction) {
  const currentSlide = slider.querySelector(`[data-active]`);
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  let nextSlideIndex;

  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }
  const nextSlide = slider.querySelector(`[data-index = "${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}
