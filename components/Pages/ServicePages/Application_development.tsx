import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomAppServices from "@/components/Organisms/service_application/CustomAppServices";
import BetterDecisions from "@/components/Organisms/service_application/BetterDecisions";
import SolutionsAccordion from "@/components/Organisms/service_application/SolutionsAccordion";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  SERVICE_APPLICATION_HERO_DATA,
  CUSTOM_APP_SERVICES_DATA,
  BETTER_DECISIONS_DATA,
  SERVICE_APP_ACCORDION_DATA,
  SERVICE_APP_DIFFERENT_INDUSTRIES_DATA,
  SERVICE_APPLICATION_FOOTER_DATA,
} from "@/data/application-development";

export default function ServiceApplication() {
  return (
    <>
      <PageBreadcrumb
        title={SERVICE_APPLICATION_HERO_DATA.title}
        description={SERVICE_APPLICATION_HERO_DATA.subtitle}
        backgroundImage={SERVICE_APPLICATION_HERO_DATA.backgroundImage}
        ctaText={SERVICE_APPLICATION_HERO_DATA.cta.label}
        ctaHref={SERVICE_APPLICATION_HERO_DATA.cta.href}
      />

      <CustomAppServices data={CUSTOM_APP_SERVICES_DATA} />

      <BetterDecisions data={BETTER_DECISIONS_DATA} />
      <SolutionsAccordion data={SERVICE_APP_ACCORDION_DATA} />
      <DifferentIndustries data={SERVICE_APP_DIFFERENT_INDUSTRIES_DATA} />

      <Footer data={SERVICE_APPLICATION_FOOTER_DATA} />
    </>
  );
}
