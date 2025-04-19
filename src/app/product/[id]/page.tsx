import type { Metadata } from "next";
import productsWithFull from '@/modules/productsWithFull';
import FullProduct from "@/modules/FullProduct/FullProduct";

interface ProductPageProps {
    params: {
        id: string;
    };
}
    

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const product = productsWithFull.find((p) => p.id ===params.id);

    if (!product) {
        return {
            title: 'Продукт не знайдено',
        }
    }

    return {
        title: `Product ${product.name}`,
        description: `Details about product ${product.name}`,
        openGraph: {
            title: `Product ${product.name}`,
            description: `Details about product ${product.name}`,
            url: `/product/${params.id}`,
            images: [
                {
                    url: product.img,
                    width: 800,
                    height: 600,
                },
            ],
        },
    }
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = productsWithFull.find((p) => p.id === params.id);
    
    
    return <>


        {product && <FullProduct item={product} />}



    </>
           
         
            
    
}