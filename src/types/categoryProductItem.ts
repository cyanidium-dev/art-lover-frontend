export type CategoryProductItem = {
    id: number;
    img: string;
    name: string;
    price: string;
    hit?: boolean;
    new?: boolean;
    discount?: boolean;
    category?: string;
};