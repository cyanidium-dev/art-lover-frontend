import BlogList from "@/modules/BlogList/BlogList";
import { blogItems } from "@/modules/blogItems";

export default function BlogPage() {
    return (
        <>
            < BlogList posts={blogItems} />
        </>

    );
}