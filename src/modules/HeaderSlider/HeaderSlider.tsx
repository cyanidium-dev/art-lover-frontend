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

const HeaderSlider = () => {

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
                        <div className=" w-full bg-[var(--main-dark-color)] flex flex-col relative  sm:flex-row sm:gap-5    ">
                            <LogoSymbol
                                fill="#FFFFFF"
                                width={180}
                                height={160}
                                className="absolute opacity-10 rotate-300 z-10
                                -right-10 -top-10
                            
                                  
                                lg:-right-30 lg:-top-30
                                lg:h-[400px] lg:w-[400px]"
                            />
                            <LogoSymbol
                                fill="#FFFFFF"
                                width={180}
                                height={160}
                                className="absolute  opacity-10 rotate-30 z-10  
                                -right-10 -bottom-10
                                lg:-right-30 lg:-bottom-30
                                lg:h-[400px] lg:w-[400px]"
                            />

                            <div className="h-full  rounded-[20px] overflow-hidden items-center justify-items-center  lg:h-[734px] lg:justify-start">
                                <Image
                                    className="h-full object-cover rounded-[20px]"
                                    priority
                                    src={image.src}
                                    alt={`Slider ${index + 1}`}
                                    width={550}
                                    height={734}
                                />
                            </div>


                            <div className=" flex flex-col justify-center p-8 sm:w-1/2 sm:items-start lg:ml-50 ">
                                <TextSubtitle text={'Створи шедевр вже сьогодні!'} className="mb-3 p-1 text-white  lg:text-[32px]" />

                                <p className="text-[12px] mb-6 font-light text-white max-w-[260px] 
                                  lg:text-[16px] lg:max-w-[400px] "
                                >{image.description}</p>



                                <TextTitle text="ТВОЯ ТВОРЧІСТЬ ПОЧИНАЄТЬСЯ ТУТ!" className="text-white max-w-[260px] line-clamp-2 p-1 m-auto  sm:hidden
                                 
                                lg:hidden lg:text-[32px]  lg:max-w-[400px]  " />


                            </div>


                        </div>

                    </SwiperSlide>
                ))}


            </Swiper>


            <LogoSymbol
                fill="#FFFFFF"

                className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 
                 lg:h-[400px] lg:w-[400px]"
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