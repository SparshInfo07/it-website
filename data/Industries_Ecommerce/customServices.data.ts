import { ASSETS } from "@/constants/images.constants";
import type { CustomAppServicesData } from "@/data/application-development/customAppServices.data";

export const ECOMMERCE_SERVICES_DATA: CustomAppServicesData = {
  heading: "Comprehensive Retail & E-Commerce Engineering Services",
  subheading:
    "Architecting intelligent commerce for an experience-driven economy.",
  description:
    "We converge digital commerce expertise, customer intelligence, and advanced engineering to transform retail technology landscapes and establish connected commercial ecosystems.",
  cards: [
    {
      id: "digital-commerce-modernization",
      title: "01. Digital Commerce Modernization",
      description:
        "Rearchitecting Commerce for Enterprise Agility.\n\nWe engineer composable commerce platforms, modular storefront architectures, and scalable transaction ecosystems that support evolving business models.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "omnichannel-experience-engineering",
      title: "02. Omnichannel Experience Engineering",
      description:
        "Connecting Every Interaction Across the Commerce Journey.\n\nWe integrate physical retail, digital storefronts, customer engagement platforms, and fulfillment environments into cohesive commerce ecosystems.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "ai-enhanced-customer-intelligence",
      title: "03. AI-Enhanced Customer Intelligence",
      description:
        "Transforming Behavioral Insights Into Personalized Experiences.\n\nWe integrate intelligent recommendations, customer analytics, and AI-assisted engagement capabilities to elevate digital commerce interactions.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "intelligent-inventory-merchandising",
      title: "04. Intelligent Inventory & Merchandising",
      description:
        "Advancing Retail Precision Through Predictive Intelligence.\n\nWe develop integrated inventory platforms, forecasting capabilities, and merchandise intelligence solutions that strengthen operational visibility.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
    {
      id: "commerce-transaction-engineering",
      title: "05. Commerce Transaction Engineering",
      description:
        "Engineering Confidence Across Digital Transactions.\n\nWe modernize checkout architectures, payment integrations, and transaction workflows to establish secure, reliable commerce experiences.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "retail-data-intelligence",
      title: "06. Retail Data Intelligence",
      description:
        "Converting Commerce Complexity Into Strategic Insight.\n\nWe unify transactional, customer, product, and operational data through advanced engineering and analytics capabilities.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
  ],
};

export const ecommerceServicesData = ECOMMERCE_SERVICES_DATA;

