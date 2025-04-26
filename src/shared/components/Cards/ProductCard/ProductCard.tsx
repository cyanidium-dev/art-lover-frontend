import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-3 bg-white rounded-[8px] xl:rounded-[16px] shadow-social">
      ProductCard
    </div>
  );
}
