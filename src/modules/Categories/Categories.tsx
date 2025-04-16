import categoryItems from "@/modules/Categories/categoryItems";
import EllipseBackground from "@/shared/components/ElipseBackground/EllipseBackground";
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle";
import TextTitle from "@/shared/components/TextTitle/TextTitle";
import Image from "next/image";
import CategoryItem from "./CategoryItem/CategoryItem";

const Categories = () => {

    return <div className="w-full items-center justify-center">
        <TextTitle text="КATEГОРІЇ ТОВАРІВ" className="text-center mb-8 font-medium" fontSize="20px" />
        <ul className="flex flex-col gap-4 ">
            {categoryItems.map((item, index) => (
                <CategoryItem item={item} index={index} key={item.id} />


            ))}
        </ul>
    </div >
}

export default Categories;
