'use client'
import ButtonOval from "@/shared/components/ButtonOval/ButtonOval";
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import { useForm } from 'react-hook-form';

type FormValues = {
    email: string;
  };
    

const Subscribe = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting }, } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    console.log('Subscribed:', data.email);
    await new Promise((res) => setTimeout(res, 1000)); 
        reset();
    };

  return (
    <div className="pt-8  ">
      <div className="bg-[var(--main-orange-light)] p-[32px] flex flex-col gap-4 lg:flex-row lg:gap-6">
        <TextTitle text="відстежуйте наші новини!" className="uppercase font-medium text-white text-left" />
        <form className="flex gap-4 justify-between " onSubmit={handleSubmit(onSubmit)}>
                  <label className="sr-only" htmlFor="email"></label>
          <input id="email" type="email" placeholder="Email" className="w-full h-[40px] md:max-w-[312px]  text-white rounded-2xl   bg-[rgba(255,255,255,0.34)] p-2 border-transparent  outline-none placeholder:text-left placeholder:pl-2 placeholder:text-[12px] placeholder:font-light placeholder:text-white"
                  {...register("email")}
                  />
          <ButtonOval
            buttonText={isSubmitting ? '...' : 'Надіслати'}
            type="submit"
            className="w-[120px] h-[40px] bg-white text-[var(--main-dark-color)] font-light leading-2 text-[10px]"
            style={{ background: '#FFFFFF' }}
          />
        </form>
          </div>
          
        

         </div>
  )
}
export default Subscribe