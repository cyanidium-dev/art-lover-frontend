'use client';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { productsList } from './mockedData';
import Container from '@/shared/components/container/Container';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ProductCard from '@/shared/components/productCard/ProductCard';

export default function Bestsellers() {
  if (!productsList || !productsList.length) return null;

  const bestsellersList = productsList.filter(product => product.bestseller);

  if (!bestsellersList || !bestsellersList.length) return null;

  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
        <Image
          src="/images/homePage/bestsellers/figureMobile.svg"
          alt="figure background"
          width="94"
          height="113"
          className="xl:hidden absolute -top-4 -right-5"
        />
        <h2 className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
          хіти продажів
        </h2>
        <p className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]">
          Творчість, яка підкорила серця
        </p>
      </Container>
      <div className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto">
        <SwiperWrapper
          swiperClassName="bestsellers"
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
    </section>
  );
}
