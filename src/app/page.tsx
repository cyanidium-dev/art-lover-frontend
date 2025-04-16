import Categories from "@/modules/Categories/Categories";
import HeaderSlider from "@/modules/HeaderSlider/HeaderSlider";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import Gifts from "../modules/Gifts/Gifts";
import Hits from "@/modules/Hits/Hits";
import New from "@/modules/New/New";
import Sale from "@/modules/Sale/Sale";

export default function Home() {
  return (
    <>

      <HeaderSlider />
      <GlobalWrapper className={"px-[32px]"}>
        <Categories />
        <Gifts />
        <Hits />
        <New />
        <Sale />
      </  GlobalWrapper>


    </>
  );
}
