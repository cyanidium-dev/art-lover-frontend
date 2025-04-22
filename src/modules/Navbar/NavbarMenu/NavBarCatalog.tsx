import CatalogLogo from "../../../shared/components/CatalogLogo/CatalogLogo"

type Props = {
    onCatalogClick: () => void;
};
const NavBarCatalog = (props: Props) => {

    return (


        <button
            onClick={props.onCatalogClick}
            className="bg-[var(--main-orange)] cursor-pointer rounded-[20px] 
            px-2 h-[32px] w-[44px] flex justify-center items-center text-white text-[12px] font-medium
             lg:px-6 lg:h-[46px] lg:text-[16px] lg:w-[264px] lg:gap-4"
        >

            <span className="block">
                <CatalogLogo className="h-[20px]  " />
            </span>


            <span className="hidden lg:block">Каталог</span>
        </button>


    )
}
export default NavBarCatalog