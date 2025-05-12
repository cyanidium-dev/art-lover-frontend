import Link from 'next/link';
import Image from 'next/image';

const NavbarCatalog = () => {
  return (
    <Link href="/catalog">
      <button
        className="cursor-pointer justify-center xl:justify-start bg-orange xl:hover:brightness-125 focus-visible:brightness-125 rounded-[20px] 
      xl:px-[27px] h-[32px] xl:h-[46px] w-[44px] xl:w-[220px] flex items-center gap-[32px] transition duration-300 ease-in-out"
      >
        <Image
          src="/images/navbar/catalogIcon.svg"
          alt="background"
          width="14"
          height="12"
        />
        <span className="text-[16px] font-semibold text-white hidden xl:block">
          Каталог
        </span>
      </button>
    </Link>
  );
};

export default NavbarCatalog;
