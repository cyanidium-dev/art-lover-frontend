'use client';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { burgerMenuVariants } from '@/shared/utils/animationVariants';
import CrossInCircleIcon from '@/shared/components/icons/CrossInCircleIcon';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import NavBarCategoriesList from './NavBarCategoriesList';

interface NavbarCatalogMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavbarCatalogMenu({
  isOpen,
  onClose,
}: NavbarCatalogMenuProps) {
  const modalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    modalRef.current = document?.getElementById('modal');
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }

    return () => body.classList.remove('no-scroll');
  }, [isOpen]);

  if (!modalRef.current) return null;

  return createPortal(
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={burgerMenuVariants}
            className={`absolute z-[70] top-22 md:top-0 right-0 w-[100vw] md:w-[495px] h-[calc(100dvh-88px)] md:h-[100dvh] pr-1 bg-white md:bg-dark 
              overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent`}
          >
            <div className="flex items-center justify-between w-full pl-8 pr-7 md:px-[50px] pt-4 md:pt-7 pb-[46px] md:pb-8">
              <h2 className="text-[20px] font-semibold leading-[120% text-orange">
                Каталог
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer flex md:hidden items-center justify-center size-[32px] p-1 md:p-0 text-orange  xl:hover:text-dark focus-visible:text-dark transition duration-300 ease-in-out"
              >
                {<CrossInCircleIcon className="size-full" />}
              </button>
            </div>
            <NavBarCategoriesList onClose={onClose} />
          </motion.div>
        )}
      </AnimatePresence>
      <Backdrop
        className="hidden md:block"
        isVisible={isOpen}
        onClick={onClose}
      />
    </>,
    modalRef.current
  );
}
