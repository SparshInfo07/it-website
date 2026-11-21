"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CURATED_HOMEPAGE_MARKUP } from "@/data/HomePage/curatedHomepageMarkup";
import SiteFooter from "@/components/Organisms/SiteFooter/SiteFooter";
import { siteFooterData } from "@/data/siteFooterData";
import { SINGLE_PAGES_DATA, type SinglePageConfig } from "@/data/singlePagesData";

interface CuratedSinglePageProps {
  pageKey: string;
}

function extractSection(html: string, idOrClass: string, isClass = false): string {
  const token = isClass ? `class="${idOrClass}"` : `id="${idOrClass}"`;
  const idx = html.indexOf(token);
  if (idx === -1) return "";
  const start = html.lastIndexOf("<section", idx);
  const end = html.indexOf("</section>", idx);
  if (start === -1 || end === -1) return "";
  return html.slice(start, end + "</section>".length);
}

function buildSinglePageBody(config: SinglePageConfig, baseHtml: string): string {
  const featuredSec = extractSection(baseHtml, "featured");
  const processSec = extractSection(baseHtml, "process");
  const industriesSec = extractSection(baseHtml, "industries");
  const transformationSec = extractSection(baseHtml, "transformation");
  const workSec = extractSection(baseHtml, "work");
  const philosophySec = extractSection(baseHtml, "philosophy");
  const pricingSec = extractSection(baseHtml, "pricing");
  const ctaBandSec = extractSection(baseHtml, "cta-band", true);
  const contactSec = extractSection(baseHtml, "contact");

  // 1. Hero Section using exact homepage dark architectural .sr + editorial visual card + metric strip
  const heroHtml = `
<section class="sr sp-hero-stage" id="hero-panel-b" data-hero-panel="b">
  <div class="sr-ghost" aria-hidden="true">SPARSH SPARSH SPARSH</div>
  <div class="container sr-stage sp-stage-inner">
    <div class="sp-hero-grid">
      <div class="sp-hero-copy">
        <div class="sr-over" data-entrance="">
          <a href="/" style="color:#93c5fd;text-decoration:none">HOME</a> &nbsp;/&nbsp; ${config.category} &nbsp;·&nbsp; ${config.heroBadge}
        </div>
        <h1 class="sp-hero-h1" data-entrance="">
          <span class="sp-h1-main">${config.title}</span>
          <span class="sp-h1-accent">${config.titleAccent}</span>
        </h1>
        <p class="sr-sub sp-hero-sub" data-entrance="">${config.subtitle}</p>
        <div class="sr-acts" data-entrance="">
          <button class="btn white open-quote" type="button">${config.primaryCtaText}</button>
          <a class="btn ghost" href="${config.secondaryCtaHref}">${config.secondaryCtaText}</a>
        </div>
      </div>
      <div class="sp-hero-visual" data-entrance="">
        <div class="sp-hero-frame">
          <div class="sp-hero-frame-bar">
            <span><i></i><i></i><i></i></span>
            <small>${config.eyebrow}</small>
          </div>
          <img src="${config.heroImage}" alt="${config.title}" class="sp-hero-img" />
        </div>
      </div>
    </div>

    <div class="sp-metrics-strip" data-entrance="">
      ${config.metrics
        .map(
          (m) => `
        <div class="sp-metric-card">
          <strong>${m.value}</strong>
          <span>${m.label}</span>
        </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;

  // 2. Interactive Capabilities Bento Matrix + Live Blueprint Inspector (using homepage Option 3 #expertise classes)
  const firstDeliv = config.deliverables[0] || {
    tag: "ARCHITECTURE",
    title: config.overviewTitle,
    description: config.overviewLead,
    bullets: [],
  };
  const firstStep = config.workflowSteps[0]?.title || "Discovery & Architecture";
  const secondStep = config.workflowSteps[1]?.title || "Precision Engineering";
  const thirdStep = config.workflowSteps[2]?.title || "Production Launch";

  const bentoHtml = `
<section class="caps-interactive caps-bento-v3" id="expertise">
  <div class="container">
    <div class="cap3-head" data-reveal="">
      <div>
        <div class="eyebrow">${config.overviewEyebrow}</div>
        <h2>${config.overviewTitle}</h2>
      </div>
      <p>${config.overviewLead}</p>
    </div>

    <div class="bento-matrix">
      <div class="tile-grid">
        ${config.deliverables
          .map(
            (d, idx) => `
        <article class="cap-tile ${idx === 0 ? "active" : ""}" data-sp-tile="${idx}" tabindex="0">
          <div class="tile-top">
            <div class="tile-ico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <span class="tile-badge">${d.tag}</span>
          </div>
          <div>
            <h3>${d.title}</h3>
            <p>${d.description}</p>
          </div>
        </article>`
          )
          .join("")}
      </div>

      <aside class="inspector" id="spInspector">
        <div class="insp-head">
          <span class="insp-kicker">LIVE ARCHITECTURE BLUEPRINT</span>
          <span class="insp-status" id="spInspBadge">${firstDeliv.tag}</span>
        </div>

        <div class="insp-body">
          <h3 id="spInspTitle">${firstDeliv.title}</h3>
          <p id="spInspDesc">${firstDeliv.description}</p>

          <div class="pipeline" id="spInspPipe">
            <div class="pipe-node"><small>STAGE 01</small><b>${firstStep}</b></div>
            <div class="pipe-node"><small>STAGE 02</small><b>${secondStep}</b></div>
            <div class="pipe-node"><small>OUTCOME</small><b>${thirdStep}</b></div>
          </div>

          <div class="deliv-list" id="spInspDeliv">
            ${firstDeliv.bullets.map((b) => `<div class="deliv-item"><i></i>${b}</div>`).join("")}
          </div>
        </div>

        <div class="insp-foot">
          <div class="insp-impact">
            <strong id="spInspStat">${config.metrics[0]?.value || "100%"}</strong>
            <span id="spInspStatSub">${config.metrics[0]?.label || "Custom-engineered around your workflow"}</span>
          </div>
          <button type="button" class="insp-btn open-quote">Scope this architecture</button>
        </div>
      </aside>
    </div>
  </div>
</section>`;

  // 3. Route-Specific Signature Homepage Interactive Section
  let signatureSection = "";
  if (config.slug === "showcase") {
    signatureSection = featuredSec + workSec;
  } else if (config.slug === "transformation") {
    signatureSection = transformationSec + featuredSec;
  } else if (
    config.slug === "packages" ||
    config.slug.startsWith("solutions/")
  ) {
    signatureSection = pricingSec + featuredSec;
  } else if (config.slug.startsWith("industries/")) {
    signatureSection = industriesSec + pricingSec;
  } else if (config.slug === "our-philosophy") {
    signatureSection = philosophySec + transformationSec;
  } else if (config.slug === "how-we-work") {
    signatureSection = processSec + pricingSec;
  } else if (config.slug === "selected-work") {
    signatureSection = workSec + featuredSec;
  } else if (config.slug === "faqs") {
    signatureSection = pricingSec + philosophySec;
  }

  // 4. Optional Gallery Cards rendered with homepage .section.work .case-rail styling
  const galleryHtml =
    config.galleryCards && config.galleryCards.length > 0 && config.slug !== "selected-work"
      ? `
<section class="section work" id="sp-gallery">
  <div class="container">
    <div class="section-top">
      <div>
        <div class="eyebrow">VISUAL ARCHITECTURE BLUEPRINTS</div>
        <h2 class="heading" data-reveal="">Engineered for real<br/><em>daily operations.</em></h2>
      </div>
      <p>Explore how each screen, workflow, and owner control is structured for high adoption and commercial impact.</p>
    </div>
    <div class="case-rail" style="grid-template-columns:repeat(${Math.min(3, config.galleryCards.length)},1fr)">
      ${config.galleryCards
        .slice(0, 3)
        .map(
          (g) => `
      <article class="case-card" data-reveal="">
        <div class="case-art">
          <img class="case-cover-img" src="${g.image}" alt="${g.title}" loading="lazy" />
        </div>
        <div class="case-info">
          <span class="tiny">${g.tag}</span>
          <h3>${g.title}</h3>
          <p>${g.description}</p>
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>`
      : "";

  // 5. 4-Stage Workflow rendered with homepage .section.process.jr horizontal pinned journey styling
  const customProcessHtml =
    config.slug === "how-we-work"
      ? ""
      : `
<section class="section process jr" id="process">
  <div class="container">
    <div class="jr-head">
      <div>
        <div class="eyebrow">${config.workflowEyebrow}</div>
        <h2 class="heading" data-reveal="">${config.workflowTitle}</h2>
      </div>
      <p class="section-intro">Four structured milestones with clear deliverables you can inspect and approve at the end of every stage.</p>
    </div>
  </div>
  <div class="jr-viewport">
    <div class="jr-track" id="jrTrack">
      <svg class="jr-path" id="jrSvg" aria-hidden="true">
        <path class="jr-base" id="jrBase"></path>
        <path class="jr-done" id="jrDone"></path>
        <circle class="jr-ring" id="jrRing" r="14"></circle>
        <circle class="jr-dot" id="jrDot" r="7"></circle>
      </svg>
      ${config.workflowSteps
        .map(
          (ws, idx) => `
      <article class="jr-panel ${idx % 2 === 1 ? "jr-high" : ""}">
        <div class="jr-num" aria-hidden="true">${ws.step}</div>
        <h3>${ws.title}</h3>
        <p>${ws.description}</p>
        <div class="jr-meta">
          <span class="jr-when">Stage ${ws.step}</span>
          <ul class="jr-chips">
            <li>${ws.outcome}</li>
          </ul>
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
  <div class="container">
    <div class="jr-progress" aria-hidden="true"><i><b></b></i><i><b></b></i><i><b></b></i><i><b></b></i></div>
  </div>
</section>`;

  // 6. FAQ Accordion using exact homepage .section.faq .faq-grid markup
  const faqHtml = `
<section class="section faq" id="faq">
  <div class="container faq-grid">
    <div>
      <div class="eyebrow">GOOD QUESTIONS</div>
      <h2 class="heading" data-reveal="">Everything<br/><em>made clear.</em></h2>
    </div>
    <div class="faq-list">
      ${config.faqs
        .map(
          (f, idx) => `
      <div class="faq-item ${idx === 0 ? "open" : ""}">
        <button aria-expanded="${idx === 0 ? "true" : "false"}" class="faq-q" type="button">
          ${f.question}<span class="plus">+</span>
        </button>
        <div class="faq-a">${f.answer}</div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;

  // Extra scoped CSS for the single-page hero grid so it matches the homepage dark studio aesthetic seamlessly
  const singlePageHeroCss = `
<style>
.sparsh-curated-root .sp-hero-stage {
  min-height: 92vh !important;
  padding-top: 132px !important;
  padding-bottom: 72px !important;
  display: flex !important;
  align-items: center !important;
}
.sparsh-curated-root .sp-stage-inner {
  width: 100% !important;
}
.sparsh-curated-root .sp-hero-grid {
  display: grid !important;
  grid-template-columns: 1.15fr 0.85fr !important;
  gap: 48px !important;
  align-items: center !important;
}
.sparsh-curated-root .sp-hero-h1 {
  font-size: clamp(38px, 5.2vw, 72px) !important;
  font-weight: 800 !important;
  line-height: 1.04 !important;
  letter-spacing: -0.035em !important;
  margin: 18px 0 22px !important;
  color: #ffffff !important;
}
.sparsh-curated-root .sp-h1-main {
  display: block !important;
  color: #ffffff !important;
}
.sparsh-curated-root .sp-h1-accent {
  display: block !important;
  color: #7da6ff !important;
  margin-top: 4px !important;
}
.sparsh-curated-root .sp-hero-sub {
  max-width: 620px !important;
  margin-bottom: 28px !important;
}
.sparsh-curated-root .sp-hero-frame {
  border-radius: 26px !important;
  background: rgba(15, 25, 50, 0.78) !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.55) !important;
  overflow: hidden !important;
  padding: 12px !important;
}
.sparsh-curated-root .sp-hero-frame-bar {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 6px 12px 12px !important;
}
.sparsh-curated-root .sp-hero-frame-bar span {
  display: inline-flex !important;
  gap: 6px !important;
}
.sparsh-curated-root .sp-hero-frame-bar i {
  width: 9px !important;
  height: 9px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.25) !important;
  display: inline-block !important;
}
.sparsh-curated-root .sp-hero-frame-bar small {
  font-size: 10.5px !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  color: #93c5fd !important;
  text-transform: uppercase !important;
}
.sparsh-curated-root .sp-hero-img {
  width: 100% !important;
  aspect-ratio: 4 / 3 !important;
  object-fit: cover !important;
  border-radius: 18px !important;
  display: block !important;
}
.sparsh-curated-root .sp-metrics-strip {
  margin-top: 56px !important;
  padding-top: 32px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 20px !important;
}
.sparsh-curated-root .sp-metric-card {
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px !important;
  padding: 22px 24px !important;
}
.sparsh-curated-root .sp-metric-card strong {
  display: block !important;
  font-size: clamp(24px, 2.6vw, 36px) !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  letter-spacing: -0.03em !important;
  margin-bottom: 6px !important;
}
.sparsh-curated-root .sp-metric-card span {
  display: block !important;
  font-size: 13px !important;
  color: #cbd5e1 !important;
  line-height: 1.45 !important;
  font-weight: 500 !important;
}
@media (max-width: 980px) {
  .sparsh-curated-root .sp-hero-grid {
    grid-template-columns: 1fr !important;
  }
  .sparsh-curated-root .sp-metrics-strip {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media (max-width: 560px) {
  .sparsh-curated-root .sp-metrics-strip {
    grid-template-columns: 1fr !important;
  }
}
</style>`;

  return `
${singlePageHeroCss}
<main id="top">
  ${heroHtml}
  ${bentoHtml}
  ${signatureSection}
  ${galleryHtml}
  ${customProcessHtml}
  ${faqHtml}
  ${ctaBandSec}
  ${contactSec}
</main>`;
}

export default function CuratedSinglePage({ pageKey }: CuratedSinglePageProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const config = SINGLE_PAGES_DATA[pageKey];

  const markupObj = useMemo(() => {
    if (!config) return { __html: "" };
    const mainStart = CURATED_HOMEPAGE_MARKUP.indexOf("<main");
    const mainEnd = CURATED_HOMEPAGE_MARKUP.indexOf("</main>") + "</main>".length;
    const beforeMain = CURATED_HOMEPAGE_MARKUP.slice(0, mainStart);
    const afterMain = CURATED_HOMEPAGE_MARKUP.slice(mainEnd);
    const customMain = buildSinglePageBody(config, CURATED_HOMEPAGE_MARKUP);
    return { __html: beforeMain + customMain + afterMain };
  }, [config]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !config) return;

    gsap.registerPlugin(ScrollTrigger);

    const $ = <T extends Element = HTMLElement>(s: string, p: ParentNode = root): T | null =>
      p.querySelector<T>(s);
    const $$ = <T extends Element = HTMLElement>(s: string, p: ParentNode = root): T[] =>
      Array.from(p.querySelectorAll<T>(s));

    const body = document.body;
    body.classList.remove("orbit", "atelier", "blueprint");
    body.classList.add("orbit", "gsap-ready");

    // 1. Entrance animation on hero
    const activePanel = $<HTMLElement>("#hero-panel-b");
    if (activePanel) {
      const items = $$<HTMLElement>("[data-entrance]", activePanel);
      gsap.fromTo(
        items,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
        }
      );
    }

    // 2. Toast & Clipboard helpers
    let toastTimer: ReturnType<typeof setTimeout> | undefined;
    const toast = (message: string) => {
      const e = $<HTMLElement>("#toast");
      if (!e) return;
      e.textContent = message;
      e.classList.add("show");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => e.classList.remove("show"), 2400);
    };

    const fallbackCopy = (txt: string) => {
      const el = document.createElement("textarea");
      el.value = txt;
      document.body.append(el);
      el.select();
      try {
        document.execCommand("copy");
        toast("Brief copied to clipboard ✓");
      } catch {
        toast("Select and copy the brief");
      }
      el.remove();
    };

    const safeCopy = (txt: string) => {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard
          .writeText(txt)
          .then(() => toast("Brief copied to clipboard ✓"))
          .catch(() => fallbackCopy(txt));
      } else {
        fallbackCopy(txt);
      }
    };

    // 3. Modals & 3-Step Interactive Project Explorer Wizard
    const modalOpen = (selector: string) => {
      const e = $<HTMLElement>(selector);
      e?.classList.add("open");
      body.classList.add("lock");
    };
    const modalClose = () => {
      $$<HTMLElement>(".modal").forEach((e) => e.classList.remove("open"));
      body.classList.remove("lock");
    };
    $$<HTMLElement>("[data-close]").forEach((b) => b.addEventListener("click", modalClose));
    $$<HTMLElement>(".modal").forEach((el) =>
      el.addEventListener("mousedown", (e) => {
        if (e.target === el) modalClose();
      })
    );
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") modalClose();
    };
    document.addEventListener("keydown", onKeyDown);

    let quotePlan =
      config.slug === "solutions/silver"
        ? "Silver"
        : config.slug === "solutions/premium"
          ? "Premium"
          : "Gold";
    let wizStep = 0;
    let readyBrief = "";

    const updateChoices = () => {
      $$<HTMLElement>("[data-choice]").forEach((e) =>
        e.classList.toggle("active", e.dataset.choice === quotePlan)
      );
    };

    const renderWizard = () => {
      $$<HTMLElement>("[data-wstep]").forEach((e) =>
        e.classList.toggle("active", Number(e.dataset.wstep) === wizStep)
      );
      const backBtn = $<HTMLButtonElement>("#wizardBack");
      const nextBtn = $<HTMLButtonElement>("#wizardNext");
      const bar = $<HTMLElement>("#wizardBar");
      const brief = $<HTMLElement>("#wizardBrief");
      if (backBtn) {
        backBtn.textContent = "Back";
        backBtn.style.visibility = wizStep === 0 ? "hidden" : "visible";
      }
      if (bar) bar.style.width = ((wizStep + 1) / 3) * 100 + "%";
      if (nextBtn) {
        nextBtn.textContent = wizStep === 2 ? "Generate brief" : "Continue";
        nextBtn.disabled = false;
      }
      brief?.classList.remove("show");
      readyBrief = "";
    };

    $$<HTMLElement>(".open-quote").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.preventDefault();
        if ($("#infoModal")?.classList.contains("open")) modalClose();
        updateChoices();
        modalOpen("#quoteModal");
        renderWizard();
      })
    );
    $$<HTMLElement>(".select-plan").forEach((b) =>
      b.addEventListener("click", () => {
        quotePlan = b.dataset.plan || "Gold";
        updateChoices();
        wizStep = 0;
        renderWizard();
        modalOpen("#quoteModal");
      })
    );

    const stStairs = $<HTMLElement>("#stStairs");
    let stObserver: IntersectionObserver | undefined;
    if (stStairs && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stStairs.classList.add("st-armed");
      stObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((en) => en.isIntersecting)) {
            stStairs.classList.add("st-in");
            stObserver?.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      stObserver.observe(stStairs);
    }

    $$<HTMLElement>("[data-choice]").forEach((b) =>
      b.addEventListener("click", () => {
        quotePlan = b.dataset.choice || "Gold";
        updateChoices();
      })
    );

    $("#wizardBack")?.addEventListener("click", () => {
      if (readyBrief) {
        safeCopy(readyBrief);
        return;
      }
      if (wizStep > 0) {
        wizStep--;
        renderWizard();
      }
    });

    $("#wizardNext")?.addEventListener("click", () => {
      if (readyBrief) {
        safeCopy(readyBrief);
        return;
      }
      if (wizStep < 2) {
        wizStep++;
        renderWizard();
        return;
      }
      const b = $<HTMLInputElement>("#wizBusiness");
      const e = $<HTMLInputElement>("#wizEmail");
      if (!b || !e) return;
      if (!b.value.trim()) {
        b.reportValidity();
        b.focus();
        return;
      }
      if (!e.value.trim() || !e.checkValidity()) {
        e.reportValidity();
        e.focus();
        return;
      }
      const extras = $$<HTMLInputElement>('input[name="extra"]:checked').map((x) => x.value);
      const indSel = $<HTMLSelectElement>("#industrySelect")?.value || "";
      const timeSel = $<HTMLSelectElement>("#timeline")?.value || "";
      readyBrief = `SPARSH IT — PROJECT ENQUIRY BRIEF\nCompany: ${b.value.trim()}\nEmail: ${e.value.trim()}\nPackage: ${quotePlan}\nIndustry: ${indSel}\nCapabilities: ${extras.join(", ") || "To be discussed"}\nTimeline: ${timeSel}\nPrepared via Sparsh IT Interactive Project Explorer.`;
      const briefEl = $<HTMLElement>("#wizardBrief");
      if (briefEl) {
        briefEl.textContent = readyBrief;
        briefEl.classList.add("show");
      }
      const backBtn = $<HTMLButtonElement>("#wizardBack");
      const nextBtn = $<HTMLButtonElement>("#wizardNext");
      if (backBtn) backBtn.textContent = "Copy brief";
      if (nextBtn) nextBtn.textContent = "Copy brief";
      toast("Brief generated — click to copy");
    });

    // 4. Contact Form submission
    const contactForm = $<HTMLFormElement>("#contactForm");
    let contactSending = false;
    contactForm?.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (contactSending || !contactForm.reportValidity()) return;
      const d = new FormData(contactForm);
      const val = (k: string) => String(d.get(k) ?? "").trim();
      const business = val("business");
      const message = val("message");
      const payload = {
        firstName: val("firstName"),
        lastName: val("lastName"),
        email: val("email"),
        phone: val("phone"),
        referral: val("referral"),
        service: val("need"),
        requirement: business ? `Company: ${business}\n\n${message}` : message,
      };

      const submitBtn = $<HTMLButtonElement>("#contactSubmit", contactForm);
      const status = $<HTMLElement>("#contactStatus", contactForm);
      const setStatus = (text: string, isError = false) => {
        if (!status) return;
        status.textContent = text;
        status.classList.toggle("is-error", isError);
      };

      contactSending = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      setStatus("");

      try {
        const res = await fetch("/api/contact-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        if (!res.ok) {
          throw new Error(
            res.status === 400 && data.error
              ? data.error
              : "We couldn't send your enquiry right now. Please try again in a minute, or email support@sparshinfosystem.com."
          );
        }

        const done = document.createElement("div");
        done.className = "contact-done";
        const title = document.createElement("b");
        title.textContent = `Thanks, ${payload.firstName}. Your enquiry is on its way.`;
        const note = document.createElement("span");
        note.textContent = `We've sent a confirmation to ${payload.email}.`;
        done.append(title, note);
        contactForm.replaceChildren(done);
        toast("Enquiry sent");
      } catch (err) {
        setStatus(
          err instanceof Error && err.message
            ? err.message
            : "We couldn't send your enquiry right now. Please try again in a minute, or email support@sparshinfosystem.com.",
          true
        );
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send enquiry";
        }
      } finally {
        contactSending = false;
      }
    });

    // 5. Interactive Bento Tile Inspector for this page's deliverables
    let activeTileIdx = 0;
    const setSpTile = (i: number) => {
      const deliv = config.deliverables[i];
      if (i === activeTileIdx || !deliv) return;
      activeTileIdx = i;
      $$<HTMLElement>("[data-sp-tile]").forEach((e, j) => e.classList.toggle("active", j === i));
      const badgeEl = $<HTMLElement>("#spInspBadge");
      const titleEl = $<HTMLElement>("#spInspTitle");
      const descEl = $<HTMLElement>("#spInspDesc");
      const delivEl = $<HTMLElement>("#spInspDeliv");
      const statEl = $<HTMLElement>("#spInspStat");
      const subEl = $<HTMLElement>("#spInspStatSub");
      const inspEl = $<HTMLElement>("#spInspector");

      if (badgeEl) badgeEl.textContent = deliv.tag;
      if (titleEl) titleEl.textContent = deliv.title;
      if (descEl) descEl.textContent = deliv.description;
      if (delivEl) {
        delivEl.innerHTML = deliv.bullets.map((x) => `<div class="deliv-item"><i></i>${x}</div>`).join("");
      }
      const m = config.metrics[i % config.metrics.length];
      if (m && statEl && subEl) {
        statEl.textContent = m.value;
        subEl.textContent = m.label;
      }
      if (inspEl) {
        gsap.fromTo(
          inspEl,
          { scale: 0.985, opacity: 0.85 },
          { scale: 1, opacity: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" }
        );
      }
    };

    const onTileInteract = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      const tile = target.closest<HTMLElement>("[data-sp-tile]");
      if (tile) {
        setSpTile(Number(tile.dataset.spTile || 0));
      }
    };
    root.addEventListener("pointerover", onTileInteract);
    root.addEventListener("click", onTileInteract);
    root.addEventListener("focusin", onTileInteract);

    // 6. Transformation story: cinematic zoom (if present on page)
    const zmSec = $<HTMLElement>("#transformation");
    const zmStage = $<HTMLElement>("#zmStage");
    const zmSlides = zmStage ? $$<HTMLElement>(".zm-slide", zmStage) : [];
    const zmNum = $<HTMLElement>("#zmNum");
    const zmMM = gsap.matchMedia();

    if (zmSec && zmStage && zmSlides.length) {
      const zmLayers = zmSlides.map((s) => $<HTMLElement>(".zm-layer", s));
      const zmTexts = zmSlides.map((s) => $<HTMLElement>(".zm-ch", s));
      const last = zmSlides.length - 1;
      let zmCur = -1;

      const zmRender = (p: number) => {
        const pos = p * (last + 0.2) - 0.1;
        zmSlides.forEach((slide, i) => {
          const layer = zmLayers[i];
          const d = i - pos;
          let scale: number;
          let opacity: number;
          if (d >= 0) {
            const t = Math.min(1, d);
            scale = 1 - 0.42 * t;
            opacity = 1 - t;
            slide.style.zIndex = String(10 - i);
          } else {
            const t = Math.min(1, -d);
            scale = 1 + 1.1 * t * t;
            opacity = 1 - t * 1.25;
            slide.style.zIndex = String(20 + i);
          }
          opacity = Math.max(0, Math.min(1, opacity));
          slide.style.visibility = opacity <= 0.01 ? "hidden" : "visible";
          if (layer) {
            layer.style.transform = `scale(${scale.toFixed(4)})`;
            layer.style.opacity = opacity.toFixed(3);
            layer.style.setProperty("--inner", (1 + Math.max(0, Math.min(1, d)) * 0.12).toFixed(3));
          }
        });
        const idx = Math.max(0, Math.min(last, Math.round(pos)));
        if (idx !== zmCur) {
          zmCur = idx;
          zmTexts.forEach((t, k) => t?.classList.toggle("on", k === idx));
          if (zmNum) zmNum.textContent = String(idx + 1).padStart(2, "0");
        }
      };

      zmMM.add("(prefers-reduced-motion: no-preference)", () => {
        zmSec.classList.add("zm-live");
        const zoom = { p: 0 };
        zmCur = -1;
        zmRender(0);
        gsap.to(zoom, {
          p: 1,
          ease: "none",
          onUpdate: () => zmRender(zoom.p),
          scrollTrigger: {
            trigger: zmStage,
            refreshPriority: -2,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * (last + 0.2))}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => {
          zmSec.classList.remove("zm-live");
          zmSlides.forEach((slide, i) => {
            slide.style.removeProperty("z-index");
            slide.style.removeProperty("visibility");
            zmLayers[i]?.removeAttribute("style");
            zmTexts[i]?.classList.add("on");
          });
        };
      });
    }

    // 7. Interactive Industry Switcher (if present on page)
    const industryData: Record<
      string,
      { tag: string; title: string; desc: string; rows: string[]; pills: string[]; float: string }
    > = {
      wholesale: {
        tag: "B2B / DIGITAL CATALOGUE",
        title: "Show more. Quote faster.",
        desc: "Let buyers browse specifications, choose quantities, and request tailored bulk quotations.",
        rows: ["Product Catalogue", "Bulk quotation requests", "Lead dashboard"],
        pills: ["LIVE", "NEW", "ADMIN"],
        float: "B2B READY ↗",
      },
      retail: {
        tag: "RETAIL / CURATED COMMERCE",
        title: "From shelf to screen.",
        desc: "Make collections discoverable and let customers reach you or place orders online.",
        rows: ["Seasonal collections", "Content updates", "Customer enquiries"],
        pills: ["SHOP", "CMS", "NEW"],
        float: "RETAIL READY ↗",
      },
      services: {
        tag: "SERVICES / APPOINTMENTS",
        title: "Turn visits into bookings.",
        desc: "Present services, capture client requirements, and organise appointment requests.",
        rows: ["Service catalogue", "Booking requests", "Customer profiles"],
        pills: ["LIVE", "NEW", "CRM"],
        float: "BOOK ONLINE ↗",
      },
      startups: {
        tag: "STARTUPS / MVP & SAAS",
        title: "Launch the next idea.",
        desc: "Design, validate, and ship a high-impact version of your digital product.",
        rows: ["Product discovery", "MVP design & build", "Iteration roadmap"],
        pills: ["IDEA", "MVP", "SCALE"],
        float: "BUILD / SHIP ↗",
      },
    };
    const activateIndustry = (b: HTMLElement) => {
      const key = b.dataset.industry || "";
      const d = industryData[key];
      if (!d || b.classList.contains("active")) return;
      $$<HTMLElement>("[data-industry]").forEach((x) => {
        x.classList.toggle("active", x === b);
        x.setAttribute("aria-selected", String(x === b));
      });
      const tag = $("#indTag");
      const title = $("#indTitle");
      const desc = $("#indDesc");
      const flt = $("#indFloat");
      if (tag) tag.textContent = d.tag;
      if (title) title.textContent = d.title;
      if (desc) desc.textContent = d.desc;
      d.rows.forEach((v, i) => {
        const rEl = $("#indRow" + (i + 1));
        const pEl = $("#indPill" + (i + 1));
        if (rEl) rEl.textContent = v;
        if (pEl) pEl.textContent = d.pills[i];
      });
      if (flt) flt.textContent = d.float;
      const p = $("#industryPreview");
      if (p) {
        gsap.fromTo(
          p,
          { scale: 0.97, opacity: 0.72 },
          { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" }
        );
      }
    };
    $$<HTMLElement>("[data-industry]").forEach((b) => {
      b.addEventListener("mouseenter", () => activateIndustry(b));
      b.addEventListener("focus", () => activateIndustry(b));
      b.addEventListener("click", () => activateIndustry(b));
    });

    // Pre-select matching industry tab when on an industry route
    if (config.slug === "industries/service-businesses") {
      const srvBtn = $<HTMLElement>('[data-industry="services"]');
      if (srvBtn) activateIndustry(srvBtn);
    } else if (config.slug === "industries/startups-founders") {
      const stBtn = $<HTMLElement>('[data-industry="startups"]');
      if (stBtn) activateIndustry(stBtn);
    }

    // 8. FAQ Accordion: only one answer open at a time
    const faqButtons = $$<HTMLElement>(".faq-q");
    faqButtons.forEach((b) =>
      b.addEventListener("click", () => {
        const x = b.closest(".faq-item");
        if (!x) return;
        const willOpen = !x.classList.contains("open");
        faqButtons.forEach((other) => {
          const item = other.closest(".faq-item");
          if (!item || item === x) return;
          item.classList.remove("open");
          other.setAttribute("aria-expanded", "false");
        });
        x.classList.toggle("open", willOpen);
        b.setAttribute("aria-expanded", String(willOpen));
      })
    );

    // 9. Concept Cases Modal
    const infos = {
      cases: [
        [
          "Forme Catalogue — B2B Wholesale Concept",
          "Illustrative concept by Sparsh IT: furniture & industrial wholesaler product browsing, technical specifications, multi-item RFQ quotation cart, and admin-approved custom pricing.",
        ],
        [
          "Atelier Commerce — Retail Storefront Concept",
          "Illustrative concept by Sparsh IT: high-craft collection pages, self-service CMS interface, and seamless online checkout upgrade path.",
        ],
        [
          "Flow Booking — Service Operations Concept",
          "Illustrative concept by Sparsh IT: service discovery, structured client intake, and automated appointment scheduling workflow.",
        ],
      ],
    };
    const showInfo = (title: string, txt: string, eyebrow: string) => {
      const tEl = $("#infoTitle");
      const txEl = $("#infoText");
      const eyEl = $("#infoEyebrow");
      if (tEl) tEl.textContent = title;
      if (txEl) txEl.textContent = txt;
      if (eyEl) eyEl.textContent = eyebrow;
      modalOpen("#infoModal");
    };
    $$<HTMLElement>("[data-case]").forEach((el) => {
      const idx = Number(el.dataset.case || 0);
      const item = infos.cases[idx];
      if (!item) return;
      const f = () => showInfo(item[0], item[1], "SPARSH IT · SELECTED CONCEPT");
      el.addEventListener("click", f);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") f();
      });
    });

    // 10. Identical Homepage Navbar Dropdowns, Mobile Navigation & Sticky Header
    const menu = $<HTMLElement>("#mobileNav");
    const hamb = $<HTMLElement>("#hamburger");
    hamb?.addEventListener("click", () => {
      if (!menu) return;
      const is = menu.classList.toggle("open");
      hamb.setAttribute("aria-expanded", String(is));
      hamb.textContent = is ? "×" : "☰";
    });
    if (menu && hamb) {
      $$<HTMLElement>("a", menu).forEach((a) =>
        a.addEventListener("click", () => {
          menu.classList.remove("open");
          hamb.textContent = "☰";
          hamb.setAttribute("aria-expanded", "false");
        })
      );
    }

    const navDds = $$<HTMLElement>(".nav-dd .dd");
    let ddCloseTimer: ReturnType<typeof setTimeout> | undefined;
    const setDd = (target: HTMLElement | null) => {
      navDds.forEach((dd) => {
        const on = dd === target;
        dd.classList.toggle("open", on);
        $<HTMLElement>(".dd-btn", dd)?.setAttribute("aria-expanded", String(on));
      });
    };
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    navDds.forEach((dd) => {
      const ddBtn = $<HTMLElement>(".dd-btn", dd);
      ddBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        setDd(dd.classList.contains("open") ? null : dd);
      });
      if (finePointer) {
        dd.addEventListener("mouseenter", () => {
          if (ddCloseTimer) clearTimeout(ddCloseTimer);
          setDd(dd);
        });
        dd.addEventListener("mouseleave", () => {
          if (ddCloseTimer) clearTimeout(ddCloseTimer);
          ddCloseTimer = setTimeout(() => {
            if (dd.classList.contains("open")) setDd(null);
          }, 180);
        });
      }
      $$<HTMLElement>(".dd-panel a", dd).forEach((a) => a.addEventListener("click", () => setDd(null)));
      const listLinks = $$<HTMLElement>(".dd-list a[data-i]", dd);
      const figures = $$<HTMLElement>(".dd-preview figure", dd);
      listLinks.forEach((a) => {
        const activate = () => {
          listLinks.forEach((x) => x.classList.toggle("on", x === a));
          figures.forEach((f, i) => f.classList.toggle("on", String(i) === a.dataset.i));
        };
        a.addEventListener("mouseenter", activate);
        a.addEventListener("focus", activate);
      });
    });
    const onDdDocClick = (e: MouseEvent) => {
      if (!(e.target as Element | null)?.closest(".nav-dd .dd")) setDd(null);
    };
    const onDdKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const openDd = navDds.find((dd) => dd.classList.contains("open"));
      if (!openDd) return;
      setDd(null);
      $<HTMLElement>(".dd-btn", openDd)?.focus();
    };
    document.addEventListener("click", onDdDocClick);
    document.addEventListener("keydown", onDdKey);

    const onHeaderScroll = () => {
      const sy = window.scrollY || document.documentElement.scrollTop || 0;
      $<HTMLElement>("#header")?.classList.toggle("scrolled", sy > 30);
    };
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
    onHeaderScroll();

    // 11. Scroll-driven 3D concept cylinder (if #featured is present on page)
    const featSection = $<HTMLElement>("#featured");
    const v = $<HTMLElement>("#featureViewport");
    const track = $<HTMLElement>("#featureTrack");
    const cards = track ? $$<HTMLElement>(".feature-card", track) : [];
    let onResizeFeature: (() => void) | undefined;

    if (featSection && v && track && cards.length > 1) {
      const n = cards.length;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

      v.classList.add("is-ring");
      if (reduceMotion) v.classList.add("is-static");

      const STEP = 90;
      const RADIUS_PER_WIDTH = 1.0;
      const DROP_PER_HEIGHT = 0.86;

      let radius = 0;
      let drop = 0;
      let activeIdx = -1;
      const spiral = { pos: 0 };

      const measure = () => {
        const w = cards[0].offsetWidth || 560;
        const h = cards[0].offsetHeight || 390;
        radius = Math.round(w * RADIUS_PER_WIDTH);
        drop = Math.round(h * DROP_PER_HEIGHT);
      };

      const render = (pos: number) => {
        if (!radius) measure();
        const nearest = Math.max(0, Math.min(n - 1, Math.round(pos)));
        if (nearest !== activeIdx) {
          activeIdx = nearest;
          cards.forEach((c, k) => c.classList.toggle("is-front", k === activeIdx));
        }

        cards.forEach((card, i) => {
          const d = i - pos;
          const absD = Math.abs(d);
          const theta = d * STEP;
          const rad = (theta * Math.PI) / 180;
          const x = Math.sin(rad) * radius;
          const z = (Math.cos(rad) - 1) * radius;
          const y = d * drop;
          const opacity = clamp01(1.05 - absD * 0.42);
          const dim = clamp01(1 - absD * 0.22);

          card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${theta.toFixed(2)}deg)`;
          card.style.opacity = opacity.toFixed(3);
          card.style.filter = dim < 0.98 ? `brightness(${dim.toFixed(3)})` : "none";
          card.style.zIndex = String(Math.round(100 - absD * 25));
          card.style.pointerEvents = absD < 1.15 ? "auto" : "none";
          card.style.visibility = opacity <= 0.02 ? "hidden" : "visible";
        });
      };

      let st: ScrollTrigger | undefined;
      if (!reduceMotion) {
        measure();
        render(0);

        const tween = gsap.to(spiral, {
          pos: n - 1,
          ease: "none",
          onUpdate: () => render(spiral.pos),
          scrollTrigger: {
            trigger: v,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * (n - 1) * 0.85)}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              measure();
              render(spiral.pos);
            },
          },
        });
        st = tween.scrollTrigger;

        onResizeFeature = () => {
          measure();
          render(spiral.pos);
        };
        window.addEventListener("resize", onResizeFeature);
      }

      const featureTitles = [
        "Digital Experience — The store that never closes",
        "Business System — A calmer way to run the day",
        "Custom Software — From request to real business",
        "Local to Digital — Your next chapter begins here",
      ];
      const featureDescs = [
        "Concept demonstration: multi-category product catalogue, rich item pages, specification filters, and a direct quotation inquiry journey.",
        "Concept demonstration: unified owner dashboard for product updates, inbound customer enquiries, quotation status, and simple analytics.",
        "Concept demonstration: structured B2B quotation workflow capturing buyer items, quantities, custom pricing notes, and approval stages.",
        "Concept demonstration: guiding an established offline business into its first credible, modern digital presence with Sparsh IT.",
      ];
      cards.forEach((card, i) => {
        const activate = () => {
          if (!reduceMotion && st && Math.abs(spiral.pos - i) > 0.25) {
            const target = st.start + (i / (n - 1)) * (st.end - st.start);
            window.scrollTo({ top: target, behavior: "smooth" });
            return;
          }
          showInfo(featureTitles[i], featureDescs[i], "SPARSH IT · CONCEPT DEMO");
        };
        card.addEventListener("click", activate);
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            activate();
          }
        });
      });
    }

    // 12. How We Work (#process): pinned horizontal journey
    const jrSec = $<HTMLElement>("#process");
    const jrTrack = $<HTMLElement>("#jrTrack");
    const jrPanels = jrTrack ? $$<HTMLElement>(".jr-panel", jrTrack) : [];
    const jrBase = $<SVGPathElement>("#jrBase");
    const jrDone = $<SVGPathElement>("#jrDone");
    const jrDot = $<SVGCircleElement>("#jrDot");
    const jrRing = $<SVGCircleElement>("#jrRing");
    const jrBars = jrSec ? $$<HTMLElement>(".jr-progress b", jrSec) : [];
    const jrMM = gsap.matchMedia();

    if (jrSec && jrTrack && jrPanels.length && jrBase && jrDone && jrDot && jrRing) {
      let pathLen = 1;

      const alignTrack = () => {
        const vw = jrTrack.parentElement?.clientWidth || window.innerWidth;
        const firstW = jrPanels[0].offsetWidth;
        const lastW = jrPanels[jrPanels.length - 1].offsetWidth;
        jrTrack.style.paddingLeft = `${Math.max(24, Math.round((vw - firstW) / 2))}px`;
        jrTrack.style.paddingRight = `${Math.max(24, Math.round((vw - lastW) / 2))}px`;
      };

      const buildPath = () => {
        const pts = jrPanels.map((p) => ({
          x: p.offsetLeft + p.offsetWidth * 0.5,
          y: p.offsetTop + p.offsetHeight * 0.5,
        }));
        let d = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 0; i < pts.length - 1; i++) {
          const a = pts[i];
          const b = pts[i + 1];
          const mx = (a.x + b.x) / 2;
          d += ` C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
        }
        jrBase.setAttribute("d", d);
        jrDone.setAttribute("d", d);
        pathLen = jrDone.getTotalLength() || 1;
        jrDone.style.strokeDasharray = `${pathLen}`;
      };

      const distance = () => Math.max(0, jrTrack.scrollWidth - (jrTrack.parentElement?.clientWidth || window.innerWidth));
      const HOLD = 0.2;

      const render = (raw: number) => {
        const p = Math.max(0, Math.min(1, raw / (1 - HOLD)));
        jrTrack.style.transform = `translate3d(${(-p * distance()).toFixed(1)}px,0,0)`;
        jrDone.style.strokeDashoffset = `${(pathLen * (1 - p)).toFixed(1)}`;
        const pt = jrDone.getPointAtLength(pathLen * p);
        jrDot.setAttribute("cx", pt.x.toFixed(1));
        jrDot.setAttribute("cy", pt.y.toFixed(1));
        jrRing.setAttribute("cx", pt.x.toFixed(1));
        jrRing.setAttribute("cy", pt.y.toFixed(1));

        const last = jrPanels.length - 1;
        const active = Math.round(p * last);
        jrPanels.forEach((panel, i) => {
          panel.classList.toggle("is-active", i === active);
          panel.classList.toggle("is-past", i < active);
        });
        jrBars.forEach((bar, i) => {
          const fill = Math.max(0, Math.min(1, p * jrPanels.length - i));
          bar.style.transform = `scaleX(${fill.toFixed(3)})`;
        });
      };

      jrMM.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", () => {
        jrSec.classList.add("jr-live");
        const journey = { p: 0 };
        alignTrack();
        buildPath();
        render(0);

        gsap.to(journey, {
          p: 1,
          ease: "none",
          onUpdate: () => render(journey.p),
          scrollTrigger: {
            trigger: jrSec,
            refreshPriority: -1,
            start: "top top",
            end: () => `+=${Math.round(distance() / (1 - HOLD))}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              alignTrack();
              buildPath();
              render(journey.p);
            },
          },
        });
        return () => {
          jrSec.classList.remove("jr-live");
          jrTrack.style.removeProperty("transform");
          jrTrack.style.removeProperty("padding-left");
          jrTrack.style.removeProperty("padding-right");
        };
      });
    }

    // 13. Reveal animations
    $$<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 42, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    return () => {
      if (toastTimer) clearTimeout(toastTimer);
      root.removeEventListener("pointerover", onTileInteract);
      root.removeEventListener("click", onTileInteract);
      root.removeEventListener("focusin", onTileInteract);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onHeaderScroll);
      if (onResizeFeature) window.removeEventListener("resize", onResizeFeature);
      jrMM.revert();
      zmMM.revert();
      stObserver?.disconnect();
      if (ddCloseTimer) clearTimeout(ddCloseTimer);
      document.removeEventListener("click", onDdDocClick);
      document.removeEventListener("keydown", onDdKey);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      body.classList.remove("orbit", "atelier", "blueprint", "lock", "gsap-ready");
    };
  }, [markupObj, config]);

  if (!config) return null;

  return (
    <>
      <div
        ref={rootRef}
        className="sparsh-curated-root"
        dangerouslySetInnerHTML={markupObj}
      />
      <SiteFooter data={siteFooterData} />
    </>
  );
}
