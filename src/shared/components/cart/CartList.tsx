import CartListItem from './CartItem';
import { AnimatePresence, motion } from 'framer-motion';
import {
  fadeInAnimation,
  cartItemVariants,
} from '@/shared/utils/animationVariants';
import { CartItem } from '@/types/cartItem';

interface CartListProps {
  cartItems: CartItem[];
}

export default function CartList({ cartItems }: CartListProps) {
  return (
    <AnimatePresence mode="wait">
      {cartItems.length > 0 ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation({ y: 30, delay: 0.9 })}
          className="flex flex-col gap-y-4 h-[calc(100dvh-272px-40px)] lg:h-[calc(100dvh-300px-40px)] pr-[10px] overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-green/70"
        >
          <AnimatePresence mode="sync">
            {cartItems.map(cartItem => (
              <motion.li
                variants={cartItemVariants}
                key={cartItem.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="flex gap-x-[11px] py-[14px] lg:py-4 px-3 border-[1.5px] border-black rounded-[8px]"
              >
                <CartListItem cartItem={cartItem} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.9 },
          }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
          className="text-16reg lg:text-18reg leading-[123%] text-center py-[140px] text-black/50"
        >
          Ваш кошик порожній
        </motion.div>
      )}
    </AnimatePresence>
  );
}
