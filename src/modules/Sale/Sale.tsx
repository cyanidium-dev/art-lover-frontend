import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"

type Props = {}
const Sale = (props: Props) => {
    return (
        <div>
            <TextTitle text="товари зі знижкою" className="uppercase text-left mb-3 font-medium" fontSize="20px" />
            <TextSubtitle text="Творчість, яка підкорила серця" className="text-left mb-6 font-normal" fontSize="16px" />

        </div>
    )
}
export default Sale