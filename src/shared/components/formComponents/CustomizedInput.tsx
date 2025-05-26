'use client';

import {
  ErrorMessage,
  Field,
  FormikErrors,
  FormikTouched,
  useFormikContext,
} from 'formik';
import MaskedInput from 'react-text-mask';
import { useId } from 'react';
import Image from 'next/image';

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  isRequired?: boolean;
  as?: string | typeof MaskedInput;
  labelClassName?: string;
  fieldClassName?: string;
  mask?: string | RegExp | (string | RegExp)[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  inputType?: string;
  fieldFontSize?: string;
  showIcon?: boolean;
}

const labelStyles = 'relative flex flex-col w-full';
const fieldStyles =
  'relative w-full px-5 py-2 md:py-[13px] text-[12px] xl:text-[16px] font-normal leading-none text-dark bg-white placeholder-transparent border rounded-[6px] outline-none resize-none transition duration-300 ease-out';
const errorStyles =
  'absolute bottom-[-11px] left-2 text-[9px] font-normal leading-none text-red-500';

export default function CustomizedInput({
  fieldName,
  placeholder,
  errors,
  touched,
  isRequired = false,
  as,
  labelClassName = '',
  fieldClassName = '',
  fieldFontSize = '',
  mask = '',
  onChange,
  onFocus,
  inputType = 'text',
  showIcon,
}: CustomizedInputProps) {
  const { handleChange, values } = useFormikContext<Values>();
  const isError = (errors as Record<string, unknown>)[fieldName];
  const isTouched = (touched as Record<string, unknown>)[fieldName];
  const fieldValue = values[fieldName];
  const showPlaceholder = !fieldValue;
  const inputId = useId();

  return (
    <label htmlFor={inputId} className={`${labelStyles} ${labelClassName}`}>
      <div className="relative w-full">
        <Field
          id={inputId}
          as={as}
          mask={mask}
          name={fieldName}
          type={inputType}
          autoComplete="on"
          onChange={onChange || handleChange}
          onFocus={onFocus}
          className={`${fieldStyles} ${fieldClassName} ${fieldFontSize} ${
            isError && isTouched ? 'border-red-500' : 'border-dark'
          }`}
        />{' '}
        <span
          className={`pointer-events-none absolute left-5 ${
            as === 'textarea' ? 'top-3' : 'top-1/2 -translate-y-1/2'
          } text-placeholder text-[12px] xl:text-[16px] whitespace-nowrap`}
        >
          {showIcon ? (
            <Image
              src="/images/checkoutPage/flag.svg"
              alt="ukrainian flag"
              width="41"
              height="29"
              className="w-[23px] xl:w-[41px] h-auto inline-block mr-1"
            />
          ) : null}
          {showPlaceholder && (
            <>
              <span>
                {isRequired && <span className="text-red-500 mr-1"> *</span>}
              </span>
              <span className="text-placeholder">{placeholder}</span>
            </>
          )}
        </span>
      </div>

      <ErrorMessage name={fieldName} component="p" className={errorStyles} />
    </label>
  );
}
