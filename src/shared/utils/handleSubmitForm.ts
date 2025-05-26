import { FormikHelpers } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { ValuesCheckoutFormType } from '../components/forms/checkoutForm/CheckoutForm';
import { generateOrderNumber } from './generateOrderNumber';

export const handleSubmitForm = async <T>(
  { resetForm }: FormikHelpers<T>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>,
  values: ValuesCheckoutFormType,
  showSuccessNotification?: boolean
) => {
  //Формуємо номер замовлення
  const orderNumber = generateOrderNumber();

  try {
    setIsLoading(true);
    resetForm();

    if (showSuccessNotification) {
      setIsNotificationShown(true);
    } else {
      window.location.assign('/confirmation');
    }
  } catch (error) {
    setIsError(true);
    setIsNotificationShown(true);
    return error;
  } finally {
    setIsLoading(false);
  }
};
