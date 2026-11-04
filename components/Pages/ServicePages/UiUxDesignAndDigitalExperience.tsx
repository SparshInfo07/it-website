import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import EnterpriseAISolutions from "@/components/Organisms/services/EnterpriseAISolutions";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  UI_UX_PAGE_BREADCRUMB_DATA,
  UI_UX_ENTERPRISE_SOLUTIONS_DATA,
  UI_UX_CLEAR_APPROACH_DATA,
  UI_UX_WHY_CHOOSE_DATA,
  UI_UX_DIFFERENT_INDUSTRIES_DATA,
  UI_UX_FOOTER_DATA,
} from "@/data/ui-ux-design-and-digital-experience";

const UiUxDesignAndDigitalExperience = () => {
  return (
    <>
      <PageBreadcrumb
        title={UI_UX_PAGE_BREADCRUMB_DATA.title}
        subtitle={UI_UX_PAGE_BREADCRUMB_DATA.subtitle}
        backgroundImage={UI_UX_PAGE_BREADCRUMB_DATA.backgroundImage}
        ctaText={UI_UX_PAGE_BREADCRUMB_DATA.ctaText}
        ctaHref={UI_UX_PAGE_BREADCRUMB_DATA.ctaHref}
      />
      <EnterpriseAISolutions data={UI_UX_ENTERPRISE_SOLUTIONS_DATA} />
      <ClearApproach id="ui-ux-approach" data={UI_UX_CLEAR_APPROACH_DATA} />
      <WhyBusinessesChoose data={UI_UX_WHY_CHOOSE_DATA} />
      <DifferentIndustries data={UI_UX_DIFFERENT_INDUSTRIES_DATA} />
      <Footer data={UI_UX_FOOTER_DATA} />
    </>
  );
};

export default UiUxDesignAndDigitalExperience;

