import * as motion from 'motion/react-client';
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
} from '@/shared/utils/animationVariants';
import { Product } from '@/types/product';

interface CharacteristicsProps {
  currentProduct: Product;
}

export default function Characteristics({
  currentProduct,
}: CharacteristicsProps) {
  if (
    !currentProduct?.characteristics ||
    !currentProduct?.characteristics.length
  )
    return null;

  const { characteristics } = currentProduct;

  return (
    <div>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ y: 30 })}
        className="mb-6 text-[18px] xl:text-[32px] font-medium leading-[120%] uppercase"
      >
        Характеристика товару:
      </motion.h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.4 }}
        variants={listVariants({ staggerChildren: 0.2, delayChildren: 0.2 })}
        className="flex flex-col gap-y-4 xl:gap-y-3"
      >
        {characteristics.map((characteristic, idx) => (
          <motion.li
            viewport={{ once: true, amount: 0.2 }}
            variants={listItemVariants}
            key={idx}
            className="grid grid-cols-[100px_1fr] xl:grid-cols-[144px_1fr] gap-x-4 xl:gap-x-[86px]"
          >
            <span className="text-[16px] xl:text-[20px] font-medium leading-[120%]">
              {characteristic?.title}
            </span>
            {Array.isArray(characteristic.description) ? (
              <ul className="">
                {characteristic?.description?.map((descItem, idx) => (
                  <li
                    key={idx}
                    className="flex gap-x-2 text-[14px] xl:text-[16px] font-light leading-[140%]"
                  >
                    <div className="mt-2 xl:mt-2.5 size-[3px] rounded-full bg-dark shrink-0"></div>
                    <p className="max-w-[calc(100%-23px)]">{descItem}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-[14px] xl:text-[16px] font-light leading-[140%]">
                {characteristic?.description}
              </span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
