import { blogItems } from '@/modules/blogItems';
import FullProduct from '@/modules/FullProduct/FullProduct';
import productsWithFull from '@/modules/productsWithFull';
interface BlogPostPageProps {
    params: Promise<{ id: string }>;
}



export default async function BlogPostPage({
    params,
}: BlogPostPageProps) {
    const { id } = await params;
    const blogPost = blogItems.find((item) => item.id === id);

    if (!blogPost) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            {blogPost && (
                
                blogPost.id)
        }
           
        </div>
    );
}