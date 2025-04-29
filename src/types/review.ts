export interface Review {
  id: string;
  title: string;
  slug: string;
  images: { url: string; alt: string }[];
  rating: number;
  author: string;
  text: string;
  createdAt: string;
}
