import { Share, Share2Icon } from "lucide-react"
import Button from "../Button/Button"
import TextTitle from "../TextTitle/TextTitle"

const Hint = () => {
  return (
<div className="flex bg-[var(--main-dark-color)] text-white  rounded-lg p-4  shadow">
          <div className="flex-3 mb-2" >
              <TextTitle text="Відправити натяк" className="text-[14px] font-medium uppercase mb-1" />
                <p className="text-[10px] font-light text-wrap">Відправ посилання по коханим/друзям</p>
          </div>
          <div className="flex-2    flex justify-end items-center">
          <Button className="bg-white text-[var(--main-orange)]  text-[12px] font-semibold rounded-md h-[44px] w-[44px]" svg={<Share2Icon/>}   />
   </div>
</div>
  )
}
export default Hint


