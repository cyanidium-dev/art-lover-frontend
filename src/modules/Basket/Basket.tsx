'use client';

import BasketProduct from '@/shared/components/BasketProduct/BasketProduct';
import { ShoppingCart, Settings, CircleX } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
    items: any[];
    open: boolean;
    onClose: () => void;
};

const Basket = ({ items, open, onClose }: Props) => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);

  
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-full bg-[var(--main-dark-color)] flex flex-col justify-between shadow-lg animate-slide-in">
                {/* Header */}
                <div>
                    <div className="flex items-center justify-between px-8 py-3 text-white">
                        <div className="flex items-center gap-2">
                            <ShoppingCart size={20} />
                            <span className="text-sm font-semibold">КОШИК</span>
                        </div>
                        <button onClick={onClose}>
                            <CircleX size={20} />
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex flex-col gap-3 px-[32px] mt-3">
                        {items.map((item) => (
                            <BasketProduct key={item.id} item={item} />
                        ))}
                    </div>

                    <p className="text-xs text-white/70 text-right mt-3 px-4">
                        До безкоштовної доставки додавьте на <span className="text-white">25 USD</span>
                    </p>
                </div>

                {/* Footer */}
                <div className="bg-white rounded-t-xl px-4 py-4 mt-6">
                    <div className="flex justify-between text-xs text-[var(--main-dark-color)] mb-1">
                        <span>Кількість товарів у кошику</span>
                        <span>{totalQuantity}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[var(--main-dark-color)] mb-4">
                        <span>Загальна вартість</span>
                        <span className="font-semibold">{totalPrice.toFixed(2)} USD</span>
                    </div>
                    <button className="w-full py-2 bg-[var(--main-orange)] text-white rounded-full text-sm font-medium">
                        Оформити замовлення
                    </button>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default Basket;
