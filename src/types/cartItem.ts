export interface CartItem {
  id: string;
  title: string;
  price: number;
  images: { url: string; alt: string }[];
  quantity: number;
}
