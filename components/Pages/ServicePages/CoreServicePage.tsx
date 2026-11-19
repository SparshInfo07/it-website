import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import EnterpriseAISolutions from "@/components/Organisms/services/EnterpriseAISolutions";
import ClearApproach from "@/components/Organisms/services/ClearApproach/ClearApproach";
import WhyBusinessesChoose from "@/components/Organisms/about/WhyBusinessesChoose";
import DifferentIndustries from "@/components/Organisms/homepage/DifferentIndustries";
import Footer from "@/components/Organisms/Footer/Footer";
import { CORE_SERVICE_PAGES, type CoreServiceId } from "@/data/coreServices";

/** One template for all four service pages: UI/UX, App, Website and AI. */
export default function CoreServicePage({ service }: { service: CoreServiceId }) {
  const page = CORE_SERVICE_PAGES[service];
  return (
    <>
      <PageBreadcrumb
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        backgroundImage={page.hero.backgroundImage}
        ctaText={page.hero.ctaText}
        ctaHref={page.hero.ctaHref}
      />
      <EnterpriseAISolutions data={page.offerings} />
      <ClearApproach id={`${service}-outcomes`} data={page.outcomes} />
      <WhyBusinessesChoose data={page.approach} />
      <DifferentIndustries data={page.industries} />
      <Footer data={page.cta} />
    </>
  );
}
