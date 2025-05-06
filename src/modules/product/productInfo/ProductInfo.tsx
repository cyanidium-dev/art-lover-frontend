import Container from '@/shared/components/container/Container';
import { Product } from '@/types/product';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';
import ProductInfoMob from './ProductInfoMob';
import ProductInfoDesk from './ProductInfoDesk';

interface ProductInfoProps {
  currentProduct: Product;
}

export default function ProductInfo({ currentProduct }: ProductInfoProps) {
  return (
    <section className="pb-20 xl:pb-30">
      <Container>
        <Suspense fallback={<Loader />}>
          <ProductInfoMob currentProduct={currentProduct} />
          <ProductInfoDesk currentProduct={currentProduct} />
        </Suspense>
      </Container>
    </section>
  );
}
