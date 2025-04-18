'use client';


type Gender = 'female' | 'male';


type Props = {
    selected: Gender | null;
    onSelect: (gender: Gender | null) => void;
};

const CategorySexFilter = ({ selected, onSelect }: Props) => {
    const handleClick = (gender: Gender) => {
        onSelect(selected === gender ? null : gender);
    };

    return (
        <div className="flex gap-4 mb-4">
            <button
                onClick={() => handleClick('female')}
                className={`h-[39px] w-[139px] px-4 py-2 rounded-lg text-[14px] font-light transition border
          ${selected === 'female'
                        ? 'bg-[var(--main-orange)] text-white border-[var(--main-orange)]'
                        : 'bg-white text-gray-700 border-gray-400'}`}
            >
                ДЛЯ НЕЇ
            </button>
            <button
                onClick={() => handleClick('male')}
                className={`h-[39px] w-[139px] px-4 py-2 rounded-lg text-[14px] font-light transition border
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