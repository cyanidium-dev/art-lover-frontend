import Image from 'next/image';
import Link from 'next/link';

const NavbarFavorite = () => {
  return (
    <Link href="/favorites">
      <Image
        src="/images/navbar/navbarFavoriteIcon.svg"
        alt="background"
        width="28"
        height="24"
        className="hidden xl:block"
      />
      <Image
        src="/images/navbar/navbarFavoriteIcon.svg"
        alt="background"
        width="15"
        height="13"
        className="xl:hidden"
      />
    </Link>
  )
}

export default NavbarFavorite;
