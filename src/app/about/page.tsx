import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import PageHeader from "@/shared/components/PageHeader/PageHeader";
import AboutCompany from "@/modules/AboutCompany/AboutCompany";

export default function AboutPage() {
    return (
        <>
            < GlobalWrapper className={"max-w-[360px] mx-auto px-[32px]     lg:px-[64px] "}>
                <PageHeader image={'/team/about.png'} className='mb-8' />
                <AboutCompany />
              
            </GlobalWrapper >
        </>

    );
}