import SliderControllers from "@/shared/components/SliderControllers/SliderControllers"
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import reviewsItems from "./reviewsItems"
import Image from "next/image"
import { Star, StarsIcon } from "lucide-react"
import ReviewItem from "@/shared/components/ReviewItem/ReviewItem"

type Props = {}
const Reviews = (props: Props) => {
  return (
      <div className="py-8">
          <TextTitle text="відгуки" className="uppercase text-left mb-3 font-medium" fontSize="20px" />
          <TextSubtitle text="Враження про наш магазин" className="text-left mb-6 font-normal" fontSize="14px" />

          <ul className="flex gap-4 overflow-auto mb-8" >
              {reviewsItems.map((item) => (
                <ReviewItem item={item} key={item.id} />

                ))}
             
          </ul>
          
      <SliderControllers prevClass="prev-button-class" nextClass="next-button-class" />
      </div>
  )
}
export default Reviews