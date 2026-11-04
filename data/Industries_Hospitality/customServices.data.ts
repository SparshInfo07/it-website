import { ASSETS } from "@/constants/images.constants";
import type { CustomAppServicesData } from "@/data/application-development/customAppServices.data";

export const HOSPITALITY_SERVICES_DATA: CustomAppServicesData = {
  heading: "Comprehensive Hospitality & Leisure Engineering Services",
  subheading:
    "Engineering sophisticated experiences across hospitality ecosystems.",
  description:
    "We integrate hospitality domain intelligence, digital experience engineering, and advanced technology capabilities to transform service operations and connected guest journeys.",
  cards: [
    {
      id: "hospitality-platform-transformation",
      title: "01. Hospitality Platform Transformation",
      description:
        "Modernizing Digital Foundations for Service Excellence.\n\nWe engineer scalable hospitality applications, integrated technology architectures, and connected service environments.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "property-ecosystem-integration",
      title: "02. Property Ecosystem Integration",
      description:
        "Unifying Operations Across Hospitality Platforms.\n\nWe integrate property management, reservation systems, customer information, and enterprise operational applications.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "intelligent-guest-personalization",
      title: "03. Intelligent Guest Personalization",
      description:
        "Elevating Engagement Through AI-Enhanced Intelligence.\n\nWe apply customer insights, intelligent recommendations, and personalized digital capabilities to support distinctive guest experiences.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "digital-booking-reservation-engineering",
      title: "04. Digital Booking & Reservation Engineering",
      description:
        "Orchestrating Seamless Guest Journeys.\n\nWe develop integrated booking architectures, reservation management platforms, and secure digital transaction capabilities.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
    {
      id: "intelligent-hospitality-operations",
      title: "05. Intelligent Hospitality Operations",
      description:
        "Advancing Service Efficiency Through Connected Automation.\n\nWe establish digital workflows, operational coordination platforms, and intelligent service management capabilities.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "hospitality-data-intelligence",
      title: "06. Hospitality Data Intelligence",
      description:
        "Transforming Guest Information Into Strategic Insight.\n\nWe integrate reservation, customer, property, and operational information through advanced data engineering and analytics.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
  ],
};

export const hospitalityServicesData = HOSPITALITY_SERVICES_DATA;

