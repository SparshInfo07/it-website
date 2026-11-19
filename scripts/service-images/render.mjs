// Renders the service-page artwork in studio.html to WebP. Usage: node scripts/service-images/render.mjs public/assets/images/core-services [nameFilter]
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const out = process.argv[2]; const filter = process.argv[3] || "";
mkdirSync(out, { recursive: true });
const jobs = [];
for (const svc of ["ui", "app", "web", "ai"]) {
  jobs.push({ name: `${svc}-hero`, w: 1920, h: 1000, hash: `scene=hero&svc=${svc}` });
  jobs.push({ name: `${svc}-cta`, w: 1920, h: 900, hash: `scene=cta&svc=${svc}` });
  for (const ind of ["manufacturing", "retail", "healthcare", "education", "fintech"]) jobs.push({ name: `${svc}-${ind}`, w: 1200, h: 825, hash: `scene=industry&svc=${svc}&ind=${ind}` });
}
jobs.push({ name: "services-hero", w: 1920, h: 1000, hash: "scene=services" });
jobs.push({ name: "services-cta", w: 1920, h: 900, hash: "scene=cta&svc=svc" });

const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", ["--headless=new", "--remote-debugging-port=9391", "--hide-scrollbars", "--user-data-dir=" + mkdtempSync(join(tmpdir(), "svc-img-")), "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(4000);
const t = (await (await fetch("http://127.0.0.1:9391/json")).json()).find((x) => x.type === "page");
const ws = new WebSocket(t.webSocketDebuggerUrl); await new Promise((r) => (ws.onopen = r));
let id = 0; const P = new Map(); const errs = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && P.has(d.id)) { P.get(d.id)(d.result); P.delete(d.id); } if (d.method === "Runtime.exceptionThrown") errs.push(d.params.exceptionDetails.exception?.description?.split("\n")[0]); };
const send = (method, params = {}) => new Promise((r) => { const i = ++id; P.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await send("Runtime.enable");
for (const j of jobs.filter((j) => j.name.includes(filter))) {
  await send("Emulation.setDeviceMetricsOverride", { width: j.w, height: j.h, deviceScaleFactor: 1, mobile: false });
  await send("Page.navigate", { url: "about:blank" }); await sleep(150);
  await send("Page.navigate", { url: `file://${here}/studio.html#${j.hash}` }); await sleep(700);
  const s = await send("Page.captureScreenshot", { format: "webp", quality: 84 });
  writeFileSync(join(out, j.name + ".webp"), Buffer.from(s.data, "base64"));
}
console.log("rendered", jobs.filter((j) => j.name.includes(filter)).length, "errors:", errs.length ? errs : "none");
ws.close(); chrome.kill();
