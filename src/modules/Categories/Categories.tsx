'use client'
import categoryItems from "@/modules/categoryItems";

import TextTitle from "@/shared/components/TextTitle/TextTitle";

import SliderControllers from "@/shared/components/SliderControllers/SliderControllers";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Categories = () => {
    const router = useRouter()
    return (
        <section className="w-full items-center justify-center py-8">
            <TextTitle text="КATEГОРІЇ ТОВАРІВ" className="text-left mb-6 font-medium" />
            <ul className="flex flex-col ">
                {categoryItems.map((item) => (
                    <li className="flex 
                    justify-center
                    items-center
                    cursor-pointer"
                        key={item.id}
                        onClick={() => {
                            router.push('/catalog/' + item.slug);
                        }
                        }
                    >
                        <Image
                            src={item.img}
                            alt={item.text}
                            priority
                            width={296}
                            height={100}
                            sizes="100vw"
                            key={item.id}
                        />
                    </li>
                ))}
            </ul>
            <SliderControllers />
        </section>
    );
}

export default Categories;

