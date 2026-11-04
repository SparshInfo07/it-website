interface OfficeMapPinProps {
  className?: string;
}

export default function OfficeMapPin({ className = "" }: OfficeMapPinProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 52 68"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="office-map-pin-gradient" x1="8" y1="3" x2="48" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#247EBB" />
          <stop offset="1" stopColor="#263B80" />
        </linearGradient>
      </defs>
      <path
        d="M26 1C11.64 1 0 12.64 0 27c0 19.1 26 40 26 40s26-20.9 26-40C52 12.64 40.36 1 26 1Z"
        fill="url(#office-map-pin-gradient)"
      />
      <circle cx="26" cy="27" r="10.5" fill="white" />
    </svg>
  );
}
