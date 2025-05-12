'use client';
import { useState, useRef, useEffect } from 'react';

import NavbarBurgerMenuButton from './NavbarBurgerMenuButton/NavbarBurgerMenuButton';
import NavbarBurgerMenuContent from './NavbarBurgerMenuContent/NavbarBurgerMenuContent';

const NavbarBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    modalRef.current = document?.getElementById('modal');
  }, []);

  return (
    <>
      <NavbarBurgerMenuButton onOpen={() => setIsOpen(true)} />
      <NavbarBurgerMenuContent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default NavbarBurgerMenu;
