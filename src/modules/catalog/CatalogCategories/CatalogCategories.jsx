"use client";
import {useState} from "react";

const activeStyle = "cursor-pointer pointer w-full uppercase bg-orange text-[18px] font-medium rounded-[12px] text-white h-[75px] justify-center items-center";
const style = "cursor-pointer pointer w-full uppercase border border-[#3A3A3A] text-[18px] font-medium rounded-[12px] h-[75px] justify-center items-center";

const CatalogCategories = ()=> {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex gap-[30px]">
      <button onClick={()=> setActiveIndex(0)} type="button" className={activeIndex === 0 ? activeStyle : style}>Для неї</button>
      <button onClick={()=> setActiveIndex(1)} type="button" className={activeIndex === 1 ? activeStyle : style}>Для нього</button>
    </div>
  )
}

export default CatalogCategories;
