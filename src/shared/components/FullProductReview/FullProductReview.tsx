import { Review } from "@/types/review";
import Rating from "../Rating/Rating";
import TextTitle from "../TextTitle/TextTitle";


type Props = {
    reviews:Review[]
};

const FullProductReview = ({ reviews }: Props) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
            
                <div className="font-semibold uppercase text-[12px] flex">
                    <TextTitle text={"ВІДГУКИ"} className="uppercase font-medium" fontSize="16px" /> 
                        <span className="text-zinc-400 ml-1">({reviews.length})</span>
                  
                   
                </div>
                  <span className="mx-6 h-0.25 w-full bg-zinc-200"></span>
                
                
                <div className="flex gap-2">
                    <button className="text-zinc-400">&lt;</button>
                    <button className="text-zinc-400">&gt;</button>
                </div>
            </div>

            {reviews.map((review, i) => (
                <div key={i} className="text-[12px]">
                    <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold mb-1">{review.name}</p>
                    <Rating rating={review.rating ?? 0} className="text-xs" fill="var(--main-orange)" stroke="var(--main-orange)" height={10} width={10} />
                    </div>
                    
                    <p className="text-gray-700 leading-snug">{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default FullProductReview;
