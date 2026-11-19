import { ArrowRight, Globe, Palette, Smartphone, Sparkles } from "lucide-react";
import Button from "@/components/Atoms/Button";
import SiteFooter from "@/components/Organisms/SiteFooter/SiteFooter";
import { siteFooterData } from "@/data/siteFooterData";

const POPULAR_PAGES = [
  {
    title: "UI/UX Design",
    description: "Research, user flows, prototypes and design systems",
    href: "/services/ui-ux-design-and-digital-experience",
    icon: Palette,
  },
  {
    title: "App Development",
    description: "iOS, Android and web apps built to be used every day",
    href: "/services/application-development",
    icon: Smartphone,
  },
  {
    title: "Website Development",
    description: "Fast, SEO-ready websites, catalogues and online stores",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "AI & Intelligence",
    description: "AI assistants, agents and workflow automation",
    href: "/services/artificial-intelligence",
    icon: Sparkles,
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#04121d] text-white">
      {/* 404 Hero Section */}
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 pt-36 pb-20 sm:px-6 lg:pt-44 lg:pb-28">
        {/* Ambient Glow Effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[620px] rounded-full bg-gradient-to-tr from-teal-700/25 via-cyan-600/20 to-transparent blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px]"
        />

        <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Large Gradient 404 Display */}
          <h1 className="text-7xl font-extrabold tracking-tight sm:text-8xl md:text-9xl bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent">
            404
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
              className="px-5"
            >
              Back to Home
            </Button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter data={siteFooterData} />
    </div>
  );
}

