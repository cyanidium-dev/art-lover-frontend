'use client';
import Container from '@/shared/components/container/Container';
import ReviewsSlider from './ReviewsSlider';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

export default function Reviews() {
  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
          <h2 className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
            Відгуки
          </h2>
          <p className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]">
            Враження про наш магазин
          </p>
        </div>
      </Container>
      <Suspense fallback={<Loader />}>
        <ReviewsSlider />
      </Suspense>
    </section>
  );
}
