import Callback from '@/modules/contacts/callback/Callback';
import ContactsInfo from '@/modules/contacts/contactsInfo/ContactsInfo';
import Hero from '@/modules/contacts/hero/Hero';
import Socials from '@/shared/components/socials/Socials';

export default function page() {
  return (
    <>
      <Hero />
      <ContactsInfo />
      <Callback />
      <Socials />
    </>
  );
}
