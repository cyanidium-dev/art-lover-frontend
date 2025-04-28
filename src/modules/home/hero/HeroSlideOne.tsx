import Container from '@/shared/components/container/Container';
import Image from 'next/image';

export default function HeroSlideOne() {
  return (
    <div className="relative pb-9 bg-dark text-white overflow-hidden">
      <div className="relative max-w-[480px] mx-auto">
        <Image
          src="/images/homePage/hero/logo.svg"
          alt="logo"
          priority
          width="171"
          height="145"
          className="absolute z-30 bottom-[-44px] left-[calc(50%-86px)]"
        />
        <div className="relative h-[316px] mb-15 rounded-b-[24px] overflow-hidden">
          <div className="absolute inset-0 z-20 hero-gradient"></div>
          <Image
            src="/images/homePage/hero/imageOne.webp"
            alt="hero image"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover z-10 object-[center_74%]"
          />
        </div>
      </div>
      <div className="relative max-w-[480px] mx-auto px-8">
        <p className="max-w-[160px] mb-3 font-denistina text-[16px] font-normal leading-[120%]">
          Створи шедевр вже сьогодні!
        </p>
        <p className="max-w-[160px] mb-[33px] text-[12px] font-light leading-[120%] text-justify">
          Ласкаво просимо до світу безмежного натхнення!
        </p>
        <h1 className="max-w-[180px] mx-auto text-[16px] font-medium leading-[120%] uppercase text-center">
          Твоя творчість починається тут!
        </h1>
      </div>
      <Image
        src="/images/homePage/hero/figuresRightMob.svg"
        priority
        alt="background figures"
        width="170"
        height="298"
        className="absolute bottom-[-22px] right-[-76px]"
      />
      <Image
        src="/images/homePage/hero/figureLeftMob.svg"
        priority
        alt="background figure"
        width="164"
        height="104"
        className="absolute bottom-[-31px] left-[-97px]"
      />
    </div>
  );
}
