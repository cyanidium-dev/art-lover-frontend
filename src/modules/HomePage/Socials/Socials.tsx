import Container from '@/shared/components/container/Container';
import SocialsList from './SocialsList';

export default function Socials() {
  return (
    <section className="my-20 xl:mt-[70px] xl:mb-[157px]">
      <Container>
        <h2 className="mb-8 xl:mb-10 text-[20px] xl:text-[40px] font-medium leading-[120%] uppercase text-center">
          Стежте за нами в соціальних мережах
        </h2>
        <SocialsList />
      </Container>
    </section>
  );
}
