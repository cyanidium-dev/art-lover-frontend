'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allCategoriesQuery } from '@/shared/lib/queries';
import { Category } from '@/types/category';
import SwiperWrapper from '@/shared/components/swiper/SwiperWrapper';
import CategorySlideOneMob from './categoriesSlidesMob/CategorySlideOneMob';
import CategorySlideTwoMob from './categoriesSlidesMob/CategorySlideTwoMob';
import CategorySlideOneDesk from './categoriesSlidesDesk/CategorySlideOneDesk';
import CategorySlideTwoDesk from './categoriesSlidesDesk/CategorySlideTwoDesk';

export default function CategoriesSlider() {
  const t = useTranslations('header.catalogMenu');
  const locale = useLocale();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchSanityData(allCategoriesQuery, {
        lang: locale,
      });
      setCategories(result);
    };

    loadData();
  }, [locale]);

  if (!categories || !categories.length) return null;

  const categoriesPartOne = [
    {
      title: categories[0].title,
      slug: categories[0].slug,
      description: 'Створи шедевр сьогодні',
    },
    {
      title: categories[4].title,
      slug: categories[4].slug,
      description: 'Краса в деталях',
    },
    { slug: 'gifts', title: t('gifts'), description: t('giftsDescription') },
    {
      slug: 'new-products',
      title: t('newProducts'),
      description: t('newProductsDescription'),
    },
    {
      slug: 'discounts',
      title: t('discounts'),
      description: t('discountsDescription'),
    },
  ];
  const categoriesPartTwo = [
    {
      title: categories[1].title,
      slug: categories[1].slug,
      description: 'Створюйте Надихайтесь',
    },
    {
      title: categories[6].title,
      slug: categories[6].slug,
      description: 'Незамінні дрібниці',
    },
    {
      title: categories[2].title,
      slug: categories[2].slug,
      description: 'Творчість і розваги в одному місці',
    },
    {
      title: categories[3].title,
      slug: categories[3].slug,
      description: 'Краса, що дарує впевненість',
    },
    {
      title: categories[5].title,
      slug: categories[5].slug,
      description: 'Зручність і порядок',
    },
  ];

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
