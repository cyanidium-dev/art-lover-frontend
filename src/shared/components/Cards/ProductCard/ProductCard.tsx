import { Product } from '@/types/product';
import Image from 'next/image';
import SecondaryButton from '../../buttons/SecondaryButton';
import CartButton from './CartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, price, images } = product;

  return (
    <div className="p-3 bg-white rounded-[8px] xl:rounded-[16px] shadow-social">
      <div className="relative h-[120px] md:h-[180px] lg:h-[200px] xl:h-[300px] mb-3 rounded-[8px] xl:rounded-[16px] overflow-hidden">
        <Image
          src={images[0]?.url || ''}
          alt={images[0]?.url || 'product'}
          fill
          className="object-cover"
        />
      </div>
      <p className="mb-1.5 text-[14px] font-medium leading-[120%]">
        {price} грн
      </p>
      <h3 className="mb-4 text-[14px] font-medium leading-[120%] line-clamp-1">
        {title}
      </h3>
      <div className="flex gap-x-4.5">
        <SecondaryButton className="h-9">Детальніше</SecondaryButton>
        <CartButton className="shrink-0" />
      </div>
    </div>
  );
}
