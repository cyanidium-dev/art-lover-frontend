import Container from '@/shared/components/container/Container';
import Loader from '@/shared/components/loader/Loader';
import { Suspense } from 'react';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import CategoriesSlider from './CategoriesSlider';

export default function Categories() {
  return (
    <section className="pt-20 xl:pt-[110px]">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-6 xl:mb-9 text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase"
        >
          Категорії товарів
        </motion.h2>
        <Suspense fallback={<Loader />}>
          <CategoriesSlider />
        </Suspense>
      </Container>
    </section>
  );
}
