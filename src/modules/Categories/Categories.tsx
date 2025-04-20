import categoryItems from "@/modules/Categories/categoryItems";

import TextTitle from "@/shared/components/TextTitle/TextTitle";

import CategoryItem from "./CategoryItem/CategoryItem";
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers";

const Categories = () => {

    return (
        <div className="w-full items-center justify-center py-8">
            <TextTitle text="КATEГОРІЇ ТОВАРІВ" className="text-center mb-6 font-medium" fontSize="20px" />
            <ul className="flex flex-col gap-2 mb-8 max-w-[1280px] mx-auto sm:grid sm:grid-cols-2 sm:gap-4 xl:flex xl:flex-col">
                {categoryItems.map((item, index) => (
                    <CategoryItem item={item} index={index} key={item.id} />
                ))}
            </ul>
            <SliderControllers />
        </div>
    );
}

export default Categories;

