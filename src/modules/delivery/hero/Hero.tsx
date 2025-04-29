import Container from '@/shared/components/container/Container';
import HeroImages from './HeroImages';

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="relative z-10 pt-[19px] pb-3 xl:pt-9 xl:pb-[54px] px-[18px] xl:px-[192px] rounded-[8px] xl:rounded-[16px] overflow-hidden bg-dark text-white">
          <HeroImages />
          <p className="mb-[45px] xl:mb-[91px] text-right font-denistina text-[16px] xl:text-[32px] font-normal leading-[120%]">
            Швидко, зручно, надійно
          </p>
          <h1 className="mb-2 xl:mb-4 text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase text-center">
            умови доставки
          </h1>
          <h2 className="max-w-[206px] xl:max-w-full mx-auto text-[14px] xl:text-[18px] font-light leading-[120%] text-center">
            Доставляємо натхнення по всьому світу
          </h2>
        </div>
      </Container>
    </section>
  );
}
