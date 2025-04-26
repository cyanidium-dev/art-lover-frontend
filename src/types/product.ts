export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  discountedPrice?: number;
  images: { url: string; alt: string }[];
  bestseller?: boolean;
  newProduct?: boolean;
}
