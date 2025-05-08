import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { Product } from '@/types/product';

interface BenefitsProps {
  currentProduct: Product;
}

export default function Benefits({ currentProduct }: BenefitsProps) {
  if (!currentProduct?.benefits || !currentProduct?.benefits?.length)
    return null;

  const { benefits } = currentProduct;

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInAnimation({ y: 30, delay: 1 })}
      className="mb-20 xl:mb-0 rounded-[8px] border border-dark"
    >
      {benefits.map((benefit, idx) => (
        <li
          key={idx}
          className="flex items-center gap-x-6 px-5 py-3 not-last:border-b not-last:border-orange"
        >
          <Image
            src={benefit?.icon || ''}
            alt={benefit?.description || 'icon'}
            width={40}
            height={40}
            className="w-10 xl:w-16 h-auto"
          />
          <p className="text-[14px] xl:text-[20px] font-normal leading-[120%]">
            {benefit?.description}
          </p>
        </li>
      ))}
    </motion.ul>
  );
}
