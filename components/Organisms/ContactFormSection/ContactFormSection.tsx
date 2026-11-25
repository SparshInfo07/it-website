"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import ContactForm from "@/components/Organisms/ContactForm/ContactForm";

const ContactDetail = ({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) => (
  <div className="flex items-center gap-3">
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0D9488] text-white">
      <Icon aria-hidden="true" className="size-4" />
    </span>
    <div>
      <p className="text-[14px] font-medium text-[#222]">{label}</p>
      <div className="mt-1 text-[16px] leading-5 text-[#858585]">{children}</div>
    </div>
  </div>
);

export default function ContactFormSection() {
  return (
    <section className="bg-white sec_padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-5/12">
            <div className="flex flex-col h-full">
              <div>
                <h2 className="max-w-[380px] text-4xl font-medium leading-tight tracking-tight text-[#111] sm:text-[45px]">
                  Let’s turn ideas into action
                </h2>
                <p className="mt-4 max-w-[390px] text-xl leading-7 text-[#858585]">
                  Share your ideas with us, and we’ll help turn them into
                  practical solutions.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:mt-auto md:pt-12">
                <ContactDetail icon={MapPin} label="Office Address">
                  {/* Block lines rather than <br />: line breaks are hidden on phones site-wide. */}
                  <span className="block">A-121, Sahni Tower, Block-A, Sector-5,</span>
                  <span className="block">Rajendra Nagar, Sahibabad, Ghaziabad,</span>
                  <span className="block">Uttar Pradesh - 201005</span>
                  <span className="mt-1 block text-[0.9em] opacity-80">CIN: U82990UW2026PTC249281</span>
                </ContactDetail>
                <ContactDetail icon={Phone} label="Phone">
                  <a
                    className="block tabular-nums transition hover:text-[#0D9488]"
                    href="tel:+911204458701"
                  >
                    +91-120-4458701 <span className="text-[0.85em] opacity-60">(Landline)</span>
                  </a>
                  <a
                    className="block tabular-nums transition hover:text-[#0D9488]"
                    href="tel:+919212517322"
                  >
                    +91-9212517322 <span className="text-[0.85em] opacity-60">(Mobile)</span>
                  </a>
                </ContactDetail>
                <ContactDetail icon={Mail} label="Email Address">
                  <a
                    className="transition hover:text-[#0D9488]"
                    href="mailto:support@sparshinfosystem.com"
                  >
                    support@sparshinfosystem.com
                  </a>
                </ContactDetail>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="rounded-xl bg-[#f3f3f5] p-6 sm:p-10 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
