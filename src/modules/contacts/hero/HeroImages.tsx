import Image from 'next/image';

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/contactsPage/hero/figureLeftMob.svg"
        alt="background"
        width="140"
        height="154"
        className="md:hidden absolute -z-10 top-0 left-0"
      />
      <Image
        src="/images/contactsPage/hero/figureRightMob.svg"
        alt="background"
        width="275"
        height="122"
        className="md:hidden absolute -z-10 top-0 right-0"
      />
      <Image
        src="/images/contactsPage/hero/figureLeftDesk.svg"
        alt="background"
        width="418"
        height="277"
        className="hidden md:block absolute -z-10 top-[14px] left-6 md:w-[300px] lg:w-[330px] xl:w-[418px] h-auto"
      />
      <Image
        src="/images/contactsPage/hero/figureRightDesk.svg"
        alt="background"
        width="671"
        height="236"
        className="hidden md:block absolute -z-10 top-0 right-0 md:w-[460px] lg:w-[520px] xl:w-[671px] h-auto"
      />
    </>
  );
}
