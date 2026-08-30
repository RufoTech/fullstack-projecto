import "../qrafik-dizayn/page.css";

const STYLESHEETS = [
  "/qrafik-dizayn/css/slick.css",
  "/qrafik-dizayn/css/mainnew.css",
  "/qrafik-dizayn/css/career.css",
  "/qrafik-dizayn/css/style.min.css",
  "/qrafik-dizayn/css/tehsil.css",
  "/qrafik-dizayn/css/modals.css",
  "/qrafik-dizayn/css/studio-theme.css",
];

export default function ElaqeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {STYLESHEETS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
      {children}
    </>
  );
}
