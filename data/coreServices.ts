import { ASSETS } from "@/constants/images.constants";
import type { EnterpriseAISolutionsData } from "@/data/artificial-intelligence";
import type { ClearApproachData } from "@/data/ui-ux-design-and-digital-experience";
import type { WhyBusinessesChooseData } from "@/data/about";
import type { DifferentIndustriesData } from "@/data/differentIndustries";
import type { FooterData } from "@/data/footerData";

/** The four services Sparsh IT offers. Every menu, footer and listing reads from here. */
export type CoreServiceId = "ui-ux" | "app" | "website" | "ai";

export interface CoreServiceSummary {
  id: CoreServiceId;
  number: string;
  title: string;
  shortTitle: string;
  href: string;
  tagline: string;
  summary: string;
  image: string;
  iconName: string;
}

export const CORE_SERVICES: CoreServiceSummary[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    href: "/services/ui-ux-design-and-digital-experience",
    tagline: "Interfaces people understand at first glance.",
    summary:
      "Research, user flows, wireframes, visual design and design systems for websites, apps and software products.",
    image: ASSETS.SERVICE_LISTING_UX_DESIGN_DIGITAL_EXPERIENCE,
    iconName: "Palette",
  },
  {
    id: "app",
    number: "02",
    title: "App Development",
    shortTitle: "App Development",
    href: "/services/application-development",
    tagline: "Mobile and web apps built to be used every day.",
    summary:
      "iOS, Android and cross-platform apps, customer portals, dashboards and SaaS products, from first release to steady updates.",
    image: ASSETS.SERVICE_LISTING_MOBILE_APPLICATION_DEVELOPMENT,
    iconName: "Smartphone",
  },
  {
    id: "website",
    number: "03",
    title: "Website Development",
    shortTitle: "Website Development",
    href: "/services/website-development",
    tagline: "Fast websites that bring in real enquiries.",
    summary:
      "Business websites, product catalogues, online stores and CMS-managed sites, built for speed, search and conversion.",
    image: ASSETS.SERVICE_LISTING_APPLICATION_DEVELOPMENT_MODERNIZATION,
    iconName: "Globe",
  },
  {
    id: "ai",
    number: "04",
    title: "AI & Intelligence",
    shortTitle: "AI & Intelligence",
    href: "/services/artificial-intelligence",
    tagline: "AI that takes real work off your plate.",
    summary:
      "AI assistants, chatbots, document and data automation, and smart features added to the products you already run.",
    image: ASSETS.SERVICE_LISTING_AI_INTELLIGENT_ENGINEERING,
    iconName: "BrainCircuit",
  },
];

export interface CoreServicePageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
    ctaHref: string;
  };
  offerings: EnterpriseAISolutionsData;
  outcomes: ClearApproachData;
  approach: WhyBusinessesChooseData;
  industries: DifferentIndustriesData;
  cta: FooterData;
}

const contact = "/contact-us";
const art = (name: string) => `/assets/images/core-services/${name}.webp`;

export const CORE_SERVICE_PAGES: Record<CoreServiceId, CoreServicePageData> = {
  /* ------------------------------------------------------------------ UI/UX */
  "ui-ux": {
    hero: {
      title: "UI/UX Design That Makes Products Feel Effortless",
      subtitle:
        "We design websites, apps and software that people understand at first glance, from early research and user flows to polished screens and a design system your developers can build from.",
      backgroundImage: art("ui-hero"),
      ctaText: "Start a Design Project",
      ctaHref: contact,
    },
    offerings: {
      badge: "UI/UX DESIGN",
      heading: "Design That Is Clear, Consistent <br /> and Ready to Build.",
      description:
        "Good design is not decoration. It decides whether a visitor becomes a customer and whether your team enjoys the tools they use. We combine research, structure and visual craft so every screen has a reason to exist.",
      items: [
        {
          id: "ux-research",
          title: "UX Research & Discovery",
          subtitle: "Understand the people before drawing the screens.",
          description:
            "Stakeholder workshops, user interviews and competitor reviews that turn assumptions into a clear brief and design priorities.",
          iconType: ASSETS.USER_EXPERIENCE_RESEARCH_DESIGN,
        },
        {
          id: "user-flows",
          title: "User Flows & Information Architecture",
          subtitle: "Every journey mapped, every step earned.",
          description:
            "Sitemaps, navigation and task flows that help people find what they need and finish what they started, with less friction.",
          iconType: ASSETS.INFORMATION_ARCHITECTURE,
        },
        {
          id: "wireframes-prototypes",
          title: "Wireframes & Clickable Prototypes",
          subtitle: "See it and test it before it is built.",
          description:
            "Low and high-fidelity prototypes you can click through, share with your team and validate with real users before development starts.",
          iconType: ASSETS.WIREFRAMING_INTERACTIVE_PROTOTYPING,
        },
        {
          id: "visual-ui-design",
          title: "Visual & Interface Design",
          subtitle: "A look that matches the quality of your business.",
          description:
            "Typography, colour, layout and motion that express your brand and keep screens calm, readable and easy to act on.",
          iconType: ASSETS.USER_INTERFACE_ARCHITECTURE_DESIGN,
        },
        {
          id: "design-systems",
          title: "Design Systems & UI Kits",
          subtitle: "One source of truth for designers and developers.",
          description:
            "Reusable components, tokens and usage guidelines in Figma, so new pages and features stay consistent and ship faster.",
          iconType: ASSETS.DESIGN_SYSTEMS_COMPONENT_LIBRARIES,
        },
        {
          id: "usability-testing",
          title: "Usability Testing & UX Audits",
          subtitle: "Find what is confusing and fix it.",
          description:
            "Structured reviews and usability sessions on existing products, with a prioritised list of improvements and redesigned screens.",
          iconType: ASSETS.USABILITY_EVALUATION_TESTING,
        },
      ],
    },
    outcomes: {
      heading: "What Better Design <br /> Changes for Your Business.",
      description:
        "Design work is measured by what it improves: more sign-ups, fewer support questions and products your team can grow without starting over.",
      cards: [
        {
          id: "higher-conversion",
          title: "Higher Conversion",
          description:
            "Clear hierarchy and focused calls to action turn more visitors into enquiries, sign-ups and sales.",
          href: contact,
          ctaText: "Discuss your goals",
        },
        {
          id: "easier-adoption",
          title: "Easier Adoption",
          description:
            "Intuitive flows mean customers and staff learn your product faster and need less hand-holding.",
          href: contact,
          ctaText: "Discuss your goals",
        },
        {
          id: "consistent-brand",
          title: "A Consistent Brand",
          description:
            "A shared design system keeps your website, app and dashboards looking and behaving like one product.",
          href: contact,
          ctaText: "Discuss your goals",
        },
        {
          id: "faster-builds",
          title: "Faster, Cheaper Builds",
          description:
            "Developer-ready specs and components remove guesswork, so engineering spends time building rather than redesigning.",
          href: contact,
          ctaText: "Discuss your goals",
        },
      ],
    },
    approach: {
      heading: "How We Design with You.",
      cards: [
        { id: "discover", number: "01", title: "Discover", description: "We learn your business, your users and what success looks like, then agree a focused design brief.", icon: ASSETS.EXPERIENCE_STRATEGY_USER_INTELLIGENCE },
        { id: "structure", number: "02", title: "Structure", description: "Sitemaps, user flows and wireframes set out what goes where before any visual design begins.", icon: ASSETS.INFORMATION_ARCHITECTURE_JOURNEY_ORCHESTRATION },
        { id: "design", number: "03", title: "Design", description: "High-fidelity screens and an interactive prototype you can click through and approve.", icon: ASSETS.INTERFACE_DESIGN_INTERACTIVE_PROTOTYPING },
        { id: "systemise", number: "04", title: "Systemise", description: "Components, styles and rules are packaged into a design system that scales with your product.", icon: ASSETS.DESIGN_SYSTEMS_COMPONENT_ARCHITECTURE },
        { id: "validate", number: "05", title: "Validate", description: "Usability checks and accessibility reviews catch problems while they are still cheap to fix.", icon: ASSETS.USABILITY_INCLUSIVE_EXPERIENCE_EVALUATION },
        { id: "handoff", number: "06", title: "Hand Off & Support", description: "Developer-ready files, and the same designers on call while your product is built.", icon: ASSETS.DESIGN_ENGINEERING_COLLABORATION },
      ],
    },
    industries: {
      heading: "Design Shaped Around <br /> How Your Customers Buy.",
      industries: [
        { id: "manufacturing", name: "Manufacturing & Wholesale", tagline: "Catalogues and quotation journeys that let trade buyers find products and request prices without a phone call.", image: art("ui-manufacturing"), alt: "UI/UX design for manufacturers and wholesalers", href: "/industries/manufacturers-wholesale" },
        { id: "retail", name: "Retail & E-Commerce", tagline: "Product pages, filters and checkouts designed to reduce drop-off and lift order value.", image: art("ui-retail"), alt: "UI/UX design for retail and e-commerce", href: "/industries/ecommerce" },
        { id: "healthcare", name: "Healthcare & Clinics", tagline: "Calm, accessible booking and patient experiences that work for every age group.", image: art("ui-healthcare"), alt: "UI/UX design for healthcare", href: "/industries/healthcare" },
        { id: "education", name: "Education & Training", tagline: "Learning platforms and course sites that are easy to navigate and keep students engaged.", image: art("ui-education"), alt: "UI/UX design for education", href: "/industries/education" },
        { id: "fintech", name: "Finance & Fintech", tagline: "Dashboards and onboarding flows that make complex numbers feel simple and trustworthy.", image: art("ui-fintech"), alt: "UI/UX design for finance and fintech", href: "/industries/banking" },
      ],
    },
    cta: {
      title: "Good Products Start <br /> with Good Design.",
      description: "Share what you are building and we will suggest the right design scope, from a quick UX audit to a full design system.",
      primaryLabel: "Start a Design Project",
      primaryLink: contact,
      secondaryLabel: "See Our Work",
      secondaryLink: "/showcase",
      backgroundImage: art("ui-cta"),
    },
  },

  /* ---------------------------------------------------------------- APPS */
  app: {
    hero: {
      title: "Mobile & Web Apps Built to Be Used Every Day",
      subtitle:
        "From a first MVP to a growing product, we design and build iOS, Android and web apps with clean code, solid back ends and a launch plan that does not end on day one.",
      backgroundImage: art("app-hero"),
      ctaText: "Discuss Your App",
      ctaHref: contact,
    },
    offerings: {
      badge: "APP DEVELOPMENT",
      heading: "Apps for Your Customers, <br /> Your Team and Your Next Idea.",
      description:
        "Whether it is a customer-facing app, an internal tool or a new SaaS product, we handle the full build: product planning, design, front end, back end, testing and release.",
      items: [
        {
          id: "ios-android",
          title: "iOS & Android Apps",
          subtitle: "Native quality on every phone.",
          description:
            "Smooth, reliable mobile apps that follow platform standards and are published and maintained on the App Store and Google Play.",
          iconType: ASSETS.MOBILE_APP_NATIVE_IOS,
        },
        {
          id: "cross-platform",
          title: "Cross-Platform Apps",
          subtitle: "One codebase, both platforms.",
          description:
            "Flutter and React Native apps that reach iOS and Android together, cutting cost and time without cutting quality.",
          iconType: ASSETS.MOBILE_APP_CROSS_PLATFORM,
        },
        {
          id: "web-apps",
          title: "Web Apps & SaaS Products",
          subtitle: "Software that runs in the browser.",
          description:
            "Customer portals, booking platforms and subscription products built with modern frameworks and ready to scale.",
          iconType: ASSETS.CUSTOM_APP_FULL_STACK,
        },
        {
          id: "dashboards",
          title: "Dashboards & Internal Tools",
          subtitle: "Run the business from one screen.",
          description:
            "Admin panels, order and inventory tools and reporting dashboards that replace spreadsheets and scattered messages.",
          iconType: ASSETS.MOBILE_APP_ENTERPRISE_MOBILITY,
        },
        {
          id: "backend-apis",
          title: "Back End, APIs & Integrations",
          subtitle: "The engine behind the app.",
          description:
            "Secure APIs, databases, logins, payments and connections to the tools you already use, such as CRMs, ERPs and WhatsApp.",
          iconType: ASSETS.MOBILE_APP_API_BACKEND,
        },
        {
          id: "mvp",
          title: "MVPs for Startups",
          subtitle: "Launch, learn, then grow.",
          description:
            "A focused first version that tests your idea with real users quickly, built on foundations you will not have to throw away.",
          iconType: ASSETS.MOBILE_APP_ARCHITECTURE,
        },
      ],
    },
    outcomes: {
      heading: "Built to Launch. <br /> Built to Last.",
      description:
        "An app is only valuable if people keep using it. We build for performance, security and easy updates from the very first sprint.",
      cards: [
        { id: "fast-launch", title: "Faster Time to Market", description: "Two-week sprints with a working demo at the end of each one, so you see progress and can change direction early.", href: contact, ctaText: "Plan your app" },
        { id: "smooth-experience", title: "A Smooth Experience", description: "Quick load times, offline-friendly patterns and polished interactions that earn good reviews.", href: contact, ctaText: "Plan your app" },
        { id: "secure", title: "Secure by Default", description: "Proper authentication, encrypted data and permission controls are built in, not bolted on later.", href: contact, ctaText: "Plan your app" },
        { id: "room-to-grow", title: "Room to Grow", description: "Clean architecture and documentation make new features cheaper and keep you free to scale.", href: contact, ctaText: "Plan your app" },
      ],
    },
    approach: {
      heading: "From Idea to App Store.",
      cards: [
        { id: "plan", number: "01", title: "Product Planning", description: "We shape the idea into a clear feature list, user stories and a realistic release plan.", icon: ASSETS.MOBILE_APP_WHY_ARCHITECTURE },
        { id: "design", number: "02", title: "UX & Interface Design", description: "Flows and screens are designed and prototyped before a single line of code is written.", icon: ASSETS.MOBILE_APP_WHY_NATIVE },
        { id: "build", number: "03", title: "Agile Development", description: "Front end and back end are built in short sprints with a demo you can try every two weeks.", icon: ASSETS.MOBILE_APP_WHY_CROSS_PLATFORM },
        { id: "integrate", number: "04", title: "Integrations", description: "Payments, maps, notifications, analytics and your existing systems are connected and tested.", icon: ASSETS.MOBILE_APP_WHY_API_BACKEND },
        { id: "test", number: "05", title: "Testing & Security", description: "Functional, device and performance testing, plus security checks, before every release.", icon: ASSETS.MOBILE_APP_WHY_SECURITY_PERFORMANCE },
        { id: "launch", number: "06", title: "Launch & Support", description: "Store submission, monitoring and a support plan for updates, fixes and new features.", icon: ASSETS.MOBILE_APP_WHY_QUALITY_LIFECYCLE },
      ],
    },
    industries: {
      heading: "Apps Built Around <br /> the Way You Work.",
      industries: [
        { id: "manufacturing", name: "Manufacturing & Wholesale", tagline: "Sales-rep ordering apps, dealer portals and stock tools that keep the warehouse and the field in sync.", image: art("app-manufacturing"), alt: "App development for manufacturers and wholesalers", href: "/industries/manufacturers-wholesale" },
        { id: "retail", name: "Retail & E-Commerce", tagline: "Shopping apps, loyalty programmes and order tracking that bring customers back.", image: art("app-retail"), alt: "App development for retail and e-commerce", href: "/industries/ecommerce" },
        { id: "healthcare", name: "Healthcare & Clinics", tagline: "Appointment booking, reminders and patient portals with sensible privacy safeguards.", image: art("app-healthcare"), alt: "App development for healthcare", href: "/industries/healthcare" },
        { id: "education", name: "Education & Training", tagline: "Learning apps, class scheduling and parent or student portals that work on any device.", image: art("app-education"), alt: "App development for education", href: "/industries/education" },
        { id: "fintech", name: "Finance & Fintech", tagline: "Secure wallets, lending journeys and account dashboards built for trust.", image: art("app-fintech"), alt: "App development for finance and fintech", href: "/industries/banking" },
      ],
    },
    cta: {
      title: "Have an App Idea? <br /> Let Us Build It Properly.",
      description: "Tell us what your app needs to do and we will come back with a clear plan, timeline and estimate.",
      primaryLabel: "Discuss Your App",
      primaryLink: contact,
      secondaryLabel: "How We Work",
      secondaryLink: "/how-we-work",
      backgroundImage: art("app-cta"),
    },
  },

  /* ------------------------------------------------------------- WEBSITES */
  website: {
    hero: {
      title: "Websites That Work as Hard as You Do",
      subtitle:
        "Fast, search-friendly websites, product catalogues and online stores that look the part, bring in qualified enquiries and are easy for your team to update.",
      backgroundImage: art("web-hero"),
      ctaText: "Plan Your Website",
      ctaHref: contact,
    },
    offerings: {
      badge: "WEBSITE DEVELOPMENT",
      heading: "From a First Website <br /> to a Full Online Store.",
      description:
        "Your website is often the first conversation a customer has with you. We design and build sites that load instantly, rank well and make the next step obvious, whether that is a call, a quote request or a checkout.",
      items: [
        {
          id: "business-websites",
          title: "Business & Corporate Websites",
          subtitle: "A credible first impression.",
          description:
            "Custom-designed sites that explain what you do clearly and turn visitors into calls, WhatsApp chats and enquiries.",
          iconType: ASSETS.CUSTOM_APP_WEB_ARCHITECTURE,
        },
        {
          id: "catalogues",
          title: "Product Catalogues & Quotation Sites",
          subtitle: "Show more. Quote faster.",
          description:
            "Searchable product ranges with specifications, images and bulk quote requests that land straight in your inbox.",
          iconType: ASSETS.CUSTOM_APP_ENTERPRISE_PLATFORM,
        },
        {
          id: "ecommerce",
          title: "E-Commerce & Online Stores",
          subtitle: "Sell around the clock.",
          description:
            "Online stores with payments, shipping, discounts and order management, built to convert on mobile.",
          iconType: ASSETS.CUSTOM_APP_CUSTOM_SOFTWARE,
        },
        {
          id: "cms",
          title: "CMS & Admin Panels",
          subtitle: "Update it yourself.",
          description:
            "Edit pages, products, prices and images without calling a developer, with roles for every member of your team.",
          iconType: ASSETS.CUSTOM_APP_API_INTEGRATION,
        },
        {
          id: "seo-performance",
          title: "SEO & Performance",
          subtitle: "Be found, then load instantly.",
          description:
            "Technical SEO, structured data and Core Web Vitals tuning so search engines and visitors both get a fast, clean site.",
          iconType: ASSETS.CUSTOM_APP_PERFORMANCE,
        },
        {
          id: "redesign",
          title: "Redesigns & Migrations",
          subtitle: "A fresh start without losing ground.",
          description:
            "Modernise an outdated site, move platforms safely and keep your search rankings and content intact.",
          iconType: ASSETS.CUSTOM_APP_LEGACY_MODERNIZATION,
        },
      ],
    },
    outcomes: {
      heading: "A Website That <br /> Earns Its Keep.",
      description:
        "We measure a website by what it brings in. Every build is planned around the action you most want a visitor to take.",
      cards: [
        { id: "more-enquiries", title: "More Qualified Enquiries", description: "Clear messaging, strong calls to action and simple forms turn more traffic into real conversations.", href: contact, ctaText: "Plan your website" },
        { id: "found-on-search", title: "Found on Search", description: "Clean structure, fast pages and on-page SEO help the right customers find you on Google.", href: contact, ctaText: "Plan your website" },
        { id: "self-managed", title: "Easy to Manage", description: "A simple CMS means your team can keep content fresh without waiting on a developer.", href: contact, ctaText: "Plan your website" },
        { id: "ready-to-grow", title: "Ready to Grow", description: "Start with a website and add a catalogue, CMS or online store later without rebuilding.", href: "/packages", ctaText: "See packages" },
      ],
    },
    approach: {
      heading: "How We Build Your Website.",
      cards: [
        { id: "brief", number: "01", title: "Brief & Goals", description: "We agree who the site is for, what it must achieve and which pages and features it needs.", icon: ASSETS.SOLUTIONS_ACCORDION_ENTERPRISE_ARCH },
        { id: "content", number: "02", title: "Structure & Content", description: "Sitemap, page outlines and copy guidance so every page has a clear job.", icon: ASSETS.SOLUTIONS_ACCORDION_API_INTEGRATION },
        { id: "design", number: "03", title: "Design", description: "A custom look for desktop and mobile, shared as a clickable prototype for your approval.", icon: ASSETS.SOLUTIONS_ACCORDION_FULL_STACK },
        { id: "build", number: "04", title: "Development", description: "A fast, responsive build with your CMS, forms, WhatsApp and analytics connected.", icon: ASSETS.SOLUTIONS_ACCORDION_MICROSERVICES },
        { id: "qa", number: "05", title: "Testing & SEO", description: "Cross-device testing, speed tuning and technical SEO checks before anything goes live.", icon: ASSETS.SOLUTIONS_ACCORDION_QUALITY_PERFORMANCE },
        { id: "launch", number: "06", title: "Launch & Care", description: "Go-live, training for your team and an optional care plan for updates and backups.", icon: ASSETS.SOLUTIONS_ACCORDION_LEGACY_RE_ENGINEERING },
      ],
    },
    industries: {
      heading: "Websites Made for <br /> Your Kind of Customer.",
      industries: [
        { id: "manufacturing", name: "Manufacturing & Wholesale", tagline: "Digital catalogues with specifications and bulk quotation requests for trade buyers.", image: art("web-manufacturing"), alt: "Websites for manufacturers and wholesalers", href: "/industries/manufacturers-wholesale" },
        { id: "retail", name: "Retail & E-Commerce", tagline: "Collection pages and online stores that look premium and are simple to shop on a phone.", image: art("web-retail"), alt: "Websites for retail and e-commerce", href: "/industries/ecommerce" },
        { id: "healthcare", name: "Healthcare & Clinics", tagline: "Trustworthy clinic and practice websites with services, doctors and online booking.", image: art("web-healthcare"), alt: "Websites for healthcare", href: "/industries/healthcare" },
        { id: "education", name: "Education & Training", tagline: "School, institute and course websites with admissions forms and easy-to-update news.", image: art("web-education"), alt: "Websites for education", href: "/industries/education" },
        { id: "fintech", name: "Finance & Professional Services", tagline: "Clear, credible sites for firms whose clients need to trust them before they call.", image: art("web-fintech"), alt: "Websites for finance and professional services", href: "/industries/banking" },
      ],
    },
    cta: {
      title: "Your Next Customer <br /> Is Looking for You Online.",
      description: "Start with a website and grow into a catalogue, CMS or online store. We will scope the right package for you.",
      primaryLabel: "Plan Your Website",
      primaryLink: contact,
      secondaryLabel: "View Packages",
      secondaryLink: "/packages",
      backgroundImage: art("web-cta"),
    },
  },

  /* ------------------------------------------------------------------- AI */
  ai: {
    hero: {
      title: "AI & Intelligence That Does Real Work",
      subtitle:
        "We add practical AI to your business: assistants that answer customers, automations that handle paperwork and smart features inside the websites and apps you already run.",
      backgroundImage: art("ai-hero"),
      ctaText: "Explore AI for Your Business",
      ctaHref: contact,
    },
    offerings: {
      badge: "AI & INTELLIGENCE",
      heading: "Practical AI, <br /> Built into How You Work.",
      description:
        "AI is most useful when it quietly removes busywork. We start with the tasks that cost your team the most time, then design AI that is accurate, safe and connected to your real data and tools.",
      items: [
        {
          id: "assistants-chatbots",
          title: "AI Assistants & Chatbots",
          subtitle: "Answers in seconds, any time of day.",
          description:
            "Website and WhatsApp assistants trained on your products and policies that answer questions, qualify leads and hand over to a person when needed.",
          iconType: ASSETS.AI_GENERATIVE_AI,
        },
        {
          id: "ai-agents",
          title: "AI Agents & Workflow Automation",
          subtitle: "Let software handle the repetitive steps.",
          description:
            "Agents that triage enquiries, draft quotations, update records and move work between your tools, with human approval where it matters.",
          iconType: ASSETS.AI_AGENTS_DIGITAL,
        },
        {
          id: "document-ai",
          title: "Document & Data Extraction",
          subtitle: "From PDFs and photos to clean data.",
          description:
            "Read invoices, purchase orders, forms and IDs automatically and send the right fields straight into your system.",
          iconType: ASSETS.AI_READY_DATA,
        },
        {
          id: "knowledge-search",
          title: "Knowledge Search (RAG)",
          subtitle: "Ask your own documents a question.",
          description:
            "Private search over manuals, catalogues and internal documents that gives grounded answers with sources.",
          iconType: ASSETS.AI_RETRIEVAL_AUGMENTED,
        },
        {
          id: "ai-features",
          title: "AI Features in Your Product",
          subtitle: "Make your app smarter.",
          description:
            "Recommendations, smart search, summaries and content generation added to new or existing websites and apps.",
          iconType: ASSETS.ENTERPRISE_INTEGRATION,
        },
        {
          id: "insights",
          title: "Predictive Insights & Analytics",
          subtitle: "See what is coming next.",
          description:
            "Forecast demand, spot unusual activity and surface the numbers that matter in a simple dashboard.",
          iconType: ASSETS.AI_ENTERPRISE_AI,
        },
      ],
    },
    outcomes: {
      heading: "AI Measured in <br /> Hours Saved.",
      description:
        "We focus on clear, measurable wins first, then build on what works. No hype, no black boxes.",
      cards: [
        { id: "time-saved", title: "Hours Back Every Week", description: "Automate the copying, sorting and replying that eats into your team's day.", href: contact, ctaText: "Find your first use case" },
        { id: "faster-response", title: "Faster Customer Response", description: "Instant, accurate answers mean fewer lost leads and happier customers.", href: contact, ctaText: "Find your first use case" },
        { id: "better-decisions", title: "Better Decisions", description: "Turn scattered data into clear insight you can act on today.", href: contact, ctaText: "Find your first use case" },
        { id: "safe-ai", title: "Safe and in Your Control", description: "Private data stays private, with guardrails, audit logs and a person in the loop for important actions.", href: contact, ctaText: "Find your first use case" },
      ],
    },
    approach: {
      heading: "How We Bring AI <br /> into Your Business.",
      cards: [
        { id: "find", number: "01", title: "Find the Opportunity", description: "We review your workflows and pick the tasks where AI saves the most time or money.", icon: ASSETS.AI_MACHINE_LEARNING_PREDICTIVE_INTELLIGENCE },
        { id: "data", number: "02", title: "Prepare Your Data", description: "Documents, catalogues and records are cleaned and connected so the AI has the right context.", icon: ASSETS.AI_ENTERPRISE_DATA_KNOWLEDGE_INTEGRATION },
        { id: "prototype", number: "03", title: "Prototype Quickly", description: "A working pilot in weeks, tested on your real examples before wider roll-out.", icon: ASSETS.AI_GENERATIVE_FOUNDATION_MODEL_ENGINEERING },
        { id: "integrate", number: "04", title: "Integrate", description: "The AI is connected to your website, app, CRM or WhatsApp so it fits how your team already works.", icon: ASSETS.AI_AGENTIC_ARCHITECTURE_ORCHESTRATION },
        { id: "guardrails", number: "05", title: "Guardrails & Privacy", description: "Access controls, review steps and monitoring keep answers accurate and data protected.", icon: ASSETS.AI_RESPONSIBLE_SECURITY_GOVERNANCE },
        { id: "improve", number: "06", title: "Measure & Improve", description: "We track accuracy and time saved, then tune the system as your business changes.", icon: ASSETS.AI_LIFECYCLE_ENGINEERING_EVALUATION },
      ],
    },
    industries: {
      heading: "AI Use Cases <br /> for Your Industry.",
      industries: [
        { id: "manufacturing", name: "Manufacturing & Wholesale", tagline: "Auto-draft quotations from buyer emails, read purchase orders and forecast stock demand.", image: art("ai-manufacturing"), alt: "AI for manufacturers and wholesalers", href: "/industries/manufacturers-wholesale" },
        { id: "retail", name: "Retail & E-Commerce", tagline: "Product recommendations, smart search and a shopping assistant that answers sizing and delivery questions.", image: art("ai-retail"), alt: "AI for retail and e-commerce", href: "/industries/ecommerce" },
        { id: "healthcare", name: "Healthcare & Clinics", tagline: "Appointment assistants, intake form processing and summaries that save front-desk time.", image: art("ai-healthcare"), alt: "AI for healthcare", href: "/industries/healthcare" },
        { id: "education", name: "Education & Training", tagline: "Course assistants, auto-generated quizzes and quick answers to admissions questions.", image: art("ai-education"), alt: "AI for education", href: "/industries/education" },
        { id: "fintech", name: "Finance & Fintech", tagline: "Document checks, anomaly alerts and assistants that explain accounts in plain language.", image: art("ai-fintech"), alt: "AI for finance and fintech", href: "/industries/banking" },
      ],
    },
    cta: {
      title: "Put AI to Work <br /> Where It Counts.",
      description: "Tell us which tasks slow your team down. We will show you what AI can realistically take on, and what it will save.",
      primaryLabel: "Explore AI for Your Business",
      primaryLink: contact,
      secondaryLabel: "See All Services",
      secondaryLink: "/services",
      backgroundImage: art("ai-cta"),
    },
  },
};
