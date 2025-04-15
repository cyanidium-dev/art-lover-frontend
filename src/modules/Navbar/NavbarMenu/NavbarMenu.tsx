import Button from "@/shared/components/Button/Button";
import { Heart, MenuIcon, Search, SearchCheck, SearchCodeIcon, ShoppingCart } from "lucide-react";


const NavbarMenu = () => {
    return <div className="">






        <Button className=" cursor-pointer border-0 rounded-sm " svg={<Search width={20} height={20} strokeWidth="1.5" stroke="#3A3A3A" />} />
        <Button svg={<Heart width={20} height={20} strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" />} />
        <Button svg={<ShoppingCart width={20} height={20} strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" />} />
        <Button svg={<MenuIcon width={20} height={20} strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" />} />


    </div>
}

export default NavbarMenu;
