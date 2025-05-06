import Container from '@/shared/components/container/Container';
import { reviewsList } from '@/modules/home/reviews/mockedData';
import ReviewsSlider from './ReviewsSlider';

export default function Reviews() {
  return (
    <section className="pb-20 xl:pb-30">
      <Container>
        <div className="mb-6 xl:mb-8">
          <div className="flex items-center gap-x-3">
            <h2 className="text-[16px] xl:text-[32px] font-medium leading-[120%] uppercase">
              відгуки
            </h2>
            <p className="mt-[1px] text-[10px] xl:text-[16px] font-normal leading-none">
              ({reviewsList.length})
            </p>
          </div>
        </div>
        <ReviewsSlider />
      </Container>
    </section>
  );
}
