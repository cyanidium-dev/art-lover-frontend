import Image from 'next/image';

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/deliveryPage/hero/figureLeftMob.svg"
        alt="background"
        width="144"
        height="154"
        className="md:hidden absolute -z-10 top-0 left-0 w-auto h-full object-cover"
      />
      <Image
        src="/images/deliveryPage/hero/figureCenterMob.svg"
        alt="background"
        width="264"
        height="113"
        className="md:hidden absolute -z-10 bottom-0 left-[calc(50%-132px)] w-[264px] h-auto object-cover"
      />
      <Image
        src="/images/deliveryPage/hero/figureRightMob.svg"
        alt="background"
        width="82"
        height="69"
        className="md:hidden absolute -z-20 right-2 top-5 object-cover"
      />
      <Image
        src="/images/deliveryPage/hero/figureLeftDesk.svg"
        alt="background"
        width="410"
        height="277"
        className="hidden md:block absolute -z-10 top-0 xl:top-[14px] left-0 w-auto h-full xl:h-[277px] object-cover"
      />
      <Image
        src="/images/deliveryPage/hero/figureCenterDesk.svg"
        alt="background"
        width="754"
        height="218"
        className="hidden md:block absolute -z-10 bottom-0 md:left-[calc(50%-192px)] xl:left-[calc(50%-377px)] md:w-[384px] xl:w-[754px] h-auto object-cover"
      />
      <Image
        src="/images/deliveryPage/hero/figureRightDesk.svg"
        alt="background"
        width="320"
        height="270"
        className="hidden md:block absolute -z-20 right-2 md:right-[18px] top-5 md:top-[18px] md:w-[150px] xl:w-[320px] h-auto object-cover"
      />
    </>
  );
}
