'use client';

import { SwiperSlide } from 'swiper/react';
import { reviewsList } from './mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ReviewCard from './ReviewCard';

export default function ReviewsSlider() {
  return (
    <div className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto">
      <SwiperWrapper
        swiperClassName="reviews"
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
        {reviewsList.map((review, idx) => (
          <SwiperSlide key={idx}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </div>
  );
}
