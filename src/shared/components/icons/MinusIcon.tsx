interface MinusIconProps {
  className?: string;
}

export default function MinusIcon({ className }: MinusIconProps) {
  return (
    <svg
      width="83"
      height="24"
      viewBox="0 0 83 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon minus"
      className={className}
    >
      <path d="M1 12H13" stroke="white" strokeLinecap="round" />
      <rect x="27.5" y="1" width="28" height="22" rx="3.5" stroke="white" />
      <path
        d="M40.872 16.5V8.7L41.556 9.408H39.096V8.1H42.432V16.5H40.872Z"
        fill="white"
      />
      <path d="M70 11.6846H82" stroke="white" strokeLinecap="round" />
      <path d="M76.3154 18V6" stroke="white" strokeLinecap="round" />
    </svg>
  );
}
