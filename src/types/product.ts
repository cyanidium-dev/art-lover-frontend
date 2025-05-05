import { Category } from "./category";

export interface Product {
  id: string;
  category: Category;
  slug: string;
  title: string;
  price: number;
  discountedPrice?: number;
  images: { url: string; alt: string }[];
  bestseller?: boolean;
  newProduct?: boolean;
}
