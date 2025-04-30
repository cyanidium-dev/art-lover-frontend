import Image from 'next/image';

export default function HistoryImages() {
  return (
    <>
      <Image
        src="/images/aboutPage/history/figureLeftMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 bottom-[32px] left-[-59px]"
      />
      <Image
        src="/images/aboutPage/history/figureLeftDesk.svg"
        alt="background"
        width="806"
        height="1344"
        className="hidden xl:block absolute -z-10 top-[-152px] left-[-239px]"
      />
      <Image
        src="/images/aboutPage/history/figureRightDesk.svg"
        alt="background"
        width="563"
        height="2054"
        className="hidden xl:block absolute -z-10 top-[-90px] right-[-139px]"
      />
    </>
  );
}
