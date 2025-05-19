import * as motion from 'motion/react-client';
import { listVariants } from '@/shared/utils/animationVariants';
import BenefitItem from './BenefitItem';

export default function BenefitsList() {
  const benefitsList = [
    { value: '1000+', description: 'Нових клієнтів' },
    { value: '900+', description: 'Задоволених клієнтів' },
    { value: '1200+', description: 'Прийнятих замовлень' },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex gap-x-4"
    >
      {benefitsList.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} />
      ))}
    </motion.ul>
  );
}
