import * as yup from 'yup';
import { nameRegex, emailRegex } from '../regex/regex';

export const callBackValidation = () => {
  const callBackFormValidationSchema = yup.object().shape({
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
    message: yup
      .string()
      .max(200, 'Повинно містити не більше 200 символів')
      .required("Дане поле обов'язкове до заповнення"),
  });

  return callBackFormValidationSchema;
};
