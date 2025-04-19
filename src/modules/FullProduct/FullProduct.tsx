'use client'
import BasketItemCounter from "@/shared/components/BasketCounter/BasketCounter";
import Button from "@/shared/components/Button/Button";
import FullProductCounter from "@/shared/components/FullProductCounter/FullProductCounter";
import Rating from "@/shared/components/Rating/Rating";
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import { Share2Icon } from "lucide-react";


interface Item {
    id: string;
    img: string;
    name: string;
    price: string;
    hit: boolean;
    new: boolean;
    discount?: boolean;
    quantity: number;

    category?: string;
    gallery?: string[];
    shortDescription?: string;
    description?: string;
    rating?: number;
    reviews?: object[];
    reviewsCount?: number;
}

interface FullProductProps {
    item: Item;
}

const FullProduct = (props: FullProductProps) => {
  return (
      <div>
          <div>  Gallery</div>
          <div className="flex flex-col gap-2 items-start w-full  p-[12px] border-1 border-transparent">
              
              <div className="flex gap-2 items-center justify-between w-full">
                  <TextTitle text={props.item.name} className=" uppercase font-semibold mb-1" fontSize="16px" />
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
              
              <div className="">
                  <p className="text-[10px] mb-1 uppercase">Колір</p>
                  <div className="flex gap-2">
                      <button className="w-3 h-3 rounded-full bg-[var(--main-orange)] border border-gray-200 shadow"></button>
                      <button className="w-3 h-3 rounded-full bg-[var(--main-dark-color)] border  border-gray-200 shadow"></button>
                  </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                  <div>
                      <FullProductCounter
                      item={{ ...props.item, id: props.item.id.toString() }}
                      onChange={(quantity, id) => console.log(quantity, id)} 
                      className="bg-white text-[var(--main-dark-color)] border-1"
                  /></div>
                  <span className="text-sm font-semibold">USD 85.74</span>
              </div>

         
          </div>
          
        
    </div>
  )
}
export default FullProduct