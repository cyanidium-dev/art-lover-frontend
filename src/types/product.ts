import { Category } from './category';

type Characteristic = {
  title: string;
  description: string | string[];
};

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
  idealFor: string[];
  characteristics: Characteristic[];
}
