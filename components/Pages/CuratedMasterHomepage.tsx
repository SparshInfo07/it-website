"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CURATED_HOMEPAGE_MARKUP } from "@/data/HomePage/curatedHomepageMarkup";

export default function CuratedMasterHomepage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const $ = <T extends Element = HTMLElement>(s: string, p: ParentNode = root): T | null =>
      p.querySelector<T>(s);
    const $$ = <T extends Element = HTMLElement>(s: string, p: ParentNode = root): T[] =>
      Array.from(p.querySelectorAll<T>(s));

    const body = document.body;
    body.classList.remove("orbit", "atelier", "blueprint");
    body.classList.add("orbit", "gsap-ready");

    // 1. Live 4-Mode Hero Switcher
    const bodyClassMap: Record<string, string> = {
      b: "orbit",
      a: "atelier",
      c: "blueprint",
      d: "atelier",
    };

    const animateActiveHero = (mode: string) => {
      const activePanel = $<HTMLElement>(`[data-hero-panel="${mode}"]`);
      if (!activePanel) return;
      const items = $$<HTMLElement>("[data-entrance], [data-float-item], .hero-piece", activePanel);
      gsap.killTweensOf(items);
      gsap.fromTo(
        items,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
        }
      );
    };

    const setHeroMode = (mode: string) => {
      $$<HTMLElement>("[data-hero-panel]").forEach((sec) => {
        sec.style.display = sec.dataset.heroPanel === mode ? "" : "none";
      });
      $$<HTMLElement>("[data-hero-mode]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.heroMode === mode);
      });
      body.classList.remove("orbit", "atelier", "blueprint");
      body.classList.add(bodyClassMap[mode] || "orbit");
      animateActiveHero(mode);
      ScrollTrigger.refresh();
    };

    $$<HTMLButtonElement>("[data-hero-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.heroMode) setHeroMode(btn.dataset.heroMode);
      });
    });

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

    let quotePlan = "Gold";
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
        backBtn.textContent = "← Back";
        backBtn.style.visibility = wizStep === 0 ? "hidden" : "visible";
      }
      if (bar) bar.style.width = ((wizStep + 1) / 3) * 100 + "%";
      if (nextBtn) {
        nextBtn.textContent = wizStep === 2 ? "Generate brief ↗" : "Continue ↗";
        nextBtn.disabled = false;
      }
      brief?.classList.remove("show");
      readyBrief = "";
    };

    $$<HTMLElement>(".open-quote").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.preventDefault();
        if ($("#infoModal")?.classList.contains("open")) modalClose();
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
      if (backBtn) backBtn.textContent = "Copy brief ↗";
      if (nextBtn) nextBtn.textContent = "Copy brief ↗";
      toast("Brief generated — click to copy");
    });

    // 4. Contact Form Brief Generator
    $<HTMLFormElement>("#contactForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.currentTarget as HTMLFormElement;
      if (!f.reportValidity()) return;
      const d = new FormData(f);
      const txt = `SPARSH IT — PROJECT ENQUIRY BRIEF\nName: ${d.get("name")}\nEmail: ${d.get("email")}\nBusiness: ${d.get("business") || "Not specified"}\nSolution: ${d.get("need")}\nDetails: ${d.get("message")}`;
      const brief = $<HTMLElement>("#contactBrief");
      const copyBtn = $<HTMLElement>("#copyContact");
      if (brief) {
        brief.textContent = txt;
        brief.classList.add("show");
      }
      if (copyBtn) copyBtn.style.display = "flex";
      toast("Enquiry brief generated ✓");
    });
    $("#copyContact")?.addEventListener("click", () => {
      const txt = $("#contactBrief")?.textContent || "";
      safeCopy(txt);
    });

    // 5. Interactive Capabilities Watermark Stage (From 01_Contemporary_Blue.html)
    const capsData = [
      [
        "Websites that work harder.",
        "Brand-first, responsive sites built for search discovery, enterprise credibility, and customer enquiries.",
        "WEB",
      ],
      [
        "Digital catalogues & commerce.",
        "Structured product pages, bulk RFQ pricing requests, online checkout, and practical selling workflows.",
        "SELL",
      ],
      [
        "CMS, admin & enquiry systems.",
        "Manage products, high-res media, website content, and buyer conversations without calling a developer.",
        "CMS",
      ],
      [
        "Custom web & mobile apps.",
        "Build scalable MVPs, internal operations dashboards, and customer-facing portals around your workflow.",
        "APP",
      ],
      [
        "AI & business automation.",
        "Automate repetitive operations, intelligent lead routing, quotation drafting, and customer support.",
        "AUTO",
      ],
    ];
    const setCap = (i: number) => {
      $$<HTMLElement>(".cap-item").forEach((e, j) => e.classList.toggle("active", j === i));
      const right = $<HTMLElement>("#capRight");
      const hl = $<HTMLElement>("#capHeadline");
      const desc = $<HTMLElement>("#capDesc");
      const wm = $<HTMLElement>("#capWatermark");
      if (right && capsData[i]) {
        right.dataset.active = String(i);
        if (hl) hl.textContent = capsData[i][0];
        if (desc) desc.textContent = capsData[i][1];
        if (wm) wm.textContent = capsData[i][2];
      }
    };
    $$<HTMLElement>(".cap-item").forEach((b, i) => {
      b.addEventListener("mouseenter", () => setCap(i));
      b.addEventListener("focus", () => setCap(i));
      b.addEventListener("click", () => setCap(i));
    });

    // 6. Pinned 4-Chapter Digital Transformation Story (From FUSION_STUDIO_STANDALONE.html)
    let chapter = 0;
    let manualUntil = 0;
    const setChapter = (n: number, manual = false) => {
      chapter = Math.max(0, Math.min(3, n));
      $$<HTMLElement>("[data-chapter]").forEach((el) =>
        el.classList.toggle("active", Number(el.dataset.chapter) === chapter)
      );
      $$<HTMLElement>("[data-chapter-target]").forEach((el) =>
        el.classList.toggle("active", Number(el.dataset.chapterTarget) === chapter)
      );
      const vis = $<HTMLElement>("#chapterVisual");
      if (vis) vis.dataset.step = String(chapter);
      if (manual) manualUntil = Date.now() + 1800;
    };
    $("#prevChapter")?.addEventListener("click", () => setChapter(chapter - 1, true));
    $("#nextChapter")?.addEventListener("click", () => setChapter(chapter + 1, true));
    $$<HTMLElement>("[data-chapter-target]").forEach((b) =>
      b.addEventListener("click", () => setChapter(Number(b.dataset.chapterTarget), true))
    );

    // 7. Interactive Industry Live Dashboard Switcher (From 01_Storefront_Transformation.html)
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
    $$<HTMLElement>("[data-industry]").forEach((b) =>
      b.addEventListener("click", () => {
        const key = b.dataset.industry || "";
        const d = industryData[key];
        if (!d) return;
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
            { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out" }
          );
        }
      })
    );

    // 8. FAQ Accordion
    $$<HTMLElement>(".faq-q").forEach((b) =>
      b.addEventListener("click", () => {
        const x = b.closest(".faq-item");
        if (!x) return;
        x.classList.toggle("open");
        b.setAttribute("aria-expanded", String(x.classList.contains("open")));
      })
    );

    // 9. Concept Cases & Editorial Insights Modals
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
      articles: [
        [
          "Does your growing business need a website or a digital catalogue?",
          "Editorial perspective: A website gives your brand and product specifications a home you control, turning passive browsers into structured enquiries.",
        ],
        [
          "What an online quotation system can simplify",
          "Editorial perspective: Instead of fragmented WhatsApp messages and calls, an RFQ workflow captures buyer contact details, SKU selections, and quantities in one place.",
        ],
        [
          "When to move from catalogue to online checkout",
          "Editorial perspective: Start with enquiry-driven selling when orders require custom pricing or bulk shipping; unlock instant checkout as SKUs standardize.",
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
    $$<HTMLElement>("[data-article]").forEach((el) => {
      const idx = Number(el.dataset.article || 0);
      const item = infos.articles[idx];
      if (!item) return;
      const f = () => showInfo(item[0], item[1], "SPARSH IT · EDITORIAL PERSPECTIVE");
      el.addEventListener("click", f);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") f();
      });
    });

    // 10. Mobile Navigation & Sticky Header
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
    const header = $<HTMLElement>("#header");
    const onHeaderScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 30);
    };
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
    onHeaderScroll();

    // 11. Draggable Feature Showcase (From 03_Editorial_Drag_Gallery.html)
    const v = $<HTMLElement>("#featureViewport");
    const track = $<HTMLElement>("#featureTrack");
    const cards = track ? $$<HTMLElement>(".feature-card", track) : [];
    const cur = $<HTMLElement>("#dragCursor");
    let onResizeFeature: (() => void) | undefined;

    if (v && track && cards.length) {
      const left = () => Math.max(0, track.scrollWidth - v.clientWidth);
      let x = 0;
      let drag = false;
      let start = 0;
      let origin = 0;
      let started = false;
      const clamp = (n: number) => Math.max(-left(), Math.min(0, n));
      const setX = (n: number, animate = true) => {
        x = clamp(n);
        if (animate) {
          gsap.to(track, { x, duration: 0.65, ease: "power3.out", overwrite: true });
        } else {
          gsap.set(track, { x });
        }
      };
      const moveBtn = (d: number) => {
        const item = cards[0].getBoundingClientRect().width + 23;
        setX(x - d * item, true);
      };
      $("#featPrev")?.addEventListener("click", () => moveBtn(-1));
      $("#featNext")?.addEventListener("click", () => moveBtn(1));
      v.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        drag = true;
        started = false;
        start = e.clientX;
        origin = x;
        v.setPointerCapture(e.pointerId);
        gsap.killTweensOf(track);
      });
      v.addEventListener("pointermove", (e) => {
        if (!drag) return;
        const delta = e.clientX - start;
        if (Math.abs(delta) > 4) started = true;
        setX(origin + delta, false);
      });
      const finish = (e: PointerEvent) => {
        if (!drag) return;
        drag = false;
        if (started) {
          setX(x + (e.clientX - start) * 0.14, true);
          v.dataset.moved = "true";
          setTimeout(() => delete v.dataset.moved, 80);
        }
      };
      v.addEventListener("pointerup", finish);
      v.addEventListener("pointercancel", finish);
      cards.forEach((card, i) => {
        card.addEventListener("click", () => {
          if (v.dataset.moved) return;
          const titles = [
            "Digital Showroom & Catalogue Concept",
            "Unified Admin & Operations Concept",
            "B2B RFQ Quotation Workflow Concept",
            "Local-to-Digital Storefront Transformation",
          ];
          const desc =
            "Interactive concept engineered by Sparsh IT. Drag the showcase or request a tailored project scope to see how we adapt this architecture for your business.";
          showInfo(titles[i], desc, "SPARSH IT · INTERACTIVE CONCEPT");
        });
      });
      onResizeFeature = () => setX(x, false);
      window.addEventListener("resize", onResizeFeature);
      if (window.matchMedia("(pointer:fine)").matches && cur) {
        v.addEventListener("pointerenter", () => cur.classList.add("is-on"));
        v.addEventListener("pointerleave", () => cur.classList.remove("is-on"));
        v.addEventListener("pointermove", (e) => {
          cur.style.left = e.clientX + "px";
          cur.style.top = e.clientY + "px";
          cur.textContent = drag ? "MOVE ↔" : "DRAG ↔";
        });
      }
    }

    // 12. Bottom Curation Source File Filter Dock
    const filterBtns = $$<HTMLButtonElement>("[data-filter-src]");
    const filterSecs = $$<HTMLElement>("[data-src-file]");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const f = btn.dataset.filterSrc || "all";
        filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
        if (f === "02_studio") setHeroMode("b");
        else if (f === "01_store") setHeroMode("a");
        else if (f === "03_drag") setHeroMode("c");
        else if (f === "fusion" || f === "01_blue") setHeroMode("d");
        filterSecs.forEach((sec) => {
          if (sec.hasAttribute("data-hero-panel")) return;
          const srcAttr = sec.dataset.srcFile || "";
          sec.style.display = f === "all" || srcAttr.includes(f) ? "" : "none";
        });
        ScrollTrigger.refresh();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    // 13. GSAP + Scroll Choreography
    animateActiveHero("b");

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

    gsap.fromTo(
      $$(".feature-card"),
      { y: 75, rotation: (i) => (i % 2 ? 6 : -5), opacity: 0.5 },
      {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.05,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#featured",
          start: "top 72%",
          once: true,
        },
      }
    );

    let ticking = false;
    const onScrollChoreography = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        const vh = window.innerHeight || 800;

        // Hero B 3D stack fan-out on scroll
        const panelB = $<HTMLElement>("#hero-panel-b");
        if (panelB && panelB.style.display !== "none") {
          const p = Math.min(1, Math.max(0, sy / 650));
          const stacks = $$<HTMLElement>(".hero-stack", panelB);
          stacks.forEach((el, i) => {
            const dir = i - 1;
            el.style.transform = `translate3d(${dir * -36 * p}px, ${dir * 60 * p}px, 0) rotate(${dir * -6 * p}deg)`;
          });
        }

        // Hero A Storefront-to-Commerce crossover on scroll
        const panelA = $<HTMLElement>("#hero-panel-a");
        if (panelA && panelA.style.display !== "none") {
          const p = Math.min(1, Math.max(0, sy / 650));
          const store = $<HTMLElement>(".hero-store-layer", panelA);
          const web = $<HTMLElement>(".hero-commerce-layer", panelA);
          if (store && web) {
            store.style.transform = `translate3d(${65 * p}px, 0, 0) rotate(${2 * p}deg) scale(${1 - 0.1 * p})`;
            store.style.opacity = String(1 - 0.35 * p);
            web.style.transform = `translate3d(${-35 * p}px, ${-60 * p}px, 0) rotate(${-4 * p}deg) scale(${1 + 0.06 * p})`;
          }
        }

        // Feature cards internal visual parallax
        $$<HTMLElement>(".feature-card").forEach((card, i) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < vh && rect.bottom > 0) {
            const prog = (vh - rect.top) / (vh + rect.height);
            const vis = $<HTMLElement>(".feat-visual", card);
            if (vis) {
              const baseRot = i % 2 === 1 ? 7 : -7;
              vis.style.transform = `translateY(${(0.5 - prog) * 34}px) rotate(${baseRot + (prog - 0.5) * 2}deg)`;
            }
          }
        });

        // Transformation 4-Chapter scroll progression
        const shiftSec = $<HTMLElement>("#transformation");
        if (shiftSec && Date.now() > manualUntil) {
          const r = shiftSec.getBoundingClientRect();
          if (r.top < vh * 0.55 && r.bottom > vh * 0.35) {
            const prog = Math.max(0, Math.min(0.99, (vh * 0.55 - r.top) / Math.max(1, r.height * 0.85)));
            const idx = Math.min(3, Math.floor(prog * 4));
            if (idx !== chapter) setChapter(idx, false);
          }
        }

        // Process Line scroll scrub (0% -> 100%)
        const procSec = $<HTMLElement>("#process");
        const procLine = $<HTMLElement>("#processLine");
        if (procSec && procLine) {
          const r = procSec.getBoundingClientRect();
          const prog = Math.max(0, Math.min(1, (vh * 0.82 - r.top) / Math.max(1, r.height * 0.75)));
          procLine.style.width = `${(prog * 100).toFixed(1)}%`;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScrollChoreography, { passive: true });
    onScrollChoreography();

    return () => {
      if (toastTimer) clearTimeout(toastTimer);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onHeaderScroll);
      window.removeEventListener("scroll", onScrollChoreography);
      if (onResizeFeature) window.removeEventListener("resize", onResizeFeature);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      body.classList.remove("orbit", "atelier", "blueprint", "lock", "gsap-ready");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="sparsh-curated-root"
      dangerouslySetInnerHTML={{ __html: CURATED_HOMEPAGE_MARKUP }}
    />
  );
}
