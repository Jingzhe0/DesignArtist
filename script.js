gsap.registerPlugin(ScrollTrigger);

/* HERO INTRO */
gsap.from(".hero-content h1", {
  opacity: 0,
  y: 40,
  duration: 1.5
});

gsap.from(".hero-content p", {
  opacity: 0,
  delay: 0.5,
  y: 20,
  duration: 1
});

/* ABOUT */
gsap.from(".about-text", {
  scrollTrigger: ".about",
  x: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".about-img", {
  scrollTrigger: ".about",
  x: 100,
  opacity: 0,
  duration: 1
});

/* PROJECTS */
gsap.from(".project-card", {
  scrollTrigger: ".projects",
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});

/* HERO PARALLAX */
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  document.querySelector(".hero-bg").style.transform =
    `scale(1.2) translateY(${scroll * 0.3}px)`;
});