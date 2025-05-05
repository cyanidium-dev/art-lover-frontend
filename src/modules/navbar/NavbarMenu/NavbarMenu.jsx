import Link from "next/link";

const NavbarMenu = ()=> {
  return (<ul className="hidden lg:flex gap-[15px]">
    <li>
      <Link href="/about" className="text-[16px]">Про нас</Link>
    </li>
    <li>
      <Link href="/blog" className="text-[16px]">Блог</Link>
    </li>
    <li>
      <Link href="/contacts" className="text-[16px]">Контакти</Link>
    </li>
    <li>
      <Link href="/delivery" className="text-[16px]">Оплата та доставка</Link>
    </li>
  </ul>)
}

export default NavbarMenu;
