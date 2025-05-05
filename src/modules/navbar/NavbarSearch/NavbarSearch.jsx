import Image from 'next/image';

const NavbarSearch = ()=> {
  return (
    <div className="relative min-w-[16px] xl:min-w-auto min-h-[16px] xl:min-h-auto">
      <input type="text" className="hidden xl:block px-[14px] py-[8px] text-[14px] w-[189px] h-[34px] rounded-[20px] border-[1.5px] border-[#3A3A3A]" />
      <Image
        src="/images/navbar/navbarSearchIcon.svg"
        className="absolute top-0 xl:top-[9px] right-0 xl:right-[11px]"
        alt="background"
        width="16"
        height="16"
      />
    </div>
  )
}

export default NavbarSearch;
