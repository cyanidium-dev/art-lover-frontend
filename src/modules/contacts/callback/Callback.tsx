import Image from 'next/image';
import Container from '@/shared/components/container/Container';
import CallBackFormWithNotifications from './CallbackFormWithNotifications';
import CallbackImages from './CallbackImages';

export default function Callback() {
  return (
    <section className="pt-20 xl:pt-[140px] xl:pb-[70px]">
      <Container className="relative">
        <CallbackImages />
        <h2 className="mb-3 xl:mb-4 text-[20px] xl:text-[32px] font-medium leading-[120%] text-center uppercase">
          Ваше повідомлення
        </h2>
        <p className="mb-8 xl:mb-[44px] text-[14px] xl:text-[18px] font-medium leading-[120%] text-center">
          Заповніть форму – і ми з вами зв’яжемося
        </p>
        <div className="md:flex gap-5">
          <div className="hidden md:block relative w-[32%] h-[350px] rounded-[16px] overflow-hidden">
            <Image
              src="/images/contactsPage/callback/imageOne.webp"
              alt="envelope with heart"
              fill
              className="object-cover"
            />
          </div>
          <CallBackFormWithNotifications className="w-full md:w-[calc(68%-20px)]" />
        </div>
      </Container>
    </section>
  );
}
