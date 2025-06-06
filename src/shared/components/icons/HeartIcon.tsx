interface HeartIconProps {
  className?: string;
}

export default function HeartIcon({ className = '' }: HeartIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-label="heart icon"
      className={className}
    >
      <path
        d="M2.78537 6.48146C2.97383 6.02649 3.25006 5.61309 3.59828 5.26487C3.9465 4.91665 4.3599 4.64042 4.81488 4.45196C5.26985 4.2635 5.75749 4.1665 6.24995 4.1665C6.74241 4.1665 7.23005 4.2635 7.68502 4.45196C8.14 4.64042 8.5534 4.91665 8.90162 5.26487L9.99995 6.3632L11.0983 5.26487C11.8015 4.5616 12.7554 4.16651 13.75 4.16651C14.7445 4.16651 15.6984 4.5616 16.4016 5.26487C17.1049 5.96814 17.5 6.92197 17.5 7.91654C17.5 8.9111 17.1049 9.86494 16.4016 10.5682L9.99995 16.9699L3.59828 10.5682C3.25006 10.22 2.97383 9.80658 2.78537 9.35161C2.59692 8.89664 2.49992 8.409 2.49992 7.91654C2.49992 7.42408 2.59692 6.93644 2.78537 6.48146Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
