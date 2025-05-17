'use client';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import NavbarCatalogMenuMob from './navbarCatalogMob/NavbarCatalogMenuMob';
import NavbarCatalogMenuDesk from './navbarCatalogDesk/NavbarCatalogMenuDesk';

interface NavbarCatalogProps {
  isOpenCatalogMenu: boolean;
  setIsOpenBurgerMenu: Dispatch<SetStateAction<boolean>>;
  setIsOpenCatalogMenu: Dispatch<SetStateAction<boolean>>;
  setIsCartModalOpened: Dispatch<SetStateAction<boolean>>;
}

const NavbarCatalog = ({
  isOpenCatalogMenu,
  setIsOpenBurgerMenu,
  setIsOpenCatalogMenu,
  setIsCartModalOpened,
}: NavbarCatalogProps) => {
  return (
    <div className="md:relative w-full h-full">
      <button
        type="button"
        onClick={() => {
          setIsOpenCatalogMenu(true);
          setIsOpenBurgerMenu(false);
          setIsCartModalOpened(false);
        }}
        className="cursor-pointer justify-center xl:justify-start xl:gap-x-[76px] bg-orange xl:hover:brightness-125 focus-visible:brightness-125 rounded-[20px] 
      xl:px-[27px] h-[32px] xl:h-[46px] w-[44px] xl:w-[264px] flex items-center gap-[32px] transition duration-300 ease-in-out"
      >
        <Image
          src="/images/navbar/catalogIcon.svg"
          alt="background"
          width="14"
          height="12"
        />
        <span className="text-[16px] font-semibold text-white hidden xl:block">
          Каталог
        </span>
      </button>
      <NavbarCatalogMenuMob
        isOpen={isOpenCatalogMenu}
        onClose={() => setIsOpenCatalogMenu(false)}
      />
      <NavbarCatalogMenuDesk
        isOpen={isOpenCatalogMenu}
        onClose={() => setIsOpenCatalogMenu(false)}
      />
    </div>
  );
};

export default NavbarCatalog;
