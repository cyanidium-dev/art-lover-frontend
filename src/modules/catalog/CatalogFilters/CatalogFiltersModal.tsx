'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { burgerMenuVariants } from '@/shared/utils/animationVariants';
import CrossInCircleIcon from '@/shared/components/icons/CrossInCircleIcon';
import CatalogFilters from './CatalogFilters';
import { FiltersState } from './CatalogFilters';

interface CatalogFiltersModalProps {
  handleApplyFilters: (filters: FiltersState) => void;
  professions: { title: string; value: string }[];
  activeTab: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogFiltersModal({
  isOpen,
  onClose,
  activeTab,
  handleApplyFilters,
  professions,
}: CatalogFiltersModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={burgerMenuVariants}
          className={`${isOpen ? 'no-doc-scroll' : ''} lg:hidden fixed z-[20] top-0 right-0 w-[100vw] sm:w-[400px] bg-white h-dvh`}
        >
          <div className="relative h-22 w-full bg-white"></div>
          <div
            className="relative flex flex-col justify-between h-[calc(100%-88px)]  overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-8 z-10 cursor-pointer flex items-center justify-center size-[32px] p-1 md:p-0 text-orange  xl:hover:text-dark focus-visible:text-dark transition duration-300 ease-in-out"
            >
              {<CrossInCircleIcon className="size-full" />}
            </button>

            <CatalogFilters
              activeTab={activeTab}
              onApplyFilters={handleApplyFilters}
              professions={professions}
              onClose={onClose}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
