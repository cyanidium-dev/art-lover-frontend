'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import Product from '../Product/Product';
import SliderControllers from '../SliderControllers/SliderControllers';

type Props = {
  
    items: { id: string; name: string; image: string; price: string }[];
    paginationClass: string;
    prevClass: string;
    nextClass: string;
};

const SwiperProductSlider = ({
 
    items,
    paginationClass,
    prevClass,
    nextClass,
}: Props) => {
    return (
        <section className="py-8">
          

            <div className="p-1">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView="auto"
                    loop={true}
                    navigation={{
                        prevEl: `.${prevClass}`,
                        nextEl: `.${nextClass}`,
                    }}
                    pagination={{
                        clickable: true,
                        el: `.${paginationClass}`,
                        bulletClass: 'hits-bullet',
                        bulletActiveClass: 'hits-bullet-active',
                        bulletElement: 'span',
                        renderBullet: (index, className) =>
                            `<span class="${className}">${index + 1}</span>`,
                    }}
                    className="pb-8"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index} className="!w-auto">
                            <Product item={{
                                ...item,
                                img: item.image,
                                price: item.price.toString(),
                            }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <SliderControllers
                prevClass={prevClass}
                nextClass={nextClass}
                paginationClass={paginationClass}
            />
        </section>
    );
};

export default SwiperProductSlider;
