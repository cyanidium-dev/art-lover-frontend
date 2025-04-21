export interface FilterState {
    discounts: boolean;
    newArrivals: boolean;
    priceRange: [number, number];
    ageRange: [number, number];
    professions: string[];
}