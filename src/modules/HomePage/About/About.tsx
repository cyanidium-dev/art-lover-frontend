import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import BenefitsList from './BenefitsList';

export default function About() {
  return (
    <section className="relative pt-20 xl:pt-[138px]">
      <Container className="relative md:flex gap-x-5">
        <Image
          src="/images/homePage/about/figureLeftMob.svg"
          alt="background"
          width="121"
          height="79"
          className="xl:hidden absolute -z-10 top-[90px] left-[-56px]"
        />
        <Image
          src="/images/homePage/about/figureRightMob.svg"
          alt="background"
          width="93"
          height="114"
          className="xl:hidden absolute -z-10 top-[-60px] right-[-35px]"
        />
        <Image
          src="/images/homePage/about/figureLeftDesk.svg"
          alt="background"
          width="412"
          height="356"
          className="hidden xl:block absolute -z-10 top-[78px] left-[calc(50%-857px)]"
        />
        <Image
          src="/images/homePage/about/figureRightDesk.svg"
          alt="background"
          width="350"
          height="366"
          className="hidden xl:block absolute -z-10 top-[-85px] right-[calc(50%-730px)]"
        />
        <div className="md:w-[57.5%] flex flex-col justify-between">
          <div>
            <div className="flex justify-between gap-x-4 xl:gap-x-9 mb-0.5 xl:mb-5">
              <h2 className="text-[24px] xl:text-[48px] font-medium leading-[120%] uppercase">
                Про нас
              </h2>
              <p className="text-[14px] xl:text-[20px] font-light leading-[120%] text-justify">
                Ми – команда, закохана в мистецтво, яка створила цей магазин для
                всіх, хто прагне творити без меж! Нашою місією є надихати
                художників, ілюстраторів, дизайнерів і всіх, хто не уявляє життя
                без творчості.
              </p>
            </div>
            <p className="mb-5 font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%] text-orange text-right">
              Твори. Натхняйся!
            </p>
          </div>
          <div className="relative aspect-[296/169] mb-3 md:mb-0 rounded-[10px] xl:rounded-[16px] overflow-hidden shadow-social">
            <Image
              src="/images/homePage/about/imageOne.webp"
              alt="background"
              fill
              className="object-cover object-[center_63%]"
            />
          </div>
        </div>
        <div className="md:w-[40.6%]">
          <div className="hidden md:block relative mb-5 aspect-[447/385] xl:aspect-[447/445] rounded-[10px] xl:rounded-[16px] shadow-social overflow-hidden">
            <Image
              src="/images/homePage/about/imageTwo.webp"
              alt="background"
              fill
              className="object-cover"
            />
          </div>
          <BenefitsList />
        </div>
      </Container>
    </section>
  );
}
