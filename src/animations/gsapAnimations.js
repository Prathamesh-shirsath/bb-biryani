import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initBiryaniScrollAnimations() {
  const sections = gsap.utils.toArray(".reveal-section");

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}