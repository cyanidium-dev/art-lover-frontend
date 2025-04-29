import { Category } from '@/types/category';
import Image from 'next/image';
import Link from 'next/link';

interface CategorySlideTwoDeskProps {
  categories: Category[];
}

export default function CategorySlideTwoDesk({
  categories,
}: CategorySlideTwoDeskProps) {
  return (
    <div className="hidden md:flex gap-5">
      <div className="relative w-[45.5%] aspect-square rounded-[16px] overflow-hidden">
        <Image
          src="/images/homePage/categories/slideOneDesk/imageOne.webp"
          alt="background"
          fill
          sizes="50vw"
        />
      </div>
      <div className="flex flex-col gap-y-5 w-[18.7%]">
        <div className="relative md:ml-[-150px] lg:ml-[-207px] xl:ml-[-239px] md:w-[221%] lg:w-[217%] md:aspect-[447/156] lg:aspect-[447/151] border-2 border-dark bg-white rounded-[16px] overflow-hidden">
          <Image
            src="/images/homePage/categories/slideOneDesk/imageTwo.webp"
            alt="background"
            className="object-cover"
            fill
          />
        </div>
        <div className="relative md:ml-[-150px] lg:ml-[-207px] xl:ml-[-239px] md:w-[312.5%] lg:w-[307.3%] md:aspect-[633/154] lg:aspect-[633/165] bg-dark rounded-[16px] overflow-hidden">
          <Image
            src="/images/homePage/categories/slideOneDesk/imageThree.webp"
            alt="background"
            className="object-cover"
            fill
          />
        </div>
        <div className="relative lg:ml-[2px] xl:ml-0 md:w-[291%] lg:w-[281%] md:aspect-[579/150] lg:aspect-[579/145] border-2 border-dark bg-white rounded-[16px] overflow-hidden">
          <Image
            src="/images/homePage/categories/slideOneDesk/imageFour.webp"
            alt="background"
            className="object-cover"
            fill
          />
        </div>
      </div>
      <div className="md:w-[33%] lg:w-[32%] rounded-[16px] overflow-hidden">
        <div className="relative aspect-[353/336]">
          <Image
            src="/images/homePage/categories/slideOneDesk/imageFive.webp"
            alt="background"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
}
