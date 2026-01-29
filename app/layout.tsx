import type { Metadata } from "next";
import { Inter, Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["cyrillic"],
});

const inter = Inter({
  variable: "--font-gilroy",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Fitness app",
  description: "Fitness app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`bg-white ${inter.variable} ${montserrat.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
