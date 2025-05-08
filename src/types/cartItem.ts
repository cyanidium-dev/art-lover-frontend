import { Category } from './category';

export interface CartItem {
  id: string;
  title: string;
  category: Category;
  slug: string;
  price: number;
  discountedPrice?: number;
  images: { url: string; alt: string }[];
  quantity: number;
}
