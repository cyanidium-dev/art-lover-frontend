import { getTranslations } from 'next-intl/server';
import Breadcrumbs from '@/modules/product/breadcrumbs/Breadcrumbs';
import ProductInfo from '@/modules/product/productInfo/ProductInfo';
import ReviewedProducts from '@/modules/product/reviewedProducts/ReviewedProducts';
import Reviews from '@/modules/product/reviews/Reviews';
import SimilarProducts from '@/modules/product/similarProducts/SimilarProducts';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { singleProductQuery } from '@/shared/lib/queries';
import { Locale } from '@/types/locale';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

interface ProductPageProps {
  params: Promise<{ category: string; product: string; locale: Locale }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const t = await getTranslations('productPage');

  const { product, locale } = await params;

  const currentProduct = await fetchSanityData(singleProductQuery, {
    slug: product,
    lang: locale,
  });

  console.log(currentProduct);

  if (!currentProduct) return null;

  const crumbs = [
    { label: t('home'), href: '/' },
    {
      label: currentProduct?.categoryTitle || '',
      href: `/catalog/${currentProduct?.categorySlug}`,
    },
    {
      label: currentProduct?.title || '',
      href:
        `/catalog/${currentProduct?.categorySlug}/${currentProduct?.slug}` ||
        '',
    },
  ];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Breadcrumbs crumbs={crumbs} />
        <ProductInfo currentProduct={currentProduct} />
        <Reviews currentProduct={currentProduct} />
        <SimilarProducts
          categorySlug={currentProduct?.categorySlug}
          excludeSlug={currentProduct?.slug}
        />
      </Suspense>
      <ReviewedProducts />
    </>
  );
}
