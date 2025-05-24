import Checkbox from '../../../../shared/components/form/Checkbox/Checkbox';
import { useTranslations } from 'next-intl';
import FilterLayout from '../FilterLayout/FilterLayout';

interface ProfessionFilterProps {
  value: string[];
  onChange: (selected: string[]) => void;
}

const professions = ['marketer', 'teacher', 'designer', 'programmer', 'beauty'];

const ProfessionFilter = ({ value, onChange }: ProfessionFilterProps) => {
  const t = useTranslations('catalogPage.filter');

  const toggleProfession = (profession: string) => {
    if (value.includes(profession)) {
      onChange(value.filter(p => p !== profession));
    } else {
      onChange([...value, profession]);
    }
  };

  return (
    <FilterLayout title={t('profession')}>
      {professions.map(profession => (
        <Checkbox
          key={profession}
          label={t(`professionsOptions.${profession}`)}
          checked={value.includes(profession)}
          onChange={() => toggleProfession(profession)}
        />
      ))}
    </FilterLayout>
  );
};

export default ProfessionFilter;
