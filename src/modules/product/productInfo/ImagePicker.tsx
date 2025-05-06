import { Product } from '@/types/product';

interface ImagePickerProps {
  currentProduct: Product;
}

export default function ImagePicker({ currentProduct }: ImagePickerProps) {
  const { images, price, discountedPrice } = currentProduct;

  return <div className="mb-8">ImagePicker</div>;
}
