import Contacts from "@/modules/Contacts/Contacts";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import PageHeader from "@/shared/components/PageHeader/PageHeader";

export default function BlogPage() {
    return (
        <>
            < GlobalWrapper className={"max-w-[360px] mx-auto px-[32px]"}>
                <PageHeader image={'/contactsPage.png'} className='mb-8' />

                < Contacts />
        
            </GlobalWrapper >
        </>

    );
}