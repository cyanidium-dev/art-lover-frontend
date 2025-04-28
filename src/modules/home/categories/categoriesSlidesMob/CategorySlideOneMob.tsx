import { Category } from '@/types/category';

interface CategorySlideOneMobProps {
  categories: Category[];
}

export default function CategorySlideOneMob({
  categories,
}: CategorySlideOneMobProps) {
  return (
    <ul className="flex flex-col gap-y-4">
      <li className="h-[100px] border border-dark rounded-[8px] p-3 bg-dark">
        <h3 className="max-w-[76px] mb-1 text-[14px] font-semibold leading-[140%] text-white uppercase">
          {categories[0]?.title}
        </h3>
        <p className="ml-9 font-denistina text-[14px] font-normal leading-[120%] text-white">
          {categories[0]?.description}
        </p>
      </li>
      <li className="flex flex-col justify-end items-end h-[100px] border border-dark rounded-[8px] p-3 bg-white">
        <p className="mb-1 font-denistina text-[14px] font-normal leading-[120%] text-dark">
          {categories[1]?.description}
        </p>
        <h3 className="text-[14px] font-semibold leading-[140%] text-dark uppercase">
          {categories[1]?.title}
        </h3>
      </li>
      <li className="h-[100px] border border-dark rounded-[8px] p-3 bg-dark">
        <h3 className="mb-1 text-[14px] font-semibold leading-[140%] text-white uppercase">
          {categories[2]?.title}
        </h3>
        <p className="ml-14 font-denistina text-[14px] font-normal leading-[120%] text-white">
          {categories[2]?.description}
        </p>
      </li>
      <li className="flex flex-col justify-end items-end h-[100px] border border-dark rounded-[8px] p-3 bg-white">
        <p className="mb-1 font-denistina text-[14px] font-normal leading-[120%] text-dark">
          {categories[3]?.description}
        </p>
        <h3 className="text-[14px] font-semibold leading-[140%] text-dark uppercase">
          {categories[3]?.title}
        </h3>
      </li>
      <li className="flex flex-col justify-end h-[100px] border border-dark rounded-[8px] p-3 bg-dark">
        <div className="ml-16 mb-[21px]">
          <p className="font-denistina text-[14px] font-normal leading-[100%] text-white">
            {categories[4]?.description?.split(' ')[0]}
          </p>
          <p className="ml-[43px] font-denistina text-[14px] font-normal leading-[100%] text-white">
            {categories[4]?.description?.split(' ')[1]}
          </p>
        </div>
        <h3 className="text-[14px] font-semibold leading-[140%] text-white uppercase">
          {categories[4]?.title}
        </h3>
      </li>
    </ul>
  );
}
