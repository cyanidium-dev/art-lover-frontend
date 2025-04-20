import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import {  ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    images: string[]; 
}
const ProductGalery = ({ images }: Props) => {
    return (
        <div className="relative  mb-6">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                speed={1000}

                loop
                navigation={{
                    nextEl: '.gallery-next',
                    prevEl: '.gallery-prev',
                }}
                pagination={{
                    clickable: true,
               
                 
                    
                    
                }}
                className="swiper-gallery"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={src}
                            alt={`Product image ${index + 1}`}
                            width={360}
                            height={360}
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                ))}

           
                <div className="absolute bottom-2/5 w-full flex justify-between z-10 px-2">
                    <div className="swiper-pagination bg-amber-600"></div>
                    <button className="gallery-prev text-sm text-[var(--main-orange)] p-1 bg-white rounded-lg"><ChevronLeft /></button>
                    <button className="gallery-next text-sm text-[var(--main-orange)] p-1 bg-white  rounded-lg"><ChevronRight/> </button>
                </div>
            </Swiper>

        </div>
    );
};

export default ProductGalery