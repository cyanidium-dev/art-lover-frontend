import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import BenefitsList from './BenefitsList';

export default function About() {
  return (
    <section className="pt-20 xl:pt-[138px]">
      <Container className="relative ">
        <Image
          src="/images/homePage/about/figureLeftMob.svg"
          alt="background"
          width="121"
          height="79"
          className="md:hidden absolute -z-10 top-[90px] left-[calc(50%-236px)]"
        />
        <Image
          src="/images/homePage/about/figureRightMob.svg"
          alt="background"
          width="93"
          height="114"
          className="md:hidden absolute -z-10 top-[-60px] right-[calc(50%-215px)]"
        />
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
          <div className="relative aspect-[296/169] mb-3 rounded-[10px] xl:rounded-[16px] overflow-hidden shadow-social">
            <Image
              src="/images/homePage/about/ImageOne.webp"
              alt="background"
              fill
              className="object-cover object-[center_63%]"
            />
          </div>
        </div>
        <div>
          <div className="hidden md:block relative mb-5 aspect-[447/445] rounded-[10px] xl:rounded-[16px] overflow-hidden">
            <Image
              src="/images/homePage/about/ImageTwo.webp"
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
