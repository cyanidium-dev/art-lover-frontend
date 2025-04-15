import Button from "@/shared/components/Button/Button"
import CatalogLogo from "../../../shared/components/CatalogLogo/CatalogLogo"

type Props = {

}
const NavBarCatalog = (props: Props) => {
    return (
        <div className="bg-[var(--main-orange)]"><Button svg={<CatalogLogo />} /></div>
    )
}
export default NavBarCatalog