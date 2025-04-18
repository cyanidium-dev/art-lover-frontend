'use client';

import { useState } from "react";
import CategoryFilterButton from "../CategoryFilterButton/CategoryFilterButton";
import CategoryFilterSlider from "../CategoryFilterSlider/CategoryFilterSlider";
import { CircleX } from "lucide-react";

type FilterState = {
    discounts: boolean;
    newArrivals: boolean;
    priceRange: [number, number];
    ageRange: [number, number];
    professions: string[];
};

type CategoryFilterProps = {
    values: FilterState;
    onChange: (filters: FilterState) => void;
};

const CategoryFilter = ({ values, onChange }: CategoryFilterProps) => {
    const [open, setOpen] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const professions = ['Маркетолог', 'Вчитель', 'Дизайнер', 'Програміст', 'Майстер краси'];

    const toggleProfession = (profession: string) => {
        const updated = values.professions.includes(profession)
            ? values.professions.filter((p) => p !== profession)
            : [...values.professions, profession];
        onChange({ ...values, professions: updated });
    };

    return (
        <div className="relative z-20 w-full">
            <CategoryFilterButton onClick={() => { setOpen(!open); setIsAnimatingOut(false); }} />

            {open && (
                <div className="fixed inset-0 z-50">
                    <div
                        className="absolute inset-0"
                        onClick={() => {
                            setIsAnimatingOut(true);
                            setTimeout(() => setOpen(false), 250);
                        }}
                    />

                    <div
                        className={`absolute right-0 top-22 w-full max-h-[calc(100vh-88px)] bg-white shadow-lg overflow-y-auto flex flex-col transition-transform duration-300 ${isAnimatingOut ? 'animate-slide-out' : 'animate-slide-in'
                            }`}
                    >
                        <div className="absolute top-2 right-4">
                            <button
                                onClick={() => {
                                    setIsAnimatingOut(true);
                                    setTimeout(() => setOpen(false), 250);
                                }}
                                className="text-xs text-[var(--main-orange)] font-normal"
                            >
                                <CircleX width={20} height={20} stroke="#FFF" fill="currentColor" />
                            </button>
                        </div>

                        <div className="flex-1 px-8 py-8 space-y-6 text-[10px]">
                            {/* Checkboxes */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={values.discounts}
                                        onChange={() => onChange({ ...values, discounts: !values.discounts })}
                                    />
                                    Актуальні знижки
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={values.newArrivals}
                                        onChange={() => onChange({ ...values, newArrivals: !values.newArrivals })}
                                    />
                                    Новинки
                                </label>
                            </div>

                            {/* Price */}
                            <CategoryFilterSlider
                                min={50}
                                max={8000}
                                values={values.priceRange}
                                onChange={(range) => onChange({ ...values, priceRange: range })}
                            />

                            {/* Professions */}
                            <div>
                                <div className="font-bold mb-2">Професія</div>
                                {professions.map((prof) => (
                                    <label key={prof} className="flex items-center gap-2 mb-1">
                                        <input
                                            type="checkbox"
                                            checked={values.professions.includes(prof)}
                                            onChange={() => toggleProfession(prof)}
                                        />
                                        {prof}
                                    </label>
                                ))}
                            </div>

                            {/* Age */}
                            <CategoryFilterSlider
                                min={15}
                                max={70}
                                values={values.ageRange}
                                onChange={(range) => onChange({ ...values, ageRange: range })}
                            />
                        </div>
                        <div className="sticky bottom-0 bg-white p-4 flex gap-2">
                            <button
                                onClick={() => {
                                    onChange({
                                        discounts: false,
                                        newArrivals: false,
                                        priceRange: [50, 8000],
                                        ageRange: [15, 70],
                                        professions: [],
                                    });
                                    setIsAnimatingOut(true);
                                    setTimeout(() => setOpen(false), 250);
                                }}
                                className="w-full border border-[var(--main-orange)] text-[var(--main-orange)] py-2 rounded font-semibold"
                            >
                                Очистити
                            </button>
                        </div>

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
};

export default CategoryFilter;
