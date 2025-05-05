import Container from '@/shared/components/container/Container';
import ReviewedProductsSlider from './ReviewedProductsSLider';

export default function ReviewedProducts() {
  return (
    <section className="pb-20 xl:pb-[140px]">
      <Container>
        <h2 className="mb-6 xl:mb-5 text-[18px] font-semibold leading-[140%] xl:text-[40px] xl:font-medium xl:leading-[120%] uppercase">
          переглянуті товари
        </h2>
        <ReviewedProductsSlider />
      </Container>
    </section>
  );
}
