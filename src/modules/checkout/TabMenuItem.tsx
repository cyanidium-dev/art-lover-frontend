interface TabMenuItemProps {
  menuItem: { title: string; value: string };
  activeTab: string;
  handleTabClick: () => void;
}

export default function TabMenuItem({
  menuItem,
  activeTab,
  handleTabClick,
}: TabMenuItemProps) {
  const { title, value } = menuItem;
  return (
    <li className="w-[calc(50%-8px)] lg:w-[calc(50%-15px)]">
      <button
        onClick={handleTabClick}
        className={`cursor-pointer flex items-center justify-center w-full h-[35px] xl:h-[75px] px-5 py-[2.5] border rounded-[8px] xl:rounded-[12px]
            text-[12px] xl:text-[18px] font-medium leading-none uppercase xl:hover:bg-orange-light
             xl:hover:border-orange-light xl:hover:text-white focus-visible:bg-orange-light focus-visible:order-orange-light 
             focus-visible:hover:text-white active:scale-[99%] transition duration-300 ease-in-out ${
               value === activeTab
                 ? 'bg-orange border-orange text-white'
                 : 'bg-white border-gray-light text-dark'
             }`}
      >
        {title}
      </button>
    </li>
  );
}
