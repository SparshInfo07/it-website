import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import EnterpriseAISolutions from "@/components/Organisms/services/EnterpriseAISolutions/EnterpriseAISolutions";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA,
  QUALITY_ENGINEERING_SOLUTIONS_DATA,
  QUALITY_ENGINEERING_CLEAR_APPROACH_DATA,
  QUALITY_ENGINEERING_WHY_CHOOSE_DATA,
  QUALITY_ENGINEERING_DIFFERENT_INDUSTRIES_DATA,
  QUALITY_ENGINEERING_FOOTER_DATA,
} from "@/data/quality-engineering-and-software-testing";

const QualityEngineeringAndSoftwareTesting = () => {
  return (
    <>
      <PageBreadcrumb
        title={QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA.title}
        subtitle={QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA.subtitle}
        backgroundImage={QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA.backgroundImage}
        ctaText={QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA.ctaText}
        ctaHref={QUALITY_ENGINEERING_PAGE_BREADCRUMB_DATA.ctaHref}
        subtitleClassName="whitespace-pre-line"
      />

      <EnterpriseAISolutions data={QUALITY_ENGINEERING_SOLUTIONS_DATA} />

      <ClearApproach
        id="quality-engineering-approach"
        data={QUALITY_ENGINEERING_CLEAR_APPROACH_DATA}
      />

      <WhyBusinessesChoose data={QUALITY_ENGINEERING_WHY_CHOOSE_DATA} />

      <DifferentIndustries data={QUALITY_ENGINEERING_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={QUALITY_ENGINEERING_FOOTER_DATA} />
    </>
  );
};

export default QualityEngineeringAndSoftwareTesting;
