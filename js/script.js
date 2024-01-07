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
  console.log("hi");
  const currentSlide = slider.querySelector(`[data-active]`);
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  const nextSlideIndex =
    currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  const nextSlide = slider.querySelector(`[data-index = "${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
};

btnPrev.onclick = function () {
  const currentSlide = slider.querySelector(`[data-active]`);
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  const nextSlideIndex =
    currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  const nextSlide = slider.querySelector(`[data-index = "${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
};

sliderItems.forEach((slide, index) => {
  if (index !== 0) {
    slide.classList.add("hidden");
  }

  slide.dataset.index = index;
  sliderItems[0].setAttribute("data-active", "");

  slide.addEventListener("click", function () {
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    // let nextSlideIndex;
    // if (index + 1 === sliderItems.length) {
    //   nextSlideIndex = 0;
    // } else {
    //   nextSlideIndex = index + 1;
    // }

    const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

    // const nextSlideIndex = +slide.dataset.index + 1;

    const nextSlide = document.querySelector(
      `[data-index="${nextSlideIndex}"]`,
    );

    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});
