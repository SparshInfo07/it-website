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
    // {
    //   label: "Industries",
    //   href: "/industries",
    //   isMegaMenu: true,
    //   children: [
    //     {
    //       label: "Banking & Financial Services",
    //       href: "/industries/banking",
    //       iconName: "Landmark",
    //     },
    //     {
    //       label: "Retail & E-Commerce",
    //       href: "/industries/ecommerce",
    //       iconName: "ShoppingBag",
    //     },
    //     {
    //       label: "Healthcare & Life Sciences",
    //       href: "/industries/healthcare",
    //       iconName: "HeartPulse",
    //     },
    //     {
    //       label: "Travel & Transportation",
    //       href: "/industries/logistics",
    //       iconName: "Truck",
    //     },
    //     {
    //       label: "Hospitality & Leisure",
    //       href: "/industries/hospitality",
    //       iconName: "Hotel",
    //     },
    //     {
    //       label: "Education & Learning",
    //       href: "/industries/education",
    //       iconName: "GraduationCap",
    //     },
    //   ],
    // },
    {
      label: "About Us",
      href: "/about",
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
