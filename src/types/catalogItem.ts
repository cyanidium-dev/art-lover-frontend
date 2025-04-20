import { LucideIcon } from "lucide-react";

export type CatalogItem = {
    id: string;
    name: string;
    link: string;
    icon: LucideIcon;
    subItems?: { id: string; name: string; link: string }[];

};
