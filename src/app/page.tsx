import About from '@/modules/home/about/About';
import Bestsellers from '@/modules/home/bestsellers/Bestsellers';
import Categories from '@/modules/home/categories/Categories';
import DiscountedProducts from '@/modules/home/discountedProducts/DiscountedProducts';
import HelpChooseGift from '@/modules/home/helpChooseGift/HelpChooseGift';
import Hero from '@/modules/home/hero/Hero';
import NewProducts from '@/modules/home/newProducts/NewProducts';
import Reviews from '@/modules/home/reviews/Reviews';
import Socials from '@/shared/components/socials/Socials';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HelpChooseGift />
      <Bestsellers />
      <NewProducts />
      <DiscountedProducts />
      <About />
      <Reviews />
      <Socials />
    </>
  );
}
