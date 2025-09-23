import React, { useEffect, useRef, useState } from "react";

/**
 * Usage:
 * <Reveal className="animate-fade-up delay-200"> ... </Reveal>
 * Adds a smooth reveal-on-scroll without extra deps.
 */
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
