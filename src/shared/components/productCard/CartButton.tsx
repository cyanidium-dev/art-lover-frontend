import CartIcon from '../icons/CartIcon';

interface CartButtonProps {
  onClick: () => void;
  className?: string;
}

export default function CartButton({ onClick, className }: CartButtonProps) {
  return (
    <>
      <button
        id="cart-button"
        onClick={onClick}
        className={`cursor-pointer relative flex items-center justify-center size-9 xl:w-[46px] xl:h-10 rounded-[8px] text-white bg-orange
        xl:hover:brightness-110 focus-visible:brightness-110 active:scale-95 transition duration-300 ease-in-out ${className}`}
      >
        <CartIcon />
      </button>
    </>
  );
}
