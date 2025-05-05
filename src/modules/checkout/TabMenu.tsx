'use client';
import { Dispatch, SetStateAction } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useScreenWidth } from '@/shared/hooks/useScreenWidth';
import TabMenuItem from './TabMenuItem';

interface TabMenuProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
  const router = useRouter();
  const pathName = usePathname();

  const screenWidth = useScreenWidth();

  const menuList = [
    {
      title: screenWidth > 640 ? 'Доставка ПО УКРАЇНІ' : 'ПО УКРАЇНІ',
      value: 'ukraine',
    },
    {
      title: screenWidth > 640 ? 'Доставка ПО СВІТУ' : 'ПО СВІТУ',
      value: 'worldwide',
    },
  ];

  const handleTabClick = (menu: { title: string; value: string }) => {
    setActiveTab(menu?.value);
    if (pathName === '/checkout') {
      const params = new URLSearchParams(window.location.search);
      params.set('delivery', menu?.value);
      router.push(`?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <ul className="flex gap-4 lg:gap-[30px] lg:w-[620px] xl:w-[820px] lg:mx-auto mb-10 xl:mb-9">
      {menuList.map((menuItem, idx) => (
        <TabMenuItem
          key={idx}
          menuItem={menuItem}
          activeTab={activeTab}
          handleTabClick={() => handleTabClick(menuItem)}
        ></TabMenuItem>
      ))}
    </ul>
  );
}
