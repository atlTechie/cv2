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
