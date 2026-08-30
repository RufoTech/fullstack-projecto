import QrafikTemplatePage from "./QrafikTemplatePage";
import type { SitePage } from "@/data/sitePages";

/**
 * Shared service-page shell. Its section hierarchy follows the IT Business
 * Analysis reference while each route supplies only its own service content.
 */
export default function ITBusinessAnalysisTemplatePage({ page }: { page: SitePage }) {
  return <QrafikTemplatePage page={page} />;
}
