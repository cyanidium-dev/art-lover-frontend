'use client'
import Button from "@/shared/components/Button/Button";
import { Heart, MenuIcon, Search, ShoppingCart } from "lucide-react";

type Props = {
    onCartClick: () => void;
};
const NavbarMenu = (props: Props) => {

    return <div className="flex gap-[10px]">
        <Button svg={<Search strokeWidth="1.5" stroke="#3A3A3A" className="h-[20px] lg:h-[34px]" />} />
        <Button svg={<Heart strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" className="h-[20px] lg:h-[34px]" />} />
        <Button onClick={props.onCartClick} svg={<ShoppingCart strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" className="h-[20px] lg:h-[34px]" />} />
        <Button
            svg={<MenuIcon strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" className="h-[20px] lg:h-[34px]" />} />
    </div>
}

export default NavbarMenu;
