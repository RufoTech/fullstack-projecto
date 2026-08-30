import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const file = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/data/mezunlar.ts",
);

const WOMEN = [
  "1494790108377-be9c29b29330",
  "1573496359142-b8d87734a5a2",
  "1580489944761-15a19d654956",
  "1438761681033-6461ffad8d80",
  "1544005313-94ddf0286df2",
  "1534528741775-53994a69daeb",
  "1487412720507-e7ab37603c6f",
  "1573497019940-1c28c88b4f3e",
  "1531123897727-8f129e1688ce",
  "1508214751196-bcfd4ca60f91",
  "1573497019236-17f8177b81e8",
  "1559839734-2b71ea197ec2",
  "1594744806689-b65be6516867",
  "1580894732447-12e82d269e26",
  "1607746882042-944635dfe10e",
  "1548142813-c348350df52b",
  "1529626456364-403cf4acb0ca",
  "1488426862026-3ee34a7d66df",
  "1524504388940-b1c1722653e1",
  "1517841905240-472988babdf9",
  "1531746020798-e6953c6e8e04",
  "1544723795-3fb6469f5b39",
  "1619895862022-09114b41f16f",
  "1598550874175-4d9ef96c66c5",
  "1489424738344-479f9fdd7e95",
  "1546961329-78bef0414d8c",
  "1573497019418-b400bb3ab074",
  "1573496358961-3c828295d1d0",
  "1551836022-d5d88e9218df",
  "1502685104226-ee32379fefbe",
  "1544717305-2782549b5136",
  "1587614382346-4ec70e388b28",
];

const MEN = [
  "1500648767791-00dcc994a43e",
  "1507003211169-0a1dd7228f2d",
  "1472099645785-5658abf4ff4e",
  "1519085360753-af0119f7cbe7",
  "1560250097-0b93528c311a",
  "1506794778202-cad84cf45f1d",
  "1463453091185-61582044d556",
  "1492562080023-ab3db95bfbce",
  "1519345182560-3f2917c472ef",
  "1556157382-97eda2d62296",
  "1568602471122-7832951cc4c5",
  "1570295999919-56ceb5ecca61",
  "1539571696357-5a69c17a67c6",
  "1566492031773-4f4e44671857",
  "1552058544-f2b08422138a",
  "1545167622-3a6ac456efa8",
  "1507591064344-4c6ce005b128",
  "1531891437562-339e94fb48d3",
  "1564563426770-45994ea04b23",
  "1557862921-37829c790f32",
  "1615109398623-883730ca57f6",
  "1528892957994-2d4c9b77a18a",
  "1499996818299-57acbce5d009",
  "1480457947956-aeef9dd0e489",
  "1488161628813-04466f872be2",
  "1513956589380-bad156dc6ffc",
  "1542909168-318d0d4ba0dc",
  "1531427186611-ecfd6d936c79",
  "1600486913747-55e5470d6f40",
  "1540569014015-37f6bab2cf90",
  "1577880213220-8f2085c6a2da",
  "1583195764036-6dc248ac07d9",
];

const FEMALE_RE =
  /^(guls|fatim|sekin|sakin|lamiy|sabina|narmin|nermin|laman|leman|shalal|salal|gulnar|zenfir|rima|rugiy|ruqiy|huru|konul|shahl|sahla|sehla|lala|tomris|nasiba|nezrin|nazrin|mehriban|irad|qumral|jale|jala|xanim)/;

function fold(s) {
  return s
    .toLowerCase()
    .replace(/ə/g, "a")
    .replace(/ş/g, "sh")
    .replace(/ç/g, "ch")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ğ/g, "g")
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function isFemale(name) {
  const first = fold(name).split(/\s+/)[0];
  return FEMALE_RE.test(first);
}

function portrait(id, i) {
  const size = 800 + (i % 3) * 40;
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${size}&h=${size}&q=80&crop=faces`;
}

let src = fs.readFileSync(file, "utf8");

let wi = 0;
let mi = 0;
const byName = new Map();
function forName(name) {
  if (byName.has(name)) return byName.get(name);
  const female = isFemale(name);
  const id = female ? WOMEN[wi % WOMEN.length] : MEN[mi % MEN.length];
  const i = female ? wi++ : mi++;
  const url = portrait(id, i);
  byName.set(name, url);
  return url;
}

src = src.replace(
  /("name":\s*")([^"]+)("[^]*?"role":\s*"[^"]*",\s*"quote":\s*"(?:\\.|[^"\\])*",\s*"img":\s*")(https:\/\/images\.unsplash\.com\/photo-[^"]+)(")/g,
  (_, a, name, c, _img, e) => a + name + c + forName(name) + e,
);

src = src.replace(
  /("name":\s*")([^"]+)(",\s*"caveatRole":[\s\S]*?"img":\s*")(https:\/\/images\.unsplash\.com\/photo-[^"]+)(")/g,
  (_, a, name, c, _img, e) => a + name + c + forName(name) + e,
);

src = src.replace(
  /("img":\s*")(https:\/\/images\.unsplash\.com\/photo-[^"]+)(",\s*"name":\s*")([^"]+)(")/g,
  (_, a, _img, c, name, e) => a + forName(name) + c + name + e,
);

fs.writeFileSync(file, src);

const names = [...byName.keys()];
console.log(`named portraits ${byName.size} (women=${wi}, men=${mi})`);
console.log("female", names.filter(isFemale));
console.log("male", names.filter((n) => !isFemale(n)));
console.log("shalala fold", fold("Şəlalə Mirzəyeva"), isFemale("Şəlalə Mirzəyeva"));

