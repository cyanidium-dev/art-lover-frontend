import Checkbox from '../../../../shared/components/form/Checkbox/Checkbox';
import { useTranslations } from 'next-intl';

import FilterLayout from '../FilterLayout/FilterLayout';

const ProfessionFilter = () => {
  const t = useTranslations('catalogPage.filter');

  return (
    <FilterLayout title={t('profession')}>
      <Checkbox label={t('professionsOptions.marketer')} />
      <Checkbox label={t('professionsOptions.teacher')} />
      <Checkbox label={t('professionsOptions.designer')} />
      <Checkbox label={t('professionsOptions.programmer')} />
      <Checkbox label={t('professionsOptions.beauty')} />
    </FilterLayout>
  );
};

export default ProfessionFilter;
