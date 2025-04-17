import { ShoppingCart } from "lucide-react";
import Button from "../Button/Button";
import ButtonOval from "../ButtonOval/ButtonOval";

type Props = {
    item: {
        id: number;
        img: string;
        name: string;
        price: string;
    };
}
const Product = (props: Props) => {
    return (
        <li key={props.item.id} className="flex flex-col items-center gap-[12px] rounded-md bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] p-[12px] border-1 border-transparent">
            <img src={props.item.img} alt={props.item.name} className="w-[151px] h-[120px] object-cover" />
            <div className="flex flex-col">
                <p className="text-[14px] font-medium ">{props.item.price}</p>
                <p className="text-[14px] font-medium">{props.item.name}</p>
            </div>


            <div className="flex gap-2 items-center justify-center">
                <div className="">
                    <ButtonOval buttonText="Детальніше" className="bg-[var(--main-dark-color)] text-white px-4 py-2 rounded" style={
                        {
                            width: "102px",
                            height: "36px",
                            fontSize: "10px",
                            padding: "10px 20px",
                            borderRadius: "28px",
                            border: "1px solid var(--main-dark-color)",
                            backgroundColor: "transparent",
                            color: "var(--main-dark-color)",
                        }
                    } />
                </div>
                <div className="">
                    <Button svg={<ShoppingCart width={24} height={24} strokeWidth="1.5" stroke="#FFF" />}
                        className=" bg-[var(--main-orange)] flex items-center justify-center rounded-md h-[36px] w-[36px]" />
                </div>
            </div>
        </li>
    )
}
export default Product