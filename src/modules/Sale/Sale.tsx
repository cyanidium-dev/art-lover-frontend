'use client'
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"

import SwiperProductSlider from "@/shared/components/SwiperProducts/SwiperProducts"


const Sale = () => {
    interface ProductItem {
        id: string;
        name: string;
        img: string;
        price: string;
        category: string;
    }

    interface SaleItem {
        id: string;
        name: string;
        image: string;
        price: string;
        img: string;
    }

    const saleItems: SaleItem[] = productItems
        .filter((item: ProductItem) => item.category.toLowerCase() === "sale")
        .map((item: ProductItem) => ({
            id: item.id,
            name: item.name,
            image: item.img,
            price: parseFloat(item.price).toString(),
            img: item.img,
        }));
    console.log(saleItems)
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