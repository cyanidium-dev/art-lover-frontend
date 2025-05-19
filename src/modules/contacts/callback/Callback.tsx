import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import CallBackFormWithNotifications from './CallbackFormWithNotifications';
import CallbackImages from './CallbackImages';

export default function Callback() {
  return (
    <section className="pt-20 xl:pt-[140px] xl:pb-[70px]">
      <Container className="relative">
        <CallbackImages />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30 })}
          className="mb-3 xl:mb-4 text-[20px] xl:text-[32px] font-medium leading-[120%] text-center uppercase"
        >
          Ваше повідомлення
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30, delay: 0.4 })}
          className="mb-8 xl:mb-[44px] text-[14px] xl:text-[18px] font-medium leading-[120%] text-center"
        >
          Заповніть форму – і ми з вами зв’яжемося
        </motion.p>
        <div className="md:flex gap-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="hidden md:block relative w-[32%] h-[350px] rounded-[16px] overflow-hidden"
          >
            <Image
              src="/images/contactsPage/callback/imageOne.webp"
              alt="envelope with heart"
              fill
              className="object-cover"
            />
          </motion.div>
          <CallBackFormWithNotifications />
        </div>
      </Container>
    </section>
  );
}
