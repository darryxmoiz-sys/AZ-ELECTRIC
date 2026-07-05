"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    let mx = 0, my = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx - 3}px`;
        dotRef.current.style.top  = `${my - 3}px`;
      }
    };
    const animate = () => {
      cx += (mx - cx) * 0.1; cy += (my - cy) * 0.1;
      if (outerRef.current) {
        outerRef.current.style.left = `${cx - 16}px`;
        outerRef.current.style.top  = `${cy - 16}px`;
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", onMove);
    animate();

    const hoverEls = () => document.querySelectorAll("a,button,[data-hover]");
    const enter = () => { if (outerRef.current) { outerRef.current.style.transform = "scale(1.8)"; outerRef.current.style.background = "rgba(250,204,21,0.15)"; } };
    const leave = () => { if (outerRef.current) { outerRef.current.style.transform = "scale(1)";   outerRef.current.style.background = "transparent"; } };

    const setup = () => {
      hoverEls().forEach(el => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
    };
    setup();
    const obs = new MutationObserver(setup);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => { window.removeEventListener("mousemove", onMove); obs.disconnect(); };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer hidden md:block" />
      <div ref={dotRef}   className="cursor-dot   hidden md:block" />
    </>
  );
}
