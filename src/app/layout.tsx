import { Metadata } from "next";

import Header from "@/widgets/Header/Header"; // Исправлен импорт: добавлен алиас '@' и убраны лишние кавычки
import Footer from "@/widgets/Footer/Footer"; // Исправлен импорт: добавлен алиас '@' и убраны лишние кавычки

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
