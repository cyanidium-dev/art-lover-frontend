import { Dispatch, SetStateAction } from 'react';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { AnimatePresence, motion } from 'framer-motion';
import {
  fadeInAnimation,
  cartModalVariants,
} from '@/shared/utils/animationVariants';
import CrossInCircleIcon from '../icons/CrossInCircleIcon';
import { productsList } from '@/modules/home/bestsellers/mockedData';
import CartIcon from '../icons/CartIcon';

interface CartModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CartModal({
  isPopUpShown,
  setIsPopUpShown,
}: CartModalProps) {
  const cartItems = productsList
    .slice(0, 10)
    .map(item => ({ ...item, quantity: 2 }));

  return (
    <AnimatePresence>
      {isPopUpShown && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={cartModalVariants}
          className={`fixed z-[70] top-0 right-0 w-dvw h-dvh max-w-[515px] p-8 xl:py-7 xl:px-9
       bg-dark max-h-[100dvh]`}
        >
          <div className="flex flex-col justify-between">
            <div className="">
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInAnimation({ y: 30, delay: 0.6 })}
                className="flex items-center justify-between mb-10"
              >
                <div className="flex items-center gap-x-5">
                  <CartIcon strokeWidth="2" className="size-6 xl:size-[34px]" />
                  <h3 className="text-[20px] xl:text-[24px] font-bold leading-[120%] uppercase text-white">
                    Кошик
                  </h3>
                </div>
                <button
                  onClick={() => setIsPopUpShown(false)}
                  className="cursor-pointer flex items-center justify-center size-[32px] p-1 xl:p-0"
                >
                  {<CrossInCircleIcon className="size-full" />}
                </button>
              </motion.div>
              <CartList cartItems={cartItems} />
            </div>
          </div>
          <CartTotal cartItems={cartItems} setIsPopUpShown={setIsPopUpShown} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
