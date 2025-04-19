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

      <div className="flex items-center gap-2 border border-zinc-200 rounded-xl px-1 py-1 bg-white text-[10px] text-zinc-400">
          <button onClick={handleDecrement} className="px-1 text-xs">{'<'}</button>
          <span className="px-1">{count}</span>
          <button onClick={handleIncrement} className="px-1 text-xs">{'>'}</button>
      </div>


  )
}
export default FullProductCounter