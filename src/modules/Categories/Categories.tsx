import categoryItems from "@/modules/Categories/categoryItems";
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle";
import TextTitle from "@/shared/components/TextTitle/TextTitle";
import Image from "next/image";

const Categories = () => {
    return <div className="pl-8 pr-8 ">
        <TextTitle text="КATEГОРІЇ ТОВАРІВ" className="text-center mb-8 font-medium" fontSize="20px" />
        {categoryItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center">
                <Image src={item.img} alt={item.text} className="w-1/2 h-auto"
                    width={316} height={150} />
                <TextTitle text={item.text} className="text-center mb-2 font-medium" fontSize="14px" />
                <TextSubtitle text={item.signature} className="text-center mb-8 " fontSize="12px" color="[var(--main-dark-color)] " />
            </div>
        ))}

    </div>
}

export default Categories;
