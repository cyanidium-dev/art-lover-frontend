export interface Category {
  id: string;
  icon: string;
  title: string;
  description?: string;
  slug: string;
  subcategories?: { title: string; slug: string }[];
}
