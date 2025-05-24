import { Product } from '@/types/product';

export interface FiltersState {
  type?: string[];
  profession?: string[];
  ageFrom?: number;
  ageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

export const filterProducts = (
  products: Product[],
  filters: FiltersState
): Product[] => {
  return products.filter(product => {
    // Фільтр за type (припустимо, у product є поле type як рядок)
    if (filters.type && filters.type.length > 0) {
      if (!filters.type.includes(product.type)) return false;
    }

    // Фільтр за profession (припустимо, у product є масив професій)
    if (filters.profession && filters.profession.length > 0) {
      if (!product.professions?.some(p => filters.profession?.includes(p)))
        return false;
    }

    // Фільтр за вік
    if (filters.ageFrom !== undefined && product.ageFrom !== undefined) {
      if (product.ageFrom < filters.ageFrom) return false;
    }
    if (filters.ageTo !== undefined && product.ageTo !== undefined) {
      if (product.ageTo > filters.ageTo) return false;
    }

    // Фільтр за ціну
    if (filters.priceFrom !== undefined && product.price !== undefined) {
      if (product.price < filters.priceFrom) return false;
    }
    if (filters.priceTo !== undefined && product.price !== undefined) {
      if (product.price > filters.priceTo) return false;
    }

    return true;
  });
};
