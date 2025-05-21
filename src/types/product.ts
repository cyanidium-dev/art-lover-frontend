type Characteristic = {
  title: string;
  description: string | string[];
};

export interface Product {
  id: string;
  category: string;
  subcategory: string;
  slug: string;
  title: string;
  available: boolean;
  description: string;
  fullDescription: string;
  delivery: string;
  price: number;
  discountedPrice?: number;
  mainImage: string;
  images: string[];
  bestseller?: boolean;
  newProduct?: boolean;
  idealFor: string[];
  characteristics: Characteristic[];
  benefits: { icon: string; description: string }[];
  addons: { title: string; price: number }[];
  colors: { title: string; hex: string }[];
}
