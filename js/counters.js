
let dataValue = document.querySelectorAll("[data-value]");
let dataArr = Array.from(dataValue);
console.log(dataArr);

dataArr.forEach((counterItem) => {
  let isAnimate = false;

  function handleScroll() {
    if (
      counterItem.getBoundingClientRect().top < innerHeight * 0.75 &&
      !isAnimate
    ) {
      isAnimate = true;
      startCount();
      document.removeEventListener("scroll", handleScroll);
    }
  }

  function startCount() {
    let currentValue = 0;
    let maxValue = +counterItem.getAttribute("data-value");
    let myInterval = setInterval(() => {
      if (currentValue >= maxValue) {
        clearInterval(myInterval);
      }
      counterItem.textContent = currentValue;
      currentValue++;
    }, speedCounters(maxValue));
  }

  document.addEventListener("scroll", handleScroll);
});

const speedCounters = (itemValue) => 1000 / itemValue;

