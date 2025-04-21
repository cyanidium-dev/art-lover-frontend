
'use client';
import { FilterState } from "@/types/categoryFilter";
import { CategoryProductItem } from "@/types/categoryProductItem";
import { categorySorting } from "@/types/categorySorting";
import { useState } from "react";

import CategoryBanner from "@/shared/components/CategoryBanner/CategoryBanner";
import CategoryArtFilter from "@/shared/components/CategoryArtFilter/CategoryArtFilter";
import CategoryFilter from "@/shared/components/CategoryFilter/CategoryFilter";
import CategorySort from "@/shared/components/CategorySort/CategorySort";
import CategoriesCatalog from "@/shared/components/CategoriesCatalog/CategoriesCatalog";
import productItems from "../productItems";

type Props = {
    id: string;
    text: string;
    img: string;
    slug: string;
}

const CatalogCategoryItem = (props: Props) => {
        const [filterValues, setFilterValues] = useState<FilterState>({
            discounts: false,
            newArrivals: false,
            priceRange: [50, 8000],
            ageRange: [15, 70],
            professions: [],
        });
    const [sorted, setSorted] = useState<categorySorting['sortingOption']>('За популярністю');
    
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredItems = productItems.filter((item: CategoryProductItem) => { 
        const inCategory = selectedCategory ? item.type?.toLowerCase() === selectedCategory.toLowerCase() : true;
        const inDiscount = filterValues.discounts ? item.discount : true;
        const inNew = filterValues.newArrivals ? item.new : true;
        const inProfession = filterValues.professions.length
            ? filterValues.professions.includes(item.profession || '')
            : true;

        return inCategory && inDiscount && inNew && inProfession;
    });
    
    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sorted) {
            case 'За зростанням ціни':
                return parseFloat(a.price) - parseFloat(b.price);
            case 'За зменшенням ціни':
                return parseFloat(b.price) - parseFloat(a.price);

            case 'За знижкою':
                return b.discount ? 1 : -1;
            default:
                return 0;
        }
    });

    

  return (
      <div>
          <div>
              <CategoryBanner src={props.img} alt="categoryArt" />
              <CategoryArtFilter selected={selectedCategory} onSelect={setSelectedCategory} />

              <div className="flex items-center justify-between w-full  mx-auto mb-6">
                  <CategoryFilter values={filterValues} onChange={setFilterValues} />
                  <CategorySort sorted={sorted} onChange={setSorted} />
              </div>
              <CategoriesCatalog items={sortedItems.map(item => ({ ...item, id: item.id.toString() }))} />
          </div>
          
    </div>
  )
}
export default CatalogCategoryItem