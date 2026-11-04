import React from "react";
import HomeBanner from "@/components/Organisms/homepage/HomeBanner/HomeBanner";
import TrustedPartners from "@/components/Organisms/homepage/TrustedPartners";
import EngineeringPartner from "@/components/Organisms/homepage/EngineeringPartner";
import TechnologySolutions from "@/components/Organisms/homepage/TechnologySolutions";
import GoodSoftware from "@/components/Organisms/homepage/GoodSoftware";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import RightTechnology from "@/components/Organisms/homepage/RightTechnology";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries";
import OurWork from "@/components/Organisms/homepage/OurWork";
import PromisesDelivery from "@/components/Organisms/homepage/PromisesDelivery";
import Footer from "@/components/Organisms/Footer";
import {
  HOME_BANNER_DATA,
  HOMEPAGE_TRUSTED_PARTNERS_DATA,
  HOMEPAGE_ENGINEERING_PARTNER_DATA,
  HOMEPAGE_TECH_SOLUTIONS_DATA,
  HOMEPAGE_GOOD_SOFTWARE_DATA,
  HOMEPAGE_CLEAR_APPROACH_DATA,
  HOMEPAGE_RIGHT_TECHNOLOGY_DATA,
  HOMEPAGE_DIFFERENT_INDUSTRIES_DATA,

  HOMEPAGE_PROMISES_DELIVERY_DATA,
  HOMEPAGE_FOOTER_DATA,
} from "@/data/HomePage";

export default function HomePage() {
  return (
    <>
      <HomeBanner data={HOME_BANNER_DATA} />
      <TrustedPartners data={HOMEPAGE_TRUSTED_PARTNERS_DATA} />
      <EngineeringPartner data={HOMEPAGE_ENGINEERING_PARTNER_DATA} />
      <ClearApproach id="our-approach" data={HOMEPAGE_CLEAR_APPROACH_DATA} />
      <TechnologySolutions data={HOMEPAGE_TECH_SOLUTIONS_DATA} />
      <GoodSoftware data={HOMEPAGE_GOOD_SOFTWARE_DATA} />
      <RightTechnology data={HOMEPAGE_RIGHT_TECHNOLOGY_DATA} />
      <DifferentIndustries data={HOMEPAGE_DIFFERENT_INDUSTRIES_DATA} />
      {/* <OurWork data={HOMEPAGE_OUR_WORK_DATA} /> */}
      <PromisesDelivery data={HOMEPAGE_PROMISES_DELIVERY_DATA} />
      <Footer data={HOMEPAGE_FOOTER_DATA} />
    </>
  );
}
