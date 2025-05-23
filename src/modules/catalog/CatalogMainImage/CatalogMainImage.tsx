import Image from 'next/image';
import { Product } from '@/types/product';

interface CatalogMainBannerProps {
  categoryProducts: {
    categorySlug: string;
    categoryTitle: string;
    categorySubtitle: string;
    subcategories?: [
      {
        subcategorySlug: string;
        subcategoryTitle: string;
        products: Product[];
      },
    ];
    products?: Product[];
  };
}

const CatalogMainBanner = ({ categoryProducts }: CatalogMainBannerProps) => {
  const { categoryTitle, categorySubtitle } = categoryProducts;

  return (
    <div className="relative p-3 xl:px-6 xl:py-7 bg-dark z-10 mb-[24px] md:mb-[32px] aspect-[296/160] lg:aspect-[820/196] rounded-[8px] xl:rounded-[16px] overflow-hidden">
      <Image
        src="/images/catalog/mainDesk.webp"
        alt="background"
        className="-z-10 hidden md:block object-cover"
        fill
      />
      <Image
        src="/images/catalog/mainMob.webp"
        alt="background"
        className="-z-10 md:hidden object-cover"
        fill
      />

      <h2 className="mb-2 text-[20px] xl:text-[40px] font-medium leading-none uppercase text-white text-right">
        {categoryTitle}
      </h2>
      <p
        style={{ wordSpacing: '8px' }}
        className="font-denistina text-[20px] xl:text-[32px] leading-none text-white text-center xl:text-right"
      >
        {categorySubtitle}
      </p>
    </div>
  );
};

export default CatalogMainBanner;
