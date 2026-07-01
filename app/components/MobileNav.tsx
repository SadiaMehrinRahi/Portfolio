"use client";

import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#thesis", label: "Thesis" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mnav">
      <button
        className="mnav-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span className={`mnav-bars ${open ? "x" : ""}`}>
          <i /><i /><i />
        </span>
      </button>

      {open && (
        <>
          <div className="mnav-overlay" onClick={() => setOpen(false)} />
          <div className="mnav-panel">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
