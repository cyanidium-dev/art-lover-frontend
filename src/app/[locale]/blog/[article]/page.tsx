import Content from '@/modules/article/content/Content';
import Hero from '@/modules/article/hero/Hero';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { singlePostQuery } from '@/shared/lib/queries';
import { Locale } from '@/types/locale';
import type { Metadata } from 'next';
import { metadata as defaultMetadata } from '@/app/[locale]/layout';

interface ArticlePageProps {
  params: Promise<{ article: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article, locale } = await params;
  const currentArticle = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  console.log(currentArticle.seoTitle, currentArticle.seoDescription);

  return {
    title: currentArticle?.seoTitle || defaultMetadata.title,
    description: currentArticle?.seoDescription || defaultMetadata.description,
    openGraph: {
      images: [
        {
          url: currentArticle?.images[0] || '/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Art Lover',
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article, locale } = await params;
  const currentArticle = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  if (!currentArticle) return null;

  return (
    <>
      <Hero article={currentArticle} />
      <Content article={currentArticle} />
    </>
  );
}
