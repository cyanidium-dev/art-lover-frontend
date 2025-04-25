import Container from '@/shared/components/container/Container';

export default function About() {
  return (
    <section className="pt-20 xl:pt-[138px]">
      <Container>
        <div className="flex justify-between gap-x-4 mb-0.5 xl:mb-5">
          <h2 className="text-[24px] xl:text-[48px] font-medium leading-[120%] uppercase">
            Про нас
          </h2>
          <p className="text-[14px] xl:text-[20px] font-light leading-[120%]">
            Ми – команда, закохана в мистецтво, яка створила цей магазин для
            всіх, хто прагне творити без меж! Нашою місією є надихати
            художників, ілюстраторів, дизайнерів і всіх, хто не уявляє життя без
            творчості.
          </p>
        </div>
        <p className="font-denistina text-[14px] font-normal leading-[120%] text-orange text-right">
          Твори. Натхняйся!
        </p>
      </Container>
    </section>
  );
}
