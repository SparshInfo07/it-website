import { ASSETS } from "@/constants/images.constants";
import { FooterData } from "@/data/footerData";

export interface CookiePolicyData {
  title: string;
  bannerImage: string;
  sections: {
    id: string;
    heading: string;
    paragraphs?: string[];
    listIntro?: string;
    listItems?: string[];
    cookieTypes?: {
      title: string;
      description: string;
    }[];
    contactDetails?: {
      emailIntro?: string;
      email: string;
      phone: string;
      address: string;
    };
  }[];
  ctaSection: {
    heading: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const COOKIE_POLICY_DATA: CookiePolicyData = {
  title: "Cookie Policy",
  bannerImage: ASSETS.CONTACT_BANNER,
  sections: [
    {
      id: "what-are-cookies",
      heading: "What Are Cookies?",
      paragraphs: [
        "Cookies are text files placed on your computer to collect standard internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology. For further information, visit https://sparshit.com/.",
      ],
    },
    {
      id: "how-do-we-use-cookies",
      heading: "How Do We Use Cookies?",
      listIntro:
        "Sparsh IT uses cookies in a range of ways to improve your experience on our website, including:",
      listItems: [
        "Keeping you signed in",
        "Understanding how you use our website",
        "Improving our website and making it more user‐friendly",
      ],
    },
    {
      id: "what-types-of-cookies-do-we-use",
      heading: "What Types of Cookies Do We Use?",
      listIntro:
        "There are a number of different types of cookies, however, our website uses:",
      cookieTypes: [
        {
          title: "Functionality",
          description:
            "Sparsh IT uses these cookies so that we recognize you on our website and remember your previously selected preferences. These could include what language you prefer and location you are in. A mix of first‐party and third‐party cookies are used.",
        },
        {
          title: "Advertising",
          description:
            "Sparsh IT uses these cookies to collect information about your visit to our website, the content you viewed, the links you followed, and information about your browser, device, and your IP address.",
        },
      ],
    },
    {
      id: "how-to-manage-cookies",
      heading: "How to Manage Cookies",
      paragraphs: [
        "You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.",
      ],
    },
    {
      id: "privacy-policies-of-other-websites",
      heading: "Privacy Policies of Other Websites",
      paragraphs: [
        "The Sparsh IT website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.",
      ],
    },
    {
      id: "how-to-contact-us",
      heading: "How to Contact Us",
      paragraphs: [
        "If you have any questions about Sparsh IT’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.",
      ],
      contactDetails: {
        email: "support@sparshinfosystem.com",
        phone: "+91-120-4458701",
        address: "A-121, Sahni Tower, Block-A, Sector-5, Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh - 201005",
      },
    },
  ],
  ctaSection: {
    heading:
      "Get in Touch with Us to Discuss How We Can Help Your Business Succeed",
    buttonText: "Contact Us",
    buttonHref: "/contact-us",
  },
};

export const COOKIE_POLICY_FOOTER_DATA: FooterData = {
  title:
    "Get in Touch with Us to Discuss How We Can Help Your Business Succeed",
  primaryLabel: "Contact Us",
  primaryLink: "/contact-us",
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
};

