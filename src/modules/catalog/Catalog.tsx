import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogMainImage from './CatalogMainImage/CatalogMainImage';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import CatalogProducts from './CatalogProducts/CatalogProducts';
import Container from '@/shared/components/container/Container';

const Catalog = () => {
  return (
    <Container className="flex gap-[20px] items-start">
      <CatalogFilters />
      <div className="w-full lg:w-3/4">
        <CatalogMainImage />
        <CatalogCategories />
        <CatalogProducts />
      </div>
    </Container>
  );
};

export default Catalog;
