'use client';
import { useState } from 'react';

import Pagination from '@/shared/components/pagination/Pagination';
import ProductCard from '../../../shared/components/productCard/ProductCard';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import { Product } from '@/types/product';
import * as motion from 'motion/react-client';
import {
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import { useCatalogItemsPerPage } from '@/shared/hooks/useCatalogItemsPerPage';

interface CatalogProductsProps {
  currentProducts: Product[];
}

const SECTION_ID = 'catalog-page-products-list';

const CatalogProducts = ({ currentProducts }: CatalogProductsProps) => {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);
  const [isCartModalShown, setIsCartModalShown] = useState(false);

  return (
    <>
      <Pagination
        items={currentProducts}
        scrollTargetId={SECTION_ID}
        useItemsPerPage={useCatalogItemsPerPage}
        renderItems={currentItems => (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.4 }}
            variants={listVariants({
              staggerChildren: 0.4,
              delayChildren: 0.8,
            })}
            className="flex flex-wrap gap-4 xl:gap-5"
          >
            {currentItems.map((favoriteItem, idx) => (
              <motion.li
                viewport={{ once: true, amount: 0.2 }}
                variants={listItemVariants}
                key={idx}
                className="w-[calc(50%-8px)] md:w-[calc(33.33%-10.67px)] xl:w-[calc(33.33%-13.33px)]"
              >
                <ProductCard
                  setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
                  product={favoriteItem}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      />
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-[140px] mt-[33px] md:mt-[40px]">
        {elements}
      </div> */}
      <AddedToCartPopUp
        isPopUpShown={isAddedToCartPopUpShown}
        setIsPopUpShown={setIsAddedToCartPopUpShown}
        setIsCartModalShown={setIsCartModalShown}
      />
      <CartModal
        isPopUpShown={isCartModalShown}
        setIsPopUpShown={setIsCartModalShown}
      />
      <Backdrop
        isVisible={isAddedToCartPopUpShown || isCartModalShown}
        onClick={() => {
          setIsAddedToCartPopUpShown(false);
          setIsCartModalShown(false);
        }}
      />
    </>
  );
};

export default CatalogProducts;
