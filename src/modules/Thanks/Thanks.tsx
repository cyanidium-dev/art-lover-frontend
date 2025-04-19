'use client';

import { useRouter } from 'next/navigation';

import ButtonOval from '@/shared/components/ButtonOval/ButtonOval';
import TextTitle from '@/shared/components/TextTitle/TextTitle';
import LogoSymbol from '@/shared/components/LogoSymbol/LogoSymbol';

const Thanks = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center p-4 text-center ">
<LogoSymbol className="mb-8" fill="var(--main-orange)" />
            <TextTitle text="Дякуємо за замовлення!" className="mb-2 text-[18px]" />
            <p className="text-[12px] text-[var(--main-dark-color)] font-light mb-6">
                Наш менеджер зв’яжеться з вами найближчим часом. Гарного дня!
            </p>

            <ButtonOval
                buttonText="Переглянути інші наші товари"
                onClick={() => router.push('/')}
                className="text-[10px] w-full"
                style={{
                    borderRadius: '28px',
                    border: '1px solid var(--main-dark-color)',
                    backgroundColor: 'transparent',
                    color: 'var(--main-dark-color)',
                    padding: '8px 16px',
                }}
            />
        </div>
    );
};

export default Thanks;