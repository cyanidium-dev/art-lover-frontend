'use client'
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"

import SwiperProductSlider from "@/shared/components/SwiperProducts/SwiperProducts"


const Sale = () => {



    const saleItems = productItems
        .filter(item => item.category.toLowerCase() === "sale")
        .map(({ id, img, name, price }) => ({ id, image: img, name, price }));

    return (
        <section className="py-8">
            <div className="flex flex-col gap-[12px]
            mb-[24px]
            lg:flex-row
            lg:justify-between">
                <TextTitle text="товари зі знижкою" className="uppercase text-left font-medium text-[14px]" />
                <TextSubtitle text="Творчість, яка підкорила серця" className="text-left font-normal" fontSize="14px" color="[var(--main-dark-color)]" />
            </div>
            <SwiperProductSlider

                items={saleItems}
                prevClass="prev-sale"
                nextClass="next-sale"
                paginationClass="sale-pagination"
            />


        </section>
    )
}
export default Sale