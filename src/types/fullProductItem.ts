import { CategoryProductItem } from "./categoryProductItem";
import { Review } from "./review";

export interface fullProductItem {
    id: string;
    img: string;
    name: string;
    price: string;
    hit: boolean;
    new: boolean;
    discount?: boolean;
    quantity: number;
    category?: string;
    gallery?: string[];
    shortDescription?: string;
    description?: string;
    rating?: number;
    reviews?: Review[];
    reviewsCount?: number;
    suitableFor?: string[];
    similar?: CategoryProductItem[];
}