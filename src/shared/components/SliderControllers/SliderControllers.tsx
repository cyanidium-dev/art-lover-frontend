import { CircleChevronLeft, CircleChevronRight } from "lucide-react"
type Props = {
    prevClass?: string;
    nextClass?: string;
    paginationClass?: string;
};
const SliderControllers = ({ prevClass, nextClass, paginationClass }: Props) => {
    return (
        <div className="max-w-[120px] min-h-[72px] relative m-auto mt-8 ">
            <div className=" flex justify-center items-center bottom-0 left-0 right-0 z-20  m-auto text-xs m-width-full">
                <button
                    className={`${prevClass} swiper-controller flex item-center justify-center bg-transparent transition-colors duration-300  rounded-[10px] cursor-pointer p-2  hover:bg-[var(--main-orange)] hover:text-[var(--main-white)]`}
                >
                    <CircleChevronLeft className="stroke-current" stroke="currentColor" />
                </button >
                <div className={`${paginationClass} flex ml-2 mr-2`}></div>
                <button
                    className={`${nextClass} swiper-controller flex item-center justify-center bg-transparent transition-colors duration-300  rounded-[10px] cursor-pointer p-2  hover:bg-[var(--main-orange)] hover:text-[var(--main-white)]`}
                >
                    <CircleChevronRight className="stroke-current" stroke="currentColor" />
                </button>
            </div>
        </div>
    )
}
export default SliderControllers