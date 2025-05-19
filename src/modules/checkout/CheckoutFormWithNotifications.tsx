'use client';

import { useState } from 'react';
import NotificationPopUp from '@/shared/components/pop-ups/NotificationPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import CheckoutForm from '@/shared/components/forms/checkoutForm/CheckoutForm';

interface CheckoutFormWithNotificationsProps {
  activeTab: string;
  className?: string;
}

export default function CheckoutFormWithNotifications({
  activeTab,
  className,
}: CheckoutFormWithNotificationsProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <CheckoutForm
        activeTab={activeTab}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
        className={className}
      />

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
