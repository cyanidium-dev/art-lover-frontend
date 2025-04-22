'use client'
import ReviewItem from "@/shared/components/ReviewItem/ReviewItem"
import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import reviewsItems from "./reviewsItems"
import SliderControllers from "@/shared/components/SliderControllers/SliderControllers"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Reviews = () => {
  return (
    <section className="py-8">
      <TextTitle text="відгуки" className="uppercase text-left font-medium mb-[12px]" fontSize="20px" />
      <TextSubtitle text="Враження про наш магазин" className="text-left font-normal mb-[24px]" fontSize="14px" color={"var(--main-dark-color)"} />


      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView="auto"
        pagination={{
          clickable: true,
          el: '.reviews-pagination',
          bulletClass: 'reviews-bullet',
          bulletActiveClass: 'reviews-bullet-active',
          bulletElement: 'span',
          renderBullet: (index, className) =>
            `<span class="${className}">${index + 1}</span>`,
        }}
        navigation={{
          prevEl: '.prev-reviews',
          nextEl: '.next-reviews',
        }}
        className="pb-8"
      >
        {reviewsItems.map((item) => (
          <SwiperSlide key={item.id} className="!w-auto">
            <ReviewItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderControllers
        prevClass="prev-reviews"
        nextClass="next-reviews"
        paginationClass="reviews-pagination"
      />


    </section>
  )
}
export default Reviews