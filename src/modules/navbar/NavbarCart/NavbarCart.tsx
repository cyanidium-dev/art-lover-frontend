'use client';
import { useState } from 'react';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import CartIconFilled from '@/shared/components/icons/CartIconFilled';

const NavbarCart = () => {
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsCartModalOpened(true)}
        aria-label="cart button"
        className="cursor-pointer outline-none xl:hover:text-orange focus-visible:text-orange active:scale-95 transition duration-300 ease-in-out"
      >
        <CartIconFilled className="size-5 xl:size-[34px]" />
      </button>
      <CartModal
        isPopUpShown={isCartModalOpened}
        setIsPopUpShown={setIsCartModalOpened}
      />
      <Backdrop
        isVisible={isCartModalOpened}
        onClick={() => setIsCartModalOpened(false)}
      />
    </>
  );
};

export default NavbarCart;
