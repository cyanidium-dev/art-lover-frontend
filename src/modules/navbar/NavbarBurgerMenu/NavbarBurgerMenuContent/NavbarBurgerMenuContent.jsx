'use client';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import NavbarNav from '@/modules/navbar/NavbarBurgerMenu/NavbarBurgerMenuContent/NavbarNav/NavbarNav';

const NavbarBurgerMenuContent = ({ isOpen, toggleOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current = document?.getElementById('modal');
    console.log(modalRef.current);
  }, []);

  return (
    isOpen &&
    createPortal(
      <AnimatePresence mode="wait">
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`${
            isOpen ? 'no-doc-scroll' : ''
          } z-50 top-0 right-0 left-0 w-[100vw] h-[100vh] bg-[#0000005C] overflow-y-auto flex justify-end`}
        >
          <NavbarNav />
        </motion.div>
      </AnimatePresence>,
      modalRef.current
    )
  );
};

export default NavbarBurgerMenuContent;
