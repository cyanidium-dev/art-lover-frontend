import Checkbox from '../../../../shared/components/form/Checkbox/Checkbox';

import FilterLayout from '../FilterLayout/FilterLayout';

const TypeFilters = ()=> {
  return (
    <FilterLayout>
      <Checkbox label="Актуальні знижки" />
      <Checkbox label="Новинки" />
    </FilterLayout>
  )
}

export default TypeFilters;
