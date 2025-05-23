'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogMainImage from './CatalogMainImage/CatalogMainImage';
import CatalogProducts from './CatalogProducts/CatalogProducts';
import Container from '@/shared/components/container/Container';
import { Product } from '@/types/product';
import TabMenu from './CatalogCategories/TabMenu';
import NoItems from './NoItems';

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
}

const SECTION_ID = 'catalog-page-products-list';

const Catalog = ({ categoryProducts }: CatalogProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const subcategories = categoryProducts?.subcategories || [];

  const hasSubcategories = subcategories?.length > 0;

  const defaultSubcategory = hasSubcategories
    ? subcategories[0]?.subcategorySlug
    : '';

  const [activeTab, setActiveTab] = useState(defaultSubcategory || '');

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

  console.log(currentProducts);

  return (
    <section className="pb-20 xl:pb-[140px]">
      <Container className="flex gap-[20px] items-start">
        <CatalogFilters />
        <div id={SECTION_ID} className="w-full lg:w-3/4">
          <CatalogMainImage categoryProducts={categoryProducts} />
          {hasSubcategories && (
            <TabMenu
              categoryProducts={categoryProducts}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
          {currentProducts?.length ? (
            <CatalogProducts currentProducts={currentProducts} />
          ) : (
            <NoItems />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
