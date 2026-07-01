"use client";

import { useEffect, useState } from "react";

export default function Typing({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx % phrases.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? 45 : 80;
    if (done && !deleting) delay = 1400; // pause at full word
    if (empty && deleting) delay = 250;

    const timer = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setIdx((i) => i + 1);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, idx, phrases]);

  return (
    <div className="typing">
      I build <span className="t">{text}</span>
      <span className="caret" />
    </div>
  );
}
