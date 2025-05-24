'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { sortProducts } from '@/shared/utils/sortProducts';
import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogMainImage from './CatalogMainImage/CatalogMainImage';
import CatalogProducts from './CatalogProducts/CatalogProducts';
import Container from '@/shared/components/container/Container';
import { Product } from '@/types/product';
import TabMenu from './CatalogCategories/TabMenu';
import NoItems from './NoItems';
import CatalogSorting from './CatalogSorting/CatalogSorting';

export interface FiltersState {
  type?: string[];
  profession?: string[];
  ageFrom?: number;
  ageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

interface CatalogProps {
  categoryProducts: {
    categorySlug: string;
    categoryTitle: string;
    categorySubtitle: string;
    subcategories?: [
      {
        subcategorySlug: string;
        subcategoryTitle: string;
        products: Product[];
      },
    ];
    products?: Product[];
  };
  professions: { title: string; value: string }[];
}

const SECTION_ID = 'catalog-page-products-list';

const Catalog = ({ categoryProducts, professions }: CatalogProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const subcategories = categoryProducts?.subcategories || [];

  const hasSubcategories = subcategories?.length > 0;

  const defaultSubcategory = hasSubcategories
    ? subcategories[0]?.subcategorySlug
    : '';

  const [activeTab, setActiveTab] = useState(defaultSubcategory || '');

  const handleApplyFilters = (filters: FiltersState) => {
    const params = new URLSearchParams(searchParams.toString());

    if (filters.type && filters.type.length > 0)
      params.set('type', filters.type.join(','));
    else params.delete('type');

    if (filters.profession && filters.profession.length > 0) {
      params.set('profession', filters.profession.join(','));
    } else {
      params.delete('profession');
    }

    if (filters.ageFrom !== undefined && filters.ageFrom !== null) {
      params.set('ageFrom', String(filters.ageFrom));
    } else {
      params.delete('ageFrom');
    }

    if (filters.ageTo !== undefined && filters.ageTo !== null) {
      params.set('ageTo', String(filters.ageTo));
    } else {
      params.delete('ageTo');
    }

    if (filters.priceFrom !== undefined && filters.priceFrom !== null) {
      params.set('priceFrom', String(filters.priceFrom));
    } else {
      params.delete('priceFrom');
    }

    if (filters.priceTo !== undefined && filters.priceTo !== null) {
      params.set('priceTo', String(filters.priceTo));
    } else {
      params.delete('priceTo');
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (!hasSubcategories) return;

    const currentParam = searchParams.get('subcategory');
    if (currentParam && currentParam !== activeTab) {
      setActiveTab(currentParam);
    }
  }, [searchParams, activeTab, hasSubcategories]);

  useEffect(() => {
    if (!hasSubcategories) return;

    const currentParam = searchParams.get('subcategory');
    if (!currentParam && defaultSubcategory) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('subcategory', defaultSubcategory);
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, defaultSubcategory, router, hasSubcategories]);

  const currentSubcategory = subcategories.find(
    subcategory => subcategory.subcategorySlug === activeTab
  );

  const currentProducts =
    currentSubcategory?.products || categoryProducts?.products;

  const sortParam = searchParams.get('sort') || 'rating';

  const sortedProducts = currentProducts
    ? sortProducts(currentProducts, sortParam)
    : [];

  return (
    <section className="pb-20 xl:pb-[140px]">
      <Container className="flex gap-[20px] items-start">
        <CatalogFilters
          onApplyFilters={handleApplyFilters}
          professions={professions}
        />
        <div id={SECTION_ID} className="w-full lg:w-3/4">
          <CatalogMainImage categoryProducts={categoryProducts} />
          {hasSubcategories && (
            <TabMenu
              categoryProducts={categoryProducts}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
          <CatalogSorting />
          {currentProducts?.length ? (
            <CatalogProducts
              activeTab={activeTab}
              currentProducts={sortedProducts}
              categorySlug={categoryProducts.categorySlug}
            />
          ) : (
            <NoItems />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
