'use client'
import Image from "next/image"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { imagesList } from "./imagesList"
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination } from 'swiper/modules';
import Logo from "@/shared/components/Logo/Logo";
import LogoSymbol from "@/shared/components/LogoSymbol/LogoSymbol";
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle";
import TextTitle from "@/shared/components/TextTitle/TextTitle";

type Props = {}
const HeaderSlider = (props: Props) => {

    return (
        <div className="relative ">
            <Swiper
                modules={[Navigation, Pagination]}
                className="w-full"

                slidesPerView={1}
                loop={true}
                navigation={



                    {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',

                    }
                }
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',

                    renderBullet: (index, className) =>
                        `<span class="${className} custom-bullet">${index + 1}</span>`,
                }}




            >
                {imagesList.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[640px] bg-[var(--main-dark-color)] ">
                            <Image
                                className="object-top mb-16"
                                src={image.src}
                                alt={`Slider ${index + 1}`}
                                width={360}
                                height={316}
                            />

                            <TextSubtitle text={'Створи шедевр вже сьогодні!'} className="mb-8 p-1" />

                            <TextTitle text={image.description} fontSize="12px" className="mb-8 max-w-40 font-light text-white text-balance p-1 " />

                            <TextTitle text="ТВОЯ ТВОРЧІСТЬ ПОЧИНАЄТЬСЯ ТУТ!" fontSize="16px" className="text-white max-w-44 text-balance p-1 m-auto text-center" />

                        </div>
                        <div className="min-h-[72px] flex justify-center">
                        </div>

                    </SwiperSlide>
                ))}


            </Swiper>
            <div className=" flex justify-center items-center absolute bottom-0 left-0 right-0 z-20  py-2 max-w-[120px] m-auto min-h-[72px] bg-blue-500 text-xs">
                <div className="swiper-button-prev cursor-pointer "></div>
                <div className="swiper-pagination flex gap-2 "></div>
                <div className="swiper-button-next text-white cursor-pointer"></div>
            </div>

            <LogoSymbol
                fill="#FFFFFF"
                width={171}
                height={145}
                className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />

        </div >
    )
}
export default HeaderSlider