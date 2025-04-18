import CategoryArt from "@/modules/Categories/CategoryArt/CategoryArt";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function ArtPage() {
    return (
        <>
            <GlobalWrapper className={"px-[32px] max-w-[360px] mx-auto "}>
                <CategoryArt/>
            </GlobalWrapper>
        </>

    );
}