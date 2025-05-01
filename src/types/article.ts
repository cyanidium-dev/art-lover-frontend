export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  text: string[];
  images: { url: string; alt: string }[];
}
