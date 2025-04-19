import Image from "next/image";
import BasketCounter from "../BasketCounter/BasketCounter";
import { BasketProductItem } from "@/types/basketProductItem";
import { useState } from "react";
import { Trash } from "lucide-react";

interface Props {
    item: BasketProductItem;
    onUpdateQuantity: (quantity: number, id: string) => void;
    onDelete: (id: string) => void;
}


const BasketProduct = (props: Props) => (
    <div className="relative flex items-start gap-4 border border-white/20 rounded-lg p-2 text-[12px]">
        <div className="w-[90px] h-[101px] overflow-hidden rounded">
            <Image
                src={props.item.img}
                alt={props.item.name}
                width={90}
                height={101}
                className="w-full h-full object-cover"
            />
        </div>
        <button
            className="absolute top-2 right-2 text-white "
            onClick={() => props.onDelete(props.item.id)}
        >
            <Trash size={20} />
        </button>
        <div className="flex flex-col flex-grow text-white">
            <p className="text-[12px] w-[80px] mb-1 ">
                {props.item.name}
            </p>
            <p className="font-semibold text-[13px] mb-1">USD {props.item.price}</p>

            <BasketCounter item={props.item} onChange={props.onUpdateQuantity} />

        </div>
    </div>
);


export default BasketProduct;