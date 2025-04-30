import Image from 'next/image';

export default function TeamImages() {
  return (
    <>
      <Image
        src="/images/aboutPage/team/figureLeftMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[-32px] left-[-69px]"
      />
      <Image
        src="/images/aboutPage/team/figureRightMob.svg"
        alt="background"
        width="120"
        height="349"
        className="xl:hidden absolute -z-10 top-[209px] right-[-22px]"
      />
    </>
  );
}
