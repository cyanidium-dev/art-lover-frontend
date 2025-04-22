import SliderControllers from "@/shared/components/SliderControllers/SliderControllers"
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import reviewsItems from "./reviewsItems"

import ReviewItem from "@/shared/components/ReviewItem/ReviewItem"


const Reviews = () => {
  return (
    <section className="py-8">
      <TextTitle text="відгуки" className="uppercase text-left font-medium mb-[12px]" fontSize="20px" />
      <TextSubtitle text="Враження про наш магазин" className="text-left font-normal mb-[24px]" fontSize="14px" color={"var(--main-dark-color)"} />

      <ul className="flex gap-4 overflow-auto  hide-scrollbar mb-8 py-[1px]" >
              {reviewsItems.map((item) => (
                <ReviewItem item={item} key={item.id} />

                ))}
             
          </ul>
          
      <SliderControllers prevClass="prev-button-class" nextClass="next-button-class" />
    </section>
  )
}
export default Reviews