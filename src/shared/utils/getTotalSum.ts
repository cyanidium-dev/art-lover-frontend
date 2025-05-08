import { CartItem } from '@/types/cartItem';

export const getTotalSum = (cartItems: CartItem[]) => {
  const sum = Math.round(
    cartItems.reduce(
      (acc, cartItem) =>
        acc +
        (cartItem?.discountedPrice &&
        cartItem?.discountedPrice < cartItem?.price
          ? cartItem.quantity * cartItem?.discountedPrice
          : cartItem.quantity * cartItem?.price),
      0
    )
  );
  return sum;
};
