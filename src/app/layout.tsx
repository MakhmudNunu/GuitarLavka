import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="ru">
      <head>
        <title>Guitar Lavka</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
