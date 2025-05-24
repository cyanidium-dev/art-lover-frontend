import DoubleRangeSlider from '../../../../shared/components/form/DoubleRangeSlider/DoubleRangeSlider';
import { useTranslations } from 'next-intl';

import FilterLayout from '../FilterLayout/FilterLayout';

const PriceFilter = () => {
  const t = useTranslations('catalogPage.filter');

  return (
    <FilterLayout title={t('price')}>
      <DoubleRangeSlider min={50} max={8000} />
    </FilterLayout>
  );
};

export default PriceFilter;
