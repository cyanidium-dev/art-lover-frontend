import TypeFilters from './TypeFilters/TypeFilters';
import PriceFilter from './PriceFilter/PriceFilter';
import ProfessionFilter from './ProfessionFilter/ProfessionFilter';
import AgeFilter from './AgeFilter/AgeFilter';

const CatalogFilters = () => {
  return (
    <div className="hidden lg:block w-full lg:w-1/4 rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] px-[20px] py-[32px]">
      <TypeFilters />
      <PriceFilter />
      <ProfessionFilter />
      <AgeFilter />
    </div>
  );
};

export default CatalogFilters;
