import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"
import Product from "@/shared/components/Product/Product"
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers"


const Sale = () => {
    return (
        <section className="py-8">
            <div className="flex flex-col gap-[12px]
            mb-[24px]
            lg:flex-row
            lg:justify-between">
                <TextTitle text="товари зі знижкою" className="uppercase text-left font-medium text-[14px]" />
                <TextSubtitle text="Творчість, яка підкорила серця" className="text-left font-normal" fontSize="14px" color="[var(--main-dark-color)]" />
            </div>
            <ul
                className="flex gap-4 overflow-x-auto mb-8 py-[2px] hide-scrollbar"
            >
                {productItems
                    .filter((item) => item.category === "Sale" || item.category === "sale")
                    .map((item, index) => (
                        <Product key={index} item={item} />

                    ))}

            </ul>

            <SliderControllers prevClass="prev-sale" nextClass="next-sale" />

        </section>
    )
}
export default Sale