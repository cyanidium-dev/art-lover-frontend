import { Dispatch, SetStateAction } from 'react';
import CartIcon from '../icons/CartIcon';

interface CartButtonProps {
  setIsAddedToCartPopUpShown: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function CartButton({
  setIsAddedToCartPopUpShown,
  className,
}: CartButtonProps) {
  const handleClick = () => {
    setIsAddedToCartPopUpShown(true);
  };

  return (
    <>
      <button
        id="cart-button"
        onClick={handleClick}
        className={`cursor-pointer relative flex items-center justify-center size-9 xl:w-[46px] xl:h-10 rounded-[8px] text-white bg-orange
        xl:hover:brightness-110 focus-visible:brightness-110 active:scale-95 transition duration-300 ease-in-out ${className}`}
      >
        <CartIcon />
      </button>
    </>
  );
}
