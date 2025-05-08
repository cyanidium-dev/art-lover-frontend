import Link from 'next/link';

import items from './items';

import FooterColumn from '../FooterColumn/FooterColumn';

const FooterCatalog = () => {
  const elements = items.map(({ href, text }) => (
    <li key={text} className="mb-[16px] xl:mb-[20px]">
      <Link href={href} className="text-white text-[14px]">
        {text}
      </Link>
    </li>
  ));

  return (
    <FooterColumn title="Каталог">
      <ul>{elements}</ul>
    </FooterColumn>
  );
};

export default FooterCatalog;
