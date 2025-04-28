import Image from 'next/image';
import Container from '@/shared/components/container/Container';
import DiscountedProductsSLider from './DiscountedProductsSLider';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

export default function DiscountedProducts() {
  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container className="relative">
        <Image
          src="/images/homePage/discountedProducts/figureRightMob.svg"
          alt="figure background"
          width="125"
          height="179"
          className="xl:hidden absolute top-[-49px] right-[-84px]"
        />
        <Image
          src="/images/homePage/discountedProducts/figureLeftMob.svg"
          alt="figure background"
          width="120"
          height="69"
          className="xl:hidden absolute bottom-[-340px] left-[-82px]"
        />
        <Image
          src="/images/homePage/discountedProducts/figureDesk.svg"
          alt="figure background"
          width="456"
          height="389"
          className="hidden xl:block absolute -z-10 top-[-106px] right-[26px]"
        />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
          <h2 className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
            товари зі знижкою
          </h2>
          <p className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]">
            Знижки, що радують творців
          </p>
        </div>
      </Container>
      <Suspense fallback={<Loader />}>
        <DiscountedProductsSLider />
      </Suspense>
    </section>
  );
}
