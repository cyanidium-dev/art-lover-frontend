import { Dispatch, SetStateAction } from 'react';
import { useTranslations } from 'next-intl';
import { useCartStore } from '@/shared/store/cartStore';
import { CartItem } from '@/types/cartItem';
import Image from 'next/image';
import Counter from './Counter';
import IconButton from '../buttons/IconButton';
import { Link } from '@/i18n/navigation';

interface CartItemProps {
  cartItem: CartItem;
  variant?: 'dark' | 'white';
  setIsPopUpShown?: Dispatch<SetStateAction<boolean>>;
}

export default function CartListItem({
  cartItem,
  variant = 'white',
  setIsPopUpShown,
}: CartItemProps) {
  const t = useTranslations('cart');

  const { removeFromCart } = useCartStore();
  const {
    id,
    title,
    price,
    discountedPrice,
    mainImage,
    categorySlug,
    slug,
    color,
    addons,
  } = cartItem;

  console.log(cartItem);

  return (
    <>
      <div className="flex gap-x-[25px] p-3">
        <Link
          onClick={setIsPopUpShown ? () => setIsPopUpShown(false) : undefined}
          href={`/catalog/${categorySlug}/${slug}`}
        >
          <div className="relative shrink-0 w-[90px] h-full overflow-hidden rounded-[6px]">
            <Image
              src={mainImage}
              alt={'product photo'}
              fill
              sizes="33vw"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="w-full flex gap-x-2 justify-between">
          <div>
            <Link
              onClick={
                setIsPopUpShown ? () => setIsPopUpShown(false) : undefined
              }
              href={`/catalog/${categorySlug}/${slug}`}
            >
              <p
                className={`mb-2 xl:mb-3 text-[12px] xl:text-[14px] font-medium leading-[120%] line-clamp-2 xl:line-clamp-2 ${
                  variant === 'white' ? 'text-white' : 'text-dark'
                }`}
              >
                {title}
                {color ? `, ${color?.title}` : null}
              </p>
            </Link>

            <p
              className={`mb-[17px] text-[13px] xl:text-[16px] font-semibold leading-[120%] ${
                variant === 'white' ? 'text-white' : 'text-dark'
              }`}
            >
              {discountedPrice && discountedPrice < price
                ? discountedPrice
                : price}
              {t('hrn')}
            </p>
            <Counter
              className="w-[98px]"
              variant={variant}
              cartItem={cartItem}
            />
          </div>
          <IconButton
            handleClick={() => removeFromCart(id)}
            className="size-5 xl:size-6 ml-auto shrink-0"
          >
            <Image
              src="/images/icons/trash.svg"
              alt="trash icon"
              width="24"
              height="24"
            />
          </IconButton>
        </div>
      </div>
      {addons?.length ? (
        <ul className="flex flex-col gap-2 p-3 text-white border-t border-white rounded-[8px]">
          {addons.map((addon, idx) => {
            return (
              <li key={idx}>
                <label className="cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-x-5">
                    <span className="relative inline-block w-5 xl:w-6 h-5 xl:h-6">
                      <input
                        type="checkbox"
                        checked
                        onChange={() => console.log('remove addon')}
                        className="peer appearance-none w-full h-full border border-white rounded-[6px] transition duration-300 ease-in-out"
                      />
                      <svg
                        className="absolute left-1/2 top-1/2 w-3 xl:w-4 h-3 xl:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 ease-in-out"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[14px] xl:text-[16px] font-light leading-[120%]">
                      {addon?.title}
                    </span>
                  </div>
                  <span className="text-[14px] xl:text-[16px] font-semibold leading-[120%]">
                    + {addon?.price}
                    {t('hrn')}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
