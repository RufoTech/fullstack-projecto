import type { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "UI/UX dizayn - Webora",
  description:
    "İstifadəçi təcrübəsinə fokuslanan UI/UX dizayn xidməti. Məhsulunuzu aydın, rahat və nəticə verən interfeysə çeviririk.",
};

const STYLESHEETS = [
  "/qrafik-dizayn/css/slick.css",
  "/qrafik-dizayn/css/mainnew.css",
  "/qrafik-dizayn/css/career.css",
  "/qrafik-dizayn/css/style.min.css",
  "/qrafik-dizayn/css/tehsil.css",
  "/qrafik-dizayn/css/modals.css",
  "/qrafik-dizayn/css/studio-theme.css",
];

export default function QrafikDizaynLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {STYLESHEETS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      {children}
    </>
  );
}
