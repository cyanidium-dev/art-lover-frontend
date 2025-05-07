export interface CartItem {
  id: string;
  title: string;
  price: number;
  discountedPrice?: number;
  images: { url: string; alt: string }[];
  quantity: number;
}
