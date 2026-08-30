import { Suspense } from "react";
import type { Metadata } from "next";
import KaryeraMerkezi from "./KaryeraMerkezi";

export const metadata: Metadata = {
  title: "İş prosesimiz - Webora",
  description:
    "Webora-da hər layihə qısa kəşf, düşünülmüş dizayn və şəffaf development mərhələləri ilə irəliləyir.",
};

export default function KaryeraMerkeziPage() {
  return (
    <Suspense fallback={null}>
      <KaryeraMerkezi />
    </Suspense>
  );
}
