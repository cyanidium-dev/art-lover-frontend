'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import {
  fadeInAnimation,
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';

import { getTotalSum } from '@/shared/utils/getTotalSum';
import { checkoutValidation } from '@/shared/schemas/checkoutFormValidation';
import { handleSubmitForm } from '@/shared/utils/handleSubmitForm';
import { phoneMask } from '@/shared/regex/regex';
import { productsList } from '@/modules/home/bestsellers/mockedData';

import CustomizedInput from '../formComponents/CustomizedInput';
import SubmitButton from '../formComponents/SubmitButton';
import CheckoutSubTitle from './CheckoutSubTitle';
import TipsInputBlock from './TipsInputBlock';
import GiftHint from '@/modules/checkout/GiftHint';
import RadioButtonInput from '../formComponents/RadioButtonInput';
import RecipientBlock from './RecipientBlock';
import CartItemsList from './CartItemsList';
import AdditionalOptions from './AdditionalOptions';
import DeliveryBlockUkraine from './DeliveryBlockUkraine';
import DeliveryBlockWorldwide from './DeliveryBlockWorldwide';
import PostcardBlock from './PostcardBlock';

export interface ValuesCheckoutFormType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  deliveryService: string;
  deliveryType: string;
  city: string;
  country: string;
  branchNumber: string;
  address: string;
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
  activeTab: string;
  className?: string;
}

export default function CheckoutForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
  activeTab,
  className = '',
}: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const cartItems = productsList
    .slice(0, 4)
    .map(item => ({ ...item, quantity: 1 }));

  const sum = getTotalSum(cartItems);

  useEffect(() => {
    setTotal(sum);
  }, [sum]);

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    deliveryService: '',
    deliveryType: activeTab === 'ukraine' ? 'Відділення' : 'Доставка кур’єром',
    city: '',
    branchNumber: '',
    address: '',
    country: '',
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

  const validationSchema = checkoutValidation(activeTab);

  const submitForm = async (
    values: ValuesCheckoutFormType,
    formikHelpers: FormikHelpers<ValuesCheckoutFormType>
  ) => {
    await handleSubmitForm<ValuesCheckoutFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      setIsPopUpShown,
      false
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
          className={`relative flex flex-col md:flex-row w-full gap-y-6 md:gap-x-4 lg:gap-10 xl:gap-x-15 ${className}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
            className="xl:hidden absolute -z-10 top-[167px] left-[-99px]"
          >
            <Image
              src="/images/aboutPage/history/figureLeftMob.svg"
              alt="background"
              width="114"
              height="92"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={listVariants({
              staggerChildren: 0.2,
              delayChildren: 0.4,
            })}
            className="flex flex-col gap-y-6 xl:gap-y-7 md:w-[344px] lg:w-[516px] xl:w-[586px]"
          >
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="emoji"
                title="Крок 1"
                description="Особисті дані"
              />
              <div className="flex flex-col gap-y-3 xl:gap-y-[14px]">
                <CustomizedInput
                  fieldName="name"
                  placeholder="Ім’я"
                  isRequired
                  errors={errors}
                  touched={touched}
                />
                <CustomizedInput
                  fieldName="surname"
                  placeholder="Прізвище"
                  isRequired
                  errors={errors}
                  touched={touched}
                />
                <CustomizedInput
                  fieldName="email"
                  inputType="email"
                  placeholder="Електронна пошта"
                  isRequired
                  errors={errors}
                  touched={touched}
                />
                <CustomizedInput
                  fieldName="phone"
                  inputType="tel"
                  placeholder="Номер телефону"
                  isRequired
                  errors={errors}
                  touched={touched}
                  as={MaskedInput}
                  mask={phoneMask}
                />
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="pt-5 pb-2 px-4 xl:px-7 xl:pt-7 xl:pb-4 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="globe"
                title="Крок 2"
                description="Оплата та доставка"
              />
              {activeTab === 'ukraine' ? (
                <DeliveryBlockUkraine />
              ) : (
                <DeliveryBlockWorldwide />
              )}
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="flex flex-col gap-y-3 xl:gap-y-6 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
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
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="pt-5 pb-2 px-4 xl:px-7 xl:pt-7 xl:pb-4 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="users"
                title="Крок 4"
                description="Одержувач"
              />
              <RecipientBlock errors={errors} touched={touched} />
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
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
                fieldClassName="h-[99px] xl:h-[93px] py-3"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={listVariants({
              staggerChildren: 0.2,
              delayChildren: 0.4,
            })}
            className="flex flex-col gap-y-6 xl:gap-y-7 md:w-[344px] lg:w-[404px] xl::w-[454px]"
          >
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="xl:mb-3 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle icon="shopping" title="Ваше замовлення" />
              <CartItemsList />
              <CheckoutSubTitle icon="gift" title="Додати пакування?" />
              <AdditionalOptions />
              <PostcardBlock />
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle icon="heart" title="Промокод" />
              <CustomizedInput
                fieldName="promocode"
                placeholder="Введіть свій промокод"
                errors={errors}
                touched={touched}
              />
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="money"
                title="Залишити чайові нашим пакувальникам"
              />
              <TipsInputBlock errors={errors} touched={touched} />
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="flex flex-col gap-y-5 xl:gap-y-4 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] xl:text-[16px] font-medium leading-[120%]">
                  Загальна вартість
                </h3>
                <p className="text-[16px] xl:text-[24px] font-medium leading-[120%]">
                  {total} грн
                </p>
              </div>
              <SubmitButton
                dirty={dirty}
                isValid={isValid}
                isLoading={isLoading}
                text="Оформити замовлення"
                className="h-10 md:h-12"
              />
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
            >
              <GiftHint />
            </motion.div>
          </motion.div>
        </Form>
      )}
    </Formik>
  );
}
