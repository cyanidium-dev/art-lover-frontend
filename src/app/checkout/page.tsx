
import CheckoutForm from "@/modules/CheckOutForm/CheckOutForm";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function CheckoutPage() {
    return (
        <>
            <GlobalWrapper className={"px-[32px] lg:px-[64px] "}>
                <CheckoutForm />
            </GlobalWrapper>

        </>

    );
}