import { Product } from '@/types/product';
import Image from 'next/image';
import SecondaryButton from '../buttons/SecondaryButton';
import CartButton from './CartButton';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, price, discountedPrice, images, slug } = product;

  return (
    <div className="relative p-3 xl:px-5 xl:py-4 bg-white rounded-[8px] xl:rounded-[16px] shadow-social overflow-hidden">
      {discountedPrice && discountedPrice < price ? (
        <div
          className="flex items-center gap-x-[11px] absolute z-10 top-0 md:top-[-12px] left-[19px] rotate-[29deg] w-[233px] xl:w-[278px] py-[5px] xl:py-[7px] pl-[44px] xl:pl-[25px] bg-orange 
        text-white text-[8px] xl:text-[12px] font-semibold leading-[120%] uppercase"
        >
          <span>Акція</span> <span>Акція</span> <span>Акція</span>
          <span>Акція</span> <span>Акція</span>
        </div>
      ) : null}
      <Link href={`/products/${slug}`}>
        <div className="relative h-[120px] md:h-[180px] lg:h-[200px] xl:h-[300px] mb-3 xl:mb-4 rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <Image
            src={images[0]?.url || ''}
            alt={images[0]?.url || 'product'}
            fill
            className="object-cover"
          />
        </div>
        {discountedPrice && discountedPrice < price ? (
          <p className="mb-1.5 xl:mb-2 ">
            <span className="text-[14px] xl:text-[16px] font-medium leading-[120%] text-orange">
              {discountedPrice} грн
            </span>
            &nbsp;
            <span className="text-[12px] xl:text-[14px] font-normal leading-[120%] line-through">
              {price} грн
            </span>
          </p>
        ) : (
          <p className="mb-1.5 xl:mb-2 text-[14px] xl:text-[16px] font-medium leading-[120%]">
            {price} грн
          </p>
        )}
        <h3 className="mb-4 xl:mb-[18px] text-[14px] xl:text-[18px] font-medium leading-[120%] line-clamp-1">
          {title}
        </h3>
      </Link>
      <div className="flex gap-x-4.5 xl:gap-x-2">
        <Link href={`/products/${slug}`} className="block w-full">
          <SecondaryButton className="h-9 xl:h-10">Детальніше</SecondaryButton>
        </Link>
        <CartButton className="shrink-0" />
      </div>
    </div>
  );
}
