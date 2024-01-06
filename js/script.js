// Burger
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

// Slider
const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);

sliderItems.forEach((slide, index) => {
  if (index !== 0) {
    slide.classList.add("hidden");
  }

  slide.dataset.index = index;

  slide.addEventListener("click", function () {
    slide.classList.add("hidden");

    let nextSlideIndex;
    if (index + 1 === sliderItems.length) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = index + 1;
    }

    // const nextSlideIndex = +slide.dataset.index + 1;

    const nextSlide = document.querySelector(
      `[data-index="${nextSlideIndex}"]`,
    );

    nextSlide.classList.remove("hidden");
  });
});
