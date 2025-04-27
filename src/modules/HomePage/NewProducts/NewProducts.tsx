'use client';
import { SwiperSlide } from 'swiper/react';
import { productsList } from '../bestsellers/mockedData';
import ProductCard from '@/shared/components/cards/ProductCard/ProductCard';
import Container from '@/shared/components/container/Container';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';

export default function NewProducts() {
  if (!productsList || !productsList.length) return null;

  const newProductsList = productsList.filter(product => product.newProduct);

  if (!newProductsList || !newProductsList.length) return null;

  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
          <h2 className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
            наші новинки
          </h2>
          <p className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]">
            Свіжі ідеї для вашої творчості
          </p>
        </div>
      </Container>
      <div className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto">
        <SwiperWrapper
          swiperClassName="newProducts"
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
          {newProductsList.map((newProduct, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={newProduct} />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>
    </section>
  );
}
