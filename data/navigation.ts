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
          label: "AI & Intelligent Engineering",
          href: "/services/artificial-intelligence",
          desc: "Autonomous AI agents, generative models & cognitive automation",
          iconName: "BrainCircuit",
        },
        {
          label: "DevSecOps & Platform Engineering",
          href: "/services/devsecops",
          desc: "Cloud infrastructure, automated CI/CD & zero-trust security",
          iconName: "ShieldCheck",
        },
        {
          label: "Application Development & Modernization",
          href: "/services/application-development",
          desc: "Scalable cloud-native apps & enterprise modernization",
          iconName: "Code2",
        },
        {
          label: "Data Engineering & Analytics",
          href: "/services/data-engineering-analytics",
          desc: "Modern data lakehouses, streaming pipelines & intelligence",
          iconName: "Database",
        },
        {
          label: "Mobile Application Development",
          href: "/services/mobile-application-development",
          desc: "High-performance native iOS, Android & hybrid cross-platform",
          iconName: "Smartphone",
        },
        {
          label: "UI/UX Design & Digital Experience",
          href: "/services/ui-ux-design-and-digital-experience",
          desc: "Human-centered design systems, UX research & prototyping",
          iconName: "Palette",
        },
        {
          label: "Quality Engineering & Software Testing",
          href: "/services/quality-engineering-and-software-testing",
          desc: "Automated test suites, continuous QA & reliability audits",
          iconName: "CheckCircle2",
        },
        {
          label: "Global Capability Centers",
          href: "/services/global-capability-centers",
          desc: "Turnkey offshore engineering hubs & dedicated tech pods",
          iconName: "Globe",
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
