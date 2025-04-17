import Button from "@/shared/components/Button/Button"
import CatalogLogo from "../../../shared/components/CatalogLogo/CatalogLogo"

type Props = {

}
const NavBarCatalog = (props: Props) => {
    return (
        <div className="bg-[var(--main-orange)] cursor-pointer border-0 rounded-[20px] w-[44px] h-[32px] flex justify-center items-center "><Button svg={<CatalogLogo />} /></div>
    )
}
export default NavBarCatalog