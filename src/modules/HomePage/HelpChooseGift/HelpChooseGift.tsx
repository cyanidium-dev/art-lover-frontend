import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function HelpChooseGift() {
  return (
    <section className="pt-20 xl:pt-[94px]">
      <Container>
        <div className="relative z-10 rounded-[16px] xl:rounded-[20px] bg-orange overflow-hidden">
          <Image
            src="/images/homePage/helpChooseGifts/figureDesk.svg"
            alt="figure background"
            width="124"
            height="237"
            className="hidden xs:block absolute top-0 left-0 w-[74px] lg:w-[94px] xl:w-[124px] h-auto"
          />
          <Image
            src="/images/homePage/helpChooseGifts/logoBgMob.svg"
            alt="logo background"
            width="290"
            height="51"
            className="xs:hidden mb-6 w-full h-auto"
          />
          <Image
            src="/images/homePage/helpChooseGifts/logoBgDesk.svg"
            alt="logo background"
            width="1100"
            height="169"
            className="hidden xs:block mb-11 w-full h-auto"
          />
          <div className="relative z-20 pb-[232px] xs:pb-26 xl:pb-9 px-6 xl:px-14 ">
            <h2 className="max-w-[286px] md:max-w-[306px] xl:max-w-[456px] mb-3 text-[18px] sm:text-[32px] xl:text-[50px] font-extrabold leading-[122%] uppercase text-white">
              Допоможемо обрати подарунок
            </h2>
            <p className="max-w-[206px] md:max-w-[306px] xl:max-w-[396px] mb-5 xl:mb-[52px] text-[12px] xl:text-[16px] font-light leading-[125%] text-justify text-white">
              Наш сайт допоможе обрати подарунок для будь-якого свята та події
              за допомогою фільтрів
            </p>
            <Link href="/">
              <button
                className="cursor-pointer flex items-center justify-center px-4 py-2 w-[116px] sm:w-full max-w-[236px] md:max-w-[306px] xl:max-w-[456px] h-8 sm:h-12 xl:h-[58px] rounded-full 
            text-[8px] sm:text-[12px] xl:text-[14px] font-normal leading-[120%] shadow-social bg-linear-[121deg,white_22.48%,#FF692D_337.32%] sm:bg-linear-[-186deg,#ffffff_11.19%,#ff692d_199.95%]"
              >
                Обрати подарунок
              </button>
            </Link>
          </div>
          <Image
            src="/images/homePage/helpChooseGifts/imageMob.webp"
            alt="girl with gifts"
            width="592"
            height="550"
            className="xs:hidden absolute z-10 bottom-0 right-0 w-full max-w-[380px] h-auto"
          />
          <Image
            src="/images/homePage/helpChooseGifts/imageDesk.webp"
            alt="girl with gifts"
            width="2160"
            height="1186"
            className="hidden xs:block absolute z-10 bottom-0 right-0 w-full h-auto"
          />
        </div>
      </Container>
    </section>
  );
}
