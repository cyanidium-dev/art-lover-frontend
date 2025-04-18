'use client'
import { useState } from "react";
import { Range } from 'react-range';


type FilterSliderProps = {
    min?: number;
    max?: number;
    values: [number, number];
    onChange: (values: [number, number]) => void;
};

const CategoryFilterSlider = ({
    min = 0,
    max = 100,
    values,
    onChange,
}: FilterSliderProps) => {
    return (
        <div className="w-full">
            <div className="flex justify-between text-[14px] font-normal mb-4">
                <span>Від</span>
                <span>До</span>
            </div>

            <Range
                step={1}
                min={min}
                max={max}
                values={values}
                onChange={(vals) => onChange([vals[0], vals[1]])}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-[2px] bg-[var(--main-dark-color)] rounded relative"
                        style={{ ...props.style }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props, index }) => (
                    <div
                        {...props}
                        className="flex items-center justify-center  h-[23px] rounded-sm bg-[var(--main-orange)] text-white text-xs font-normal p-1"
                        style={{ ...props.style }}
                    >
                        {values[index]}
                    </div>
                )}
            />

            <div className="flex justify-between text-xs mt-2">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

export default CategoryFilterSlider;