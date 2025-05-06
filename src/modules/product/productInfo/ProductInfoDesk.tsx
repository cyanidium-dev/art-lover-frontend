import { Product } from '@/types/product';
import ImagePicker from './ImagePicker';
import Characteristics from './Characteristics';
import Benefits from './Benefits';
import IdealFor from './IdealFor';
import FullDescription from './FullDescription';
import DeliveryInfo from './DeliveryInfo';
import OrderProduct from './orderProduct/OrderProduct';

interface ProductInfoDeskProps {
  currentProduct: Product;
}

export default function ProductInfoDesk({
  currentProduct,
}: ProductInfoDeskProps) {
  return (
    <div className="hidden md:flex md:gap-x-8 lg:gap-x-[49px]">
      <div>
        <ImagePicker currentProduct={currentProduct} />
        <IdealFor currentProduct={currentProduct} />
        <Characteristics currentProduct={currentProduct} />
      </div>
      <div>
        <OrderProduct currentProduct={currentProduct} />
        <FullDescription currentProduct={currentProduct} />
        <DeliveryInfo currentProduct={currentProduct} />
        <Benefits currentProduct={currentProduct} />
      </div>
    </div>
  );
}
