'use client';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { categories } from './mockedData';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import CategorySlideOneMob from './categoriesSlidesMob/CategorySlideOneMob';
import CategorySlideTwoMob from './categoriesSlidesMob/CategorySlideTwoMob';
import CategorySlideOneDesk from './categoriesSlidesDesk/CategorySlideOneDesk';
import CategorySlideTwoDesk from './categoriesSlidesDesk/CategorySlideTwoDesk';

export default function CategoriesSlider() {
  if (!categories || !categories.length) return null;

  const categoriesPartOne = categories.slice(0, 5);
  const categoriesPartTwo = categories.slice(5, 10);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30 })}
    >
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
          <CategorySlideOneDesk categories={categoriesPartOne} />
        </SwiperSlide>
        <SwiperSlide>
          <CategorySlideTwoMob categories={categoriesPartTwo} />
          <CategorySlideTwoDesk categories={categoriesPartTwo} />
        </SwiperSlide>
      </SwiperWrapper>
    </motion.div>
  );
}
