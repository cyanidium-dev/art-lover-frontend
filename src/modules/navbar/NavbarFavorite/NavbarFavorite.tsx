import HeartIcon from '@/shared/components/icons/HeartIcon';
import Link from 'next/link';

const NavbarFavorite = () => {
  return (
    <Link
      href="/favorites"
      className="cursor-pointer outline-none xl:hover:text-orange focus-visible:text-orange active:scale-95 transition duration-300 ease-in-out"
    >
      <HeartIcon className="size-5 xl:size-[34px]" />
    </Link>
  );
};

export default NavbarFavorite;
