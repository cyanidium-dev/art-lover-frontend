
'use client'
import EllipseBackground from "@/shared/components/ElipseBackground/EllipseBackground"
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import { useRouter } from "next/navigation"

type Props = {
    item: {
        id: string
        img: string
        text: string
        signature: string
        path?: string
        slug?: string
    }
    index: number
    className?: string
}
const CategoryItem = (props: Props) => {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/catalog/${props.item.slug}`);
    };

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





    return (
        <li
            onClick={handleClick}
            key={props.item.id}
            className={`${props.className} cursor-pointer relative overflow-hidden rounded-lg border border-[var(--main-dark-color)] ${props.index % 2 === 0
                ? 'bg-[var(--main-dark-color)] text-white flex-row-reverse'
                : 'bg-white text-black flex-row'
                }`


            }
        >
            <EllipseBackground
                className={`absolute opacity-90 pointer-events-none ${ellipsePositions[props.index] || ''}`}
                fill={ellipseFills[props.index] || '#D88164'}
                width={188}
                height={101}

            />



            <div
                className="relative w-[120px] h-[100px] bg-no-repeat bg-bottom bg-auto shrink-0 "
                style={{ backgroundImage: `url(${props.item.img})` }}
            >
            </div>


            <div className={` flex flex-col justify-center z-30 `}>


                <h3 className={`absolute flex text-center mb-2 font-medium uppercase text text-[14px]  ${textPositions[props.index] || ''}`}>
                    {props.item.text}
                </h3>
                <TextSubtitle text={props.item.signature} className={`absolute flex text-center ${subtitlePositions[props.index] || ''}`} fontSize="12px"
                    color={props.index % 2 === 0 ? 'white' : 'black'} />


                {/* <TextSubtitle text={props.item.signature} className={`absolute flex text-center ${subtitlePositions[props.index] || ''}`} fontSize="12px"
                
                /> */}
            </div>
        </li>
    )
}
export default CategoryItem