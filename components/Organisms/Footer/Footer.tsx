import { ChevronRight } from "lucide-react";
import Button from "@/components/Atoms/Button";
import { type FooterData, footerData } from "@/data/footerData";
import SiteFooter from "@/components/Organisms/SiteFooter/SiteFooter";
import { siteFooterData } from "@/data/siteFooterData";

export interface FooterProps {
  data?: FooterData;
  overlayClassName?: string;
}

/**
 * Page closer used by the inner pages: a page-specific call-to-action over a photo,
 * followed by the shared full-width site footer (the same footer the homepage uses).
 */
const Footer = ({ data = footerData, overlayClassName }: FooterProps) => {
  const resolvedOverlay =
    overlayClassName || data.overlayClassName || "bg-black/10";

  return (
    <>
      <section
        className="
          relative isolate flex w-full flex-col items-center justify-center
          min-h-[420px] lg:min-h-[560px]
          px-4 sm:px-6 lg:px-8
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
            mx-auto flex w-full flex-col
            items-center justify-center
            gap-4 sm:gap-5 lg:gap-6
            py-16 sm:py-20 lg:py-28
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
                text-[15px] leading-7
                text-white/90
                lg:text-[17px]
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
      </section>

      {/* Shared full-width footer, identical to the homepage */}
      <SiteFooter data={siteFooterData} />
    </>
  );
};

export default Footer;
