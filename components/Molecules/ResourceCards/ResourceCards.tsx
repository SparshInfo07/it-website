import Link from "next/link";
import Image from "next/image";

export interface ResourceCardItem {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  icon: string;
}

interface ResourceCardsProps {
  title: string;
  description?: string;
  cards: ResourceCardItem[];
  className?: string;
}

export default function ResourceCards({
  title,
  description,
  cards,
  className = "",
}: ResourceCardsProps) {
  return (
    <section
      className={`bg-[#fafafa] px-5 py-14 sm:px-8 sm:py-16 lg:py-20 ${className}`}
    >
      <div className="mx-auto container">
        <header className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-medium tracking-tight text-[#111] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-3 max-w-2xl text-base leading-6 text-[#858585] sm:text-base">
              {description}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            return (
              <Link
                key={`${card.eyebrow || ""}-${card.title}`}
                href={card.href || "#"}
                className="group relative flex aspect-auto flex-col overflow-hidden rounded-lg border border-[#e8e8e8] bg-white p-4 text-[#111] transition-all duration-300 hover:border-[#276fb1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D9488] sm:p-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-[#276fb1] via-[#2377b5] to-[#174078] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                />
                <div className="relative z-10 flex flex-col items-start gap-2.5">
                  <Image
                    src={card.icon || ""}
                    alt={card.title}
                    height={38}
                    width={38}
                    className="transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert group-focus-visible:brightness-0 group-focus-visible:invert"
                  />
                  {card.eyebrow ? (
                    <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#777] transition-colors duration-300 group-hover:text-white/90 group-focus-visible:text-white/90">
                      {card.eyebrow}
                    </span>
                  ) : (
                    <div className="h-0.5 w-10 bg-[#38bdf8] transition-colors duration-300 group-hover:bg-white" />
                  )}
                </div>
                <h3
                  className={`relative z-10 text-[24px] font-medium transition-colors ${
                    card.eyebrow ? "mt-14" : "mt-6"
                  }`}
                >
                  {card.title}
                </h3>
                <div className="relative z-10 mt-3 border-t border-[#ededed] transition-colors duration-300 group-hover:border-white/30 group-focus-visible:border-white/30" />
                <p className="relative z-10 mt-3 text-[18px] leading-[1.45] text-[#7B7B7B] transition-colors duration-300 group-hover:text-white/90 group-focus-visible:text-white/90">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
