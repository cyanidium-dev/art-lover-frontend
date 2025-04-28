import Container from '@/shared/components/container/Container';
import Loader from '@/shared/components/loader/Loader';
import { Suspense } from 'react';
import CategoriesSlider from './CategoriesSlider';

export default function Categories() {
  return (
    <section className="pt-20 xl:pt-[110px]">
      <Container>
        <h2 className="mb-6 xl:mb-9 text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
          Категорії товарів
        </h2>
        <Suspense fallback={<Loader />}>
          <CategoriesSlider />
        </Suspense>
      </Container>
    </section>
  );
}
