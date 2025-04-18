'use client'
import ButtonOval from "@/shared/components/ButtonOval/ButtonOval";
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
    email: string;
  };
    

const Subscribe = () => {
    const { register, handleSubmit, reset, watch, control } = useForm<FormValues>();
    const onSubmit = (data: FormValues) => {
        console.log(data);
        reset();
    };

  return (
    <div className="pt-8 ">
          <div className="bg-[var(--main-orange-light)] p-[32px]">
              <TextTitle text="відстежуйте наші новини!" fontSize="20px" className="uppercase font-medium text-white mb-6" />
              <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
                  <label className="sr-only" htmlFor="email"></label>
          <input id="email" type="email" placeholder="Email" className="w-full h-[40px]  text-white rounded-2xl   bg-[rgba(255,255,255,0.34)] p-2 border-transparent  outline-none placeholder:text-left placeholder:pl-2 placeholder:text-[12px] placeholder:font-light placeholder:text-white"
                  {...register("email")}
                  />
                  <ButtonOval buttonText="Надіслати" type="submit" className="w-[120px] h-[40px] bg-white text-[var(--main-dark-color)] font-light leading-2 text-[10px]" style={{ background: '#FFFFFF' }} />
        </form>
          </div>
          
        

         </div>
  )
}
export default Subscribe