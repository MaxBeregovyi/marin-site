// // const myInterval = setInterval(() => {
// //   console.log("test1");
// // }, 1000);
// // setInterval(() => clearInterval(myInterval), 10000);

// function myFn(str) {
//   console.log(`Hi!!! How are you ${str}`);
// }

// let timeOut = 2000;

// // // const myInter = setInterval(myFn, timeOut, "Max");

// // // setTimeout(() => clearInterval(myInter), 6000);

// // // let firstTimeout = setTimeout(myFn, timeOut, "Max");
// // // let secondTimeout = setTimeout(myFn, timeOut, "Max");
// let firstTimeout = setInterval(myFn, timeOut, "Max");
// let secondTimeout = setInterval(myFn, timeOut, "Max");

// document.querySelector("#clearTimeout").onclick = function () {
//   event.preventDefault();
//   clearInterval(firstTimeout);
//   clearInterval(secondTimeout);
// };


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// timer

// let isRunning = true;
// let initialSeconds = 0;
// let initialMinutes = 0;
//
// let timeFunc = (currentSecondes, currentMinuts) => {
//   initialSeconds++;
//   if (initialSeconds >= 59) {
//     initialMinutes++;
//     initialSeconds = 0;
//   }
//   console.log(`${initialMinutes}: ${initialSeconds}`);
// };
//
// let timer = setInterval(timeFunc, 1000, initialSeconds, initialMinutes);
//
// document.addEventListener("keydown", function (event) {
//   console.log("Pause");
//   if (event.code === "Space") {
//     if (isRunning) {
//       clearInterval(timer);
//       isRunning = false;
//     } else {
//       timer = setInterval(timeFunc, 1000, initialSeconds, initialMinutes);
//       isRunning = true;
//     }
//   }
// });