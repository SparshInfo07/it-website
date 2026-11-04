import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomAppServices from "@/components/Organisms/service_application/CustomAppServices";
import BetterDecisions from "@/components/Organisms/service_application/BetterDecisions";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import SolutionsAccordion from "@/components/Organisms/service_application/SolutionsAccordion";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  BANKING_HERO_DATA,
  BANKING_SERVICES_DATA,
  BANKING_DECISIONS_DATA,
  BANKING_WHY_CHOOSE_DATA,
  BANKING_ACCORDION_DATA,
  BANKING_DIFFERENT_INDUSTRIES_DATA,
  BANKING_FOOTER_DATA,
} from "@/data/Industies_Banking";

export default function Banking() {
  return (
    <>
      <PageBreadcrumb
        title={BANKING_HERO_DATA.title}
        description={BANKING_HERO_DATA.subtitle}
        backgroundImage={BANKING_HERO_DATA.backgroundImage}
        ctaText={BANKING_HERO_DATA.cta.label}
        ctaHref={BANKING_HERO_DATA.cta.href}
        subtitleClassName="whitespace-pre-line"
      />

      <CustomAppServices data={BANKING_SERVICES_DATA} />

      <BetterDecisions data={BANKING_DECISIONS_DATA} />
      <WhyBusinessesChoose data={BANKING_WHY_CHOOSE_DATA} />
      <SolutionsAccordion data={BANKING_ACCORDION_DATA} />
      <DifferentIndustries data={BANKING_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={BANKING_FOOTER_DATA} />
    </>
  );
}
