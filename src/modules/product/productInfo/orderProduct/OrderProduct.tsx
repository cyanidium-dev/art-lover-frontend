'use client';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
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
import ColorPicker from './ColorPicker';
import Counter from './Counter';

interface OrderProductProps {
  currentProduct: Product;
}

export default function OrderProduct({ currentProduct }: OrderProductProps) {
  const {
    title,
    description,
    available,
    addons,
    colors,
    price,
    discountedPrice,
  } = currentProduct;
  const rating = getAverageRating(reviewsList);

  return (
    <div className="mb-20 md:mb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.2 })}
        className="flex items-center justify-between mb-4"
      >
        <h1 className="text-[16px] xl:text-[32px] font-semibold leading-[120%] uppercase">
          {title}
        </h1>
        <IconButton>
          <Image
            src="/images/productPage/orderProduct/share.svg"
            alt="share icon"
            width={20}
            height={20}
            className="size-5 xl:size-8"
          />
        </IconButton>
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.4 })}
        className="mb-6 xl:mb-[25.5px] text-[14px] xl:text-[16px] font-light leading-[120%] text-justify"
      >
        {description}
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.6 })}
        className="flex justify-between items-center"
      >
        <p
          className={`text-[12px] xl:text-[16px] font-normal leading-[120%] ${
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
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 0.6 })}
        className="mb-6 xl:mb-[26.5px] text-right text-[10px] xl:text-[14px] font-light leading-[120%]"
      >
        ({reviewsList?.length} відгуків)
      </motion.p>
      {!addons || !addons.length ? null : <AddonsList options={addons} />}
      {!colors || !colors.length ? null : <ColorPicker colors={colors} />}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 1.2 })}
        className="flex items-center justify-between mb-4 xl:mb-5"
      >
        <Counter />
        {discountedPrice && discountedPrice < price ? (
          <div>
            <span className="text-[16px] xl:text-[24px] font-semibold leading-[120%] text-orange">
              {discountedPrice} грн{' '}
            </span>
            <span className="text-[12px] xl:text-[16px] font-normal leading-[120%] line-through">
              {price} грн
            </span>
          </div>
        ) : (
          <span className="text-[16px] xl:text-[24px] font-semibold leading-[120%]">
            {price} грн
          </span>
        )}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30, delay: 1.4 })}
        className="flex items-center gap-x-4"
      >
        <MainButton
          className="h-[49px] xl:h-[58px]"
          textStyles="text-[14px] xl:text-[16px]"
        >
          Додати товар до кошику
        </MainButton>
        <button
          aria-label="add to favorites"
          className="cursor-pointer flex items-center justify-center shrink-0 size-12 xl:w-[63px] xl:h-[58px] rounded-[8px] bg-dark xl:hover:brightness-125 
          focus-visible:brightness-125 active:scale-95 transition duration-300 ease-in-out"
        >
          <Image
            src="/images/productPage/orderProduct/heart.svg"
            alt="heart icon"
            width={24}
            height={24}
            className="size-6 xl:size-[34px]"
          />
        </button>
      </motion.div>
    </div>
  );
}
