'use client';
import { useState } from 'react';

import ProductCard from '../../../shared/components/productCard/ProductCard';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import CartModal from '@/shared/components/cart/Cart';
import Backdrop from '@/shared/components/backdrop/Backdrop';

import { productsList } from './items';

const CatalogProducts = () => {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);
  const [isCartModalShown, setIsCartModalShown] = useState(false);

  const elements = productsList.map((item, idx) => (
    <ProductCard
      setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
      key={idx}
      product={item}
    />
  ));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-[140px] mt-[33px] md:mt-[40px]">
        {elements}
      </div>
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
