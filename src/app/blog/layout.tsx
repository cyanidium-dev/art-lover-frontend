import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import { ReactNode } from "react";


interface LayoutProps {
    children: ReactNode;
}

export default async function ProductLayout({ children }: LayoutProps) {
    return <>
        <GlobalWrapper className={"max-w-[360px] px-[32px] mx-auto"}>

            {children}
        </GlobalWrapper>

    </>;
}