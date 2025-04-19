'use client';

import { useForm } from 'react-hook-form';
import itemsInBasket from '../Basket/itemsInBasket';
import TextTitle from '@/shared/components/TextTitle/TextTitle';
import { Coins, Filter, GlobeIcon, Heart, IdCardIcon, PersonStanding, PersonStandingIcon, ShoppingBag, SmileIcon } from 'lucide-react';
import CheckOutStepTitle from '@/shared/components/CheckOutStepTitle/CheckOutStepTitle';
import Hint from '@/shared/components/Hint/Hint';

import BasketProduct from '@/shared/components/BasketProduct/BasketProduct';
import GiftWrapItem from '@/shared/components/GiftWrapItem/GiftWrapItem';
import { useRouter } from 'next/navigation';

type FormData = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    delivery: 'ukrposhta' | 'nova_poshta';
    payment: 'card' | 'mono' | 'cash';
    receiver: 'myself' | 'someone';
    comment: string;
    tip: string;
};

const CheckoutForm = () => {
    const { register, handleSubmit, watch, setValue, formState: { isSubmitting } } = useForm<FormData>({
        defaultValues: {
            delivery: 'ukrposhta',
            payment: 'card',
            receiver: 'myself',
            comment: '',
            tip: '0',
        },
    });
    const router = useRouter();

    const onSubmit = async (data: FormData) => {
        console.log('Submitting...', data);
        await new Promise((res) => setTimeout(res, 2000));
        console.log('Submitted!');
        router.push('/thanks');
    };
    const selectedTip = watch('tip');


    return (
        <div className='py-4'>
            <TextTitle text="Оформлення замовлення" className="uppercase text-center mb-4 font-semibold" fontSize="18px" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-4">
            {/* Tabs */}
                <div className="flex gap-2 mb-8">
                    <button type="button" className="w-full bg-[var(--main-orange)] text-white px-4 py-2 rounded uppercase text-[12px]">По Україні</button>
                    <button type="button" className="w-full border px-4 py-2 rounded uppercase text-[12px]">По світу</button>
            </div>

            {/* Step 1 */}
                <div className="border p-4 rounded flex flex-col gap-2">


                    <CheckOutStepTitle title="Крок 1" text="Особисті дані" icon={<SmileIcon />} />
                    <input
                        {...register('name')}
                        placeholder="* Ім’я"
                        className="w-full px-4 py-1.5 text-[12px] border rounded-md focus:outline-none focus:border-[var(--main-orange)]"
                    />
                    <input
                        {...register('surname')}
                        placeholder="* Прізвище"
                        className="w-full px-4 py-1.5 text-[12px] border rounded-md focus:outline-none focus:border-[var(--main-orange)]"


                    />
                    <input
                        {...register('email')}
                        placeholder="* Електронна пошта"
                        className="w-full px-4 py-1.5 text-[12px] border  rounded-md focus:outline-none focus:border-[var(--main-orange)]"
                        type='email'

                    />
                    <input
                        {...register('phone')}
                        placeholder="* Номер телефону"
                        className="w-full px-4 py-1.5 text-[12px] border  rounded-md focus:outline-none focus:border-[var(--main-orange)]"
                        type='tel'

                    />
            </div>

            {/* Step 2 */}
            <div className="border p-4 rounded">
                    <CheckOutStepTitle title="Крок 2" text="Оплата та доставка" icon={<GlobeIcon />} />
                    <div className='flex gap-2'>
                        <label className={`flex items-center gap-2 border rounded-lg p-2 cursor-pointer w-full justify-center`}>
                            <input
                                type="radio"
                                {...register('delivery')}
                                value="ukrposhta"
                                className="hidden"
                            />
                            <img src="/icons/ukrposhta.png" alt="Ukrposhta" className="h-6 w-auto" />
                        </label>

                        <label className={`flex items-center gap-2 border rounded-lg p-2 cursor-pointer w-full  justify-center`}>
                            <input
                                type="radio"
                                {...register('delivery')}
                                value="nova_poshta"
                                className="hidden"
                            />
                            <img src="/icons/noveposhta.png" alt="Nova Poshta" className="h-6 w-auto" />
                        </label></div>
            </div>

            {/* Step 3 */}
            <div className="border p-4 rounded">
                    <CheckOutStepTitle title="Крок 3" text="Спосіб оплати" icon={<IdCardIcon />} />

                    <label className='text-[12px] font-medium flex items-center gap-3 py-1'>
                    <input type="radio" {...register('payment')} value="card" /> Карткою на сайті
                </label>
                    <div
                        onClick={() => setValue('payment', 'mono')}
                        className={`flex text-[12px] items-center gap-2 border px-4 py-2 rounded cursor-pointer ${watch('payment') === 'mono'
                            ? 'border-[var(--main-orange)] bg-[var(--main-orange)] text-white'
                            : 'border-gray-300 bg-white'
                            }`}
                    >
                        <input
                            type="radio"
                            value="mono"
                            {...register('payment')}
                            checked={watch('payment') === 'mono'}
                            className="hidden "
                        />
                        Сплатити з Monobank
                    </div>
                    <label className='text-[12px] font-medium flex items-center gap-3 py-1'>
                    <input type="radio" {...register('payment')} value="cash" /> Сплатити при отриманні
                </label>
            </div>

            {/* Step 4 */}
            <div className="border p-4 rounded">
                    <CheckOutStepTitle title="Крок 4" text="Одержувач" icon={<PersonStanding />} />
                    <label className='text-[12px] font-medium flex items-center gap-3 py-1'>
                    <input type="radio" {...register('receiver')} value="myself" /> Я одержувач
                </label>
                    <label className='text-[12px] font-medium flex items-center gap-3 py-1'>
                    <input type="radio" {...register('receiver')} value="someone" /> Інша людина
                </label>
            </div>

            {/* Step 5 */}
            <div className="border p-4 rounded">
                    <CheckOutStepTitle title="Крок 5" text="Додати коментар" icon={<PersonStanding />} />
                    <textarea {...register('comment')} placeholder="Додайте коментар, якщо потрібно" className="w-full p-1.5 min-h-16 border rounded text-[12px]" />
                </div>
                {/*step 6 */}
                <div className="border p-4 rounded">
                    <CheckOutStepTitle title="Ваше замовлення" text="" icon={<ShoppingBag />} />
                    <ul className='flex flex-col gap-2 mb-4'>
                        {itemsInBasket.map((item) => (
                            <BasketProduct key={item.id} item={item} onUpdateQuantity={() => { console.log("upd") }} onDelete={() => { console.log("del") }} className="text-[12px] text-[var(--main-dark-color)] "
                            />
                        ))}</ul>

                    {/*step 7 */}
                    <div className="">
                        <CheckOutStepTitle title="Додати пакуваня?" text="" icon={<IdCardIcon />} />
                        <ul>
                            {
                                <GiftWrapItem
                                    image="/products/productC.png"
                                    title="Подарункове пакування"
                                    price="100"
                                    onClick={() => console.log("Додано пакування")}
                                />
                            }
                        </ul>


                        {/* <div className="flex items-center justify-between mb-2">
                            <img src="/pack1.png" alt="pack1" className="w-12 h-12 object-cover rounded" />
                            <div>Подарункове пакування<br />100 грн</div>
                            <button className="text-xs border px-2 py-1 rounded">Додати</button>
                        </div>
                        <div className="flex items-center justify-between">
                            <img src="/pack2.png" alt="pack2" className="w-12 h-12 object-cover rounded" />
                            <div>Листівка<br />30 грн</div>
                            <button className="text-xs border px-2 py-1 rounded">Додати</button>
                        </div> */}
                    </div>
                </div>

                {/*step7 */}
                <div className="border p-4 rounded">
                    <CheckOutStepTitle title="Промокод" text="" icon={<Heart />} />
                    <input
                        placeholder="Введіть свій промокод"
                        className="w-full border rounded px-2 py-1 text-[12px]"
                    />
                </div>
                {/*step 8 */}
                <div className="border p-4 rounded">
                    <CheckOutStepTitle
                        title="Залишити чайові нашим пакувальникам"
                        text=""
                        icon={<Coins />}
                    />
                    <div className="flex gap-2 mb-2">
                        {['10', '15', '20'].map((percent) => (
                            <button
                                key={percent}
                                type="button"
                                onClick={() => setValue('tip', percent)}
                                className={`w-full px-2 py-1 text-[12px] rounded border ${selectedTip === percent
                                    ? 'bg-[var(--main-orange-light)] text-white border-[var(--main-orange-light)]'
                                    : 'bg-white text-[var(--main-dark-color)] border-[var(--main-orange)]'
                                    }`}
                            >
                                {percent}%
                            </button>
                        ))}
                    </div>
                    <input
                        {...register('tip')}
                        placeholder="Вписати суму"
                        className="w-full border rounded px-2 py-1 text-[12px]"
                    />
                </div>

                {/*step 9 */}
                <div className="text-[12px] font-medium border p-4 rounded">
                    <div className="flex justify-between    mb-4">
                        <span>Загальна вартість</span>
                        <span>140 USD</span>
                    </div>
                    <button
                        type="submit"

                        disabled={isSubmitting}
                        className={`px-6 py-2 w-full rounded-2xl transition ${isSubmitting
                            ? 'bg-[var(--main-dark-color)] cursor-not-allowed text-white'
                            : 'bg-[var(--main-orange)] text-white hover:bg-opacity-80'
                            }`}
                    >
                        {isSubmitting ? 'Надсилаємо...' : 'Оформити замовлення'}
                    </button>
                </div>






            </form>
            <Hint />
        </div >
    );
};

export default CheckoutForm;
