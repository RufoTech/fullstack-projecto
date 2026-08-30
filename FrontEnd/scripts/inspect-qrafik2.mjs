import fs from "node:fs";
const raw = fs.readFileSync(
  new URL("../app/(site)/qrafik-dizayn/markup.ts", import.meta.url),
  "utf8"
);
const m = JSON.parse(raw.slice(raw.indexOf("=") + 1).trim().replace(/;$/, ""));
let idx = 0;
let n = 0;
while ((idx = m.indexOf("slick-initialized", idx)) !== -1 && n < 5) {
  console.log("---", idx, m.slice(idx - 80, idx + 120));
  idx += 10;
  n++;
}
console.log("count", (m.match(/slick-initialized/g) || []).length);

const files = fs.readdirSync("public/qrafik-dizayn");
const needed = [
  "Firuzə-Ezizova_jpg.webp",
  "Ziya-Rəhimov-1_jpg.webp",
  "Graphic-Design-1_png.webp",
  "10il-Logo-300x75_png.webp",
];
for (const name of needed) {
  console.log(name, files.includes(name) ? "YES" : "NO");
}
console.log(
  "unicode files",
  files.filter((f) => /[əƏüÜöÖıIşŞçÇ]/.test(f))
);
console.log("popup closed?", m.trim().endsWith("</div>"));
console.log("popup div count around end", m.slice(-600));
