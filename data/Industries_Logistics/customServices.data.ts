import { ASSETS } from "@/constants/images.constants";
import type { CustomAppServicesData } from "@/data/application-development/customAppServices.data";

export const LOGISTICS_SERVICES_DATA: CustomAppServicesData = {
  heading: "Comprehensive Travel & Transportation Engineering Services",
  subheading: "Engineering Intelligence Across the Mobility Value Chain.",
  description:
    "We integrate transportation domain understanding, advanced digital platforms, and data-driven innovation to modernize complex mobility operations and establish connected enterprise ecosystems.",
  cards: [
    {
      id: "transportation-platform-modernization",
      title: "01. Transportation Platform Modernization",
      description:
        "Rearchitecting Mobility Infrastructure for Digital Advancement.\n\nWe modernize transportation systems through modular applications, connected enterprise platforms, and scalable technology foundations.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "intelligent-fleet-engineering",
      title: "02. Intelligent Fleet Engineering",
      description:
        "Advancing Asset Visibility and Operational Intelligence.\n\nWe integrate connected fleet platforms, vehicle information, operational analytics, and maintenance intelligence capabilities.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "predictive-mobility-optimization",
      title: "03. Predictive Mobility Optimization",
      description:
        "Transforming Transportation Data Into Strategic Foresight.\n\nWe apply AI-assisted analytics and intelligent optimization to support routing, scheduling, capacity planning, and resource utilization.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "digital-travel-platform-engineering",
      title: "04. Digital Travel Platform Engineering",
      description:
        "Elevating Travel Experiences Through Connected Technology.\n\nWe develop sophisticated reservation environments, itinerary management capabilities, and integrated travel service platforms.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
    {
      id: "logistics-ecosystem-integration",
      title: "05. Logistics Ecosystem Integration",
      description:
        "Connecting Operations Across Complex Supply Networks.\n\nWe establish interoperable architectures linking transportation management, shipment operations, and enterprise logistics applications.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "real-time-transportation-intelligence",
      title: "06. Real-Time Transportation Intelligence",
      description:
        "Enabling Continuous Visibility Across Distributed Operations.\n\nWe engineer event-driven data environments, operational dashboards, and connected information platforms.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
  ],
};

export const logisticsServicesData = LOGISTICS_SERVICES_DATA;

