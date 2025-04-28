import Image from 'next/image';
import Container from '@/shared/components/container/Container';
import NewProductsSlider from './NewProductsSlider';

export default function NewProducts() {
  return (
    <section className="pt-20 xl:pt-[158px]">
      <Container className="relative">
        <Image
          src="/images/homePage/newProducts/figureRightMob.svg"
          alt="figure background"
          width="125"
          height="179"
          className="xl:hidden absolute top-[-96px] right-[-54px]"
        />
        <Image
          src="/images/homePage/newProducts/figureLeftMob.svg"
          alt="figure background"
          width="120"
          height="69"
          className="xl:hidden absolute bottom-[-384px] left-[-62px]"
        />
        <Image
          src="/images/homePage/newProducts/figureCenterDesk.svg"
          alt="figure background"
          width="470"
          height="313"
          className="hidden xl:block -z-10 absolute top-[-33px] left-[calc(50%-267px)]"
        />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 mb-6 xl:mb-12">
          <h2 className="text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase">
            наші новинки
          </h2>
          <p className="font-denistina text-[14px] xl:text-[36px] font-normal leading-[120%]">
            Свіжі ідеї для вашої творчості
          </p>
        </div>
      </Container>
      <NewProductsSlider />
    </section>
  );
}
