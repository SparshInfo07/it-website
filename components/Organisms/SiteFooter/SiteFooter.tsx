import Image from "next/image";
import Link from "next/link";
import type { SiteFooterData } from "@/data/siteFooterData";

type SocialPlatform = SiteFooterData["socials"][number]["platform"];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    );
  }

  if (platform === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function SiteFooter({ data }: { data: SiteFooterData }) {
  return (
    <footer className="relative overflow-hidden rounded-t-[28px] bg-white text-[#111] pt-12 pb-10">
      <div className="container">
        <div className="pointer-events-none absolute left-0 top-4 hidden h-24 w-full md:block">
          <Image
            src={data.decorationImage}
            alt="decorationImage"
            height={400}
            width={400}
            aria-hidden="true"
            className="object-contain"
            style={{ opacity: data.decorationOpacity }}
          />
        </div>

        <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_2.2fr_1fr_1fr] md:gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-start gap-4 md:pl-2">
            <Link href={data.brand.href} aria-label={`${data.brand.name} home`}>
              <Image
                src={data.brand.logo}
                alt={data.brand.name}
                width={180}
                height={66}
                className="h-auto w-auto object-contain"
              />
            </Link>
            {data.brand.tagline && (
              <p className="text-[13px] font-semibold text-[#111] leading-tight">
                {data.brand.tagline}
              </p>
            )}
            {data.brand.description && (
              <p className="text-[13px] text-[#666] leading-relaxed max-w-xs">
                {data.brand.description}
              </p>
            )}
            {/* <div className="flex items-center gap-2 pt-1">
              {data.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f2f5] text-[#242342] transition-colors hover:bg-[#e4e5ed]"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Nav Columns */}
          {data.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="mb-5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#858585]">
                {column.heading}
              </h2>
              <ul
                className={
                  column.links.length > 6
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5"
                    : "space-y-2.5"
                }
              >
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href || ""}
                      className="text-[14px] lg:text-[14.5px] font-medium leading-snug transition-colors hover:text-[#0D9488] block"
                    >
                      {link.label || ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact Details */}
          {data.contact && (
            <div>
              <h2 className="mb-5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#858585]">
                {data.contact.heading}
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    className="hover:text-[#0D9488] text-[14px] font-medium leading-5"
                    href={`mailto:${data.contact.email}`}
                  >
                    {data.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#0D9488] text-[14px] font-medium"
                    href={`tel:${data.contact.phone.replace(/[^+\d]/g, "")}`}
                  >
                    {data.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative z-10 mt-12 border-t border-[#e8e8e8] pt-5 md:mt-16 md:pl-2">
          <div className="flex flex-col gap-4 text-[12px] text-[#777] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px]">{data.copyright}</p>
            <nav aria-label="Legal" className="flex items-center gap-3">
              {data.legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-3">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="h-3 border-l border-[#ddd]"
                    />
                  )}
                  <Link href={link.href} className="hover:text-[#0D9488]">
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
