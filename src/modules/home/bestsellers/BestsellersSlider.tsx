'use client';

import { SwiperSlide } from 'swiper/react';
import { productsList } from './mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ProductCard from '@/shared/components/productCard/ProductCard';

export default function BestsellersSlider() {
  if (!productsList || !productsList.length) return null;

  const bestsellersList = productsList.filter(product => product.bestseller);

  if (!bestsellersList || !bestsellersList.length) return null;

  return (
    <div className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto">
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
            <ProductCard product={bestseller} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </div>
  );
}
