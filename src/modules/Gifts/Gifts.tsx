
'use client'

import gifts from '@/assets/gifts.png';
import ButtonOval from '@/shared/components/ButtonOval/ButtonOval';
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const Gifts = () => {
    const router = useRouter();

    return (
        <div className='py-8'>
            <div className='relative flex flex-col justify-end bg-[var(--main-orange)] rounded-2xl   mx-auto overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.25)]'>

                <div className="absolute top-0 w-full h-[48px] bg-[var(--main-orange-light)]  bg-repeat-wrap bg-blend-lighten rounded-b-full sm:h-1/6 "
                style={{
                    backgroundImage: "url('/logo.svg')",
                    backgroundSize: '110px 24px',
                    backgroundPosition: 'top',
                }}>

            </div>
            <div className='z-10 mt-12 px-4'>
                    <h2 className="text-white text-[14px] font-bold uppercase mb-1 sm:text-[50px] sm:mb-2  sm:font-black ">
                    Допоможемо обрати подарунок
                </h2>
                <p className="text-justify text-[12px] text-white font-light mb-[12px] leading-none">Наш сайт допоможе обрати подарунок для будь-якого свята та події за допомогою фільтрів</p>
                    <ButtonOval buttonText='Обрати подарунок' className='text-[8px] ' onClick={() => router.push('/gifts')} style={{
                        background: 'linear-gradient(121deg, #FFF 22.48%, #FF692D 337.32%)',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        color: 'var(--main-dark-color)',
                        borderRadius: '20px',
                        border: '1px solid transparent',
                    }}
                    />
            </div>



            <Image
                src={gifts}
                alt="gift"


                className="w-full h-auto object-bottom"
            />
            </div>
        </div>
    )
}
export default Gifts