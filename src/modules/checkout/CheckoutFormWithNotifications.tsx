'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import NotificationPopUp from '@/shared/components/pop-ups/NotificationPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import CheckoutForm from '@/shared/components/forms/checkoutForm/CheckoutForm';
import GiftHint from './GiftHint';

interface CheckoutFormWithNotificationsProps {
  className?: string;
}

export default function CheckoutFormWithNotifications({
  className,
}: CheckoutFormWithNotificationsProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 0.8 })}
      >
        <CheckoutForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
          className={className}
        />
      </motion.div>
      <GiftHint />
      <NotificationPopUp
        title={
          isError ? 'На жаль, щось пішло не так' : 'Дякуємо за повідомлення!'
        }
        description={
          isError
            ? 'Спробуйте відправити форму ще раз або зателефонуйте нам.'
            : "Наш менеджер скоро зв'яжеться з вами."
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
      <Backdrop
        isVisible={isNotificationShown}
        onClick={() => setIsNotificationShown(false)}
      />
    </>
  );
}
