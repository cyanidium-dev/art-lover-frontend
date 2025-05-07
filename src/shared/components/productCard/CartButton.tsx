'use client';
import { useState } from 'react';
import Backdrop from '../backdrop/Backdrop';
import CartIcon from '../icons/CartIcon';
import AddedToCartPopUp from '../pop-ups/AddedToCartPopUp';

interface CartButtonProps {
  className?: string;
}

export default function CartButton({ className }: CartButtonProps) {
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  const handleClick = () => {
    setIsPopUpShown(true);
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
      <AddedToCartPopUp
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
      />
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
