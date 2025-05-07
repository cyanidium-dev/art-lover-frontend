'use client';
import { useState } from 'react';

import ProductCard from '../../../shared/components/productCard/ProductCard';
import AddedToCartPopUp from '@/shared/components/pop-ups/AddedToCartPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';

import { productsList } from './items';

const CatalogProducts = () => {
  const [isAddedToCartPopUpShown, setIsAddedToCartPopUpShown] = useState(false);

  const elements = productsList.map((item, idx) => (
    <ProductCard
      setIsAddedToCartPopUpShown={setIsAddedToCartPopUpShown}
      key={idx}
      product={item}
    />
  ));

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-[140px] mt-[40px]">
        {elements}
      </div>
      <AddedToCartPopUp
        isPopUpShown={isAddedToCartPopUpShown}
        setIsPopUpShown={setIsAddedToCartPopUpShown}
      />
      <Backdrop
        isVisible={isAddedToCartPopUpShown}
        onClick={() => setIsAddedToCartPopUpShown(false)}
      />
    </>
  );
};

export default CatalogProducts;
