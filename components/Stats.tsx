"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { count, ref };
}

export default function Stats() {
  const stat1 = useCountUp(20, 1000);
  const stat2 = useCountUp(40, 1200);
  const stat3 = useCountUp(100, 1400);

  return (
    <section id="stats" className="bg-cream border-y border-border py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {/* Stat 1 */}
          <div ref={stat1.ref} className="flex flex-col items-center text-center md:border-r md:border-border">
            <span className="font-serif text-navy leading-none" style={{ fontSize: "clamp(64px, 7vw, 84px)" }}>
              T{stat1.count}
            </span>
            <span
              className="text-secondary font-sans mt-3"
              style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Schools Covered
            </span>
          </div>

          {/* Stat 2 */}
          <div ref={stat2.ref} className="flex flex-col items-center text-center md:border-r md:border-border">
            <span className="font-serif text-gold leading-none" style={{ fontSize: "clamp(64px, 7vw, 84px)" }}>
              {stat2.count}+
            </span>
            <span
              className="text-secondary font-sans mt-3"
              style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Admissions Interviews
            </span>
          </div>

          {/* Stat 3 */}
          <div ref={stat3.ref} className="flex flex-col items-center text-center">
            <span className="font-serif text-navy leading-none" style={{ fontSize: "clamp(64px, 7vw, 84px)" }}>
              {stat3.count}
            </span>
            <span
              className="text-secondary font-sans mt-3"
              style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Point Scoring Scale
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
