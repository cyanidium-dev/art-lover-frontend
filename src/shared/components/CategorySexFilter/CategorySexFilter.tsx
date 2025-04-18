'use client';

import { useState } from 'react';

type Gender = 'female' | 'male';

const CategorySexFilter = () => {
    const [selected, setSelected] = useState<Gender>('female');

    return (
        <div className="flex gap-4 mb-4">
            <button
                onClick={() => setSelected('female')}
                className={`h-[39px] w-[139] px-4 py-2 rounded-lg text-[14px] font-light transition border
          ${selected === 'female'
                        ? 'bg-[var(--main-orange)] text-white border-[var(--main-orange)]'
                        : 'bg-white text-gray-700 border-gray-400'}`}
            >
                ДЛЯ НЕЇ
            </button>
            <button
                onClick={() => setSelected('male')}
                className={`h-[39px] w-[139] px-4 py-2 rounded-lg text-[14px] font-light transition border
          ${selected === 'male'
                        ? 'bg-[var(--main-orange)] text-white border-[var(--main-orange)]'
                        : 'bg-white text-gray-700 border-gray-400'}`}
            >
                ДЛЯ НЬОГО
            </button>
        </div>
    );
};

export default CategorySexFilter;