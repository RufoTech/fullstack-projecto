import type { Metadata } from "next";
import "./mezunlar.css";

export const metadata: Metadata = {
  title: "Layihələrimiz - Webora",
  description:
    "Webora müştəriləri ilə birlikdə hazırladığı rəqəmsal məhsulları və əməkdaşlıq hekayələrini təqdim edir.",
};

export default function MezunlarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="code-mezunlar-page">{children}</div>;
}
