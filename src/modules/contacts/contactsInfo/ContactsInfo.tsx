import { contacts } from './mockedData';
import { phoneRegex } from '@/shared/regex/regex';
import Container from '@/shared/components/container/Container';
import Image from 'next/image';
import ContactsInfoImages from './ContactsInfoImages';

export default function ContactsInfo() {
  const { phone, emails } = contacts;
  return (
    <section className="pt-16 xl:pt-[106px]">
      <Container className="relative">
        <ContactsInfoImages />
        <ul className="md:flex md:gap-x-5 lg:gap-x-15 xl:gap-x-[110px] px-3 lg:px-8 xl:px-15 md:pb-10 md:pt-16 rounded-[8px] xl:rounded-[16px] bg-orange-light/12">
          <li className="relative md:w-[calc(33.33%-13.3px)] lg:w-[calc(33.33%-40px)] xl:w-[calc(33.33%-73.33px)] pt-[45px] pb-14 md:p-0">
            <Image
              src="/images/contactsPage/contactsInfo/phone.svg"
              alt="phone"
              width={64}
              height={64}
              className="absolute -top-8 md:top-[-104px] left-[calc(50%-32px)] w-16 md:w-20 h-auto"
            />
            <h3 className="mb-3 xl:mb-5 text-[16px] xl:text-[20px] font-semibold leading-[160%] text-center">
              Телефон
            </h3>
            <a
              href={`tel:+${phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone number"
              className="block mb-3 xl:mb-5 text-[14px] xl:text-[18px] font-medium leading-[120%] text-gray-light text-center xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
            >
              {phone
                .replace(/^\+38/, '')
                .replace(/^380/, '0')
                .replace(/\D/g, '')
                .replace(phoneRegex, '0 $1 $2 $3')}
            </a>
            <p className="mb-2 text-[12px] xl:text-[14px] font-medium leading-[120%] text-center xl:text-left text-gray-light">
              Лінія 1 - інтернет магазин
            </p>
            <p className="text-[12px] xl:text-[14px] font-medium leading-[120%] text-center xl:text-left text-gray-light">
              Лінія 2 - корпоративним клієнтам
            </p>
          </li>
          <li className="relative md:w-[calc(33.33%-13.3px)] lg:w-[calc(33.33%-40px)] xl:w-[calc(33.33%-73.33px)] pt-[45px] pb-14 md:p-0">
            <Image
              src="/images/contactsPage/contactsInfo/email.svg"
              alt="email"
              width={64}
              height={64}
              className="absolute -top-8 md:top-[-104px] left-[calc(50%-32px)] w-16 md:w-20 h-auto"
            />
            <h3 className="mb-3 xl:mb-5 text-[16px] xl:text-[20px] font-semibold leading-[160%] text-center">
              Електронна адреса
            </h3>
            <ul className="flex flex-col gap-y-2 xl:gap-x-3 items-center mb-1 text-gray-light">
              {emails.map((email, idx) => (
                <li key={idx}>
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[14px] xl:text-[18px] font-medium leading-[120%] text-center xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-in-out"
                    aria-label="email"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[14px] font-medium leading-[120%] text-center text-gray-light">
              (для корпоративних клієнтів)
            </p>
          </li>
          <li className="relative md:w-[calc(33.33%-13.3px)] lg:w-[calc(33.33%-40px)] xl:w-[calc(33.33%-73.33px)] pt-[45px] pb-[30px] md:p-0">
            <Image
              src="/images/contactsPage/contactsInfo/calendar.svg"
              alt="calendar"
              width={64}
              height={64}
              className="absolute -top-8 md:top-[-104px] left-[calc(50%-32px)] w-16 md:w-20 h-auto"
            />
            <h3 className="mb-3 xl:mb-5 text-[16px] xl:text-[20px] font-semibold leading-[160%] text-center">
              Гаряча лінія працює
            </h3>
            <p className="mb-2 xl:mb-3 text-[14px] xl:text-[18px] font-medium leading-[120%] text-center text-gray-light">
              Пн-Пт: 09:00-00:00
            </p>
            <p className="text-[14px] xl:text-[18px] font-medium leading-[120%] text-center text-gray-light">
              Сб-Нд: 10:00-20:00
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
