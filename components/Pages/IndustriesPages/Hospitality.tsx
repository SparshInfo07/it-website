import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomAppServices from "@/components/Organisms/service_application/CustomAppServices";
import BetterDecisions from "@/components/Organisms/service_application/BetterDecisions";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import SolutionsAccordion from "@/components/Organisms/service_application/SolutionsAccordion";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  HOSPITALITY_HERO_DATA,
  HOSPITALITY_SERVICES_DATA,
  HOSPITALITY_DECISIONS_DATA,
  HOSPITALITY_WHY_CHOOSE_DATA,
  HOSPITALITY_ACCORDION_DATA,
  HOSPITALITY_DIFFERENT_INDUSTRIES_DATA,
  HOSPITALITY_FOOTER_DATA,
} from "@/data/Industries_Hospitality";

export default function Hospitality() {
  return (
    <>
      <PageBreadcrumb
        title={HOSPITALITY_HERO_DATA.title}
        description={HOSPITALITY_HERO_DATA.subtitle}
        backgroundImage={HOSPITALITY_HERO_DATA.backgroundImage}
        ctaText={HOSPITALITY_HERO_DATA.cta.label}
        ctaHref={HOSPITALITY_HERO_DATA.cta.href}
        subtitleClassName="whitespace-pre-line"
      />

      <CustomAppServices data={HOSPITALITY_SERVICES_DATA} />

      <BetterDecisions data={HOSPITALITY_DECISIONS_DATA} />
      <WhyBusinessesChoose data={HOSPITALITY_WHY_CHOOSE_DATA} />
      <SolutionsAccordion data={HOSPITALITY_ACCORDION_DATA} />
      <DifferentIndustries data={HOSPITALITY_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={HOSPITALITY_FOOTER_DATA} />
    </>
  );
}

