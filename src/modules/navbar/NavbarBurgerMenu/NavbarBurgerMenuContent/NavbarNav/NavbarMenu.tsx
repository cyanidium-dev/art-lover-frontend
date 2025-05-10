import { Dispatch, SetStateAction } from 'react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import { motion } from 'framer-motion';
import NavMenuItem from './NavMenuItem';

interface NavMenuProps {
  onClose?: Dispatch<SetStateAction<boolean>>;
}

const navMenuList = [
  { title: 'Про нас', link: '/about' },
  { title: 'Блог', link: '/blog' },
  { title: 'Контакти', link: '/contacts' },
  { title: 'Оплата та доставка', link: '/delivery' },
];

export default function NavMenu({ onClose }: NavMenuProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ y: 30, delay: 0.8 })}
      className="flex flex-col"
    >
      {navMenuList.map((menuItem, idx) => (
        <NavMenuItem key={idx} menuItem={menuItem} onClose={onClose} />
      ))}
    </motion.ul>
  );
}
