export interface SinglePageDeliverable {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface SinglePageWorkflowStep {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

export interface SinglePageFaq {
  question: string;
  answer: string;
}

export interface SinglePageMetric {
  value: string;
  label: string;
}

export interface SinglePageConfig {
  slug: string;
  category: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  heroImage: string;
  heroBadge: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  metrics: SinglePageMetric[];
  overviewEyebrow: string;
  overviewTitle: string;
  overviewLead: string;
  deliverables: SinglePageDeliverable[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSteps: SinglePageWorkflowStep[];
  galleryCards?: {
    tag: string;
    title: string;
    description: string;
    image: string;
    href?: string;
  }[];
  faqs: SinglePageFaq[];
}

export const SINGLE_PAGES_DATA: Record<string, SinglePageConfig> = {
  showcase: {
    slug: "showcase",
    category: "OUR WORK",
    eyebrow: "INTERACTIVE PRODUCT SHOWCASE",
    title: "Not just pretty.",
    titleAccent: "Purposefully built.",
    subtitle:
      "Explore four signature digital product architectures engineered by Sparsh IT for real-world businesses—from 24/7 digital showrooms and B2B quotation engines to unified owner dashboards.",
    heroImage: "/images/curated/showcase-01.jpg",
    heroBadge: "04 SIGNATURE ARCHITECTURES",
    primaryCtaText: "Start a Project",
    secondaryCtaText: "Explore Packages",
    secondaryCtaHref: "/packages",
    metrics: [
      { value: "4.2×", label: "Faster enquiry-to-quotation velocity" },
      { value: "99/100", label: "Core Web Vitals & mobile speed target" },
      { value: "100%", label: "Custom-scoped around your business workflow" },
      { value: "24/7", label: "Always-on digital showroom & lead capture" },
    ],
    overviewEyebrow: "EXPERIENCE ARCHITECTURES",
    overviewTitle: "Four concepts. One for each service we offer.",
    overviewLead:
      "Every business reaches a point where scattered WhatsApp messages, static PDF catalogues, and manual spreadsheets slow down growth. These four interactive blueprints demonstrate how we turn everyday friction into calm, high-converting software.",
    deliverables: [
      {
        tag: "WEBSITE DEVELOPMENT",
        title: "The store that never closes.",
        description:
          "A high-craft digital product catalogue with structured specification filters, collection storytelling, and direct quotation capture.",
        bullets: [
          "Multi-category product browsing & instant search",
          "Rich technical specification & finish selectors",
          "Direct WhatsApp & structured enquiry routing",
        ],
      },
      {
        tag: "APP DEVELOPMENT",
        title: "A calmer way to run the day.",
        description:
          "One centralized admin workspace for managing products, inbound enquiries, and pending customer quotations without developer dependency.",
        bullets: [
          "Real-time SKU, media, and content updates",
          "Unified lead & RFQ pipeline status tracking",
          "Actionable weekly enquiry & product analytics",
        ],
      },
      {
        tag: "AI & INTELLIGENCE",
        title: "From request to real business.",
        description:
          "A dedicated B2B Request-for-Quotation (RFQ) workflow that captures buyer quantities, custom finishes, and delivery locations in one step.",
        bullets: [
          "Multi-item bulk quotation cart builder",
          "Custom quantity, finish, and dispatch notes",
          "One-click seller review and quote response",
        ],
      },
    ],
    workflowEyebrow: "FROM CONCEPT TO PRODUCTION",
    workflowTitle: "How we adapt these architectures to your business.",
    workflowSteps: [
      {
        step: "01",
        title: "Audit Your Product & Sales Flow",
        description: "We map how buyers currently discover your products, ask for prices, and place orders.",
        outcome: "Tailored Architecture Blueprint",
      },
      {
        step: "02",
        title: "Brand & Interface Prototyping",
        description: "We design interactive screens tailored to your brand identity, SKUs, and customer journey.",
        outcome: "Clickable UI/UX Prototype",
      },
      {
        step: "03",
        title: "Precision Full-Stack Engineering",
        description: "We engineer the storefront, admin CMS, and enquiry workflows with enterprise-grade speed.",
        outcome: "Production-Ready Platform",
      },
      {
        step: "04",
        title: "Launch & Team Onboarding",
        description: "We deploy to cloud infrastructure and train your team to manage products effortlessly.",
        outcome: "Self-Manageable Growth Engine",
      },
    ],
    galleryCards: [
      {
        tag: "WEBSITE DEVELOPMENT",
        title: "The store that never closes.",
        description: "A product catalogue website with enquiries and a quotation journey built in.",
        image: "/images/curated/showcase-01.jpg",
        href: "/selected-work",
      },
      {
        tag: "APP DEVELOPMENT",
        title: "A calmer way to run the day.",
        description: "Products, enquiries and orders managed from one web app and dashboard.",
        image: "/images/curated/showcase-02.jpg",
        href: "/selected-work",
      },
      {
        tag: "AI & INTELLIGENCE",
        title: "From request to real business.",
        description: "AI reads each buyer request and drafts the quotation for you to approve.",
        image: "/images/curated/showcase-03.jpg",
        href: "/selected-work",
      },
      {
        tag: "UI/UX DESIGN",
        title: "Your next chapter begins here.",
        description: "A familiar offline business redesigned as a simple, modern digital experience.",
        image: "/images/curated/showcase-04.jpg",
        href: "/transformation",
      },
    ],
    faqs: [
      {
        question: "Can we combine multiple showcase concepts into one project?",
        answer:
          "Yes. Most clients combine the Digital Showroom with the Unified Admin Workspace (our Gold path) or add full payment and inventory automation (our Premium path).",
      },
      {
        question: "Are these templates or custom-engineered solutions?",
        answer:
          "Every solution is custom-architected around your brand identity, product data model, and sales workflow—never a rigid off-the-shelf theme.",
      },
      {
        question: "How long does it take to launch a showcase solution?",
        answer:
          "A focused Silver storefront typically launches in 3–5 weeks, while Gold and Premium platforms with custom CMS, RFQ workflows, or commerce take 6–12 weeks depending on scope.",
      },
    ],
  },

  transformation: {
    slug: "transformation",
    category: "OUR WORK",
    eyebrow: "SIGNATURE TRANSFORMATION STORY",
    title: "From offline.",
    titleAccent: "To everything possible.",
    subtitle:
      "Follow the four-stage evolution of a traditional business as it moves from scattered folders, PDF catalogues, and missed calls to a connected digital operation.",
    heroImage: "/images/curated/transform-01.jpg",
    heroBadge: "04-CHAPTER EVOLUTION",
    primaryCtaText: "Start Your Transformation",
    secondaryCtaText: "Compare Packages",
    secondaryCtaHref: "/packages",
    metrics: [
      { value: "-68%", label: "Reduction in manual enquiry handling" },
      { value: "+3.4×", label: "Increase in qualified buyer leads" },
      { value: "100%", label: "Owner control over products & pricing" },
      { value: "3-Stage", label: "Modular upgrade path (Silver → Gold → Premium)" },
    ],
    overviewEyebrow: "THE 4 CHAPTERS OF DIGITAL EVOLUTION",
    overviewTitle: "One business. Transformed step by step.",
    overviewLead:
      "Digital transformation doesn't mean replacing how your business works overnight. It means removing the invisible barriers between your products and your buyers, one practical chapter at a time.",
    deliverables: [
      {
        tag: "CHAPTER 01 — THE STARTING POINT",
        title: "A great business. An invisible presence.",
        description:
          "Before transformation, products live in scattered folders and 48MB PDFs, enquiries arrive unstructured across WhatsApp and phone calls, and every buyer needs a manual explanation.",
        bullets: [
          "Eliminate heavy PDF catalogue attachments",
          "Stop losing leads in missed calls & chat threads",
          "Create an authoritative 24/7 digital home",
        ],
      },
      {
        tag: "CHAPTER 02 — GET DISCOVERED",
        title: "Your catalogue, ready to explore.",
        description:
          "Give buyers one lightning-fast digital showroom to filter specifications, compare collections, view high-res finishes, and take immediate action.",
        bullets: [
          "Structured collections & category filtering",
          "Technical specs, dimensions & material swatches",
          "Search-engine optimized product discovery",
        ],
      },
      {
        tag: "CHAPTER 03 & 04 — QUOTE & OPERATE",
        title: "Smarter quotations & unified control.",
        description:
          "Turn scattered chats into structured RFQ requests with quantities and SKUs, and manage products, orders, payments, and inventory from one calm owner workspace.",
        bullets: [
          "Structured bulk RFQ cart & 1-click quote approval",
          "Self-service CMS for instant product & price edits",
          "Connected orders, payments & inventory tracking",
        ],
      },
    ],
    workflowEyebrow: "TRANSFORMATION ROADMAP",
    workflowTitle: "Four chapters that scale at your pace.",
    workflowSteps: [
      {
        step: "01",
        title: "Chapter 01: Establish Digital Visibility",
        description: "Replace offline friction with a credible, search-ready brand and product presence.",
        outcome: "Discoverable Brand Flagship",
      },
      {
        step: "02",
        title: "Chapter 02: Launch Interactive Showroom",
        description: "Organize every SKU, specification, and collection into an effortless browsing experience.",
        outcome: "24/7 Digital Catalogue",
      },
      {
        step: "03",
        title: "Chapter 03: Automate Buyer Quotations",
        description: "Capture structured RFQ requests with quantities, finishes, and delivery terms.",
        outcome: "4.2× Faster Quote Velocity",
      },
      {
        step: "04",
        title: "Chapter 04: Centralize Daily Operations",
        description: "Run content updates, lead pipelines, payments, and stock from one workspace.",
        outcome: "Connected Digital Operation",
      },
    ],
    galleryCards: [
      {
        tag: "CHAPTER 01",
        title: "The Starting Point",
        description: "Moving beyond scattered folders, heavy PDFs, and manual phone explanations.",
        image: "/images/curated/transform-01.jpg",
      },
      {
        tag: "CHAPTER 02",
        title: "Get Discovered",
        description: "Your complete product catalogue organized for instant buyer exploration.",
        image: "/images/curated/transform-02.jpg",
      },
      {
        tag: "CHAPTER 03",
        title: "Make It Simple",
        description: "Structured B2B quotation requests with quantities, finishes, and 1-click approval.",
        image: "/images/curated/transform-03.jpg",
      },
      {
        tag: "CHAPTER 04",
        title: "Grow With Control",
        description: "One calm owner workspace for products, enquiries, orders, and inventory.",
        image: "/images/curated/transform-04.jpg",
      },
    ],
    faqs: [
      {
        question: "Do we have to build all four chapters at once?",
        answer:
          "No. Many businesses start with Chapters 01 and 02 (our Silver or Gold package) and unlock advanced RFQ automation, payments, and inventory as their online volume grows.",
      },
      {
        question: "How do you migrate our existing product data from Excel or PDFs?",
        answer:
          "Our engineering team structures and imports your existing product spreadsheets, technical specs, and photography into a clean digital catalogue schema.",
      },
    ],
  },

  packages: {
    slug: "packages",
    category: "SOLUTIONS",
    eyebrow: "GROW YOUR BUSINESS",
    title: "Start simple.",
    titleAccent: "Grow on your terms.",
    subtitle:
      "Three transparent service foundations—Silver, Gold, and Premium—designed as a modular upgrade path. Start with what your business needs today and expand without rebuilding.",
    heroImage: "/images/curated/showcase-02.jpg",
    heroBadge: "SILVER · GOLD · PREMIUM",
    primaryCtaText: "Get a Custom Quotation",
    secondaryCtaText: "Compare Silver, Gold & Premium",
    secondaryCtaHref: "/solutions/gold",
    metrics: [
      { value: "Silver", label: "Get Online — Brand website & product catalogue" },
      { value: "Gold", label: "Manage Online — Self-serve CMS, admin & RFQ inbox" },
      { value: "Premium", label: "Sell & Scale — Payments, orders & inventory sync" },
      { value: "Custom", label: "Bespoke SaaS, mobile apps & AI automation" },
    ],
    overviewEyebrow: "THREE PRACTICAL FOUNDATIONS",
    overviewTitle: "Choose the stage that matches your business today.",
    overviewLead:
      "We don't push oversized enterprise contracts when you need a focused starting point, nor do we box you into a tool you'll outgrow in six months. Every package is engineered on a modular stack.",
    deliverables: [
      {
        tag: "TIER 01 · SILVER",
        title: "Get Online — Launch your digital presence.",
        description:
          "Make a powerful first impression, showcase your products or services, and capture direct customer enquiries via WhatsApp and contact flows.",
        bullets: [
          "Custom responsive business website",
          "Product & service detail pages with rich media",
          "WhatsApp & direct enquiry CTA integration",
          "Mobile-first SEO & performance foundation",
        ],
      },
      {
        tag: "TIER 02 · GOLD (MOST POPULAR)",
        title: "Manage Online — Control products & leads.",
        description:
          "Everything in Silver, plus your own secure Admin Dashboard & CMS to add/edit products, manage content, and track customer quotation requests in one place.",
        bullets: [
          "Everything in Silver package",
          "Secure Admin Dashboard & Visual CMS",
          "Self-service product, image & content editing",
          "Centralized Quotation & Enquiry Inbox + Email alerts",
        ],
      },
      {
        tag: "TIER 03 · PREMIUM",
        title: "Sell & Scale — End-to-end online commerce.",
        description:
          "Everything in Gold, plus online payment gateway integration, automated order management, stock & inventory controls, and executive reporting.",
        bullets: [
          "Everything in Gold package",
          "Online Payment Gateway (Stripe, Razorpay, etc.)",
          "Live Stock, MOQ & Inventory Management tools",
          "Orders Dashboard, Invoicing & ERP/CRM integrations",
        ],
      },
    ],
    workflowEyebrow: "MODULAR UPGRADE ARCHITECTURE",
    workflowTitle: "How our scoping and upgrade path works.",
    workflowSteps: [
      {
        step: "01",
        title: "Select Your Starting Tier",
        description: "Pick Silver, Gold, Premium, or a custom MVP based on your immediate operational priority.",
        outcome: "Clear Baseline Scope",
      },
      {
        step: "02",
        title: "Tailor Capabilities & Integrations",
        description: "Add B2B bulk quotation carts, custom filters, multi-currency, or CRM sync as needed.",
        outcome: "Transparent Custom Proposal",
      },
      {
        step: "03",
        title: "Milestone-Driven Engineering",
        description: "We design, build, and test your platform in clear sprints with weekly interactive demos.",
        outcome: "On-Time Production Launch",
      },
      {
        step: "04",
        title: "Seamless Future Upgrades",
        description: "Upgrade from Silver to Gold or Premium anytime—your core architecture carries forward.",
        outcome: "Zero Rebuild Waste",
      },
    ],
    galleryCards: [
      {
        tag: "SILVER PACKAGE",
        title: "Silver — Get Online",
        description: "Build an authoritative online presence and product showcase with direct enquiry capture.",
        image: "/images/curated/showcase-01.jpg",
        href: "/solutions/silver",
      },
      {
        tag: "GOLD PACKAGE · POPULAR",
        title: "Gold — Manage Online",
        description: "Take full control with an Admin Dashboard, self-serve CMS, and centralized quotation inbox.",
        image: "/images/curated/showcase-02.jpg",
        href: "/solutions/gold",
      },
      {
        tag: "PREMIUM PACKAGE",
        title: "Premium — Sell & Scale",
        description: "Run an end-to-end digital commerce operation with payments, orders, and inventory control.",
        image: "/images/curated/showcase-03.jpg",
        href: "/solutions/premium",
      },
    ],
    faqs: [
      {
        question: "Can I start with Silver and upgrade to Gold or Premium later?",
        answer:
          "Yes. Our packages are engineered as a continuous upgrade path. Your initial design system and frontend carry over cleanly when we add CMS, admin, or payment modules.",
      },
      {
        question: "How is the final project quotation calculated?",
        answer:
          "We review the number of unique page layouts, SKU complexity, custom workflow rules, third-party integrations, and delivery timeline, then provide a transparent fixed-scope proposal.",
      },
    ],
  },

  "solutions/silver": {
    slug: "solutions/silver",
    category: "SOLUTIONS",
    eyebrow: "SILVER PACKAGE · GET ONLINE",
    title: "Launch a powerful",
    titleAccent: "digital presence.",
    subtitle:
      "The ideal starting point for businesses moving online. Showcase your brand, products, and specifications beautifully while turning visitor interest into direct WhatsApp and email enquiries.",
    heroImage: "/images/curated/showcase-01.jpg",
    heroBadge: "SILVER · GET ONLINE",
    primaryCtaText: "Request Silver Quotation",
    secondaryCtaText: "Compare with Gold",
    secondaryCtaHref: "/solutions/gold",
    metrics: [
      { value: "3–5 Wks", label: "Typical design-to-launch delivery timeline" },
      { value: "99/100", label: "Mobile-first Core Web Vitals performance" },
      { value: "Direct", label: "WhatsApp, call & enquiry form lead routing" },
      { value: "Upgrade", label: "Ready to upgrade to Gold CMS anytime" },
    ],
    overviewEyebrow: "WHAT'S INCLUDED IN SILVER",
    overviewTitle: "Everything you need to look credible and get discovered.",
    overviewLead:
      "Silver is built for businesses that don't need daily content edits or complex backend dashboards yet, but refuse to settle for a generic template. You get a custom-engineered storefront designed to win trust and capture leads.",
    deliverables: [
      {
        tag: "BRAND & WEB FLAGSHIP",
        title: "Custom responsive business website.",
        description:
          "A bespoke, mobile-first website crafted around your brand identity, value proposition, and target buyers.",
        bullets: [
          "Custom homepage, about, and contact experiences",
          "Fast-loading Next.js architecture & SSL security",
          "Clean technical SEO, sitemap & metadata setup",
        ],
      },
      {
        tag: "PRODUCT & SERVICE SHOWCASE",
        title: "Structured product details & imagery.",
        description:
          "Present your collections, product specifications, and service offerings with clarity so customers understand exactly what you offer.",
        bullets: [
          "Organized category & product detail layouts",
          "High-resolution image galleries & spec tables",
          "Downloadable brochures or spec sheets if needed",
        ],
      },
      {
        tag: "INSTANT LEAD CAPTURE",
        title: "WhatsApp & direct enquiry CTAs.",
        description:
          "Make it effortless for interested buyers to reach your sales team immediately from any product page.",
        bullets: [
          "Pre-filled WhatsApp product enquiry buttons",
          "Structured contact & project enquiry forms",
          "Google Maps, phone & direct email triggers",
        ],
      },
    ],
    workflowEyebrow: "SILVER DELIVERY PROCESS",
    workflowTitle: "From first call to live website in four clear steps.",
    workflowSteps: [
      {
        step: "01",
        title: "Brand & Catalogue Discovery",
        description: "We gather your brand assets, product details, and key customer questions.",
        outcome: "Sitemap & Content Plan",
      },
      {
        step: "02",
        title: "UI/UX Visual Direction",
        description: "We craft a modern, high-contrast interface tailored to your industry.",
        outcome: "Approved Design System",
      },
      {
        step: "03",
        title: "Responsive Development",
        description: "We build and optimize every page for mobile, tablet, and desktop speed.",
        outcome: "Staging Preview Link",
      },
      {
        step: "04",
        title: "QA, SEO & Go-Live",
        description: "We connect your domain, verify search indexing, and launch your site.",
        outcome: "Live Digital Storefront",
      },
    ],
    faqs: [
      {
        question: "How do content or product updates work on the Silver plan?",
        answer:
          "Silver uses managed updates for occasional changes. If you want to add and edit products, images, and prices yourself anytime, we recommend our Gold package (or upgrading to Gold later).",
      },
      {
        question: "Can we upgrade from Silver to Gold later without starting over?",
        answer:
          "Yes. We engineer Silver on a modular codebase so an admin dashboard and CMS can be connected later without redesigning your storefront.",
      },
    ],
  },

  "solutions/gold": {
    slug: "solutions/gold",
    category: "SOLUTIONS",
    eyebrow: "GOLD PACKAGE · MANAGE ONLINE (MOST POPULAR)",
    title: "Your digital showroom",
    titleAccent: "& admin in one place.",
    subtitle:
      "Our most popular package for growing businesses. Launch a high-converting website and product catalogue backed by a self-service Admin Dashboard, Visual CMS, and centralized Quotation Inbox.",
    heroImage: "/images/curated/showcase-02.jpg",
    heroBadge: "GOLD · POPULAR PATH",
    primaryCtaText: "Request Gold Quotation",
    secondaryCtaText: "Compare with Premium",
    secondaryCtaHref: "/solutions/premium",
    metrics: [
      { value: "100%", label: "Self-manageable products, images & content" },
      { value: "4.2×", label: "Faster buyer quotation response workflow" },
      { value: "Zero", label: "Developer dependency for everyday edits" },
      { value: "Live", label: "Email & dashboard alerts for every enquiry" },
    ],
    overviewEyebrow: "WHAT'S INCLUDED IN GOLD",
    overviewTitle: "Complete autonomy over your catalogue and customer leads.",
    overviewLead:
      "Gold gives your team the tools to run your digital presence independently. Add new products in seconds, update specifications, and manage every buyer quotation request from a single organized dashboard.",
    deliverables: [
      {
        tag: "SELF-SERVICE CMS & ADMIN",
        title: "Update products & content without code.",
        description:
          "A clean, intuitive admin workspace built specifically for business owners and operations teams.",
        bullets: [
          "Add, edit, or archive products, categories & specs",
          "Upload and reorder high-resolution product galleries",
          "Update homepage banners, announcements & FAQs",
        ],
      },
      {
        tag: "QUOTATION & LEAD INBOX",
        title: "Turn buyer interest into organized RFQs.",
        description:
          "Stop chasing enquiries across scattered email threads and chat apps. Every lead lands in your centralized inbox.",
        bullets: [
          "Multi-item Request-for-Quotation (RFQ) cart flow",
          "Instant email notifications on new buyer enquiries",
          "Track lead status from New → Quoted → Won",
        ],
      },
      {
        tag: "EVERYTHING IN SILVER",
        title: "Flagship storefront & SEO architecture.",
        description:
          "Includes the full custom-designed frontend, responsive performance, and WhatsApp integration of our Silver tier.",
        bullets: [
          "Custom brand-first UI/UX design system",
          "99/100 mobile-first performance target",
          "Role-based login security for your admin team",
        ],
      },
    ],
    workflowEyebrow: "GOLD DELIVERY PROCESS",
    workflowTitle: "Engineered around your catalogue and sales team.",
    workflowSteps: [
      {
        step: "01",
        title: "Data Model & Workflow Scoping",
        description: "We define your product attributes, categories, and quotation intake fields.",
        outcome: "CMS & RFQ Specification",
      },
      {
        step: "02",
        title: "Storefront & Admin UI Design",
        description: "We design both the customer-facing showroom and your internal admin dashboard.",
        outcome: "Interactive Dual Prototype",
      },
      {
        step: "03",
        title: "Full-Stack CMS & RFQ Build",
        description: "We engineer the database, admin controls, email alerts, and frontend.",
        outcome: "Complete Gold Platform",
      },
      {
        step: "04",
        title: "Catalogue Import & Team Training",
        description: "We import your initial products and train your team to manage everything in minutes.",
        outcome: "Autonomous Operations",
      },
    ],
    faqs: [
      {
        question: "How easy is the Gold CMS for non-technical staff?",
        answer:
          "If your team can fill out a simple form and upload a photo from their computer or phone, they can update products and manage enquiries in the Gold admin panel.",
      },
      {
        question: "Can buyers select multiple items and quantities for a custom quote?",
        answer:
          "Yes. Gold supports a B2B quotation cart where buyers add multiple SKUs and quantities and submit one consolidated RFQ instead of paying fixed retail prices.",
      },
    ],
  },

  "solutions/premium": {
    slug: "solutions/premium",
    category: "SOLUTIONS",
    eyebrow: "PREMIUM PACKAGE · SELL & SCALE",
    title: "End-to-end digital",
    titleAccent: "commerce & operations.",
    subtitle:
      "Transform your digital presence into a complete online selling and operations engine. Includes everything in Gold plus payment gateways, live inventory & stock management, orders dashboard, and ERP/CRM integrations.",
    heroImage: "/images/curated/showcase-03.jpg",
    heroBadge: "PREMIUM · SELL & SCALE",
    primaryCtaText: "Request Premium Quotation",
    secondaryCtaText: "View All Packages",
    secondaryCtaHref: "/packages",
    metrics: [
      { value: "24/7", label: "Automated online checkout & payment capture" },
      { value: "Real-Time", label: "Stock, SKU & inventory synchronization" },
      { value: "Hybrid", label: "Supports both direct checkout & bulk B2B RFQs" },
      { value: "99.98%", label: "Enterprise cloud reliability & security" },
    ],
    overviewEyebrow: "WHAT'S INCLUDED IN PREMIUM",
    overviewTitle: "Built for high-volume selling and connected operations.",
    overviewLead:
      "Premium connects your storefront directly to revenue and fulfillment. Accept instant online payments, enforce minimum order quantities (MOQs), track stock levels automatically, and view real-time sales analytics.",
    deliverables: [
      {
        tag: "ONLINE CHECKOUT & PAYMENTS",
        title: "Seamless payment gateway integration.",
        description:
          "Accept cards, UPI, net banking, wallets, and international payments with automated tax and shipping rules.",
        bullets: [
          "Stripe, Razorpay, PayPal & custom payment gateways",
          "Automated GST/VAT invoicing & order receipts",
          "Hybrid checkout: instant buy OR bulk RFQ request",
        ],
      },
      {
        tag: "ORDERS & INVENTORY ENGINE",
        title: "Stock, fulfillment & order management.",
        description:
          "Keep inventory accurate across channels and manage orders from placement to dispatch.",
        bullets: [
          "Real-time SKU stock levels & low-stock alerts",
          "Variant, tier pricing & MOQ rule enforcement",
          "End-to-end order lifecycle & shipment tracking",
        ],
      },
      {
        tag: "REPORTING & INTEGRATIONS",
        title: "Executive analytics & system sync.",
        description:
          "Connect your commerce platform with accounting, ERP, CRM, and shipping providers.",
        bullets: [
          "Revenue, top-SKU & conversion analytics dashboard",
          "Bi-directional ERP, CRM & accounting webhooks",
          "Everything included in Silver & Gold packages",
        ],
      },
    ],
    workflowEyebrow: "PREMIUM DELIVERY PROCESS",
    workflowTitle: "Architecting a resilient commerce platform.",
    workflowSteps: [
      {
        step: "01",
        title: "Commerce & Fulfillment Architecture",
        description: "We map pricing rules, tax/shipping logic, payment gateways, and inventory flows.",
        outcome: "Technical Commerce Blueprint",
      },
      {
        step: "02",
        title: "Conversion-Led Storefront & Checkout UX",
        description: "We design frictionless product discovery, cart, and 1-page checkout experiences.",
        outcome: "Validated Checkout Prototype",
      },
      {
        step: "03",
        title: "Payment, Inventory & Admin Engineering",
        description: "We build and security-test payments, stock ledger controls, and ERP/CRM hooks.",
        outcome: "End-to-End Commerce System",
      },
      {
        step: "04",
        title: "Load Testing, Live Launch & Scale",
        description: "We verify transaction reliability, train your operations team, and go live.",
        outcome: "Scalable Revenue Platform",
      },
    ],
    faqs: [
      {
        question: "Can Premium support both fixed-price retail checkout and B2B bulk quotes?",
        answer:
          "Yes. We frequently engineer hybrid stores where standard quantities go through instant online checkout while bulk or custom orders trigger an RFQ approval flow.",
      },
      {
        question: "Can you integrate with our existing ERP, Tally, Zoho, or logistics partner?",
        answer:
          "Yes. Premium includes custom API integration support to sync orders, stock, and invoices with your existing accounting, CRM, or shipping tools.",
      },
    ],
  },

  "industries/manufacturers-wholesale": {
    slug: "industries/manufacturers-wholesale",
    category: "INDUSTRIES",
    eyebrow: "MANUFACTURERS & WHOLESALE",
    title: "Show more.",
    titleAccent: "Quote faster.",
    subtitle:
      "Digital product catalogues, technical specification portals, and bulk Request-for-Quotation (RFQ) systems engineered specifically for manufacturers, industrial suppliers, and B2B wholesalers.",
    heroImage: "/images/curated/case-01-forme.jpg",
    heroBadge: "B2B READY ARCHITECTURE",
    primaryCtaText: "Scope Your B2B Portal",
    secondaryCtaText: "Explore Gold Package",
    secondaryCtaHref: "/solutions/gold",
    metrics: [
      { value: "4.2×", label: "Faster bulk quotation turnaround time" },
      { value: "Unlimited", label: "Structured SKUs, technical specs & CAD/PDF sheets" },
      { value: "MOQ", label: "Built-in minimum order & volume tier rules" },
      { value: "100%", label: "Self-serve catalogue updates for your team" },
    ],
    overviewEyebrow: "BUILT FOR B2B COMPLEXITY",
    overviewTitle: "Replace static PDF catalogues with a live B2B quotation engine.",
    overviewLead:
      "B2B buyers don't buy like retail shoppers—they search by technical specification, order in bulk quantities, request custom finishes, and need formal quotations. We build digital portals around the way wholesale actually works.",
    deliverables: [
      {
        tag: "TECHNICAL PRODUCT CATALOGUE",
        title: "Filterable specs, dimensions & finishes.",
        description:
          "Organize thousands of SKUs with multi-attribute filters, material swatches, dimension drawings, and downloadable data sheets.",
        bullets: [
          "Instant filtering by material, size, grade, or application",
          "Attach technical PDFs, CAD drawings & compliance certs",
          "Self-service CMS to add new product lines anytime",
        ],
      },
      {
        tag: "BULK RFQ QUOTATION CART",
        title: "Multi-item quotation requests in one click.",
        description:
          "Let distributors and trade buyers add multiple products and quantities to an RFQ cart and submit one structured price request.",
        bullets: [
          "Enforce Minimum Order Quantities (MOQs) & pack sizes",
          "Capture custom finish notes & delivery pin codes",
          "Route enquiries to regional sales reps automatically",
        ],
      },
      {
        tag: "TRADE & DISTRIBUTOR PORTAL",
        title: "Centralized lead & quotation workspace.",
        description:
          "Review incoming RFQs, approve custom pricing, and track repeat trade buyers from one calm admin dashboard.",
        bullets: [
          "One-click quotation response & PDF quote generation",
          "Repeat buyer history & trade account approvals",
          "Optional ERP & inventory synchronization",
        ],
      },
    ],
    workflowEyebrow: "B2B BUYER JOURNEY",
    workflowTitle: "How trade buyers interact with your digital catalogue.",
    workflowSteps: [
      {
        step: "01",
        title: "Discover & Filter SKUs",
        description: "Buyers search your live catalogue by category, technical spec, or finish.",
        outcome: "Zero PDF Friction",
      },
      {
        step: "02",
        title: "Build Bulk RFQ List",
        description: "Buyers select items, enter unit quantities, and attach custom requirements.",
        outcome: "Structured RFQ Cart",
      },
      {
        step: "03",
        title: "Review in Admin Workspace",
        description: "Your sales team receives an instant alert with full SKU and buyer details.",
        outcome: "Organized Sales Pipeline",
      },
      {
        step: "04",
        title: "Approve & Close Order",
        description: "Send approved custom pricing and convert the quotation into a confirmed order.",
        outcome: "Faster B2B Conversion",
      },
    ],
    faqs: [
      {
        question: "Can we hide prices from public visitors and use 'Request a Quote' instead?",
        answer:
          "Yes. You can hide prices completely, display indicative price ranges, or show wholesale pricing only to approved logged-in trade accounts.",
      },
      {
        question: "Which package is best for a manufacturer or wholesaler?",
        answer:
          "Our Gold package (Manage Online) is the most popular choice for manufacturers and wholesalers because it includes the self-service product CMS and the B2B Quotation Inbox.",
      },
    ],
  },

  "industries/service-businesses": {
    slug: "industries/service-businesses",
    category: "INDUSTRIES",
    eyebrow: "SERVICE BUSINESSES & AGENCIES",
    title: "Turn visits",
    titleAccent: "into bookings.",
    subtitle:
      "High-trust service websites, interactive capability showcases, structured client intake flows, and automated appointment scheduling engineered for professional service firms.",
    heroImage: "/images/curated/case-03-flow.jpg",
    heroBadge: "BOOKING & CRM READY",
    primaryCtaText: "Scope Your Service Platform",
    secondaryCtaText: "Explore Packages",
    secondaryCtaHref: "/packages",
    metrics: [
      { value: "+3.1×", label: "Increase in qualified consultation bookings" },
      { value: "24/7", label: "Automated appointment & enquiry capture" },
      { value: "-60%", label: "Less back-and-forth scheduling emails" },
      { value: "100%", label: "Self-manageable case studies & services" },
    ],
    overviewEyebrow: "ENGINEERED FOR SERVICE LEADERS",
    overviewTitle: "Credibility that wins trust. Workflows that capture clients.",
    overviewLead:
      "In a service business, your website is your most visible partner. We combine authoritative editorial design with frictionless intake and booking workflows so prospects move from discovery to scheduled consultation effortlessly.",
    deliverables: [
      {
        tag: "SERVICE & CASE STUDY SHOWCASE",
        title: "Present your expertise with authority.",
        description:
          "Dedicated service architecture, proof points, and interactive case studies that answer client questions before they even call.",
        bullets: [
          "Clear service pages with deliverable breakdowns",
          "Filterable portfolio & client outcome showcases",
          "SEO-optimized local & industry landing pages",
        ],
      },
      {
        tag: "BOOKING & CLIENT INTAKE",
        title: "Automated appointments & scoped enquiries.",
        description:
          "Capture project briefs, service selections, preferred time slots, and client details in one structured flow.",
        bullets: [
          "Interactive service & consultation booking calendar",
          "Multi-step client intake & requirement questionnaires",
          "Automated email & WhatsApp booking confirmations",
        ],
      },
      {
        tag: "CLIENT & LEAD WORKSPACE",
        title: "Manage bookings, leads & content easily.",
        description:
          "Keep track of every prospect, consultation request, and website update from one clean dashboard.",
        bullets: [
          "Centralized client enquiry & appointment inbox",
          "Self-service CMS for services, team & insights",
          "CRM & calendar integrations (Google, Outlook, Zoho)",
        ],
      },
    ],
    workflowEyebrow: "SERVICE CONVERSION FLOW",
    workflowTitle: "How prospects become booked clients.",
    workflowSteps: [
      {
        step: "01",
        title: "Explore Services & Proof",
        description: "Prospects review your capabilities, process, and relevant case studies.",
        outcome: "High-Intent Trust",
      },
      {
        step: "02",
        title: "Complete Guided Intake",
        description: "Clients select the service they need and share key requirements.",
        outcome: "Pre-Qualified Lead",
      },
      {
        step: "03",
        title: "Schedule or Request Proposal",
        description: "Prospects pick an available slot or request a tailored quotation.",
        outcome: "Zero Scheduling Friction",
      },
      {
        step: "04",
        title: "Manage in Admin CRM",
        description: "Your team receives organized client profiles and automated reminders.",
        outcome: "Higher Close Rates",
      },
    ],
    faqs: [
      {
        question: "Can we accept deposits or consultation payments online?",
        answer:
          "Yes. We can integrate Stripe or Razorpay so clients can pay a consultation fee or service retainer at the time of booking.",
      },
      {
        question: "Can it sync with our existing Google Calendar or CRM?",
        answer:
          "Yes. Appointment requests and lead submissions can sync directly with Google Calendar, Calendly, HubSpot, Zoho, or your internal tools.",
      },
    ],
  },

  "industries/startups-founders": {
    slug: "industries/startups-founders",
    category: "INDUSTRIES",
    eyebrow: "STARTUPS & FOUNDERS",
    title: "Launch the",
    titleAccent: "next big idea.",
    subtitle:
      "From interactive product prototypes and high-converting launch sites to full-stack SaaS MVPs and mobile applications—engineered to validate real customer demand and scale.",
    heroImage: "/images/curated/case-02-atelier.jpg",
    heroBadge: "IDEA · MVP · SCALE",
    primaryCtaText: "Scope Your MVP",
    secondaryCtaText: "See How We Work",
    secondaryCtaHref: "/how-we-work",
    metrics: [
      { value: "4–8 Wks", label: "Rapid MVP design & engineering sprints" },
      { value: "Next.js", label: "Modern, scalable TypeScript & cloud stack" },
      { value: "100%", label: "IP ownership & clean, extensible codebase" },
      { value: "99.98%", label: "Production cloud uptime & security foundation" },
    ],
    overviewEyebrow: "FROM ZERO TO ONE",
    overviewTitle: "Ship a product users love—without technical debt.",
    overviewLead:
      "Founders need speed, clarity, and a product partner who thinks about user adoption as much as system architecture. We help you define a sharp MVP scope, craft an unforgettable UI/UX, and ship production-grade code.",
    deliverables: [
      {
        tag: "PRODUCT DISCOVERY & UI/UX",
        title: "Interactive prototypes that win users & investors.",
        description:
          "Before writing backend code, we map user journeys and build high-craft interactive prototypes to validate the experience.",
        bullets: [
          "Product scope definition & feature prioritization",
          "Complete Figma design system & clickable prototype",
          "High-converting product launch & waitlist website",
        ],
      },
      {
        tag: "FULL-STACK MVP ENGINEERING",
        title: "Web, SaaS & mobile app development.",
        description:
          "We engineer your core product on a modern, scalable stack with authentication, payments, dashboards, and APIs.",
        bullets: [
          "Next.js, React, Node.js & cloud-native databases",
          "Cross-platform iOS & Android mobile apps",
          "Multi-tenant auth, subscriptions & billing (Stripe)",
        ],
      },
      {
        tag: "AI & SCALE ARCHITECTURE",
        title: "Built to evolve from first 100 to 100,000+ users.",
        description:
          "Clean modular code, automated CI/CD pipelines, and AI integrations so your internal team or our dedicated pod can iterate fast.",
        bullets: [
          "LLM, AI agent & intelligent workflow integration",
          "Automated testing & secure cloud deployment",
          "Post-launch iteration roadmap & engineering support",
        ],
      },
    ],
    workflowEyebrow: "FOUNDER SPRINT MODEL",
    workflowTitle: "How we take your product from concept to launch.",
    workflowSteps: [
      {
        step: "01",
        title: "Scope the Core Loop",
        description: "We strip away bloat and focus on the essential workflow that delivers user value.",
        outcome: "Lean MVP Specification",
      },
      {
        step: "02",
        title: "Design & Prototype",
        description: "We create the visual brand, design system, and interactive user flows.",
        outcome: "Investor-Ready Prototype",
      },
      {
        step: "03",
        title: "Agile 2-Week Build Sprints",
        description: "We develop the frontend, APIs, auth, and database with weekly live demos.",
        outcome: "Working Software Every Sprint",
      },
      {
        step: "04",
        title: "Launch, Measure & Iterate",
        description: "We deploy to production with analytics and ship rapid V1.1 improvements.",
        outcome: "Live Market Traction",
      },
    ],
    faqs: [
      {
        question: "Do we own 100% of the source code and intellectual property?",
        answer:
          "Yes. Upon delivery, your company owns 100% of the repository, design systems, cloud infrastructure, and intellectual property.",
      },
      {
        question: "Can Sparsh IT act as our ongoing engineering partner after MVP launch?",
        answer:
          "Yes. Many founders retain a dedicated Sparsh IT engineering pod to ship V2 features, mobile apps, and infrastructure scaling as they grow.",
      },
    ],
  },

  "our-philosophy": {
    slug: "our-philosophy",
    category: "COMPANY",
    eyebrow: "OUR PHILOSOPHY",
    title: "Technology should feel like progress —",
    titleAccent: "not another system to manage.",
    subtitle:
      "We approach digital transformation from your business outward. First we understand your customers, revenue workflows, and operational bottlenecks—then we engineer calm, self-manageable software.",
    heroImage: "/images/curated/architecture.jpg",
    heroBadge: "THE SPARSH IT STANDARD",
    primaryCtaText: "Start a Conversation",
    secondaryCtaText: "See How We Work",
    secondaryCtaHref: "/how-we-work",
    metrics: [
      { value: "100%", label: "Custom-scoped around commercial outcomes" },
      { value: "Zero", label: "Developer dependency for everyday edits" },
      { value: "4.2×", label: "Focus on sales & operational velocity" },
      { value: "3-Stage", label: "Modular growth foundation (Silver → Gold → Premium)" },
    ],
    overviewEyebrow: "THREE CORE PRINCIPLES",
    overviewTitle: "We make the complex feel simple.",
    overviewLead:
      "Too many software projects fail because they prioritize technical buzzwords over the people who actually use the system. Our philosophy is grounded in three non-negotiable engineering principles.",
    deliverables: [
      {
        tag: "PRINCIPLE 01 · BUSINESS-FIRST",
        title: "Engineered around commercial outcomes.",
        description:
          "We start with your customers, enquiry conversion, and real operational bottlenecks before writing a single line of code.",
        bullets: [
          "Every feature must justify its business value",
          "Designed to shorten enquiry-to-order cycles",
          "Eliminate repetitive manual spreadsheet work",
        ],
      },
      {
        tag: "PRINCIPLE 02 · DESIGN WITH INTENT",
        title: "Zero-friction interfaces people love using.",
        description:
          "Every screen, product filter, and admin workflow is crafted to remove confusion for both your buyers and your internal team.",
        bullets: [
          "Clean typography, hierarchy & purposeful motion",
          "3-click buyer discovery-to-quotation journeys",
          "Calm, intuitive admin tools requiring zero training",
        ],
      },
      {
        tag: "PRINCIPLE 03 · BUILT TO EVOLVE",
        title: "Start lean today. Scale tomorrow.",
        description:
          "We architect modular systems so you can launch a focused storefront or MVP now and plug in CMS, payments, ERP, and AI later.",
        bullets: [
          "Future-proof Next.js, TypeScript & cloud stack",
          "Upgrade from Silver → Gold → Premium seamlessly",
          "Clean documentation & full ownership",
        ],
      },
    ],
    workflowEyebrow: "THE SPARSH IT DIFFERENCE",
    workflowTitle: "How our philosophy shapes every engagement.",
    workflowSteps: [
      {
        step: "01",
        title: "Listen Before Prescribing",
        description: "We never push the most expensive tier if a simpler solution solves your core problem.",
        outcome: "Honest Technical Advice",
      },
      {
        step: "02",
        title: "Show Interactive Prototypes Early",
        description: "You experience and test the workflow before heavy engineering begins.",
        outcome: "Zero Guesswork",
      },
      {
        step: "03",
        title: "Empower Your Team",
        description: "We build self-service admin tools so you aren't locked into developer tickets for text edits.",
        outcome: "True Operational Autonomy",
      },
      {
        step: "04",
        title: "Partner for the Long Run",
        description: "As your business grows, your platform scales with new modules and automations.",
        outcome: "Compounding Digital ROI",
      },
    ],
    faqs: [
      {
        question: "Why do you emphasize 'calm, self-manageable systems'?",
        answer:
          "Because software should give business owners their time back. When your catalogue, enquiries, and orders are organized in one intuitive place, your team can focus on growth rather than admin chaos.",
      },
    ],
  },

  "how-we-work": {
    slug: "how-we-work",
    category: "OUR WORK",
    eyebrow: "HOW WE WORK",
    title: "Less guesswork.",
    titleAccent: "More momentum.",
    subtitle:
      "A transparent, four-stage delivery process—Discover, Design, Build, and Launch & Evolve—engineered to eliminate surprises and ship software that delivers value from day one.",
    heroImage: "/images/curated/workspace.jpg",
    heroBadge: "04 ACCOUNTABLE STAGES",
    primaryCtaText: "Start Your Project Brief",
    secondaryCtaText: "Explore Packages",
    secondaryCtaHref: "/packages",
    metrics: [
      { value: "Stage 01", label: "Discover — Goals, users, scope & fixed proposal" },
      { value: "Stage 02", label: "Design — Journeys, prototypes & visual direction" },
      { value: "Stage 03", label: "Build — Full-stack engineering & QA testing" },
      { value: "Stage 04", label: "Launch & Evolve — Go-live, training & growth" },
    ],
    overviewEyebrow: "CLARITY AT EVERY MILESTONE",
    overviewTitle: "Thoughtfully planned. Confidently delivered.",
    overviewLead:
      "Every Sparsh IT engagement follows a structured rhythm with clear deliverables, weekly interactive check-ins, and accountable milestones so you always know what is being built and why.",
    deliverables: [
      {
        tag: "01 · DISCOVER & SCOPE",
        title: "Understand the business and define the job.",
        description:
          "We align on your commercial goals, buyer personas, product catalogue structure, and operational pain points.",
        bullets: [
          "Stakeholder & workflow discovery session",
          "Feature specification & architecture blueprint",
          "Transparent milestone schedule & custom quotation",
        ],
      },
      {
        tag: "02 · DESIGN & PROTOTYPE",
        title: "Shape the experience before writing code.",
        description:
          "We map customer journeys, wireframe key screens, and craft a high-contrast visual design system.",
        bullets: [
          "Interactive Figma UI/UX prototype",
          "Mobile-first responsive screen designs",
          "Admin dashboard & quotation flow validation",
        ],
      },
      {
        tag: "03 & 04 · BUILD, LAUNCH & EVOLVE",
        title: "Engineer for speed, test thoroughly & scale.",
        description:
          "We develop the frontend, backend CMS, and integrations in agile sprints, then launch with full team onboarding.",
        bullets: [
          "Clean Next.js / TypeScript / Cloud engineering",
          "Cross-device QA, security & performance audits",
          "Smooth deployment, CMS training & upgrade roadmap",
        ],
      },
    ],
    workflowEyebrow: "THE 4-STAGE JOURNEY",
    workflowTitle: "What happens at each stage of your project.",
    workflowSteps: [
      {
        step: "01",
        title: "Discover",
        description: "Talk about your business, users, pain points, and budget. Receive a clear scope and proposal.",
        outcome: "Approved Project Charter",
      },
      {
        step: "02",
        title: "Design",
        description: "Plan the customer experience, user flows, screens, and visual direction with interactive previews.",
        outcome: "Signed-Off UI/UX Prototype",
      },
      {
        step: "03",
        title: "Build",
        description: "Develop, integrate, test, and refine the storefront, admin CMS, and custom workflows.",
        outcome: "Verified Staging Build",
      },
      {
        step: "04",
        title: "Launch & Evolve",
        description: "Go live with confidence, onboard your team, and plan practical next upgrades as you grow.",
        outcome: "Live Production Platform",
      },
    ],
    faqs: [
      {
        question: "How involved does our team need to be during the project?",
        answer:
          "We keep your involvement focused and efficient: an initial discovery session, a weekly 30-minute review of live progress, and final content/QA sign-off.",
      },
      {
        question: "Do you provide ongoing maintenance and support after launch?",
        answer:
          "Yes. Every proposal outlines clear post-launch support, hosting, security updates, and optional feature retainer terms.",
      },
    ],
  },

  "selected-work": {
    slug: "selected-work",
    category: "OUR WORK",
    eyebrow: "SELECTED CONCEPT WORK",
    title: "Made to be used.",
    titleAccent: "Made to stand out.",
    subtitle:
      "Explore three signature digital product concepts—Forme Catalogue, Atelier Commerce, and Flow Booking—demonstrating how Sparsh IT combines editorial craft with practical business workflows.",
    heroImage: "/images/curated/case-01-forme.jpg",
    heroBadge: "03 SIGNATURE CASE CONCEPTS",
    primaryCtaText: "Discuss a Similar Solution",
    secondaryCtaText: "View Interactive Showcase",
    secondaryCtaHref: "/showcase",
    metrics: [
      { value: "Forme", label: "Wholesale B2B Digital Catalogue & Bulk RFQ" },
      { value: "Atelier", label: "Retail Storefront, Collections & Visual CMS" },
      { value: "Flow", label: "Service Discovery, Intake & Booking Engine" },
      { value: "Custom", label: "Tailored to your brand & operational rules" },
    ],
    overviewEyebrow: "CONCEPT CASE STUDIES",
    overviewTitle: "Proof is in the product thinking.",
    overviewLead:
      "Each concept below addresses a distinct commercial model—B2B wholesale distribution, curated retail commerce, and appointment-driven service operations.",
    deliverables: [
      {
        tag: "CONCEPT 01 · WHOLESALE",
        title: "Forme Catalogue — B2B Discovery & Bulk RFQ.",
        description:
          "Designed for manufacturers and wholesalers who need buyers to explore technical specifications, compare finishes, and request bulk quotations.",
        bullets: [
          "Multi-attribute spec & material finish filtering",
          "Multi-item bulk quotation cart with quantity controls",
          "Admin quotation review & custom pricing approval",
        ],
      },
      {
        tag: "CONCEPT 02 · RETAIL",
        title: "Atelier Commerce — Curated Storefront & CMS.",
        description:
          "Designed for retail brands and boutiques moving from offline shelves to an editorial digital storefront with self-service content management.",
        bullets: [
          "High-impact seasonal collection & lookbook pages",
          "Visual CMS for instant product & price updates",
          "Seamless upgrade path from enquiry to online checkout",
        ],
      },
      {
        tag: "CONCEPT 03 · SERVICES",
        title: "Flow Booking — Service Showcase & Appointments.",
        description:
          "Designed for service-led businesses to present offerings clearly, capture structured client requirements, and automate appointment scheduling.",
        bullets: [
          "Structured service catalogue & tier comparison",
          "Guided client intake & time-slot booking flow",
          "Automated calendar alerts & centralized client CRM",
        ],
      },
    ],
    workflowEyebrow: "ADAPTING TO YOUR WORLD",
    workflowTitle: "How we turn a concept direction into your live platform.",
    workflowSteps: [
      {
        step: "01",
        title: "Choose Your Reference Direction",
        description: "Pick Forme, Atelier, Flow, or a hybrid combination as your starting blueprint.",
        outcome: "Aligned Visual & UX Direction",
      },
      {
        step: "02",
        title: "Customize Brand & Data Schema",
        description: "We adapt the typography, color system, product fields, and workflow rules to your business.",
        outcome: "Bespoke Product Prototype",
      },
      {
        step: "03",
        title: "Engineer Storefront & Admin",
        description: "We build the responsive frontend, self-service CMS, and enquiry/checkout engine.",
        outcome: "Production-Grade Application",
      },
      {
        step: "04",
        title: "Launch & Measure Conversion",
        description: "We deploy your platform and optimize lead capture and buyer velocity.",
        outcome: "Measurable Business Growth",
      },
    ],
    galleryCards: [
      {
        tag: "CONCEPT / WHOLESALE",
        title: "Forme Catalogue",
        description: "Product discovery + technical specifications + bulk quotation workflow.",
        image: "/images/curated/case-01-forme.jpg",
        href: "/industries/manufacturers-wholesale",
      },
      {
        tag: "CONCEPT / RETAIL",
        title: "Atelier Commerce",
        description: "Modern collection pages + visual content management + commerce upgrade path.",
        image: "/images/curated/case-02-atelier.jpg",
        href: "/industries/ecommerce",
      },
      {
        tag: "CONCEPT / SERVICES",
        title: "Flow Booking",
        description: "Service showcase + guided client intake + automated appointment workflow.",
        image: "/images/curated/case-03-flow.jpg",
        href: "/industries/service-businesses",
      },
    ],
    faqs: [
      {
        question: "Can we request a live walkthrough of Forme, Atelier, or Flow?",
        answer:
          "Yes. Reach out via our Project Explorer or Contact page and our engineering team will walk you through the interactive workflows and how they adapt to your business.",
      },
    ],
  },

  faqs: {
    slug: "faqs",
    category: "COMPANY",
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "Everything",
    titleAccent: "made clear.",
    subtitle:
      "Straightforward answers about our Silver, Gold, and Premium packages, custom project pricing, B2B quotation workflows, CMS ownership, and post-launch support.",
    heroImage: "/images/curated/city.jpg",
    heroBadge: "TRANSPARENT ANSWERS",
    primaryCtaText: "Ask Us a Question",
    secondaryCtaText: "Explore Packages",
    secondaryCtaHref: "/packages",
    metrics: [
      { value: "3 Tiers", label: "Silver, Gold & Premium modular packages" },
      { value: "100%", label: "Transparent fixed-scope project proposals" },
      { value: "Zero", label: "Hidden lock-in—full code & content control" },
      { value: "Direct", label: "Access to senior engineers & architects" },
    ],
    overviewEyebrow: "COMMON QUESTIONS BY TOPIC",
    overviewTitle: "What business owners ask us before we begin.",
    overviewLead:
      "We believe clarity builds better software. Below you'll find detailed answers covering packages, pricing, self-service content management, and ongoing support.",
    deliverables: [
      {
        tag: "PACKAGES & UPGRADES",
        title: "Choosing between Silver, Gold & Premium.",
        description:
          "Understand which foundation fits your current stage and how upgrades work as your business grows.",
        bullets: [
          "Silver: Brand website, product catalogue & WhatsApp/email enquiries",
          "Gold: Adds self-serve Admin CMS & centralized Quotation Inbox",
          "Premium: Adds online payment gateway, orders & inventory management",
        ],
      },
      {
        tag: "PRICING & TIMELINES",
        title: "How we scope and price projects transparently.",
        description:
          "No invented one-size-fits-all price tags—your proposal is scoped accurately around your actual deliverables.",
        bullets: [
          "Scoped by page templates, SKU volume, workflows & integrations",
          "Clear milestone-based payment & delivery schedule",
          "Typical launches range from 3–5 weeks (Silver) to 6–12 weeks (Gold/Premium)",
        ],
      },
      {
        tag: "OWNERSHIP & SUPPORT",
        title: "Managing your platform after launch.",
        description:
          "You control your content day-to-day while our team backs you with reliable cloud hosting and technical support.",
        bullets: [
          "Update products, images, and prices yourself without code (Gold & Premium)",
          "Hosting, domain renewals, and SLA support clearly itemized",
          "On-demand feature enhancements as your operation scales",
        ],
      },
    ],
    workflowEyebrow: "STILL HAVE A QUESTION?",
    workflowTitle: "How we move from first question to custom proposal.",
    workflowSteps: [
      {
        step: "01",
        title: "Share Your Idea or Challenge",
        description: "Use our Interactive Project Explorer or Contact page to tell us what you want to solve.",
        outcome: "Initial Discovery Brief",
      },
      {
        step: "02",
        title: "30-Minute Architecture Call",
        description: "We discuss your products, buyers, and whether Silver, Gold, Premium, or Custom fits best.",
        outcome: "Recommended Path",
      },
      {
        step: "03",
        title: "Transparent Custom Proposal",
        description: "You receive an itemized scope, timeline, and quotation with zero obligation.",
        outcome: "Complete Clarity",
      },
      {
        step: "04",
        title: "Kickoff & Design Sprint",
        description: "Once approved, we begin immediately with discovery and interactive UI prototyping.",
        outcome: "Fast Momentum",
      },
    ],
    faqs: [
      {
        question: "Can I start with Silver and upgrade to Gold or Premium later?",
        answer:
          "Yes. Packages are architected as a modular upgrade path. We confirm what carries over directly and scope only the new CMS, admin, or commerce modules when you upgrade.",
      },
      {
        question: "How do you calculate project pricing?",
        answer:
          "We scope the number of pages, products, custom workflows, third-party integrations, design complexity, delivery timeline, and support needs, then send a transparent custom quotation.",
      },
      {
        question: "Can my buyers request custom product prices instead of paying online?",
        answer:
          "Yes. Our B2B quotation workflow allows buyers to select items and quantities, submit an RFQ, and receive a seller-approved custom price from your team.",
      },
      {
        question: "Will I be able to manage my products and website content myself?",
        answer:
          "Yes. Gold and Premium include a self-service CMS and admin dashboard so you can edit product data, images, and approved pages without writing code.",
      },
      {
        question: "How are hosting, domains, and ongoing maintenance handled?",
        answer:
          "Hosting, domain ownership, maintenance, renewals, and ongoing support are clearly specified as transparent commercial terms in every proposal—you always retain ownership of your domain and assets.",
      },
    ],
  },
};
