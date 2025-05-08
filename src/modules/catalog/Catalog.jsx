import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogMainImage from './CatalogMainImage/CatalogMainImage';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import CatalogProducts from './CatalogProducts/CatalogProducts';

const Catalog = ()=> {
  return (
    <div className="flex gap-[20px] items-start">
      <CatalogFilters />
      <div className="w-full lg:w-3/4">
        <CatalogMainImage />
        <CatalogCategories />
        <CatalogProducts />
      </div>
    </div>
  )
}

export default Catalog;
