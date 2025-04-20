import { blogItems } from '@/modules/blogItems';

import BlogItem from '@/shared/components/BlogItem/BlogItem';
import PageHeader from '@/shared/components/PageHeader/PageHeader';


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
            <PageHeader image={'/blog/categoryBlog.png'} className='mb-8' />
            <BlogItem item={blogPost} />
           
        </div>
    );
}