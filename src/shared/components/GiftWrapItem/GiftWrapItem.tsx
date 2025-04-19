import Image from "next/image";

type Props = {
    image: string;
    title: string;
    price: string;
    onClick: () => void;
};

const GiftWrapItem = ({ image, title, price, onClick }: Props) => {
    return (
        <div className="flex items-center border rounded-lg p-2 gap-3 w-full max-w-[300px]">
            <div className="w-[90px] h-[101px] rounded overflow-hidden flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    width={90}
                    height={101}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col flex-grow">
                <p className="text-[12px] font-medium">{title}</p>
                <p className="text-[13px] font-semibold mb-2">UAH {price}</p>
                <button
                    onClick={onClick}
                    className=" border rounded-full px-2 py-1 text-[12px] hover:border-black transition"
                >
                    Додати
                </button>
            </div>
        </div>
    );
};

export default GiftWrapItem;