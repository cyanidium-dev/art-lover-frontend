import { Article } from '@/types/article';

interface ContentProps {
  article: Article;
}

export default function Content({ article }: ContentProps) {
  return <section>Content</section>;
}
