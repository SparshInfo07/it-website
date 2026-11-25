"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Server render has no layout phase; fall back to useEffect there.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Opens every newly visited page at the top.
 *
 * Next.js normally does this itself, but the pages built from injected markup
 * (homepage, services, about, FAQs) kept the old scroll position, so a click in
 * the footer landed at the bottom of the next page. Back/forward navigation and
 * links to a #section are left alone so the browser can restore or jump as usual.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const isHistoryNav = useRef(false);
  const firstRender = useRef(true);

  useEffect(() => {
    const onPop = () => {
      isHistoryNav.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useIsoLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (isHistoryNav.current) {
      isHistoryNav.current = false;
      return;
    }
    if (window.location.hash) return;

    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    toTop();
    // The injected pages build their layout (and GSAP pins) a frame later; hold the top through that.
    const raf = requestAnimationFrame(() => requestAnimationFrame(toTop));
    const late = window.setTimeout(toTop, 120);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(late);
    };
  }, [pathname]);

  return null;
}
