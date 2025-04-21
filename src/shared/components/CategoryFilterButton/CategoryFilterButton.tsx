'use client';

import { FilterIcon } from 'lucide-react';


type Props = {
    onClick?: () => void;
};


const CategoryFilterButton =(props:Props)=> {

    return (
        <div className="relative">
            {/* Filter Button */}
            <button
                onClick={() => props.onClick && props.onClick()}
                type="button"
                className="flex items-center justify-center border rounded w-[32px] h-[32px] text-[var(--main-orange)] bg-white"
            >
                
                <FilterIcon width={20} height={20}/>
             
            </button>

        </div>
    );
}

export default CategoryFilterButton;