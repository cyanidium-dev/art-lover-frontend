import { useCartStore } from '@/shared/store/cartStore';
import CartListItem from '../../cart/CartItem';

export default function CartItemsList() {
  const { cartItems } = useCartStore();

  return (
    <ul
      className="flex flex-col gap-y-3 max-h-[262px] pr-1 mb-5 xl:mb-7 overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent"
    >
      {cartItems.map((cartItem, idx) => (
        <li
          key={idx}
          className="flex gap-x-[25px] px-3 py-[11px] border border-dark rounded-[8px]"
        >
          <CartListItem cartItem={cartItem} variant="dark" />
        </li>
      ))}
    </ul>
  );
}
