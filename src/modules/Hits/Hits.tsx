import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"
import ButtonOval from "@/shared/components/ButtonOval/ButtonOval"
import Button from "@/shared/components/Button/Button"
import { ShoppingCart } from "lucide-react"
import Product from "@/shared/components/Product/Product"
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers"

type Props = {}
const Hits = (props: Props) => {
    return (
        <div>
            <TextTitle text="хіти продажів " className="uppercase text-left mb-3 font-medium" fontSize="20px" />
            <TextSubtitle text="Творчість, яка підкорила серця" className="text-left font-normal mb-6" fontSize="16px" />
            <ul className="flex gap-4 overflow-auto mb-8" >
                {productItems
                    .filter((item) => item.category === "New" || item.category === "new")
                    .map((item, index) => (
                        <Product key={index} item={item} />

                    ))}

            </ul>

            <SliderControllers />

        </div>
    )
}
export default Hits