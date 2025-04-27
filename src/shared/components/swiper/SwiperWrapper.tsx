'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { createPagination } from './CustomPagination';

interface SwiperWrapperProps {
  children: ReactNode;
  slidesPerView?: number | 'auto' | undefined;
  breakpoints: SwiperOptions['breakpoints'];
  swiperClassName: string;
}

export default function SwiperWrapper({
  children,
  slidesPerView = 'auto',
  breakpoints,
  swiperClassName,
}: SwiperWrapperProps) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      pagination={createPagination(4)}
      breakpoints={breakpoints}
      navigation={true}
      loop={true}
      speed={1000}
      modules={[Navigation, Pagination]}
      className={swiperClassName}
    >
      {children}
    </Swiper>
  );
}
