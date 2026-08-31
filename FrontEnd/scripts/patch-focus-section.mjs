import fs from "node:fs";

const file = new URL(
  "../app/(site)/(main)/qrafik-dizayn/markup.ts",
  import.meta.url
);
const raw = fs.readFileSync(file, "utf8");
const prefix = raw.slice(0, raw.indexOf("=") + 1);
let m = JSON.parse(raw.slice(raw.indexOf("=") + 1).trim().replace(/;$/, ""));

const startMarker = '<section class="code-education-instructors" id="instructors">';
const endMarker = '<section class="code-education-certificate"';
const start = m.indexOf(startMarker);
const end = m.indexOf(endMarker, start);
if (start < 0 || end < 0) {
  console.error("section not found", start, end);
  process.exit(1);
}

const replacement = `<section class="code-education-instructors studio-focus" id="instructors">
<h2 class="code-visby-h5-bold h5">Nə üzərində işləyirik</h2>
<p class="code-visby-body2-medium studio-focus-lead">Komanda portreti əvəzinə real iş sahələrini göstəririk — UI/UX studiyanın gündəlik diqqəti bu beş istiqamətdədir.</p>
<div class="code-education-instructors-cards studio-focus-cards">
<div class="studio-focus-card">
<img class="lazy" src="/qrafik-dizayn/focus/focus-product.jpg" data-src="/qrafik-dizayn/focus/focus-product.jpg" alt="Məhsul interfeysi">
<div>
<h6 class="code-visby-body1-demibold">Məhsul interfeysi</h6>
<p class="code-visby-body2-medium">Dashboard, panel və xidmət axını: istifadəçi tapşırığı bir ekranda bitir.</p>
</div>
</div>
<div class="studio-focus-card">
<img class="lazy" src="/qrafik-dizayn/focus/focus-web.jpg" data-src="/qrafik-dizayn/focus/focus-web.jpg" alt="Korporativ sayt">
<div>
<h6 class="code-visby-body1-demibold">Korporativ sayt</h6>
<p class="code-visby-body2-medium">Brendin rəqəmsal üzü: aydın naviqasiya, inam və müraciət üçün quruluş.</p>
</div>
</div>
<div class="studio-focus-card">
<img class="lazy" src="/qrafik-dizayn/focus/focus-shop.jpg" data-src="/qrafik-dizayn/focus/focus-shop.jpg" alt="E-commerce">
<div>
<h6 class="code-visby-body1-demibold">E-commerce</h6>
<p class="code-visby-body2-medium">Kataloqdan ödənişə qədər sürtünməsiz satış yolu.</p>
</div>
</div>
<div class="studio-focus-card">
<img class="lazy" src="/qrafik-dizayn/focus/focus-brand.jpg" data-src="/qrafik-dizayn/focus/focus-brand.jpg" alt="Brend sistemi">
<div>
<h6 class="code-visby-body1-demibold">Brend sistemi</h6>
<p class="code-visby-body2-medium">Rəng, tipografiya və komponentlər — hər səhifə eyni dildə danışır.</p>
</div>
</div>
<div class="studio-focus-card">
<img class="lazy" src="/qrafik-dizayn/focus/focus-mobile.jpg" data-src="/qrafik-dizayn/focus/focus-mobile.jpg" alt="Mobil təcrübə">
<div>
<h6 class="code-visby-body1-demibold">Mobil təcrübə</h6>
<p class="code-visby-body2-medium">Kiçik ekranda sürətli, barmaqla rahat, məqsədə bir toxunuşla çatan UI.</p>
</div>
</div>
</div>
</section>
`;

m = m.slice(0, start) + replacement + m.slice(end);
m = m.replaceAll("Dizayn komandamız", "Dizayn istiqamətləri");
m = m.replaceAll("Dizaynı quran komanda", "Nə üzərində işləyirik");

fs.writeFileSync(file, `${prefix} ${JSON.stringify(m)};\n`);
console.log("patched", { start, hasXudayar: m.includes("Xudayar"), hasFocus: m.includes("studio-focus-card") });
