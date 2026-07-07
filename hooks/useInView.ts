"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const revealStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
    filter: inView ? 'blur(0px)' : 'blur(6px)',
    transition: [
      'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
      'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
      'filter 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
    ].join(', '),
    transitionDelay: `${delay}ms`,
  };

  return { ref, inView, revealStyle };
}
