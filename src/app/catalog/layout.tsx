import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function CatLayout({ children }: { children: React.ReactNode }) {
    return <>


        <GlobalWrapper className={"px-[32px] lg:px-[64px]"}>
            {children}
        </GlobalWrapper>



    </>;
}