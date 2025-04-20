import TeamSection from "@/modules/OurTeam/OurTeam";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import PageHeader from "@/shared/components/PageHeader/PageHeader";

export default function AboutPage() {
    return (
        <>
            < GlobalWrapper className={"max-w-[360px] mx-auto"}>
                <div className="text-center text-2xl font-bold mb-4">Про нас</div>
                <PageHeader image={'/team/about.png'} className='mb-8' />
                <TeamSection />
              
            </GlobalWrapper >
        </>

    );
}