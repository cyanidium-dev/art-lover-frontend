import Container from '@/shared/components/container/Container';
import SimilarProductsSlider from './SimilarProductsSlider';
import SimilarProductsImages from './SimilarProductsImages';

export default function SimilarProducts() {
  return (
    <section className="pb-20 xl:pb-30">
      <Container className="relative">
        <SimilarProductsImages />
        <h2 className="mb-6 xl:mb-5 text-[18px] font-semibold leading-[140%] xl:text-[40px] xl:font-medium xl:leading-[120%] uppercase">
          Схожі товари
        </h2>
        <SimilarProductsSlider />
      </Container>
    </section>
  );
}
