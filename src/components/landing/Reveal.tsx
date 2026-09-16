"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Visible-by-default scroll reveal. Content renders at full opacity in SSR
 * and with JS disabled, so crawlers, readers, and throttled devices never
 * see a blank page.
 *
 * When JS + IntersectionObserver are available the element starts hidden and
 * transitions in the first time it enters the viewport (with an 800ms safety
 * timer so a stalled observer can never leave content invisible). Under
 * prefers-reduced-motion it renders instantly with no transform.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      typeof window.IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setEnhanced(true);
    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }
    const safety = window.setTimeout(() => setVisible(true), 800);
    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            window.clearTimeout(safety);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 96px 0px" }
    );
    observer.observe(el);
    return () => {
      window.clearTimeout(safety);
      observer.disconnect();
    };
  }, []);

  if (!enhanced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
    transitionProperty: "opacity, transform",
    transitionDuration: "600ms",
    transitionTimingFunction: `cubic-bezier(${EASE[0]}, ${EASE[1]}, ${EASE[2]}, ${EASE[3]})`,
    transitionDelay: `${delay * 1000}ms`,
    willChange: visible ? undefined : "opacity, transform",
  };

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}
