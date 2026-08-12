import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced) {
  const lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Reveal: text/content blocks fade + rise into place as they cross the fold.
document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
  if (reduced) {
    el.style.opacity = "1";
    el.style.transform = "none";
    return;
  }
  gsap.set(el, { opacity: 0, y: 28 });
  ScrollTrigger.create({
    trigger: el,
    start: "top 88%",
    once: true,
    onEnter: () =>
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      }),
  });
});

// Image reveal: full-bleed frames wipe open, clip-path top to bottom.
document.querySelectorAll<HTMLElement>("[data-reveal-image]").forEach((el) => {
  if (reduced) {
    el.style.clipPath = "inset(0 0 0% 0)";
    return;
  }
  gsap.set(el, { clipPath: "inset(0 0 100% 0)" });
  ScrollTrigger.create({
    trigger: el,
    start: "top 85%",
    once: true,
    onEnter: () =>
      gsap.to(el, {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.1,
        ease: "power4.out",
      }),
  });

  const img = el.querySelector<HTMLElement>("[data-parallax]");
  if (img && !reduced) {
    gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }
});

// Hero curve: a single line draws itself in on load, like a survival/growth
// curve rendering — the site's one signature motion moment.
const curve = document.querySelector<SVGPathElement>("[data-hero-curve]");
if (curve) {
  const length = curve.getTotalLength();
  if (reduced) {
    curve.style.strokeDasharray = "none";
  } else {
    curve.style.strokeDasharray = `${length}`;
    curve.style.strokeDashoffset = `${length}`;
    gsap.to(curve, {
      strokeDashoffset: 0,
      duration: 1.8,
      delay: 0.3,
      ease: "power2.inOut",
    });
  }
}

// Hero copy: staged entrance, tiny stagger.
if (!reduced) {
  gsap.set("[data-hero-in]", { opacity: 0, y: 16 });
  gsap.to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.08,
    delay: 0.15,
    ease: "power3.out",
  });
}
