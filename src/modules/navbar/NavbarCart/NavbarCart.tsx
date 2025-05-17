'use client';
import { Dispatch, SetStateAction } from 'react';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import CartIconFilled from '@/shared/components/icons/CartIconFilled';

interface NavbarCartProps {
  isCartModalOpened: boolean;
  setIsOpenBurgerMenu: Dispatch<SetStateAction<boolean>>;
  setIsOpenCatalogMenu: Dispatch<SetStateAction<boolean>>;
  setIsCartModalOpened: Dispatch<SetStateAction<boolean>>;
}

const NavbarCart = ({
  isCartModalOpened,
  setIsCartModalOpened,
  setIsOpenBurgerMenu,
  setIsOpenCatalogMenu,
}: NavbarCartProps) => {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsCartModalOpened(true);
          setIsOpenBurgerMenu(false);
          setIsOpenCatalogMenu(false);
        }}
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
