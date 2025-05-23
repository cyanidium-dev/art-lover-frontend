'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CatalogSorting() {
  const t = useTranslations('catalogPage');
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    title: t('sortingOptions.rating'),
    value: 'rating',
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortingOptions = [
    { title: t('sortingOptions.rating'), value: 'rating' },
    { title: t('sortingOptions.priceAscending'), value: 'priceAscending' },
    { title: t('sortingOptions.pricDescending'), value: 'pricDescending' },
    { title: t('sortingOptions.popularity'), value: 'popularity' },
    { title: t('sortingOptions.discount'), value: 'discount' },
    { title: t('sortingOptions.availability'), value: 'availability' },
  ];

  const handleOptionClick = (option: { value: string; title: string }) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4 mb-8 relative">
      <Image
        src="/images/catalog/filter.svg"
        alt="sorting icon"
        width={32}
        height={32}
        className="xl:hidden"
      />

      <div
        className="relative w-full max-w-[250px] xl:max-w-[405px]"
        ref={dropdownRef}
      >
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="cursor-pointer flex items-center gap-x-2 xl:gap-x-4 w-full h-8 xl:h-11 px-3 xl:px-7 rounded-full border border-orange-light text-[10px] xl:text-[16px] font-medium text-dark bg-white"
        >
          <p>{t('sort')}</p>
          <div className="size-2 rounded-full bg-dark shrink-0" />
          <span className="truncate text-[10px] xl:text-[16px] font-semibold text-orange">
            {selected.title}
          </span>
        </button>

        <div
          className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute right-0 z-20 w-[175px] xl:w-[263px] mt-2 bg-white rounded-[16px] 
            shadow-social overflow-hidden text-[10px] xl:text-[16px] font-semibold transition duration-500 ease-in-out`}
        >
          {sortingOptions.map(option => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer w-full text-left px-4 py-1.5 xl:hover:bg-orange-light xl:hover:text-white text-dark transition duration-100 ease-in-out"
            >
              {option.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
