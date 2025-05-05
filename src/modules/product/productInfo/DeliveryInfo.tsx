import { Product } from '@/types/product';

interface DeliveryInfoProps {
  currentProduct: Product;
}

export default function DeliveryInfo({ currentProduct }: DeliveryInfoProps) {
  if (!currentProduct?.delivery) return null;

  return <div className="mb-6">DeliveryInfo</div>;
}
