import { Metadata } from "next";

import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

import "./globals.scss";
import StoreProvider from "./StoreProvider";

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
        <link rel="icon" href="/assets/images/logo.svg" />
      </head>
      <body>
        <Header />
        <main>
          <StoreProvider>
            {children}
          </StoreProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
