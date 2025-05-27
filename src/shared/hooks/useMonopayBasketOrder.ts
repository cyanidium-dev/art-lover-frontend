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
  discounts?: Array<{
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

    const sum = itemBasePrice * 100;
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

  // окремі рядки для всіх відмічених аддонів
  const basketFromCartAddons = cartItems.flatMap(
    item =>
      item.addons
        ?.filter(addon => addon.checked)
        .map(addon => {
          const sum = getAddonFinalPrice(addon.price) * 100;
          return {
            name: addon.title,
            qty: 1,
            sum,
            total: sum,
            icon: null,
            unit: 'шт.',
            code: addon.id,
            barcode: null,
            header: null,
            footer: null,
            tax: [],
            uktzed: null,
          };
        }) || []
  );

  const basketFromAdditionalItems = additionalItems.map(item => {
    const sum = getAddonFinalPrice(item.price) * 100;
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

  return [
    ...basketFromCartItems,
    ...basketFromCartAddons,
    ...basketFromAdditionalItems,
  ];
};
