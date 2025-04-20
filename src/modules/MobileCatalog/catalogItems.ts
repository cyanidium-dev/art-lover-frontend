import { CatalogItem } from "@/types/catalogItem";
import {
    Gift,
    PackageSearch,
    Paintbrush,
    Gamepad2,
    SprayCan,
    Sparkles,
    Pencil,
    Gem,
    BadgePercent,
    Sparkle,
  
} from 'lucide-react';


export const catalogItems: CatalogItem[] = [
    {
        id: '1', name: 'Подарунки', link: '/gifts', icon: Gift,
        subItems: [
            { id: '11', name: 'Подарунки для жінок', link: '/gifts/women' },
            { id: '12', name: 'Подарунки для чоловіків', link: '/gifts/man' },]
    },
    {
        id: '2', name: 'Творчі набори', link: '/art', icon: PackageSearch, subItems: [
            { id: "21", name: 'StringArt картини нитками', link: '/art/string-art' },
            { id: '23', name: 'Картини за номерами', link: '/art/paint-by-numbers' },
            { id: '22', name: 'Алмазна мозаїка', link: '/art/diamond' },
            { id: '24', name: 'Вишивання', link: '/art/embroidery' },
            { id: '25', name: 'Інші', link: '/art/other' },
        ],
    },
    { id: '3', name: 'Художні товари', link: '/art', icon: Paintbrush },
    { id: '4', name: 'Хобі та розваги', link: '/hobby', icon: Gamepad2 },
    { id: '5', name: 'Косметичні засоби', link: '/cosmetics', icon: SprayCan },
    { id: '6', name: 'Декор', link: '/decor', icon: Sparkles },
    { id: '7', name: 'Канцелярія', link: '/stationery', icon: Pencil },
    { id: '8', name: 'Аксесуари', link: '/accessories', icon: Gem },
    { id: '9', name: 'Знижки', link: '/sale', icon: BadgePercent },
    { id: '10', name: 'Новинки', link: '/new', icon: Sparkle },
];