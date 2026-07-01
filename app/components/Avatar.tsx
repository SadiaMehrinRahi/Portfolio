"use client";

import { useState } from "react";

export default function Avatar({
  photo,
  initials,
  variant = "hero",
}: {
  photo?: string;
  initials: string;
  variant?: "hero" | "paper";
}) {
  const [failed, setFailed] = useState(false);
  const showImage = photo && photo.trim() !== "" && !failed;
  const className = variant === "paper" ? "paper-photo" : "avatar";

  return (
    <div className={className}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt={initials} onError={() => setFailed(true)} />
      ) : (
        <span className="initials">{initials}</span>
      )}
    </div>
  );
}
