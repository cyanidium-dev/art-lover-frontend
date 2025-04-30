'use client';

import { useState } from 'react';
import CallBackForm from '@/shared/components/forms/CallbackForm';
import NotificationPopUp from '@/shared/components/pop-ups/NotificationPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';

interface CallBackFormWithNotificationsProps {
  className?: string;
}

export default function CallBackFormWithNotifications({
  className,
}: CallBackFormWithNotificationsProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <CallBackForm
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
