import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import EnterpriseAISolutions from "@/components/Organisms/services/EnterpriseAISolutions";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  GCC_PAGE_BREADCRUMB_DATA,
  GCC_SOLUTIONS_DATA,
  GCC_OUTCOMES_DATA,
  GCC_FRAMEWORK_DATA,
  GCC_DIFFERENT_INDUSTRIES_DATA,
  GCC_FOOTER_DATA,
} from "@/data/GlobalCapabilityCenters";

const GlobalCapabilityCenters = () => {
  return (
    <>
      <PageBreadcrumb
        eyebrow={GCC_PAGE_BREADCRUMB_DATA.eyebrow}
        title={GCC_PAGE_BREADCRUMB_DATA.title}
        subtitle={GCC_PAGE_BREADCRUMB_DATA.subtitle}
        backgroundImage={GCC_PAGE_BREADCRUMB_DATA.backgroundImage}
        ctaText={GCC_PAGE_BREADCRUMB_DATA.ctaText}
        ctaHref={GCC_PAGE_BREADCRUMB_DATA.ctaHref}
        fullHeight={GCC_PAGE_BREADCRUMB_DATA.fullHeight}
      />

      <EnterpriseAISolutions id="gcc-solutions" data={GCC_SOLUTIONS_DATA} />
      <WhyBusinessesChoose id="gcc-outcomes" data={GCC_OUTCOMES_DATA} />
      <ClearApproach id="gcc-framework" data={GCC_FRAMEWORK_DATA} />
      <DifferentIndustries data={GCC_DIFFERENT_INDUSTRIES_DATA} />
      <Footer data={GCC_FOOTER_DATA} />
    </>
  );
};

export default GlobalCapabilityCenters;

