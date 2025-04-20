import CatalogProduct from "../CatalogProduct/CatalogProduct";


type Props = {
    items: {
        id: string;
        name: string;
        price: number | string;
        img: string;
        rating?: number;
        discount?: boolean;
    }[];
};

const CategoriesCatalog = ({ items }: Props) => (
    <ul className="flex flex-wrap gap-3">
        {items.map((item) => (
            <CatalogProduct
                key={item.id}
                item={{
                    id: typeof item.id === "string" ? parseInt(item.id, 10).toString() : item.id,
                    img: item.img,
                    name: item.name,
                    price: typeof item.price === "string" ? item.price : item.price.toString(),
                }}
            />
        ))}
    </ul>
);

export default CategoriesCatalog;