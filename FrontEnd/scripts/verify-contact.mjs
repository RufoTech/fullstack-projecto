import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const outDir = path.resolve("scripts/contact-verify");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

async function shot(page, name, selector) {
  const el = await page.$(selector);
  if (!el) {
    console.log(`MISSING selector ${selector} for ${name}`);
    await page.screenshot({ path: path.join(outDir, `${name}-full.png`), fullPage: true });
    return;
  }
  await el.screenshot({ path: path.join(outDir, `${name}.png`) });
  console.log(`saved ${name}.png`);
}

async function capture(url, prefix, extraWait = 500) {
  for (const [label, viewport] of [
    ["desktop", { width: 1440, height: 900 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const page = await browser.newPage({ viewport });
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(extraWait);
    await shot(page, `${prefix}-${label}-main`, "main.code-contact-main");
    await shot(page, `${prefix}-${label}-cards`, "section.code-contact-communication");
    await shot(page, `${prefix}-${label}-map`, "section.code-contact-map");
    await shot(page, `${prefix}-${label}-faq`, "section.code-contact-question");
    await page.close();
  }
}

try {
  await capture("http://localhost:3000/elaqe", "clone");
  await capture("http://127.0.0.1:8765/index.html@p=4953.html", "source", 1500);
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  await browser.close();
}
