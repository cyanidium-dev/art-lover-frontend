import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"
import SwiperProductSlider from "@/shared/components/SwiperProducts/SwiperProducts"


const New = () => {
    // new items
    // just for commit

    return (
        <section className="py-8">
            <div className="flex flex-col gap-[12px]
            mb-[24px]
            lg:flex-row
            lg:justify-between">
                <TextTitle text="наші новинки " className="uppercase text-left font-medium" />
                <TextSubtitle text="Творчість, яка підкорила серця" className="text-left font-normal" fontSize="14px" color="[var(--main-dark-color)]" />
            </div>

            <SwiperProductSlider
                items={productItems
                    .filter(item => item.category.toLowerCase() === "new")
                    .map(({ img, ...rest }) => ({ ...rest, image: img }))}
                prevClass="prev-new"
                nextClass="next-new"
                paginationClass="new-pagination"
            />
        </section>
    )
}
export default New