"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CURATED_HOMEPAGE_MARKUP } from "@/data/HomePage/curatedHomepageMarkup";
import SiteFooter from "@/components/Organisms/SiteFooter/SiteFooter";
import { siteFooterData } from "@/data/siteFooterData";

export default function CuratedMasterHomepage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const markupObj = useMemo(() => ({ __html: CURATED_HOMEPAGE_MARKUP }), []);

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

    // 1b. Hero slot roll: the big word under "We build" rolls letter by letter to the next word.
    // The line has a fixed height and one font size (fitted to the widest word), so nothing below it moves.
    const srSlot = $<HTMLElement>("#srSlot");
    const srLine = $<HTMLElement>("#hero-panel-b .sr-l2");
    const srStage = $<HTMLElement>("#hero-panel-b .sr-stage");
    const srButtons = $$<HTMLButtonElement>("#hero-panel-b .sr-idx button");
    const SR_WORDS = ["UI/UX", "APPS", "WEBSITES", "AI AGENTS", "WHAT'S NEXT"];
    const SR_HOLD = 2600;
    const srReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let srPrev = "";
    let srCur = 0;
    let srTimer: ReturnType<typeof setTimeout> | undefined;
    let srAlive = true;

    const srFit = () => {
      if (!srSlot || !srLine || !srStage) return;
      const m = document.createElement("span");
      m.className = "sr-fitm";
      srLine.append(m);
      let widest = 0;
      SR_WORDS.forEach((w) => {
        m.textContent = `${w}.`;
        widest = Math.max(widest, m.getBoundingClientRect().width);
      });
      m.remove();
      if (!widest) return;
      const size = Math.min(180, Math.floor(((srStage.clientWidth * 0.98) / widest) * 100));
      srLine.style.fontSize = `${size}px`;
      srSlot.style.transition = "none";
      srSlot.style.width = "auto";
      srSlot.style.width = `${srSlot.scrollWidth}px`;
      void srSlot.offsetWidth;
      srSlot.style.transition = "";
    };

    const srRender = (word: string) => {
      if (!srSlot) return;
      srSlot.style.width = `${srSlot.offsetWidth}px`;
      srSlot.textContent = "";
      [...word].forEach((ch, i) => {
        const cell = document.createElement("span");
        const sizer = document.createElement("b");
        const col = document.createElement("span");
        cell.className = "sr-cell";
        col.className = "sr-col";
        sizer.textContent = ch;
        [srPrev[i] || " ", String.fromCharCode(65 + ((i * 7 + word.length) % 26)), ch].forEach((c) => {
          const span = document.createElement("span");
          span.textContent = c;
          col.append(span);
        });
        cell.append(sizer, col);
        srSlot.append(cell);
        if (srPrev && !srReduce) {
          col.animate([{ transform: "translateY(0)" }, { transform: "translateY(-66.666%)" }], {
            duration: 760,
            delay: i * 55,
            easing: "cubic-bezier(.55,1.55,.45,1)",
            fill: "forwards",
          });
        } else {
          col.style.transform = "translateY(-66.666%)";
        }
      });
      const width = $$<HTMLElement>(".sr-cell", srSlot).reduce((t, c) => t + c.getBoundingClientRect().width, 0);
      void srSlot.offsetWidth;
      srSlot.style.width = `${width}px`;
      srPrev = word;
    };

    const srGo = (i: number) => {
      if (!srAlive) return;
      srCur = i;
      srRender(SR_WORDS[i]);
      srButtons.forEach((b, k) => {
        b.classList.remove("on");
        b.setAttribute("aria-pressed", String(k === i));
        b.style.setProperty("--sr-hold", `${SR_HOLD}ms`);
      });
      const active = srButtons[i];
      if (active) {
        void active.offsetWidth;
        active.classList.add("on");
      }
      if (srTimer) clearTimeout(srTimer);
      if (!srReduce) srTimer = setTimeout(() => srGo((srCur + 1) % SR_WORDS.length), SR_HOLD);
    };

    srButtons.forEach((b) => b.addEventListener("click", () => srGo(Number(b.dataset.sr) || 0)));
    const onSrResize = () => srFit();
    if (srSlot) {
      window.addEventListener("resize", onSrResize);
      document.fonts.ready.then(() => {
        if (!srAlive) return;
        srFit();
        srGo(srReduce ? SR_WORDS.length - 1 : 0);
      });
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
    // Packages staircase: the steps grow up one after another once the section scrolls into view.
    // Without JS or with reduced motion, the CSS shows the finished staircase straight away.
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

    // 4. Contact form: sends the enquiry to /api/contact-form (emails the team and the visitor)
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
          // 400 = something the visitor typed; show the server's field message. Anything else stays generic.
          throw new Error(
            res.status === 400 && data.error
              ? data.error
              : "We couldn't send your enquiry right now. Please try again in a minute, or email info@sparshinfosystem.com.",
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
            : "We couldn't send your enquiry right now. Please try again in a minute, or email info@sparshinfosystem.com.",
          true,
        );
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send enquiry";
        }
      } finally {
        contactSending = false;
      }
    });

    // 5. Interactive Philosophy Tabs & Cards + Capabilities Watermark Stage
    const philoBannerData = [
      {
        kicker: "COMMERCIAL ARCHITECTURE",
        title:
          "We Don't Hand You a Complex Codebase and Walk Away. We Engineer Revenue-First Systems That Accelerate Quotations and Sales.",
        stats: [
          ["4.2×", "Faster enquiry-to-quote velocity"],
          ["-68%", "Reduction in manual admin work"],
          ["100%", "Custom-scoped around your ROI"],
        ],
      },
      {
        kicker: "HUMAN-CENTRIC EXPERIENCE",
        title:
          "Every Buyer Journey, Product Catalogue Filter, and Admin Screen Is Crafted for Zero Confusion and Instant Adoption.",
        stats: [
          ["0.4s", "Instant catalogue search & filter"],
          ["3-Click", "Streamlined buyer RFQ journey"],
          ["Zero", "Developer dependency for daily edits"],
        ],
      },
      {
        kicker: "MODULAR FUTURE-PROOF STACK",
        title:
          "Launch Lean with What Your Business Needs Today, Then Plug in CMS, Payments, Inventory, and AI Automation Without Rebuilding.",
        stats: [
          ["3-Stage", "Upgrade path (Silver → Gold → Premium)"],
          ["99.9%", "Production-grade cloud uptime"],
          ["Modular", "Ready for ERP, CRM & AI sync"],
        ],
      },
    ];

    let currentPhiloIdx = 0;
    const activatePhilo = (idx: number) => {
      if (idx === currentPhiloIdx) return;
      currentPhiloIdx = idx;
      const cards = $$<HTMLElement>("[data-philo-card]");
      cards.forEach((c, i) => c.classList.toggle("active", i === idx));

      const activeCard = cards[idx];
      if (activeCard) {
        gsap.fromTo(
          activeCard,
          { scale: 0.98 },
          { scale: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" }
        );
      }

      const bData = philoBannerData[idx];
      const banner = $<HTMLElement>(".philo-bottom-banner");
      if (bData && banner) {
        const kickerEl = $<HTMLElement>(".philo-banner-kicker", banner);
        const h4El = $<HTMLElement>("h4", banner);
        const statItems = $$<HTMLElement>(".philo-stat-item", banner);
        if (kickerEl) kickerEl.textContent = bData.kicker;
        if (h4El) h4El.textContent = bData.title;
        statItems.forEach((item, sIdx) => {
          const st = bData.stats[sIdx];
          if (!st) return;
          const strEl = $<HTMLElement>("strong", item);
          const spEl = $<HTMLElement>("span", item);
          if (strEl) strEl.textContent = st[0];
          if (spEl) spEl.textContent = st[1];
        });
        gsap.fromTo(
          banner,
          { opacity: 0.82, y: 4 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" }
        );
      }
    };

    const onPhiloInteract = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      const cardEl = target.closest<HTMLElement>("[data-philo-card]");
      if (cardEl && !target.closest(".open-quote")) {
        activatePhilo(Number(cardEl.dataset.philoCard || 0));
      }
    };
    root.addEventListener("pointerover", onPhiloInteract);
    root.addEventListener("click", onPhiloInteract);
    root.addEventListener("focusin", onPhiloInteract);

    $$<HTMLElement>(".philo-bar-fill").forEach((bar) => {
      const targetW = bar.dataset.barWidth || "80%";
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: targetW,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#philosophy",
            start: "top 78%",
            once: true,
          },
        }
      );
    });
    const cap3Items = [
      {
        badge: "DESIGN STUDIO",
        title: "Design People Understand.",
        desc: "We research your users, map every journey and design clear, beautiful screens, then hand developers a system they can build from.",
        pipe: [
          ["INPUT", "Your Users & Goals"],
          ["PROCESS", "Flows, Prototypes & UI"],
          ["OUTCOME", "Developer-Ready Design"],
        ],
        deliv: ["UX Research & User Flows", "Clickable Figma Prototype", "Visual UI & Brand Language", "Reusable Design System"],
        stat: "Weeks 2–3",
        sub: "Clickable prototype ready to test",
        href: "/services/ui-ux-design-and-digital-experience",
      },
      {
        badge: "PRODUCT ENGINEERING",
        title: "Apps People Open Every Day.",
        desc: "Native and cross-platform mobile apps, web apps and dashboards, built in short sprints and launched with a plan for what comes next.",
        pipe: [
          ["INPUT", "Your Idea or Workflow"],
          ["PROCESS", "iOS · Android · Web"],
          ["OUTCOME", "A Launched, Scalable App"],
        ],
        deliv: ["iOS & Android Apps", "Web Apps, Portals & SaaS", "Secure APIs & Integrations", "Store Launch & Support"],
        stat: "Every 2 weeks",
        sub: "A working demo you can try",
        href: "/services/application-development",
      },
      {
        badge: "WEB DEVELOPMENT",
        title: "Websites That Work Harder.",
        desc: "Fast, search-friendly websites, catalogues and online stores that look the part, bring in enquiries and are easy for your team to update.",
        pipe: [
          ["INPUT", "Search & Brand Discovery"],
          ["PROCESS", "Fast, SEO-Ready Build"],
          ["OUTCOME", "Qualified Enquiries"],
        ],
        deliv: ["Custom Responsive Design", "Catalogue, CMS or Online Store", "Technical SEO & Core Web Vitals", "WhatsApp & Enquiry Capture"],
        stat: "3 packages",
        sub: "Start simple, upgrade without a rebuild",
        href: "/services/website-development",
      },
      {
        badge: "APPLIED AI",
        title: "AI That Does Real Work.",
        desc: "Assistants that answer customers, agents that draft quotes and update records, and smart features inside the products you already run.",
        pipe: [
          ["INPUT", "Enquiries, Docs & Data"],
          ["PROCESS", "Assistants & AI Agents"],
          ["OUTCOME", "Hours Saved Every Week"],
        ],
        deliv: ["AI Chatbots & Assistants", "Workflow & Quote Automation", "Document Data Extraction", "Human Approval & Guardrails"],
        stat: "24/7",
        sub: "Instant answers for your customers",
        href: "/services/artificial-intelligence",
      },
    ];

    // Lock the inspector to the height of its tallest capability so switching never resizes it
    // (a changing height stretches the grid row and shifts the tiles beside it).
    const capInsp = $<HTMLElement>("#capInspector");
    const lockCapHeight = () => {
      if (!capInsp || !capInsp.parentElement) return;
      const clone = capInsp.cloneNode(true) as HTMLElement;
      Object.assign(clone.style, {
        position: "absolute",
        visibility: "hidden",
        pointerEvents: "none",
        left: "-99999px",
        top: "0",
        width: `${capInsp.getBoundingClientRect().width}px`,
        minHeight: "0",
        height: "auto",
      });
      clone.setAttribute("aria-hidden", "true");
      capInsp.parentElement.append(clone);
      const q = (sel: string) => clone.querySelector<HTMLElement>(sel);
      let tallest = 0;
      cap3Items.forEach((d) => {
        const set = (sel: string, v: string) => {
          const el = q(sel);
          if (el) el.textContent = v;
        };
        set("#inspBadge", d.badge);
        set("#inspTitle", d.title);
        set("#inspDesc", d.desc);
        set("#inspStat", d.stat);
        set("#inspStatSub", d.sub);
        const pipe = q("#inspPipe");
        if (pipe) pipe.innerHTML = d.pipe.map((p) => `<div class="pipe-node"><small>${p[0]}</small><b>${p[1]}</b></div>`).join("");
        const deliv = q("#inspDeliv");
        if (deliv) deliv.innerHTML = d.deliv.map((x) => `<div class="deliv-item"><i></i>${x}</div>`).join("");
        tallest = Math.max(tallest, clone.getBoundingClientRect().height);
      });
      clone.remove();
      if (tallest > 0) capInsp.style.minHeight = `${Math.ceil(tallest)}px`;
    };
    const onCapResize = () => {
      if (capInsp) capInsp.style.minHeight = "";
      lockCapHeight();
    };
    lockCapHeight();
    document.fonts?.ready.then(() => onCapResize());
    window.addEventListener("resize", onCapResize);

    let activeCapIdx = 0;
    let capTl: gsap.core.Timeline | null = null;
    let capHoverTimer: ReturnType<typeof setTimeout> | undefined;
    const capReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Swap the inspector's content: quick fade-out, then the new content rises in piece by piece.
    const setCap = (i: number) => {
      if (i === activeCapIdx || !cap3Items[i]) return;
      activeCapIdx = i;
      $$<HTMLElement>("[data-cap-tile]").forEach((e, j) => e.classList.toggle("active", j === i));
      const d = cap3Items[i];
      const badgeEl = $<HTMLElement>("#inspBadge");
      const titleEl = $<HTMLElement>("#inspTitle");
      const descEl = $<HTMLElement>("#inspDesc");
      const statEl = $<HTMLElement>("#inspStat");
      const subEl = $<HTMLElement>("#inspStatSub");
      const pipeEl = $<HTMLElement>("#inspPipe");
      const delivEl = $<HTMLElement>("#inspDeliv");

      const swap = () => {
        if (badgeEl) badgeEl.textContent = d.badge;
        if (titleEl) titleEl.textContent = d.title;
        if (descEl) descEl.textContent = d.desc;
        if (statEl) statEl.textContent = d.stat;
        if (subEl) subEl.textContent = d.sub;
        const linkEl = $<HTMLAnchorElement>("#inspLink");
        if (linkEl) linkEl.href = d.href;
        if (pipeEl) {
          pipeEl.innerHTML = d.pipe
            .map((p) => `<div class="pipe-node"><small>${p[0]}</small><b>${p[1]}</b></div>`)
            .join("");
        }
        if (delivEl) {
          delivEl.innerHTML = d.deliv
            .map((x) => `<div class="deliv-item"><i></i>${x}</div>`)
            .join("");
        }
      };

      const texts = [badgeEl, titleEl, descEl, statEl, subEl].filter(Boolean) as HTMLElement[];
      const blocks = [pipeEl, delivEl].filter(Boolean) as HTMLElement[];
      capTl?.kill();
      if (capReduce) {
        swap();
        gsap.set([...texts, ...blocks], { clearProps: "opacity,transform" });
        return;
      }
      capTl = gsap.timeline({ defaults: { overwrite: "auto" } });
      capTl.to([...texts, ...blocks], { opacity: 0, y: -8, duration: 0.3, ease: "power2.inOut" });
      capTl.add(() => {
        swap();
        gsap.set(blocks, { opacity: 1, y: 0 });
        const items = blocks.flatMap((b) => Array.from(b.children) as HTMLElement[]);
        capTl?.fromTo(
          texts,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.85, ease: "power2.out", stagger: 0.08, clearProps: "transform" },
          ">"
        );
        capTl?.fromTo(
          items,
          { opacity: 0, y: 18, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power2.out", stagger: 0.07, clearProps: "transform" },
          "<0.15"
        );
      });
    };
    const capTileFrom = (e: Event) => (e.target as Element | null)?.closest<HTMLElement>("[data-cap-tile]") ?? null;
    // Hover waits a moment so sweeping across several tiles doesn't flicker the inspector.
    const onCapHover = (e: Event) => {
      const tile = capTileFrom(e);
      if (!tile) return;
      if (capHoverTimer) clearTimeout(capHoverTimer);
      capHoverTimer = setTimeout(() => setCap(Number(tile.dataset.capTile || 0)), 120);
    };
    const onCapInteract = (e: Event) => {
      const tile = capTileFrom(e);
      if (!tile) return;
      if (capHoverTimer) clearTimeout(capHoverTimer);
      setCap(Number(tile.dataset.capTile || 0));
    };
    // Soft light that follows the cursor inside a tile.
    const onCapMove = (e: PointerEvent) => {
      const tile = capTileFrom(e);
      if (!tile) return;
      const r = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
      tile.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    root.addEventListener("pointerover", onCapHover);
    root.addEventListener("pointermove", onCapMove);
    root.addEventListener("click", onCapInteract);
    root.addEventListener("focusin", onCapInteract);

    // 6. Transformation story: cinematic zoom
    // The stage pins full-screen and you zoom through four chapter views: each one grows to fill
    // the screen, then flies past the viewer while the next comes up from behind it.
    // Reduced-motion visitors get the chapters as a plain list (the CSS default without .zm-live).
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
        const pos = p * (last + 0.2) - 0.1; // 0 … last, with a short hold at both ends
        zmSlides.forEach((slide, i) => {
          const layer = zmLayers[i];
          const d = i - pos; // > 0: still to come (small, behind) · < 0: passed (flies past the viewer)
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
            // Measured after the showcase and How We Work pins above it (both created later in this file).
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

    // 7. Interactive Industry Live Dashboard Switcher (From 01_Storefront_Transformation.html)
    const industryData: Record<
      string,
      { tag: string; title: string; desc: string; rows: string[]; pills: string[]; float: string }
    > = {
      wholesale: {
        tag: "B2B / DIGITAL CATALOGUE",
        title: "Show More. Quote Faster.",
        desc: "Let buyers browse specifications, choose quantities, and request tailored bulk quotations.",
        rows: ["Product Catalogue", "Bulk quotation requests", "Lead dashboard"],
        pills: ["LIVE", "NEW", "ADMIN"],
        float: "B2B READY ↗",
      },
      retail: {
        tag: "RETAIL / CURATED COMMERCE",
        title: "From Shelf to Screen.",
        desc: "Make collections discoverable and let customers reach you or place orders online.",
        rows: ["Seasonal collections", "Content updates", "Customer enquiries"],
        pills: ["SHOP", "CMS", "NEW"],
        float: "RETAIL READY ↗",
      },
      services: {
        tag: "SERVICES / APPOINTMENTS",
        title: "Turn Visits into Bookings.",
        desc: "Present services, capture client requirements, and organise appointment requests.",
        rows: ["Service catalogue", "Booking requests", "Customer profiles"],
        pills: ["LIVE", "NEW", "CRM"],
        float: "BOOK ONLINE ↗",
      },
      startups: {
        tag: "STARTUPS / MVP & SAAS",
        title: "Launch the Next Idea.",
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
    // Navbar dropdown menus: hover to open on desktop, click/keyboard everywhere, one open at a time.
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
      // Choosing any link closes the menu.
      $$<HTMLElement>(".dd-panel a", dd).forEach((a) => a.addEventListener("click", () => setDd(null)));
      // List + preview menus: the hovered/focused item drives the preview image.
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

    // 11. Scroll-driven 3D concept cylinder
    // The stage pins full-screen. Cards sit a quarter-turn apart around a vertical cylinder,
    // each one a step lower than the last, all facing outward. The card in focus faces the
    // viewer flat in the centre; the previous card is edge-on far left (its back showing),
    // the next card edge-on far right and lower, and the one after that sits dimmed directly
    // behind and below. Scrolling turns the cylinder; cards stay where scrolling stops.
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

      const STEP = 90; // a quarter-turn between neighbouring cards
      const RADIUS_PER_WIDTH = 1.0; // cylinder radius, in card widths
      const DROP_PER_HEIGHT = 0.86; // vertical drop per step, in card heights

      let radius = 0;
      let drop = 0;
      let activeIdx = -1;
      const spiral = { pos: 0 };

      const measure = () => {
        radius = Math.round((cards[0].offsetWidth || 700) * RADIUS_PER_WIDTH);
        drop = Math.round((cards[0].offsetHeight || 490) * DROP_PER_HEIGHT);
      };

      const setActive = (idx: number) => {
        if (idx === activeIdx) return;
        activeIdx = idx;
        cards.forEach((card, i) => {
          const on = i === idx;
          card.classList.toggle("is-active", on);
          card.setAttribute("aria-current", on ? "true" : "false");
          card.tabIndex = on ? 0 : -1;
        });
      };

      const render = (pos: number) => {
        cards.forEach((card, i) => {
          const d = i - pos; // < 0: already passed (left, higher) · > 0: coming up (right, lower)
          const dist = Math.abs(d);
          const angle = d * STEP;
          const facing = Math.cos((angle * Math.PI) / 180); // 1 = facing viewer, -1 = directly behind
          // Move the cylinder back by its radius so the card in focus sits at depth 0, perfectly flat.
          card.style.transform =
            `translate3d(0, ${(d * drop).toFixed(1)}px, ${-radius}px) ` +
            `rotateY(${angle.toFixed(2)}deg) translateZ(${radius}px)`;
          card.style.setProperty("--ring-dim", Math.min(0.8, (1 - facing) * 0.45 + dist * 0.08).toFixed(3));
          const opacity = clamp01(3 - dist * 1.2); // fully visible to two steps away, gone by 2.5
          card.style.opacity = opacity.toFixed(3);
          card.style.visibility = opacity < 0.02 ? "hidden" : "visible";
        });
        setActive(Math.max(0, Math.min(n - 1, Math.round(pos))));
      };

      let spiralTrigger: ScrollTrigger | undefined;
      const goTo = (idx: number) => {
        if (!spiralTrigger) return;
        const top = spiralTrigger.start + (idx / (n - 1)) * (spiralTrigger.end - spiralTrigger.start);
        window.scrollTo({ top, behavior: "smooth" });
      };

      if (reduceMotion) {
        cards.forEach((card) => {
          card.style.removeProperty("transform");
          card.style.removeProperty("opacity");
        });
      } else {
        measure();
        render(0);
        const tween = gsap.to(spiral, {
          pos: n - 1,
          ease: "none",
          onUpdate: () => render(spiral.pos),
          scrollTrigger: {
            trigger: v,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * 0.9 * (n - 1))}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // No snapping: the cards stay exactly where the visitor stops scrolling.
          },
        });
        spiralTrigger = tween.scrollTrigger;

        onResizeFeature = () => {
          measure();
          render(spiral.pos);
        };
        window.addEventListener("resize", onResizeFeature);
      }

      const titles = [
        "Digital Showroom & Catalogue Concept",
        "Unified Admin & Operations Concept",
        "B2B RFQ Quotation Workflow Concept",
        "Local-to-Digital Storefront Transformation",
      ];
      const desc =
        "Interactive concept engineered by Sparsh IT. Scroll through the showcase, or request a tailored project scope to see how we adapt this architecture for your business.";

      cards.forEach((card, i) => {
        // A card that isn't in front turns the spiral to itself; the front card opens its details.
        card.addEventListener("click", () => {
          if (!reduceMotion && i !== activeIdx) goTo(i);
          else showInfo(titles[i] ?? "Sparsh IT Concept", desc, "SPARSH IT · INTERACTIVE CONCEPT");
        });
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            card.click();
          }
        });
      });
    }

    // 11b. How We Work: horizontal journey
    // On wider screens the section pins and the four stages slide sideways as you scroll down,
    // while a dot travels a curved path between the step numbers and a 4-part bar fills.
    // Phones and reduced-motion visitors get a plain vertical list (handled in CSS).
    const jrSec = $<HTMLElement>("#process");
    const jrHead = $<HTMLElement>(".jr-head", root);
    const jrTrack = $<HTMLElement>("#jrTrack");
    const jrSvg = $<SVGSVGElement>("#jrSvg");
    const jrBase = $<SVGPathElement>("#jrBase");
    const jrDone = $<SVGPathElement>("#jrDone");
    const jrDot = $<SVGCircleElement>("#jrDot");
    const jrRing = $<SVGCircleElement>("#jrRing");
    const jrPanels = jrTrack ? $$<HTMLElement>(".jr-panel", jrTrack) : [];
    const jrBars = $$<HTMLElement>(".jr-progress b");
    const jrMM = gsap.matchMedia();

    if (jrSec && jrHead && jrTrack && jrSvg && jrBase && jrDone && jrDot && jrRing && jrPanels.length) {
      let pathLen = 0;
      const HOLD = 0.18; // last stretch of the pin where the finished journey stays on screen

      const distance = () => Math.max(0, jrTrack.scrollWidth - window.innerWidth);

      // Line the first stage up with the heading's left edge.
      const alignTrack = () => {
        const left = jrHead.getBoundingClientRect().left;
        jrTrack.style.paddingLeft = `${Math.round(left)}px`;
        jrTrack.style.paddingRight = `${Math.round(left)}px`;
      };

      // A wave through points just above each step number, drawn in the track's own coordinates.
      const buildPath = () => {
        const w = jrTrack.scrollWidth;
        const h = jrTrack.offsetHeight;
        jrSvg.setAttribute("width", String(w));
        jrSvg.setAttribute("height", String(h));
        jrSvg.setAttribute("viewBox", `0 0 ${w} ${h}`);
        const pts = jrPanels.map((p) => [p.offsetLeft + 6, p.offsetTop + (p.classList.contains("jr-high") ? 0 : 88) - 22]);
        let d = `M ${pts[0][0] - 80} ${pts[0][1]}`;
        pts.forEach(([x, y], i) => {
          const [px, py] = i === 0 ? [pts[0][0] - 80, pts[0][1]] : pts[i - 1];
          const mx = (px + x) / 2;
          d += ` C ${mx} ${py}, ${mx} ${y}, ${x} ${y}`;
        });
        const last = pts[pts.length - 1];
        d += ` L ${last[0] + 360} ${last[1]}`;
        jrBase.setAttribute("d", d);
        jrDone.setAttribute("d", d);
        pathLen = jrDone.getTotalLength();
        jrDone.style.strokeDasharray = String(pathLen);
      };

      const render = (p: number) => {
        const k = Math.min(1, p / (1 - HOLD)); // journey progress, finished before the pin releases
        jrTrack.style.transform = `translate3d(${(-k * distance()).toFixed(1)}px, 0, 0)`;
        const at = k * pathLen;
        jrDone.style.strokeDashoffset = (pathLen - at).toFixed(1);
        const pt = jrDone.getPointAtLength(at);
        jrDot.setAttribute("cx", pt.x.toFixed(1));
        jrDot.setAttribute("cy", pt.y.toFixed(1));
        jrRing.setAttribute("cx", pt.x.toFixed(1));
        jrRing.setAttribute("cy", pt.y.toFixed(1));
        const seg = k * jrPanels.length;
        jrPanels.forEach((el, i) => el.classList.toggle("on", i === 0 || seg >= i + 0.1));
        jrBars.forEach((b, i) => {
          b.style.width = `${(Math.max(0, Math.min(1, seg - i)) * 100).toFixed(1)}%`;
        });
      };

      jrMM.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
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
            // Measured after the showcase pin above it.
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

    // Spiral entrance: fade the stage in (card transforms belong to the spiral above).
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Opacity only: the stage is pinned, so it must not carry its own transform.
      gsap.fromTo(
        "#featureViewport",
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#featured",
            start: "top 75%",
            once: true,
          },
        }
      );
    }

    let ticking = false;
    const onScrollChoreography = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sy = window.scrollY || document.documentElement.scrollTop || 0;
        const vh = window.innerHeight || 800;
        $<HTMLElement>("#header")?.classList.toggle("scrolled", sy > 30);

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

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScrollChoreography, { passive: true });
    onScrollChoreography();

    return () => {
      if (toastTimer) clearTimeout(toastTimer);
      srAlive = false;
      if (srTimer) clearTimeout(srTimer);
      window.removeEventListener("resize", onSrResize);
      root.removeEventListener("pointerover", onPhiloInteract);
      root.removeEventListener("click", onPhiloInteract);
      root.removeEventListener("focusin", onPhiloInteract);
      root.removeEventListener("pointerover", onCapHover);
      root.removeEventListener("pointermove", onCapMove);
      root.removeEventListener("click", onCapInteract);
      root.removeEventListener("focusin", onCapInteract);
      if (capHoverTimer) clearTimeout(capHoverTimer);
      capTl?.kill();
      window.removeEventListener("resize", onCapResize);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onHeaderScroll);
      window.removeEventListener("scroll", onScrollChoreography);
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
  }, [markupObj]);

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
