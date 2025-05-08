import DoubleRangeSlider from '../../../../shared/components/form/DoubleRangeSlider/DoubleRangeSlider';

import FilterLayout from '../FilterLayout/FilterLayout';

const PriceFilter = () => {
  return (<FilterLayout title="Ціна">
            <DoubleRangeSlider min={50} max={8000} />
          </FilterLayout>)
}

export default PriceFilter;
