import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import CustomServicesGrid from "@/components/Organisms/services/CustomServicesGrid";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import Footer from "@/components/Organisms/Footer/Footer";
import {
  DEVSECOPS_HERO_DATA,
  DEVSECOPS_CUSTOM_SERVICES_DATA,
  DEVSECOPS_APPROACH_DATA,
  DEVSECOPS_WHY_CHOOSE_DATA,
  DEVSECOPS_DIFFERENT_INDUSTRIES_DATA,
  DEVSECOPS_FOOTER_DATA,
} from "@/data/devSecOps";
import DifferentIndustries from "../../Organisms/homepage/DifferentIndustries";

export default function DevSecOps() {
  return (
    <>
      <PageBreadcrumb
        fullHeight={true}
        title={DEVSECOPS_HERO_DATA.title}
        description={DEVSECOPS_HERO_DATA.subtitle}
        backgroundImage={DEVSECOPS_HERO_DATA.backgroundImage}
        cta={DEVSECOPS_HERO_DATA.cta}
      />
      <CustomServicesGrid
        id="custom-services"
        data={DEVSECOPS_CUSTOM_SERVICES_DATA}
      />
      <ClearApproach
        id="devsecops-approach"
        data={DEVSECOPS_APPROACH_DATA}
      />
      <WhyBusinessesChoose data={DEVSECOPS_WHY_CHOOSE_DATA} />
      <DifferentIndustries data={DEVSECOPS_DIFFERENT_INDUSTRIES_DATA} />
      <Footer data={DEVSECOPS_FOOTER_DATA} />
    </>
  );
}
