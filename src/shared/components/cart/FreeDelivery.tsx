import { getTotalSum } from '@/shared/utils/getTotalSum';
import { CartItem } from '@/types/cartItem';
import { Progress } from '@heroui/react';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

interface FreeDeliveryProps {
  cartItems: CartItem[];
}

const FREE_DELIVERY_SUM = 500;

export default function FreeDelivery({ cartItems }: FreeDeliveryProps) {
  const total = getTotalSum(cartItems);

  const needToOrderSum = FREE_DELIVERY_SUM - total;

  const percent = Math.round((total / FREE_DELIVERY_SUM) * 100);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInAnimation({ y: 30, delay: 0.9 })}
      className="py-[23px]"
    >
      <div className="flex items-center justify-between mb-3 text-white">
        <p className="max-w-[160px] xl:max-w-full text-[12px] xl:text-[14px] font-normal leading-[120%]">
          До безкоштовної доставки дозамовте на
        </p>
        <p className="text-[12px] xl:text-[16px] font-normal leading-[120%]">
          {needToOrderSum} грн
        </p>
      </div>
      <Progress
        aria-label="Free delivery"
        classNames={{
          base: 'h-1 xl:h-3',
          indicator: 'bg-orange',
          track: 'bg-white',
        }}
        value={percent}
      />
    </motion.div>
  );
}
