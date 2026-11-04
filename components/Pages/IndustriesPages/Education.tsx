import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomAppServices from "@/components/Organisms/service_application/CustomAppServices";
import BetterDecisions from "@/components/Organisms/service_application/BetterDecisions";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import SolutionsAccordion from "@/components/Organisms/service_application/SolutionsAccordion";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  EDUCATION_HERO_DATA,
  EDUCATION_SERVICES_DATA,
  EDUCATION_DECISIONS_DATA,
  EDUCATION_WHY_CHOOSE_DATA,
  EDUCATION_ACCORDION_DATA,
  EDUCATION_DIFFERENT_INDUSTRIES_DATA,
  EDUCATION_FOOTER_DATA,
} from "@/data/Industries_Education";

export default function Education() {
  return (
    <>
      <PageBreadcrumb
        title={EDUCATION_HERO_DATA.title}
        description={EDUCATION_HERO_DATA.subtitle}
        backgroundImage={EDUCATION_HERO_DATA.backgroundImage}
        ctaText={EDUCATION_HERO_DATA.cta.label}
        ctaHref={EDUCATION_HERO_DATA.cta.href}
        subtitleClassName="whitespace-pre-line"
      />

      <CustomAppServices data={EDUCATION_SERVICES_DATA} />

      <BetterDecisions data={EDUCATION_DECISIONS_DATA} />
      <WhyBusinessesChoose data={EDUCATION_WHY_CHOOSE_DATA} />
      <SolutionsAccordion data={EDUCATION_ACCORDION_DATA} />
      <DifferentIndustries data={EDUCATION_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={EDUCATION_FOOTER_DATA} />
    </>
  );
}

