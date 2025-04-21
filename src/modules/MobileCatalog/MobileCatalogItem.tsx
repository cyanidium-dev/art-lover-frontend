import Link from "next/link";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    item: {
        id: string, name: string, link: string, icon: LucideIcon, subItems?: { id: string; name: string; link: string }[]
    }
    onClose?: () => void
}
const MobileCatalogItem = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <li key={props.item.id}>
            <div
                className="flex items-center justify-between gap-2 cursor-pointer"
                onClick={() => props.item.subItems && setOpen(!open)}
            >
                <div className="flex items-center gap-2">
                    <props.item.icon size={20} className="text-[var(--main-dark-color)]" />
                    <Link
                        onClick={props.onClose}

                        href={props.item.link}
                        className="hover:text-[var(--main-orange)] transition-colors"
                    >
                        {props.item.name}
                    </Link>
                </div>
                {/* Arrow icon for sub-items */}
                <div>
                    {props.item.subItems && (
                    <button
                            className="flex items-center justify-center  rounded w-[32px] h-[32px] text-[var(--main-dark-color)]"
                        type="button"
                        onClick={() => setOpen(!open)}
                        >
                        {open ? (
                            <ChevronDown size={16} className="text-[var(--main-orange)]" />
                        ) : (
                            <ChevronRight size={16} className="text-[var(--main-orange)]" />
                        )}
                      
                    </button>
                )}
                </div>
            </div>

            
            <AnimatePresence initial={false}>
                {open && props.item.subItems && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-6 mt-2 space-y-1 text-xs text-[var(--main-dark-color)]"
                    >
                        {props.item.subItems.map((subItem) => (
                            <li key={subItem.id}>
                                <Link
                                    onClick={props.onClose}

                                    href={subItem.link}
                                    className="hover:text-[var(--main-orange)] transition-colors"
                                >
                                    {subItem.name}
                                </Link>                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
};
export default MobileCatalogItem