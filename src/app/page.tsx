import Categories from "@/modules/Categories/Categories";
import HeaderSlider from "@/modules/HeaderSlider/HeaderSlider";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";

export default function Home() {
  return (
    <>

      <HeaderSlider />
      <GlobalWrapper className={"px-8"}>
        <Categories />
      </  GlobalWrapper>


    </>
  );
}
