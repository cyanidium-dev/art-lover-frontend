import Contacts from "@/modules/Contacts/Contacts";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import PageHeader from "@/shared/components/PageHeader/PageHeader";

export default function BlogPage() {
    return (
        <>
            <GlobalWrapper className={"px-[32px] lg:px-[64px] "}>
                <PageHeader image={'/contactsPage.png'} className='mb-8' />

                < Contacts />
        
            </GlobalWrapper >

        </>

    );
}