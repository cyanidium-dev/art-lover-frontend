import Container from '@/shared/components/container/Container';
import SocialsList from './SocialsList';
import { Suspense } from 'react';
import Loader from '../loader/Loader';

export default function Socials() {
  return (
    <section className="py-20 xl:pt-[70px] xl:pb-[140px]">
      <Container>
        <h2 className="mb-8 xl:mb-10 text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase text-center">
          Стежте за нами в соціальних мережах
        </h2>
        <Suspense fallback={<Loader />}>
          <SocialsList />
        </Suspense>
      </Container>
    </section>
  );
}
