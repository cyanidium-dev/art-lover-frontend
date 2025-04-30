import Link from 'next/link';
import { Article } from '@/types/article';
import { calculateReadingTime } from '@/shared/utils/calculateReadingTime';
import Image from 'next/image';

interface BlogCardProps {
  article: Article;
}

export default function BlogCard({ article }: BlogCardProps) {
  const { title, subtitle, description, images, slug } = article;

  const readingTime = calculateReadingTime(article);

  return (
    <div className="p-4 bg-white rounded-[8px] shadow-social">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-[116px] xs:h-[180px] mb-4 rounded-[8px] overflow-hidden">
          <Image
            src={images[0]?.url || ''}
            alt={images[0]?.alt || 'blog photo'}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center"
          />
        </div>

        <h3 className="mb-2 text-[14px] font-medium leading-[120%] text-orange">
          {title}: {subtitle.toLowerCase()}
        </h3>
      </Link>
      <p className="mb-5 text-[12px] font-medium leading-[120%]">
        {description}
      </p>
      <div className="flex gap-x-4">
        <div className="relative flex items-center justify-center shrink-0 w-[calc(100%-44px-16px)] border border-gray-light py-3 px-4 rounded-full">
          <Image
            src="/images/blogPage/blogList/clock.svg"
            alt="clock"
            width="20"
            height="20"
            className="absolute left-4"
          />
          <p className="text-[12px] font-normal leading-[120%] text-gray-light">
            {readingTime}&nbsp;хв читання
          </p>
        </div>
        <Link href={`/blog/${slug}`}>
          <button className="cursor-pointer group flex items-center justify-center size-[44px] rounded-[10px] bg-orange">
            <Image
              src="/images/blogPage/blogList/arrow.svg"
              alt="arrow"
              width="28"
              height="28"
              className="translate-x-0 group-active:scale-95 group-[focus-visible]:translate-x-1 xl:group-hover:translate-x-1 transition duration-300 ease-out will-change-transform"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
