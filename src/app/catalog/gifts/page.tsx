import CategoryGift from "@/modules/Categories/CategoryGift/CategoryGift";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function GiftsPage() {
    return (
        <>
            <GlobalWrapper className={"px-[32px] max-w-[360px] mx-auto bg-amber-200"}>
            <CategoryGift />
        </GlobalWrapper>
        </>
          
    );
}