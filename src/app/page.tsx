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
import Subscribe from "@/modules/Subscribe/Subscribe";
import Footer from "@/modules/Footer/Footer";

export default function Home() {
  return (
    <>


      <GlobalWrapper className={" max-w-[360px] mx-auto bg-amber-200 "}><HeaderSlider /></GlobalWrapper>
      <GlobalWrapper className={"px-[32px] max-w-[360px] mx-auto bg-amber-200"}>
        <Categories />
        <Gifts />
        <Hits />
        <New />
        <Sale />
        <AboutUs />
        <Reviews />
        <FollowUs />

      </GlobalWrapper>
      {/*
      <GlobalWrapper className={" max-w-[360px] mx-auto bg-amber-200"}>
        <Subscribe />
        <Footer />
      </GlobalWrapper> */}

    </>
  );
}
