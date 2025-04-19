import Basket from "@/modules/Basket/Basket";
import CategoryArt from "@/modules/Categories/CategoryArt/CategoryArt";
import CheckoutForm from "@/modules/CheckOutForm/CheckOutForm";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function CheckoutPage() {
    return (
        <>
            < GlobalWrapper className={"px-[32px] max-w-[360px] mx-auto"}>
                <CheckoutForm />
            </GlobalWrapper >
        </>

    );
}