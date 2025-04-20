'use client'

import Logo from "@/shared/components/Logo/Logo";
import NavbarMenu from "@/modules/Navbar/NavbarMenu/NavbarMenu";
import NavBarCatalog from "./NavbarMenu/NavBarCatalog";
import { useState } from "react";
import Basket from "../Basket/Basket";
import basketItems from "../Basket/itemsInBasket";
import Link from "next/link";
import MobileCatalog from "../MobileCatalog/MobileCatalog";

const Navbar = () => {
    const [basketOpen, setBasketOpen] = useState(false);
    const [catalogOpen, setCatalogOpen] = useState(false);

    const openBasket = () => {
        setBasketOpen(true);
    }
    const openCatalog = () => setCatalogOpen(true);

    return (
        <nav>
            <div className="wrapper flex justify-between items-center py-8">

                <NavBarCatalog onCatalogClick={openCatalog} />
                <Link href="/" className="inline-block">
                    <Logo />
                </Link>

                {catalogOpen && (<MobileCatalog open={catalogOpen} onClose={() => setCatalogOpen(false)} />
                )}


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
