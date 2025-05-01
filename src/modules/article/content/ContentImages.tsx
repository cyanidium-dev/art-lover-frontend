import Image from 'next/image';

export default function ContentImages() {
  return (
    <>
      <Image
        src="/images/articlePage/content/figureLeftTopMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[-32px] left-[-69px]"
      />
      <Image
        src="/images/articlePage/content/figureRightMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[423px] right-[-20px]"
      />
      <Image
        src="/images/articlePage/content/figureLeftBottomMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[488px] left-[-54px]"
      />
    </>
  );
}
