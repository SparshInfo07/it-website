import React from "react";
import BuiltToBeMore from "@/components/Organisms/about/BuiltToBeMore";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import PurposeVision from "@/components/Organisms/about/PurposeVision";
import OurValues from "@/components/Organisms/about/OurValues";
import LeadershipTeam from "@/components/Organisms/about/LeadershipTeam";
import TrustedPartners from "@/components/Organisms/homepage/TrustedPartners";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import Footer from "@/components/Organisms/Footer";
import {
  ABOUT_HERO_DATA,
  ABOUT_OVERVIEW_DATA,
  ABOUT_APPROACH_DATA,
  PURPOSE_VISION_DATA,
  OUR_VALUES_DATA,
  LEADERSHIP_TEAM_DATA,
  WHY_CHOOSE_DATA,
  ABOUT_FOOTER_DATA,
} from "@/data/about";

export default function AboutUs() {
  return (
    <>
      <PageBreadcrumb
        title={ABOUT_HERO_DATA.title}
        subtitle={ABOUT_HERO_DATA.subtitle}
        backgroundImage={ABOUT_HERO_DATA.backgroundImage}
        ctaText={ABOUT_HERO_DATA.ctaText}
        ctaHref={ABOUT_HERO_DATA.ctaHref}
      />
      <BuiltToBeMore data={ABOUT_OVERVIEW_DATA} />
      <ClearApproach id="our-approach" data={ABOUT_APPROACH_DATA} />
      <PurposeVision data={PURPOSE_VISION_DATA} />
      <OurValues data={OUR_VALUES_DATA} />
      {/* <LeadershipTeam data={LEADERSHIP_TEAM_DATA} /> */}
      <div className="py-8 sm:py-12 lg:py-16">
        <TrustedPartners />
      </div>
      <WhyBusinessesChoose  data={WHY_CHOOSE_DATA} />
      <Footer data={ABOUT_FOOTER_DATA} />
    </>
  );
}
