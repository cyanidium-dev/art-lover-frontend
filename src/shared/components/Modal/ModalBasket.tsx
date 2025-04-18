type Props = {
    open: boolean;
    onClose: () => void;
};

const CartAddedModal = ({ open, onClose }: Props) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white rounded-xl w-full max-w-[320px] p-6 text-center shadow-lg">
                <h3 className="text-[14px] font-semibold text-[var(--main-orange)] mb-2">
                    Товар додано до кошика!
                </h3>
                <p className="text-[12px] text-gray-700 mb-6">
                    Перейдіть у кошик та перегляньте всі обрані товари
                </p>
                <div className="flex flex-col gap-3">
                    <button
                        className="text-[12px] py-2 w-full border border-[var(--main-orange)] text-[var(--main-orange)] rounded-full"
                        onClick={onClose}
                    >
                        Продовжити покупки
                    </button>
                    <button
                        className="text-[12px] py-2 w-full bg-[var(--main-orange)] text-white rounded-full"
                    >
                        Оформити замовлення
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartAddedModal;
