import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import EnterpriseAISolutions from "@/components/Organisms/services/EnterpriseAISolutions";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import Footer from "@/components/Organisms/Footer/Footer";
import {
    AI_PAGE_BREADCRUMB_DATA,
    ENTERPRISE_AI_SOLUTIONS_DATA,
    AI_CLEAR_APPROACH_DATA,
    AI_WHY_CHOOSE_DATA,
    AI_DIFFERENT_INDUSTRIES_DATA,
    AI_FOOTER_DATA,
} from "@/data/artificial-intelligence";
import DifferentIndustries from "../../Organisms/homepage/DifferentIndustries";

const ArtificialIntelligencePage = () => {
    return (
        <>
            <PageBreadcrumb
                title={AI_PAGE_BREADCRUMB_DATA.title}
                subtitle={AI_PAGE_BREADCRUMB_DATA.subtitle}
                backgroundImage={AI_PAGE_BREADCRUMB_DATA.backgroundImage}
                ctaText={AI_PAGE_BREADCRUMB_DATA.ctaText}
                ctaHref={AI_PAGE_BREADCRUMB_DATA.ctaHref}
            />

            <EnterpriseAISolutions data={ENTERPRISE_AI_SOLUTIONS_DATA} />
            <ClearApproach id="ai-solutions" data={AI_CLEAR_APPROACH_DATA} />
            <WhyBusinessesChoose data={AI_WHY_CHOOSE_DATA} />
            <DifferentIndustries data={AI_DIFFERENT_INDUSTRIES_DATA} />
            <Footer data={AI_FOOTER_DATA} />
        </>
    );
};

export default ArtificialIntelligencePage;