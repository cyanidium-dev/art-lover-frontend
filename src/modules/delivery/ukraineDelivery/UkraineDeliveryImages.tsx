import Image from 'next/image';

export default function UkraineDeliveryImages() {
  return (
    <>
      <Image
        src="/images/deliveryPage/ukraineDelivery/figureLeftMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[195px] left-[-59px]"
      />
      <Image
        src="/images/deliveryPage/ukraineDelivery/figureRightMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[-56px] right-[-20px]"
      />
      <Image
        src="/images/deliveryPage/ukraineDelivery/figureRightDesk.svg"
        alt="background"
        width="401"
        height="259"
        className="hidden xl:block absolute -z-10 bottom-[-90px] right-[-120px]"
      />
    </>
  );
}
