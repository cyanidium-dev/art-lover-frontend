import Image from 'next/image';

export default function ConditionImages() {
  return (
    <>
      <Image
        src="/images/deliveryPage/conditions/figureLeftMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[-32px] left-[-69px]"
      />
      <Image
        src="/images/deliveryPage/conditions/figureRightMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 bottom-[142px] right-[-14px]"
      />
      <Image
        src="/images/deliveryPage/conditions/figureLeftDesk.svg"
        alt="background"
        width="276"
        height="420"
        className="hidden xl:block absolute -z-10 bottom-[-277px] left-[-168px]"
      />
      <Image
        src="/images/deliveryPage/conditions/figureRightDesk.svg"
        alt="background"
        width="331"
        height="392"
        className="hidden xl:block absolute -z-10 bottom-[-340px] right-[-218px]"
      />
    </>
  );
}
