'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

interface ImagePickerProps {
  currentProduct: Product;
}

export default function ImagePicker({ currentProduct }: ImagePickerProps) {
  const { images, price, discountedPrice } = currentProduct;

  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => {
    setCurrentIdx(prev => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIdx(prev => (prev - 1 + images.length) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <div
      className="relative w-full max-w-[600px] xl:w-[540px] mx-auto mb-6"
      {...swipeHandlers}
    >
      <div className="relative overflow-hidden rounded-[6px] xl:rounded-[10px] h-[289px] xs:h-[349px] xl:h-[528px]">
        <AnimatePresence>
          <motion.img
            key={images[currentIdx].url}
            src={images[currentIdx].url}
            alt={images[currentIdx].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {discountedPrice && discountedPrice < price ? (
          <div className="absolute z-10 top-3 xl:top-6 right-3 xl:right-6 flex items-center justify-center size-14 xl:size-25">
            <Image
              src="/images/productPage/imagePicker/star.svg"
              alt="star"
              width={100}
              height={100}
              className="absolute top-0 left-0 -z-10 w-full h-auto"
            />
            <span className="mt-1 xl:mt-1.5 text-[16px] xl:text-[24px] font-semibold leading-none text-white">
              {Math.round(((discountedPrice - price) / price) * 100)}%
            </span>
          </div>
        ) : null}

        {/* Навігація */}
        <button
          onClick={prev}
          className="absolute top-[calc(50%-16px)] xl:top-[calc(50%-20px)] left-2 xl:left-5 flex items-center justify-center size-8 xl:size-10 p-1.5 bg-white rounded-[8px] xl:rounded-[12px] cursor-pointer active:scale-95 transition duration-300 ease-in-out"
        >
          <Image
            src="/images/productPage/imagePicker/arrow.svg"
            alt="arrow icon"
            width={20}
            height={20}
          />
        </button>
        <button
          onClick={next}
          className="absolute top-[calc(50%-16px)] xl:top-[calc(50%-20px)] right-2 xl:right-5 flex items-center justify-center size-8 xl:size-10 p-1.5 bg-white rounded-[8px] xl:rounded-[12px] cursor-pointer active:scale-95 transition duration-300 ease-in-out"
        >
          <Image
            src="/images/productPage/imagePicker/arrow.svg"
            alt="arrow icon"
            width={20}
            height={20}
            className="rotate-180"
          />
        </button>
      </div>

      {/* Прев’юшки */}
      <div
        className="pb-2 mt-4 flex gap-4 xl:gap-x-[15px] overflow-x-auto scrollbar scrollbar-h-[2.5px] xl:scrollbar-h-[4.5px] scrollbar-thumb-rounded-full 
         scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent"
      >
        {images.map((img, idx) => (
          <button
            key={img.url}
            onClick={() => setCurrentIdx(idx)}
            className={`cursor-pointer w-22 xl:w-24 h-22 xl:h-24 rounded-[6px] xl:rounded-[12px] overflow-hidden shrink-0 border-2 ${
              idx === currentIdx
                ? 'border-orange p-[2px]'
                : 'border-transparent p-0'
            }  transition-all duration-300 ease-in-out`}
          >
            <div className={`relative w-full h-full `}>
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="w-full h-full object-cover rounded-[4px] xl:rounded-[8px] transition-all duration-300 ease-in-out"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
