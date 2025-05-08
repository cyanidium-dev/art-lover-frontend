import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

import { fadeInAnimation } from '@/shared/utils/animationVariants';

import Container from '@/shared/components/container/Container';
import Logo from '@/shared/components/Logo/Logo';
import MobileLogo from '@/shared/components/MobileLogo/MobileLogo';

import NavbarCatalog from '@/modules/navbar/NavbarCatalog/NavbarCatalog';
import NavbarSearch from '@/modules/navbar/NavbarSearch/NavbarSearch';
import NavbarFavorite from '@/modules/navbar/NavbarFavorite/NavbarFavorite';
import NavbarCart from '@/modules/navbar/NavbarCart/NavbarCart';
import NavbarMenu from '@/modules/navbar/NavbarMenu/NavbarMenu';
// import NavbarBurgerMenu from '@/modules/navbar/NavbarBurgerMenu/NavbarBurgerMenu';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className="pt-[32px] xl:pt-[26px] pb-[28px] z-50 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block z-10 absolute top-0 left-[50%] transform -translate-x-[50%]"
      >
        <Image
          src="/images/navbar/figureCenterDesk.svg"
          alt="figure background"
          width="227"
          height="109"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden z-10 absolute top-0 left-0"
      >
        <Image
          src="/images/navbar/figureLeftMob.svg"
          alt="figure background"
          width="53"
          height="55"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="xl:hidden z-10 absolute top-0  left-[50%] transform -translate-x-[50%]"
      >
        <Image
          src="/images/navbar/figureCenterMob.svg"
          alt="figure background"
          width="114"
          height="43"
        />
      </motion.div>
      <Container className="z-20 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({})}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-[10px] xl:gap-[24px] flex-row-reverse xl:flex-row">
            <Link href="/">
              <Logo className={`${styles.logo} hidden xl:block`} />
              <MobileLogo className={`${styles.logo} xl:hidden`} />
            </Link>
            <NavbarCatalog />
          </div>
          <div className="flex items-center gap-[10px] xl:gap-[20px]">
            <NavbarMenu />
            <NavbarSearch />
            <NavbarFavorite />
            {/*<NavbarCart />*/}
            {/*<NavbarBurgerMenu />*/}
          </div>
        </motion.div>
      </Container>
    </nav>
  );
};

export default Navbar;
