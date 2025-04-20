'use client'

import Button from "@/shared/components/Button/Button";
import CatalogProduct from "@/shared/components/CatalogProduct/CatalogProduct";
import FullProducAccordion from "@/shared/components/FullProductAccordeon/FullProductAccordeon";
import FullProductBenefits from "@/shared/components/FullProductBenefits/FullProductBenefits";
import FullProductCharact from "@/shared/components/FullProductCharact/FullProductCharact";
import FullProductCounter from "@/shared/components/FullProductCounter/FullProductCounter";
import FullProductReview from "@/shared/components/FullProductReview/FullProductReview";
import FullProductSuitableFor from "@/shared/components/FullProductSuitableFor/FullProductSuitableFor";
import Product from "@/shared/components/Product/Product";
import ProductGalery from "@/shared/components/ProductGalery/ProductGalery";
import Rating from "@/shared/components/Rating/Rating";
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import { fullProductItem } from "@/types/fullProductItem";
import { Review } from "@/types/review";
import { Heart, Share2Icon } from "lucide-react";



interface FullProductProps {
    item: fullProductItem;
}

const FullProduct = (props: FullProductProps) => {
  return (
      <div>
          <ProductGalery images={props.item.gallery ?? []} />
          <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex gap-2 items-center justify-between w-full">
                  <TextTitle text={props.item.name} className=" uppercase font-semibold" fontSize="16px" />
                  <div className="">
                      <Button className="bg-white text-[var(--main-orange)]" svg={<Share2Icon width={20} height={20} />} />
                  </div>
              </div>
              
              <div >
              <p className="text-[10px] font-light  mb-1">
               {props.item.shortDescription}
                  </p>
              </div>
              <div className="flex justify-between items-center w-full">
                  <p className="text-[10px] text-green-600 font-medium">  В наявності</p>
                  <Rating rating={props.item.rating ?? 0} className="text-xs" fill="var(--main-orange)" stroke="var(--main-orange)" height={10} width={10} />
              </div>
              <span className="h-0.25 w-full bg-zinc-200"></span>

              <div className="text-[10px] w-full text-left font-light">
                   
                  <label className="flex justify-between items-center  py-1"> <input type="checkbox" />
                      Бобіна з нитками
                      <span className="text-[var(--main-orange)] font-semibold">+100 грн</span>
                    
                  </label>

                  <label className="flex justify-between items-center  py-1">  <input type="checkbox" />
                      Підставка для сцени
                      <span className="text-[var(--main-orange)] font-semibold">+200 грн</span>
                    
                  </label>
              </div>
              <span className="h-0.25 w-full bg-zinc-200"></span>

              <div className="">
                  <p className="text-[10px] mb-1 uppercase">Колір</p>
                  <div className="flex gap-2">
                      <button className="w-3 h-3 rounded-full bg-[var(--main-orange)] border border-gray-200 shadow"></button>
                      <button className="w-3 h-3 rounded-full bg-[var(--main-dark-color)] border  border-gray-200 shadow"></button>
                  </div>
              </div>
              
              <div className="flex items-center  gap-2 justify-between w-full">
                  <div>
                      <FullProductCounter
                      item={{ ...props.item, id: props.item.id.toString() }}
                      onChange={(quantity, id) => console.log(quantity, id)} 
                      className="bg-white text-[var(--main-dark-color)] border-1"
                  /></div>
                  <span className="text-sm font-semibold text-[16px] text-[var(--main-orange)]">USD 85.74</span>
              </div>

              <div className="flex w-full items-center justify-between gap-4 mt-4">
                  <button className="bg-[var(--main-orange)] text-white rounded-full px-4 py-2 text-[12px]">
                      Додати товар до кошика
                  </button>

                  <button className="bg-[var(--main-dark-color)] p-2 rounded-md ">
                      <Heart stroke="white" fill="none" width={16} height={16} />
                  </button>
              </div>
              <FullProducAccordion itemDescription={props.item.description ?? ''} />
              <FullProductBenefits />
              <FullProductSuitableFor suitableFor={props.item.suitableFor ?? []} />
              <FullProductCharact
                  weight="500 г"
                  size="30 x 40 см"
                  materials="дерев’яна основа (МДФ або фанера), цвяхи, нитки з бавовни або поліестер"
                  manufacturer="ArtLine, Ukraine"
                  included={[
                      "Дерев’яна основа з нанесеною схемою",
                      "Комплект цвяхів",
                      "Нитки для створення портрета",
                      "Молоточок (опціонально, залежно від комплекту)",
                      "Інструкція з покроковим керівництвом",
                      "Шаблон з дизайном для натягування ниток",
                  ]}
                  article="10867656"
              />
              <FullProductReview reviews={props.item.reviews || []} />
          </div>
          
          {props.item.similar && (
              props.item.similar.length > 0 && (
                  <div className="flex flex-col gap-4 mt-8">
                      <TextTitle text="Схожі товари" className="uppercase font-semibold mb-1" fontSize="18px" />
                      <ul className="flex   gap-4 overflow-x-auto scrollbar-hide">
                          {props.item.similar.map((item) =>

                              <CatalogProduct key={item.id} item={item} />)}
                      </ul>
                  </div>
              )
          )}


      
          



        
    </div>
  )
}
export default FullProduct