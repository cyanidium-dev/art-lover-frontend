'use client'
import Button from "@/shared/components/Button/Button";
import { Heart, MenuIcon, Search, ShoppingCart } from "lucide-react";

type Props = {
    onCartClick: () => void;
};
const NavbarMenu = (props: Props) => {

    return <div className="flex gap-1">
        <Button className="  " svg={<Search width={20} height={20} strokeWidth="1.5" stroke="#3A3A3A" />} />
        <Button svg={<Heart width={20} height={20} strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" />} />
        <Button onClick={props.onCartClick} svg={<ShoppingCart width={20} height={20} strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" />} />
        <Button
            svg={<MenuIcon width={20} height={20} strokeWidth="1.5" fill="#3A3A3A" stroke="#3A3A3A" />} />
    </div>
}

export default NavbarMenu;
