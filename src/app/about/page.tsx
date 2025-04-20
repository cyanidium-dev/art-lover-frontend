import OurTeam from "@/shared/components/OurTeam/OurTeam";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import PageHeader from "@/shared/components/PageHeader/PageHeader";
import OurStory from "@/shared/components/OurStory/OurStory";
import AboutCompany from "@/modules/AboutCompany/AboutCompany";

export default function AboutPage() {
    return (
        <>
            < GlobalWrapper className={"max-w-[360px] mx-auto px-[32px]"}>
                <PageHeader image={'/team/about.png'} className='mb-8' />
                <AboutCompany />
              
            </GlobalWrapper >
        </>

    );
}