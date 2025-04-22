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
    <section className="pt-8  ">
      <div
        className="bg-[var(--main-orange-light)] bg-[url('/subscribe.png')] bg-no-repeat bg-cover bg-center
         
             p-[32px] lg:flex-row lg:gap-6"
      >
        <TextTitle text="відстежуйте наші новини!" className="uppercase font-normal text-white text-left leading-[32px] mb-[24px]" />
        <form className="flex gap-[13px] justify-between " onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only" htmlFor="email"></label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="h-[44px] min-w-[177px] md:max-w-[312px] text-white text-[12px] rounded-[28px]
             bg-[rgba(255,255,255,0.34)] px-[10px] py-[20px] border-transparent outline-none
             placeholder:text-left placeholder:pl-2 placeholder:text-[12px]
             placeholder:font-light placeholder:text-white text-justify"
            {...register("email")}
          />
          <ButtonOval
            buttonText={isSubmitting ? '...' : 'Надіслати'}
            type="submit"
            className="w-[103px] h-[44px] px-[10px] py-[20px] bg-white text-[var(--main-dark-color)] font-light leading-[24px] text-[12px] rounded-[28px]"
            style={{ background: '#FFFFFF' }}
          />
        </form>
          </div>
          
        

    </section>
  )
}
export default Subscribe