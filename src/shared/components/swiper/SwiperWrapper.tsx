'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import { ReactNode } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

interface SwiperWrapperProps {
  children: ReactNode;
  slidesPerView?: number | 'auto' | undefined;
}

export default function SwiperWrapper({
  children,
  slidesPerView = 'auto',
}: SwiperWrapperProps) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      centeredSlides
      breakpoints={{
        0: {
          spaceBetween: 16,
        },
        768: {
          spaceBetween: 20,
        },
      }}
      navigation={true}
      loop={true}
      speed={1000}
      modules={[Navigation, Pagination]}
    >
      {children}
    </Swiper>
  );
}
