import fs from "fs";
import path from "path";

const htmlPath =
  "C:\\Users\\ASUS\\Downloads\\code.edu.az\\index.html@p=199.html";
const outPath = path.resolve("src/data/mezunlar.ts");

const html = fs.readFileSync(htmlPath, "utf8");

function decode(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function dataSrc(block) {
  const m = block.match(/data-src="([^"]+)"/);
  return m ? m[1] : "";
}

function inner(block, tag, cls) {
  const re = new RegExp(
    `<${tag}[^>]*class="[^"]*${cls}[^"]*"[^>]*>([\\s\\S]*?)<\\/${tag}>`,
    "i"
  );
  const m = block.match(re);
  return m ? decode(m[1].replace(/<[^>]+>/g, "")) : "";
}

// --- Blog cards ---
const tabIds = [
  "dizayn",
  "digital-marketinq",
  "it-ve-kibertehlukesizlik",
  "it-ve-kiber-tehlukesizlik",
];

const blogByTab = {};
for (const id of tabIds) {
  const start = html.indexOf(`id="${id}"`);
  if (start < 0) {
    blogByTab[id] = [];
    continue;
  }
  const nextStarts = tabIds
    .map((t) => html.indexOf(`id="${t}"`, start + 10))
    .filter((i) => i > start);
  const endMarker = html.indexOf(`id="0"`, start);
  const end = Math.min(
    ...[...nextStarts, endMarker > start ? endMarker : html.length, html.length]
  );
  const section = html.slice(start, end);
  const cards = [];
  const idMatches = [...section.matchAll(/data-id="([^"]+)"/g)];
  for (let i = 0; i < idMatches.length; i++) {
    const idVal = idMatches[i][1];
    const start = idMatches[i].index;
    const end =
      i + 1 < idMatches.length ? idMatches[i + 1].index : section.length;
    const body = section.slice(start, end);
    const img = dataSrc(body);
    const name = inner(body, "h6", "code-visby-body1-demibold");
    const rolePs = [
      ...body.matchAll(
        /<p class="code-visby-subtitle1-medium">([\s\S]*?)<\/p>/g
      ),
    ];
    const role = rolePs[0] ? decode(rolePs[0][1]) : "";
    const quote = rolePs[1] ? decode(rolePs[1][1]) : "";
    cards.push({ id: idVal, name, role, quote, img });
  }
  blogByTab[id] = cards;
}

// --- Modals ---
const modals = {};
const modalRe =
  /<div class="student-detail-box" id="student-detail-box-([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
let mm;
while ((mm = modalRe.exec(html))) {
  const id = mm[1];
  const body = mm[2];
  const img = dataSrc(body.match(/student-detail-box-about-img[\s\S]*?<\/div>/)?.[0] || body);
  const names = [
    ...body.matchAll(/<h2 class="code-visby-h2-bold[^"]*">([\s\S]*?)<\/h2>/g),
  ];
  const roles = [
    ...body.matchAll(/<h2 class="code-caveat-h6-bold[^"]*">([\s\S]*?)<\/h2>/g),
  ];
  const jobs = [
    ...body.matchAll(
      /<p class="code-visby-body1-demibold">([\s\S]*?)<\/p>/g
    ),
  ];
  const says = [
    ...body.matchAll(
      /<h3 class="code-caveat-h3-semibold[^"]*">([\s\S]*?)<\/h3>/g
    ),
  ];
  const quotes = [
    ...body.matchAll(
      /<p class="code-visby-body2-medium">([\s\S]*?)<\/p>/g
    ),
  ];
  const lessons = [];
  const lessonRe =
    /<div class="lesson-item" onclick="window\.location\.href='([^']+)'[\s\S]*?data-src="([^"]+)"[\s\S]*?<p class="code-visby-body1-demibold mb-1">([\s\S]*?)<\/p>/g;
  let lm;
  while ((lm = lessonRe.exec(body))) {
    lessons.push({
      href: lm[1],
      img: lm[2],
      title: decode(lm[3]),
    });
  }
  modals[id] = {
    name: names[0] ? decode(names[0][1]) : "",
    caveatRole: roles[0] ? decode(roles[0][1]) : "",
    job: jobs[0] ? decode(jobs[0][1]) : "",
    says: says[0] ? decode(says[0][1]) : "",
    quote: quotes[0] ? decode(quotes[0][1]) : "",
    img,
    lessons,
  };
}

// --- Videos ---
const videoStart = html.indexOf('id="programming"');
const videoEnd = html.indexOf('id="dizayn"', videoStart + 10);
const videoSection = html.slice(videoStart, videoEnd > 0 ? videoEnd : videoStart + 8000);
const videos = [];
const videoRe =
  /<div class="col-6 col-md-3 item" data-video="([^"]+)">[\s\S]*?data-src="([^"]+)"[\s\S]*?<p class="code-visby-subtitle1-medium">([\s\S]*?)<\/p>/g;
let vm;
while ((vm = videoRe.exec(videoSection))) {
  videos.push({
    video: vm[1],
    img: vm[2],
    name: decode(vm[3]),
  });
}

// --- Hero ---
const heroStart = html.indexOf("code-galery");
const heroEnd = html.indexOf("</section>", heroStart);
const heroSection = html.slice(heroStart, heroEnd);
const hero = [];
const heroBlocks = heroSection.split('<div class="code-img">').slice(1);
for (const block of heroBlocks) {
  const srcs = [...block.matchAll(/data-src="([^"]+)"/g)].map((x) => x[1]);
  if (srcs.length >= 2) hero.push({ person: srcs[0], company: srcs[1] });
}

// --- Companies ---
const compStart = html.indexOf("companies-list");
const compEnd = html.indexOf("</section>", compStart);
const compSection = html.slice(compStart, compEnd);
const companies = [...compSection.matchAll(/data-src="([^"]+)"/g)].map(
  (x) => x[1]
);

function ts(value) {
  return JSON.stringify(value, null, 2);
}

const file = `export const WP = "https://code.edu.az/wp-content";

export const HERO_IMAGES = ${ts(hero)} as const;

export const STATS = [
  {
    value: "No-1",
    text: "Ölkəmizdə tələbə sayına görə ən böyük özəl tədris müəssisəsi",
  },
  {
    value: "10,000+",
    text: "Bu günə qədər olan tələbələrimizin sayı",
  },
  {
    value: "82%",
    text: "Hal-hazırda işləyən məzunlarımızın faizi",
  },
  {
    value: "110",
    text: "Akademiyamızda fəaliyyət göstərən pedaqoji heyətin sayı",
  },
] as const;

export const PARTNER_SLIDE = {
  image: \`\${WP}/uploads/2024/03/Soul_png.webp\`,
  logo: \`\${WP}/uploads/2024/02/academy_png.webp\`,
  title: "Movie Day at Code Academy",
  text: "3 dekabr 2023, saat 17:00-da akademiyamızın Open Space ərazisində tələbələrimiz üçün \\"Soul\\" animasiya filminin nümayişini etdik.\\n\\nFilm ingilis dilində altyazı ilə göstərildi.",
  count: "1/8",
} as const;

export const BLOG_TABS = [
  { id: "dizayn", label: "Dizayn" },
  { id: "digital-marketinq", label: "Digital Marketinq" },
  { id: "it-ve-kibertehlukesizlik", label: "IT və Kibertəhlükəsizlik" },
  { id: "it-ve-kiber-tehlukesizlik", label: "IT və Kiber Təhlükəsizlik" },
] as const;

export type BlogCard = {
  id: string;
  name: string;
  role: string;
  quote: string;
  img: string;
};

export const BLOG_CARDS: Record<string, BlogCard[]> = ${ts(blogByTab)};

export type LessonItem = { href: string; img: string; title: string };

export type StudentModal = {
  name: string;
  caveatRole: string;
  job: string;
  says: string;
  quote: string;
  img: string;
  lessons: LessonItem[];
};

export const STUDENT_MODALS: Record<string, StudentModal> = ${ts(modals)};

export const VIDEOS = ${ts(videos)} as const;

export const COMPANIES = ${ts(companies)} as const;
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, file, "utf8");

const counts = Object.fromEntries(
  Object.entries(blogByTab).map(([k, v]) => [k, v.length])
);
console.log({
  hero: hero.length,
  blogs: counts,
  modals: Object.keys(modals).length,
  videos: videos.length,
  companies: companies.length,
  outPath,
});
