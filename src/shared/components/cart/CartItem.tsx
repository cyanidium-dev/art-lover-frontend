import { CartItem } from '@/types/cartItem';
import Image from 'next/image';
import Counter from './Counter';
import IconButton from '../buttons/IconButton';

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartListItem({ cartItem }: CartItemProps) {
  const { title, price, discountedPrice, images } = cartItem;

  return (
    <>
      <div className="relative shrink-0 aspect-[90/101] w-[90px] overflow-hidden rounded-[6px]">
        <Image
          src={images[0]?.url || ''}
          alt={images[0]?.alt || 'product photo'}
          fill
          sizes="33vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="mb-[17px] xl:mb-3 text-[12px] xl:text-[14px] font-medium leading-[120%] line-clamp-2 xl:line-clamp-1 text-white">
          {title}
        </p>
        <p className="mb-[17px] text-[16px] font-semibold leading-[120%] text-white">
          {discountedPrice && discountedPrice < price ? discountedPrice : price}
          &nbsp;грн
        </p>
        <Counter className="w-[98px]" />
      </div>
      <IconButton className="size-5 xl:size-6 ml-auto shrink-0">
        <Image
          src="/images/icons/trash.svg"
          alt="trash icon"
          width="24"
          height="24"
        />
      </IconButton>
    </>
  );
}
