'use client';

import BasketProduct from '@/shared/components/BasketProduct/BasketProduct';
import { ShoppingCart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import itemsInBasket from './itemsInBasket';
import FreeShipping from '@/shared/components/FreeShipping/FreeShipping';
import ButtonOval from '@/shared/components/ButtonOval/ButtonOval';
import { useRouter } from 'next/navigation';
import ModalBackDrop from '@/shared/components/ModalBackdrop/ModalBackDrop';

type Props = {
    open: boolean;
    onClose: () => void;
};

const Basket = ({ open, onClose }: Props) => {

    const router = useRouter()
    const [basketItems, setBasketItems] = useState(itemsInBasket)
    const [isEmpty, setIsEmpty] = useState(false)
    const updateItemQuantity = (quantity: number, id: string) => {
        setBasketItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };
    const deleteItem = (id: string) => {
        setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
    const totalQuantity = basketItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = basketItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);

    useEffect(() => {
        setBasketItems(itemsInBasket)
    }, [])
    const checkout = () => {
        if (basketItems.length === 0) {
            alert('Кошик порожній!');
            return;
        }

        router.push('/checkout')
        if (open) {
            onClose();
        }

    }
    if (!open) return null;
    if (basketItems.length === 0) {
        setIsEmpty(true)

    }

    return (


        <ModalBackDrop onClose={onClose} direction='right'>
            {/* Drawer */}
            <div

                className="absolute right-0 top-0 h-full w-full bg-[var(--main-dark-color)] flex flex-col justify-between shadow-lg z-50 sm:max-w-[360px] sm:rounded-l-xl"
            >
                {/* Header */}

                <div className="flex items-center justify-between px-8 py-8 text-white">
                        <div className="flex items-center gap-2">
                            <ShoppingCart size={20} />
                            <span className="text-sm font-semibold">КОШИК</span>
                        </div>
                    <button onClick={onClose} type="button" className="flex items-center justify-center rounded-full w-[32px] h-[32px] text-white bg-[var(--main-dark-color)] shadow border border-white transition duration-300 hover:bg-white hover:text-[var(--main-dark-color)]"


                        aria-label="Close">
                        <X size={20} />
                        </button>
                </div>
                {/* Items */}



                <ul className="flex flex-col gap-3 px-[32px] mt-3 max-h-1/2 overflow-y-auto">
                    {isEmpty ? (
                        <div className="flex flex-col items-center justify-center h-full text-white">
                            <h2 className="text-lg font-semibold">Кошик порожній</h2>
                            <p className="text-sm">Додайте товари до кошика, щоб продовжити.</p>
                        </div>
                    ) : (
                        basketItems.map((item) => (
                            <BasketProduct key={item.id} item={item} onUpdateQuantity={updateItemQuantity} onDelete={deleteItem} className='text-white' />
                        ))
                    )}
                </ul>

                <div>
                    <FreeShipping totalPrice={totalPrice} />
                {/* Footer */}
                    <div className="bg-white rounded-t-xl px-8 py-4 font-normal">
                        <div className="flex justify-between text-[12px] text-[var(--main-dark-color)] mb-1">
                        <span>Кількість товарів у кошику</span>
                        <span>{totalQuantity}</span>
                    </div>
                        <div className="flex justify-between text-[12px] font-normal text-[var(--main-dark-color)] mb-2">
                            <span className="font-medium">Загальна вартість</span>
                            <span className="font-medium">{totalPrice.toFixed(2)} USD</span>
                        </div>
                        <ButtonOval onClick={checkout} buttonText={"Oформити замовлення"} className="flex items-center justify-center w-full py-1 bg-[var(--main-orange)] text-white rounded-full text-[12px] font-medium" style={{ background: " var(--main-orange)" }} />

                    </div>
                </div>
            </div>


        </ModalBackDrop>


    );
};

export default Basket;
