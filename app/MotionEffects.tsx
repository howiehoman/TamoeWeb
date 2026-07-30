"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    root.classList.add("motion-ready");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-intro, .story-grid > *, .guest-journey, .feature-card, .privacy-card > *, .faq-heading, .faq-list details, .download-card > *, .content-hero > *, .content-body > *, .support-card, .about-card",
      ),
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    let observer: IntersectionObserver | undefined;
    if (!prefersReducedMotion.matches) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      revealTargets.forEach((element) => observer?.observe(element));
    } else {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
    }

    const phone = document.querySelector<HTMLElement>("[data-phone-flip]");
    const heroScene = document.querySelector<HTMLElement>("[data-hero-scene]");
    const tiltCards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );

    let animationFrame = 0;
    const updateScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        const pageMax =
          document.documentElement.scrollHeight - window.innerHeight;
        const pageProgress = pageMax > 0 ? window.scrollY / pageMax : 0;
        root.style.setProperty("--scroll-progress", `${pageProgress * 100}%`);

        if (phone && !prefersReducedMotion.matches) {
          const flipProgress = Math.min(Math.max(window.scrollY / 500, 0), 1);
          const eased =
            flipProgress < 0.5
              ? 2 * flipProgress * flipProgress
              : 1 - Math.pow(-2 * flipProgress + 2, 2) / 2;
          phone.style.setProperty("--phone-flip", `${eased * 180}deg`);
          phone.style.setProperty(
            "--phone-lift",
            `${Math.sin(eased * Math.PI) * -26}px`,
          );
          root.style.setProperty("--hero-card-opacity", `${flipProgress}`);
        }
        animationFrame = 0;
      });
    };

    const handleHeroPointer = (event: PointerEvent) => {
      if (!heroScene || prefersReducedMotion.matches) return;
      const bounds = heroScene.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroScene.style.setProperty("--scene-rotate-y", `${x * 7}deg`);
      heroScene.style.setProperty("--scene-rotate-x", `${y * -5}deg`);
    };

    const resetHeroPointer = () => {
      heroScene?.style.setProperty("--scene-rotate-y", "0deg");
      heroScene?.style.setProperty("--scene-rotate-x", "0deg");
    };

    const tiltCleanups = tiltCards.map((card) => {
      const move = (event: PointerEvent) => {
        if (prefersReducedMotion.matches) return;
        const bounds = card.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width;
        const py = (event.clientY - bounds.top) / bounds.height;
        card.style.setProperty("--tilt-y", `${(px - 0.5) * 9}deg`);
        card.style.setProperty("--tilt-x", `${(0.5 - py) * 9}deg`);
        card.style.setProperty("--spot-x", `${px * 100}%`);
        card.style.setProperty("--spot-y", `${py * 100}%`);
      };
      const leave = () => {
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--tilt-x", "0deg");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      };
    });

    window.addEventListener("scroll", updateScroll, { passive: true });
    heroScene?.addEventListener("pointermove", handleHeroPointer);
    heroScene?.addEventListener("pointerleave", resetHeroPointer);
    updateScroll();

    return () => {
      root.classList.remove("motion-ready");
      window.removeEventListener("scroll", updateScroll);
      heroScene?.removeEventListener("pointermove", handleHeroPointer);
      heroScene?.removeEventListener("pointerleave", resetHeroPointer);
      tiltCleanups.forEach((cleanup) => cleanup());
      observer?.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
