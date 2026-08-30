import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  variable: "--font-geist-sans",
  src: "./fonts/geist-latin.woff2",
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  src: "./fonts/geist-mono-latin.woff2",
});

export const metadata: Metadata = {
  title: "Webora | Rəqəmsal məhsul studiyası",
  description: "Webora strategiya, UI/UX dizayn və development ilə nəticə verən rəqəmsal məhsullar hazırlayır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
