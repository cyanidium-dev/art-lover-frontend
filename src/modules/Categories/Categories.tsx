import categoryItems from "@/modules/Categories/categoryItems";
import EllipseBackground from "@/shared/components/ElipseBackground/EllipseBackground";
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle";
import TextTitle from "@/shared/components/TextTitle/TextTitle";
import Image from "next/image";

const Categories = () => {
    return <div className="w-full items-center justify-center">
        <TextTitle text="КATEГОРІЇ ТОВАРІВ" className="text-center mb-8 font-medium" fontSize="20px" />
        <ul className="flex flex-col gap-4 ">
            {categoryItems.map((item, index) => (


                <li
                    key={item.id}
                    className={`flex h-[100px] w-full max-w-4xl overflow-hidden rounded-lg border border-[var(--main-dark-color)] ${index % 2 === 0
                        ? 'bg-[var(--main-dark-color)] text-white flex-row-reverse'
                        : 'bg-amber-100 text-black flex-row'
                        }`}
                >
                    <EllipseBackground
                        className="absolute pointer-events-none"
                        fill={index % 2 === 0 ? '#545454' : '#D88164'}
                        width={180}
                        height={100}
                    />
                    <div
                        className="w-[120px] h-[100px] bg-no-repeat bg-bottom bg-auto border-2 border-red-600"
                        style={{ backgroundImage: `url(${item.img})` }}
                    >


                    </div>


                    <div className="overflow-hidden flex flex-col justify-center">
                        <TextTitle text={item.text} className="flex text-center mb-2 font-medium" fontSize="14px" />
                        <TextSubtitle text={item.signature} className="flex text-center" fontSize="12px" color="[var(--main-dark-color)] " />
                    </div>
                </li>
            ))}
        </ul>
    </div >
}

export default Categories;
