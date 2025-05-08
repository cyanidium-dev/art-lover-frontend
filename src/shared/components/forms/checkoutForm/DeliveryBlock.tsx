'use client';

import Image from 'next/image';
import { useFormikContext } from 'formik';
import CustomizedInput from '../formComponents/CustomizedInput';
import RadioButtonInput from '../formComponents/RadioButtonInput';

const deliveryServices = [
  {
    label: 'Укрпошта',
    logo: '/images/checkoutPage/ukrPost.svg',
  },
  {
    label: 'Нова Пошта',
    logo: '/images/checkoutPage/novaPost.svg',
  },
];

const deliveryTypes = ['Відділення', 'Доставка кур’єром', 'Поштомат'];

const cities = ['Київ', 'Дніпро', 'Харків', 'Одеса', 'Львів'];

export default function DeliveryBlock() {
  const { values, setFieldValue, errors, touched } = useFormikContext<{
    deliveryService: string;
    deliveryType: string;
    city: string;
    branchNumber: string;
  }>();

  const isDeliveryChecked = !!values.deliveryService;

  return (
    <>
      {/* Служби доставки */}
      <div className="flex gap-4">
        {deliveryServices.map(service => (
          <button
            type="button"
            key={service.label}
            onClick={() => setFieldValue('deliveryService', service.label)}
            className={`cursor-pointer w-1/2 h-14 xl:h-[125px] border rounded-[6px] p-3 flex items-center justify-center ${
              values.deliveryService === service.label
                ? 'border-orange'
                : 'border-gray-light'
            }`}
          >
            <Image
              src={service.logo}
              alt={service.label}
              width={92}
              height={36}
              className="w-[92px] xl:w-[207px] h-auto object-contain"
            />
          </button>
        ))}
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ${
          isDeliveryChecked ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        {/* Тип доставки */}
        <div className="flex flex-col gap-3 xl:gap-6 mb-6 mt-5 xl:mt-7 ">
          {deliveryTypes.map((type, idx) => (
            <RadioButtonInput
              key={idx}
              fieldName="deliveryType"
              value={type}
              onClick={() => setFieldValue('deliveryType', type)}
              label={type}
            />
          ))}
        </div>
        {values.deliveryService === 'Укрпошта' ? (
          <p className="mb-3 text-[14px] xl:text-[16px] font-light leading-[120%]">
            Оберіть відділення Укрпошти
          </p>
        ) : (
          <p className="mb-3 text-[14px] xl:text-[16px] font-light leading-[120%]">
            Оберіть відділення Нової пошти
          </p>
        )}
        <div className="flex flex-wrap gap-2 xl:gap-3 mb-5 xl:mb-3">
          {cities.map(city => (
            <button
              key={city}
              type="button"
              onClick={() => setFieldValue('city', city)}
              className="cursor-pointer text-[12px] xl:text-[16px] font-medium leading-[120%] text-black transition"
            >
              {city}
            </button>
          ))}
        </div>
        {/* Інпути */}
        <div className="flex flex-col gap-3 xl:gap-3.5">
          <CustomizedInput
            fieldName="city"
            placeholder="* Назва населеного пункту"
            errors={errors}
            touched={touched}
          />
          {values.deliveryType !== 'Доставка кур’єром' ? (
            <CustomizedInput
              fieldName="branchNumber"
              placeholder="* Номер відділення"
              errors={errors}
              touched={touched}
            />
          ) : (
            <CustomizedInput
              fieldName="address"
              placeholder="* Адреса"
              errors={errors}
              touched={touched}
            />
          )}
        </div>
      </div>
    </>
  );
}
