const showModal = document.querySelector("#showModal");

const closeModal = document.querySelector("#closeModal");
const animDuration = 0.3;

showModal.addEventListener("click", function () {
  const openTimeL = gsap.timeline({ duration: animDuration });
  openTimeL.to(".modal", { scale: 1, duration: 0 });
  openTimeL.to(".modal", { opacity: 1 });
  openTimeL.fromTo(
    ".modal__content",
    { scale: 0 },
    { scale: 1, ease: "power1.out" },
  );
  openTimeL.fromTo(
    ".modal__icon svg",
    { y: -100, rotation: "-360deg", opacity: 0 },
    {
      y: 0,
      rotation: "0deg",
      opacity: 1,
    },
  );
  openTimeL.fromTo(
    ".modal__title_letter",
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1 },
  );
  openTimeL.fromTo(
    "#modal__title",
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1 },
    "<",
  );
  openTimeL.fromTo(
    ".modal__text",
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
    },
    "<",
  );
  openTimeL.fromTo(
    ".cls-2",
    { scale: 1 },
    { scale: 1.3, fill: "red", yoyo: true, repeat: -1 },
  );
  openTimeL.fromTo(
    ".cls-3",
    { scale: 1 },
    { scale: (1.5, 1.2), y: -3, fill: "red", yoyo: true, repeat: -1 },
    "<",
  );
});

closeModal.addEventListener("click", function () {
  const closeTimeL = gsap.timeline({ duration: animDuration });
  closeTimeL.to(".modal", { opacity: 0 });
  closeTimeL.to(".modal", { scale: 0, duration: 0 });
});
