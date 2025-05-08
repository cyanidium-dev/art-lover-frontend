'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import MaskedInput from 'react-text-mask';

import { callBackValidation } from '@/shared/schemas/callbackFormValidation';
import { handleSubmitForm } from '@/shared/utils/handleSubmitForm';
import { phoneMask } from '@/shared/regex/regex';

import CustomizedInput from '../formComponents/CustomizedInput';
import SubmitButton from '../formComponents/SubmitButton';
import CheckoutSubTitle from './CheckoutSubTitle';
import TipsInputBlock from './TipsInputBlock';

export interface ValuesCheckoutFormType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  promocode: string;
  tips: string;
}

interface CheckoutFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown?: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function CheckoutForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
  className = '',
}: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    promocode: '',
    tips: '',
  };

  const validationSchema = callBackValidation();

  const submitForm = async (
    values: ValuesCheckoutFormType,
    formikHelpers: FormikHelpers<ValuesCheckoutFormType>
  ) => {
    await handleSubmitForm<ValuesCheckoutFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      setIsPopUpShown
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className={`flex flex-col w-full gap-y-6 ${className}`}>
          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle
              icon="emoji"
              title="Крок 1"
              description="Особисті дані"
            />
            <div className="flex flex-col gap-y-3">
              <CustomizedInput
                fieldName="name"
                placeholder="* Ім’я"
                errors={errors}
                touched={touched}
              />
              <CustomizedInput
                fieldName="surname"
                placeholder="* Прізвище"
                errors={errors}
                touched={touched}
              />
              <CustomizedInput
                fieldName="email"
                inputType="email"
                placeholder="* Електронна пошта"
                errors={errors}
                touched={touched}
              />
              <CustomizedInput
                fieldName="phone"
                inputType="tel"
                placeholder="* Номер телефону"
                errors={errors}
                touched={touched}
                as={MaskedInput}
                mask={phoneMask}
              />
            </div>
          </div>

          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle
              icon="globe"
              title="Крок 2"
              description="Оплата та доставка"
            />
          </div>

          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle
              icon="card"
              title="Крок 3"
              description="Спосіб оплати"
            />
          </div>

          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle
              icon="users"
              title="Крок 4"
              description="Одержувач"
            />
          </div>

          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle
              icon="users"
              title="Крок 5"
              description="Додати коментар"
            />
            <CustomizedInput
              fieldName="message"
              as="textarea"
              placeholder="Додайте коментар, якщо потрібно"
              errors={errors}
              touched={touched}
            />
          </div>

          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle icon="shopping" title="Ваше замовлення" />
            <CheckoutSubTitle icon="gift" title="Додати пакування?" />
          </div>

          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle icon="heart" title="Промокод" />
            <CustomizedInput
              fieldName="promocode"
              placeholder="Введіть свій промокод"
              errors={errors}
              touched={touched}
            />
          </div>

          <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <CheckoutSubTitle
              icon="money"
              title="Залишити чайові нашим пакувальникам"
            />
            <TipsInputBlock errors={errors} touched={touched} />
          </div>

          <div className="flex flex-col gap-y-3 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
            <SubmitButton
              dirty={dirty}
              isValid={isValid}
              isLoading={isLoading}
              text="Оформити замовлення"
              className="h-10 md:h-12"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
