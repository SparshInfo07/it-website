"use client";

import {
  HOMEPAGE_PROMISES_DELIVERY_DATA,
  type PromisesDeliveryData,
} from "@/data/HomePage";
import Image from "next/image";

export interface PromisesDeliveryProps {
  data?: PromisesDeliveryData;
}

export default function PromisesDelivery({
  data = HOMEPAGE_PROMISES_DELIVERY_DATA,
}: PromisesDeliveryProps = {}) {
  return (
    <section
      id="promises-delivery-section"
      aria-label="Promises are easy. Delivery isn’t."
      className="sec_padding relative w-full bg-white text-slate-900 overflow-hidden"
    >
      <div className="container">

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <h2
            className="section-title-h2 text-3xl sm:text-4xl md:text-[46px] lg:text-[48px] font-medium leading-[1.18] tracking-[-0.02em] text-[#061826]"
            dangerouslySetInnerHTML={{
              __html: data.heading,
            }}
          />
        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {data.cards.map((card) => {

            return (
              <div
                key={card.id}
                className="group relative flex items-center gap-4 sm:gap-5 p-5 bg-white rounded-[16px] md:rounded-[20px] border border-[#E9EDF4] shadow-[0_4px_24px_rgba(20,15,45,0.03)] hover:shadow-[0_12px_36px_rgba(20,15,45,0.08)] hover:border-[#D8E1EC] hover:-translate-y-0.5 transition-all duration-300"
              >

                <Image src={card.image} alt={card.title} width={70} height={70} />

                <div className="flex flex-col">
                  <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-[#061826] leading-snug">
                    {card.title || ""}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#555068] mt-1 sm:mt-1.5 leading-normal">
                    {card.subtitle || ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
