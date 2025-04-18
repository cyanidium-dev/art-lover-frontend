'use client'

import { ShoppingCart } from "lucide-react";
import Button from "../Button/Button";
import ButtonOval from "../ButtonOval/ButtonOval";
import Image from "next/image";

type Props = {
    item: {
        id: number;
        img: string;
        name: string;
        price: string;
    };
}
const CatalogProduct = (props: Props) => {
    return (
    <li
        key={props.item.id}
        className="w-[140px] flex flex-col gap-2 items-stretch rounded-md bg-white shadow-lg p-[12px] border-transparent"
    >
        <div className="h-[131px] w-full overflow-hidden rounded-md bg-[var(--main-light-color)]">
            <Image
                src={props.item.img}
                alt={props.item.name}
                width={116}
                height={131}
                className="object-cover w-full h-full"
            />
        </div>

        <div className="mb-1">
            <p className="text-[12px] font-medium">{props.item.price}</p>
            <p className="text-[10px] font-medium">{props.item.name}</p>
        </div>

        <div className="flex gap-1 items-center justify-center">
            <ButtonOval
                buttonText="Детальніше"
                className="bg-[var(--main-dark-color)] text-white rounded"
                style={{
                    width: '90px',
                    height: '36px',
                    fontSize: '10px',
                    borderRadius: '28px',
                    border: '1px solid var(--main-dark-color)',
                    backgroundColor: 'transparent',
                    color: 'var(--main-dark-color)',
                }}
            />
            <Button
                svg={<ShoppingCart width={20} height={20} strokeWidth="1.5" stroke="#FFF" />}
                    className="bg-[var(--main-orange)] flex items-center justify-center rounded-md h-[32px] w-[32px] p-1.5"
                    onClick={() => console.log("Add to cart")}
            />
        </div>
        </li>
    )
}
export default CatalogProduct