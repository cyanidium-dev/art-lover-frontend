import { Suspense } from 'react';
import About from '@/modules/HomePage/about/About';
import Bestsellers from '@/modules/HomePage/bestsellers/Bestsellers';
import Categories from '@/modules/HomePage/categories/Categories';
import DiscountedProducts from '@/modules/HomePage/discountedProducts/DiscountedProducts';
import HelpChooseGift from '@/modules/HomePage/helpChooseGift/HelpChooseGift';
import Hero from '@/modules/HomePage/hero/Hero';
import NewProducts from '@/modules/HomePage/newProducts/NewProducts';
import Reviews from '@/modules/HomePage/reviews/Reviews';
import Socials from '@/modules/HomePage/socials/Socials';
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
