import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import "../styles/style.css";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});
const denistina = localFont({
  src: "./denistina.ttf",
  variable: "--font-denistina",

});

export const metadata: Metadata = {
  title: "Art Lover",
  description: "Ідеальні арт-товари для ваших об'єктів",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${montserrat.variable} ${denistina.variable}
          `}>
        {children}
      </body>
    </html >
  );
}
