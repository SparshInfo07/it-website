import { AI_PAGE_BREADCRUMB_DATA } from '@/data/MobileApplicationDevelopment/pageBreadcrumb.data'
import PageBreadcrumb from '../../Molecules/PageBreadcrumb'
import EnterpriseAISolutions from '../../Organisms/services/EnterpriseAISolutions'
import { ENTERPRISE_AI_SOLUTIONS_DATA } from '@/data/MobileApplicationDevelopment/enterpriseAISolutions.data'
import ClearApproach from '../../Organisms/services/ClearApproach/ClearApproach'
import { AI_CLEAR_APPROACH_DATA } from '@/data/MobileApplicationDevelopment/clearApproach.data'
import WhyBusinessesChoose from '../../Organisms/about/WhyBusinessesChoose'
import { AI_WHY_CHOOSE_DATA } from '@/data/MobileApplicationDevelopment/whyChoose.data'
import DifferentIndustries from '../../Organisms/homepage/DifferentIndustries'
import { AI_DIFFERENT_INDUSTRIES_DATA } from '@/data/MobileApplicationDevelopment/differentIndustries.data'
import Footer from '../../Organisms/Footer'
import { AI_FOOTER_DATA } from '@/data/MobileApplicationDevelopment/footer.data'

const MobileApplicationDevelopment = () => {
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
    )
}

export default MobileApplicationDevelopment