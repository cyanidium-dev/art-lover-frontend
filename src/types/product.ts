export interface Product {
  id: string;
  title: string;
  price: number;
  images: { url: string; alt: string }[];
  bestseller?: boolean;
  newProduct?: boolean;
  discounted?: boolean;
}
