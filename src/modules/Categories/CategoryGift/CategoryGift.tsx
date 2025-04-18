import CategoryControllers from "../../../shared/components/CategoryControllers/CategoryControllers"
import categoryGifts from '@/assets/categoryGifts.png'
import CategoryBanner from "../../../shared/components/CategoryBanner/CategoryBanner"
import CategorySexFilter from "../../../shared/components/CategorySexFilter/CategorySexFilter"

type Props = {}
const CategoryGift = (props: Props) => {
  return (
    <div className="">
      <CategoryBanner src={categoryGifts} alt="categoryGifts" />
      <CategorySexFilter />
   <CategoryControllers/>
    </div>
  )
}
export default CategoryGift