import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomAppServices from "@/components/Organisms/service_application/CustomAppServices";
import BetterDecisions from "@/components/Organisms/service_application/BetterDecisions";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import SolutionsAccordion from "@/components/Organisms/service_application/SolutionsAccordion";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  ECOMMERCE_HERO_DATA,
  ECOMMERCE_SERVICES_DATA,
  ECOMMERCE_DECISIONS_DATA,
  ECOMMERCE_WHY_CHOOSE_DATA,
  ECOMMERCE_ACCORDION_DATA,
  ECOMMERCE_DIFFERENT_INDUSTRIES_DATA,
  ECOMMERCE_FOOTER_DATA,
} from "@/data/Industries_Ecommerce";

export default function Ecommerce() {
  return (
    <>
      <PageBreadcrumb
        title={ECOMMERCE_HERO_DATA.title}
        description={ECOMMERCE_HERO_DATA.subtitle}
        backgroundImage={ECOMMERCE_HERO_DATA.backgroundImage}
        ctaText={ECOMMERCE_HERO_DATA.cta.label}
        ctaHref={ECOMMERCE_HERO_DATA.cta.href}
        subtitleClassName="whitespace-pre-line"
      />

      <CustomAppServices data={ECOMMERCE_SERVICES_DATA} />

      <BetterDecisions data={ECOMMERCE_DECISIONS_DATA} />
      <WhyBusinessesChoose data={ECOMMERCE_WHY_CHOOSE_DATA} />
      <SolutionsAccordion data={ECOMMERCE_ACCORDION_DATA} />
      <DifferentIndustries data={ECOMMERCE_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={ECOMMERCE_FOOTER_DATA} />
    </>
  );
}

