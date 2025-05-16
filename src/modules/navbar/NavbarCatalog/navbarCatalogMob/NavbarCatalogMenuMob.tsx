'use client';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  burgerMenuVariants,
  fadeInAnimation,
} from '@/shared/utils/animationVariants';
import CrossInCircleIcon from '@/shared/components/icons/CrossInCircleIcon';
import Image from 'next/image';
import NavBarCategoriesListMob from './NavBarCategoriesListMob';

interface NavbarCatalogMenuMobProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavbarCatalogMenuMob({
  isOpen,
  onClose,
}: NavbarCatalogMenuMobProps) {
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
            style={{ scrollbarGutter: 'stable' }}
            className={`flex flex-col justify-between md:hidden absolute z-[70] top-22 md:top-0 right-0 w-[100vw] md:w-[495px] bg-white md:bg-dark h-[calc(100dvh-88px)] overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent
                `}
          >
            <div>
              {' '}
              <div className="flex items-center justify-between w-full pl-8 pr-8 pt-4 pb-5">
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
              <NavBarCategoriesListMob onClose={onClose} />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ delay: 0.4, scale: 0.9 })}
              className="w-[360px] h-[131px] ml-auto -mt-[22px]"
            >
              <Image
                src="/images/navbar/catalogMenuFigureMob.svg"
                width="360"
                height="131"
                alt="background"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    modalRef.current
  );
}
