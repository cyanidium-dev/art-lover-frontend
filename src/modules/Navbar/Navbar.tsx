import Logo from "@/shared/components/Logo/Logo";
import NavbarMenu from "@/modules/Navbar/NavbarMenu/NavbarMenu";
import Button from "@/shared/components/Button/Button";
import NavBarCatalog from "./NavbarMenu/NavBarCatalog";

const Navbar = () => {
    return (
        <nav>
            <div className="container px-8">
                <div className="wrapper flex justify-between items-center py-8">

                    <NavBarCatalog />
                    <Logo />
                    <NavbarMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
