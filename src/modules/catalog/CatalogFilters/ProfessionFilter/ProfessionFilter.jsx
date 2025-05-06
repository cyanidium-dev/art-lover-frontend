import Checkbox from '../../../../shared/components/form/Checkbox/Checkbox';

import FilterLayout from '../FilterLayout/FilterLayout';

const ProfessionFilter = ()=> {
  return (
    <FilterLayout title="Професія">
      <Checkbox label="Маркетолог" />
      <Checkbox label="Вчитель" />
      <Checkbox label="Дизайнер" />
      <Checkbox label="Програміст" />
      <Checkbox label="Майстер краси" />
    </FilterLayout>
  )
}

export default ProfessionFilter;
