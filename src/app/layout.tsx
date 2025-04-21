import { Metadata } from "next";

import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

import "./globals.scss";

export const metadata: Metadata = {
  title: 'Guitar Lavka',
  description: 'Guitar Lavka - Онлайн-магазин гитар и аксессуаров',
}

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" as="image" href="public/assets/images/Banners/banner1/banner1_1x.webp" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
