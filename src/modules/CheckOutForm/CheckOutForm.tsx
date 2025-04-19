'use client';

import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    delivery: 'ukrposhta' | 'nova_poshta';
    payment: 'card' | 'mono' | 'cash';
    receiver: 'myself' | 'someone';
    comment: string;
};

const CheckoutForm = () => {
    const { register, handleSubmit, watch } = useForm<FormData>({
        defaultValues: {
            delivery: 'ukrposhta',
            payment: 'card',
            receiver: 'myself',
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Tabs */}
            <div className="flex gap-2">
                <button type="button" className="bg-[var(--main-orange)] text-white px-4 py-2 rounded">По Україні</button>
                <button type="button" className="border px-4 py-2 rounded">По світу</button>
            </div>

            {/* Step 1 */}
            <div className="border p-4 rounded">
                <h3 className="font-semibold mb-2">Крок 1: Особисті дані</h3>
                <input {...register('name')} placeholder="Ім’я" className="input" />
                <input {...register('surname')} placeholder="Прізвище" className="input" />
                <input {...register('email')} placeholder="Електронна пошта" className="input" />
                <input {...register('phone')} placeholder="Номер телефону" className="input" />
            </div>

            {/* Step 2 */}
            <div className="border p-4 rounded">
                <h3 className="font-semibold mb-2">Крок 2: Оплата та доставка</h3>
                <label>
                    <input type="radio" {...register('delivery')} value="ukrposhta" /> Укрпошта
                </label>
                <label>
                    <input type="radio" {...register('delivery')} value="nova_poshta" /> Нова Пошта
                </label>
            </div>

            {/* Step 3 */}
            <div className="border p-4 rounded">
                <h3 className="font-semibold mb-2">Крок 3: Спосіб оплати</h3>
                <label>
                    <input type="radio" {...register('payment')} value="card" /> Карткою на сайті
                </label>
                <label>
                    <input type="radio" {...register('payment')} value="mono" /> Сплатити з Monobank
                </label>
                <label>
                    <input type="radio" {...register('payment')} value="cash" /> Сплатити при отриманні
                </label>
            </div>

            {/* Step 4 */}
            <div className="border p-4 rounded">
                <h3 className="font-semibold mb-2">Крок 4: Одержувач</h3>
                <label>
                    <input type="radio" {...register('receiver')} value="myself" /> Я одержувач
                </label>
                <label>
                    <input type="radio" {...register('receiver')} value="someone" /> Інша людина
                </label>
            </div>

            {/* Step 5 */}
            <div className="border p-4 rounded">
                <h3 className="font-semibold mb-2">Крок 5: Коментар</h3>
                <textarea {...register('comment')} placeholder="Додайте коментар, якщо потрібно" className="w-full p-2 border rounded" />
            </div>

            <button type="submit" className="bg-[var(--main-orange)] text-white px-6 py-2 rounded">
                Підтвердити замовлення
            </button>
        </form>
    );
};

export default CheckoutForm;
