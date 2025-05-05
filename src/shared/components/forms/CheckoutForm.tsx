'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';

import { callBackValidation } from '@/shared/schemas/callbackFormValidation';
import { handleSubmitForm } from '@/shared/utils/handleSubmitForm';

import CustomizedInput from './formComponents/CustomizedInput';
import SubmitButton from './formComponents/SubmitButton';

export interface ValuesCheckoutFormType {
  name: string;
  surname: string;
  email: string;
  message: string;
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
    message: '',
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
          <div className="flex flex-col gap-y-3 py-5 px-4 rounded-[6px] border border-dark">
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
              fieldName="message"
              as="textarea"
              placeholder="* Поділіться своєю думкою"
              errors={errors}
              touched={touched}
            />
          </div>

          <div className="flex flex-col gap-y-3 py-5 px-4 rounded-[6px] border border-dark">
            <SubmitButton
              dirty={dirty}
              isValid={isValid}
              isLoading={isLoading}
              text="Надіслати"
              className="h-10 md:h-12"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
