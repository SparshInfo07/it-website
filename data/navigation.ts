export interface NavChildItem {
  label: string;
  href: string;
  desc?: string;
  iconName?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  children?: NavChildItem[];
}

export interface NavigationData {
  brand: {
    name: string;
    href: string;
  };
  links: NavItem[];
  cta: {
    label: string;
    href: string;
  };
}

export const NAVIGATION_DATA: NavigationData = {
  brand: {
    name: "Sparsh IT",
    href: "/",
  },
  links: [
    {
      label: "Services",
      href: "/services",
      isMegaMenu: true,
      children: [
        {
          label: "UI/UX Design",
          href: "/services/ui-ux-design-and-digital-experience",
          desc: "UX research, user flows, prototypes & design systems",
          iconName: "Palette",
        },
        {
          label: "App Development",
          href: "/services/application-development",
          desc: "iOS, Android & web apps, from MVP to scale",
          iconName: "Smartphone",
        },
        {
          label: "Website Development",
          href: "/services/website-development",
          desc: "Fast, SEO-ready websites, catalogues & online stores",
          iconName: "Globe",
        },
        {
          label: "AI & Intelligence",
          href: "/services/artificial-intelligence",
          desc: "AI assistants, agents & workflow automation",
          iconName: "BrainCircuit",
        },
      ],
    },
    {
      label: "Solutions & Industries",
      href: "/packages",
      isMegaMenu: true,
      children: [
        {
          label: "Silver — Get Online",
          href: "/solutions/silver",
          desc: "Credible digital storefront & direct enquiry capture",
          iconName: "Globe",
        },
        {
          label: "Gold — Manage Online",
          href: "/solutions/gold",
          desc: "Dynamic CMS catalogue & B2B quotation workflow",
          iconName: "Database",
        },
        {
          label: "Premium — Sell & Scale",
          href: "/solutions/premium",
          desc: "Full e-commerce, online checkout & automation",
          iconName: "ShoppingBag",
        },
        {
          label: "Manufacturers & Wholesale",
          href: "/industries/manufacturers-wholesale",
          desc: "B2B product catalogues & bulk RFQ engines",
          iconName: "Truck",
        },
        {
          label: "Retail & E-Commerce",
          href: "/industries/ecommerce",
          desc: "High-converting D2C storefronts & omnichannel retail",
          iconName: "ShoppingBag",
        },
        {
          label: "Service Businesses",
          href: "/industries/service-businesses",
          desc: "Appointment booking & client intake platforms",
          iconName: "CheckCircle2",
        },
        {
          label: "Startups & Founders",
          href: "/industries/startups-founders",
          desc: "Rapid MVP engineering & scalable cloud SaaS",
          iconName: "Code2",
        },
      ],
    },
    {
      label: "Our Work",
      href: "/showcase",
      isMegaMenu: true,
      children: [
        {
          label: "Showcase",
          href: "/showcase",
          desc: "4 signature digital product architectures",
          iconName: "Palette",
        },
        {
          label: "Transformation",
          href: "/transformation",
          desc: "4-chapter offline-to-online transformation journey",
          iconName: "Globe",
        },
        {
          label: "Packages",
          href: "/packages",
          desc: "Compare Silver, Gold & Premium growth packages",
          iconName: "CheckCircle2",
        },
        {
          label: "Selected Work",
          href: "/selected-work",
          desc: "Forme Catalogue, Atelier Commerce & Flow Booking",
          iconName: "Code2",
        },
      ],
    },
    {
      label: "Company",
      href: "/about",
      isMegaMenu: true,
      children: [
        {
          label: "About Us",
          href: "/about",
          desc: "Our story, engineering culture & global presence",
          iconName: "Globe",
        },
        {
          label: "Our Philosophy",
          href: "/our-philosophy",
          desc: "Business-first architecture & zero-friction UX",
          iconName: "BrainCircuit",
        },
        {
          label: "How We Work",
          href: "/how-we-work",
          desc: "Our transparent 4-step delivery methodology",
          iconName: "CheckCircle2",
        },
        {
          label: "FAQs",
          href: "/faqs",
          desc: "Answers on timelines, IP ownership & support",
          iconName: "ShieldCheck",
        },
      ],
    },
    {
      label: "Careers",
      href: "/join-us",
    },
    {
      label: "Contact",
      href: "/contact-us",
    },
  ],
  cta: {
    label: "Start a Project",
    href: "/contact-us",
  },
};
