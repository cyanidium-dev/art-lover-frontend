import Link from 'next/link';

import items from './items';

import FooterColumn from '../FooterColumn/FooterColumn';

const FooterCatalog = () => {
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
    <FooterColumn title="Каталог">
      <ul>{elements}</ul>
    </FooterColumn>
  );
};

export default FooterCatalog;
