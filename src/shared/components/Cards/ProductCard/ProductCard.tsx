import { Product } from '@/types/product';
import Image from 'next/image';
import SecondaryButton from '../../buttons/SecondaryButton';
import CartButton from './CartButton';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, price, images, slug } = product;

  return (
    <div className="p-3 bg-white rounded-[8px] xl:rounded-[16px] shadow-social">
      <div className="relative h-[120px] md:h-[180px] lg:h-[200px] xl:h-[300px] mb-3 xl:mb-4 rounded-[8px] xl:rounded-[16px] overflow-hidden">
        <Image
          src={images[0]?.url || ''}
          alt={images[0]?.url || 'product'}
          fill
          className="object-cover"
        />
      </div>
      <p className="mb-1.5 xl:mb-2 text-[14px] xl:text-[16px] font-medium leading-[120%]">
        {price} грн
      </p>
      <h3 className="mb-4 xl:mb-[18px] text-[14px] xl:text-[18px] font-medium leading-[120%] line-clamp-1">
        {title}
      </h3>
      <div className="flex gap-x-4.5 xl:gap-x-2">
        <Link href={slug} className="block w-full">
          <SecondaryButton className="h-9 xl:h-10">Детальніше</SecondaryButton>
        </Link>
        <CartButton className="shrink-0" />
      </div>
    </div>
  );
}
