export interface BasketProductItem {
    id: string;
    img: string;
    name: string;
    price: string;
    quantity: number;
    hit?: boolean,
    new?: boolean,
    discount?: boolean,
    category?: string,
}