"use client";
import {useState, useRef, useEffect, useCallback} from "react";

import NavbarBurgerMenuButton from './NavbarBurgerMenuButton/NavbarBurgerMenuButton';
import NavbarBurgerMenuContent from './NavbarBurgerMenuContent/NavbarBurgerMenuContent';

const NavbarBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current = document?.getElementById("modal");
  }, []);

  const toggleOpen = useCallback(()=> setIsOpen(prevState => !prevState), []);

  return (
    <>
    <NavbarBurgerMenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
      <NavbarBurgerMenuContent isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  )
}

export default NavbarBurgerMenu;
