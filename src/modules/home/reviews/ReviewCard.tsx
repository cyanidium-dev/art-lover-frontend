import { formatDate } from '@/shared/utils/formatDate';
import { Review } from '@/types/review';
import Image from 'next/image';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { images, title, author, text, rating, createdAt } = review;

  const formattedDate = formatDate(createdAt);

  return (
    <div className="flex flex-col justify-between h-full p-3 rounded-[8px] shadow-social">
      <div>
        <div className="relative h-[85px] mb-3 rounded-[8px] overflow-hidden">
          <Image
            src={images[0]?.url || ''}
            alt={images[0]?.alt || 'product photo'}
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
        <p className="mb-1.5 text-[12px] font-normal leading-[120%]">Товар:</p>
        <h3 className="mb-3 text-[14px] font-medium leading-[120%] line-clamp-1">
          {title}
        </h3>
        <p className="mb-3 text-[12px] font-normal leading-[120%] line-clamp-[8]">
          &quot;{text}&quot;
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-denistina text-[20px] font-normal leading-[120%] text-orange">
          {author}
        </p>
        <p className="text-[12px] font-normal leading-[120%]">
          {formattedDate}
        </p>
      </div>
    </div>
  );
}
