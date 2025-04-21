import type { BlogPostItem } from "@/types/blogPostItem";
import Image from "next/image";
import TextTitle from "../TextTitle/TextTitle";

type Props = {
    item: BlogPostItem;
}



const BlogPostItem = (props: Props) => {
    return (
      
      <div className="flex flex-col gap-6">
          
            <TextTitle text={props.item.title} className="font-medium text-[14px]" />
          {props.item.text.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-[12px] leading-relaxed text-justify">
                  {paragraph.trim()}
              </p>
          ))}
            <ul className="flex flex-col gap-4">
                {props.item.gallery.flat().map((image: string, index: number) => (
                    <li key={index } className=" w-[296px] overflow-hidden rounded-lg ">
                    <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={296}
                        height={181}
                        className="w-full h-auto object-fill transition-transform duration-300 transform hover:scale-105"
                        loading="lazy"
                            />
                    </li>   
                ))}
            </ul>
    </div>
  )
}
export default BlogPostItem