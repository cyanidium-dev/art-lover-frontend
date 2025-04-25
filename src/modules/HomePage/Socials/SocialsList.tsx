import { socials } from './mockedData';
import InstagramIcon from '@/shared/components/icons/InstagramIcon';
import YoutubeIcon from '@/shared/components/icons/YoutubeIcon';
import TiktokIcon from '@/shared/components/icons/TiktokIcon';
import FacebookIcon from '@/shared/components/icons/FacebookIcon';

export default function SocialsList() {
  if (!socials) {
    return null;
  }

  const { instagram, youtube, tiktok, facebook } = socials;

  const socialList = [
    { link: instagram || '', icon: <InstagramIcon /> },
    { link: youtube || '', icon: <InstagramIcon /> },
    { link: tiktok || '', icon: <InstagramIcon /> },
    { link: facebook || '', icon: <FacebookIcon /> },
  ];

  return <ul>SocialsList</ul>;
}
