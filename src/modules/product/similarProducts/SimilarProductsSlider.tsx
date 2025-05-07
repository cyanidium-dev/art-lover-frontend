'use client';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { productsList } from '@/modules/home/bestsellers/mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ProductCard from '@/shared/components/productCard/ProductCard';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';

export default function SimilarProductsSlider() {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);

  if (!productsList || !productsList.length) return null;

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      >
        <SwiperWrapper
          swiperClassName="similar-products"
          loop
          breakpoints={{
            0: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            574: { spaceBetween: 16, slidesPerView: 3 },
            1024: {
              spaceBetween: 16,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
        >
          {productsList.map((similarProduct, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard
                setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
                product={similarProduct}
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
