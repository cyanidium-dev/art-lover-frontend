import Container from '@/shared/components/container/Container';
import DeliveryList from './DeliveryList';
import UkraineDeliveryImages from './UkraineDeliveryImages';

export default function UkraineDelivery() {
  return (
    <section className="pt-20 xl:pt-[218px]">
      <Container className="relative">
        <UkraineDeliveryImages />
        <h2 className="mb-3 xl:mb-5 text-[20px] xl:text-[32px] font-medium leading-[120%] uppercase text-center">
          Доставка по Україні
        </h2>
        <h3 className="mb-8 xl:mb-[30px] text-[14px] xl:text-[20px] font-medium leading-[120%] text-center">
          Способи доставки:
        </h3>
        <DeliveryList />
      </Container>
    </section>
  );
}
