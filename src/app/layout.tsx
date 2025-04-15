import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Navbar from "@/modules/Navbar/Navbar";

import "../styles/style.css";

const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
    subsets: ["latin", "cyrillic"],
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
    <html lang="en">
      <body
        className={`${montserrat.variable}`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
