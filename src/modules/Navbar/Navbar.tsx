import Logo from "@/shared/components/Logo/Logo";
import NavbarMenu from "@/modules/Navbar/NavbarMenu/NavbarMenu";

const Navbar = ()=> {
    return (
        <nav>
            <div className="container">
                <div className="wrapper">
                    <Logo />
                    <NavbarMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
