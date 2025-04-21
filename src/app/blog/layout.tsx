import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import { ReactNode } from "react";


interface LayoutProps {
    children: ReactNode;
}

export default async function ProductLayout({ children }: LayoutProps) {
    return <>
        <GlobalWrapper className={"px-[32px] lg:px-[64px] "}>
            {children}
        </GlobalWrapper>


    </>;
}