import SecondaryButton from '@/shared/components/buttons/SecondaryButton';
import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import ConfirmationImages from './ConfirmationImages';

export default function Confirmation() {
  return (
    <section className="pt-13 xl:pt-[59px] pb-20 xl:pb-[140px]">
      <Container className="relative">
        <ConfirmationImages />
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="w-fit mb-8 lg:mb-15 mx-auto"
        >
          <Image
            src="/images/confirmationPage/logo.svg"
            alt="logo"
            width="171"
            height="145"
            className="w-[171px] lg:w-[397px] h-auto"
          />
        </motion.div>
        <div className="max-w-[249px] lg:max-w-[497px] mx-auto">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30 })}
            className="mb-3 lg:mb-4.5 text-[16px] lg:text-[32px] font-semibold leading-[120%] uppercase text-center"
          >
            Дякуємо за замовлення!
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="lg:max-w-[358px] lg:mx-auto mb-5 xl:mb-[33px] text-[12px] lg:text-[20px] font-light leading-[120%] text-center"
          >
            Наш менеджер зв’яжеться з вами найближчим часом. Гарного дня!
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30, delay: 0.8 })}
          >
            <Link href="/">
              <SecondaryButton
                className="lg:max-w-[345px] lg:mx-auto h-9 lg:h-12"
                textStyles="text-[12px] lg:text-[14px] font-medium"
              >
                Переглянути інші наші товари
              </SecondaryButton>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
