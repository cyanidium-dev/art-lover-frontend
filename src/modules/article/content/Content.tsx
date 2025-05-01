import Image from 'next/image';
import { Article } from '@/types/article';
import Container from '@/shared/components/container/Container';
import ContentImages from './ContentImages';

interface ContentProps {
  article: Article;
}

export default function Content({ article }: ContentProps) {
  const { description, text, images } = article;
  return (
    <section className="pt-8 xl:pt-12 pb-20 xl:pb-35">
      <Container className="relative">
        <ContentImages />
        <h2 className="mb-4 xl:pb-6 text-[14px] xl:text-[16px] font-semibold leading-[120%]">
          {description}
        </h2>
        <ul className="flex flex-col gap-4 xl:gap-6 mb-8 xl:mb-12">
          {text.map((paragraph, idx) => (
            <li
              key={idx}
              className="text-[12px] xl:text-[16px] font-normal leading-[160%] text-justify"
            >
              {paragraph}
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-[calc(50%-12px)] h-[181px] md:h-[229px] xl:h-[329px] rounded-[16px] overflow-hidden shadow-social">
            <Image
              src={images[0]?.url || ''}
              alt={images[0]?.alt || 'article image'}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative md:w-[calc(50%-12px)] h-[181px] md:h-[229px] xl:h-[329px] rounded-[16px] overflow-hidden shadow-social">
            <Image
              src={images[1]?.url || ''}
              alt={images[1]?.alt || 'article image'}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
