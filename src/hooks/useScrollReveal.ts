import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = el.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
