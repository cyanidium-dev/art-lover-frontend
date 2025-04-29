import Container from '@/shared/components/container/Container';
import Image from 'next/image';

export default function History() {
  return (
    <section className="pt-20 xl:pt-30 xl:pb-[50px]">
      <Container>
        <h2 className="mb-6 xl:mb-16 text-[18px] xl:text-[32px] font-semibold xl:font-medium leading-[140%] uppercase">
          Історія нашої команди
        </h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-18 xl:gap-[114px] mb-6 md:mb-10 xl:mb-20">
          <div className="relative w-full md:w-[calc(45%-16px)] lg:w-[calc(45%-36px)] xl:w-[calc(46.3%-57px)] h-[212px] sm:h-[280px] md:h-[212px] xl:h-[320px] rounded-[8px] xl:rounded-[16px] overflow-hidden">
            <Image
              src="/images/aboutPage/history/imageOne.webp"
              alt="picture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="w-full md:w-[calc(55%-16px)] lg:w-[calc(55%-36px)] xl:lg:w-[calc(53.7%-57px)] text-[12px] xl:text-[18px] font-normal leading-[160%] text-justify">
            Наше захоплення цим видом мистецтва почалося досить просто. Ми всі
            любили майструвати і хотіли спробувати щось нове. Одного разу ми
            відкрили для себе стрінг-арт і були вражені його неймовірною
            креативністю та можливостями. Надихнувшись, ми вирішили поділитися
            цим зі світом, відкривши наш магазин.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-4 md:gap-8 lg:gap-18 xl:gap-[114px] mb-6 md:mb-10 xl:mb-20">
          <div className="relative w-full md:w-[calc(45%-16px)] lg:w-[calc(45%-36px)] xl:w-[calc(46.3%-57px)] h-[212px] sm:h-[280px] md:h-[212px] xl:h-[320px] rounded-[8px] xl:rounded-[16px] overflow-hidden">
            <Image
              src="/images/aboutPage/history/imageTwo.webp"
              alt="picture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="w-full md:w-[calc(55%-16px)] lg:w-[calc(55%-36px)] xl:lg:w-[calc(53.7%-57px)] text-[12px] xl:text-[18px] font-normal leading-[160%] text-justify">
            У нашому магазині ви знайдете різноманітні набори стрінг-арт для
            створення чудових творів мистецтва. Ми пропонуємо широкий асортимент
            дизайнів і розмірів, щоб кожен міг знайти щось на свій смак. Крім
            того, ми також приймаємо замовлення на індивідуальні портрети та
            будь-які інші зображення, щоб створити унікальний витвір мистецтва
            саме для вас.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-18 xl:gap-[114px] mb-8 md:mb-12 xl:mb-25">
          <div className="relative w-full md:w-[calc(45%-16px)] lg:w-[calc(45%-36px)] xl:w-[calc(46.3%-57px)] h-[212px] sm:h-[280px] md:h-[212px] xl:h-[320px] rounded-[8px] xl:rounded-[16px] overflow-hidden">
            <Image
              src="/images/aboutPage/history/imageThree.webp"
              alt="picture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="w-full md:w-[calc(55%-16px)] lg:w-[calc(55%-36px)] xl:lg:w-[calc(53.7%-57px)] text-[12px] xl:text-[18px] font-normal leading-[160%] text-justify">
            Ми пишаємося якістю нашої продукції та прагнемо, щоб кожен клієнт
            отримував задоволення від роботи з нашими наборами. Ми також цінуємо
            індивідуальний підхід до кожного клієнта і завжди готові допомогти
            втілити ваші ідеї в життя.
          </p>
        </div>
        <p className="text-[12px] xl:text-[18px] font-semibold leading-[160%]">
          Дякуємо, що обрали наш магазин для своєї творчості.
          <br /> Сподіваємося, що наші набори принесуть вам радість і натхнення,
          і ви створите щось справді неймовірне!
        </p>
      </Container>
    </section>
  );
}
