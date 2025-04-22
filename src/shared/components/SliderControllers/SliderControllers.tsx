import { CircleChevronLeft, CircleChevronRight } from "lucide-react"
type Props = {
    prevClass?: string;
    nextClass?: string;
    paginationClass?: string;
};
const SliderControllers = ({ prevClass, nextClass, paginationClass }: Props) => {
    return (
        <div className="max-w-[120px] min-h-[72px] relative mx-auto mt-8">
            <div className="flex justify-center items-center text-xs w-full">
                {/* Prev button */}
                <button
                    className={`${prevClass} swiper-controller flex items-center justify-center bg-transparent transition-colors duration-300 rounded-[10px] cursor-pointer p-2 hover:bg-[var(--main-orange)] hover:text-[var(--main-white)]`}
                >
                    <CircleChevronLeft className="stroke-current" stroke="currentColor" />
                </button>

                {/* Pagination */}
                <div className={`${paginationClass} flex mx-2 justify-center gap-1`} />

                {/* Next button */}
                <button
                    className={`${nextClass} swiper-controller flex items-center justify-center bg-transparent transition-colors duration-300 rounded-[10px] cursor-pointer p-2 hover:bg-[var(--main-orange)] hover:text-[var(--main-white)]`}
                >
                    <CircleChevronRight className="stroke-current" stroke="currentColor" />
                </button>
            </div>
        </div>
    );
};

export default SliderControllers