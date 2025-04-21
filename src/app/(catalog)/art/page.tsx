import CategoryArt from "@/modules/Categories/CategoryArt/CategoryArt";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function ArtPage() {
    return (
        <>
            <GlobalWrapper className={"px-[32px] lg:px-[64px] "}>
                <CategoryArt/>
            </GlobalWrapper>
        </>

    );
}