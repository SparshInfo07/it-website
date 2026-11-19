import { ASSETS } from "@/constants/images.constants";
import { FooterData } from "@/data/footerData";

export interface DataCategoryItem {
  category: string;
  description: string;
}

export interface PrivacyPolicyData {
  title: string;
  intro: string;
  bannerImage: string;
  dataCollected: {
    heading: string;
    items: DataCategoryItem[];
  };
  howCollected: {
    heading: string;
    directIntro: string;
    directItems: string[];
    indirectIntro: string;
    indirectItems: string[];
  };
  howUsed: {
    heading: string;
    items: string[];
    note: string;
  };
  howStored: {
    heading: string;
    paragraphs: string[];
  };
  ctaSection: {
    heading: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const PRIVACY_POLICY_DATA: PrivacyPolicyData = {
  title: "Privacy Policy",
  intro:
    "This privacy policy will explain how Sparsh IT uses the personal data that we collect from you.",
  bannerImage: ASSETS.CONTACT_BANNER,
  dataCollected: {
    heading: "What Data Do We Collect?",
    items: [
      {
        category: "Personal Details",
        description:
          "Your given name(s), preferred name(s) or nickname(s), alias, and potentially your personal image should you physically visit our facility",
      },
      {
        category: "Contact Details",
        description: "Your address, telephone number, and email address",
      },
      {
        category: "Employment Details",
        description:
          "Your industry, role, business activities, names of current and former employers, work address, work telephone number, work email address, education information, and work‐related biographical information or social media profiles",
      },
      {
        category: "Characteristics",
        description:
          "Characteristics of protected classifications under applicable law, such as race, color, national origin, sex, gender, disability, citizenship status, and military and veteran status",
      },
      {
        category: "Electronic Identifying Data",
        description:
          "Unique personal identifiers (such as IP addresses, cookies, activity logs, online identifiers, unique device identifiers, beacons, pixel tags, mobile ad identifiers and similar technology, and other forms of persistent or probabilistic identifiers), Internet and other electronic network activity information, including, but not limited to, browsing history, search history, and information regarding your interaction with websites, applications or advertisements, and geolocation data",
      },
    ],
  },
  howCollected: {
    heading: "How Do We Collect Your Data?",
    directIntro:
      "You directly provide Sparsh IT with most of the data we collect. We collect data and process data from a variety of sources:",
    directItems: [
      "When you register online or place an order for any of our products or place an order for any of our products or services.",
      "When you voluntarily complete a customer survey or provide feedback on any of our message boards or via email.",
      "When you use or view our website via your web browser.",
      "When you provide it to us voluntarily when contacting us via email, by phone, or any other means.",
      "In the ordinary course of our relationship with you (e.g., where necessary to manage any interaction with us and without which we may not be able to comply with our obligations or respond adequately to a request you make).",
    ],
    indirectIntro:
      "Sparsh IT may also receive your data indirectly from the following sources:",
    indirectItems: [
      "Third parties who provide it to us (e.g., your employer or other third parties with whom you or any affiliated organization may be connected, such as one of our customers or suppliers).",
      "Publicly available sources.",
      "Online advertising companies.",
    ],
  },
  howUsed: {
    heading: "How Will We Use Your Data?",
    items: [
      "Process your service agreements and manage your account, provide customer service, process or fulfill orders and transactions, verify customer information, and process payments.",
      "Contact you by phone or email with information about other services we think you might like.",
      "Contact you by email regarding company news and events that we think you might be interested in.",
      "Market our products and Specifically, we may communicate with you via any means (including email, telephone, mail or in‐person). This may include, as appropriate: counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance; and short‐ term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction.",
      "Facilitate the operation of our Specifically, to provide content and interact with you through our websites, and to debug, identify and repair errors that impair existing and intended functionality.",
      "Ensure the physical security of our premises and other assets (including records of visits to our premises and CCTV recordings) and the electronic security of our operations (including log‐in records and access details).",
      "Comply with our legal and regulatory obligations under applicable law.",
      "Manage our career opportunities.",
    ],
    note: "We do not provide your personal data to any third party for its own marketing purposes.",
  },
  howStored: {
    heading: "How Do We Store Your Data?",
    paragraphs: [
      "We store all data, including personal data, in secure environments. We provide training to our employees on data protection best practices and require them to enter into confidentiality agreements with us. Even though we use all reasonable efforts to protect your personal data, however, we cannot guarantee the absolute security of any information that is submitted to us online or otherwise.",
      "You are responsible for ensuring that items of personal data that you send to us are sent securely. Except as otherwise permitted or required by applicable law or regulation, Sparsh IT will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, as required to satisfy any legal, accounting, or reporting obligations, or as necessary to resolve any dispute or enforce any legal right. To determine the appropriate retention period for personal data, we consider our statutory obligations, the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the reasons why we process your personal data, and whether we can achieve those purposes through other means. Personal data that is no longer needed is either irreversibly anonymized (and the anonymized information will be retained) or securely destroyed.",
    ],
  },
  ctaSection: {
    heading:
      "Get in Touch with Us to Discuss How We Can Help Your Business Succeed",
    buttonText: "Contact Us",
    buttonHref: "/contact-us",
  },
};

export const PRIVACY_POLICY_FOOTER_DATA: FooterData = {
  title:
    "Get in Touch with Us to Discuss How We Can Help Your Business Succeed",
  primaryLabel: "Contact Us",
  primaryLink: "/contact-us",
  backgroundImage: ASSETS.FOOTER_CTA_BANNER,
};

