import * as yup from 'yup';
import { nameRegex, emailRegex, checkoutPhoneRegex } from '../regex/regex';

export const checkoutValidation = (activeTab: string) => {
  const checkoutFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Ім’я повинно містити від 2 до 30 символів')
      .max(30, 'Ім’я повинно містити від 2 до 30 символів')
      .matches(nameRegex, 'Допустимі літери та дефіс, апостроф, лапки')
      .required("Дане поле обов'язкове до заповнення"),
    surname: yup
      .string()
      .min(2, 'Прізвище повинно містити від 2 до 30 символів')
      .max(30, 'Прізвище повинно містити від 2 до 30 символів')
      .matches(nameRegex, 'Допустимі літери та дефіс, апостроф, лапки')
      .required("Дане поле обов'язкове до заповнення"),
    email: yup
      .string()
      .matches(emailRegex, 'Введіть валідний email')
      .required("Дане поле обов'язкове до заповнення"),
    phone: yup
      .string()
      .matches(checkoutPhoneRegex, 'Вкажіть правильний номер телефону')
      .test(
        'sixth-char-zero',
        'Після +38 має бути цифра 0',
        value => !!value && value.length >= 6 && value[5] === '0'
      )
      .required("Дане поле є обов'язковим до заповнення"),
    deliveryService:
      activeTab === 'ukraine'
        ? yup.string().required('Оберіть сервіс доставки')
        : yup.string().notRequired(),
    deliveryType: yup.string(),
    city: yup.string().when('deliveryType', {
      is: (val: string) =>
        val === 'Відділення' ||
        val === 'Поштомат' ||
        (val === 'Доставка кур’єром' && activeTab === 'ukraine'),
      then: schema => schema.required("Дане поле є обов'язковим до заповнення"),
      otherwise: schema => schema.notRequired(),
    }),
    branchNumber: yup.string().when('deliveryType', {
      is: (val: string) => val === 'Відділення' || val === 'Поштомат',
      then: schema => schema.required("Дане поле є обов'язковим до заповнення"),
      otherwise: schema => schema.notRequired(),
    }),
    address: yup.string().when('deliveryType', {
      is: (val: string) => val === 'Доставка кур’єром',
      then: schema => schema.required("Дане поле є обов'язковим до заповнення"),
      otherwise: schema => schema.notRequired(),
    }),
    country: yup.string().when('deliveryType', {
      is: (val: string) =>
        val === 'Доставка кур’єром' && activeTab === 'worldwide',
      then: schema => schema.required("Дане поле є обов'язковим до заповнення"),
      otherwise: schema => schema.notRequired(),
    }),
    payment: yup.string(),
    recipientOption: yup.string(),
    recipientName: yup.string().when('recipientOption', {
      is: (val: string) => val === 'Одержувач інша людина',
      then: schema => schema.required("Дане поле є обов'язковим до заповнення"),
      otherwise: schema => schema.notRequired(),
    }),
    recipientSurname: yup.string().when('recipientOption', {
      is: (val: string) => val === 'Одержувач інша людина',
      then: schema => schema.required("Дане поле є обов'язковим до заповнення"),
      otherwise: schema => schema.notRequired(),
    }),
    recipientPhone: yup.string().when('recipientOption', {
      is: (val: string) => val === 'Одержувач інша людина',
      then: () =>
        yup
          .string()
          .matches(checkoutPhoneRegex, 'Вкажіть правильний номер телефону')
          .test(
            'sixth-char-zero',
            'Після +38 має бути цифра 0',
            value => !!value && value.length >= 6 && value[5] === '0'
          )
          .required("Дане поле є обов'язковим до заповнення"),
      otherwise: () => yup.string().notRequired(),
    }),

    message: yup.string(),
    postcard: yup.string(),
    promocode: yup.string(),
    tips: yup
      .number()
      .typeError('Допустимі тільки цифри')
      .min(0, 'Чайові не можуть бути менше 0'),
  });

  return checkoutFormValidationSchema;
};
