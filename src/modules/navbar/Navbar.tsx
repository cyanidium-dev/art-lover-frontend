'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

import {
  fadeInAnimation,
  headerVariants,
} from '@/shared/utils/animationVariants';

import Container from '@/shared/components/container/Container';
import Logo from '@/shared/components/Logo/Logo';
import MobileLogo from '@/shared/components/MobileLogo/MobileLogo';

import NavbarCatalog from '@/modules/navbar/NavbarCatalog/NavbarCatalog';
import NavbarSearch from '@/modules/navbar/NavbarSearch/NavbarSearch';
import NavbarFavorite from '@/modules/navbar/NavbarFavorite/NavbarFavorite';
import NavbarCart from '@/modules/navbar/NavbarCart/NavbarCart';
import NavbarBurgerMenu from '@/modules/navbar/NavbarBurgerMenu/NavbarBurgerMenu';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [isOpenCatalogMenu, setIsOpenCatalogMenu] = useState(false);

  return (
    <header>
      <nav className="pt-8 pb-6 xl:py-[26px] z-50 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="xl:hidden -z-10 absolute top-0 right-[calc(50%-100px)]"
        >
          <Image
            src="/images/navbar/figureCenterMob.svg"
            alt="figure background"
            width="114"
            height="43"
          />
        </motion.div>
        <Container className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={headerVariants}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-[10px] xl:gap-[24px] flex-row-reverse xl:flex-row">
              <Link
                href="/"
                className="xl:hover:brightness-125 focus-visible:brightness-125 transition duration-300 ease-in-out"
              >
                <Logo className={`${styles.logo} hidden xl:block`} />
                <MobileLogo className={`${styles.logo} xl:hidden`} />
              </Link>
              <NavbarCatalog
                isOpenCatalogMenu={isOpenCatalogMenu}
                setIsOpenCatalogMenu={setIsOpenCatalogMenu}
                setIsOpenBurgerMenu={setIsOpenBurgerMenu}
              />
            </div>
            <div className="flex items-center gap-[10px] xl:gap-4">
              <NavbarSearch />
              <NavbarFavorite />
              <NavbarCart />
              <NavbarBurgerMenu
                isOpenBurgerMenu={isOpenBurgerMenu}
                setIsOpenBurgerMenu={setIsOpenBurgerMenu}
                setIsOpenCatalogMenu={setIsOpenCatalogMenu}
              />
            </div>
          </motion.div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
