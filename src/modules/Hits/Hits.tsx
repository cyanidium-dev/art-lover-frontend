'use client'
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"

import "swiper/css";
import "swiper/css/navigation";

import SwiperProductSlider from "@/shared/components/SwiperProducts/SwiperProducts"



// const Hits = () => {

//     return (

//         <section className="py-8">
//             <div className="flex flex-col gap-[12px]
//             mb-[24px]
//             lg:flex-row lg:justify-between">
//                 <TextTitle text="хіти продажів " className="uppercase text-left font-medium" />
//                 <TextSubtitle text="Творчість, яка підкорила серця" className="text-left font-normal" fontSize="14px" color="[var(--main-dark-color)]" />
//             </div>
//             <ul
//                 className="flex gap-4 overflow-x-auto mb-8 py-[2px] hide-scrollbar"
//             >
//                 {productItems
//                     .filter((item) => item.category === "New" || item.category === "new")
//                     .map((item, index) => (
//                         <Product key={index} item={item} />
//                     ))}
//             </ul>


//             <SliderControllers
//                 prevClass="prev-hits"
//                 nextClass="next-hits"

//             />

//         </section>
//     )
// }
// export default Hits
const Hits = () => {
    const hits = productItems.filter(item => item.category.toLowerCase() === "new");

    return (
        <section className="py-8">
            <div className="flex flex-col gap-[12px]
            mb-[24px]
            lg:flex-row
            lg:justify-between">
                <TextTitle
                    text="хіти продажів "
                    className="uppercase text-left font-medium"
                />
                <TextSubtitle
                    text="Творчість, яка підкорила серця"
                    className="text-left font-normal"
                    fontSize="14px"
                    color="[var(--main-dark-color)]"
                />
            </div>
            <SwiperProductSlider

                items={hits.map(({ img, ...rest }) => ({ ...rest, image: img }))}
                prevClass="prev-hits"
                nextClass="next-hits"
                paginationClass="hits-pagination"
            />



        </section>
    );
};
export default Hits