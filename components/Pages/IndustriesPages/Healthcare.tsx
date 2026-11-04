import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomAppServices from "@/components/Organisms/service_application/CustomAppServices";
import BetterDecisions from "@/components/Organisms/service_application/BetterDecisions";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import SolutionsAccordion from "@/components/Organisms/service_application/SolutionsAccordion";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  HEALTHCARE_HERO_DATA,
  HEALTHCARE_SERVICES_DATA,
  HEALTHCARE_DECISIONS_DATA,
  HEALTHCARE_WHY_CHOOSE_DATA,
  HEALTHCARE_ACCORDION_DATA,
  HEALTHCARE_DIFFERENT_INDUSTRIES_DATA,
  HEALTHCARE_FOOTER_DATA,
} from "@/data/Industries_Healthcare";

export default function Healthcare() {
  return (
    <>
      <PageBreadcrumb
        title={HEALTHCARE_HERO_DATA.title}
        description={HEALTHCARE_HERO_DATA.subtitle}
        backgroundImage={HEALTHCARE_HERO_DATA.backgroundImage}
        ctaText={HEALTHCARE_HERO_DATA.cta.label}
        ctaHref={HEALTHCARE_HERO_DATA.cta.href}
        subtitleClassName="whitespace-pre-line"
      />

      <CustomAppServices data={HEALTHCARE_SERVICES_DATA} />

      <BetterDecisions data={HEALTHCARE_DECISIONS_DATA} />
      <WhyBusinessesChoose data={HEALTHCARE_WHY_CHOOSE_DATA} />
      <SolutionsAccordion data={HEALTHCARE_ACCORDION_DATA} />
      <DifferentIndustries data={HEALTHCARE_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={HEALTHCARE_FOOTER_DATA} />
    </>
  );
}

