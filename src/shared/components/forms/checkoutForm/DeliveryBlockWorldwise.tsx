'use client';
import { useFormikContext } from 'formik';
import CustomizedInput from '../formComponents/CustomizedInput';
import RadioButtonInput from '../formComponents/RadioButtonInput';

interface Values {
  [fieldName: string]: string;
}

export default function DeliveryBlockWorldwise() {
  const { setFieldValue, errors, touched } = useFormikContext<Values>();

  return (
    <div className="flex flex-col gap-5 xl:gap-6">
      <CustomizedInput
        fieldName="country"
        placeholder="Оберіть країну"
        errors={errors}
        touched={touched}
      />
      <RadioButtonInput
        fieldName="deliveryType"
        value="Доставка кур’єром"
        onClick={() => setFieldValue('deliveryType', 'Доставка кур’єром')}
        label="Доставка кур’єром"
      />
    </div>
  );
}
