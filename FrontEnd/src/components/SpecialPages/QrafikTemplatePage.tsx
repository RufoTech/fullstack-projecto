"use client";

import { useEffect, useMemo } from "react";
import type { SitePage } from "@/data/sitePages";
import { QRAFIK_MARKUP } from "../../../app/(site)/(main)/qrafik-dizayn/markup";

declare global {
  interface Window {
    handle_apply_Click?: () => void;
    contactformname?: string;
    gotopage3?: number;
    newui_awareness_confirmed?: boolean;
    __qrafikScriptsLoaded?: boolean;
    jQuery?: {
      (sel: string): {
        animate: (props: object, ms: number) => void;
        offset: () => { top: number } | undefined;
        val: () => string;
        text: (value?: string) => string;
        on: (event: string, fn: () => void) => void;
        trigger: (event: string) => void;
      };
    };
  }
}

const SCRIPTS = [
  "/qrafik-dizayn/js/jquery.min.js",
  "/qrafik-dizayn/js/jquery-migrate.min.js",
  "/qrafik-dizayn/js/slick.min.js",
  "/qrafik-dizayn/js/more.js",
  "/qrafik-dizayn/js/accordian.js",
  "/qrafik-dizayn/js/contact.js",
  "/qrafik-dizayn/js/detail.js",
  "/qrafik-dizayn/js/selectOption.js",
  "/qrafik-dizayn/js/validations.js",
  "/qrafik-dizayn/js/form-v2.js",
  "/qrafik-dizayn/js/test-v2.js",
  "/qrafik-dizayn/js/companie.js",
  "/qrafik-dizayn/js/lazyload.min.js",
];

const TOOL_IMAGE_SOURCES = [
  "/qrafik-dizayn/AI-1_png.webp",
  "/qrafik-dizayn/PHOTOSHOP_png.webp",
  "/qrafik-dizayn/ADOBE-INDESIGN_png.webp",
  "/qrafik-dizayn/AE-2_png.webp",
  "/qrafik-dizayn/PREMIER-PRO_png.webp",
  "/qrafik-dizayn/Adobe_Acrobat_png.webp",
  "/qrafik-dizayn/Adobe_Firefly_Logo-1_png.webp",
  "/qrafik-dizayn/figma-1_png.webp",
  "/qrafik-dizayn/MAgnific_png.webp",
  "/qrafik-dizayn/chatgpt_png.webp",
  "/qrafik-dizayn/claude_png.webp",
  "/qrafik-dizayn/Gemini_png.webp",
];

const ICON_IMAGES = {
  spark: "/qrafik-dizayn/AI-for-everyone-scaled_png.webp",
  layers: "/qrafik-dizayn/it-business_png.webp",
  pen: "/qrafik-dizayn/Graphic-Design-1_png.webp",
  code: "/qrafik-dizayn/Back-End_png.webp",
  chart: "/qrafik-dizayn/Data-Analitika_png.webp",
  shield: "/qrafik-dizayn/Cyber-Sec_png.webp",
  users: "/qrafik-dizayn/GelecekBurada_png.webp",
  rocket: "/qrafik-dizayn/forfuture_png.webp",
} as const;

const DESKTOP_REFERENCE_MENU = `<ul class="d-flex flex-column">
<li><a class="active" data-target="ministry">Keyfiyyət və proses</a></li>
<li><a data-target="education-program">Xidmət proqramı</a></li>
<li><a data-target="next-groups">İş qrafiki</a></li>
<li><a data-target="arrange-meeting">Müraciət formu</a></li>
</ul>`;

const MOBILE_REFERENCE_MENU = `<ul>
<li class="code-visby-subtitle1-medium"><a class="active" href="#ministry">Keyfiyyət və proses</a></li>
<li class="code-visby-subtitle1-medium"><a href="#education-program">Xidmət proqramı</a></li>
<li class="code-visby-subtitle1-medium"><a href="#next-groups">İş qrafiki</a></li>
<li class="code-visby-subtitle1-medium"><a href="#muraciet_form">Müraciət formu</a></li>
</ul>`;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[data-qrafik-src="${src}"]`)) {
      resolve();
      return;
    }
    const element = document.createElement("script");
    element.src = src;
    element.async = false;
    element.dataset.qrafikSrc = src;
    element.onload = () => resolve();
    element.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(element);
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char] ?? char);
}

type ContentItem = { title: string; text: string };

function replaceAdvantageCards(markup: string, cards: ContentItem[]) {
  let cardIndex = 0;

  return markup.replace(
    /(<div class="code-education-advantages-part-one-card">\s*<img[^>]*>\s*<h6[^>]*>)([\s\S]*?)(<\/h6>\s*<p[^>]*>)([\s\S]*?)(<\/p>\s*<\/div>)/g,
    (match, titleStart, _oldTitle, textStart, _oldText, end) => {
      const card = cards[cardIndex++];
      return card ? `${titleStart}${card.title}${textStart}${card.text}${end}` : match;
    },
  );
}

function replaceProgramAccordions(markup: string, modules: ContentItem[]) {
  let moduleIndex = 0;

  return markup.replace(
    /(<div class="inner-about-short p-2 d-flex flex-column">[\s\S]*?<p class="code-visby-body2-demibold">)([\s\S]*?)(<\/p>[\s\S]*?<div class="inner-about-short-text">\s*<p class="code-visby-subtitle1-medium">\s*)([\s\S]*?)(\s*<\/p>\s*<\/div>\s*<\/div>)/g,
    (match, titleStart, _oldTitle, textStart, _oldText, end) => {
      const programModule = modules[moduleIndex++];
      return programModule ? `${titleStart}${programModule.title}${textStart}${programModule.text}${end}` : "";
    },
  );
}

function bindReferenceMenu() {
  const root = document.querySelector<HTMLElement>(".it-business-analysis-reference-root");
  if (!root) return () => undefined;

  const desktopLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>(".code-education-menu-top a[data-target]"));
  const mobileMenu = root.querySelector<HTMLElement>(".code-education-menu-mobile");
  const mobileLinks = Array.from(mobileMenu?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? []);
  const menuIcon = mobileMenu?.querySelector<HTMLElement>(".menu-icon");
  const closeIcon = mobileMenu?.querySelector<HTMLElement>(".close-icon");
  const targetIds = [...new Set(desktopLinks.map((link) => link.dataset.target).filter((target): target is string => Boolean(target)))];
  const normalizeTarget = (targetId: string) => (targetId === "muraciet_form" ? "arrange-meeting" : targetId);

  const setActive = (targetId: string) => {
    const activeTarget = normalizeTarget(targetId);
    desktopLinks.forEach((link) => link.classList.toggle("active", link.dataset.target === activeTarget));
    mobileLinks.forEach((link) => {
      const linkTarget = link.getAttribute("href")?.slice(1);
      const isActive = linkTarget ? normalizeTarget(linkTarget) === activeTarget : false;
      link.classList.toggle("active", isActive);
      link.closest("li")?.classList.toggle("active", isActive);
    });
  };

  const closeMobileMenu = () => {
    mobileMenu?.classList.remove("active");
    menuIcon?.setAttribute("aria-expanded", "false");
  };

  const scrollToSection = (targetId: string) => {
    const section = root.querySelector<HTMLElement>(`#${targetId}`);
    if (!section) return;

    setActive(targetId);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  const onDesktopClick = (event: Event) => {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLAnchorElement).dataset.target;
    if (targetId) scrollToSection(targetId);
  };

  const onMobileClick = (event: Event) => {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute("href")?.slice(1);
    if (targetId) scrollToSection(targetId);
    closeMobileMenu();
  };

  const onMenuOpen = () => {
    mobileMenu?.classList.add("active");
    menuIcon?.setAttribute("aria-expanded", "true");
  };

  const updateActiveSection = () => {
    const currentScroll = window.scrollY + 160;
    const currentTarget = targetIds.reduce((activeTarget, targetId) => {
      const section = root.querySelector<HTMLElement>(`#${targetId}`);
      if (!section) return activeTarget;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      return sectionTop <= currentScroll ? targetId : activeTarget;
    }, targetIds[0]);

    if (currentTarget) setActive(currentTarget);
  };

  desktopLinks.forEach((link) => link.addEventListener("click", onDesktopClick));
  mobileLinks.forEach((link) => link.addEventListener("click", onMobileClick));
  menuIcon?.addEventListener("click", onMenuOpen);
  closeIcon?.addEventListener("click", closeMobileMenu);
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  updateActiveSection();

  return () => {
    desktopLinks.forEach((link) => link.removeEventListener("click", onDesktopClick));
    mobileLinks.forEach((link) => link.removeEventListener("click", onMobileClick));
    menuIcon?.removeEventListener("click", onMenuOpen);
    closeIcon?.removeEventListener("click", closeMobileMenu);
    window.removeEventListener("scroll", updateActiveSection);
  };
}

function getPageMarkup(page: SitePage) {
  const pagePath = `/${page.slug}`;
  const title = escapeHtml(page.eyebrow);
  const highlight = escapeHtml(page.highlight);
  const description = escapeHtml(page.description);
  const intro = escapeHtml(page.intro);
  const deliverables = page.deliverables.map((item) => escapeHtml(item.title));
  const outcomes = page.outcomes.map(escapeHtml);
  const workflow = page.workflow;
  const process = (workflow?.steps ?? []).map((item) => ({ title: escapeHtml(item.title), text: escapeHtml(item.text) }));
  const deliverableContent = page.deliverables.map((item) => ({
    title: escapeHtml(item.title),
    text: escapeHtml(item.text),
  }));
  const advantages: ContentItem[] = [
    deliverableContent[0],
    deliverableContent[1],
    deliverableContent[2],
    { title: "Şəffaf əməkdaşlıq", text: description },
    { title: "Ölçülə bilən nəticə", text: outcomes[0] ?? description },
    { title: "Davamlı inkişaf", text: outcomes[1] ?? description },
  ].filter((item): item is ContentItem => Boolean(item));
  const programModules: ContentItem[] = process;
  const fallbackToolImages = [
    ...page.deliverables.map((item) => ICON_IMAGES[item.icon]),
    ...page.related.map((item) => ICON_IMAGES[item.icon]),
    ICON_IMAGES.spark,
    ICON_IMAGES.layers,
    ICON_IMAGES.code,
    ICON_IMAGES.shield,
    ICON_IMAGES.chart,
    ICON_IMAGES.rocket,
  ];
  const toolImages = workflow?.steps.map((step, index) => step.icon ?? fallbackToolImages[index] ?? ICON_IMAGES.code) ?? fallbackToolImages;
  const toolLabels = programModules.map((item) => item.title);
  const programToolsTitle = workflow ? escapeHtml(workflow.title) : "";

  let markup = QRAFIK_MARKUP
    .replace(
      '<div class="container-lg container-fluid code-container">',
      '<div class="container-lg container-fluid code-container">',
    )
    .replaceAll('href="/qrafik-dizayn', `href="${pagePath}`)
    .replace('/qrafik-dizayn/Graphic-Design-1-768x768_png.webp', page.image)
    .replace("UI/UX fokuslu", title)
    .replace("Remote və ofis", "Webora ilə")
    .replaceAll("UI/UX dizayn", title)
    .replace("Məhsul və brend üçün", highlight || title)
    .replace(
      "İstifadəçi təcrübəsinə fokuslanan interfeyslər hazırlayırıq. Hər ekran aydın, rahat və biznesinizin növbəti addımını sadələşdirən olsun deyə dizaynı məqsəd üzərindən qururuq.",
      description,
    )
    .replaceAll("Dizayn prosesi", `${title} prosesi`)
    .replaceAll("Dizayn istiqamətləri", `${title} istiqamətləri`)
    .replaceAll("UI/UX", title)
    .replace(
      "Webora-də UI/UX dizayna yalnız vizual bəzək kimi yanaşmırıq. Bizim üçün dizayn ideyanı araşdırmaq, ona aydın istiqamət vermək və onu istifadəçidə nəticə yaradan interfeysə çevirməkdir. Prosesimiz biznesinizin ehtiyacları, auditoriya davranışı və AI-ın açdığı yeni imkanlar əsasında qurulur. Məqsədimiz sadəcə gözəl ekranlar deyil, günün rəqəmsal dilini anlayan, ölçülə bilən və inkişaf etməyə hazır məhsullar verməkdir. İşin mərkəzində praktika dayanır. Hər mərhələdə araşdırır, ideya qurur, moodboard və prototip hazırlayır, kompozisiya və tipoqrafika ilə işləyir, fərqli dizayn üslublarını sınaqdan keçirir və onları real layihəyə tətbiq edirik. Beləliklə, dizayn düşünülür, əsaslandırılır və istiqamətləndirilir. Süni intellekt dizaynerin yerinə qərar verən vasitə deyil; araşdırmanı, vizuallaşdırmanı və iş axınını sürətləndirən yaradıcı köməkçidir.",
      intro,
    );

  markup = markup
    .replace(
      /<div class="code-education-menu-top">\n<ul class="d-flex flex-column">[\s\S]*?<\/ul>/,
      `<div class="code-education-menu-top">\n${DESKTOP_REFERENCE_MENU}`,
    )
    .replace(
      /<div class="menu-dropdown">\n<ul>[\s\S]*?<\/ul>/,
      `<div class="menu-dropdown">\n${MOBILE_REFERENCE_MENU}`,
    )
    .replace(
      '<h2 class="code-visby-h5-bold text-center text-lg-start h5">\n</h2>',
      '<h2 class="code-visby-h5-bold text-center text-lg-start h5">Webora-nın üstünlükləri</h2>',
    )
    .replace(
      '\n</div>\n</section>\n<section class="code-education-ministry',
      `\n</div>\n</section>\n<section class="code-education-ministry`,
    )
    .replaceAll("Portfolioya bax", "Xidmət bələdçisi");

  [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Adobe After Effect",
    "Adobe Premiere Pro",
    "Adobe Acrobat",
    "Adobe FireFly",
    "Figma",
    "Magnific",
    "Chatgpt",
    "Claude",
    "Google Gemini",
  ].forEach((label, index) => {
    markup = markup.replace(label, toolLabels[index] ?? title);
  });

  TOOL_IMAGE_SOURCES.forEach((source, index) => {
    markup = markup.replaceAll(source, toolImages[index] ?? ICON_IMAGES.code);
  });

  [
    ["Praktiki yanaşma", deliverables[0]],
    ["Yekun məhsul", deliverables[1]],
    ["Aydın hesabat", deliverables[2]],
    ["Birbaşa əməkdaşlıq", "Şəffaf əməkdaşlıq"],
    ["Ölçülə bilən nəticə", outcomes[0]],
    ["Dizaynın əsasları: vektor, forma və rəng&nbsp;", `1. ${process[0]?.title ?? "Kəşf və analiz"}`],
    ["Tipoqrafika və vizual iyerarxiya", `2. ${process[1]?.title ?? "Həllin formalaşdırılması"}`],
    ["AI ilə yaradıcı düşüncə və iş axını", `3. ${process[2]?.title ?? "İcra və yoxlama"}`],
    ["Bu alətlərlə işləyirik", programToolsTitle],
  ].forEach(([from, to]) => {
    if (from && to) markup = markup.replaceAll(from, to);
  });

  markup = replaceAdvantageCards(markup, advantages);
  if (workflow) markup = replaceProgramAccordions(markup, programModules);
  markup = markup.replace(
    /<section class="code-education-instructors studio-focus" id="instructors">[\s\S]*?<\/section>\n(?=<section class="code-education-certificate")/,
    "",
  );

  if (!workflow) {
    markup = markup.replace(
      /<div class="inner d-flex flex-column gap-1" id="tools">[\s\S]*?<\/section>\n(?=<section class="code-education-next-groups")/,
      "",
    );
  }

  const firstMetric = page.metrics[0];
  const secondMetric = page.metrics[1];
  const thirdMetric = page.metrics[2];

  [
    ["Layihəyə necə başlanır", `${title}: ilk addım`],
    ["Aşağıdakı bölmədən növbəti kəşf görüşünün vaxtını görün və layihəniz üçün yerinizi tutun.", description],
    ["Görüş formatı", "İş formatı"],
    ["Onlayn / ofis", "Onlayn / ofis əməkdaşlığı"],
    ["Layihə mərhələləri", "Növbəti mərhələ"],
    ["Razılaşdırılmış saat", process[0]?.title ?? "Kəşf və planlama"],
    ["Bizimlə görüş təyin et, prosesimizi, komandamızı və UI/UX yanaşmamızı şəxsən tanış ol.", `Görüşdə ${title.toLocaleLowerCase("az-AZ")} xidməti üçün məqsədləri, yanaşmanı və növbəti addımı dəqiqləşdirək.`],
    ["Nə üzərində işləyirik", `${title} istiqamətləri`],
    ["Sayt, məhsul və brend üçün eyni UI/UX dili. Hər istiqamət ölçülən nəticə üçün qurulur.", intro],
    ["#dizaynburada", `#${page.slug}`],
    ["Layihənin sonunda istifadəyə hazır interfeys, dizayn sistemi və növbəti inkişaf üçün aydın təhvil paketi veririk.", outcomes[0] ?? description],
    ["Seçilmiş işlər", `${title} nəticələri`],
    ["Komandamızın hazırladığı vizual həllər və brend işləri ilə tanış ola bilərsiniz.", description],
    ["UI/UX investisiyasının bazardakı dəyərini belə görmək olar. Komandamız eyni səviyyədə nəticə üçün işləyir:", `${title} xidməti üçün nəticələri layihənin prioritetləri və ölçülə bilən göstəriciləri ilə izləyirik.`],
    ["Başlanğıc UI/UX paketi", firstMetric?.label ?? `${title} başlanğıcı`],
    ["15.600 AZN +", firstMetric?.value ?? "7+"],
    ["Genişlənən məhsul dizaynı", secondMetric?.label ?? `${title} inkişafı`],
    ["34.200 AZN +", secondMetric?.value ?? "120+"],
    ["Tam məhsul və brend sistemi", thirdMetric?.label ?? `${title} nəticəsi`],
    ["78.500 AZN +", thirdMetric?.value ?? "94%"],
  ].forEach(([from, to]) => {
    if (from && to) markup = markup.replaceAll(from, to);
  });

  return markup;
}

function bindApplyAndPopup(pagePath: string) {
  window.handle_apply_Click = () => {
    if (window.innerWidth < 768) {
      window.location.href = "/muraciet";
      return;
    }

    const offset = window.jQuery?.("#muraciet_form").offset();
    if (offset) window.jQuery?.("html, body").animate({ scrollTop: offset.top - 220 }, 500);
  };

  window.contactformname = pagePath;

  const overlay = document.getElementById("popupOverlay");
  const btnBack = document.getElementById("btnBack");
  const btnConfirm = document.getElementById("btnConfirm");
  if (!overlay || !btnBack || !btnConfirm) return;

  btnBack.onclick = () => overlay.classList.remove("is-open");
  btnConfirm.onclick = () => {
    window.gotopage3 = 1;
    window.newui_awareness_confirmed = true;
    overlay.classList.remove("is-open");
    window.jQuery?.(".next-btn").trigger("click");
  };
}

export default function QrafikTemplatePage({ page }: { page: SitePage }) {
  const markup = useMemo(() => getPageMarkup(page), [page]);

  useEffect(() => {
    let cancelled = false;
    const cleanupMenu = bindReferenceMenu();

    (async () => {
      if (!window.__qrafikScriptsLoaded) {
        window.__qrafikScriptsLoaded = true;
        for (const src of SCRIPTS) {
          try {
            await loadScript(src);
          } catch {
            // The page remains fully readable if an optional interaction script is unavailable.
          }
        }
      }
      if (!cancelled) bindApplyAndPopup(`/${page.slug}`);
    })();

    return () => {
      cancelled = true;
      cleanupMenu();
    };
  }, [page.slug]);

  return (
    <div
      className="qrafik-dizayn-root it-business-analysis-reference-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
