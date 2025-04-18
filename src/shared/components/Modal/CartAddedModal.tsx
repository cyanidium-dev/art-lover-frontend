import { useRouter } from "next/navigation";

type Props = {
    open: boolean;
    
  
    proceedToCheckout?: () => void;
    continueShopping?: () => void;
};

const CartAddedModal = ({ open, proceedToCheckout, continueShopping  }: Props) => {
    if (!open) return null;
    const router = useRouter();


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white rounded-lg w-full max-w-[275px] p-4 text-center shadow-lg">
                <h3 className="text-[20px] font-semibold text-[var(--main-orange)] mb-2">
                    Товар додано до кошика!
                </h3>
                <p className="text-[12px] text-[var(--main-dark-color)] font-light mb-6">
                    Перейдіть у кошик та перегляньте всі обрані товари
                </p>
                <div className="flex flex-col gap-1">
                    <button
                        className="text-[12px] py-2 w-full border border-[var(--main-orange)] text-[var(--main-orange)] rounded-full font-normal"
                        onClick={continueShopping}
                    >
                        Продовжити покупки
                    </button>
                    <button
                        className="text-[12px] py-2 w-full bg-[var(--main-orange)] text-white rounded-full  font-normal"
                        onClick={proceedToCheckout}
                        // onClick={() => router.push('/basket')}

                    >
                        Оформити замовлення
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartAddedModal;
