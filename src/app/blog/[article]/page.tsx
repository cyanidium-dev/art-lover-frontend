import { articlesList } from '@/modules/blog/blogList/mockedData';
import Content from '@/modules/article/content/Content';
import Hero from '@/modules/article/hero/Hero';

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = await params;

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
