import Catalog from '@/modules/catalog/Catalog';
import { Locale } from '@/types/locale';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { allProductsByCategoryQuery } from '@/shared/lib/queries';

interface CategoryPageProps {
  params: Promise<{ category: string; locale: Locale }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;
  const categoryProducts = await fetchSanityData(allProductsByCategoryQuery, {
    lang: locale,
    categorySlug: category,
  });

  return (
    <>
      <Catalog categoryProducts={categoryProducts[0]} />
    </>
  );
}
