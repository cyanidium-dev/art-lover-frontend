'use client';
import ArrowIcon from '@/shared/components/icons/ArrowIcon';
import { ReactNode, useState } from 'react';
import Link from 'next/link';

interface NavBarCategoryItemProps {
  category: {
    icon: ReactNode;
    title: string;
    slug: string;
    subCategories: { title: string; slug: string }[];
  };
}

export default function NavBarCategoryItem({
  category,
}: NavBarCategoryItemProps) {
  const [isSubCategoriesShown, setIsSubCategoriesShown] = useState(false);

  const toggleShowMore = () => setIsSubCategoriesShown(!isSubCategoriesShown);

  const { icon, title, subCategories } = category;

  return (
    <li className="group text-grey-light">
      <div className="relative flex gap-[9px] justify-between items-center pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] group-last:after:hidden after:bg-[linear-gradient(90deg,rgba(167,167,167,0.5)_0%,rgba(102,102,102,0.35)_100%)]">
        <Link
          href={`/catalog/${category?.slug}`}
          className="w-full flex gap-[9px] items-center"
        >
          {icon}
          <h2 className="text-[16px] font-medium leading-[120%]">{title}</h2>
        </Link>
        {subCategories?.length > 0 ? (
          <>
            <button onClick={toggleShowMore} type="button" className="ml-auto">
              <ArrowIcon
                className={`${
                  isSubCategoriesShown ? 'rotate-90' : ''
                } transition duration-500 ease-in-out`}
              />
            </button>
          </>
        ) : null}
      </div>
      <ul
        className={`flex flex-col gap-2 pl-8 overflow-hidden transition-[max-height] duration-700 ${
          isSubCategoriesShown ? 'max-h-[600px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        {subCategories.map(({ title, slug }, idx) => (
          <li
            key={idx}
            className="relative first:pt-4 pb-3 text-[14px] font-normal leading-[120%] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[linear-gradient(90deg,rgba(167,167,167,0.5)_0%,rgba(102,102,102,0.35)_100%)]"
          >
            <Link href={`/catalog/${category?.slug}?subcategory=${slug}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
