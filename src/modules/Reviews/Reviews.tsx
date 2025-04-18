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
                //   <li key={item.id} className="w-[200px] h-[358px] flex flex-col gap-3 items-left rounded-md bg-white shadow-lg p-[12px] border-1 border-transparent">
                //       <div className="w-[176px] h-[85px] rounded-md">
                //       <Image src={item.img} alt={item.name} className="object-cover w-full"
                //               width={176} height={85} />
                //       </div>
                //       <div className="">
                //           <p className="text-[12px] font-normal text-left">Товар:</p>
                //           <p className="text-[14px] font-medium text-left">{item.product}</p>
                //       </div>
                //       <div className="max-h-[145px] overflow-auto">
                //           <p className="font-normal text-[12px] text-left  leading-tight">"{item.comment}"</p>

                //       </div>

                //       <div className="flex gap-1 items-center">
                //           {Array.from({ length: item.rating }, (_, index) => (
                //               <span key={index} ><Star height={20} width={20} fill="var(--main-orange)" stroke="var(--main-orange)" /></span>
                //           ))}
                //       </div>
                      
                //       <div className="flex gap-2 ">
                //           <TextSubtitle text={item.name} className="text-left font-normal" fontSize="20px" />
                //           <p className="font-normal text-[12px] text-left">{item.date }</p>
                         
                //       </div>
                       
                //   </li>
                ))}
             
          </ul>
          
      <SliderControllers prevClass="prev-button-class" nextClass="next-button-class" />
      </div>
  )
}
export default Reviews