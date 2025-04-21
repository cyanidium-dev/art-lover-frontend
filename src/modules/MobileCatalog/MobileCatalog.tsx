'use client';

import {
 

    X,
} from 'lucide-react';
import ModalBackDrop from '@/shared/components/ModalBackdrop/ModalBackDrop';
import TextTitle from '@/shared/components/TextTitle/TextTitle';
import { catalogItems } from './catalogItems';
import MobileCatalogItem from './MobileCatalogItem';

type Props = {
    open: boolean;
    onClose: () => void;
};


const MobileCatalog = (props:Props) => {




    return (

        <ModalBackDrop onClose={props.onClose} direction='left'>

            <div className="absolute left-0 top-0 h-full w-full bg-white flex flex-col shadow-lg sm:max-w-[360px] sm:rounded-r-xl">

                <div className="flex items-center justify-between px-8 py-8 ">
                
                    <TextTitle text="Каталог" className="text-[var(--main-orange)] text-[20px]" />
            
                    <button
                        onClick={props.onClose}
                        type="button"
                        className="flex items-center justify-center rounded-full w-[32px] h-[32px] text-[var(--main-orange)] bg-white shadow transition duration-300 hover:shadow-lg hover:bg-[var(--main-orange-light)] hover:text-white border    "
                    >
                        <X size={20} />
                    </button>
                </div>
            
                <ul className="text-sm text-[var(--main-dark-color)] space-y-6  px-8 pb-8 overflow-y-auto h-full">
                    {catalogItems.map(({ id, name, link, icon: Icon, subItems }) => (
                        
                        <MobileCatalogItem key={id} item={{ id, name, link, icon: Icon, subItems }} onClose={props.onClose} />
                      
                    ))}
           
                </ul>
            </div>
            </ModalBackDrop>
    )
}



export default MobileCatalog;
