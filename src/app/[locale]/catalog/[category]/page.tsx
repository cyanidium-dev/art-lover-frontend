import Catalog from '@/modules/catalog/Catalog';
import { Locale } from '@/types/locale';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { getTranslations } from 'next-intl/server';
import {
  allDiscountedProductsQuery,
  allGiftsQuery,
  allNewProductsQuery,
  allProductsByCategoryQuery,
} from '@/shared/lib/queries';

interface CategoryPageProps {
  params: Promise<{ category: string; locale: Locale }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;
  const t = await getTranslations('header.catalogMenu');

  const res =
    category === 'gifts'
      ? await fetchSanityData(allGiftsQuery, {
          lang: locale,
        })
      : category === 'discounts'
        ? await fetchSanityData(allDiscountedProductsQuery, {
            lang: locale,
          })
        : category === 'new-products'
          ? await fetchSanityData(allNewProductsQuery, {
              lang: locale,
            })
          : await fetchSanityData(allProductsByCategoryQuery, {
              lang: locale,
              categorySlug: category,
            });

  const categoryProducts =
    category === 'gifts'
      ? {
          categorySlug: 'gifts',
          categoryTitle: t('gifts'),
          categorySubtitle: t('giftsDescription'),
          products: res,
        }
      : category === 'discounts'
        ? {
            categorySlug: 'discounts',
            categoryTitle: t('discounts'),
            categorySubtitle: t('discountsDescription'),
            products: res,
          }
        : category === 'new-products'
          ? {
              categorySlug: 'newProducts',
              categoryTitle: t('newProducts'),
              categorySubtitle: t('newProductsDescription'),
              products: res,
            }
          : res;

  console.log(res);

  return (
    <>
      <Catalog categoryProducts={categoryProducts} />
    </>
  );
}
