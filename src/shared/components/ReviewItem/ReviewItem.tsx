import { Star } from "lucide-react";
import Image from "next/image"
import TextSubtitle from "../TextSubtitle.tsx/TextSubtitle";
import Rating from "../Rating/Rating";

type Props = {
  item: {
    id: number;
    img: string;
    product: string;
    comment: string;
    rating: number;
    name: string;
    date: string;
  };
}
const ReviewItem = (props: Props) => {
  return (
    <li key={props.item.id} className="w-[200px] h-[358px] flex flex-col gap-3 items-left rounded-md bg-white shadow-lg p-[12px] border-1 border-transparent">
      <div className="w-[176px] h-[85px] rounded-md">
        <Image src={props.item.img} alt={props.item.name} className="object-cover w-full"
          width={176} height={85} />
      </div>
      <div className="">
        <p className="text-[12px] font-normal text-left">Товар:</p>
        <p className="text-[14px] font-medium text-left">{props.item.product}</p>
      </div>
      <div className="max-h-[145px] overflow-auto">
        <p className="font-normal text-[12px] text-left  leading-tight">"{props.item.comment}"</p>

      </div>


      <Rating rating={props.item.rating} className="text-left" fill="var(--main-orange)" stroke="var(--main-orange)" height={20} width={20} />



      <div className="flex gap-2 mt-auto ">
        <TextSubtitle text={props.item.name} className="text-left font-normal" fontSize="20px" />
        <p className="font-normal text-[12px] text-left">{props.item.date}</p>

      </div>

    </li>
  )
}
export default ReviewItem