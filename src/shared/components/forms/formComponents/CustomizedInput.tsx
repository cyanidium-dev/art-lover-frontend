import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik';
import MaskedInput from 'react-text-mask';
import { useFormikContext } from 'formik';

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
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
}

const labelStyles = 'relative flex flex-col w-full';
const fieldStyles =
  'relative w-full px-5 py-2 md:py-[13px] text-[12px] xl:text-[16px] font-normal leading-none text-dark bg-white placeholder-placeholder border rounded-[6px] outline-none resize-none transition duration-300 ease-out';
const errorStyles =
  'absolute bottom-[-11px] left-2 text-[9px] font-normal leading-none text-red-500';

export default function CustomizedInput({
  errors,
  touched,
  fieldName,
  placeholder = '',
  as,
  labelClassName = '',
  fieldClassName = '',
  fieldFontSize = '',
  mask = '',
  onChange,
  onFocus,
  inputType = 'text',
}: CustomizedInputProps) {
  const { handleChange } = useFormikContext();

  const isError = (errors as Record<string, unknown>)[fieldName];
  const isTouched = (touched as Record<string, unknown>)[fieldName];

  return (
    <label className={`${labelStyles} ${labelClassName}`}>
      <Field
        as={as}
        mask={mask}
        name={fieldName}
        type={inputType}
        autoComplete="on"
        placeholder={placeholder}
        onChange={onChange || handleChange}
        onFocus={onFocus}
        className={`${fieldStyles} ${fieldClassName} ${fieldFontSize} ${
          isError && isTouched ? 'border-red-500 ' : 'border-dark'
        }`}
      />

      <ErrorMessage name={fieldName} component="p" className={errorStyles} />
    </label>
  );
}
