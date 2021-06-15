gsap.from("#e", {
  duration: 1,
  x: -150,
  ease: "ease",
  opacity: 0,
});

gsap.from(".welcome-stuff", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "back",
});

gsap.from(".portfolio-item", {
  duration: 0.5,
  y: 200,

  opacity: 0,
  delay: 0.2,
  stagger: 0.1,
  ease: "back",
});
