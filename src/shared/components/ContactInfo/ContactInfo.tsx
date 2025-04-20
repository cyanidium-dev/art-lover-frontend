import { Mail, Phone, Calendar } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className='mb-16'>
        
            <div className="bg-[#FFF3EF] rounded-xl  text-center text-[var(--main-dark-color)] space-y-6 font-medium relative py-5">
            {/* Phone */}
            <div className=" space-y-1 font-medium text-[14px] ">
                    <div className="flex absolute justify-center    top-[-16px] left-1/2 transform -translate-x-1/2">
                        <a href="tel:0800550130">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[var(--main-orange)] hover:text-white transition-colors duration-300">
                                <Phone size={20} />
                            </div>
                        </a>
                </div>
                    <p className="pt-10 font-semibold text-[16px]">Телефон</p>
                <p>0 800 550 130</p>
                    <p >Лінія 1 – Інтернет магазин</p>
                    <p >Лінія 2 – корпоративним клієнтам</p>
            </div>

            {/* Email */}
                <div className="space-y-1 text-[14px]">
                    <div className="flex justify-center">
                        <a href="mailto:artlovershop@gmail.com">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[var(--main-orange)] hover:text-white transition-colors duration-300">
                                <Mail size={20} />
                            </div>
                        </a>
                    </div>
                    <p className="font-semibold ">Електронна адреса</p>
                <p>artlovershop@gmail.com</p>
                <p>korpartlover@gmail.com</p>
                <p className="">(для корпоративних клієнтів)</p>
            </div>

            {/* Working hours */}
                <div className="space-y-1 font-medium text-[14px]">
                <div className="flex justify-center">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md ">
                        <Calendar size={20} />
                    </div>
                </div>
                <p className="font-semibold">Гаряча лінія працює</p>
                <p>Пн-Пт: 09:00–00:00</p>
                <p>Сб-Нд: 10:00–20:00</p>
            </div>
            </div>
             <div className='border py-5 absolute'>
            </div>
        </div>
    );
};

export default ContactInfo;
