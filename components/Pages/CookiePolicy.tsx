import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PageBreadcrumb from "@/components/Molecules/PageBreadcrumb/PageBreadcrumb";
import SiteFooter from "@/components/Organisms/SiteFooter/SiteFooter";
import { siteFooterData } from "@/data/siteFooterData";
import Button from "@/components/Atoms/Button";
import { COOKIE_POLICY_DATA } from "@/data/cookiePolicy/cookiePolicy.data";

export default function CookiePolicy() {
  return (
    <>
      <PageBreadcrumb
        title={COOKIE_POLICY_DATA.title}
        backgroundImage={COOKIE_POLICY_DATA.bannerImage}
      />

      <section className="relative w-full py-14 sm:py-20 lg:py-24 bg-[#FAFAFC] text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <div className="space-y-10 sm:space-y-12">
              {/* 1. What are cookies? */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  What are cookies?
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  Cookies are text files placed on your computer to collect
                  standard internet log information and visitor behavior
                  information. When you visit our websites, we may collect
                  information from you automatically through cookies or similar
                  technology. For further information, visit{" "}
                  <a
                    href="https://sparshit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D9488] hover:text-[#1d4ed8] underline underline-offset-4 transition-colors font-medium"
                  >
                    https://sparshit.com/
                  </a>
                  .
                </p>
              </div>

              {/* 2. How do we use cookies? */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  How do we use cookies?
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-5">
                  Sparsh IT uses cookies in a range of ways to improve your
                  experience on our website, including:
                </p>
                <ul className="space-y-3 pl-1 sm:pl-2">
                  {[
                    "Keeping you signed in",
                    "Understanding how you use our website",
                    "Improving our website and making it more user‐friendly",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-slate-600 text-base sm:text-[17px] leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. What types of cookies do we use? */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  What types of cookies do we use?
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-6">
                  There are a number of different types of cookies, however, our
                  website uses:
                </p>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6">
                    <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                      <strong className="text-[#061826] font-semibold">
                        Functionality ‐{" "}
                      </strong>
                      Sparsh IT uses these cookies so that we recognize you
                      on our website and remember your previously selected
                      preferences. These could include what language you prefer
                      and location you are in. A mix of first‐party and
                      third‐party cookies are used.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6">
                    <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                      <strong className="text-[#061826] font-semibold">
                        Advertising ‐{" "}
                      </strong>
                      Sparsh IT uses these cookies to collect information
                      about your visit to our website, the content you viewed,
                      the links you followed, and information about your
                      browser, device, and your IP address.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. How to manage cookies */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  How to manage cookies
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  You can set your browser not to accept cookies, and the above
                  website tells you how to remove cookies from your browser.
                  However, in a few cases, some of our website features may not
                  function as a result.
                </p>
              </div>

              {/* 5. Privacy policies of other websites */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  Privacy policies of other websites
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  The Sparsh IT website contains links to other websites.
                  Our privacy policy applies only to our website, so if you
                  click on a link to another website, you should read their
                  privacy policy.
                </p>
              </div>

              {/* 6. How to contact us */}
              <div className="border-b border-slate-200 pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#061826] mb-4">
                  How to contact us
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-6">
                  If you have any questions about Sparsh IT’s privacy policy,
                  the data we hold on you, or you would like to exercise one of
                  your data protection rights, please do not hesitate to contact
                  us.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="mailto:info@sparshit.com"
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0D9488]/60 hover:shadow-sm transition-all group"
                  >
                    <Mail className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                        Email us at
                      </div>
                      <div className="text-sm font-semibold text-[#061826] group-hover:text-[#0D9488] transition-colors break-all">
                        info@sparshit.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:8728036987"
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0D9488]/60 hover:shadow-sm transition-all group"
                  >
                    <Phone className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                        Call us at
                      </div>
                      <div className="text-sm font-semibold text-[#061826] group-hover:text-[#0D9488] transition-colors">
                        (872) 803-6987
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <MapPin className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                        Address
                      </div>
                      <div className="text-sm font-semibold text-[#061826]">
                        650 Warrenville Rd| Suite#100| Lisle, IL 60532
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Single In-Page CTA */}
              <div className="rounded-2xl bg-gradient-to-r from-[#061826] via-[#0D9488] to-[#061826] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                    Get in touch with us to discuss how we can help yourbusiness
                    succeed
                  </h3>
                </div>
                <div className="shrink-0">
                  <Button href="/contact-us" variant="primary">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer without duplicate CTA */}
      <div className="w-full bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-8 pt-4 sm:pt-6">
          <SiteFooter data={siteFooterData} />
        </div>
      </div>
    </>
  );
}
