import { Dispatch, ReactNode, SetStateAction } from 'react';
import LoaderIcon from '../icons/LoaderIcon';

interface MainButtonProps {
  children: string | ReactNode;
  className?: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void | Dispatch<SetStateAction<boolean>>;
}

export default function MainButton({
  children,
  className = '',
  type = 'button',
  disabled = false,
  isLoading = false,
  onClick,
}: MainButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`relative enabled:cursor-pointer flex items-center justify-center w-full py-2.5 px-3 rounded-full bg-orange text-white
        text-[11px] xl:text-[14px] font-medium leading-[120%] xl:enabled:hover:bg-orange-light enabled:focus-visible:bg-orange-light 
        disabled:bg-orange/60 disabled:text-white/60
        transition duration-300 ease-in-out ${className}`}
    >
      {children}
      {isLoading ? <LoaderIcon /> : null}
    </button>
  );
}
