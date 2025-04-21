'use client'

import categoryGifts from '@/assets/categoryGifts.png'
import CategoryBanner from "../../../shared/components/CategoryBanner/CategoryBanner"
import CategorySexFilter from "../../../shared/components/CategorySexFilter/CategorySexFilter"
import CategoriesCatalog from "@/shared/components/CategoriesCatalog/CategoriesCatalog"
import giftItems from "./giftItems"
import { useState } from "react"
import CategoryFilter from "@/shared/components/CategoryFilter/CategoryFilter"
import CategorySort from "@/shared/components/CategorySort/CategorySort"
import SliderControllers from '@/shared/components/SliderControllers/SliderControllers'



type Gender = 'female' | 'male';
type FilterState = {
  discounts: boolean;
  newArrivals: boolean;
  priceRange: [number, number];
  ageRange: [number, number];
  professions: string[];
};


const CategoryGift = () => {
  const [genderFilter, setGenderFilter] = useState<Gender | null>(null);
  const [filterValues, setFilterValues] = useState<FilterState>({
    discounts: false,
    newArrivals: false,
    priceRange: [50, 8000],
    ageRange: [15, 70],
    professions: [],
  });
  const [sorted, setSorted] = useState<'За популярністю' | 'За зростанням ціни' | 'За зменшенням ціни' | 'За знижкою' | 'За рейтингом' | 'За наявністю'>('За популярністю');

  const filteredItems = giftItems.filter((item) => {
    const inGender = genderFilter ? item.gender === genderFilter : true;
    const inDiscount = filterValues.discounts ? item.discount : true;
    const inNew = filterValues.newArrivals ? item.new : true;
    const inProfession = filterValues.professions.length
      ? filterValues.professions.includes(item.profession)
      : true;

    return inGender && inDiscount && inNew && inProfession;
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
    <>

      <CategoryBanner src={categoryGifts} alt="categoryGifts" />
      <CategorySexFilter selected={genderFilter} onSelect={setGenderFilter} />

      <div className="flex items-center justify-between w-full  mx-auto mb-6">
        <CategoryFilter values={filterValues} onChange={setFilterValues} />
        <CategorySort sorted={sorted} onChange={setSorted} />
      </div>
      <CategoriesCatalog items={sortedItems.map(item => ({ ...item, id: item.id.toString() }))} />
      <SliderControllers prevClass="prev-gift-category" nextClass="next-gift-category" />

    </>
  )
}
export default CategoryGift