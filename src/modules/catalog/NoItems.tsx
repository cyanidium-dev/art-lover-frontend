import { useTranslations } from 'next-intl';

export default function NoItems() {
  const t = useTranslations('catalogPage');
  return (
    <p className="py-25 text-[14px] xl:text-[18px] text-light leading-[120%] text-center text-gray-light">
      {t('noItems')}
    </p>
  );
}
