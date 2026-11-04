import React from "react";
import Image from "next/image";
import {
  HOMEPAGE_TRUSTED_PARTNERS_DATA,
  type TrustedPartnersData,
  type PartnerItem,
} from "@/data/HomePage";

export interface TrustedPartnersProps {
  data?: TrustedPartnersData;
}

export default function TrustedPartners({
  data = HOMEPAGE_TRUSTED_PARTNERS_DATA,
}: TrustedPartnersProps = {}) {
  const partners = data.partners ?? [];

  const renderPartnerItem = (partner: PartnerItem, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${partner.id}`}
      className="flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer"
      title={partner.name}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={280}
        height={120}
        className={`${partner.heightClass ?? "h-10 sm:h-12 md:h-14 lg:h-18"} w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] object-contain`} />
    </div>
  );

  return (
    <section className="w-full relative z-10 pb-6 sm:pb-8 select-none">
      <div className="container">
        <p className="text-center text-[15px] sm:text-[24px] font-semibold text-black/90 tracking-[-0.01em] mb-7 sm:mb-9 font-sans">
          {data.title}
        </p>

        <div className="relative w-full overflow-hidden marquee-fade-mask">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-10 bg-linear-to-r from-white/95 via-white/50 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-10 bg-linear-to-l from-white/95 via-white/50 to-transparent"
          />

          <div className="flex w-max items-center animate-marquee py-3 sm:py-4">
            <div className="flex shrink-0 items-center gap-3 sm:gap-14 pr-10 sm:pr-14 md:pr-18 lg:pr-20">              {partners.map((partner) => renderPartnerItem(partner, "track1"))}
            </div>

            <div
              className="flex shrink-0 items-center gap-10 sm:gap-14 md:gap-18 lg:gap-20 pr-10 sm:pr-14 md:pr-18 lg:pr-20"
              aria-hidden="true"
            >
              {partners.map((partner) => renderPartnerItem(partner, "track2"))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
