

'use client';

import { useEffect, useRef, useState } from 'react';
import { Option, sortingOptions } from './sortingOptions';

type Props = {
    sorted: Option;
    onChange: (value: Option) => void;
};
const CategorySort = ({ sorted, onChange }: Props) => {
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
                setFocusedIndex(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                setFocusedIndex((prev) => (prev === null ? 0 : (prev + 1) % sortingOptions.length));
            } else if (e.key === 'ArrowUp') {
                setFocusedIndex((prev) =>
                    prev === null ? sortingOptions.length - 1 : (prev - 1 + sortingOptions.length) % sortingOptions.length
                );
            } else if (e.key === 'Enter' && focusedIndex !== null) {
                onChange(sortingOptions[focusedIndex]);
                setOpen(false);
                setFocusedIndex(null);
            } else if (e.key === 'Escape') {
                setOpen(false);
                setFocusedIndex(null);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, focusedIndex]);
    
    return (
        <div ref={dropdownRef} className="relative inline-block  w-[248px]">
            <button
                onClick={() => setOpen(!open)}
                className="flex text-[10px] h-[32px] w-[248px] items-center  border border-[var(--main-orange)] px-4 rounded-full text-[var(--main-dark-color)] bg-white "
            >
                Сортувати ▾
                <span className="ml-3  text-[var(--main-orange)] font-semibold text-right">{sorted}</span>
            </button>

            {open && (
                <ul className="absolute right-0 z-10 bg-white rounded-lg shadow-md  text-[10px] font-semibold">
                    {sortingOptions.map((option,index) => (
                        <li
                            key={option}
                            onMouseEnter={() => setFocusedIndex(index)}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                                setFocusedIndex(null);
                            }}
                            className={`px-2 py-1 cursor-pointer hover:bg-gray-100 ${focusedIndex === index ? 'bg-gray-200' : ''
                                }`}                     >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
         
        </div>
    );
}
export default CategorySort