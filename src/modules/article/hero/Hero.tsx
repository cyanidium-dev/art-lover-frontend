import Container from '@/shared/components/container/Container';
import { Article } from '@/types/article';
import Image from 'next/image';

interface HeroProps {
  article: Article;
}

export default function Hero({ article }: HeroProps) {
  const { title, subtitle } = article;

  return (
    <section>
      <Container>
        <div className="relative z-10 px-[21px] xl:px-[314px] py-[43px] md:py-[82px] bg-dark text-white rounded-[8px] xl:rounded-[16px] overflow-hidden">
          <Image
            src="/images/articlePage/hero/bgImagesMob.svg"
            alt="background"
            fill
            sizes="100vw"
            className="xs:hidden object-cover -z-10"
          />
          <Image
            src="/images/articlePage/hero/bgImagesDesk.svg"
            alt="background"
            fill
            sizes="100vw"
            className="hidden xs:block object-cover -z-10"
          />
          <h1 className="mb-2 text-[20px] md:text-[32px] xl:text-[40px] font-medium leading-[120%] uppercase text-center xl:text-left">
            {title}
          </h1>
          <p className="text-[14px] md:text-[16px] font-light leading-[120%] text-center xl:text-justify">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
