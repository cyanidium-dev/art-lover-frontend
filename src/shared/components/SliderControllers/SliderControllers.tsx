import { CircleChevronLeft, CircleChevronRight } from "lucide-react"

type Props = {}
const SliderControllers = (props: Props) => {
    return (
        <div className="max-w-[120px] min-h-[72px] relative m-auto mt-8 ">
            <div className=" flex justify-center items-center bottom-0 left-0 right-0 z-20  m-auto text-xs m-width-full">
                <button className="swiper-prev">
                    <CircleChevronLeft stroke="currentColor" />
                </button>
                <div className="swiper-pagination flex ml-2 mr-2"></div>
                <button className="swiper-next">
                    <   CircleChevronRight stroke='currentColor' />
                </button>
            </div>
        </div>
    )
}
export default SliderControllers