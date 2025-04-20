import BlogList from "@/modules/BlogList/BlogList";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import { blogItems } from "@/modules/blogItems";

export default function BlogPage() {
    return (
        <>
            < GlobalWrapper className={"max-w-[360px] mx-auto"}>
                < BlogList posts={blogItems} />
            </GlobalWrapper >
        </>

    );
}