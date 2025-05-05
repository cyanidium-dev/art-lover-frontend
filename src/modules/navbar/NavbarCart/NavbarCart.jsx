import Link from 'next/link';
import Image from 'next/image';

const NavbarCart = () => {
  return (
    <Link href="/cart">
      <Image
        src="/images/navbar/navbarCartIcon.svg"
        alt="background"
        width="28"
        height="28"
        className="hidden xl:block"
      />
      <Image
        src="/images/navbar/navbarCartIcon.svg"
        alt="background"
        width="15"
        height="15"
        className="xl:hidden"
      />
    </Link>
  )
}

export default NavbarCart;
