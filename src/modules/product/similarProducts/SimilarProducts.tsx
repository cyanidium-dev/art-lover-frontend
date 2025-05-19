import { useTranslations } from 'next-intl';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import SimilarProductsSlider from './SimilarProductsSlider';
import SimilarProductsImages from './SimilarProductsImages';

export default function SimilarProducts() {
  const t = useTranslations('productPage.similarSection');

  return (
    <section className="pb-20 xl:pb-30">
      <Container className="relative">
        <SimilarProductsImages />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-6 xl:mb-5 text-[18px] font-semibold leading-[140%] xl:text-[40px] xl:font-medium xl:leading-[120%] uppercase"
        >
          {t('title')}
        </motion.h2>
        <SimilarProductsSlider />
      </Container>
    </section>
  );
}
