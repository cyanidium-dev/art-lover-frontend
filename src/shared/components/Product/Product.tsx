'use client'

import { ShoppingCart } from "lucide-react";
import Button from "../Button/Button";
import ButtonOval from "../ButtonOval/ButtonOval";
import Image from "next/image";
import { useState } from "react";
import CartAddedModal from "../Modal/CartAddedModal";
import { useRouter } from "next/navigation";

type Props = {
    item: {
        id: number;
        img: string;
        name: string;
        price: string;

    };
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
        <li key={props.item.id} className="flex flex-col items-center gap-[12px] rounded-md bg-white shadow-lg p-[12px] ">
            <Image src={props.item.img} alt={props.item.name} width={151} height={120} className="object-cover" />
            <div className="flex flex-col">
                <p className="text-[14px] font-medium ">{props.item.price}</p>
                <p className="text-[14px] font-medium">{props.item.name}</p>
            </div>


            <div className="flex gap-3 items-center justify-center">

                    <ButtonOval buttonText="Детальніше" className="px-4 py-2 h-[36px] w-[102px] rounded-3xl text-[10px] border " style={
                        {

                            backgroundColor: "#FFF",
                            color: "var(--main-dark-color)",
                            border: "1px solid var(--main-dark-color)",
                        }



                    } onClick={() => router.push(`/product/${props.item.id}`)} />

                <div className="">
                    <Button
                        svg={<ShoppingCart width={24} height={24} strokeWidth="1.5" stroke="#FFF" />}
                        className=" bg-[var(--main-orange)] flex items-center justify-center rounded-md h-[36px] w-[36px]"
                            onClick={() => handleAddToCart()}
                    />
                </div>
            </div>
        </li>

            <CartAddedModal open={showModal} continueShopping={() => setShowModal(false)} /></>
    )
}



export default Product