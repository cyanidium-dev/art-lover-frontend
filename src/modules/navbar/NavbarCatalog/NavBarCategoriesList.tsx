import AccessoriesIcon from '@/shared/components/icons/categoriesIcons/AccessoriesIcon';
import CosmeticsIcon from '@/shared/components/icons/categoriesIcons/CosmeticsIcon';
import CreativeSetIcon from '@/shared/components/icons/categoriesIcons/CreativeSetIcon';
import DecorIcon from '@/shared/components/icons/categoriesIcons/DecorIcon';
import DiscountsIcon from '@/shared/components/icons/categoriesIcons/DiscountsIcon';
import GiftIcon from '@/shared/components/icons/categoriesIcons/GiftIcon';
import HobbyIcon from '@/shared/components/icons/categoriesIcons/HobbyIcon';
import NewProductsIcon from '@/shared/components/icons/categoriesIcons/NewProducts';
import PalletteIcon from '@/shared/components/icons/categoriesIcons/PalletteIcon';
import PenIcon from '@/shared/components/icons/categoriesIcons/PenIcon';
import NavBarCategoryItem from './NavBarCategoryItem';

interface NavBarCategoriesListProps {
  onClose: () => void;
}

const categoriesList = [
  { icon: <GiftIcon />, slug: 'gifts', title: 'Подарунки', subCategories: [] },
  {
    icon: <CreativeSetIcon />,
    title: 'Творчі набори',
    slug: 'creative-sets',
    subCategories: [
      {
        title: 'StringArt картини нитками',
        slug: 'string-art-kartyny-nytkamy',
      },
      { title: 'Картина за номерами', slug: 'kartyna-za-nomeramy' },
      { title: 'Алмазна мозаїка', slug: 'almazna-mozajika' },
      { title: 'Вишивання', slug: 'vyshyvannja' },
      { title: 'Інші', slug: 'inshi' },
    ],
  },
  {
    icon: <PalletteIcon />,
    title: 'Художні товари',
    slug: 'art-products',
    subCategories: [],
  },
  {
    icon: <HobbyIcon />,
    title: 'Хобі та розваги',
    slug: 'hobby',
    subCategories: [],
  },
  {
    icon: <CosmeticsIcon />,
    title: 'Косметичні засоби',
    slug: 'cosmetics',
    subCategories: [],
  },
  { icon: <DecorIcon />, title: 'Декор', slug: 'decor', subCategories: [] },
  {
    icon: <PenIcon />,
    title: 'Канцелярія',
    slug: 'stationery',
    subCategories: [],
  },
  {
    icon: <AccessoriesIcon />,
    title: 'Аксесуари',
    slug: 'accessorise',
    subCategories: [],
  },
  {
    icon: <DiscountsIcon />,
    title: 'Знижки',
    slug: 'discounts',
    subCategories: [],
  },
  {
    icon: <NewProductsIcon />,
    title: 'Новинки',
    slug: 'new-products',
    subCategories: [],
  },
];

export default function NavBarCategoriesList({}: NavBarCategoriesListProps) {
  return (
    <ul className="flex flex-col gap-3 pl-8 pr-7">
      {categoriesList.map((category, idx) => (
        <NavBarCategoryItem key={idx} category={category} />
      ))}
    </ul>
  );
}
