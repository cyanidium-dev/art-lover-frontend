'use client';
import { SwiperSlide } from 'swiper/react';
import { categories } from './mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import CategorySlideOneMob from './categoriesSlidesMob/CategorySlideOneMob';
import CategorySlideTwoMob from './categoriesSlidesMob/CategorySlideTwoMob';

export default function CategoriesSlider() {
  if (!categories || !categories.length) return null;

  const categoriesPartOne = categories.slice(0, 5);
  const categoriesPartTwo = categories.slice(5, 10);

  return (
    <div>
      <SwiperWrapper
        swiperClassName="categories"
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide>
          <CategorySlideOneMob categories={categoriesPartOne} />
        </SwiperSlide>
        <SwiperSlide>
          <CategorySlideTwoMob categories={categoriesPartTwo} />
        </SwiperSlide>
      </SwiperWrapper>
    </div>
  );
}
