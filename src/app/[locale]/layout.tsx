import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import Navbar from '@/modules/navbar/Navbar';
import SubscribeNews from '@/modules/subscribeNews/SubscribeNews';
import Footer from '@/modules/footer/Footer';

import '../../styles/style.css';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});
const denistina = localFont({
  src: '../denistina.ttf',
  variable: '--font-denistina',
});

export const metadata: Metadata = {
  title: 'Art Lover',
  description: "Ідеальні арт-товари для ваших об'єктів",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${denistina.variable} relative z-[1] flex min-h-screen flex-col antialiased
          `}
      >
        <NextIntlClientProvider>
          <div id="modal" style={{ zIndex: 100 }}></div>
          <Navbar />
          <main className="flex-1">{children}</main>
          <SubscribeNews />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
