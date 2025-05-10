'use client';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import CrossInCircleIcon from '@/shared/components/icons/CrossInCircleIcon';
import NavbarNav from '@/modules/navbar/NavbarBurgerMenu/NavbarBurgerMenuContent/NavbarNav/NavbarNav';

interface NavbarBurgerMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarBurgerMenuContent = ({
  isOpen,
  onClose,
}: NavbarBurgerMenuContentProps) => {
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
          } absolute z-50 top-22 right-0 left-0 w-[100vw] h-[calc(100dvh-88px)] bg-dark overflow-y-auto flex justify-end`}
        >
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center size-[32px] p-1 xl:p-0"
          >
            {<CrossInCircleIcon className="size-full text-white" />}
          </button>
          <NavbarNav />
        </motion.div>
      </AnimatePresence>,
      modalRef.current
    )
  );
};

export default NavbarBurgerMenuContent;
