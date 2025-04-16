import categoryItems from "@/modules/Categories/categoryItems";
import EllipseBackground from "@/shared/components/ElipseBackground/EllipseBackground";
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle";
import TextTitle from "@/shared/components/TextTitle/TextTitle";
import Image from "next/image";

const Categories = () => {

    const ellipsePositions = [
        '-top-5 -left-3',
        '-bottom-5 -left-3',
        '-bottom-4 -right-2',
        '-bottom-4 -left-5',
        '-bottom-8 -left-8',
    ]

    const ellipseFills = [
        '#545454',
        '#D88164',
        '#D88164',
        '#D88164',
        '#545454',
    ]


    const textPositions = [
        'top-2 left-4',
        'bottom-2 right-4',
        'top-1 left-1 ',
        'bottom-3 right-3',
        '-bottom-0 left-5',
    ]

    const subtitlePositions = [
        'top-1/2 left-20',
        'bottom-1/2 right-4',
        'top-1/2 left-20 ',
        'bottom-1/2 right-3',
        'bottom-1/2 left-1/3',
    ]

    return <div className="w-full items-center justify-center">
        <TextTitle text="КATEГОРІЇ ТОВАРІВ" className="text-center mb-8 font-medium" fontSize="20px" />
        <ul className="flex flex-col gap-4 ">
            {categoryItems.map((item, index) => (


                <li
                    key={item.id}
                    className={`relative flex h-[100px] w-full max-w-4xl overflow-hidden rounded-lg border border-[var(--main-dark-color)] ${index % 2 === 0
                        ? 'bg-[var(--main-dark-color)] text-white flex-row-reverse'
                        : 'bg-white text-black flex-row'
                        }`


                    }
                >
                    <EllipseBackground
                        className={`absolute opacity-90 pointer-events-none ${ellipsePositions[index] || ''}`}
                        fill={ellipseFills[index] || '#D88164'}
                        width={188}
                        height={101}

                    />



                    <div
                        className="relative w-[120px] h-[100px] bg-no-repeat bg-bottom bg-auto shrink-0 "
                        style={{ backgroundImage: `url(${item.img})` }}
                    >
                    </div>


                    <div className={` flex flex-col justify-center z-30 `}>
                        <TextTitle text={item.text} className={`absolute flex text-center mb-2 font-medium uppercase  ${textPositions[index] || ''}`} fontSize="14px" />
                        <TextSubtitle text={item.signature} className={`absolute flex text-center ${subtitlePositions[index] || ''}`} fontSize="12px" />
                    </div>
                </li>
            ))}
        </ul>
    </div >
}

export default Categories;
