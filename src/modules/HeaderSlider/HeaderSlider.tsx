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
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers";
import LogoShape from "@/shared/components/LogoSymbol/LogoShape";
import LogoShape2 from "@/shared/components/LogoSymbol/LogoShape2";

const HeaderSlider = () => {

    return (
        <section>
            <div className="relative bg-[var(--main-dark-color)] 
            overflow-hidden
            ">
            <Swiper
                    modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={0}
                    loop={true}
                    speed={500}
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
                        <div className="  flex flex-col relative sm:flex-row sm:gap-5 z-100 ">

                            <div className="h-full rounded-b-[24px] overflow-hidden items-center justify-items-center  lg:h-[734px] lg:justify-start">
                                <Image
                                    className="h-full object-cover rounded-b[24px]"
                                    priority
                                    src={image.src}
                                    alt={`Slider ${index + 1}`}
                                    width={550}
                                    height={734}
                                />
                            </div>
                            <div
                                className="flex flex-col 
                                mt-[60px]
                                mb-[32px]
                                ml-[20px]
                                justify-start
                                gap-[12px] 
                                w-[160px]
                                sm:w-1/2
                                lg:ml-50 ">

                                <TextSubtitle text={'Створи шедевр вже сьогодні!'} className=" text-white
                                text-[16px] font-normal 
                                lg:text-[32px]" />

                                <p className="text-[12px]
                                font-light
                                text-justify
                                 text-white 
                                  lg:text-[16px] lg:max-w-[400px "
                                >{"Ласкаво просимо до світу безмежного натхнення!"}
                                </p>
                            </div>

                            <div className="flex items-center
                                justify-center
                                mb-[32px]">
                                <p className="text-[16px] w-[180px]
                                font-normal
                                 text-white
                                text-center 
                                  lg:text-[16px] lg:max-w-[400px "
                                >{"ТВОЯ ТВОРЧІСТЬ ПОЧИНАЄТЬСЯ ТУТ!"}
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}


                </Swiper>
                <LogoShape
                    height={153}
                    width={101}


                    fill="#FFFFFF"
                    className="absolute opacity-5 
                   z-10
                                -right-10 bottom-30
                                lg:rotate-300
                                lg:-left-30 lg:-top-30
                                lg:h-[400px] lg:w-[400px]"/>
                <LogoShape
                    height={153}
                    width={101}
                    fill="#FFFFFF"
                    className="absolute opacity-5 
                     z-10 -right-0 -bottom-0
                                lg:rotate-300
                                lg:-left-30 lg:-top-30
                                lg:h-[400px] lg:w-[400px]"/>
                <LogoShape2
                    height={153}
                    width={101}
                    fill="#FFFFFF"
                    className="absolute opacity-5 
                     z-10 -left-1 -bottom-1
                                lg:rotate-300
                                lg:-left-30 lg:-top-30
                                lg:h-[400px] lg:w-[400px]"/>



            <LogoSymbol
                    fill="#FFFFFF"
                    className="absolute top-2/5 
                    left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 
                 lg:h-[400px] lg:w-[400px]"
                />
            </div >


            <div className="max-w-[120px] min-h-[72px] bg-white relative m-auto mt-8 ">
                <SliderControllers
                    prevClass="swiper-hero-prev"
                    nextClass="swiper-hero-next"
                    paginationClass="swiper-hero-pagination"
                />
            </div>



        </section>
    )
}
export default HeaderSlider