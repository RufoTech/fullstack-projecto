import fs from "node:fs";
import path from "node:path";

const SRC_DIR =
  "C:\\Users\\ASUS\\Downloads\\Qrafik Dizayn və Vizual Kommunikasiyalar - Code Academy_files";
const SRC_HTML =
  "C:\\Users\\ASUS\\Downloads\\Qrafik Dizayn və Vizual Kommunikasiyalar - Code Academy.html";
const PUBLIC = path.resolve("public/qrafik-dizayn");
const OUT_TS = path.resolve("app/(site)/qrafik-dizayn/markup.ts");

fs.mkdirSync(PUBLIC, { recursive: true });

for (const file of fs.readdirSync(SRC_DIR)) {
  const ext = path.extname(file).toLowerCase();
  if (![".webp", ".svg", ".jpg", ".jpeg", ".png", ".gif", ".ico"].includes(ext)) continue;
  fs.copyFileSync(path.join(SRC_DIR, file), path.join(PUBLIC, file));
}

let html = fs.readFileSync(SRC_HTML, "utf8");

const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) throw new Error("No body");
let body = bodyMatch[1];

body = body.replace(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g, "");
body = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
body = body.replace(/<noscript>[\s\S]*?<\/noscript>/gi, "");
body = body.replace(/cz-shortcut-listen="true"/g, "");
body = body.replace(/\sdata-ll-status="loaded"/g, "");
body = body.replace(/\sclass="lazy entered loaded"/g, ' class="lazy"');

body = body.replace(
  /<section class="code-education-certificate slick-initialized slick-slider slick-dotted"([^>]*)>[\s\S]*?<div class="d-flex justify-content-between flex-column flex-lg-row slick-slide slick-current slick-active"[^>]*>/i,
  '<section class="code-education-certificate"$1>\n            <div class="d-flex justify-content-between flex-column flex-lg-row">'
);
body = body.replace(
  /<\/div><\/div><\/div>\s*<ul class="slick-dots">[\s\S]*?<\/ul><\/section>/i,
  "</div>\n        </section>"
);

const ASSET = "/qrafik-dizayn";
const FILES_RE =
  /\.\/Qrafik Dizayn və Vizual Kommunikasiyalar - Code Academy_files\//g;
body = body.replace(FILES_RE, `${ASSET}/`);

const themeMap = [
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets/icons/navbar/menu-02.svg",
    `${ASSET}/menu-02.svg`,
  ],
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets//icons/navbar/x.svg",
    `${ASSET}/x.svg`,
  ],
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets/icons/check.svg",
    `${ASSET}/icons/check.svg`,
  ],
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets/icons/minus.svg",
    `${ASSET}/icons/minus.svg`,
  ],
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets/icons/minus_wht.svg",
    `${ASSET}/icons/minus_wht.svg`,
  ],
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets/icons/plus-circle.svg",
    `${ASSET}/plus-circle.svg`,
  ],
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets/icons/base/azn.svg",
    `${ASSET}/azn.svg`,
  ],
  [
    "https://code.edu.az/wp-content/themes/codev2024/assets/icons/send-01.svg",
    `${ASSET}/send-01.svg`,
  ],
];
for (const [from, to] of themeMap) body = body.split(from).join(to);

body = body.replace(
  /https:\/\/code\.edu\.az\/wp-content\/uploads\/[^"'>\s]+/g,
  (url) => {
    const name = decodeURIComponent(url.split("/").pop());
    return `${ASSET}/${name}`;
  }
);

const PLACEHOLDER =
  'src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201%201%22%3E%3C%2Fsvg%3E"';
body = body.replace(
  new RegExp(`${PLACEHOLDER.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+data-src="([^"]+)"`, "g"),
  'src="$1" data-src="$1"'
);
body = body.replace(
  /data-src="([^"]+)"\s+alt="([^"]*)"\s+src="data:image\/svg\+xml,[^"]+"/g,
  'src="$1" data-src="$1" alt="$2"'
);

body = body.replace(/\s{3,}/g, "\n");
body = body.trim();

const start = body.indexOf('<div class="container-lg');
const popup = body.indexOf('<div class="overlay" id="popupOverlay"');
if (start === -1) throw new Error("container not found");

let markup;
if (popup !== -1) {
  let pos = body.indexOf("popup-buttons");
  for (let i = 0; i < 3; i++) pos = body.indexOf("</div>", pos + 1);
  markup = body.slice(start, pos + 6);
} else {
  markup = body.slice(start);
}

fs.mkdirSync(path.dirname(OUT_TS), { recursive: true });
fs.writeFileSync(
  OUT_TS,
  `export const QRAFIK_MARKUP = ${JSON.stringify(markup)};\n`,
  "utf8"
);

console.log("markup chars", markup.length);
console.log("wrote", OUT_TS);
console.log("images", fs.readdirSync(PUBLIC).filter((f) => /\.(webp|svg|jpg|png)$/i.test(f)).length);
