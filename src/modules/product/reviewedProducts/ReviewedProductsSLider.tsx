'use client';

import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { productsList } from '@/modules/home/bestsellers/mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ProductCard from '@/shared/components/productCard/ProductCard';

export default function ReviewedProductsSlider() {
  if (!productsList || !productsList.length) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.4 })}
    >
      <SwiperWrapper
        swiperClassName="reviewed-products"
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
        {productsList.map((reviewedProduct, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard product={reviewedProduct} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </motion.div>
  );
}
