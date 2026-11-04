import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import IntroContentSection from "@/components/Organisms/services/IntroContentSection/IntroContentSection";
import Overview from "@/components/Organisms/services/Overview/Overview";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  SERVICES_HERO_DATA,
  SERVICES_INTRO_DATA,
  SERVICES_OVERVIEW_DATA,
  SERVICES_CLEAR_APPROACH_DATA,
  SERVICES_WHY_CHOOSE_DATA,
  SERVICES_DIFFERENT_INDUSTRIES_DATA,
  SERVICES_FOOTER_DATA,
} from "@/data/services";

export default function Services() {
  return (
    <>
      <PageBreadcrumb
        title={SERVICES_HERO_DATA.title}
        subtitle={SERVICES_HERO_DATA.subtitle}
        backgroundImage={SERVICES_HERO_DATA.backgroundImage}
        ctaText={SERVICES_HERO_DATA.ctaText}
        ctaHref={SERVICES_HERO_DATA.ctaHref}
        subtitleClassName="whitespace-pre-line"
      />
      <IntroContentSection data={SERVICES_INTRO_DATA} />
      <Overview data={SERVICES_OVERVIEW_DATA} columns={3} />
      <ClearApproach data={SERVICES_CLEAR_APPROACH_DATA} />
      <WhyBusinessesChoose data={SERVICES_WHY_CHOOSE_DATA} />
      <DifferentIndustries data={SERVICES_DIFFERENT_INDUSTRIES_DATA} />
      <Footer data={SERVICES_FOOTER_DATA} />
    </>
  );
}