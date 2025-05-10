import Image from 'next/image';

const NavbarSearch = () => {
  return (
    <div className="relative min-w-5 xl:min-w-auto min-h-5 xl:min-h-auto">
      <input
        type="text"
        className="hidden xl:block px-[14px] py-[8px] text-[14px] w-[189px] h-[34px] rounded-[20px] border-[1.5px] border-dark"
      />
      <Image
        src="/images/navbar/navbarSearchIcon.svg"
        className="absolute top-0 xl:top-[8px] right-0 xl:right-[11px] size-5"
        alt="background"
        width="20"
        height="20"
      />
    </div>
  );
};

export default NavbarSearch;
