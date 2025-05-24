import { useState } from 'react';
import TypeFilters from './TypeFilters/TypeFilters';
import PriceFilter from './PriceFilter/PriceFilter';
import ProfessionFilter from './ProfessionFilter/ProfessionFilter';
import AgeFilter from './AgeFilter/AgeFilter';
import MainButton from '@/shared/components/buttons/MainButton';
import { useTranslations } from 'next-intl';

interface CatalogFiltersProps {
  onApplyFilters: (filters: FiltersState) => void;
}

export interface FiltersState {
  type: string[];
  profession: string[];
  ageFrom?: number;
  ageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

const CatalogFilters = ({ onApplyFilters }: CatalogFiltersProps) => {
  const t = useTranslations('catalogPage.filter');

  const [filters, setFilters] = useState<FiltersState>({
    profession: [],
    type: [],
  });

  return (
    <div className="hidden lg:block w-full lg:w-1/4 rounded-[16px] shadow px-[20px] py-[32px]">
      <TypeFilters
        value={filters.type}
        onChange={type => setFilters(f => ({ ...f, type }))}
      />
      <PriceFilter
        from={filters.priceFrom}
        to={filters.priceTo}
        onChange={(priceFrom, priceTo) =>
          setFilters(f => ({ ...f, priceFrom, priceTo }))
        }
      />
      <ProfessionFilter
        value={filters.profession}
        onChange={profession => setFilters(f => ({ ...f, profession }))}
      />
      <AgeFilter
        from={filters.ageFrom ?? 0}
        to={filters.ageTo ?? 99}
        onChange={(ageFrom, ageTo) =>
          setFilters(f => ({ ...f, ageFrom, ageTo }))
        }
      />

      <MainButton
        className="h-12 mt-4"
        textStyles="text-[14px] xl:text-[16px]"
        onClick={() => onApplyFilters(filters)}
      >
        {t('button')}
      </MainButton>
    </div>
  );
};

export default CatalogFilters;
