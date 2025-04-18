'use client';

import { useState } from "react";
import FilterButton from "./FilterButton/FilterButton";
import FilterSlider from "./FilterSlider/FilterSlider";
import { CircleX, Filter } from "lucide-react";

const CategoryFilter=()=> {
    const [open, setOpen] = useState(false);

    const [discounts, setDiscounts] = useState(true);
    const [newArrivals, setNewArrivals] = useState(false);
    const [priceRange, setPriceRange] = useState<[number, number]>([150, 5000]);
    const [ageRange, setAgeRange] = useState<[number, number]>([15, 70]);
    const professions = ['Маркетолог', 'Вчитель', 'Дизайнер', 'Програміст', 'Майстер краси'];
    const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);


    const toggleProfession = (profession: string) => {
        setSelectedProfessions((prev) =>
            prev.includes(profession)
                ? prev.filter((p) => p !== profession)
                : [...prev, profession]
        );
    };

    return (
        <div className="relative z-20 w-full">
        
<FilterButton onClick={() => { setOpen(!open); setIsAnimatingOut(false); }} />

            {/* Filter Panel */}
            {open && (
                <div className="fixed inset-0 z-50">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 "
                        onClick={() => {
                            setIsAnimatingOut(true);
                            setTimeout(() => setOpen(false), 250);
                        }}
                    >

                    {/* Drawer */}
                    <div
                        className={`absolute right-0 top-22 h-full w-[100%]  bg-white shadow-lg overflow-y-auto flex flex-col transition-transform duration-300 ${isAnimatingOut ? 'animate-slide-out' : 'animate-slide-in'
                            }`}
                    >
                    
                        <div className="absolute    top-2 right-4">
                            <button
                                onClick={() => {
                                    setIsAnimatingOut(true);
                                    setTimeout(() => setOpen(false), 250);
                                }}
                                className="text-xs text-[var(--main-orange)] font-normal"
                            >
                              <CircleX width={28} height={28} stroke="#FFF" fill="currentColor" />
                            </button>
                        </div>

                        {/* Filter Content */}
                        <div className="flex-1 px-8 py-8 space-y-6 text-[10px]">
                            {/* Checkboxes */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" checked={discounts} onChange={() => setDiscounts(!discounts)} />
                                    Актуальні знижки
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" checked={newArrivals} onChange={() => setNewArrivals(!newArrivals)} />
                                    Новинки
                                </label>
                            </div>

                            {/* Ціна */}
                        
                                <FilterSlider
                                    min={50}
                                    max={8000}
                                    values={priceRange}
                                    onChange={setPriceRange}
                                />

                            {/* Професія */}
                            <div>
                                <div className="font-bold mb-2">Професія</div>
                                {professions.map((prof) => (
                                    <label key={prof} className="flex items-center gap-2 mb-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedProfessions.includes(prof)}
                                            onChange={() => toggleProfession(prof)}
                                        />
                                        {prof}
                                    </label>
                                ))}
                            </div>

                            {/* Вік */}
                           <FilterSlider
                                min={15}
                                max={70}
                                values={ageRange}
                                onChange={setAgeRange}
                            />
                        </div>

                        {/* Footer buttons */}
                        {/* <div className="sticky bottom-0 bg-white p-4 border-t flex gap-2">
                            <button
                                onClick={() => {
                                    // apply logic here
                                    setIsAnimatingOut(true);
                                    setTimeout(() => setOpen(false), 250);
                                }}
                                className="w-full bg-[var(--main-orange)] text-white py-2 rounded font-semibold"
                            >
                                Застосувати
                            </button>
                            <button
                                onClick={() => {
                                    setDiscounts(true);
                                    setNewArrivals(false);
                                    setSelectedProfessions([]);
                                    setPriceRange([150, 5000]);
                                    setAgeRange([15, 70]);
                                }}
                                className="w-full border border-[var(--main-orange)] text-[var(--main-orange)] py-2 rounded font-semibold"
                            >
                                Очистити
                            </button>
                        </div> */}
                    </div>

                    {/* Animations */}
                    <style jsx>{`
      @keyframes slide-in {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0%);
        }
      }
      @keyframes slide-out {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(100%);
        }
      }
      .animate-slide-in {
        animation: slide-in 0.25s ease-out forwards;
      }
      .animate-slide-out {
        animation: slide-out 0.25s ease-in forwards;
      }
    `}</style>
                    </div>
                </div>
            )}
        </div>
    );
}
            

export default CategoryFilter;