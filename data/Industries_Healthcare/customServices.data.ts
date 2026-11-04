import { ASSETS } from "@/constants/images.constants";
import type { CustomAppServicesData } from "@/data/application-development/customAppServices.data";

export const HEALTHCARE_SERVICES_DATA: CustomAppServicesData = {
  heading: "Comprehensive Healthcare & Life Sciences Engineering Services",
  subheading: "Engineering Digital Foundations for the Future of Healthcare.",
  description:
    "We combine healthcare domain understanding, advanced engineering, and intelligent technology capabilities to modernize clinical environments and strengthen healthcare interoperability.",
  cards: [
    {
      id: "digital-healthcare-modernization",
      title: "01. Digital Healthcare Modernization",
      description:
        "Rearchitecting Clinical Technology for Connected Care.\n\nWe modernize healthcare platforms through scalable architectures, interoperable applications, and resilient digital infrastructure.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "clinical-interoperability-engineering",
      title: "02. Clinical Interoperability Engineering",
      description:
        "Connecting Information Across Complex Care Ecosystems.\n\nWe establish standards-oriented integration capabilities that support secure clinical information exchange across healthcare platforms.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
    {
      id: "ai-assisted-clinical-operations",
      title: "03. AI-Assisted Clinical Operations",
      description:
        "Advancing Healthcare Workflows Through Intelligent Automation.\n\nWe introduce governed AI capabilities, intelligent documentation workflows, and operational decision-support solutions to enhance clinical efficiency.",
      icon: ASSETS.WHY_CHOOSE_CLIENT_CENTRIC,
    },
    {
      id: "virtual-care-digital-engagement",
      title: "04. Virtual Care & Digital Engagement",
      description:
        "Extending Healthcare Beyond Traditional Boundaries.\n\nWe engineer connected telehealth platforms, patient engagement environments, and integrated digital care experiences.",
      icon: ASSETS.WHY_CHOOSE_DELIVERY,
    },
    {
      id: "healthcare-data-intelligence",
      title: "05. Healthcare Data Intelligence",
      description:
        "Transforming Clinical Information Into Meaningful Insight.\n\nWe establish governed data platforms, advanced analytics capabilities, and integrated information architectures supporting healthcare operations.",
      icon: ASSETS.WHY_CHOOSE_EXPERTISE,
    },
    {
      id: "healthcare-security-quality-engineering",
      title: "06. Healthcare Security & Quality Engineering",
      description:
        "Institutionalizing Digital Trust Across Care Environments.\n\nWe embed privacy-conscious engineering, application assurance, identity governance, and security controls into sensitive healthcare technology ecosystems.",
      icon: ASSETS.WHY_CHOOSE_SOLUTIONS,
    },
  ],
};

export const healthcareServicesData = HEALTHCARE_SERVICES_DATA;

