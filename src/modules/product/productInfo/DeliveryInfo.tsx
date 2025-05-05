'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface DeliveryInfoProps {
  currentProduct: Product;
}

export default function DeliveryInfo({ currentProduct }: DeliveryInfoProps) {
  const [isShownMore, setIsShownMore] = useState(false);
  const toggleShowMore = () => setIsShownMore(!isShownMore);

  if (!currentProduct?.delivery) return null;

  const { delivery } = currentProduct;

  return (
    <div
      onClick={toggleShowMore}
      className="cursor-pointer mb-6 px-4 xl:p-7 py-6 rounded-[6px] xl:rounded-[8px] border border-dark"
    >
      <div className="flex items-center">
        <Image
          src="/images/productPage/productInfo/globe.svg"
          alt="clipboard icon"
          width={20}
          height={20}
          className="w-5 xl:w-[25px] h-auto"
        />
        <h3 className="ml-[14px] text-[16px] xl:text-[24px] font-medium leading-[120%]">
          Доставка та повернення
        </h3>
        <Image
          src="/images/productPage/productInfo/arrow.svg"
          alt="arrow icon"
          width={16}
          height={16}
          className={`w-4 xl:w-[22px] h-auto ml-auto transition duration-500 ease-in-out ${
            isShownMore ? 'rotate-0' : '-rotate-90'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ${
          isShownMore ? 'max-h-[600px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        <p
          className={`pt-4 xl:pt-6 xl:pb-3 text-[12px] xl:text-[14px] font-light leading-[120%] text-justify`}
        >
          {delivery}
        </p>
      </div>
    </div>
  );
}
