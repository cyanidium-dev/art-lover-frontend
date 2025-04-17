import Mono from "@/shared/components/Payments/Mono"
import PayLogo from "@/shared/components/Payments/Mono"
import Pay from "@/shared/components/Payments/Pay"
import Facebook from "@/shared/components/Social/Facebook/Facebook"
import Instagram from "@/shared/components/Social/Instagram/Instagram"
import TikTok from "@/shared/components/Social/Tiktok/Tiktok"
import YouTube from "@/shared/components/Social/YouTube/YouTube"

const Footer = () => {
    return (
        <div>
            <footer className="bg-[var(--main-dark-color)] text-white py-[40px] px-[32px] text-[14px]">
                <div className="mb-6">
                    <a href="#gifts"><p className="text-[var(--main-orange)] font-semibold">0 800 550 130</p></a>
                    <p className="text-[12px]">Безкоштовно</p>
                    <p className="mt-4 font-semibold">Пн-Пт: 09:00-00:00<br />Сб-Нд: 10:00-20:00</p>
                </div>

                <div className="mb-6">
                    <p className="text-[var(--main-orange)] font-semibold mb-2">Каталог</p>
                    <ul className="space-y-3 font-normal">
                        <li>Подарунки</li>
                        <li>Товари для творчості</li>
                        <li>Творчі набори</li>
                        <li>Художні товари</li>
                        <li>Хобі та розваги</li>
                        <li>Косметичні засоби</li>
                        <li>Декор</li>
                        <li>Канцелярія</li>
                        <li>Аксесуари</li>
                    </ul>
                </div>

                <div className="mb-[32px]">
                    <p className="text-[var(--main-orange)] font-semibold mb-2">Про компанію</p>
                    <ul className="space-y-3 font-normal">
                        <li>Про нас</li>
                        <li>Блог</li>
                        <li>Контакти</li>
                        <li>Оплата та доставка</li>
                        <li>Публічний договір</li>
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