import Mono from "@/shared/components/Payments/Mono"
import Pay from "@/shared/components/Payments/Pay"
import Facebook from "@/shared/components/Social/Facebook/Facebook"
import Instagram from "@/shared/components/Social/Instagram/Instagram"
import TikTok from "@/shared/components/Social/Tiktok/Tiktok"
import YouTube from "@/shared/components/Social/YouTube/YouTube"
import Link from "next/link"

const Footer = () => {
    return (
        <div>
            <footer className="bg-[var(--main-dark-color)] text-white py-[40px] px-[32px] text-[14px]">
                <div className="mb-6">
                    <a href="tel:0800550130">
                        <p className="text-[var(--main-orange)] font-semibold">0 800 550 130</p>
                    </a>
                    <p className="text-[12px]">Безкоштовно</p>
                    <p className="mt-4 font-semibold">Пн-Пт: 09:00-00:00<br />Сб-Нд: 10:00-20:00</p>
                </div>

                <div className="mb-6">
                    <p className="text-[var(--main-orange)] font-semibold mb-2">Каталог</p>
                    <ul className="space-y-3 font-normal">
                        <li><Link href="catalog/gift" className="hover:text-[var(--main-orange)] transition">Подарунки</Link></li>
                        <li><Link href="/creative-products" className="hover:text-[var(--main-orange)] transition">Товари для творчості</Link></li>
                        <li><Link href="/kits" className="hover:text-[var(--main-orange)] transition">Творчі набори</Link></li>
                        <li><Link href="/art" className="hover:text-[var(--main-orange)] transition">Художні товари</Link></li>
                        <li><Link href="/hobbies" className="hover:text-[var(--main-orange)] transition">Хобі та розваги</Link></li>
                        <li><Link href="/cosmetics" className="hover:text-[var(--main-orange)] transition">Косметичні засоби</Link></li>
                        <li><Link href="/decor" className="hover:text-[var(--main-orange)] transition">Декор</Link></li>
                        <li><Link href="/stationery" className="hover:text-[var(--main-orange)] transition">Канцелярія</Link></li>
                        <li><Link href="/accessories" className="hover:text-[var(--main-orange)] transition">Аксесуари</Link></li>
                    </ul>
                </div>

                <div className="mb-[32px]">
                    <p className="text-[var(--main-orange)] font-semibold mb-2">Про компанію</p>
                    <ul className="space-y-3 font-normal">
                        <li><Link href="/about" className="hover:text-[var(--main-orange)] transition">Про нас</Link></li>
                        <li><Link href="/blog" className="hover:text-[var(--main-orange)] transition">Блог</Link></li>
                        <li><Link href="/contacts" className="hover:text-[var(--main-orange)] transition">Контакти</Link></li>
                        <li><Link href="/shipping" className="hover:text-[var(--main-orange)] transition">Оплата та доставка</Link></li>
                        <li><Link href="/terms" className="hover:text-[var(--main-orange)] transition">Публічний договір</Link></li>
                    </ul>
                </div>

                <div className="flex gap-4 items-center">
                    <Mono width={32} />
                    <Pay />
                    <Instagram className="w-[24px] h-[24px]" />
                    <YouTube className="w-[24px] h-[24px]" fill="#FFF" stroke="#FFF" />
                    <TikTok className="w-[24px] h-[24px]" />
                    <Facebook className="w-[24px] h-[24px]" fill="#FFF" />

                </div>
            </footer>

        </div>
    )
}
export default Footer