import Container from '@/shared/components/container/Container';
import Image from 'next/image';

export default function HeroSlideOne() {
  return (
    <div className="pb-9 bg-gray-light text-white">
      <div className="relative h-[316px] mb-15 rounded-b-[24px] overflow-hidden">
        <div className="absolute inset-0 z-10 hero-gradient"></div>
        <Image
          src="/images/homePage/hero/imageOne.webp"
          alt="hero image"
          priority
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[center_94%]"
        />
      </div>
      <Container>
        <p className="max-w-[160px] mb-3 font-denistina text-[16px] font-normal leading-[120%]">
          Створи шедевр вже сьогодні!
        </p>
        <p className="max-w-[160px] mb-[33px] text-[12px] font-light leading-[120%] text-justify">
          Ласкаво просимо до світу безмежного натхнення!
        </p>
        <h1 className="max-w-[180px] mx-auto text-[16px] font-medium leading-[120%] uppercase text-center">
          Твоя творчість починається тут!
        </h1>
      </Container>
    </div>
  );
}
