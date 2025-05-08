'use client';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import MaskedInput from 'react-text-mask';
import Image from 'next/image';

import { callBackValidation } from '@/shared/schemas/callbackFormValidation';
import { handleSubmitForm } from '@/shared/utils/handleSubmitForm';
import { phoneMask } from '@/shared/regex/regex';

import CustomizedInput from '../formComponents/CustomizedInput';
import SubmitButton from '../formComponents/SubmitButton';
import CheckoutSubTitle from './CheckoutSubTitle';
import TipsInputBlock from './TipsInputBlock';
import GiftHint from '@/modules/checkout/GiftHint';
import RadioButtonInput from '../formComponents/RadioButtonInput';
import RecipientBlock from './RecipientBlock';
import CartItemsList from './CartItemsList';
import AdditionalOptions from './AdditionalOptions';

export interface ValuesCheckoutFormType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  payment: string;
  recipientOption: string;
  recipientName: string;
  recipientSurname: string;
  recipientPhone: string;
  message: string;
  postcard: string;
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
    payment: 'Сплатити при отриманні',
    recipientOption: 'Я одержувач',
    recipientName: '',
    recipientSurname: '',
    recipientPhone: '',
    message: '',
    postcard: '',
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
        <Form
          className={`flex flex-col xl:flex-row w-full gap-y-6 xl:gap-x-15 ${className}`}
        >
          <div className="flex flex-col gap-y-6 xl:gap-y-7 xl:w-[586px]">
            <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
              <CheckoutSubTitle
                icon="emoji"
                title="Крок 1"
                description="Особисті дані"
              />
              <div className="flex flex-col gap-y-3 xl:gap-y-[14px]">
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

            <div className="flex flex-col gap-y-3 xl:gap-y-6 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
              <div>
                <CheckoutSubTitle
                  icon="card"
                  title="Крок 3"
                  description="Спосіб оплати"
                />
                <RadioButtonInput
                  fieldName="payment"
                  label="Картою на сайті"
                  value="Картою на сайті"
                />
              </div>
              <div className="flex items-center justify-between px-3 xl:px-5 py-2.5 xl:py-[13px] rounded-[6px] border border-gray-light">
                <p className="text-[12px] xl:text-[14px] font-normal leading-[120%]">
                  Сплатити за допомогою
                </p>
                <Image
                  src="/images/checkoutPage/monoPay.svg"
                  alt="mono pay"
                  width="64"
                  height="19"
                  className="w-16 xl:w-[76px] h-auto"
                />
              </div>
              <RadioButtonInput
                fieldName="payment"
                label="Сплатити при отриманні"
                value="Сплатити при отриманні"
              />
            </div>

            <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
              <CheckoutSubTitle
                icon="users"
                title="Крок 4"
                description="Одержувач"
              />
              <RecipientBlock errors={errors} touched={touched} />
            </div>

            <div className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
              <CheckoutSubTitle
                icon="pencil"
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
          </div>

          <div className="flex flex-col gap-y-6 xl:gap-y-7 xl:w-[454px]">
            <div className="xl:mb-3 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark">
              <CheckoutSubTitle icon="shopping" title="Ваше замовлення" />
              <CartItemsList />
              <CheckoutSubTitle icon="gift" title="Додати пакування?" />
              <AdditionalOptions />
              <label className="relative">
                <Field
                  name="postcard"
                  placeholder="Бажаєте підписати листівку?"
                  className="w-full h-10 xl:h-11 mt-5 pl-12 xl:pl-15 placeholder:xl:pl-[42px] pr-3 xl:pr-6 py-[9px] xl:py-[12.5px] text-[11px] xl:text-[14px] font-medium leading-none placeholder-orange rounded-full border border-orange outline-none"
                />
                <Image
                  src="/images/checkoutPage/envelope.svg"
                  alt="envelope"
                  width="20"
                  height="20"
                  className="absolute top-[2.5px] xl:top-[1.5px] left-3 xl:left-6"
                />
              </label>
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
            <GiftHint />
          </div>
        </Form>
      )}
    </Formik>
  );
}
