import Image from "next/image"
import CategoryControllers from "../CategoryControllers/CategoryControllers"
import categoryGifts from '@/assets/categoryGifts.png'

type Props = {}
const CategoryGift = (props: Props) => {
  return (
    <div className="">
      <Image
        src={categoryGifts}
        alt="categoryGifts"
        priority
        width={0}
        height={0}
        sizes="100vw"
      />
      
      
      
   <CategoryControllers/>
    </div>
  )
}
export default CategoryGift