import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SecondaryButton from '../../buttons/SecondaryButton';
import PlusIcon from '../../icons/PlusIcon';

export default function AdditionalOptions() {
  const t = useTranslations('checkoutPage.form');

  const additionalOptions = [
    {
      title: t('packaging'),
      price: 100,
      image: { url: '/images/mockedData/productImageOne.webp', alt: '' },
    },
    {
      title: t('postcard'),
      price: 30,
      image: { url: '/images/mockedData/productImageOne.webp', alt: '' },
    },
  ];
  return (
    <ul
      className="flex flex-col gap-y-3 h-[262px] overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-[2.5px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-orange scrollbar-track-transparent"
    >
      {additionalOptions.map(({ image, title, price }, idx) => (
        <li
          key={idx}
          className="flex gap-x-[25px] px-3 py-[11px] rounded-[8px] border border-gray-light"
        >
          <div className="relative shrink-0 aspect-[90/101] w-[90px] overflow-hidden rounded-[6px]">
            <Image
              src={image?.url}
              alt={image?.alt || 'product photo'}
              fill
              sizes="33vw"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p
              className={`mb-2 xl:mb-3 text-[12px] xl:text-[14px] font-medium leading-[120%] line-clamp-2 xl:line-clamp-1`}
            >
              {title}
            </p>
            <p
              className={`mb-[17px] text-[13px] xl:text-[16px] font-semibold leading-[120%]`}
            >
              {price}
              {t('hrn')}
            </p>
            <SecondaryButton
              className="gap-x-[34px] w-[79px] xl:w-[132px] h-7 xl:h-[35px]"
              textStyles="text-[10px] xl:text-[12px] font-medium"
            >
              {t('addButton')}
              <PlusIcon className="hidden xl:block size-3.5" />
            </SecondaryButton>
          </div>
        </li>
      ))}
    </ul>
  );
}
