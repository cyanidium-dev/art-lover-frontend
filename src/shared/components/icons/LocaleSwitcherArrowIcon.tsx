interface LocaleSwitcherArrowIconProps {
  className?: string;
  strokeWidth?: string;
}

export default function LocaleSwitcherArrowIcon({
  className = '',
}: LocaleSwitcherArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-label="arrow icon"
      className={className}
    >
      <path
        d="M13.28 5.96667L8.9333 10.3133C7.99997 11.2467 7.99997 11.2467 7.06664 10.3133L2.71997 5.96667"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
