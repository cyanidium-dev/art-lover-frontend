'use client';
import Container from '@/shared/components/container/Container';
import ReviewsSlider from './ReviewsSlider';
import { Suspense } from 'react';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Loader from '@/shared/components/loader/Loader';

export default function Reviews() {
  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInAnimation({ x: -30 })}
            className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase"
          >
            Відгуки
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInAnimation({ x: 30 })}
            className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]"
          >
            Враження про наш магазин
          </motion.p>
        </div>
      </Container>
      <Suspense fallback={<Loader />}>
        <ReviewsSlider />
      </Suspense>
    </section>
  );
}
