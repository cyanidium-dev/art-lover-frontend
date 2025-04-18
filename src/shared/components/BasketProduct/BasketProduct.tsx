import Image from "next/image";





const BasketProduct = ({ item }: { item: any }) => (
    <div className="flex items-start gap-4 border border-white/20 rounded-lg p-2 text-[12px]">
        <div className="w-[90px] h-[101px] overflow-hidden rounded">
            <Image
                src={item.img}
                alt={item.name}
                width={90}
                height={101}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="flex flex-col flex-grow text-white">
            <p className="text-[12px] w-[80px] mb-1 ">
                {item.name}
            </p>
            <p className="font-semibold text-[13px] mb-1">USD {item.price}</p>
            <div className="flex items-center mt-1 gap-2">
                <button className="w-5 h-5 rounded bg-transparent text-white text-xs">-</button>
                <span className="text-white flex items-center justify-center border rounded w-5 h-5">{item.quantity}</span>
                <button className="w-5 h-5 rounded bg-transparent text-white text-xs">+</button>
            </div>
        </div>
    </div>
);


export default BasketProduct;