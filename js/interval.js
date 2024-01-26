let counterMinutes = document.querySelector("#countNumb");
let isAnimate = false;

document.addEventListener("scroll", function (event) {
  if (
    counterMinutes.getBoundingClientRect().top < innerHeight * 0.75 &&
    !isAnimate
  ) {
    console.log("animation start");
    isAnimate = true;
    startCount();
  }
});

function startCount() {
  let currentValue = 0;
  let maxValue = +counterMinutes.getAttribute("data-value");

  let myInterval = setInterval(() => {
    if (currentValue >= maxValue) {
      clearInterval(myInterval);
    }

    counterMinutes.textContent = currentValue;
    currentValue++;
  }, 30);
}
