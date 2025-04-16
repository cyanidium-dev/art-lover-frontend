import Categories from "@/modules/Categories/Categories";
import HeaderSlider from "@/modules/HeaderSlider/HeaderSlider";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import Gifts from "../modules/Gifts/Gifts";

export default function Home() {
  return (
    <>

      <HeaderSlider />
      <GlobalWrapper className={"px-[32px]"}>
        <Categories />
        <Gifts />
      </  GlobalWrapper>


    </>
  );
}
