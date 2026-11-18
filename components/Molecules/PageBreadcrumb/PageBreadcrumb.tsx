import React from "react";
import { ChevronRight } from "lucide-react";
import Button from "@/components/Atoms/Button";
import { ASSETS } from "@/constants/images.constants";

export interface PageBreadcrumbProps {
  title: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;
  backgroundImage?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  fullHeight?: boolean;
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  cta?: { label: string; href: string; onClick?: () => void };
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryCtaOnClick?: () => void;
  secondaryCta?: { label: string; href: string; onClick?: () => void };
  children?: React.ReactNode;
}

const PageBreadcrumb = ({
  title,
  subtitle,
  description,
  eyebrow,
  backgroundImage = ASSETS.CONTACT_BANNER,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  ctaText,
  ctaHref,
  ctaOnClick,
  cta,
  secondaryCtaText,
  secondaryCtaHref,
  secondaryCtaOnClick,
  secondaryCta,
  children,
}: PageBreadcrumbProps) => {
  const resolvedSubtitle = subtitle || description;
  const resolvedPrimaryText = ctaText || cta?.label;
  const resolvedPrimaryHref = ctaHref || cta?.href || "/contact-us";
  const resolvedPrimaryOnClick = ctaOnClick || cta?.onClick;

  const resolvedSecondaryText = secondaryCtaText || secondaryCta?.label;
  const resolvedSecondaryHref = secondaryCtaHref || secondaryCta?.href;
  const resolvedSecondaryOnClick = secondaryCtaOnClick || secondaryCta?.onClick;

  return (
    <section
      className={`relative w-full min-h-auto sm:min-h-[580px] lg:h-155 flex flex-col justify-center pt-16 pb-12 sm:pt-32 sm:pb-16 lg:py-0 overflow-hidden bg-cover bg-left! md:bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}>

      {/* Readability: darken the text side of the photo and the band behind the navbar. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,12,28,0.86)_0%,rgba(7,12,28,0.62)_42%,rgba(7,12,28,0.12)_78%,rgba(7,12,28,0)_100%)] max-md:bg-[linear-gradient(180deg,rgba(7,12,28,0.55)_0%,rgba(7,12,28,0.78)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-[rgba(7,12,28,0.55)] to-transparent"
      />

      <div className="relative z-10 mt-10! container">

        <div className="page-hero-in max-w-[800px] flex flex-col items-start justify-center text-left">
          {eyebrow && (
            <p className="tag text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/80 uppercase mb-3 sm:mb-4 text-left">
              {eyebrow}
            </p>
          )}

          <h1
            className={`pageBanner-h1 text-white text-left ${titleClassName}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {resolvedSubtitle && (
            <p
              className={`section-p max-w-[620px] text-sm sm:text-base md:text-[17px] text-white/90 leading-[1.65] font-normal text-left mt-4 sm:mt-5 ${subtitleClassName}`}
            >
              {resolvedSubtitle}
            </p>
          )}

          {/* Optional Explore / CTA Buttons */}
          {(resolvedPrimaryText || resolvedSecondaryText) && (
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-start gap-3.5 sm:gap-4">
              {resolvedPrimaryText && (
                <Button
                  variant="primary"
                  href={resolvedPrimaryHref || "#"}
                  onClick={resolvedPrimaryOnClick}
                  className="px-6 py-3.5 text-sm sm:text-[15px] font-medium shadow-lg shadow-black/20"
                  icon={
                    <ChevronRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                  }
                >
                  {resolvedPrimaryText}
                </Button>
              )}

              {resolvedSecondaryText && (
                <Button
                  variant="secondary"
                  href={resolvedSecondaryHref || "#"}
                  onClick={resolvedSecondaryOnClick}
                  className="px-6 py-3.5 text-sm sm:text-[15px] font-medium shadow-lg shadow-black/20 border border-white/80 text-white hover:bg-white hover:text-black"
                >
                  {resolvedSecondaryText}
                </Button>
              )}
            </div>
          )}

          {children && <div className="mt-6 sm:mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumb;
