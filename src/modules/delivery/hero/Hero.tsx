import Container from '@/shared/components/container/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="relative z-10 pt-[19px] pb-3 xl:pt-9 xl:pb-[54px] px-[18px] xl:px-[192px] rounded-[8px] xl:rounded-[16px] overflow-hidden bg-dark text-white">
          <Image
            src="/images/deliveryPage/hero/figureLeftMob.svg"
            alt="background"
            width="144"
            height="154"
            className="absolute -z-10 top-0 left-0 w-auto h-full object-cover"
          />
          <Image
            src="/images/deliveryPage/hero/figureCenterMob.svg"
            alt="background"
            width="264"
            height="113"
            className="absolute -z-10 bottom-0 left-[calc(50%-132px)] w-[264px] h-auto object-cover"
          />
          <Image
            src="/images/deliveryPage/hero/figureRightMob.svg"
            alt="background"
            width="82"
            height="69"
            className="absolute -z-20 right-2 top-5 object-cover"
          />
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
