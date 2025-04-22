'use client'

import { ShoppingCart } from "lucide-react";
import Button from "../Button/Button";
import ButtonOval from "../ButtonOval/ButtonOval";
import Image from "next/image";
import { useState } from "react";
import CartAddedModal from "../Modal/CartAddedModal";
import { useRouter } from "next/navigation";
import { CategoryProductItem } from "@/types/categoryProductItem";

type Props = {
    item: CategoryProductItem;
}
const Product = (props: Props) => {
    const router = useRouter();
    const [addedToCart, setAddedToCart] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleAddToCart = () => {
        setAddedToCart(addedToCart);
        setShowModal(true);
        console.log("Add to cart", props.item.id);
    };
    return (
        <>
            <li key={props.item.id} className="flex flex-col items-center rounded-md bg-white shadow-lg p-[12px] lg:p-[20px]">

                <div className="relative rounded-lg w-[151px] h-[120px] lg:w-[228px] lg:h-[300px]  overflow-hidden mb-[12px]">
                    <Image src={props.item.img} alt={props.item.name} fill className="object-cover" />
                </div>

                <div className="flex flex-col mb-[16px] ">
                <p className="text-[14px] font-medium ">{props.item.price}</p>
                    <p className="text-[14px] font-medium">{props.item.name}</p>
                </div>


                <div className="flex gap-1 lg:gap-4 lg:justify-between lg:w-[228px]">
                    <ButtonOval buttonText="Детальніше" className="flex items-center justify-center w-[102px] h-[36px] rounded-3xl text-[10px] border " style={
                        {

                            backgroundColor: "#FFF",
                            color: "var(--main-dark-color)",
                            border: "1px solid var(--main-dark-color)",
                        }



                    } onClick={() => router.push(`/product/${props.item.id}`)} />


                    <Button
                        svg={<ShoppingCart width={24} height={24} strokeWidth="1.5" stroke="#FFF" />}
                        className=" bg-[var(--main-orange)] flex items-center justify-center w-[36px] h-[36px] rounded-md "
                            onClick={() => handleAddToCart()}
                    />

            </div>
        </li>

            <CartAddedModal open={showModal} continueShopping={() => setShowModal(false)} /></>
    )
}



export default Product