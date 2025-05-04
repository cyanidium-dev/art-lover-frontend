import Container from '@/shared/components/container/Container';
import Logo from "@/shared/components/Logo/Logo";

import FooterCatalog from '@/modules/footer/FooterCatalog/FooterCatalog';
import FooterAboutCompany from '@/modules/footer/FooterAboutCompany/FooterAboutCompany';
import FooterSocial from '@/modules/footer/FooterSocial/FooterSocial';
import FooterContacts from '@/modules/footer/FooterContacts/FooterContacts';

import { fadeInAnimation } from '@/shared/utils/animationVariants';
import * as motion from 'motion/react-client';

import styles from "./Footer.module.scss";

const Footer = ()=> {
  return (<footer className={`${styles.footer} pt-[40px] xl:pt-[64px] pb-[8px] xl:pb-[79px]`}>
          <Container>
            <div className="hidden xl:flex justify-between mb-[76px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInAnimation({ x: -30 })}
              >
                <Logo />
              </motion.div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInAnimation({ x: 30 })}
                className="font-denistina text-[32px] font-normal leading-[100%] text-white"
              >
                Створи шедевр вже сьогодні!
              </motion.p>
            </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation({ y: 30, delay: 0.4 })}
                className="flex flex-col xl:flex-row xl:justify-between"
              >
                <FooterContacts />
                <FooterCatalog />
                <FooterAboutCompany />
                <FooterSocial />
              </motion.div>
          </Container>
  </footer>
);
}

export default Footer;
