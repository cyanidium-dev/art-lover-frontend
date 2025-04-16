import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import productItems from "../productItems"
import ButtonOval from "@/shared/components/ButtonOval/ButtonOval"
import Button from "@/shared/components/Button/Button"
import { ShoppingCart } from "lucide-react"

type Props = {}
const Hits = (props: Props) => {
    return (
        <div>
            <TextTitle text="хіти продажів " className="uppercase text-left mb-3 font-medium" fontSize="20px" />
            <TextSubtitle text="Творчість, яка підкорила серця" className="text-left font-normal mb-6" fontSize="16px" />
            <ul className="flex gap-4 overflow-auto" >
                {productItems
                    .filter((item) => item.category === "Hits" || item.category === "hits")
                    .map((item, index) => (
                        <li key={item.id} className="flex flex-col items-center gap-[12px] rounded-md bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] p-[12px] border-1 border-transparent">
                            <img src={item.img} alt={item.name} className="w-[151px] h-[120px] object-cover" />
                            <div className="flex flex-col">

                                <p className="text-[14px] font-medium ">{item.price}</p>
                                <p className="text-[14px] font-medium">{item.name}</p>
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
                    ))}

            </ul>

        </div>
    )
}
export default Hits