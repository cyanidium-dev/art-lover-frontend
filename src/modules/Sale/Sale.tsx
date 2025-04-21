import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"
import Product from "@/shared/components/Product/Product"
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers"


const Sale = () => {
    return (
        <div className="py-8">
            <div className="flex flex-col lg:flex-row lg:justify-between">
            <TextTitle text="товари зі знижкою" className="uppercase text-left mb-3 font-medium" />
                <TextSubtitle text="Творчість, яка підкорила серця" className="text-left mb-6 font-normal" fontSize="14px" color="[var(--main-dark-color)]" /></div>
            <ul className="flex gap-4 overflow-auto mb-8" >
                {productItems
                    .filter((item) => item.category === "Sale" || item.category === "sale")
                    .map((item, index) => (
                        <Product key={index} item={item} />

                    ))}

            </ul>

            <SliderControllers prevClass="prev-sale" nextClass="next-sale" />

        </div>
    )
}
export default Sale