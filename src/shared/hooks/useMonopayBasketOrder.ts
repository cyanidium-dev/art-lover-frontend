import { useCartStore } from '../store/cartStore';

export interface BasketOrderItem {
  name: string;
  qty: number;
  sum: number;
  total: number;
  icon: string | null;
  unit: string;
  code: string;
  barcode: string | null;
  header: string | null;
  footer: string | null;
  tax: unknown[];
  uktzed: string | null;
  discounts: Array<{
    type: 'percent' | null;
    mode: 'manual' | null;
    value: number | null;
  }>;
}

export type BasketOrder = BasketOrderItem[];

export const useMonopayBasketOrder = () => {
  const { cartItems, additionalItems, getItemFinalPrice, getAddonFinalPrice } =
    useCartStore.getState();

  const basketFromCartItems = cartItems.map(item => {
    const itemBasePrice = getItemFinalPrice(item);
    const addonsTotal =
      item.addons?.reduce((sum, addon) => {
        if (!addon.checked) return sum;
        return sum + getAddonFinalPrice(addon.price);
      }, 0) || 0;

    const sum = (itemBasePrice + addonsTotal) * 100; // ціна за одиницю в копійках
    const total = sum * item.quantity;

    return {
      name: item.title,
      qty: item.quantity,
      sum,
      total,
      icon: null,
      unit: 'шт.',
      code: item.id,
      barcode: null,
      header: null,
      footer: null,
      tax: [],
      uktzed: null,
    };
  });

  const basketFromAdditionalItems = additionalItems.map(item => {
    const sum = getAddonFinalPrice(item.price) * 100; // ціна за одиницю в копійках
    return {
      name: item.title,
      qty: 1,
      sum,
      total: sum,
      icon: null,
      unit: 'шт.',
      code: item.id,
      barcode: null,
      header: null,
      footer: null,
      tax: [],
      uktzed: null,
    };
  });

  return [...basketFromCartItems, ...basketFromAdditionalItems];
};
