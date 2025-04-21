import Categories from "@/modules/Categories/Categories";
import HeaderSlider from "@/modules/HeaderSlider/HeaderSlider";
import GlobalWrapper from "@/shared/components/GlobalWrapper/GlobalWrapper";
import Gifts from "../modules/Gifts/Gifts";
import Hits from "@/modules/Hits/Hits";
import New from "@/modules/New/New";
import Sale from "@/modules/Sale/Sale";
import AboutUs from "@/modules/AboutUs/AboutUs";
import Reviews from "@/modules/Reviews/Reviews";
import FollowUs from "@/modules/FollowUs/FollowUs";


export default function Home() {
  return (
    <>



      <div><GlobalWrapper className=""><HeaderSlider /></GlobalWrapper></div>
      <GlobalWrapper className={"px-[32px] sm:px-[32px] xl:px-[80px] "}>
        <Categories />
        <Gifts />
        <Hits />
        <New />
        <Sale />
        <AboutUs />
        <Reviews />
        <FollowUs />

      </GlobalWrapper>


    </>
  );
}
