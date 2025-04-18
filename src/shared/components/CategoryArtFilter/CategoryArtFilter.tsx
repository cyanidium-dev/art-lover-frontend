type Props = {
    selected: string;
    onSelect: (value: string) => void;
};

const artCategories = [
    'String Art',
    'Картина за номерами',
    'Алмазна мозаїка',
    'Вишивання',
    'Картини з бісеру',
    'Інші',
];

const CategoryArtFilter = ({ selected, onSelect }: Props) => {
    return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-6">
            {artCategories.map((label, i) => {
                const size = i < 2 ? 'full' : 'half';
                const isActive = selected === label;

                return (
                    <div
                        key={label}
                        className={`${size === 'full' ? 'col-span-2' : 'col-span-1'}`}
                    >
                        <button
                            onClick={() => onSelect(isActive ? '' : label)}
                            className={`uppercase whitespace-nowrap w-full h-[39px] inline-flex items-center justify-center px-6 py-2 rounded-lg text-[12px] font-light transition border
    ${isActive
                                    ? 'bg-[var(--main-orange)] text-white border-[var(--main-orange)]'
                                    : 'bg-white text-[var(--main-dark-color)] border-[var(--main-dark-color)]'
                                }`}
                        >
                            {label}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default CategoryArtFilter;
