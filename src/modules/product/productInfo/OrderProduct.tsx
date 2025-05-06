'use client';
import { Rating } from 'react-simple-star-rating';
import IconButton from '@/shared/components/buttons/IconButton';
import MainButton from '@/shared/components/buttons/MainButton';
import StarFilledIcon from '@/shared/components/icons/StarFilledIcon';
import StarEmptyIcon from '@/shared/components/icons/StarEmptyIcon';
import { Product } from '@/types/product';
import { reviewsList } from '@/modules/home/reviews/mockedData';
import { getAverageRating } from '@/shared/utils/getAverageRating';
import Image from 'next/image';
import AddonsList from './AddonsList';

interface OrderProductProps {
  currentProduct: Product;
}

export default function OrderProduct({ currentProduct }: OrderProductProps) {
  const { title, description, available, addons } = currentProduct;
  const rating = getAverageRating(reviewsList);

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[16px] font-semibold leading-[120%] uppercase">
          {title}
        </h1>
        <IconButton>
          <Image
            src="/images/productPage/orderProduct/share.svg"
            alt="share icon"
            width={20}
            height={20}
          />
        </IconButton>
      </div>
      <p className="mb-6 text-[14px] font-light leading-[120%] text-justify">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <p
          className={`text-[12px] font-normal leading-[120%] ${
            available ? 'text-green' : 'text-red-500'
          }`}
        >
          {available ? 'В наявності' : 'Немає в наявності'}
        </p>
        <Rating
          initialValue={rating}
          allowFraction
          readonly
          className="mb-1"
          emptyIcon={
            <StarEmptyIcon className="inline-block mx-0.5 size-4 xl:size-5" />
          }
          fillIcon={
            <StarFilledIcon className="inline-block mx-0.5 size-4 xl:size-5" />
          }
        />
      </div>
      <p className="mb-6 xl:mb-[26.5px] text-right text-[10px] xl:text-[14px] font-light leading-[120%]">
        ({reviewsList?.length} відгуків)
      </p>
      {!addons || !addons.length ? null : (
       <AddonsList options={addons} />
      )}
      <div className="flex items-center gap-x-4">
        <MainButton
          className="h-[49px]"
          textStyles="text-[14px] xl:text-[16px]"
        >
          Додати товар до кошику
        </MainButton>
        <button
          aria-label="add to favorites"
          className="cursor-pointer flex items-center justify-center shrink-0 size-12 rounded-[8px] bg-dark xl:hover:brightness-125 
          focus-visible:brightness-125 active:scale-95 transition duration-300 ease-in-out"
        >
          <Image
            src="/images/productPage/orderProduct/heart.svg"
            alt="heart icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
