'use client'

import Logo from "@/shared/components/Logo/Logo";
import NavbarMenu from "@/modules/Navbar/NavbarMenu/NavbarMenu";
import NavBarCatalog from "./NavbarMenu/NavBarCatalog";
import { useState } from "react";
import Basket from "../Basket/Basket";

import Link from "next/link";
import MobileCatalog from "../MobileCatalog/MobileCatalog";
import { AnimatePresence } from "framer-motion";

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

                <Link href="/" className=" hidden lg:block">
                    <Logo />
                </Link>
                <NavBarCatalog onCatalogClick={openCatalog} />
                <Link href="/" className="inline-block lg:hidden">
                    <Logo />
                </Link>


                <NavbarMenu onCartClick={openBasket} />



                <AnimatePresence>{catalogOpen && (<MobileCatalog open={catalogOpen} onClose={() => setCatalogOpen(false)} />
                )}
                </AnimatePresence>



                <AnimatePresence>
                {basketOpen && (
                        <Basket
                        open={basketOpen}
                        onClose={() => setBasketOpen(false)}
                    />
                    )}</AnimatePresence>


            </div>
        </nav>
    )
}

export default Navbar;
