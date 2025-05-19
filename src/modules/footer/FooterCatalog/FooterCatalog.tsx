import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

import items from './items';

import FooterColumn from '../FooterColumn/FooterColumn';

const FooterCatalog = () => {
  const t = useTranslations('footer');

  const elements = items.map(({ href, text }) => (
    <li key={text} className="mb-[16px] xl:mb-[20px]">
      <Link
        href={href}
        className="text-white text-[14px] font-normal leading-[120%] xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <FooterColumn title={t('catalog')}>
      <ul>{elements}</ul>
    </FooterColumn>
  );
};

export default FooterCatalog;
