import MainButton from '@/shared/components/buttons/MainButton';
import { Product } from '@/types/product';
import Image from 'next/image';

interface OrderProductProps {
  currentProduct: Product;
}

export default function OrderProduct({ currentProduct }: OrderProductProps) {
  const { title, description, available } = currentProduct;

  return (
    <div className="mb-20">
      <h1 className="mb-4 text-[16px] font-semibold leading-[120%] uppercase">
        {title}
      </h1>
      <p className="mb-6 text-[14px] font-light leading-[120%] text-justify">
        {description}
      </p>
      <p
        className={`text-[12px] font-normal leading-[120%] ${
          available ? 'text-green' : 'text-red-500'
        }`}
      >
        {available ? 'В наявності' : 'Немає в наявності'}
      </p>
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
