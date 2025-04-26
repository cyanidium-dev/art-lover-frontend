import About from '@/modules/HomePage/About/About';
import Bestsellers from '@/modules/HomePage/Bestsellers/Bestsellers';
import Categories from '@/modules/HomePage/Categories/Categories';
import DiscountedProducts from '@/modules/HomePage/DiscountedProducts/DiscountedProducts';
import HelpChooseGift from '@/modules/HomePage/HelpChooseGift/HelpChooseGift';
import Hero from '@/modules/HomePage/Hero/Hero';
import NewProducts from '@/modules/HomePage/NewProducts/NewProducts';
import Reviews from '@/modules/HomePage/Reviews/Reviews';
import Socials from '@/modules/HomePage/Socials/Socials';

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
