import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import ReviewedProductsSlider from './ReviewedProductsSLider';

export default function ReviewedProducts() {
  return (
    <section className="pb-20 xl:pb-[140px]">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="hidden xl:block absolute -z-10 top-[-72px] right-[-37px]"
        >
          <Image
            src="/images/productPage/reviewedProducts/figureRightDesk.svg"
            alt="background"
            width="136"
            height="190"
          />
        </motion.div>
        <h2 className="mb-6 xl:mb-5 text-[18px] font-semibold leading-[140%] xl:text-[40px] xl:font-medium xl:leading-[120%] uppercase">
          переглянуті товари
        </h2>
        <ReviewedProductsSlider />
      </Container>
    </section>
  );
}
