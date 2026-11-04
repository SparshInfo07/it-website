"use client";

import React from "react";
import CountUp from "react-countup";

export interface VerticalTickerProps {
  /** Raw string value for display or accessibility, e.g. "100+", "USA+ India" */
  value: string;
  /** Numeric value if this is a countable number (e.g. 100, 250, 10) */
  numericValue?: number;
  /** Suffix symbol, e.g. "+" */
  suffix?: string;
  /** Prefix symbol, e.g. "$" */
  prefix?: string;
  /** Number of decimal places to display */
  decimals?: number;
  /** Whether the counter is numeric or text */
  isNumeric?: boolean;
  /** Whether the count-up animation should trigger */
  isActive?: boolean;
  /** Stagger delay in seconds */
  delay?: number;
  /** Animation duration in seconds (defaults to 2.5) */
  duration?: number;
  /** Custom CSS classes */
  className?: string;
  /** Color class or style */
  colorClass?: string;
}

export default function VerticalTicker({
  value,
  numericValue,
  suffix = "+",
  prefix = "",
  decimals = 0,
  isNumeric = true,
  isActive,
  delay = 0,
  duration = 2.5,
  className = "",
  colorClass = "text-[#1E70BF]",
}: VerticalTickerProps) {
  // If not a countable numeric stat (e.g. "USA+ India"), render text directly
  if (!isNumeric || typeof numericValue !== "number") {
    return (
      <span
        className={`relative inline-flex items-center justify-center font-medium tracking-tight select-none ${colorClass} ${className}`}
      >
        {value}
      </span>
    );
  }

  const isControlled = typeof isActive === "boolean";
  const shouldAnimate = isControlled ? isActive : true;

  return (
    <div
      className={`relative inline-flex items-center justify-center font-medium tracking-tight select-none ${colorClass} ${className}`}
    >
      {/* Screen reader only label for accessibility */}
      <span className="sr-only">{value}</span>

      {/* Visual CountUp Number Counter */}
      <div
        aria-hidden="true"
        className="tabular-nums inline-flex items-center justify-center text-center whitespace-nowrap"
      >
        {isControlled ? (
          shouldAnimate ? (
            <CountUp
              start={0}
              end={numericValue}
              duration={duration}
              delay={delay}
              decimals={decimals}
              prefix={prefix}
              suffix={suffix}
              separator=","
            />
          ) : (
            <span>
              {prefix}0{suffix}
            </span>
          )
        ) : (
          <CountUp
            start={0}
            end={numericValue}
            duration={duration}
            delay={delay}
            decimals={decimals}
            prefix={prefix}
            suffix={suffix}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        )}
      </div>
    </div>
  );
}
