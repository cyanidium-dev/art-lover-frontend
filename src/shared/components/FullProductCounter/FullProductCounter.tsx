'use client'
import { BasketProductItem } from "@/types/basketProductItem";
import { useState } from "react";

type Props = {
  item: BasketProductItem;
  onChange: (quantity: number, id: string) => void;
  className?: string;


}
const FullProductCounter = (props: Props) => {

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        props.onChange(newCount, props.item.id);
    };

    const handleDecrement = () => {
        const newCount = count > 1 ? count - 1 : 1;
        setCount(newCount);
        props.onChange(newCount, props.item.id);
    };
  return (

            <div className="flex items-center mt-1 gap-2 border-1 border-[var(--main-dark-color)] rounded-md">
        <button onClick={handleDecrement} className={`w-5 h-5 rounded bg-transparent ${props.className} text-xs`}>-</button>
        <span className={`flex items-center justify-center border rounded w-5 h-5 ${props.className}`}>{count}</span>
        <button onClick={handleIncrement} className={`w-5 h-5 rounded bg-transparent ${props.className} text-xs`}>+</button>
              </div>

  )
}
export default FullProductCounter