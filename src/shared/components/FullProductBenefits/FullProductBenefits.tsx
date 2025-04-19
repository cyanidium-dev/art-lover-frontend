import { AwardIcon, Gift, LucideTruck } from "lucide-react"

type Props = {}
const FullProductBenefits = (props: Props) => {
    return (
        < div className="flex flex-col w-full justify-between border rounded-lg text-[14px]" >
                <div className="flex items-center gap-4 p-3 border-b  border-b-[var(--main-orange)]">
                    <LucideTruck size={24} />
                    Швидка доставка
                </div>
            <div className="flex items-center gap-4 p-3 border-b  border-b-[var(--main-orange)]">
                    <AwardIcon size={24} />
                    Висока якість
                </div>
                <div className="flex items-center gap-4 p-3">
                    <Gift size={24} />
                    Відмінний подарунок
                </div>
            </div >
          
  )
}
export default FullProductBenefits