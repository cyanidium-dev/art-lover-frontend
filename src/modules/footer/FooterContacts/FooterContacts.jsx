'use client';
import { useState } from 'react';
import Image from 'next/image';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import * as motion from 'motion/react-client';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';

const FooterContacts = () => {
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      >
        <a
          href="tel:0 800 550 130"
          className="text-orange text-[14px] xl:text-[16px] font-semibold mb-[8px]"
        >
          0 800 550 130
        </a>
        <p className="text-white text-[12px] xl:text-[14px] mb-[32px]">
          Безкоштовно
        </p>
        <p className="text-white text-[14px] xl:text-[16px] font-semibold mb-[8px]">
          Пн-Пт: 09:00-00:00
        </p>
        <p className="text-white text-[14px] xl:text-[16px] font-semibold mb-[32px] xl:mb[40px]">
          Сб-Нд: 10:00-20:00
        </p>
        <button
          type="button"
          onClick={() => setIsCartModalOpened(true)}
          className="hidden xl:flex cursor-pointer bg-white w-[167px] py-[8px] px-[14px] rounded-[20px] gap-[25px] items-center"
        >
          <Image
            src="/images/footer/footerContacts/cartIcon.svg"
            alt="background"
            width="18"
            height="18"
          />
          <span className="text-[14px] font-semibold">Кошик</span>
        </button>
      </motion.div>
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

export default FooterContacts;
