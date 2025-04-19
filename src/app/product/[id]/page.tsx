import FullProduct from '@/modules/FullProduct/FullProduct';
import productsWithFull from '@/modules/productsWithFull';
import { Metadata } from 'next';
interface ProductPageProps {
    params: Promise<{ id: string }>;
}



export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { id } = await params;
    const product = productsWithFull.find((item) => item.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <FullProduct item={product} />
        </>
    );
}