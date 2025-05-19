'use client';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { headerPhoneRegex } from '@/shared/regex/regex';
import {
  burgerMenuVariants,
  fadeInAnimation,
} from '@/shared/utils/animationVariants';
import CrossInCircleIcon from '@/shared/components/icons/CrossInCircleIcon';
import NavbarNav from '@/modules/navbar/NavbarBurgerMenu/NavbarBurgerMenuContent/NavbarNav/NavbarMenu';
import MainButton from '@/shared/components/buttons/MainButton';
import Backdrop from '@/shared/components/backdrop/Backdrop';

interface NavbarBurgerMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHONE = '+380-97-006-84-08';

const NavbarBurgerMenuContent = ({
  isOpen,
  onClose,
}: NavbarBurgerMenuContentProps) => {
  const t = useTranslations('header.burger');
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
            className={`absolute z-[70] top-22 md:top-0 right-0 w-[100vw] md:w-[495px] h-[calc(100dvh-88px)] md:h-[100dvh] bg-dark md:bg-white overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent`}
          >
            <div className="w-full px-8 md:px-[50px] pt-4 md:pt-7 pb-[46px] md:pb-8">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer flex items-center justify-center size-[32px] p-1 md:p-0 mb-2 md:mb-10 ml-auto text-white md:text-dark xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
              >
                {<CrossInCircleIcon className="size-full" />}
              </button>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation({ y: 30, delay: 0.4 })}
                className="max-w-[264px] md:max-w-full mb-4.5 text-[20px] md:text-[36px] font-semibold md:font-medium leading-[160%] md:leading-[120%] md:text-center uppercasec text-white md:text-dark"
              >
                {t('title')}
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation({ y: 30, delay: 0.6 })}
              >
                <p className="hidden md:block mb-8 text-[16px] font-light leading-[120%] text-justify">
                  {t('description')}
                </p>
                <a
                  href={`tel:+${PHONE.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="phone number"
                  className="block w-fit min-w-[264px] md:min-w-[218px] md:mx-auto"
                >
                  <MainButton
                    className="max-w-[264px] md:w-[218px] h-9 md:h-11 mb-2"
                    textStyles="text-[12px] md:text-[16px] font-medium md:font-normal"
                  >
                    {PHONE.replace(headerPhoneRegex, '$1-$2-$3-$4-$5')}
                  </MainButton>
                </a>
              </motion.div>
              <NavbarNav onClose={onClose} />
            </div>
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
};

export default NavbarBurgerMenuContent;
