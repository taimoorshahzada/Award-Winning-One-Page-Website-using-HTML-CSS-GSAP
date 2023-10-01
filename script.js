/** @format */
let imageShowerElem = document.getElementById("introImg");
setInterval(() => {
  imageShowerElem.src = `0${randomNumber(1, 5)}.jpg`;
}, 300);

// random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let introTl = gsap.timeline();

introTl
  .to("#introBlock1", {
    y: "-100%",
    delay: 1,
    ease: Power4.easeInOut,
    duration: 1.5,
  })
  .to("#introBlock2", {
    y: 0,
    delay: 1,
    ease: Power4.easeInOut,
    duration: 1.5,
  })
  .to(".intro", {
    duration: 0.5,
    opacity: 0,
  })
  .to(".intro", {
    zIndex: -20,
  })
  .from(
    ".container",
    {
      opacity: 0,
      duration: 0.5,
    },
    "<"
  )
  .from(
    ".text p, .links li",
    {
      y: 30,
      stagger: {
        amount: 0.2,
      },
      opacity: 0,
    },
    "<"
  )
  .to(
    ".img-marquee-block",
    {
      y: "-100%",
      ease: Power4.easeInOut,
      duration: 1.5,
    },
    "-=70%"
  );
