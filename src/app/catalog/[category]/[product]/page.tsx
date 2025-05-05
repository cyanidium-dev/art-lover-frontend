import Breadcrumbs from '@/modules/product/breadcrumbs/Breadcrumbs';
import ProductInfo from '@/modules/product/productInfo/ProductInfo';
import ReviewedProducts from '@/modules/product/reviewedProducts/ReviewedProducts';
import Reviews from '@/modules/product/reviews/Reviews';
import SimilarProducts from '@/modules/product/similarProducts/SimilarProducts';

export default function ProductPage() {
  return (
    <>
      <Breadcrumbs />
      <ProductInfo />
      <Reviews />
      <SimilarProducts />
      <ReviewedProducts />
    </>
  );
}
