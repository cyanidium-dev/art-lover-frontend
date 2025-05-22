import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogMainImage from './CatalogMainImage/CatalogMainImage';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import CatalogProducts from './CatalogProducts/CatalogProducts';
import Container from '@/shared/components/container/Container';
import { Product } from '@/types/product';

interface CatalogProps {
  categoryProducts: {
    categorySlug: string;
    categoryTitle: string;
    categorySubtitle: string;
    subcategories: [
      {
        subcategorySlug: string;
        subcategoryTitle: string;
        products: Product[];
      },
    ];
  };
}

const Catalog = ({ categoryProducts }: CatalogProps) => {
  return (
    <Container className="flex gap-[20px] items-start">
      <CatalogFilters />
      <div className="w-full lg:w-3/4">
        <CatalogMainImage categoryProducts={categoryProducts} />
        <CatalogCategories />
        <CatalogProducts />
      </div>
    </Container>
  );
};

export default Catalog;
