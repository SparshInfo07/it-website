"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  BrainCircuit,
  ShieldCheck,
  Code2,
  Database,
  Smartphone,
  Palette,
  CheckCircle2,
  Globe,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Truck,
  Hotel,
  GraduationCap,
} from "lucide-react";
import { NAVIGATION_DATA } from "@/data/navigation";
import { ASSETS } from "@/constants/images.constants";
import Button from "@/components/Atoms/Button";

// Icon dictionary mapped to iconName strings from NAVIGATION_DATA
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  ShieldCheck,
  Code2,
  Database,
  Smartphone,
  Palette,
  CheckCircle2,
  Globe,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Truck,
  Hotel,
  GraduationCap,
};

const emptySubscribe = () => () => { };

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const mounted = useIsMounted();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [desktopOpenDropdown, setDesktopOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.dataset.scrollLocked = "1";
      document.body.style.overflow = "hidden";
    } else {
      delete document.body.dataset.scrollLocked;
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      delete document.body.dataset.scrollLocked;
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers for smooth desktop dropdown with hover delay buffer
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopOpenDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#04121d]/85 backdrop-blur-xl py-3 shadow-xl border-b border-teal-500/15"
          : "bg-transparent py-5 sm:py-6"
          }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            {NAVIGATION_DATA?.brand?.href && (
              <Link
                href={NAVIGATION_DATA.brand.href}
                className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg py-1"
                aria-label={NAVIGATION_DATA?.brand?.name ? `${NAVIGATION_DATA.brand.name} Home` : undefined}
              >
                {ASSETS?.BRAND_LOGO && (
                  <Image
                    src={ASSETS.BRAND_LOGO}
                    alt={NAVIGATION_DATA?.brand?.name || ""}
                    width={280}
                    height={99}
                    priority
                    className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </Link>
            )}

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-4">
              {NAVIGATION_DATA.links.map((item) => {
                const hasDropdown = Boolean(item.children?.length);

                if (hasDropdown) {
                  const isOpen = desktopOpenDropdown === item.label;

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setDesktopOpenDropdown(null)}
                        className={`inline-flex items-center gap-1.5 text-sm lg:text-[18px] font-normal rounded-lg px-3 py-1.5 transition-colors cursor-pointer ${isOpen
                          ? "text-white bg-white/10"
                          : "text-slate-200 hover:text-white hover:bg-white/10"
                          }`}
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : ""
                            }`}
                        />
                      </Link>

                      {/* Mega Menu Dropdown Panel (White Reference Style) */}
                      {isOpen && item.isMegaMenu && (
                        <div
                          className={`absolute top-full left-0 pt-2.5 z-50 ${item.children && item.children.length <= 6 ? "w-[660px] lg:w-[720px]" : "w-[760px] lg:w-[820px]"} max-w-[calc(100vw-2rem)] animate-in fade-in-0 zoom-in-95 duration-150 origin-top-left`}
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]">
                            {/* Top Header */}
                            <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 px-1">
                              <span className="text-sm font-semibold uppercase tracking-wider text-black">
                                {item.label === "Services" ? "Services & Capabilities" : "Industries We Serve"}
                              </span>
                              <Link
                                href={item.href}
                                onClick={() => setDesktopOpenDropdown(null)}
                                className="group/all inline-flex items-center gap-1 text-[12px] font-medium text-[#0D9488] hover:text-[#0f766e] transition-colors"
                              >
                                <span>View All {item.label}</span>
                                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/all:translate-x-0.5" />
                              </Link>
                            </div>

                            {/* 4-Column Grid of Service Cards */}
                            <div className={`grid ${item.children && item.children.length <= 6 ? "grid-cols-3" : "grid-cols-4"} gap-2`}>
                              {item.children?.map((child) => {
                                const isCreated = child.href !== "#";
                                const IconComponent =
                                  (child.iconName && ICON_MAP[child.iconName]) || Sparkles;

                                return (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={(e) => {
                                      if (!isCreated) {
                                        e.preventDefault();
                                      } else {
                                        setDesktopOpenDropdown(null);
                                      }
                                    }}
                                    className={`group/item relative flex flex-col p-3 rounded-xl transition-all duration-150 ${isCreated
                                      ? "bg-transparent hover:bg-teal-50/70 cursor-pointer"
                                      : "opacity-50 cursor-default"
                                      }`}
                                  >

                                    <div className="flex items-center justify-between mb-2.5">
                                      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 transition-all duration-200 group-hover/item:bg-[#0D9488] group-hover/item:text-white group-hover/item:shadow-sm">
                                        <IconComponent className="w-4 h-4 transition-transform duration-200 group-hover/item:scale-105" />
                                      </div>
                                      {isCreated && (
                                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0D9488] opacity-0 -translate-x-0.5 translate-y-0.5 transition-all duration-150 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 shrink-0" />
                                      )}
                                    </div>

                                    {/* Title */}
                                    <p className="text-sm text-[#061826] font-medium group-hover/item:text-[#0D9488] transition-colors min-h-[34px] flex items-start">
                                      {child.label || ""}
                                    </p>

                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Standard Dropdown Panel (Industries) */}
                      {isOpen && !item.isMegaMenu && (
                        <div
                          className="absolute top-full left-0 pt-3 z-50 w-80 sm:w-96 animate-in fade-in-0 zoom-in-95 duration-150 origin-top-left"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="rounded-2xl bg-white border border-slate-100 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)]">
                            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-slate-100 px-2 pt-1">
                              <span className="text-xs font-semibold uppercase tracking-wider text-black">
                                {item.label}
                              </span>
                              <Link
                                href={item.href}
                                onClick={() => setDesktopOpenDropdown(null)}
                                className="group/all inline-flex items-center gap-1 text-[12px] font-medium text-[#0D9488] hover:text-[#0f766e] transition-colors"
                              >
                                <span>View All</span>
                                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/all:translate-x-0.5" />
                              </Link>
                            </div>
                            <div className="flex flex-col gap-1">
                              {item.children?.map((child) => {
                                const isCreated = child.href !== "#";
                                const IconComponent =
                                  (child.iconName && ICON_MAP[child.iconName]) || Sparkles;

                                return (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={(e) => {
                                      if (!isCreated) {
                                        e.preventDefault();
                                      } else {
                                        setDesktopOpenDropdown(null);
                                      }
                                    }}
                                    className={`group/item flex items-center justify-between rounded-xl p-2.5 transition-all duration-150 ${isCreated
                                      ? "hover:bg-teal-50/70 cursor-pointer"
                                      : "opacity-60 cursor-default hover:bg-slate-50"
                                      }`}
                                  >
                                    <div className="flex items-center gap-3 min-w-0 pr-2">
                                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 group-hover/item:bg-[#0D9488] group-hover/item:text-white transition-all duration-200 shrink-0">
                                        <IconComponent className="w-4 h-4" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="text-[13.5px] font-semibold text-slate-900 group-hover/item:text-[#0D9488] transition-colors leading-snug truncate">
                                            {child.label}
                                          </span>
                                          {!isCreated && (
                                            <span className="text-[10px] font-medium bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                                              Soon
                                            </span>
                                          )}
                                        </div>
                                        {child.desc && (
                                          <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">
                                            {child.desc}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                    {isCreated && (
                                      <ArrowUpRight className="w-4 h-4 text-[#0D9488] opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 shrink-0" />
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center text-[15px] lg:text-[18px] font-normal text-slate-200 hover:text-white hover:bg-white/10 rounded-lg px-3 py-1.5 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden xl:flex items-center">
              <Button
                variant="primary"
                href={NAVIGATION_DATA.cta.href}
                className="border-0 shadow-none"
                icon={
                  <ChevronRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                }
              >
                {NAVIGATION_DATA.cta.label}
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              className="xl:hidden inline-flex items-center justify-center p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Rendered via React Portal (White Theme) */}
      {mounted &&
        createPortal(
          <div
            className={`xl:hidden fixed inset-0 z-[9999] transition-opacity duration-500 ease-in-out ${
              mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            {/* Backdrop Overlay with Smooth Blur */}
            <div
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Full-Screen Slider Panel (White Theme) */}
            <div
              data-lenis-prevent
              className={`relative z-10 h-full w-full max-w-sm sm:max-w-md bg-white text-slate-900 flex flex-col shadow-2xl border-r border-slate-100 transition-transform duration-500 ease-in-out ${
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Header inside Mobile Slider */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0 bg-white">
                {NAVIGATION_DATA?.brand?.href && (
                  <Link
                    href={NAVIGATION_DATA.brand.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center focus:outline-none"
                    aria-label={`${NAVIGATION_DATA?.brand?.name || "Sparsh IT"} Home`}
                  >
                    {ASSETS?.FOOTER_BRAND_LOGO && (
                      <Image
                        src={ASSETS.FOOTER_BRAND_LOGO}
                        alt={NAVIGATION_DATA?.brand?.name || "Sparsh IT"}
                        width={220}
                        height={78}
                        priority
                        className="h-8 sm:h-9 w-auto object-contain"
                      />
                    )}
                  </Link>
                )}

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links inside Mobile Drawer */}
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-auto px-5 py-4 space-y-1 [scrollbar-width:thin] [scrollbar-color:#0D9488_transparent]"
              >
                <nav className="flex flex-col">
                  {NAVIGATION_DATA.links.map((item) => {
                    const hasChildren = Boolean(item.children?.length);
                    const isOpen = activeDropdown === item.label;

                    if (!hasChildren) {
                      return (
                        <div
                          key={item.label}
                          className="border-b border-slate-100 py-1.5 last:border-b-0"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-[#0D9488] transition-colors"
                          >
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              {item.label}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D9488] group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={item.label}
                        className="border-b border-slate-100 py-1.5 last:border-b-0"
                      >
                        <div className="flex items-center justify-between py-2">
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex-1 text-base font-semibold text-slate-800 hover:text-[#0D9488] transition-colors"
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer"
                            aria-label={`Toggle ${item.label} sub-navigation`}
                            aria-expanded={isOpen}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-[#0D9488]" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {isOpen && (
                          <div className="mt-1 mb-2 space-y-1 pl-2 border-l-2 border-teal-500/30 animate-in fade-in slide-in-from-top-1 duration-200">
                            {item.href && (
                              <Link
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-teal-50/70 text-[11px] font-semibold uppercase tracking-wider text-[#0D9488] hover:bg-teal-100/70 transition-colors mb-1.5"
                              >
                                <span>View All {item.label}</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </Link>
                            )}

                            {item.children?.map((child) => {
                              const isCreated = child.href !== "#";
                              const IconComponent =
                                (child.iconName && ICON_MAP[child.iconName]) || Sparkles;

                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={(e) => {
                                    if (!isCreated) {
                                      e.preventDefault();
                                    } else {
                                      setMobileMenuOpen(false);
                                    }
                                  }}
                                  className={`group/child flex items-center justify-between py-2 px-2.5 rounded-xl text-sm transition-all duration-150 ${
                                    isCreated
                                      ? "text-slate-700 hover:text-[#0D9488] hover:bg-slate-50 cursor-pointer"
                                      : "text-slate-400 opacity-60 cursor-not-allowed"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover/child:bg-[#0D9488] group-hover/child:text-white transition-all shrink-0">
                                      <IconComponent className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <span className="leading-snug truncate font-medium block">
                                        {child.label}
                                      </span>
                                      {child.desc && (
                                        <span className="text-[11px] text-slate-400 truncate block">
                                          {child.desc}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  {isCreated ? (
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/child:text-[#0D9488] group-hover/child:translate-x-0.5 transition-all shrink-0" />
                                  ) : (
                                    <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                                      Soon
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Action Area inside Mobile Drawer */}
              <div className="border-t border-slate-100 p-5 shrink-0 bg-slate-50/80 space-y-3">
                <Button
                  variant="primary"
                  href={NAVIGATION_DATA.cta.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center py-3 text-sm sm:text-base font-semibold bg-[#061826] text-white hover:bg-[#0D9488] shadow-md transition-colors"
                  icon={<ChevronRight className="w-4 h-4 stroke-[2.5]" />}
                >
                  {NAVIGATION_DATA.cta.label}
                </Button>

                <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-500 pt-0.5">
                  <a
                    href="mailto:info@sparshit.com"
                    className="hover:text-[#0D9488] transition-colors"
                  >
                    info@sparshit.com
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
