import categoryItems from "@/modules/Categories/categoryItems";

import TextTitle from "@/shared/components/TextTitle/TextTitle";

import CategoryItem from "./CategoryItem/CategoryItem";

const Categories = () => {

    return <div className="w-full items-center justify-center ">
        <TextTitle text="КATEГОРІЇ ТОВАРІВ" className="text-center mb-6 font-medium" fontSize="20px" />
        <ul className="flex flex-col gap-4 mb-8 ">
            {categoryItems.map((item, index) => (
                <CategoryItem item={item} index={index} key={item.id} />


            ))}
        </ul>
        <div className="mb-10">
            Btns
        </div>
    </div >
}

export default Categories;
