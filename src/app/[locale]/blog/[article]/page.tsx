import { articlesList } from '@/modules/blog/blogList/mockedData';
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
  const articleData = await fetchSanityData(singlePostQuery, {
    slug: 'string-art-mistectvo-nitok-sho-pidkoryuye-sercya',
    lang: locale,
  });

  return {
    title: articleData?.seoTitle || defaultMetadata.title,
    description: articleData?.seoDescription || defaultMetadata.description,
    openGraph: {
      images: [
        {
          url: articleData?.seoImage || '/opengraph-image.jpg',
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
  const articleData = await fetchSanityData(singlePostQuery, {
    slug: 'string-art-mistectvo-nitok-sho-pidkoryuye-sercya',
    lang: locale,
  });

  if (!articlesList || !articlesList.length) return null;

  const currentArticle = articlesList.find(
    articleItem => articleItem.slug === article
  );

  if (!currentArticle) return null;

  return (
    <>
      <Hero article={currentArticle} />
      <Content article={currentArticle} />
    </>
  );
}
