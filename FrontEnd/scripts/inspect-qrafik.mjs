import { createRequire } from "node:module";
import fs from "node:fs";

const raw = fs.readFileSync(
  new URL("../app/(site)/qrafik-dizayn/markup.ts", import.meta.url),
  "utf8"
);
const m = JSON.parse(raw.slice(raw.indexOf("=") + 1).trim().replace(/;$/, ""));

const checks = {
  container: m.includes("container-lg"),
  header: m.includes("<header>"),
  hero: m.includes("Qrafik Dizayn və Vizual Kommunikasiyalar"),
  program: m.includes("Tədris proqramı"),
  teachers: m.includes("Xudayar"),
  footer: m.includes("code-footer"),
  popup: m.includes("popupOverlay"),
  slickInit: m.includes("slick-initialized"),
  placeholder: m.includes("data:image/svg+xml"),
  filesRel: m.includes("Code Academy_files"),
  localImg: m.includes("/qrafik-dizayn/Graphic-Design-1-768x768_png.webp"),
  graphicFull: m.includes("/qrafik-dizayn/Graphic-Design-1_png.webp"),
  firuze: m.includes("Firuz"),
  ziya: m.includes("Ziya"),
  cert: m.includes("code-education-certificate"),
  faq: m.includes("Bizdən tez-tez soruşurlar"),
  salary: m.includes("15.600"),
  overlayNav: m.includes('class="overlay"'),
  wpRemote: m.includes("code.edu.az/wp-content"),
};
console.log(JSON.stringify(checks, null, 2));
console.log("len", m.length);
const i = m.indexOf("code-education-certificate");
console.log("\ncert snippet:\n", m.slice(i, i + 450));
const z = m.indexOf("Ziya");
console.log("\nziya snippet:\n", m.slice(z, z + 280));
const f = m.indexOf("Firuz");
console.log("\nfiruze snippet:\n", m.slice(f, f + 220));
const p = m.indexOf("popupOverlay");
console.log("\npopup snippet:\n", m.slice(Math.max(0, p - 80), p + 280));
const lazy = m.indexOf("data:image");
console.log("\nplaceholder count", (m.match(/data:image\/svg\+xml/g) || []).length);
console.log("wp-content count", (m.match(/code\.edu\.az\/wp-content/g) || []).length);
console.log("ends with", m.slice(-200));
