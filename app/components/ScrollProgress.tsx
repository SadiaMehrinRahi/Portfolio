"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".topnav-links a[href^='#']")
    );

    function onScroll() {
      // progress bar
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, scrolled))})`;

      // active section
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const s of sections) {
        if (s.offsetTop <= mid) current = s.id;
      }
      links.forEach((a) => {
        const target = a.getAttribute("href")?.slice(1);
        a.classList.toggle("active", target === current);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div id="scroll-progress" aria-hidden="true" />;
}
