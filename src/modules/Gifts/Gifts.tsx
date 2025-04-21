
'use client'

import gifts from '@/assets/gifts.png';
import ButtonOval from '@/shared/components/ButtonOval/ButtonOval';
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const Gifts = () => {
    const router = useRouter();

    return (
        <div className='py-8 w-full'>
            <div className='relative flex flex-col justify-end bg-[var(--main-orange)] rounded-2xl   mx-auto overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.25)]
            sm:flex-row items-end 
            
            '>

                <div className="absolute top-0 w-full h-[48px] bg-[var(--main-orange-light)]  bg-repeat-wrap bg-blend-lighten rounded-b-full 
                sm:h-1/6 "
                style={{
                    backgroundImage: "url('/logo.svg')",
                    backgroundSize: '110px 24px',
                    backgroundPosition: 'top',
                }}>

            </div>
                <div className='z-10 mt-12 px-4 flex flex-col gap-2 sm:mb-6 sm:w-1/2'>
                    <div>
                        <h2 className="text-white text-[14px] font-bold uppercase mb-1 sm:text-[32px]  md:font-black xl:text-[50px] ">
                            Допоможемо обрати подарунок</h2>
                    </div>
                    <div>
                        <p className="text-justify text-[12px] text-white font-light leading-none mb-2 sm:text-[14px] xl:text-[16px] ">Наш сайт допоможе обрати подарунок для будь-якого свята та події за допомогою фільтрів</p>
                    </div>
                    <div>
                        <ButtonOval buttonText='Обрати подарунок' className='text-[8px] w-1/2 rounded-4xl sm:w-full sm:text-[12px] sm:p-2 lg:p-4 xl:text-[14px] ' onClick={() => router.push('catalog/gift')} style={{
                        background: 'linear-gradient(121deg, #FFF 22.48%, #FF692D 337.32%)',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        color: 'var(--main-dark-color)',

                        border: '1px solid transparent',
                        }} />

                    </div>
            </div>


                <div className='z-0 w-full h-full flex  sm:w-1/2'>
            <Image
                src={gifts}
                        alt="gift"
                        width={500}
                        height={500}
                        className="w-full h-auto object-bottom"
                    />

                </div>
            </div>


        </div>
    )
}
export default Gifts