import Container from '@/shared/components/container/Container';
import ImagePicker from './ImagePicker';
import Characteristics from './Characteristics';
import Benefits from './Benefits';
import IdealFor from './IdealFor';
import { Product } from '@/types/product';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';
import FullDescription from './FullDescription';
import DeliveryInfo from './DeliveryInfo';
import OrderProduct from './orderProduct/OrderProduct';

interface ProductInfoProps {
  currentProduct: Product;
}

export default function ProductInfo({ currentProduct }: ProductInfoProps) {
  return (
    <section className="pb-20 xl:pb-30">
      <Container>
        <Suspense fallback={<Loader />}>
          <ImagePicker />
          <OrderProduct currentProduct={currentProduct} />
          <FullDescription currentProduct={currentProduct} />
          <DeliveryInfo currentProduct={currentProduct} />
          <Benefits currentProduct={currentProduct} />
          <IdealFor currentProduct={currentProduct} />
          <Characteristics currentProduct={currentProduct} />
        </Suspense>
      </Container>
    </section>
  );
}
