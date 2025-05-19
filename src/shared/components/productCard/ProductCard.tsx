import { Dispatch, SetStateAction } from 'react';
import { useCartStore } from '@/shared/store/cartStore';
import { Product } from '@/types/product';
import Image from 'next/image';
import SecondaryButton from '../buttons/SecondaryButton';
import CartButton from './CartButton';
import { Link } from '@/i18n/navigation';

interface ProductCardProps {
  product: Product;
  setIsAddedToCartPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function ProductCard({
  product,
  setIsAddedToCartPopUpShown,
}: ProductCardProps) {
  const { addToCart } = useCartStore();

  const { id, title, price, discountedPrice, images, slug, category } = product;

  const handleClick = () => {
    setIsAddedToCartPopUpShown(true);
    addToCart({ id, title, price, images, category, slug, quantity: 1 });
  };

  return (
    <div className="relative p-3 xl:px-5 xl:py-4 bg-white rounded-[8px] xl:rounded-[16px] shadow-social overflow-hidden">
      {discountedPrice && discountedPrice < price ? (
        <Image
          src="/images/icons/promotion.svg"
          alt="promotion label"
          width="169"
          height="109"
          className="absolute z-10 top-0 right-0"
        />
      ) : null}
      <Link href={`/catalog/${category?.slug}/${slug}`}>
        <div className="relative h-[120px] md:h-[180px] lg:h-[200px] xl:h-[300px] mb-3 xl:mb-4 rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <Image
            src={images[0]?.url || ''}
            alt={images[0]?.url || 'product'}
            fill
            className="object-cover"
          />
        </div>
        {discountedPrice && discountedPrice < price ? (
          <p className="mb-1.5 xl:mb-2 h-auto leading-none">
            <span className="text-[14px] xl:text-[16px] font-medium leading-[120%] text-orange">
              {discountedPrice} грн
            </span>
            <span className="text-[14px] xl:text-[16px] font-medium leading-[120%]">
              {' '}
              &nbsp;
            </span>
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
      <div className="flex justify-between gap-x-0.5 xs:gap-x-3 xl:gap-x-2">
        <Link
          href={`/catalog/${category?.slug}/${slug}`}
          className="block w-full"
        >
          <SecondaryButton className="w-full max-w-[102px] xs:max-w-full h-9 xl:h-10">
            Детальніше
          </SecondaryButton>
        </Link>
        <CartButton onClick={handleClick} className="shrink-0" />
      </div>
    </div>
  );
}
