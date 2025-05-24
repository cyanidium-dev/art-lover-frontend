import Catalog from '@/modules/catalog/Catalog';
import { Locale } from '@/types/locale';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { getTranslations } from 'next-intl/server';
import {
  allDiscountedProductsQuery,
  allGiftsByGenderQuery,
  allNewProductsQuery,
  allProductsByCategoryQuery,
  allProfessionsQuery,
} from '@/shared/lib/queries';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

interface CategoryPageProps {
  params: Promise<{ category: string; locale: Locale }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;
  const t = await getTranslations('header.catalogMenu');

  const professions = await fetchSanityData(allProfessionsQuery, {
    lang: locale,
  });

  const res =
    category === 'gifts'
      ? await fetchSanityData(allGiftsByGenderQuery, {
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
          subcategories: [
            {
              subcategoryTitle: t('women'),
              subcategorySlug: 'women',
              products: res.female,
            },
            {
              subcategoryTitle: t('men'),
              subcategorySlug: 'men',
              products: res.male,
            },
          ],
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

  return (
    <>
      <Suspense fallback={<Loader />}>
        {' '}
        <Catalog
          categoryProducts={categoryProducts}
          professions={professions}
        />
      </Suspense>
    </>
  );
}
