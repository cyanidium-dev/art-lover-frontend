import { Product } from '@/types/product';

interface IdealForProps {
  currentProduct: Product;
}

export default function IdealFor({ currentProduct }: IdealForProps) {
  if (!currentProduct?.idealFor || !currentProduct?.idealFor.length)
    return null;

  const { idealFor } = currentProduct;

  return (
    <div className="pb-20 md:pb-14 xl:pb-[70px]">
      <h2 className="mb-6 xl:mb-8 text-[18px] xl:text-[32px] font-medium leading-[120%] uppercase">
        Ідеально підходить для:
      </h2>
      <ul className="flex gap-3 flex-wrap">
        {idealFor.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center w-[calc(50%-8px)] px-1 py-2 xl:px-3 xl:py-[11px] rounded-full border border-orange 
            text-[10px] xl:text-[14px] font-normal leading-[120%] text-orange text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
