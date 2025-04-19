import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return <>
        <GlobalWrapper className={"max-w-[360px] px-[32px] mx-auto"}>
            {children}
        </GlobalWrapper>

    </>;
}