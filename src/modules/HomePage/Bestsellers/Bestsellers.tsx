import ProductCard from '@/shared/components/Cards/ProductCard/ProductCard';
import Container from '@/shared/components/Container/Container';

export default function Bestsellers() {
  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
          <h2 className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
            хіти продажів
          </h2>
          <p className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]">
            Творчість, яка підкорила серця
          </p>
        </div>
        <ProductCard />
      </Container>
    </section>
  );
}
