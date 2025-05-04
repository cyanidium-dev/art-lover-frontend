import FooterColumn from '../FooterColumn/FooterColumn';
import Link from 'next/link';
import Image from 'next/image';

const FooterSocial = ()=> {
  return (
    <FooterColumn title="Наші соц. мережі">
      <ul className="flex gap-[16px] items-center xl:block">
        <li className="mb-[16px] xl:mb-[20px]">
          <a href="https://www.instagram.com/" target="_blank" className="flex items-center gap-[12px]">
            <Image
              src="/images/footer/footerSocial/instagramIcon.svg"
              className="xl:hidden"
              alt="background"
              width="20"
              height="20"
            />
            <Image
              src="/images/footer/footerSocial/instagramIcon.svg"
              className="hidden xl:block"
              alt="background"
              width="27"
              height="27"
            />
            <span className="hidden xl:block text-white text-[14px]">Instagram</span>
          </a>
        </li>
        <li className="mb-[16px] xl:mb-[20px]">
          <a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-[12px]">
            <Image
              src="/images/footer/footerSocial/youtubeIcon.svg"
              className="xl:hidden"
              alt="background"
              width="20"
              height="20"
            />
            <Image
              src="/images/footer/footerSocial/youtubeIcon.svg"
              className="hidden xl:block"
              alt="background"
              width="27"
              height="27"
            />
            <span className="hidden xl:block text-white text-[14px]">Youtube</span>
          </a>
        </li>
        <li className="mb-[16px] xl:mb-[20px]">
          <a href="https://www.tiktok.com/" target="_blank" className="flex items-center gap-[12px]">
            <Image
              src="/images/footer/footerSocial/tiktokIcon.svg"
              alt="background"
              className="xl:hidden"
              width="12"
              height="17"
            />
            <Image
              src="/images/footer/footerSocial/tiktokIcon.svg"
              alt="background"
              className="hidden xl:block"
              width="27"
              height="27"
            />
            <span className="hidden xl:block text-white text-[14px]">Tik Tok</span>
          </a>
        </li>
        <li className="mb-[16px] xl:mb-[20px]">
          <a href="https://facebook.com/" target="_blank" className="flex items-center gap-[12px]">
            <Image
              src="/images/footer/footerSocial/facebookIcon.svg"
              alt="background"
              className="xl:hidden"
              width="20"
              height="20"
            />
            <Image
              src="/images/footer/footerSocial/facebookIcon.svg"
              alt="background"
              className="hidden xl:block"
              width="27"
              height="27"
            />
            <span className="hidden xl:block text-white text-[14px]">Facebook</span>
          </a>
        </li>
        <li className="mb-[16px] xl:mb-[20px]">
          <a href="https://monobank.ua/" target="_blank" className="flex items-center gap-[12px]">
            <Image
              src="/images/footer/footerSocial/monopayIcon.svg"
              alt="background"
              className="xl:hidden"
              width="70"
              height="20"
            />
            <Image
              src="/images/footer/footerSocial/monopayIcon.svg"
              alt="background"
              className="hidden xl:block"
              width="76"
              height="23"
            />
          </a>
        </li>
      </ul>
    </FooterColumn>
  )
}

export default FooterSocial;
