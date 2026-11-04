import { ChevronRight } from "lucide-react";
import Button from "@/components/Atoms/Button";
import { type FooterData, footerData } from "@/data/footerData";
import SiteFooter from "@/components/Organisms/SiteFooter/SiteFooter";
import { siteFooterData } from "@/data/siteFooterData";

export interface FooterProps {
  data?: FooterData;
  overlayClassName?: string;
}

const Footer = ({ data = footerData, overlayClassName }: FooterProps) => {
  const resolvedOverlay =
    overlayClassName || data.overlayClassName || "bg-black/10";

  return (
    <section
      className="
        relative isolate flex w-full flex-col items-center
        min-h-[600px] lg:min-h-[800px] 2xl:min-h-[800px]
        px-3 sm:px-5 lg:px-8
        pt-12 sm:pt-16 lg:pt-24
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage: `url("${data.backgroundImage}")`,
      }}
    >
      {/* Background overlay */}
      <div className={`absolute inset-0 z-0 ${resolvedOverlay}`} />

      {/* CTA Content */}
      <div
        className="
          relative z-10 container
          mx-auto flex w-full flex-1 flex-col
          items-center justify-center
          gap-4 sm:gap-5 lg:gap-6
          py-10 sm:py-14 lg:py-20
          text-center
        "
      >
        <h2
          className="
            section-title-h2
            w-full md:max-w-5xl
            text-white
            text-[clamp(28px,6vw,64px)]
            leading-tight
          "
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        {data.description && (
          <p
            className="
              w-full md:max-w-3xl
              text-[13px] leading-6
              text-white
              sm:text-sm sm:leading-7
              lg:text-base
            "
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}

        {/* CTA Buttons */}
        <div
          className="
            mt-2 flex w-full
            flex-col items-stretch justify-center
            gap-3
            sm:w-auto sm:flex-row sm:flex-wrap
            sm:items-center sm:gap-4
          "
        >
          {data.primaryLabel && (
            <Button
              variant="primary"
              href={data.primaryLink}
              className="w-full border-0 shadow-none sm:w-auto"
              icon={
                <ChevronRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
              }
            >
              {data.primaryLabel}
            </Button>
          )}

          {data.secondaryLabel && (
            <Button
              variant="secondary"
              href={data.secondaryLink}
              className="w-full border shadow-none sm:w-auto"
            >
              {data.secondaryLabel}
            </Button>
          )}
        </div>
      </div>

      {/* Actual Footer */}
      <div
        className="
          m-footer relative z-10 mt-auto
          w-full max-w-[1440px]
          overflow-hidden
          bg-cover bg-center
          px-0 pt-4
          sm:px-3 sm:pt-6
          lg:px-5 lg:pt-8
        "
      >
        <SiteFooter data={siteFooterData} />
      </div>
    </section>
  );
};

export default Footer;
