'use client';
import { SwiperSlide } from 'swiper/react';
import { productsList } from '../bestsellers/mockedData';
import ProductCard from '@/shared/components/productCard/ProductCard';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';

export default function DiscountedProductsSLider() {
  if (!productsList || !productsList.length) return null;

  const discountedProductsList = productsList.filter(
    product => product.discountedPrice
  );

  if (!discountedProductsList || !discountedProductsList.length) return null;

  return (
    <div className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto">
      <SwiperWrapper
        swiperClassName="newProducts"
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
        {discountedProductsList.map((discountedProduct, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard product={discountedProduct} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </div>
  );
}
