import { Dispatch, SetStateAction } from 'react';
import { listVariants } from '@/shared/utils/animationVariants';
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
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.2, delayChildren: 0.15 })}
      className="flex flex-col"
    >
      {navMenuList.map((menuItem, idx) => (
        <NavMenuItem key={idx} menuItem={menuItem} onClose={onClose} />
      ))}
    </motion.ul>
  );
}
