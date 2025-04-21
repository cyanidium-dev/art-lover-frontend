import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"

import Product from "@/shared/components/Product/Product"
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers"



const Hits = () => {
    return (

        <div className="py-8">
            <TextTitle text="хіти продажів " className="uppercase text-left mb-3 font-medium" />
            <TextSubtitle text="Творчість, яка підкорила серця" className="text-left font-normal mb-6" fontSize="14px" />


            <ul className="flex gap-4 overflow-auto mb-8" >
                {productItems
                    .filter((item) => item.category === "New" || item.category === "new")
                    .map((item, index) => (
                        <Product key={index} item={item} />

                    ))}

            </ul>


            <SliderControllers
                prevClass="prev-hits"
                nextClass="next-hits"

            />

        </div>
    )
}
export default Hits