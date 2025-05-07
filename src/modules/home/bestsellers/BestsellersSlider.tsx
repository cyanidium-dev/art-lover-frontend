'use client';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { productsList } from './mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ProductCard from '@/shared/components/productCard/ProductCard';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';

export default function BestsellersSlider() {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);

  if (!productsList || !productsList.length) return null;

  const bestsellersList = productsList.filter(product => product.bestseller);

  if (!bestsellersList || !bestsellersList.length) return null;

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 0.4 })}
        className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto"
      >
        <SwiperWrapper
          swiperClassName="bestsellers"
          loop
          breakpoints={{
            0: {
              spaceBetween: 16,
              centeredSlides: true,
            },
            768: { spaceBetween: 16, centeredSlides: false },
            1024: { spaceBetween: 20, centeredSlides: false },
            1280: {
              spaceBetween: 20,
              centeredSlides: false,
            },
          }}
        >
          {bestsellersList.map((bestseller, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard
                setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
                product={bestseller}
              />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </motion.div>
      <AddedToCartPopUp
        isPopUpShown={isAddedToCartPopUpShown}
        setIsPopUpShown={setIsAddedToCartPopUpShown}
      />
      <Backdrop
        isVisible={isAddedToCartPopUpShown}
        onClick={() => setIsAddedToCartPopUpShown(false)}
      />
    </>
  );
}
