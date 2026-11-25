import React from "react";
import Link from "next/link";
import type { SiteFooterData } from "@/data/siteFooterData";

// "Follow Us" social icons are hidden until the real profile links are ready.
const SHOW_SOCIAL_LINKS = false;

export default function SiteFooter({ data }: { data: SiteFooterData }) {
  // pb-[140px] keeps the bottom row clear of the chat widget, which covers the bottom 120px of the screen.
  return (
    <footer
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#070a0f] text-[#94a3b8] pt-16 sm:pt-20 pb-[140px] border-t border-white/10"
      style={{
        background:
          "radial-gradient(circle at 88% 8%, rgba(16, 185, 129, 0.08) 0%, transparent 38%), radial-gradient(circle at 12% 85%, rgba(49, 93, 255, 0.07) 0%, transparent 42%), #070a0f",
      }}
    >
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex-1 flex flex-col justify-between">
        {/* Top 5-Column Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.35fr_1.15fr_1fr_1.25fr] gap-10 xl:gap-14 pb-12 pt-4">
          <div>
            <h4 className="text-white text-[12px] font-extrabold tracking-[0.14em] uppercase mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3.5 text-[14px] font-medium">
              <li><Link href="/" className="text-[#9ca3af] hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/showcase" className="text-[#9ca3af] hover:text-white transition-colors">Showcase</Link></li>
              <li><Link href="/transformation" className="text-[#9ca3af] hover:text-white transition-colors">Transformation</Link></li>
              <li><Link href="/packages" className="text-[#9ca3af] hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/about" className="text-[#9ca3af] hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/join-us" className="text-[#9ca3af] hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-extrabold tracking-[0.14em] uppercase mb-6">
              SERVICES
            </h4>
            <ul className="space-y-3.5 text-[14px] font-medium">
<li><Link href="/services/ui-ux-design-and-digital-experience" className="text-[#9ca3af] hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/application-development" className="text-[#9ca3af] hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services/website-development" className="text-[#9ca3af] hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/services/artificial-intelligence" className="text-[#9ca3af] hover:text-white transition-colors">AI &amp; Intelligence</Link></li>
              <li><Link href="/services" className="text-[#9ca3af] hover:text-white transition-colors">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-extrabold tracking-[0.14em] uppercase mb-6">
              SOLUTIONS &amp; INDUSTRIES
            </h4>
            <ul className="space-y-3.5 text-[14px] font-medium">
              <li><Link href="/solutions/silver" className="text-[#9ca3af] hover:text-white transition-colors">Silver — Get Online</Link></li>
              <li><Link href="/solutions/gold" className="text-[#9ca3af] hover:text-white transition-colors">Gold — Manage Online</Link></li>
              <li><Link href="/solutions/premium" className="text-[#9ca3af] hover:text-white transition-colors">Premium — Sell &amp; Scale</Link></li>
              <li><Link href="/industries/manufacturers-wholesale" className="text-[#9ca3af] hover:text-white transition-colors">Manufacturers &amp; Wholesale</Link></li>
              <li><Link href="/industries/ecommerce" className="text-[#9ca3af] hover:text-white transition-colors">Retail &amp; E-Commerce</Link></li>
              <li><Link href="/industries/service-businesses" className="text-[#9ca3af] hover:text-white transition-colors">Service Businesses</Link></li>
              <li><Link href="/industries/startups-founders" className="text-[#9ca3af] hover:text-white transition-colors">Startups &amp; Founders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-extrabold tracking-[0.14em] uppercase mb-6">
              COMPANY &amp; LEGAL
            </h4>
            <ul className="space-y-3.5 text-[14px] font-medium">
              <li><Link href="/our-philosophy" className="text-[#9ca3af] hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link href="/how-we-work" className="text-[#9ca3af] hover:text-white transition-colors">How We Work</Link></li>
              <li><Link href="/selected-work" className="text-[#9ca3af] hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/faqs" className="text-[#9ca3af] hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="text-[#9ca3af] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-[#9ca3af] hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/contact-us" className="text-[#9ca3af] hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-extrabold tracking-[0.14em] uppercase mb-6">
              CONTACT US
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#10b981]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <small className="block text-[11.5px] text-[#6b7280] font-semibold">Sales &amp; Enquiries</small>
                  <a href={`mailto:${data.contact?.email || "support@sparshinfosystem.com"}`} className="text-[14px] font-semibold text-[#d1d5db] hover:text-[#10b981] transition-colors">
                    {data.contact?.email || "support@sparshinfosystem.com"}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#10b981]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <small className="block text-[11.5px] text-[#6b7280] font-semibold">Phone</small>
                  <a href="tel:+911204458701" className="block text-[14px] font-semibold tabular-nums tracking-[0.01em] leading-6 text-[#d1d5db] hover:text-[#10b981] transition-colors">
                    +91-120-4458701 <span className="ml-1.5 text-[11.5px] font-medium text-[#6b7280]">Landline</span>
                  </a>
                  <a href="tel:+919212517322" className="block text-[14px] font-semibold tabular-nums tracking-[0.01em] leading-6 text-[#d1d5db] hover:text-[#10b981] transition-colors">
                    +91-9212517322 <span className="ml-1.5 text-[11.5px] font-medium text-[#6b7280]">Mobile</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#10b981]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <small className="block text-[11.5px] text-[#6b7280] font-semibold">Office Address</small>
                  <span className="block text-[14px] font-semibold text-[#d1d5db]">Sparsh Info System Pvt Ltd</span>
                  <span className="block text-[13px] leading-5 text-[#9ca3af]">A-121, Sahni Tower, Block-A, Sector-5,<br />Rajendra Nagar, Sahibabad, Ghaziabad,<br />Uttar Pradesh - 201005</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Follow Us Social Row (hidden for now: set SHOW_SOCIAL_LINKS to true to bring it back) */}
        <div hidden={!SHOW_SOCIAL_LINKS} className={`${SHOW_SOCIAL_LINKS ? "flex" : "hidden"} border-t border-white/10 py-7 items-center justify-center gap-4`}>
          <span className="text-white text-[13.5px] font-bold">Follow Us</span>
          <div className="flex items-center gap-3">
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] text-[#9ca3af] hover:text-white hover:border-[#10b981] flex items-center justify-center transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] text-[#9ca3af] hover:text-white hover:border-[#10b981] flex items-center justify-center transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] text-[#9ca3af] hover:text-white hover:border-[#10b981] flex items-center justify-center transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] text-[#9ca3af] hover:text-white hover:border-[#10b981] flex items-center justify-center transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            </a>
          </div>
        </div>

        {/* Monumental Edge-to-Edge Full-Screen Sparsh IT All-White Logo Design */}
        <div className="py-6 sm:py-8 flex-1 flex justify-center items-center select-none overflow-hidden w-full">
          <svg
            className="w-full max-w-none h-auto block mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="18 8 1325 444"
            role="img"
            aria-label="Sparsh IT"
          >
            <g transform="translate(-80 -50)">
              <path
                d="M367 249 C402 267 425 292 424 323 C423 354 406 372 373 393 C329 418 230 465 160 489 C144 495 134 492 129 477 C121 454 132 432 157 409 C179 387 219 366 259 342 C316 318 359 294 375 271 C383 260 378 254 367 249 Z"
                fill="#F3F4F6"
                fillOpacity="0.78"
              />
              <path
                d="M253 206 C287 217 334 239 366 250 C379 255 385 262 378 273 C363 299 320 323 260 342 C228 330 184 313 152 299 C135 292 135 281 150 263 C171 242 206 224 253 206 Z"
                fill="#F3F4F6"
                fillOpacity="0.9"
              />
              <path
                d="M358 63 C370 59 378 73 376 95 C375 140 344 169 289 197 C242 222 186 243 157 264 C141 276 134 289 145 297 C119 289 104 269 103 239 C102 206 120 186 150 164 C192 135 268 101 344 67 C351 64 355 63 358 63 Z"
                fill="#F3F4F6"
              />
            </g>
            <g fill="#F3F4F6">
              <path
                d="M689 -24C1073 -24 1301 153 1301 453C1301 683 1158 814 828 880L697 906C527 941 456 986 456 1067C456 1160 551 1225 687 1225C829 1225 924 1149 934 1026H1267C1258 1331 1039 1514 682 1514C332 1514 96 1327 96 1050C96 833 245 689 536 629L689 598C868 561 945 512 945 427C945 329 844 265 692 265C520 265 415 349 410 492H67C67 163 292 -24 689 -24Z"
                transform="translate(410.000 307) scale(0.106933594 -0.106933594)"
              />
              <path
                d="M96 -418H440V157H444C499 40 603 -23 742 -23C1019 -23 1198 196 1198 530C1198 853 1012 1079 745 1079C608 1079 504 1025 441 918H436V1056H96ZM645 252C515 252 426 361 426 530C426 697 515 805 645 805C772 805 850 702 850 530C850 356 772 252 645 252Z"
                transform="translate(555.085 307) scale(0.106933594 -0.106933594)"
              />
              <path
                d="M419 -18C568 -18 663 34 726 148H730V0H1066V711C1066 944 897 1079 590 1079C284 1079 111 943 96 714H416C423 786 482 832 578 832C669 832 725 789 725 726V721C725 658 656 643 467 627C242 609 57 532 57 295C57 85 208 -18 419 -18ZM524 207C440 207 383 246 383 311C383 380 449 418 541 432C626 446 691 459 728 476V380C728 276 639 207 524 207Z"
                transform="translate(687.659 307) scale(0.106933594 -0.106933594)"
              />
              <path
                d="M96 0H440V541C440 691 525 777 648 777C698 777 759 775 784 774V1058C756 1059 727 1060 690 1060C549 1060 470 1004 432 870H429V1056H96Z"
                transform="translate(810.716 307) scale(0.106933594 -0.106933594)"
              />
              <path
                d="M562 -26C858 -26 1058 120 1058 337C1058 494 956 585 739 625L527 664C454 678 413 707 413 751C413 803 465 842 555 842C646 842 712 787 714 713H1031C1025 938 838 1078 543 1078C249 1078 70 944 70 735C70 568 181 461 389 424L580 390C664 375 708 347 708 301C708 248 652 211 557 211C456 211 395 260 385 338H46C65 113 270 -26 562 -26Z"
                transform="translate(895.704 307) scale(0.106933594 -0.106933594)"
              />
              <path
                d="M440 574C440 718 510 785 619 785C728 785 791 717 791 592V0H1135V664C1135 924 1001 1079 772 1079C617 1079 511 1009 440 893V1490H96V0H440Z"
                transform="translate(1012.452 307) scale(0.106933594 -0.106933594)"
              />
              <path
                d="M456 1490H96V0H456Z"
                transform="translate(1142.887 307) scale(0.106933594 -0.106933594)"
              />
              <path
                d="M42 1184H481V0H841V1184H1279V1490H42Z"
                transform="translate(1200.715 307) scale(0.106933594 -0.106933594)"
              />
            </g>
          </svg>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-[#6b7280]">
          <span className="text-center sm:text-left">© 2026 Sparsh Info System Pvt Ltd. All rights reserved. <span className="whitespace-nowrap">CIN: U82990UW2026PTC249281</span></span>
          <div className="flex items-center gap-6">
            {data.legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors font-semibold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
