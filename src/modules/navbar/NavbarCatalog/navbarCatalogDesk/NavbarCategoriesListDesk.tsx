'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { categoriesList } from '../categoriesList';
import NavBarCategoryItemDesk from './NavbarCategoryItemDesk';
import { Link } from '@/i18n/navigation';

interface NavBarCategoriesListDeskProps {
  onClose: () => void;
}

export default function NavBarCategoriesListDesk({
  onClose,
}: NavBarCategoriesListDeskProps) {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(
    null
  );

  const activeCategory = categoriesList.find(
    cat => cat.slug === activeCategorySlug
  );

  return (
    <div className="relative z-10 flex">
      {/* LEFT COLUMNS */}
      <div className="bg-dark rounded-[6px] shadow-social">
        <ul className="flex flex-col gap-3 px-[23px] md:pt-8 md:w-[342px] text-white">
          {categoriesList.map((category, idx) => (
            <li key={idx} className="group">
              <NavBarCategoryItemDesk
                category={category}
                onClose={onClose}
                isActive={activeCategorySlug === category.slug}
                onClick={() => setActiveCategorySlug(category.slug)}
              />
            </li>
          ))}
        </ul>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 0.4, scale: 0.9 })}
          className="w-[313px] h-[70px] mt-2"
        >
          <Image
            src="/images/navbar/catalogMenuFigureDesk.svg"
            width="313"
            height="70"
            alt="background"
          />
        </motion.div>
      </div>

      {/* RIGHT SUBCATEGORY PANEL */}
      <AnimatePresence>
        {activeCategory && activeCategory.subCategories.length > 0 && (
          <motion.div
            key={activeCategory.slug}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="absolute -z-10 left-[342px] top-0 w-[284px] h-full bg-white text-dark pt-[76px] pb-10 pl-8 pr-6 rounded-tr-[6px] 
            rounded-br-[6px] shadow-social"
          >
            <h3 className="text-orange text-[16px] font-medium leading-[120%] mb-5">
              {activeCategory.title}
            </h3>
            <ul
              className="flex flex-col gap-4 h-[330px] pr-2 overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent popup-scroll"
            >
              {activeCategory.subCategories.map((sub, idx) => (
                <li key={idx}>
                  <Link
                    href={`/catalog/${activeCategory.slug}?subcategory=${sub.slug}`}
                    className="flex items-center gap-x-3 text-[14px] font-light leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
                    onClick={onClose}
                  >
                    <div className="size-2 rounded-full bg-current shrink-0"></div>{' '}
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
