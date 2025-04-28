import Image from 'next/image';
import Container from '@/shared/components/container/Container';
import BestsellersSlider from './BestsellersSlider';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

export default function Bestsellers() {
  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
        <Image
          src="/images/homePage/bestsellers/figureMobile.svg"
          alt="figure background"
          width="94"
          height="113"
          className="xl:hidden absolute -top-4 -right-5"
        />
        <h2 className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
          хіти продажів
        </h2>
        <p className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]">
          Творчість, яка підкорила серця
        </p>
      </Container>
      <Suspense fallback={<Loader />}>
        <BestsellersSlider />
      </Suspense>
    </section>
  );
}
