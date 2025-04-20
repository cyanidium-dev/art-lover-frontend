'use client';

import { useState } from 'react';
import {
 
    CircleX,
} from 'lucide-react';
import Link from 'next/link';
import ModalBackDrop from '@/shared/components/ModalBackdrop/ModalBackDrop';
import TextTitle from '@/shared/components/TextTitle/TextTitle';
import { catalogItems } from './catalogItems';
import MobileCatalogItem from './MobileCatalogItem';
type Props = {
    open: boolean;
    onClose: () => void;
};


const MobileCatalog = (props:Props) => {
    
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <ModalBackDrop onClose={props.onClose}>
            <div className="absolute left-0 top-0 h-full w-full bg-white flex flex-col shadow-lg animate-slide-in">
                <div className="flex items-center justify-between px-8 py-8 ">
                
                      <TextTitle text="Каталог" className="text-[var(--main-orange)]" fontSize='20px'/>
            
                    <button onClick={props.onClose} className="flex items-center justify-center  rounded w-[32px] h-[32px] text-[var(--main-orange)] bg-white"
                    type="button">
                        <CircleX size={20}  />
                    </button>
                </div>
            
                <ul className="text-sm text-[var(--main-dark-color)] space-y-2">
                    {catalogItems.map(({ id, name, link, icon: Icon, subItems }) => (
                        
                        <MobileCatalogItem key={id} item={{ id, name, link, icon: Icon, subItems }} />
                      
                    ))}
           
                </ul>
            </div>
            </ModalBackDrop>
    );
};

export default MobileCatalog;
