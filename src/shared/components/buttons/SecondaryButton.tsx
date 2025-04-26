import { Dispatch, ReactNode, SetStateAction } from 'react';

interface SecondaryButtonProps {
  children: string | ReactNode;
  className?: string;
  onClick?: () => void | Dispatch<SetStateAction<boolean>>;
}

export default function SecondaryButton({
  children,
  className = '',
  onClick,
}: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full px-3 py-[5.5px] rounded-full border-[1.5px] border-black bg-white 
        text-[10px] xl:text-[14px] font-normal leading-[120%] xl:hover:text-white xl:hover:bg-dark focus-visible:text-white focus-visible:bg-dark transition 
        duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
