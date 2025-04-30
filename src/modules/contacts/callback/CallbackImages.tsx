import Image from 'next/image';

export default function CallbackImages() {
  return (
    <>
      <Image
        src="/images/contactsPage/callback/figureLeftMob.svg"
        alt="background"
        width="114"
        height="92"
        className="md:hidden absolute -z-10 top-[50px] left-[-59px]"
      />
      <Image
        src="/images/contactsPage/callback/figureLeftDesk.svg"
        alt="background"
        width="422"
        height="268"
        className="hidden xl:block absolute -z-10 top-[302px] left-[-100px]"
      />
      <Image
        src="/images/contactsPage/callback/figureRightDesk.svg"
        alt="background"
        width="422"
        height="268"
        className="hidden xl:block absolute -z-10 top-[300px] right-[-14px]"
      />
    </>
  );
}
