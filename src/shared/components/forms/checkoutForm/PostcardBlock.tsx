import Image from 'next/image';
import { useState } from 'react';
import { useFormikContext } from 'formik';
import TextareaWithCounter from '../formComponents/TextAreaWithCounter';

interface Values {
  [fieldName: string]: string;
}

export default function PostcardBlock() {
  const { errors, touched } = useFormikContext<Values>();
  const [isInputShown, setIsInputShown] = useState(false);

  const toggleIsInputShown = () => setIsInputShown(!isInputShown);

  return (
    <>
      <button
        type="button"
        onClick={toggleIsInputShown}
        className="cursor-pointer flex items-center justify-center w-full h-10 relative mt-5 xl:mt-6 xl:h-11 px-3 xl:px-6 py-[9px] xl:py-[12.5px] rounded-full border border-orange"
      >
        <p
          className="text-[11px] 
                  xl:text-[14px] font-medium leading-[120%] text-orange text-center"
        >
          Бажаєте підписати листівку?
        </p>
        <Image
          src="/images/checkoutPage/envelope.svg"
          alt="envelope"
          width="20"
          height="20"
          className="absolute top-[10px] xl:top-[12px] left-3 xl:left-6"
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ${
          isInputShown ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'
        }`}
      >
        <TextareaWithCounter
          fieldName="postcard"
          placeholder="Пиши сюди, якщо хочеш підписати"
          errors={errors}
          touched={touched}
          labelClassName="mt-4"
          maxSymbols={200}
        />
      </div>
    </>
  );
}
