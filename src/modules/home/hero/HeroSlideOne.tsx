import Image from 'next/image';

export default function HeroSlideOne() {
  return (
    <div className="relative pb-9 md:pb-0 bg-dark text-white overflow-hidden">
      <Image
        src="/images/homePage/hero/logo.svg"
        alt="logo"
        priority
        width="171"
        height="145"
        className="hidden md:block absolute z-30 md:bottom-[198px] md:left-[calc(50%-139px)] lg:left-[calc(50%-247px)] 
           md:w-[258px] lg:w-[395px] xl:w-[495px] h-auto"
      />
      <div className="md:flex">
        <div className="relative max-w-[480px] md:max-w-full md:w-[43%] mx-auto md:mx-0">
          <Image
            src="/images/homePage/hero/logo.svg"
            alt="logo"
            priority
            width="171"
            height="145"
            className="md:hidden absolute z-30 bottom-[-44px] md:bottom-[198px] left-[calc(50%-86px)] md:left-[calc(50%+18px)] lg:left-[calc(50%-250px)] 
           md:w-[358px] xl:w-[495px] h-auto"
          />
          <div className="relative h-[316px] md:h-[654px] lg:h-[734px] mb-15 md:mb-0 rounded-b-[24px] md:rounded-l-none md:rounded-r-[44px] overflow-hidden">
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
        <div className="relative md:absolute md:left-[calc(50%+78px)] xl:left-[calc(50%+118px+48px)] max-w-[480px] xl:max-w-[322px] mx-auto px-8 md:px-0 md:mt-[245px] lg:mt-[303px] xl:mt-[263px]">
          <p className="max-w-[160px] md:max-w-[250px] lg:max-w-[320px] mb-3 md:mb-[17px] font-denistina text-[16px] md:text-[24px] lg:text-[32px] font-normal leading-[120%]">
            Створи шедевр вже сьогодні!
          </p>
          <p className="max-w-[212px] md:max-w-[250px] lg:max-w-[320px] mb-[35px] md:mb-0 text-[12px] md:text-[14px] xl:text-[16px] font-light leading-[120%] text-justify">
            Ласкаво просимо до світу безмежного натхнення! Наш магазин — це
            місце, де художники, ілюстратори та всі, хто любить творити,
            знайдуть ідеальні арт-товари для своїх проєктів.
          </p>
        </div>
      </div>
      <h1 className="md:absolute z-30 bottom-18 left-[calc(50%-202px)] max-w-[180px] md:max-w-[396px] mx-auto text-[16px] md:text-[32px] font-medium leading-[120%] uppercase text-center">
        Твоя творчість починається тут!
      </h1>
      <Image
        src="/images/homePage/hero/figuresRightMob.svg"
        priority
        alt="background figures"
        width="170"
        height="298"
        className="md:hidden absolute bottom-[-22px] right-[-76px]"
      />
      <Image
        src="/images/homePage/hero/figureLeftMob.svg"
        priority
        alt="background figure"
        width="164"
        height="104"
        className="md:hidden absolute bottom-[-31px] left-[-97px]"
      />
      <Image
        src="/images/homePage/hero/figuresRightDesk.svg"
        priority
        alt="background figures"
        width="468"
        height="927"
        className="hidden md:block absolute md:bottom-[-88px] lg:bottom-[-108px] right-[-110px] md:w-[388px] lg:w-[468px] h-auto"
      />
    </div>
  );
}
