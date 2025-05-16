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

export const categoriesList = [
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
    subCategories: [
      {
        title: 'StringArt картини нитками',
        slug: 'string-art-kartyny-nytkamy',
      },
      { title: 'Картина за номерами', slug: 'kartyna-za-nomeramy' },
      { title: 'Алмазна мозаїка', slug: 'almazna-mozajika' },
      { title: 'Вишивання', slug: 'vyshyvannja' },
      { title: 'Інші', slug: 'inshi' },
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
    icon: <HobbyIcon />,
    title: 'Хобі та розваги',
    slug: 'hobby',
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
    icon: <CosmeticsIcon />,
    title: 'Косметичні засоби',
    slug: 'cosmetics',
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
    icon: <DecorIcon />,
    title: 'Декор',
    slug: 'decor',
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
    icon: <PenIcon />,
    title: 'Канцелярія',
    slug: 'stationery',
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
    icon: <AccessoriesIcon />,
    title: 'Аксесуари',
    slug: 'accessorise',
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
