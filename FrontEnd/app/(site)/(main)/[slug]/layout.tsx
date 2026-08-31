import "../qrafik-dizayn/page.css";
import "../mezunlarimiz/mezunlar.css";

const STYLESHEETS = [
  "/qrafik-dizayn/css/slick.css",
  "/qrafik-dizayn/css/mainnew.css",
  "/qrafik-dizayn/css/career.css",
  "/qrafik-dizayn/css/style.min.css",
  "/qrafik-dizayn/css/tehsil.css",
  "/qrafik-dizayn/css/modals.css",
  "/qrafik-dizayn/css/studio-theme.css",
];

type DynamicSiteLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>;

export default async function DynamicSiteLayout({ children, params }: DynamicSiteLayoutProps) {
  const { slug } = await params;
  const usesReferenceDesign = slug !== "is-prosesimiz" && slug !== "layiheler";

  return (
    <>
      {usesReferenceDesign && STYLESHEETS.map((href) => <link key={href} rel="stylesheet" href={href} />)}
      {children}
    </>
  );
}
