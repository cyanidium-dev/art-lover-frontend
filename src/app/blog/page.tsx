import BlogList from "@/modules/Blog/BlogList";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import { blogItems } from "@/modules/blogItems";

export default function BlogPage() {
    return (
        <>
            < GlobalWrapper className={"px-[32px] max-w-[360px] mx-auto"}>
                < BlogList posts={blogItems} />
            </GlobalWrapper >
        </>

    );
}