'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Container from '@/shared/components/container/Container';
import TabMenu from './TabMenu';

export default function Checkout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const menu = searchParams.get('delivery') || 'ukraine';
  const [activeTab, setActiveTab] = useState(menu);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (!params.get('delivery')) {
      params.set('delivery', 'ukraine');
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  return (
    <section className="xl:pt-5 pb-20 xl:pb-[140px]">
      <Container>
        <h1 className="mb-5 xl:mb-7 text-[18px] xl:text-[32px] font-semibold leading-[140%] xl:leading-[120%] uppercase text-center">
          Оформлення замовлення
        </h1>
        <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      </Container>
    </section>
  );
}
