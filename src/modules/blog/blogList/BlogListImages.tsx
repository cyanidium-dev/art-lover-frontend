import Image from 'next/image';

export default function BlogListImages() {
  return (
    <>
      <Image
        src="/images/blogPage/blogList/figureLeftTopMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[-32px] left-[-69px]"
      />
      <Image
        src="/images/blogPage/blogList/figureRightMob.svg"
        alt="background"
        width="120"
        height="349"
        className="xl:hidden absolute -z-10 top-[213px] right-[-20px]"
      />
      <Image
        src="/images/blogPage/blogList/figureLeftBottomMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[722px] left-[-62px]"
      />
    </>
  );
}
