'use client';
import { useState } from "react";
import artItems from "./artItems";
import CategoryBanner from "@/shared/components/CategoryBanner/CategoryBanner";
import categoryArtPic from '@/assets/categoryArt.png';
import CategoryArtFilter from "@/shared/components/CategoryArtFilter/CategoryArtFilter";
import CategoriesCatalog from "@/shared/components/CategoriesCatalog/CategoriesCatalog";
import CategoryFilter from "@/shared/components/CategoryFilter/CategoryFilter";
import CategorySort from "@/shared/components/CategorySort/CategorySort";

type FilterState = {
    discounts: boolean;
    newArrivals: boolean;
    priceRange: [number, number];
    ageRange: [number, number];
    professions: string[];
};

const CategoryArt = () => {
    const [filterValues, setFilterValues] = useState<FilterState>({
        discounts: false,
        newArrivals: false,
        priceRange: [50, 8000],
        ageRange: [15, 70],
        professions: [],
    });
    const [sorted, setSorted] = useState<'За популярністю' | 'За зростанням ціни' | 'За зменшенням ціни' | 'За знижкою' | 'За рейтингом' | 'За наявністю'>('За популярністю');
    const [selectedCategory, setSelectedCategory] = useState('String Art');

    const filteredItems = artItems.filter((item) => {
        const inCategory = selectedCategory ? item.type?.toLowerCase() === selectedCategory.toLowerCase() : true;
        const inDiscount = filterValues.discounts ? item.discount : true;
        const inNew = filterValues.newArrivals ? item.new : true;
        const inProfession = filterValues.professions.length
            ? filterValues.professions.includes(item.profession)
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
            <CategoryBanner src={categoryArtPic} alt="categoryArt" />
            <CategoryArtFilter selected={selectedCategory} onSelect={setSelectedCategory} />
            
            <div className="flex items-center justify-between w-full  mx-auto mb-6">
            <CategoryFilter values={filterValues} onChange={setFilterValues} />
                <CategorySort sorted={sorted} onChange={setSorted} />
            </div>
            <CategoriesCatalog items={sortedItems.map(item => ({ ...item, id: item.id.toString() }))} />
        </div>
    );
};

export default CategoryArt;
