import { productsList } from '@/modules/home/bestsellers/mockedData';
import Breadcrumbs from '@/modules/product/breadcrumbs/Breadcrumbs';
import ProductInfo from '@/modules/product/productInfo/ProductInfo';
import ReviewedProducts from '@/modules/product/reviewedProducts/ReviewedProducts';
import Reviews from '@/modules/product/reviews/Reviews';
import SimilarProducts from '@/modules/product/similarProducts/SimilarProducts';

interface ProductPageProps {
  params: Promise<{ category: string; product: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product } = await params;

  if (!productsList || !productsList.length) return null;

  const currentProduct = productsList.find(
    productItem => productItem?.slug === product
  );

  const crumbs = [
    { label: 'Головна', href: '/' },
    {
      label: currentProduct?.category?.title || '',
      href: `/catalog/${category}`,
    },
    {
      label: currentProduct?.title || '',
      href: `/catalog//${category}/${currentProduct?.slug}` || '',
    },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <ProductInfo />
      <Reviews />
      <SimilarProducts />
      <ReviewedProducts />
    </>
  );
}
