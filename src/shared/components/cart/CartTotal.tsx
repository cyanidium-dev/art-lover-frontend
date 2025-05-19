'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import MainButton from '../buttons/MainButton';
import { motion } from 'framer-motion';
import { getTotalSum } from '@/shared/utils/getTotalSum';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { CartItem } from '@/types/cartItem';

interface CartTotalProps {
  cartItems: CartItem[];
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CartTotal({
  setIsPopUpShown,
  cartItems,
}: CartTotalProps) {
  const [total, setTotal] = useState(0);

  const sum = getTotalSum(cartItems);

  useEffect(() => {
    setTotal(sum);
  }, [sum]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 1.1 })}
      className="fixed bottom-0 right-0 w-full max-w-[515px] px-8 xl:px-9 py-4 xl:py-[26px] bg-white rounded-tr-[16px] rounded-tl-[16px]"
    >
      <div className="flex flex-row items-center justify-between mb-2 xl:mb-3">
        <p className="text-[12px] xl:text-[16px] font-normal leading-[120%]">
          Кількість товарів у кошику
        </p>
        <p className="text-[12px] xl:text-[20px] font-normal xl:font-medium leading-[120%]">
          {cartItems?.length}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between mb-3 xl:mb-6">
        <p className="text-[12px] xl:text-[16px] font-medium xl:font-normal leading-[120%]">
          Загальна вартість
        </p>
        <p className="text-[12px] xl:text-[24px] font-medium leading-[120%]">
          {total}&nbsp;грн
        </p>
      </div>
      <Link href="/checkout" onClick={() => setIsPopUpShown(false)}>
        <MainButton
          disabled={!cartItems?.length}
          className="w-full h-9 xl:h-12"
          textStyles="text-[12px] xl:text-[14px] font-medium"
        >
          Оформити замовлення
        </MainButton>
      </Link>
    </motion.div>
  );
}
