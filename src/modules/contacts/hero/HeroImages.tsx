import Image from 'next/image';

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/contactsPage/hero/figureLeftMob.svg"
        alt="background"
        width="140"
        height="154"
        className="xl:hidden absolute -z-10 top-0 left-0"
      />
      <Image
        src="/images/contactsPage/hero/figureRightMob.svg"
        alt="background"
        width="275"
        height="122"
        className="xl:hidden absolute -z-10 top-0 right-0"
      />
      {/* <Image
        src="/images/contactsPage/hero/figureLeftDesk.svg"
        alt="background"
        width="806"
        height="1344"
        className="hidden xl:block absolute -z-10 top-[-152px] left-[-239px]"
      />
      <Image
        src="/images/contactsPage/hero/figureRightDesk.svg"
        alt="background"
        width="563"
        height="2054"
        className="hidden xl:block absolute -z-10 top-[-90px] right-[-139px]"
      /> */}
    </>
  );
}
