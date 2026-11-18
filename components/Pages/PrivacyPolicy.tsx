import React from "react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import SiteFooter from "@/components/Organisms/SiteFooter/SiteFooter";
import { siteFooterData } from "@/data/siteFooterData";
import Button from "@/components/Atoms/Button";
import { ShieldCheck } from "lucide-react";
import { PRIVACY_POLICY_DATA } from "@/data/privacyPolicy/privacyPolicy.data";

export default function PrivacyPolicy() {
  return (
    <>
      <PageBreadcrumb
        title={PRIVACY_POLICY_DATA.title}
        backgroundImage={PRIVACY_POLICY_DATA.bannerImage}
      />

      <section className="relative w-full py-14 sm:py-20 lg:py-24 bg-[#FAFAFC] text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <div className="space-y-10 sm:space-y-12">
              {/* Introduction */}
              <div className="border-b border-slate-200 pb-6 sm:pb-8">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                  {PRIVACY_POLICY_DATA.intro}
                </p>
              </div>

              {/* 1. What data do we collect? */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-6">
                  {PRIVACY_POLICY_DATA.dataCollected.heading}
                </h2>
                <div className="space-y-4">
                  {PRIVACY_POLICY_DATA.dataCollected.items.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6"
                    >
                      <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                        <strong className="text-[#061826] font-semibold capitalize">
                          {item.category}:{" "}
                        </strong>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. How do we collect your data? */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  {PRIVACY_POLICY_DATA.howCollected.heading}
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-5">
                  {PRIVACY_POLICY_DATA.howCollected.directIntro}
                </p>
                <ul className="space-y-3 pl-1 sm:pl-2 mb-8">
                  {PRIVACY_POLICY_DATA.howCollected.directItems.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-600 text-base sm:text-[17px] leading-relaxed"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>

                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-5 font-medium">
                  {PRIVACY_POLICY_DATA.howCollected.indirectIntro}
                </p>
                <ul className="space-y-3 pl-1 sm:pl-2">
                  {PRIVACY_POLICY_DATA.howCollected.indirectItems.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-600 text-base sm:text-[17px] leading-relaxed"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* 3. How will we use your data? */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-6">
                  {PRIVACY_POLICY_DATA.howUsed.heading}
                </h2>
                <ul className="space-y-3 pl-1 sm:pl-2 mb-6">
                  {PRIVACY_POLICY_DATA.howUsed.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-slate-600 text-base sm:text-[17px] leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl bg-teal-50/70 border border-teal-200/80 p-5 sm:p-6 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#0D9488] shrink-0 mt-0.5" />
                  <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                    {PRIVACY_POLICY_DATA.howUsed.note}
                  </p>
                </div>
              </div>

              {/* 4. How do we store your data? */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  {PRIVACY_POLICY_DATA.howStored.heading}
                </h2>
                <div className="space-y-5 text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  {PRIVACY_POLICY_DATA.howStored.paragraphs.map(
                    (paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    )
                  )}
                </div>
              </div>

              {/* 5. Single In-Page CTA */}
              <div className="rounded-2xl bg-gradient-to-r from-[#061826] via-[#0D9488] to-[#061826] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                    {PRIVACY_POLICY_DATA.ctaSection.heading}
                  </h3>
                </div>
                <div className="shrink-0">
                  <Button
                    href={PRIVACY_POLICY_DATA.ctaSection.buttonHref}
                    variant="primary"
                  >
                    {PRIVACY_POLICY_DATA.ctaSection.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same full-width footer as the homepage */}
      <SiteFooter data={siteFooterData} />
    </>
  );
}
