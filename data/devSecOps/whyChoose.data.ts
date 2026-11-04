import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const DEVSECOPS_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Why Businesses Choose Sparsh IT <br /> For DevSecOps",
  subheading:
    "We unite engineering speed with enterprise-grade security, ensuring compliance and dependability at every stage of the software lifecycle.",
  cards: [
    {
      id: "shift-left-security",
      number: "01",
      title: "Continuous Integration & Delivery Architecture",
      description:
        "Engineer sophisticated CI/CD pipelines that integrate build orchestration, automated validation, deployment governance, and repeatable release processes.",
      icon: ASSETS.DEVSECOPS_WHY_CHOOSE_1,
    },
    {
      id: "scalable-cicd-automation",
      number: "02",
      title: "Infrastructure Automation & Configuration Engineering",
      description:
        "Establish infrastructure-as-code frameworks and automated configuration practices that promote environmental consistency, traceability, and controlled infrastructure evolution.",
      icon: ASSETS.DEVSECOPS_WHY_CHOOSE_2,
    },
    {
      id: "compliance-and-governance",
      number: "03",
      title: "Containerization & Kubernetes Engineering",
      description:
        "Architect containerized deployment ecosystems and orchestration frameworks that support distributed workloads, resource optimization, and scalable application operations.",
      icon: ASSETS.DEVSECOPS_WHY_CHOOSE_3,
    },
    {
      id: "collaborative-devsecops-culture",
      number: "04",
      title: "DevSecOps Security Orchestration",
      description:
        "Integrate application security testing, dependency governance, secrets management, and appropriate security policies into continuous engineering workflows.",
      icon: ASSETS.DEVSECOPS_WHY_CHOOSE_4,
    },
    {
      id: "cloud-native-resilience",
      number: "05",
      title: "Platform Engineering & Developer Enablement",
      description:
        "Develop reusable internal platforms, standardized engineering templates, and self-service capabilities that streamline development activities and reduce platform-related complexity.",
      icon: ASSETS.DEVSECOPS_WHY_CHOOSE_5,
    },
    {
      id: "end-to-end-observability",
      number: "06",
      title: "Site Reliability & Observability Engineering",
      description:
        "Establish telemetry, monitoring, incident response, and reliability practices that strengthen operational awareness and support sustained service performance.",
      icon: ASSETS.DEVSECOPS_WHY_CHOOSE_6,
    },
  ],
};

export const devSecOpsWhyChooseData = DEVSECOPS_WHY_CHOOSE_DATA;
