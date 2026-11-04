import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomAppServices from "@/components/Organisms/service_application/CustomAppServices";
import BetterDecisions from "@/components/Organisms/service_application/BetterDecisions";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import SolutionsAccordion from "@/components/Organisms/service_application/SolutionsAccordion";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  LOGISTICS_HERO_DATA,
  LOGISTICS_SERVICES_DATA,
  LOGISTICS_DECISIONS_DATA,
  LOGISTICS_WHY_CHOOSE_DATA,
  LOGISTICS_ACCORDION_DATA,
  LOGISTICS_DIFFERENT_INDUSTRIES_DATA,
  LOGISTICS_FOOTER_DATA,
} from "@/data/Industries_Logistics";

export default function Logistics() {
  return (
    <>
      <PageBreadcrumb
        title={LOGISTICS_HERO_DATA.title}
        description={LOGISTICS_HERO_DATA.subtitle}
        backgroundImage={LOGISTICS_HERO_DATA.backgroundImage}
        ctaText={LOGISTICS_HERO_DATA.cta.label}
        ctaHref={LOGISTICS_HERO_DATA.cta.href}
        subtitleClassName="whitespace-pre-line"
      />

      <CustomAppServices data={LOGISTICS_SERVICES_DATA} />

      <BetterDecisions data={LOGISTICS_DECISIONS_DATA} />
      <WhyBusinessesChoose data={LOGISTICS_WHY_CHOOSE_DATA} />
      <SolutionsAccordion data={LOGISTICS_ACCORDION_DATA} />
      <DifferentIndustries data={LOGISTICS_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={LOGISTICS_FOOTER_DATA} />
    </>
  );
}

