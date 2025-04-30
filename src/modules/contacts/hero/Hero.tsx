import Container from '@/shared/components/container/Container';
import HeroImages from './HeroImages';

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="relative z-10 flex flex-col items-end justify-between py-2 px-3 bg-dark rounded-[8px] xl:rounded-[16px] text-white overflow-hidden">
          <HeroImages />
          <div className="max-w-[245px] mb-8">
            <h1 className="mb-2 text-[20px] font-medium leading-[120%] uppercase text-center">
              контакти
            </h1>
            <h2 className="mb-2 text-[14px] font-semibold leading-[120%] text-center">
              Маєте питання чи пропозиції?
            </h2>
            <p className="text-[14px] font-light leading-[120%] text-center">
              Зв’яжіться з нами – ми з радістю допоможемо!
            </p>
          </div>
          <p className="font-denistina text-[16px] font-normal leading-[120%]">
            Ваші питання – наші відповіді
          </p>
        </div>
      </Container>
    </section>
  );
}
