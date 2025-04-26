import { socials } from './mockedData';
import InstagramIcon from '@/shared/components/icons/InstagramIcon';
import YoutubeIcon from '@/shared/components/icons/YoutubeIcon';
import TiktokIcon from '@/shared/components/icons/TiktokIcon';
import FacebookIcon from '@/shared/components/icons/FacebookIcon';
import SocialItem from './SocialItem';

export default function SocialsList() {
  if (!socials) {
    return null;
  }

  const { instagram, youtube, tiktok, facebook } = socials;

  const socialList = [
    {
      title: 'Instagram',
      link: instagram?.url || '',
      icon: <InstagramIcon className="size-10 lg:size-23" />,
      qty: instagram?.qty || '',
      bgImageMob: '/images/homePage/socials/imageOneMob.svg',
      bgImageDesk: '/images/homePage/socials/imageOneDesk.svg',
    },
    {
      title: 'Youtube',
      link: youtube?.url || '',
      icon: <YoutubeIcon className="size-10 lg:size-23" />,
      qty: youtube?.qty || '',
      bgImageMob: '/images/homePage/socials/imageTwoMob.svg',
      bgImageDesk: '/images/homePage/socials/imageTwoDesk.svg',
    },
    {
      title: 'Tiktok',
      link: tiktok?.url || '',
      icon: <TiktokIcon className="size-10 lg:size-23" />,
      qty: tiktok?.qty || '',
      bgImageMob: '/images/homePage/socials/imageThreeMob.svg',
      bgImageDesk: '/images/homePage/socials/imageThreeDesk.svg',
    },
    {
      title: 'Facebook',
      link: facebook?.url || '',
      icon: <FacebookIcon className="size-10 lg:size-23" />,
      qty: facebook?.qty || '',
      bgImageMob: '/images/homePage/socials/imageFourMob.svg',
      bgImageDesk: '/images/homePage/socials/imageFourDesk.svg',
    },
  ];

  return (
    <ul className="flex flex-wrap md:flex-nowrap gap-4 xl:gap-5">
      {socialList.map((social, idx) => (
        <SocialItem key={idx} social={social} />
      ))}
    </ul>
  );
}
