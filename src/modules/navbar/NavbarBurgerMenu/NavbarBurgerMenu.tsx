'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

import NavbarBurgerMenuButton from './NavbarBurgerMenuButton/NavbarBurgerMenuButton';
import NavbarBurgerMenuContent from './NavbarBurgerMenuContent/NavbarBurgerMenuContent';

const NavbarBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current = document?.getElementById('modal');
  }, []);

  const toggleOpen = useCallback(() => setIsOpen(prevState => !prevState), []);

  return (
    <>
      <NavbarBurgerMenuButton onOpen={() => setIsOpen(true)} />
      <NavbarBurgerMenuContent isOpen={isOpen} onClose={toggleOpen} />
    </>
  );
};

export default NavbarBurgerMenu;
