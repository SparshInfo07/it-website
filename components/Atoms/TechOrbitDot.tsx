import React from "react";

export interface TechOrbitDotProps {
  color?: "blue" | "purple";
  className?: string;
  size?: number;
}

export default function TechOrbitDot({
  color = "blue",
  className = "",
  size = 8,
}: TechOrbitDotProps) {
  const colorStyles =
    color === "blue"
      ? "bg-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.7)]"
      : "bg-[#C084FC] shadow-[0_0_8px_rgba(192,132,252,0.7)]";

  return (
    <span
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`block rounded-full pointer-events-none select-none ${colorStyles} ${className}`}
      aria-hidden="true"
    />
  );
}
