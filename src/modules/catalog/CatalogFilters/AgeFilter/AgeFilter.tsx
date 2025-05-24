import DoubleRangeSlider from '../../../../shared/components/form/DoubleRangeSlider/DoubleRangeSlider';
import { useTranslations } from 'next-intl';
import FilterLayout from '../FilterLayout/FilterLayout';

const AgeFilter = () => {
  const t = useTranslations('catalogPage.filter');

  return (
    <FilterLayout title={t('age')}>
      <DoubleRangeSlider min={0} max={99} maxSuffix=" +" />
    </FilterLayout>
  );
};

export default AgeFilter;
