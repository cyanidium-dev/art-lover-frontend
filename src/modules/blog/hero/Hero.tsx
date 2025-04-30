import Container from '@/shared/components/container/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="relative z-10 px-3 md:px-10 py-7 md:py-[82px] bg-dark text-white rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <Image
            src="/images/blogPage/hero/figureLeftMob.svg"
            alt="background"
            width="224"
            height="152"
            className="md:hidden absolute -z-10 top-0 left-0"
          />
          <Image
            src="/images/blogPage/hero/figureRightMob.svg"
            alt="background"
            width="296"
            height="154"
            className="md:hidden absolute -z-20 top-0 right-0"
          />
          <Image
            src="/images/blogPage/hero/figureLeftDesk.svg"
            alt="background"
            width="550"
            height="305"
            className="hidden md:block absolute -z-10 top-0 md:left-[-120px] lg:left-[-70px] xl:left-0 w-auto h-full"
          />
          <Image
            src="/images/blogPage/hero/figureRightDesk.svg"
            alt="background"
            width="1100"
            height="279"
            className="hidden md:block absolute -z-20 top-[14px] right-0 w-auto md:h-[249px] lg:h-[259px] xl:h-[279px] object-cover"
          />
          <h1 className="mb-2 xl:mb-3 text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-medium leading-[120%] uppercase">
            блог
          </h1>
          <p className="max-w-[179px] md:max-w-[260px] text-[12px] md:text-[16px] font-light leading-[120%] xl:leading-[126%] text-justify">
            Ласкаво просимо до нашого блогу! Тут ми ділимося натхненням,
            творчими ідеями та корисними лайфхаками.
          </p>
        </div>
      </Container>
    </section>
  );
}
