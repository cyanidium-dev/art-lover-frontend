import DoubleRangeSlider from '../../../../shared/components/form/DoubleRangeSlider/DoubleRangeSlider';

import FilterLayout from '../FilterLayout/FilterLayout';

const AgeFilter = () => {
  return (
    <FilterLayout title="Вік">
      <DoubleRangeSlider min={0} max={99} />
    </FilterLayout>
  )
}

export default AgeFilter;
