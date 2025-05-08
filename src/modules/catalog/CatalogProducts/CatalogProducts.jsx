import ProductCard from '../../../shared/components/productCard/ProductCard';

import { productsList } from "./items";

const CatalogProducts = ()=> {
  const elements = productsList.map((item, idx) => <ProductCard key={idx} product={item} />);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-[140px] mt-[33px] md:mt-[40px]">
      {elements}
    </div>
  )
}

export default CatalogProducts;
