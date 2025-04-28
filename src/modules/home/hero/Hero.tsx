import Image from 'next/image';
import HeroSlider from './HeroSlider';

export default function Hero() {
  return (
    <section className="relative">
      <HeroSlider />
      <Image
        src="/images/homePage/hero/figureRightBottomDesk.svg"
        priority
        alt="background figures"
        width="348"
        height="322"
        className="hidden xl:block absolute xl:bottom-[15px] right-[0px]"
      />
      <Image
        src="/images/homePage/hero/figureLeftBottomDesk.svg"
        priority
        alt="background figures"
        width="222"
        height="464"
        className="hidden xl:block absolute xl:bottom-[-78px] left-0"
      />
    </section>
  );
}
