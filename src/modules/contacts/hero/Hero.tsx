import Container from '@/shared/components/container/Container';
import HeroImages from './HeroImages';

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="relative z-10 flex flex-col items-end justify-between py-2 md:pt-5 lg:pt-8 md:pb-5 lg:pb-7 px-3 md:px-20 lg:px-25 xl:px-[130.5px] bg-dark rounded-[8px] xl:rounded-[16px] text-white overflow-hidden">
          <HeroImages />
          <div className="max-w-[245px] md:max-w-[345px] xl:max-w-[435px] mb-8 md:mb-[43px]">
            <h1 className="mb-2 md:mb-[13px] text-[20px] md:text-[32px] xl:text-[40px] font-medium leading-[120%] uppercase text-center">
              контакти
            </h1>
            <h2 className="mb-2 md:mb-3 text-[14px] md:text-[16px] xl:text-[20px] font-semibold leading-[120%] xl:leading-[160%] text-center">
              Маєте питання чи пропозиції?
            </h2>
            <p className="md:max-w-[240px] xl:max-w-[311px] xl:mx-auto text-[14px] xl:text-[18px] font-light leading-[120%] xl:leading-[160%] text-center">
              Зв’яжіться з нами – ми з радістю допоможемо!
            </p>
          </div>
          <p className="lg:mx-auto font-denistina text-[16px] md:text-[24px] xl:text-[32px] font-normal leading-[120%] xl:text-center">
            Ваші&nbsp;&nbsp;питання - наші&nbsp;&nbsp;відповіді
          </p>
        </div>
      </Container>
    </section>
  );
}
