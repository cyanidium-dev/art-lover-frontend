'use client'
import Image from "next/image"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { imagesList } from "./imagesList"
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination } from 'swiper/modules';
import LogoSymbol from "@/shared/components/LogoSymbol/LogoSymbol";
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle";
import TextTitle from "@/shared/components/TextTitle/TextTitle";
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers";

type Props = {}
const HeaderSlider = (props: Props) => {

    return (

        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination]}
                className="w-full"

                slidesPerView={1}
                spaceBetween={0}
                loop={true}

                speed={1000}
                navigation={
                    {
                        nextEl: '.swiper-hero-next',
                        prevEl: '.swiper-hero-prev',



                    }
                }

                pagination={{
                    clickable: true,
                    el: '.swiper-hero-pagination',
                    bulletClass: '.swiper-hero-bullet',
                    bulletActiveClass: 'active',
                    bulletElement: 'span',


                    renderBullet: (index, className) =>
                        `<span class="${className} custom-bullet">${index + 1}</span>`,

                }}





            >
                {imagesList.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[560px] bg-[var(--main-dark-color)] flex flex-col justify-start  ">
                            <Image
                                className="object-top mb-6 w-full h-auto"
                                src={image.src}
                                alt={`Slider ${index + 1}`}
                                width={360}
                                height={480}

                                priority
                            />
                            <div className="px-[32px] ">
                                <TextSubtitle text={'Створи шедевр вже сьогодні!'} className="mb-3 p-1 text-white" fontSize="16px" />
                                <TextTitle text={image.description} fontSize="12px" className="mb-6 max-w-40 font-light text-white text-balance p-1 " />
                                <TextTitle text="ТВОЯ ТВОРЧІСТЬ ПОЧИНАЄТЬСЯ ТУТ!" fontSize="16px" className="text-white max-w-44 text-balance p-1 m-auto text-center" /></div>
                        </div>


                    </SwiperSlide>
                ))}


            </Swiper>


            <LogoSymbol
                fill="#FFFFFF"
                width={171}
                height={145}
                className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />

            <div className="max-w-[120px] min-h-[72px] relative m-auto mt-8 ">

                <SliderControllers
                    prevClass="swiper-hero-prev"
                    nextClass="swiper-hero-next"
                    paginationClass="swiper-hero-pagination"
                />
            </div>



        </div >
    )
}
export default HeaderSlider