import Container from '@/shared/components/container/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <Container className="relative">
        {/* <Image
          src="/images/aboutPage/hero/figureLeftDesk.svg"
          alt="background"
          width="151"
          height="322"
          className="hidden xl:block absolute top-[-83px] left-[-145px] -z-10"
        />
        <Image
          src="/images/aboutPage/hero/figureRightDesk.svg"
          alt="background"
          width="330"
          height="314"
          className="hidden xl:block absolute bottom-0 right-0 -z-10"
        /> */}
        <div
          className="relative z-10 flex flex-col items-end pt-[17px] pb-3 px-3 md:p-8 lg:py-10 lg:px-6 rounded-[8px] lg:rounded-[16px] bg-dark 
        text-white overflow-hidden"
        >
          <Image
            src="/images/aboutPage/hero/imageLeftMob.svg"
            alt="background"
            width="151"
            height="148"
            className="md:hidden absolute top-0 left-0 -z-10"
          />
          <Image
            src="/images/aboutPage/hero/imageRightMob.svg"
            alt="background"
            width="174"
            height="69"
            className="md:hidden absolute bottom-0 right-0 -z-10"
          />
          <Image
            src="/images/aboutPage/hero/imageLeftDesk.svg"
            alt="background"
            width="384"
            height="288"
            className="hidden md:block absolute top-0 left-0 -z-10 md:w-[288px] lg:w-[384px] h-auto"
          />
          <Image
            src="/images/aboutPage/hero/imageRightDesk.svg"
            alt="background"
            width="326"
            height="305"
            className="hidden md:block absolute bottom-0 right-0 -z-10 md:w-[250px] lg:w-[326px] h-auto"
          />
          <div className="max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] xl:max-w-[545px] mb-9 md:mb-2 lg:mb-5 xl:mb-0 ml-22 sm:ml-[140px] lg:ml-[224px] mr-auto">
            <h2 className="ml-[22px] lg:ml-0 mb-2 lg:mb-[22px] xs:mt-3 md:mt-[37px] lg:mt-[45px] font-denistina text-[16px] md:text-[22px] lg:text-[32px] font-normal leading-[120%]">
              Наша історія та цінності
            </h2>
            <p className="md:ml-[39px] text-[12px] md:text-[14px] xl:text-[18px] font-light leading-[120%] lg:leading-[160%] lg:text-justify">
              Ми команда творчих ентузіастів, які люблять створювати унікальні
              витвори мистецтва в стилі стрінг-арт.
            </p>
          </div>
          <h1 className="lg:mt-[-15px] text-[20px] md:text-[32px] lg:text-[40px] font-medium leading-[120%] uppercase">
            Про нас
          </h1>
        </div>
      </Container>
    </section>
  );
}
