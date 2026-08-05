import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://tamoe.example${pathname}`, {
      headers: {
        accept: "text/html",
        host: "tamoe.example",
        "x-forwarded-host": "tamoe.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Tamoe landing page and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>TAMOE \| Every Guest\. Perfectly Organized\.<\/title>/,
  );
  assert.match(html, /Every Guest\./);
  assert.match(html, /Perfectly Organized\./);
  assert.match(html, /Aunt Jane/);
  assert.match(html, /tamoe-app-preview\.png/);
  assert.match(html, /Number of Pax/);
  assert.match(html, /Categories for every circle/);
  assert.match(html, /Priority Level makes decisions clearer/);
  assert.match(html, /Notes for one specific guest/);
  assert.match(html, /Inside the TAMOE app/);
  assert.match(html, /01-all-events\.png/);
  assert.match(html, /07-export-options\.png/);
  assert.match(html, /No generated app imagery is used/);
  assert.match(html, /Howie Homan/);
  assert.match(html, /Ivana Grasielda/);
  assert.match(html, /Hansel Meinhard/);
  assert.match(html, /Nicole Wahyudi/);
  assert.match(html, /Ricky Tjahjono/);
  assert.match(html, /146/);
  assert.match(html, /Excel/);
  assert.match(html, /Numbers/);
  assert.match(html, /Private by design/);
  assert.match(html, /Help us make TAMOE/);
  assert.match(html, /tamoaeapp@gmail\.com/);
  assert.match(html, /data-app-tour/);
  assert.doesNotMatch(html, /\breal\b/i);
  assert.doesNotMatch(html, /\bcalm\w*\b/i);
  assert.doesNotMatch(html, /Made for iPhone|No account needed/);
  assert.doesNotMatch(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("renders public privacy and terms pages", async () => {
  const [privacyResponse, termsResponse] = await Promise.all([
    render("/privacy"),
    render("/terms"),
  ]);
  assert.equal(privacyResponse.status, 200);
  assert.equal(termsResponse.status, 200);

  const [privacy, terms] = await Promise.all([
    privacyResponse.text(),
    termsResponse.text(),
  ]);
  assert.match(privacy, /Your guest list is personal/);
  assert.match(privacy, /Optional voice guest search/);
  assert.match(privacy, /August 4, 2026/);
  assert.match(privacy, /Vercel/);
  assert.match(privacy, /tamoaeapp@gmail\.com/);
  assert.doesNotMatch(privacy, /Pre-release draft/i);
  assert.match(terms, /Intellectual property and copyright/);
  assert.match(terms, /Limitation of liability/);
  assert.match(terms, /Apple App Store terms/);
  assert.match(terms, /August 4, 2026/);
  assert.match(terms, /tamoaeapp@gmail\.com/);
  assert.doesNotMatch(terms, /must be inserted|identified here|Pre-release/i);
});

test("removes starter UI and keeps motion accessible", async () => {
  const [page, layout, motion, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/MotionEffects.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /data-phone-flip/);
  assert.ok(
    page.indexOf("app-preview-brand") < page.indexOf("app-preview-screen"),
    "the brand face should flip forward into the app preview",
  );
  assert.match(page, /data-tilt/);
  assert.match(layout, /MotionEffects/);
  assert.match(layout, /openGraph/);
  assert.match(motion, /prefers-reduced-motion/);
  assert.match(motion, /--brand-face-opacity/);
  assert.match(motion, /--screen-face-opacity/);
  assert.match(motion, /surfaceTurn/);
  assert.match(motion, /--app-tour-x/);
  assert.match(motion, /tourProgress/);
  assert.doesNotMatch(motion, /\.app-screen-card/);
  assert.match(styles, /transform-style:\s*preserve-3d/);
  assert.match(styles, /-webkit-backface-visibility:\s*hidden/);
  assert.match(styles, /\.app-tour-sticky/);
  assert.match(styles, /var\(--app-tour-x/);
  assert.match(styles, /\.app-screen-track\s*\{[^}]*align-items:\s*flex-start/s);
  assert.match(styles, /\.marquee-group\s*\{[^}]*min-width:\s*100vw/s);
  assert.match(styles, /\.marquee-group\s*\{[^}]*justify-content:\s*space-around/s);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("public/_sites-preview", templateRoot)));
});
