import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ITBusinessAnalysisTemplatePage from "@/components/SpecialPages/ITBusinessAnalysisTemplatePage";
import ProjectsReferencePage from "@/components/SpecialPages/ProjectsReferencePage";
import KaryeraMerkezi from "../karyera-merkezi/KaryeraMerkezi";
import { SITE_PAGES, SITE_PAGE_SLUGS } from "@/data/sitePages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SITE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SITE_PAGES[slug];

  if (!page) return {};

  return {
    title: `${page.eyebrow} | Webora`,
    description: page.description,
  };
}

export default async function DynamicSitePage({ params }: PageProps) {
  const { slug } = await params;
  const page = SITE_PAGES[slug];

  if (!page) notFound();

  if (slug === "is-prosesimiz") {
    return (
      <Suspense fallback={null}>
        <KaryeraMerkezi basePath="/is-prosesimiz" />
      </Suspense>
    );
  }
  if (slug === "layiheler") return <ProjectsReferencePage />;

  return <ITBusinessAnalysisTemplatePage page={page} />;
}
