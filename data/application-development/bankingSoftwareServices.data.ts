import { ASSETS } from "@/constants/images.constants";

export interface BankingSoftwareServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface BankingSoftwareServicesData {
  heading: string;
  subheading?: string;
  services: BankingSoftwareServiceItem[];
}

export const BANKING_SOFTWARE_SERVICES_DATA: BankingSoftwareServicesData = {
  heading: "Our Banking & Financial Software Services",
  services: [
    {
      id: "custom-software-development",
      number: "01",
      title: "Custom Software Development",
      description:
        "Expertly integrating diverse systems and implementing middleware solutions, API management, and data synchronization for seamless data exchange and interoperability across banking processes.",
      image: ASSETS.BANKING_CUSTOM_SOFTWARE,
    },
    {
      id: "system-integration-and-implementation",
      number: "02",
      title: "System Integration and Implementation",
      description:
        "Seamlessly connecting core banking platforms, payment gateways, and third-party fintech ecosystems with scalable microservices and robust API architectures.",
      image: ASSETS.BANKING_SYSTEM_INTEGRATION,
    },
    {
      id: "application-maintenance-and-support",
      number: "03",
      title: "Application Maintenance and Support",
      description:
        "Continuous 24/7 system monitoring, rapid incident response, proactive performance tuning, and automated maintenance pipelines ensuring zero downtime across financial workflows.",
      image: ASSETS.BANKING_APP_MAINTENANCE,
    },
    {
      id: "data-security-and-compliance",
      number: "04",
      title: "Data Security and Compliance",
      description:
        "Implementing zero-trust architecture, advanced data encryption, regulatory compliance (PCI-DSS, GDPR), and audit-ready governance for sensitive financial transactions.",
      image: ASSETS.BANKING_DATA_SECURITY,
    },
  ],
};

export const bankingSoftwareServicesData = BANKING_SOFTWARE_SERVICES_DATA;
