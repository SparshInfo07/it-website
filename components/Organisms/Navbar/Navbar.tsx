"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CURATED_SINGLE_ROUTES = new Set([
  "/",
  "/showcase",
  "/transformation",
  "/packages",
  "/solutions/silver",
  "/solutions/gold",
  "/solutions/premium",
  "/industries/manufacturers-wholesale",
  "/industries/service-businesses",
  "/industries/startups-founders",
  "/our-philosophy",
  "/how-we-work",
  "/selected-work",
  "/faqs",
]);

const HOMEPAGE_NAVBAR_CSS = `
#header {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 150 !important;
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
  padding: 10px 20px 0 !important;
  transition: padding 0.35s cubic-bezier(0.19, 1, 0.22, 1) !important;
  font-family: 'Manrope', sans-serif !important;
}
#header.scrolled {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
  padding: 12px 20px 0 !important;
}
#header .nav.container {
  max-width: 1380px !important;
  width: 100% !important;
  height: 68px !important;
  padding: 0 28px !important;
  margin: 0 auto !important;
  border-radius: 999px !important;
  background: transparent !important;
  border: 1px solid transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 36px !important;
  position: relative !important;
  transition: max-width 0.38s cubic-bezier(0.19, 1, 0.22, 1),
              height 0.35s cubic-bezier(0.19, 1, 0.22, 1),
              background 0.35s ease,
              border-color 0.35s ease,
              box-shadow 0.35s ease,
              backdrop-filter 0.35s ease,
              padding 0.35s ease !important;
}
#header.scrolled .nav.container {
  max-width: 1240px !important;
  height: 62px !important;
  padding: 0 24px !important;
  border-radius: 999px !important;
  background: rgba(7, 18, 38, 0.9) !important;
  backdrop-filter: blur(22px) saturate(165%) !important;
  -webkit-backdrop-filter: blur(22px) saturate(165%) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 14px 40px rgba(2, 8, 23, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.16) !important;
}
#header .brand {
  display: inline-flex !important;
  align-items: center !important;
  gap: 12px !important;
  color: #ffffff !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  letter-spacing: -0.03em !important;
  white-space: nowrap !important;
  flex: 0 0 auto !important;
  text-decoration: none !important;
}
#header .brand .brand-logo-svg {
  height: 44px !important;
  width: auto !important;
  display: block !important;
  object-fit: contain !important;
}
#header.scrolled .brand .brand-logo-svg {
  height: 42px !important;
}
#header .navlinks {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px !important;
  flex: 0 1 auto !important;
  margin: 0 auto !important;
}
#header .nav-actions {
  display: inline-flex !important;
  align-items: center !important;
  gap: 12px !important;
  flex: 0 0 auto !important;
}
#header .nav-cta {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  height: 40px !important;
  padding: 0 18px !important;
  border-radius: 999px !important;
  background: #315dff !important;
  color: #ffffff !important;
  font-size: 12.5px !important;
  font-weight: 700 !important;
  white-space: nowrap !important;
  flex-shrink: 0 !important;
  text-decoration: none !important;
  box-shadow: 0 8px 20px rgba(49, 93, 255, 0.32) !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  transition: background 0.2s ease, transform 0.2s ease !important;
}
#header .nav-cta:hover {
  background: #254edb !important;
  transform: translateY(-1px) !important;
}
#header .hamburger {
  display: none !important;
  align-items: center !important;
  justify-content: center !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  background: rgba(255, 255, 255, 0.08) !important;
  color: #ffffff !important;
  font-size: 18px !important;
  flex-shrink: 0 !important;
  cursor: pointer !important;
}
#header .menu-mobile {
  display: none;
}
#header .dd {
  position: relative;
}
#header .dd.dd-wide {
  position: static;
}
#header .dd-btn,
#header .nav-dd .dd-link {
  display: inline-flex !important;
  align-items: center;
  gap: 6px;
  padding: 11px 14px !important;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #e2e8f0 !important;
  font-family: 'Manrope', sans-serif;
  font-size: 15.5px !important;
  font-weight: 600 !important;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none !important;
  text-shadow: 0 1px 3px rgba(2, 8, 23, 0.45);
  transition: color 0.2s ease, background 0.2s ease;
}
#header .dd-btn:hover,
#header .nav-dd .dd-link:hover,
#header .dd.open .dd-btn {
  color: #9fb4ff !important;
  background: rgba(255, 255, 255, 0.06);
}
#header .dd-chev {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.25s ease;
}
#header .dd.open .dd-chev {
  transform: rotate(180deg);
}
#header .dd-panel {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  z-index: 200;
  background: rgba(9, 20, 40, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 30px 70px -20px rgba(2, 8, 23, 0.6);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, 8px);
  transition: opacity 0.2s ease, transform 0.25s ease, visibility 0s linear 0.25s;
  text-align: left;
}
#header .dd-panel::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -16px;
  height: 16px;
}
#header .dd.open .dd-panel {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
  transition: opacity 0.2s ease, transform 0.25s ease, visibility 0s;
}
#header .dd-h {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px !important;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #93a4c3;
  margin-bottom: 12px !important;
}
#header .dd-h::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background: #315dff;
}
#header .dd-panel a {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 14px !important;
  border-radius: 10px;
  color: #e2e8f0 !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  text-shadow: none !important;
  text-decoration: none !important;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease;
}
#header .dd-panel a:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff !important;
}
#header .dd-mega {
  left: 50% !important;
  right: auto !important;
  width: min(1120px, calc(100vw - 48px)) !important;
  transform: translate(-50%, 8px) !important;
  padding: 36px 40px 30px !important;
}
#header .dd.open .dd-mega {
  transform: translate(-50%, 0) !important;
}
#header .dd-cols {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px 36px !important;
}
#header .dd-col {
  display: grid;
  align-content: start;
  gap: 2px;
  min-width: 0;
}
#header .dd-col a {
  margin-left: -14px !important;
  white-space: normal !important;
  line-height: 1.35;
}
#header .dd-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 28px !important;
  padding: 22px 28px !important;
  border-radius: 16px;
  background: linear-gradient(110deg, #1b2f6b, #315dff);
  color: #ffffff;
}
#header .dd-banner b {
  display: block;
  font-size: 19px !important;
}
#header .dd-banner span {
  display: block;
  font-size: 15px !important;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2px;
}
#header .dd-panel a.dd-banner-btn {
  flex: none;
  background: #ffffff;
  color: #13223a !important;
  border-radius: 999px;
  padding: 10px 18px !important;
  font-weight: 800 !important;
}
#header .dd-panel a.dd-banner-btn:hover {
  background: #e8eeff;
  color: #13223a !important;
}
#header .dd-split {
  display: grid;
  grid-template-columns: 300px 400px !important;
  gap: 0;
  padding: 0;
  overflow: hidden;
}
#header .dd-list {
  display: grid;
  align-content: start;
  gap: 4px !important;
  padding: 26px 18px 26px 22px !important;
}
#header .dd-list .dd-h {
  margin-left: 2px;
}
#header .dd-list a {
  position: relative;
  padding-left: 18px !important;
}
#header .dd-list a i {
  font-style: normal;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: #9fb4ff;
}
#header .dd-list a.on {
  background: rgba(49, 93, 255, 0.16);
  color: #ffffff !important;
}
#header .dd-list a.on::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: 3px;
  background: #315dff;
}
#header .dd-list a.on i {
  opacity: 1;
  transform: none;
}
#header .dd-preview {
  position: relative;
  min-height: 300px !important;
  background: #0f1b30;
}
#header .dd-preview figure {
  position: absolute;
  inset: 0;
  margin: 0;
  opacity: 0;
  transition: opacity 0.35s ease;
}
#header .dd-preview figure.on {
  opacity: 1;
}
#header .dd-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
#header .dd-preview figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 48px 20px 18px !important;
  font-size: 14.5px !important;
  line-height: 1.45;
  color: #ffffff;
  background: linear-gradient(0deg, rgba(9, 20, 40, 0.92), transparent);
}
#header .dd-small {
  min-width: 320px !important;
  padding: 0;
}
@media (max-width: 980px) {
  #header {
    padding: 8px 14px 0 !important;
  }
  #header.scrolled {
    padding: 8px 14px 0 !important;
  }
  #header .nav.container,
  #header.scrolled .nav.container {
    height: 60px !important;
    padding: 0 18px !important;
    gap: 14px !important;
    max-width: 100% !important;
  }
  #header .navlinks,
  #header .nav-cta {
    display: none !important;
  }
  #header .hamburger {
    display: inline-flex !important;
  }
  #header .brand .brand-logo-svg,
  #header.scrolled .brand .brand-logo-svg {
    height: 36px !important;
  }
  #header .menu-mobile.open {
    display: grid !important;
    position: fixed !important;
    top: 74px !important;
    left: 14px !important;
    right: 14px !important;
    background: rgba(7, 16, 34, 0.96) !important;
    backdrop-filter: blur(24px) !important;
    -webkit-backdrop-filter: blur(24px) !important;
    border: 1px solid rgba(255, 255, 255, 0.16) !important;
    border-radius: 22px !important;
    padding: 20px 24px !important;
    gap: 12px !important;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55) !important;
    z-index: 160 !important;
    max-height: calc(100svh - 90px) !important;
    overflow-y: auto !important;
  }
  #header .menu-mobile .mm-h {
    display: block;
    margin-top: 14px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #93a4c3;
  }
  #header .menu-mobile .mm-h:first-child {
    margin-top: 0;
  }
  #header .menu-mobile a {
    color: #f1f5ff !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    padding: 8px 4px !important;
    text-decoration: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important;
  }
  #header .menu-mobile a:last-child {
    border-bottom: 0 !important;
    color: #60a5fa !important;
  }
}
`;

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const isCuratedRoute = CURATED_SINGLE_ROUTES.has(pathname);

  useEffect(() => {
    if (isCuratedRoute) return;
    const root = headerRef.current;
    if (!root) return;

    const $ = <T extends Element = HTMLElement>(s: string, p: ParentNode = root): T | null =>
      p.querySelector<T>(s);
    const $$ = <T extends Element = HTMLElement>(s: string, p: ParentNode = root): T[] =>
      Array.from(p.querySelectorAll<T>(s));

    const menu = $<HTMLElement>("#mobileNav");
    const hamb = $<HTMLElement>("#hamburger");
    const onHambClick = () => {
      if (!menu || !hamb) return;
      const is = menu.classList.toggle("open");
      hamb.setAttribute("aria-expanded", String(is));
      hamb.textContent = is ? "×" : "☰";
    };
    hamb?.addEventListener("click", onHambClick);
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
      root.classList.toggle("scrolled", sy > 30);
    };
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
    onHeaderScroll();

    return () => {
      hamb?.removeEventListener("click", onHambClick);
      if (ddCloseTimer) clearTimeout(ddCloseTimer);
      document.removeEventListener("click", onDdDocClick);
      document.removeEventListener("keydown", onDdKey);
      window.removeEventListener("scroll", onHeaderScroll);
    };
  }, [isCuratedRoute, pathname]);

  if (isCuratedRoute) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HOMEPAGE_NAVBAR_CSS }} />
      <header id="header" ref={headerRef}>
        <div className="nav container">
          <Link className="brand" href="/" aria-label="Sparsh IT Home">
            <img
              src="/sparshlogo_nav.svg"
              alt="Sparsh IT"
              className="brand-logo-svg"
              width="132"
              height="44"
            />
          </Link>
          <nav aria-label="Primary" className="navlinks nav-dd">
            <div className="dd dd-wide">
              <button
                className="dd-btn"
                type="button"
                aria-expanded="false"
                aria-controls="ddWhat"
              >
                What We Do
                <svg className="dd-chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3"></path>
                </svg>
              </button>
              <div className="dd-panel dd-mega" id="ddWhat">
                <div className="dd-cols">
                  <div className="dd-col">
                    <span className="dd-h">Engineering</span>
                    <a href="/services/artificial-intelligence">AI &amp; Intelligent Engineering</a>
                    <a href="/services/application-development">Application Development</a>
                    <a href="/services/mobile-application-development">Mobile App Development</a>
                    <a href="/services/ui-ux-design-and-digital-experience">UI/UX &amp; Digital Experience</a>
                  </div>
                  <div className="dd-col">
                    <span className="dd-h">Platform &amp; Data</span>
                    <a href="/services/data-engineering-analytics">Data Engineering &amp; Analytics</a>
                    <a href="/services/devsecops">DevSecOps &amp; Platform</a>
                    <a href="/services/quality-engineering-and-software-testing">Quality Engineering &amp; QA</a>
                    <a href="/services/global-capability-centers">Global Capability Centers</a>
                  </div>
                  <div className="dd-col">
                    <span className="dd-h">Packages</span>
                    <a href="/solutions/silver">Silver · Get Online</a>
                    <a href="/solutions/gold">Gold · Manage Online</a>
                    <a href="/solutions/premium">Premium · Sell &amp; Scale</a>
                  </div>
                  <div className="dd-col">
                    <span className="dd-h">Industries</span>
                    <a href="/industries/manufacturers-wholesale">Manufacturers &amp; Wholesale</a>
                    <a href="/industries/ecommerce">Retail &amp; E-Commerce</a>
                    <a href="/industries/service-businesses">Service Businesses</a>
                    <a href="/industries/startups-founders">Startups &amp; Founders</a>
                  </div>
                </div>
                <div className="dd-banner">
                  <div>
                    <b>Not sure where to start?</b>
                    <span>Tell us what you&apos;re building and we&apos;ll recommend the right package.</span>
                  </div>
                  <a className="dd-banner-btn" href="/contact-us">
                    Start a project
                  </a>
                </div>
              </div>
            </div>

            <div className="dd">
              <button
                className="dd-btn"
                type="button"
                aria-expanded="false"
                aria-controls="ddWork"
              >
                Our Work
                <svg className="dd-chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3"></path>
                </svg>
              </button>
              <div className="dd-panel dd-split" id="ddWork">
                <div className="dd-list">
                  <span className="dd-h">Explore our work</span>
                  <a href="/showcase" data-i="0" className="on">
                    <span>Showcase</span>
                    <i aria-hidden="true">→</i>
                  </a>
                  <a href="/transformation" data-i="1">
                    <span>Transformation</span>
                    <i aria-hidden="true">→</i>
                  </a>
                  <a href="/selected-work" data-i="2">
                    <span>Selected Work</span>
                    <i aria-hidden="true">→</i>
                  </a>
                  <a href="/how-we-work" data-i="3">
                    <span>How We Work</span>
                    <i aria-hidden="true">→</i>
                  </a>
                </div>
                <div className="dd-preview" aria-hidden="true">
                  <figure className="on">
                    <img src="/assets/images/home/Engineering%20Possibilities.webp" alt="" loading="lazy" />
                    <figcaption>Four product concepts built for real businesses.</figcaption>
                  </figure>
                  <figure>
                    <img src="/assets/images/home/retail-bags.jpg" alt="" loading="lazy" />
                    <figcaption>How an offline business becomes a digital one.</figcaption>
                  </figure>
                  <figure>
                    <img src="/assets/images/home/work-hospitality.jpg" alt="" loading="lazy" />
                    <figcaption>Concept work made to be used and to stand out.</figcaption>
                  </figure>
                  <figure>
                    <img src="/assets/images/home/Right-technology.webp" alt="" loading="lazy" />
                    <figcaption>Four clear stages from first call to launch.</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className="dd">
              <button
                className="dd-btn"
                type="button"
                aria-expanded="false"
                aria-controls="ddCompany"
              >
                Company
                <svg className="dd-chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3"></path>
                </svg>
              </button>
              <div className="dd-panel dd-split" id="ddCompany">
                <div className="dd-list">
                  <span className="dd-h">Who we are</span>
                  <a href="/about" data-i="0" className="on">
                    <span>About Us</span>
                    <i aria-hidden="true">→</i>
                  </a>
                  <a href="/our-philosophy" data-i="1">
                    <span>Our Philosophy</span>
                    <i aria-hidden="true">→</i>
                  </a>
                  <a href="/faqs" data-i="2">
                    <span>FAQs</span>
                    <i aria-hidden="true">→</i>
                  </a>
                </div>
                <div className="dd-preview" aria-hidden="true">
                  <figure className="on">
                    <img src="/assets/images/about/Banner.webp" alt="" loading="lazy" />
                    <figcaption>The team and story behind Sparsh IT.</figcaption>
                  </figure>
                  <figure>
                    <img src="/assets/images/about/about-vision-future.jpg" alt="" loading="lazy" />
                    <figcaption>Technology that feels like progress.</figcaption>
                  </figure>
                  <figure>
                    <img src="/assets/images/about/about-mission-tablet.jpg" alt="" loading="lazy" />
                    <figcaption>Packages, pricing, content and support.</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className="dd">
              <button
                className="dd-btn"
                type="button"
                aria-expanded="false"
                aria-controls="ddJoin"
              >
                Join Us
                <svg className="dd-chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5l3 3 3-3"></path>
                </svg>
              </button>
              <div className="dd-panel dd-small" id="ddJoin">
                <div className="dd-list">
                  <span className="dd-h">Join our team</span>
                  <a href="/join-us" className="on">
                    <span>Careers at Sparsh IT</span>
                    <i aria-hidden="true">→</i>
                  </a>
                  <a href="mailto:careers@sparshit.com">
                    <span>careers@sparshit.com</span>
                    <i aria-hidden="true">→</i>
                  </a>
                </div>
              </div>
            </div>

            <a className="dd-link" href="/contact-us">
              Contact Us
            </a>
          </nav>

          <div className="nav-actions">
            <a className="btn primary nav-cta" href="/contact-us">
              Start a Project
            </a>
            <button
              aria-expanded="false"
              aria-label="Open menu"
              className="hamburger"
              id="hamburger"
              type="button"
            >
              ☰
            </button>
          </div>
        </div>

        <nav className="menu-mobile" id="mobileNav" data-lenis-prevent="">
          <span className="mm-h">What we do</span>
          <a href="/services/artificial-intelligence">AI &amp; Intelligent Engineering</a>
          <a href="/services/application-development">Application Development</a>
          <a href="/services/mobile-application-development">Mobile App Development</a>
          <a href="/services/ui-ux-design-and-digital-experience">UI/UX &amp; Digital Experience</a>
          <a href="/services/data-engineering-analytics">Data Engineering &amp; Analytics</a>
          <a href="/services/devsecops">DevSecOps &amp; Platform</a>
          <a href="/services/quality-engineering-and-software-testing">Quality Engineering &amp; QA</a>
          <a href="/services/global-capability-centers">Global Capability Centers</a>
          <a href="/packages">Packages</a>
          <a href="/industries/manufacturers-wholesale">Industries</a>
          <span className="mm-h">Our work</span>
          <a href="/showcase">Showcase</a>
          <a href="/transformation">Transformation</a>
          <a href="/selected-work">Selected Work</a>
          <a href="/how-we-work">How We Work</a>
          <span className="mm-h">Company</span>
          <a href="/about">About Us</a>
          <a href="/our-philosophy">Our Philosophy</a>
          <a href="/faqs">FAQs</a>
          <a href="/join-us">Careers</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
      </header>
    </>
  );
}
