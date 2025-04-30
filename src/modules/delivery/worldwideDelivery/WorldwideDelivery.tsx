import Image from 'next/image';
import Container from '@/shared/components/container/Container';
import DeliveryList from './DeliveryList';

export default function WorldwideDelivery() {
  return (
    <section className="pt-20 xl:pt-[150px] xl:pb-20">
      <Container className="relative">
        <Image
          src="/images/deliveryPage/worldwideDelivery/figureRightDesk.svg"
          alt="background"
          width="619"
          height="437"
          className="hidden xl:block absolute -z-10 bottom-[-60px] right-[-70px]"
        />
        <h2 className="mb-3 xl:mb-5 text-[20px] xl:text-[32px] font-medium leading-[120%] uppercase text-center">
          Міжнародна доставка
        </h2>
        <h3 className="mb-8 xl:mb-[30px] text-[14px] xl:text-[20px] font-medium leading-[120%] text-center">
          Способи доставки:
        </h3>
        <DeliveryList />
      </Container>
    </section>
  );
}
