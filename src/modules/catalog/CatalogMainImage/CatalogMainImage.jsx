import Image from 'next/image';

const CatalogMainBanner = ()=> {
  return (
    <div
      className="relative bg-dark z-10 mb-[24px] md:mb-[32px] aspect-[296/160] lg:aspect-[820/196]  md:rounded-[12px] rounded-[8px] lg:rounded-[16px] overflow-hidden">
      <Image
        src="/images/catalog/mainDesk.webp"
        alt="background"
        className="-z-10 hidden lg:block object-cover"
        fill
      />
      <Image
        src="/images/catalog/mainMob.webp"
        alt="background"
        className="-z-10 lg:hidden object-cover"
        fill
      />
      <p className="absolute top-[44px] md:top-[45px] left-[50%] md:left-auto right-auto md:right-[252px] font-denistina text-[20px] lg:text-[32px] leading-none text-white">
        Даруйте натхнення
      </p>
      <h2
        className="absolute right-[12px] lg:right-[24px] top-[12px] bottom-[28px] text-[18px] text-[20px] lg:text-[40px] font-medium leading-none uppercase text-white">
        ПОДАРУНКИ
      </h2>
    </div>
  )
}

export default CatalogMainBanner;
