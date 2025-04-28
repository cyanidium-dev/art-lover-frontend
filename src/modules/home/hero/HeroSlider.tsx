'use client';
import { SwiperSlide } from 'swiper/react';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import HeroSlideOne from './HeroSlideOne';

export default function HeroSlider() {
  return (
    <div>
      <SwiperWrapper
        swiperClassName="hero"
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideOne />
        </SwiperSlide>
      </SwiperWrapper>
    </div>
  );
}
