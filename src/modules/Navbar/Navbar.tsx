'use client'

import Logo from "@/shared/components/Logo/Logo";
import NavbarMenu from "@/modules/Navbar/NavbarMenu/NavbarMenu";
import NavBarCatalog from "./NavbarMenu/NavBarCatalog";
import { useState } from "react";
import Basket from "../Basket/Basket";
import basketItems from "../Basket/itemsInBasket";

const Navbar = () => {
    const [basketOpen, setBasketOpen] = useState(false);
    const openBasket = () => {
        setBasketOpen(true);
    }

    return (
        <nav>
            <div className="wrapper flex justify-between items-center py-8">

                <NavBarCatalog />
                <Logo />
                <NavbarMenu onCartClick={openBasket} />
                {basketOpen && (
                    <Basket

                        open={basketOpen}
                        onClose={() => setBasketOpen(false)}
                    />
                )}

            </div>
        </nav>
    )
}

export default Navbar;
