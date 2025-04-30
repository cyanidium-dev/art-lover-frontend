import Image from 'next/image';

export default function ContactsInfoImages() {
  return (
    <>
      <Image
        src="/images/contactsPage/contactsInfo/figureLeftMob.svg"
        alt="background"
        width="127"
        height="533"
        className="xl:hidden absolute -z-10 top-[-62px] left-[-69px]"
      />
      <Image
        src="/images/contactsPage/contactsInfo/figurerightMob.svg"
        alt="background"
        width="114"
        height="92"
        className="xl:hidden absolute -z-10 top-[178px] right-[-24px]"
      />
      <Image
        src="/images/contactsPage/contactsInfo/figureLeftDesk.svg"
        alt="background"
        width="310"
        height="403"
        className="hidden xl:block absolute -z-10 top-[-232px] left-[-169px]"
      />
      <Image
        src="/images/contactsPage/contactsInfo/figureRightDesk.svg"
        alt="background"
        width="341"
        height="441"
        className="hidden xl:block absolute -z-10 top-[-210px] right-[-124px]"
      />
    </>
  );
}
