export interface CartItem {
  id: string;
  title: string;
  category: string;
  slug: string;
  price: number;
  discountedPrice?: number;
  mainImage: string;
  addons?: { title: string; price: number }[];
  color?: { title: string; hex: string };
  quantity: number;
}
