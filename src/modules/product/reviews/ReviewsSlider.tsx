'use client';

import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { reviewsList } from '@/modules/home/reviews/mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import ReviewCard from './ReviewCard';

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

export default function ReviewsSlider() {
  const chunkedReviews = chunkArray(reviewsList, 3); // по 3 у слайді

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.4 })}
      className="md:max-w-[774px] lg:max-w-[1030px] xl:max-w-[1286px] md:px-8 xl:px-[90px] md:mx-auto"
    >
      <SwiperWrapper
        swiperClassName="product-reviews"
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        }}
      >
        {chunkedReviews.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col gap-y-4 xl:gap-y-5">
              {group.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </motion.div>
  );
}
