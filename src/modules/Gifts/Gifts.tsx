
'use client'
import ButtonOval from '@/shared/components/ButtonOval/ButtonOval';
import { useRouter } from 'next/navigation';


const Gifts = () => {
    const router = useRouter();

    return (
        <section className='py-8 w-full'>
            <div
                className="bg-cover bg-center p-[24px] "
                style={{
                    backgroundImage: "url('/giftsMain.png')",
                    aspectRatio: '296/460',
                    backgroundSize: 'cover',
                }}
            >
                <div className='flex flex-col max-w-[248px] mt-[75px] '>
                    <h2 className="text-white text-[18px] font-black uppercase mb-1 sm:text-[32px] md:font-black xl:text-[50px]">
                        Допоможемо обрати подарунок
                    </h2>


                    <p className="text-justify text-[12px] text-white font-light mb-2
                        sm:text-[14px] xl:text-[16px] ">Наш сайт допоможе обрати подарунок для будь-якого свята та події за допомогою фільтрів</p>

                    <div>
                        <ButtonOval buttonText='Обрати подарунок' className='text-[8px] w-1/2 rounded-4xl sm:w-full sm:text-[12px] sm:p-2 lg:p-4 xl:text-[14px] ' onClick={() => router.push('catalog/gift')} style={{
                            background: 'linear-gradient(121deg, #FFF 22.48%, #FF692D 337.32%)',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            color: 'var(--main-dark-color)',

                            border: '1px solid transparent',
                        }} />

                    </div>
                </div>

            </div>


        </section>
    )
}
export default Gifts