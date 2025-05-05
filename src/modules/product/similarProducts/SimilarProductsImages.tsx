import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

export default function SimilarProductsImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[82px] left-[-56px]"
      >
        <Image
          src="/images/productPage/similarProducts/figureLeftMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden absolute -z-10 top-[-108px] right-[-20px]"
      >
        <Image
          src="/images/productPage/similarProducts/figureRightMob.svg"
          alt="background"
          width="114"
          height="92"
        />
      </motion.div>
    </>
  );
}
