import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

import Navbar from '@/modules/navbar/Navbar';
import SubscribeNews from '@/modules/subscribeNews/SubscribeNews';
import Footer from '@/modules/footer/Footer';

import '../styles/style.css';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});
const denistina = localFont({
  src: './denistina.ttf',
  variable: '--font-denistina',
});

export const metadata: Metadata = {
  title: 'Art Lover',
  description: "Ідеальні арт-товари для ваших об'єктів",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${denistina.variable} relative z-[1] flex min-h-screen flex-col antialiased
          `}
      >
        <div id="modal" style={{ zIndex: 100 }}></div>
        <Navbar />
        <main className="flex-1">{children}</main>
        <SubscribeNews />
        <Footer />
      </body>
    </html>
  );
}
