import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb";
import IntroContentSection from "@/components/Organisms/services/IntroContentSection/IntroContentSection";
import IndustryListingSection from "@/components/Organisms/industry/IndustryListingSection";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import Footer from "@/components/Organisms/Footer/Footer";
import { SERVICES_INTRO_DATA } from "@/data/Industry/IndustryMainPage/introContent.data";
import { SERVICES_HERO_DATA } from "@/data/Industry/IndustryMainPage/pageBreadcrumb.data";
import { INDUSTRY_LISTING_DATA } from "@/data/Industry/IndustryMainPage/industryListing.data";
import { INDUSTRY_CLEAR_APPROACH_DATA } from "@/data/Industry/IndustryMainPage/clearApproach.data";
import { INDUSTRY_WHY_CHOOSE_DATA } from "@/data/Industry/IndustryMainPage/whyChoose.data";
import { INDUSTRY_FOOTER_DATA } from "@/data/Industry/IndustryMainPage/footer.data";

const IndustriesMainPage = () => {
  return (
    <>
      <PageBreadcrumb
        eyebrow={SERVICES_HERO_DATA.eyebrow}
        title={SERVICES_HERO_DATA.title}
        subtitle={SERVICES_HERO_DATA.subtitle}
        backgroundImage={SERVICES_HERO_DATA.backgroundImage}
        ctaText={SERVICES_HERO_DATA.ctaText}
        ctaHref={SERVICES_HERO_DATA.ctaHref}
        subtitleClassName="whitespace-pre-line"
      />
      <IntroContentSection data={SERVICES_INTRO_DATA} />
      <IndustryListingSection data={INDUSTRY_LISTING_DATA} id="industries" />
      <ClearApproach data={INDUSTRY_CLEAR_APPROACH_DATA} />
      <WhyBusinessesChoose data={INDUSTRY_WHY_CHOOSE_DATA} />
      <Footer data={INDUSTRY_FOOTER_DATA} />
    </>
  );
};

export default IndustriesMainPage;
