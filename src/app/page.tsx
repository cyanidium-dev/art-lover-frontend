import { Suspense } from 'react';
import About from '@/modules/homePage/about/About';
import Bestsellers from '@/modules/homePage/bestsellers/Bestsellers';
import Categories from '@/modules/homePage/categories/Categories';
import DiscountedProducts from '@/modules/homePage/discountedProducts/DiscountedProducts';
import HelpChooseGift from '@/modules/homePage/helpChooseGift/HelpChooseGift';
import Hero from '@/modules/homePage/hero/Hero';
import NewProducts from '@/modules/homePage/newProducts/NewProducts';
import Reviews from '@/modules/homePage/reviews/Reviews';
import Socials from '@/modules/homePage/socials/Socials';
import Loader from '@/shared/components/loader/Loader';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HelpChooseGift />
      <Suspense fallback={<Loader />}>
        <Bestsellers />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <NewProducts />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DiscountedProducts />
      </Suspense>
      <About />
      <Reviews />
      <Suspense fallback={<Loader />}>
        <Socials />
      </Suspense>
    </>
  );
}
