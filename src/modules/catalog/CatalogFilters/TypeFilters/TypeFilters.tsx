import Checkbox from '../../../../shared/components/form/Checkbox/Checkbox';
import { useTranslations } from 'next-intl';

import FilterLayout from '../FilterLayout/FilterLayout';

const TypeFilters = () => {
  const t = useTranslations('catalogPage.filter');

  return (
    <FilterLayout>
      <Checkbox label={t('discounts')} />
      <Checkbox label={t('newProducts')} />
    </FilterLayout>
  );
};

export default TypeFilters;
