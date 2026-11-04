import React from 'react'
import PageBreadcrumb from '../../Molecules/PageBreadcrumb'
import { AI_PAGE_BREADCRUMB_DATA } from '@/data/DataEngineeringAnalytics/pageBreadcrumb.data'
import EnterpriseAISolutions from '../../Organisms/services/EnterpriseAISolutions'
import { ENTERPRISE_AI_SOLUTIONS_DATA } from '@/data/DataEngineeringAnalytics/enterpriseAISolutions.data'
import ClearApproach from '../../Organisms/services/ClearApproach/ClearApproach'
import { AI_CLEAR_APPROACH_DATA } from '@/data/DataEngineeringAnalytics/clearApproach.data'
import WhyBusinessesChoose from '../../Organisms/about/WhyBusinessesChoose'
import { AI_WHY_CHOOSE_DATA } from '@/data/DataEngineeringAnalytics/whyChoose.data'
import DifferentIndustries from '../../Organisms/homepage/DifferentIndustries'
import { AI_DIFFERENT_INDUSTRIES_DATA } from '@/data/DataEngineeringAnalytics/differentIndustries.data'
import Footer from '../../Organisms/Footer'
import { AI_FOOTER_DATA } from '@/data/DataEngineeringAnalytics/footer.data'


const DataEngineeringAnalytics = () => {
    return (
        <div>
            <PageBreadcrumb
                title={AI_PAGE_BREADCRUMB_DATA.title}
                subtitle={AI_PAGE_BREADCRUMB_DATA.subtitle}
                backgroundImage={AI_PAGE_BREADCRUMB_DATA.backgroundImage}
                ctaText={AI_PAGE_BREADCRUMB_DATA.ctaText}
                ctaHref={AI_PAGE_BREADCRUMB_DATA.ctaHref}
                fullHeight={AI_PAGE_BREADCRUMB_DATA.fullHeight}
            />
            <EnterpriseAISolutions data={ENTERPRISE_AI_SOLUTIONS_DATA} />
            <ClearApproach id="ai-solutions" data={AI_CLEAR_APPROACH_DATA} />
            <WhyBusinessesChoose data={AI_WHY_CHOOSE_DATA} />
            <DifferentIndustries data={AI_DIFFERENT_INDUSTRIES_DATA} />
            <Footer data={AI_FOOTER_DATA} />
        </div>
    )
}

export default DataEngineeringAnalytics
