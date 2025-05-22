export interface Product {
  id: string;
  category: string;
  subcategory: string;
  slug: string;
  title: string;
  inStock: boolean;
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
  characteristics: {
    weight: string;
    dimensions: { height: number; width: number; length: number };
    article: string;
    kitContents: string[];
    manufacturer: string;
    materials: string;
  };
  benefits: { icon: string; description: string }[];
  addons: { title: string; price: number }[];
  colors: { title: string; hex: string }[];
  reviews: { author: string; rating: number; text: string }[];
}
