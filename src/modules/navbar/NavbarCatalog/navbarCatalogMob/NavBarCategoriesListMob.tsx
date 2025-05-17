import { categoriesList } from '../mockedData';
import NavBarCategoryItemMob from './NavBarCategoryItemMob';

interface NavBarCategoriesListMobProps {
  onClose: () => void;
}

export default function NavBarCategoriesListMob({
  onClose,
}: NavBarCategoriesListMobProps) {
  return (
    <ul className="flex flex-col gap-3 px-8 md:px-[23px] md:pt-8">
      {categoriesList.map((category, idx) => (
        <li key={idx} className="group">
          <NavBarCategoryItemMob category={category} onClose={onClose} />
        </li>
      ))}
    </ul>
  );
}
