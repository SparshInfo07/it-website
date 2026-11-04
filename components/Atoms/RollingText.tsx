import React from "react";

interface RollingTextProps {
  text: string;
  className?: string;
}

export default function RollingText({ text, className = "" }: RollingTextProps) {
  return (
    <span className={`relative inline-flex items-center justify-center overflow-hidden leading-tight ${className}`}>
      {/* Primary visible text - slides up on hover */}
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full motion-reduce:transition-none">
        {text}
      </span>

      {/* Duplicate text - comes up from below on hover */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 motion-reduce:hidden"
      >
        {text}
      </span>
    </span>
  );
}
