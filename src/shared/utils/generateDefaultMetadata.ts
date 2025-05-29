import { Metadata } from 'next';

export function getDefaultMetadata(
  t: (key: string) => string,
  locale: string
): Metadata {
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'uk' ? 'uk_UA' : locale === 'ru' ? 'ru_RU' : 'en_US',
      siteName: 'Art Lover',
    },
  };
}
